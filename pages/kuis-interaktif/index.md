🎯 Explode Quiz — Kuis Interaktif
=================================

Elemen `<explode-quiz>` adalah komponen kuis interaktif pilihan ganda yang dilengkapi efek konfeti, editor soal bawaan, dan integrasi Google Sheets untuk menyimpan hasil kuis secara real-time.

🧪 Demo Langsung
----------------

Coba kuis interaktif di bawah ini:

📋 Atribut yang Didukung
------------------------

Atribut

Tipe

Deskripsi

Default

`spreadsheet-id`

String

ID Google Spreadsheet untuk menyimpan hasil

—

`apps-script-url`

String

URL Google Apps Script endpoint

—

`editable`

Boolean

Tampilkan tombol edit soal

false

`questions`

JSON Array

Daftar soal kustom (JSON string)

3 soal default

🖥️ Cara Penggunaan
-------------------

### Tag Dasar

    <explode-quiz></explode-quiz>

Menggunakan 3 soal default tentang pengetahuan umum.

### Dengan Google Sheets

    <explode-quiz spreadsheet-id="YOUR_SHEET_ID" editable="true"></explode-quiz>

### Dengan Google Apps Script URL

    <explode-quiz apps-script-url="https://script.google.com/macros/s/.../exec"></explode-quiz>

🛠️ Fitur
---------

*   **3 Layar:** Input Nama → Soal Kuis → Hasil
*   **Efek Konfeti:** Animasi saat jawaban benar dan skor ≥ 80%
*   **Editor Soal:** Tambah, edit, hapus soal (dengan mode editable)
*   **Sinkronisasi Google Sheets:** Hasil otomatis tersimpan
*   **Aksesibilitas:** aria-label lengkap, keyboard navigation
*   **Responsif:** Layout adaptif untuk mobile

📊 Format Data di Google Sheets
-------------------------------

Kolom A

Kolom B

Kolom C

Timestamp

Nama Siswa

Skor (%)

🎨 Kustomisasi Soal
-------------------

Klik tombol **"Edit Soal Kuis"** di layar hasil (jika `editable="true"`) untuk membuka panel editor. Anda dapat:

1.  Menambah soal baru dengan 4 pilihan jawaban
2.  Mengedit soal yang sudah ada
3.  Menghapus soal (minimal 3 soal)
4.  Menyimpan perubahan