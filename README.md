# Angkringan 823

Website profil & galeri **Angkringan 823** — tugas akhir mata kuliah Desain Web.

## Halaman

| File | Isi |
|---|---|
| `index.html` | Beranda (hero, menu unggulan, widget cuaca) |
| `service.html` | Daftar produk & menu |
| `gallery.html` | Galeri foto |
| `about.html` | Tentang |
| `contact.html` | Kontak |

## Teknologi

HTML + CSS (Bootstrap 5 via CDN) + JavaScript vanilla. Tanpa framework build.

## Menjalankan

Buka `index.html` langsung di browser, atau:

```bash
python3 -m http.server 8080
# buka http://localhost:8080
```

## Struktur

```
assets/
├── galeri/      # foto galeri (WebP)
├── home/        # hero + gambar widget cuaca
├── logo/
├── produk/      # bakar, makanan, minuman, menu
└── tentang/
```

Semua aset gambar sudah di-optimasi ke WebP (quality 82).
