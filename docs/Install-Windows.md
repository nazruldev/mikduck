# Install di Windows

## Pilih paket

Unduh dari [Releases (Latest)](https://github.com/nazruldev/mikduck/releases/latest):

| File | Kapan dipakai |
|------|----------------|
| **`mikduck-Setup-*.exe`** | Installer biasa (disarankan) — shortcut, uninstaller, update di tempat |
| **`mikduck-Portable-*.exe`** | Tanpa install — cocok USB / PC tanpa hak admin |

Hanya **versi terbaru** yang ditawarkan di website/app (sama seperti auto-update).

## Cara A — Setup (disarankan)

1. Buka halaman [Releases](https://github.com/nazruldev/mikduck/releases/latest)
2. Unduh **`mikduck-Setup-….exe`**
3. Jalankan file → ikuti wizard (Next / Install)
4. Jika Windows SmartScreen muncul: **More info** → **Run anyway** (build belum signed / publisher baru)
5. Buka **mikduck** dari Start Menu / desktop

### Uninstall

- **Settings → Apps → mikduck → Uninstall**, atau  
- Uninstaller di folder instalasi

## Cara B — Portable

1. Unduh **`mikduck-Portable-….exe`**
2. Simpan di folder yang bisa ditulis (mis. `D:\Apps\mikduck\`)
3. Double-click untuk menjalankan — **tidak** menulis ke Program Files
4. Data/config ikut di area user data Electron (bukan selalu di samping exe)

> Portable tetap butuh akses jaringan ke MikroTik.

## Setelah install

1. Login aplikasi (buat akun lokal pertama kali jika diminta)
2. Tambah router — lihat [Connect MikroTik](./Connect-MikroTik.md)
3. (Opsional) Settings → Preference → **Channel update** (`stable` / `beta` / …)

## Update di Windows

- App bisa cek update dari GitHub Releases (channel sesuai Preference)
- Atau unduh Setup terbaru dari Releases lalu install di atas versi lama

## Microsoft Store

Jika tersedia di Store, update mengikuti kebijakan Store. Build GitHub Releases tetap sumber utama open-source.

## Masalah umum Windows

Lihat [Troubleshooting](./Troubleshooting.md).
