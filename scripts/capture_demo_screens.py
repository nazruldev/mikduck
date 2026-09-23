from pathlib import Path
from playwright.sync_api import sync_playwright

OUT = Path(r"d:\ISENG-IDEA\mikrotik\website\assets\screenshots")
OUT.mkdir(parents=True, exist_ok=True)

PANELS = [
    "dashboard",
    "quick-print",
    "finance",
    "vouchers",
    "profiles",
    "active",
    "cookies",
    "tpl-login",
    "tpl-voucher",
    "dhcp",
    "queues",
    "tools",
    "services",
    "device",
    "settings",
    "settings-pref",
]


def main() -> None:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 720}, device_scale_factor=1)
        page.goto("http://127.0.0.1:5500/demo.html", wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(900)
        page.add_style_tag(
            content=(
                ".demo-banner{display:none!important}"
                ".demo-app{height:100vh!important;min-height:100vh!important}"
            )
        )

        # Force-open all nav groups
        page.evaluate(
            """() => {
              document.querySelectorAll('.demo-nav-group').forEach((g) => g.classList.add('is-open'));
              document.querySelectorAll('.demo-nav-children').forEach((c) => {
                c.style.display = 'block';
                c.hidden = false;
              });
            }"""
        )
        page.wait_for_timeout(200)

        for pid in PANELS:
            btn = page.locator(f'[data-panel="{pid}"]').first
            if btn.count() == 0:
                print("skip missing", pid)
                continue
            try:
                btn.click(timeout=4000, force=True)
            except Exception as exc:
                print("click fail", pid, exc)
                continue
            page.wait_for_timeout(450)
            path = OUT / f"{pid}.png"
            page.locator("#demo-app").screenshot(path=str(path))
            print("saved", path.name, path.stat().st_size)

        browser.close()
    print("done")


if __name__ == "__main__":
    main()
