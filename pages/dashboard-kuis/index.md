📊 Quiz Dashboard Lite
======================

Elemen `<quiz-dashboard-lite>` adalah dashboard kuis ringan dengan tiga tab navigasi yang menggabungkan kuis interaktif, pelacakan kehadiran, dan panduan. Tanpa Firebase — cocok untuk deployment sederhana.

🧪 Demo Langsung
----------------

Coba dashboard kuis di bawah ini:

📋 Atribut
----------

Dashboard ini tidak memerlukan atribut khusus. Semua konfigurasi (seperti Google Sheets) dilakukan melalui UI-nya langsung.

🖥️ Cara Penggunaan
-------------------

    <quiz-dashboard-lite></quiz-dashboard-lite>

🗂️ Tab Navigasi
----------------

Tab

Deskripsi

📝 Ambil Kuis

Menampilkan komponen `explode-quiz` untuk mengerjakan kuis

📅 Kehadiran & Aktivitas

Menampilkan `attendance-tracker`, `engagement-score`, dan `transparent-gradebook`

📖 Panduan

Panduan singkat penggunaan kuis dan Google Sheets

🛠️ Fitur
---------

*   **Tanpa Firebase:** Tidak memerlukan autentikasi Google
*   **Google Sheets Opsional:** Kuis tetap berfungsi tanpa spreadsheet
*   **Three-tab Layout:** Kuis, Kehadiran, Panduan
*   **Notifikasi Real-time:** Pesan sukses/gagal saat menghubungkan sheet dan menyimpan hasil
*   **Responsif:** Desain adaptif untuk berbagai ukuran layar

⚙️ Menghubungkan Google Sheets
------------------------------

1.  Buka tab **📝 Ambil Kuis**
2.  Masukkan ID atau URL Google Spreadsheet di bagian atas
3.  Klik **Hubungkan**
4.  Hasil kuis akan otomatis tersimpan

📦 Komponen yang Digunakan
--------------------------

Dashboard ini secara internal menggunakan komponen-komponen berikut:

*   `<explode-quiz>` — Komponen kuis interaktif
*   `<activity-logger>` — Pencatat aktivitas otomatis
*   `<attendance-tracker>` — Pelacak kehadiran pekanan
*   `<engagement-score>` — Heatmap konsistensi belajar
*   `<transparent-gradebook>` — Buku nilai transparan