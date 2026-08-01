🎯 Kuis AKM Campuran (Literasi + Numerasi)
==========================================

Halaman kuis Asesmen Kompetensi Minimum dengan tipe soal campuran: pilihan ganda (PG), pilihan ganda kompleks (PGK), menjodohkan (matching), dan isian singkat (short answer). Soal bisa dibuat otomatis dari **template lokal** atau dari **Bank Soal** di Google Sheets.

✨ Generator Soal
----------------

Masuk sebagai dosen lalu buka tab **🛠️ Console Dosen**. Dua tombol baru tersedia:

*   **✨ Generate Soal Template Lokal** — soal acak dari bank template bawaan elemen (tanpa perlu koneksi server).
*   **🗂️ Generate Soal dari Bank Soal** — membaca sheet `Bank Soal` pada spreadsheet aktif via action Apps Script `getBankSoal`.

Soal hasil generate langsung dimuat ke kuis di tab **📝 Ambil Kuis**.

🧪 Demo Langsung
----------------

Coba dashboard di bawah ini (mode dosen agar tombol generator muncul):

🗂️ Struktur Sheet "Bank Soal"
------------------------------

Buat tab `Bank Soal` pada spreadsheet dengan kolom:

Kolom

Isi

ID

Nomor urut soal (opsional)

Kategori

`literasi`, `numerasi`, atau `campur`

Tipe

`mc`, `pgk`, `matching`, `shortAnswer`

Soal

Teks pertanyaan

Detail

JSON properti soal (lihat contoh di bawah)

Gambar

URL gambar (opsional)

Poin

Bobot poin (default 1)

### Contoh isi kolom Detail

    {"choices":["Jakarta","Bandung","Surabaya"],"correctIndex":0}
    {"statements":[{"text":"Matahari terbit di timur","answer":true},{"text":"Bulan lebih besar dari matahari","answer":false}]}
    {"leftItems":["1+1","2+2"],"rightItems":["2","4"],"correctPairs":[["1+1","2"],["2+2","4"]]}
    {"acceptedAnswers":["pancasila","Pancasila"]}

🖥️ Cara Penggunaan
-------------------

1.  Buka halaman ini dan login sebagai siswa/dosen.
2.  Dosen: buka tab Console Dosen, klik salah satu tombol generate.
3.  Buka tab 📝 Ambil Kuis, masukkan nama, dan kerjakan soal yang telah digenerate.