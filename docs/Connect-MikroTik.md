# Hubungkan ke MikroTik

mikduck memakai **RouterOS API** (bukan Winbox GUI).

## 1. Aktifkan API di router

Contoh (Winbox / Terminal):

```text
/ip service
set api disabled=no port=8728
```

atau pastikan service **api** enabled di **IP → Services**.

- Port default: **8728**
- Opsional: batasi `address` hanya ke IP PC yang menjalankan mikduck

## 2. User API

Buat / pakai user yang boleh akses hotspot (dan fitur yang Anda butuhkan):

```text
/user
add name=mikduck group=full password="******"
```

Untuk produksi, lebih aman pakai group terbatas (bukan `full`) sesuai kebijakan Anda.

## 3. Jaringan

Dari PC mikduck:

```bash
# Linux / macOS / Git Bash
ping <IP-ROUTER>
# pastikan port terbuka (contoh)
nc -vz <IP-ROUTER> 8728
```

Windows: `Test-NetConnection <IP-ROUTER> -Port 8728` di PowerShell.

## 4. Di aplikasi mikduck

1. Buka mikduck → login app
2. **Pilih / tambah router**: host (IP), port (`8728`), user, password API
3. Connect → jika sukses, masuk Dashboard

## Multi-router

Simpan beberapa router di app, lalu switch dari UI (Switch Router).

## Keamanan singkat

- Jangan expose API ke internet publik tanpa VPN / firewall ketat
- Gunakan password kuat
- Prefer koneksi LAN atau VPN ke kantor/warnet

## Demo tanpa router

Coba UI dulu: [Live Demo](https://nazruldev.github.io/mikduck/demo.html) (data fiktif).
