📊 Dashboard Siswa — Lihat Nilai & Aktivitas dari Google Sheets
===============================================================

Halaman ini mengambil data **langsung dari Google Sheets** via Apps Script API. Masukkan URL Apps Script dan nama Anda untuk melihat data kuis, aktivitas, dan leaderboard secara real-time.

* * *

📊 Cara Kerja
-------------

1.  **Masukkan URL Apps Script** — sama dengan yang dipakai di dashboard kuis
2.  **Masukkan nama Anda** — data dicocokkan dengan nama di sheet
3.  **Klik Tampilkan** — fetch data dari Apps Script API GET endpoint
4.  **Jelajahi tab:** Leaderboard, Kuis Saya, Aktivitas Saya, Pertemuan

### Endpoint API yang Digunakan:

Action

URL

Return

leaderboard

`?action=leaderboard`

Semua siswa dari sheet Rangkuman

summary

`?action=summary&name=Andi`

Data satu siswa

pertemuan

`?action=pertemuan&sheet=Pertemuan 1`

Semua siswa di pertemuan

aktivitas

`?action=aktivitas&sheet=Pertemuan 1&name=Andi`

Log aktivitas siswa

list

`?action=list`

Daftar sheet tab

🔗 Halaman Terkait
------------------

*   [📖 Tutorial: Cara Fetch Data dari Sheet](tutorial-dashboard-siswa)
*   [📊 Tutorial: 1 Sheet = 1 Pertemuan](tutorial-sheet-per-pertemuan)