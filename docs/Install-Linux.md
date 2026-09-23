# Install di Linux

## Pilih paket

Dari [Releases (Latest)](https://github.com/nazruldev/mikduck/releases/latest):

| File | Distro / cara |
|------|----------------|
| **`mikduck-*.AppImage`** | Hampir semua distro desktop amd64 — jalankan langsung |
| **`mikduck_*_amd64.deb`** | Debian, Ubuntu, Linux Mint, Pop!_OS, dll. |

Arsitektur: **amd64** (x86_64).

## Cara A — AppImage

```bash
# unduh lalu:
chmod +x mikduck-*.AppImage
./mikduck-*.AppImage
```

### Jika AppImage gagal (FUSE)

Ubuntu / Debian:

```bash
sudo apt update
sudo apt install -y libfuse2
```

Atau ekstrak & jalankan (tanpa FUSE) jika tool AppImage mendukung `--appimage-extract` — tergantung bundling Electron.

Opsional — daftarkan ke menu aplikasi: gunakan AppImageLauncher atau buat `.desktop` sendiri yang menunjuk ke path AppImage.

## Cara B — Debian package (`.deb`)

```bash
sudo apt update
sudo dpkg -i mikduck_*_amd64.deb
sudo apt-get install -f   # jika ada dependency kurang
```

Lalu jalankan dari menu aplikasi atau:

```bash
mikduck
```

### Uninstall `.deb`

```bash
sudo apt remove mikduck
```

## Firewall / SELinux

Pastikan PC Linux boleh keluar ke IP MikroTik port API (default **8728/tcp**).

## Update di Linux

- Unduh AppImage / `.deb` terbaru dari Releases, atau  
- Ikuti prompt update di dalam app (channel Preference)

Untuk `.deb`, install ulang paket baru menimpa versi lama.

## Wayland / X11

Electron biasanya berjalan di X11 atau via XWayland. Jika window kosong/crash di Wayland murni, coba sesi X11 atau set:

```bash
ELECTRON_OZONE_PLATFORM_HINT=auto ./mikduck-*.AppImage
```

## Masalah umum Linux

Lihat [Troubleshooting](./Troubleshooting.md).
