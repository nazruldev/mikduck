from pathlib import Path
from playwright.sync_api import sync_playwright

OUT = Path(r"d:\ISENG-IDEA\mikrotik\website\assets\screenshots")
NEED = ["tpl-login", "tpl-voucher", "settings", "settings-pref"]


def main() -> None:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 720})
        page.goto("http://127.0.0.1:5500/demo.html", wait_until="networkidle")
        page.wait_for_timeout(800)
        page.add_style_tag(
            content=".demo-banner{display:none!important}.demo-app{height:100vh!important}"
        )
        for pid in NEED:
            page.evaluate(
                """(id) => {
                  document.querySelectorAll('.demo-nav-group').forEach((g) => g.classList.add('open'));
                  const btn = document.querySelector(`[data-panel="${id}"]`);
                  if (btn) btn.click();
                }""",
                pid,
            )
            page.wait_for_timeout(400)
            path = OUT / f"{pid}.png"
            page.locator("#demo-app").screenshot(path=str(path))
            print("saved", path.name, path.stat().st_size)
        browser.close()


if __name__ == "__main__":
    main()
