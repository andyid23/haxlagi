🎯 Explode Quiz — Kuis Interaktif
=================================

Elemen `<explode-quiz>` adalah komponen kuis interaktif pilihan ganda yang dilengkapi efek konfeti, editor soal bawaan, dan integrasi Google Sheets untuk menyimpan hasil kuis secara real-time.

🧪 Demo Langsung
----------------

1 Login / Registrasi
--------------------

Coba kuis interaktif di bawah ini:

📋 Atribut yang Didukung
------------------------

<editable-table accent-color="grey" column-header=""><table><thead class="thead"><tr class="thead-tr tr"><th scope="col" class="th th-or-td">Atribut</th><th scope="col" class="th th-or-td">Tipe</th><th scope="col" class="th th-or-td">Deskripsi</th><th scope="col" class="th th-or-td">Default</th></tr></thead><tbody class="tbody"><tr class="tbody-tr tr"><td class="td th-or-td"><code>spreadsheet-id</code></td><td class="td th-or-td">String</td><td class="td th-or-td">ID Google Spreadsheet untuk menyimpan hasil</td><td class="td th-or-td">—</td></tr><tr class="tbody-tr tr"><td class="td th-or-td"><code>apps-script-url</code></td><td class="td th-or-td">String</td><td class="td th-or-td">URL Google Apps Script endpoint</td><td class="td th-or-td">—</td></tr><tr class="tbody-tr tr"><td class="td th-or-td"><code>editable</code></td><td class="td th-or-td">Boolean</td><td class="td th-or-td">Tampilkan tombol edit soal</td><td class="td th-or-td">false</td></tr><tr class="tbody-tr tr"><td class="td th-or-td"><code>questions</code></td><td class="td th-or-td">JSON Array</td><td class="td th-or-td">Daftar soal kustom (JSON string)</td><td class="td th-or-td">3 soal default</td></tr></tbody></table></editable-table>

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