# Troubleshooting

## Tidak bisa connect ke router

1. API enabled? Port benar? ([Connect MikroTik](./Connect-MikroTik.md))
2. Ping / `Test-NetConnection` ke IP:port
3. User/password API benar (bukan hanya user Winbox webfig kalau beda)
4. Firewall router / PC memblokir?
5. RouterOS sedang high CPU / API overloaded?

## Windows SmartScreen / “Unknown publisher”

Build mungkin belum code-sign. Pilih **More info → Run anyway** jika Anda mengunduh dari Releases resmi `nazruldev/mikduck`.

## AppImage tidak jalan

```bash
sudo apt install -y libfuse2
chmod +x mikduck-*.AppImage
./mikduck-*.AppImage
```

## `.deb` error dependency

```bash
sudo apt-get install -f
sudo dpkg -i mikduck_*_amd64.deb
```

## Printer tidak muncul

- Install driver di OS dulu
- Restart mikduck
- Cek Settings → Print

## Update tidak muncul

- Channel Preference = **stable** tidak melihat prerelease
- Cek koneksi internet ke `github.com`
- Bandingkan versi di About / Dashboard dengan [Releases](https://github.com/nazruldev/mikduck/releases)

## Lupa password login app

Akun aplikasi lokal — lihat FAQ website: [faq.html](https://nazruldev.github.io/mikduck/faq.html). Reset biasanya melibatkan data lokal user (hati-hati backup).

## Butuh bantuan

- [FAQ](https://nazruldev.github.io/mikduck/faq.html)
- [Issues](https://github.com/nazruldev/mikduck/issues) di repo publik
