# System requirements

## PC / laptop (aplikasi mikduck)

| Komponen | Minimum | Disarankan |
|----------|---------|------------|
| **OS** | Windows 10 (64-bit) · Ubuntu 20.04+ / Debian 11+ (amd64) | Windows 11 · Ubuntu 22.04+ |
| **CPU** | 2 core x64 | 4 core |
| **RAM** | 4 GB | 8 GB |
| **Disk** | ~500 MB bebas (installer + data lokal) | 1 GB+ |
| **Layar** | 1280×720 | 1440×900 atau lebih |
| **Jaringan** | Akses LAN/VPN ke IP MikroTik (port API) | Koneksi stabil ke router |

### Windows

- **Windows 10** atau **Windows 11**, edisi 64-bit (x64)
- Hak install (Setup) atau cukup tulis folder (Portable)
- Opsional: printer thermal (USB/network) untuk cetak voucher

### Linux

- Distro **amd64** (x86_64)
- **AppImage**: FUSE biasanya sudah ada; jika gagal jalankan, pasang `libfuse2` (Ubuntu/Debian)
- **`.deb`**: Debian / Ubuntu (dan turunan apt)
- Library GUI umum (GTK) — biasanya sudah terpasang di desktop environment

> Build resmi saat ini: **Windows x64** + **Linux amd64**.  
> ARM (Raspberry Pi / Apple Silicon via VM) belum jadi target utama Releases.

## Router MikroTik

| Item | Keterangan |
|------|------------|
| **RouterOS** | v6 / v7 yang mendukung **API** (bukan hanya Winbox) |
| **Layanan API** | Aktif, biasanya port **8728** (atau custom) |
| **User** | User dengan hak akses hotspot / API yang dibutuhkan |
| **Firewall** | PC yang menjalankan mikduck harus bisa menjangkau IP:port API |

Tanpa API aktif, mikduck **tidak bisa** terhubung ke router.

## Printer (opsional)

- Thermal 58mm / 80mm, atau printer A4 biasa
- Driver printer OS harus terpasang
- Di app: Settings → Print untuk mode thermal / default / keduanya

## Yang tidak diperlukan

- ❌ PHP / Apache / Nginx
- ❌ Database server eksternal (data lokal di perangkat Anda)
- ❌ Docker (kecuali Anda self-host sesuatu di luar app)

## Lisensi

Aplikasi: **AGPL-3.0** — lihat [LICENSE](https://github.com/nazruldev/mikduck/blob/master/LICENSE).
