📘 Tutorial Lengkap: Alur Aktivitas, 7 Sheet Utama & Kriteria Kehadiran
=======================================================================

Panduan visual & teknis: dari aktivitas siswa di browser → ke Google Sheets via Apps Script. Semua fitur sudah ada di elemen; halaman ini hanya mendokumentasikan struktur data & alurnya.

🎯 Ringkasan 1 Halaman
----------------------

Aktivitas Siswa

Elemen Frontend

Action Apps Script

Sheet Target

🔐 Login / Register

`quiz-user-auth`

`register` / `login`

`Users`

📖 Baca Materi (scroll)

`activity-logger`

`activity` type=reading

`{Pertemuan} - Aktivitas`

⬇️ Download File

`activity-logger`

`activity` type=download

`{Pertemuan} - Aktivitas`

🎯 Kuis Selesai

`explode-quiz`

`submit` / `saveQuiz`

`pertemuan-kuis` + `{Pertemuan}-Kuis`

💬 Komentar Forum

`assignment-forum`

`saveForumComment` (forumApiUrl)

`Forum Log` + `{Pertemuan}-Aktivitas`

📝 Kirim Tugas

`assignment-forum`

`saveAssignment` (forumApiUrl)

`Tugas Log` + `{Pertemuan}-Aktivitas`

* * *

🗂️ 7 Sheet Utama — Kolom & Contoh Data (Siap Copas ke Google Sheets)
---------------------------------------------------------------------

Copy tabel di bawah → Paste ke Google Sheets (Data → Split text to columns → Separator: `|`).

### 1\. `Users` — Daftar Siswa (wajib dibuat manual)

    Student ID	| NIS	| Nama	| Absen	| Kelas
    STD-001	| 001	| Budi Santoso	| 1	| XI-1
    STD-002	| 002	| Citra Dewi	| 2	| XI-1
    STD-003	| 003	| Dedi Prasetyo	| 3	| XI-1
    

### 2\. `pertemuan-kuis` — Agregasi Kuis Semua Pertemuan (auto-create)

    Timestamp	| Date	| Kode Materi	| Nama	| Skor (%)	| Total Soal	| Status	| Student ID	| NIS	| Absen	| Kelas	| Kategori Kuis
    2026-01-15 08:30	| 2026-01-15	| UH1	| Budi Santoso	| 85	| 10	| LULUS	| STD-001	| 001	| 1	| XI-1	| formatif
    2026-01-22 09:00	| 2026-01-22	| UTS	| Budi Santoso	| 78	| 15	| LULUS	| STD-001	| 001	| 1	| XI-1	| sumatif
    

### 3\. `{Pertemuan} - Kuis` — Per Pertemuan (auto-create, nama = `sheet-name`)

    Timestamp	| Date	| Kode Materi	| Nama	| Skor (%)	| Total Soal	| Status	| Student ID	| NIS	| Absen	| Kelas	| Kategori Kuis
    2026-01-15 08:30	| 2026-01-15	| UH1	| Budi Santoso	| 85	| 10	| LULUS	| STD-001	| 001	| 1	| XI-1	| formatif
    

### 4\. `{Pertemuan} - Aktivitas` — Log Aktivitas Harian (auto-create)

    Timestamp	| Tanggal	| Hari	| Nama	| Tipe Aktivitas	| Deskripsi	| Count	| Student ID	| NIS	| Absen	| Kelas
    2026-01-15 08:30	| 2026-01-15	| Jumat	| Budi Santoso	| reading	| Membaca materi (scroll 1200px)	| 1	| STD-001	| 001	| 1	| XI-1
    2026-01-15 08:45	| 2026-01-15	| Jumat	| Budi Santoso	| quiz	| Kuis selesai (Skor: 85%)	| 1	| STD-001	| 001	| 1	| XI-1
    2026-01-15 09:10	| 2026-01-15	| Jumat	| Budi Santoso	| assignment	| Tugas dikumpulkan: Refleksi Energi	| 1	| STD-001	| 001	| 1	| XI-1
    2026-01-15 09:20	| 2026-01-15	| Jumat	| Budi Santoso	| download	| Download materi: Modul 1.pdf	| 1	| STD-001	| 001	| 1	| XI-1
    2026-01-15 09:30	| 2026-01-15	| Jumat	| Budi Santoso	| discussion	| Diskusi di: Forum Pertemuan 1	| 1	| STD-001	| 001	| 1	| XI-1
    

### 5\. `Forum Log` — Komentar Bertingkat (auto-create via forumApiUrl)

    Timestamp	| CommentID	| ParentID	| UserName	| StudentID	| Text	| Sheet	| Action	| Likes
    2026-01-15 09:30	| 1705305000000	| main	| Budi Santoso	| STD-001	| Saya setuju dengan materi	| Pertemuan 1	| post	| 2
    2026-01-15 09:35	| 1705305010000	| 1705305000000	| Citra Dewi	| STD-002	| Saya juga	| Pertemuan 1	| reply	| 1
    

### 6\. `Tugas Log` — Submission Tugas Mandiri (auto-create via forumApiUrl)

    Timestamp	| StudentID	| Nama	| Sheet	| Title	| Content	| Link
    2026-01-15 09:40	| STD-001	| Budi Santoso	| Pertemuan 1	| Refleksi Energi Terbarukan	| Energi terbarukan penting karena...	| https://drive.google.com/file/d/abc123/view
    2026-01-15 09:45	| STD-002	| Citra Dewi	| Pertemuan 1	| Refleksi Energi Terbarukan	| Saya menginstal panel surya di rumah	| 
    

### 7\. `Akumulasi Nilai Rapor` — Rapor Akhir (auto-create via Generate Laporan)

    Student ID	| NIS	| Nama	| Absen	| Kelas	| Jumlah Pertemuan	| Rata Aktivitas/Pertemuan	| Kehadiran (skala 100)	| Rata-rata UH	| Skor UTS	| Skor UAS	| Skor Sikap	| Skor Keterampilan	| Nilai Akhir	| Grade
    STD-001	| 001	| Budi Santoso	| 1	| XI-1	| 8	| 7.5	| 85	| 88	| 80	| 82	| 90	| 75	| 83	| A
    STD-002	| 002	| Citra Dewi	| 2	| XI-1	| 8	| 8.0	| 90	| 92	| 85	| 88	| 95	| 80	| 88	| A
    

* * *

📋 Kriteria Kehadiran — 6 Item (AttendanceTracker)
--------------------------------------------------

Setiap hari, `attendance-tracker` memanggil `getActivityHistory` + `getForumActivityHistory` lalu menghitung:

<editable-table accent-color="grey" column-header=""><table><thead class="thead"><tr class="thead-tr tr"><th scope="col" class="th th-or-td">#</th><th scope="col" class="th th-or-td">Ikon</th><th scope="col" class="th th-or-td">Kriteria</th><th scope="col" class="th th-or-td">Minimum</th><th scope="col" class="th th-or-td">Sheet Cek</th><th scope="col" class="th th-or-td">Event Trigger</th></tr></thead><tbody class="tbody"><tr class="tbody-tr tr"><td class="td th-or-td">1</td><td class="td th-or-td">📖</td><td class="td th-or-td">Membaca Materi</td><td class="td th-or-td">3× scroll &gt;1000px</td><td class="td th-or-td"><code>{Pertemuan} - Aktivitas</code> (type=reading)</td><td class="td th-or-td"><code>activity-logger._handleScroll</code></td></tr><tr class="tbody-tr tr"><td class="td th-or-td">2</td><td class="td th-or-td">🎯</td><td class="td th-or-td">Mengerjakan Kuis</td><td class="td th-or-td">1× selesai</td><td class="td th-or-td"><code>{Pertemuan} - Aktivitas</code> (type=quiz)</td><td class="td th-or-td"><code>quiz-saved</code> event</td></tr><tr class="tbody-tr tr"><td class="td th-or-td">3</td><td class="td th-or-td">📝</td><td class="td th-or-td">Mengumpulkan Tugas</td><td class="td th-or-td">1× submit</td><td class="td th-or-td"><code>{Pertemuan} - Aktivitas</code> (type=assignment)</td><td class="td th-or-td"><code>assignment-saved</code> event</td></tr><tr class="tbody-tr tr"><td class="td th-or-td">4</td><td class="td th-or-td">⬇️</td><td class="td th-or-td">Download Materi</td><td class="td th-or-td">1× klik file</td><td class="td th-or-td"><code>{Pertemuan} - Aktivitas</code> (type=download)</td><td class="td th-or-td"><code>download-saved</code> event</td></tr><tr class="tbody-tr tr"><td class="td th-or-td">5</td><td class="td th-or-td">💬</td><td class="td th-or-td">Komentar Forum</td><td class="td th-or-td">1× post/reply</td><td class="td th-or-td"><code>Forum Log</code> (via <code>forumApiUrl</code>)</td><td class="td th-or-td"><code>discussion-saved</code> event</td></tr><tr class="tbody-tr tr"><td class="td th-or-td">6</td><td class="td th-or-td">🔥</td><td class="td th-or-td">Total Aktivitas Hari Ini</td><td class="td th-or-td">8×</td><td class="td th-or-td">Semua di atas</td><td class="td th-or-td">Semua event</td></tr></tbody></table></editable-table>

**Rumus:** `attendancePercentage = (kriteria_tercapai / 6) × 100`  
**Status:** `LENGKAP` (100%) | `PROSES` (50–99%) | `BELUM MULAI` (<50%)

**Troubleshooting "Tercapai 0 dari min. 1":**

*   Belum login (studentId kosong)
*   Sheet `{Pertemuan} - Aktivitas` belum terbentuk (belum ada aktivitas hari itu)
*   `forumApiUrl` tidak diisi → kriteria forum di-skip (total jadi 5)
*   Event tidak terkirim: cek console network → pastikan `activity` POST 200 OK

* * *

🔄 Alur Kirim Tugas (Assignment)
--------------------------------

1.  Siswa buka halaman dengan → isi textarea jawaban + link Google Drive/Doc (opsional)
2.  Klik **"Kirim & Kunci Tugas"** → `_submitAssignment()` POST ke `forumApiUrl` action `saveAssignment`
3.  Apps Script (`code-forum-tugas.gs`) → append row ke sheet **"Tugas Log"**
4.  Dispatch event `assignment-saved` → `activity-logger` tangkap → POST `activity` type=assignment ke `appsScriptUrl` → sheet **`{Pertemuan} - Aktivitas`**
5.  localStorage `hax_assignment_submitted=true` → tombol berubah **"Selesai"** + **"Ubah"** (reset)

**Catatan:** `forumApiUrl` harus deployment terpisah dari `appsScriptUrl` (code-forum-tugas.gs) untuk hindari quota limit.

* * *

💬 Alur Komentar Forum
----------------------

1.  Siswa tulis komentar/balasan di
2.  Klik **"Post Comment"** / **"Reply"** → POST ke `forumApiUrl` action `saveForumComment`
3.  Apps Script → append row ke sheet **"Forum Log"** (CommentID, ParentID=main/replyID, Action=post/reply, Likes=0)
4.  Dispatch `discussion-saved` → `activity-logger` catat `activity` type=discussion → sheet **`{Pertemuan} - Aktivitas`**
5.  AttendanceTracker panggil `getForumActivityHistory` (via `forumApiUrl`) → hitung `counts.forum` untuk kriteria #5

* * *

🔥 Heatmap GitHub-Style (EngagementScore)
-----------------------------------------

Sudah terimplementasi di :

*   Grid 42 hari (6 minggu), 7 kolom (Min–Sab), 6 baris mingguan
*   Data: `getActivityHistory` (42 hari, `appsScriptUrl`) + `getForumActivityHistory` (`forumApiUrl`) → merge `count` per hari
*   Warna intensitas: 0 = putih, rendah = ungu muda, tinggi = ungu tua (mirip GitHub contributions)
*   Statistik samping: total aktivitas, hari aktif, streak, rata-rata/hari

**Gunakan:**

* * *

🗂️ Template Bank Soal — Siap Copas ke Sheet `Bank Soal`
--------------------------------------------------------

Buat tab bernama persis **Bank Soal** dengan kolom: `ID | Kategori | Tipe | Soal | Detail | Gambar | Poin`

    ID	| Kategori	| Tipe	| Soal	| Detail	| Gambar	| Poin
    1	| literasi	| mc	| Apa kepanjangan HTML?	| {"choices":["HyperText Markup Language","High Text Machine Language","Home Tool Markup Language","Hyperlinks Text Markup"],"correctIndex":0}	|	| 1
    2	| numerasi	| pgk	| Tentukan Benar/Salah: Matahari terbit di timur	| {"statements":[{"text":"Matahari terbit di timur","answer":true},{"text":"Bulan lebih besar dari matahari","answer":false}]}	|	| 2
    3	| campur	| matching	| Jodohkan operasi & hasil	| {"leftItems":["1+1","2+2"],"rightItems":["2","4"],"correctPairs":[["1+1","2"],["2+2","4"]]}	|	| 2
    4	| literasi	| shortAnswer	| Sebutkan dasar negara Indonesia	| {"acceptedAnswers":["pancasila","Pancasila"]}	|	| 1
    5	| numerasi	| mc	| Luas persegi panjang 5×8	| {"choices":["13","40","35","30"],"correctIndex":1}	|	| 1
    6	| campur	| pgk	| Benar/Salah: 0.5 + 0.5 = 1	| {"statements":[{"text":"0.5 + 0.5 = 1","answer":true},{"text":"1/2 + 1/2 = 1/4","answer":false}]}	|	| 2
    7	| literasi	| matching	| Jodohkan kata & lawan	| {"leftItems":["Besar","Siang","Panas"],"rightItems":["Kecil","Malam","Dingin"],"correctPairs":[["Besar","Kecil"],["Siang","Malam"],["Panas","Dingin"]]}	|	| 2
    8	| numerasi	| shortAnswer	| Berapa 15 × 12?	| {"acceptedAnswers":["180"]}	|	| 1
    

* * *

⚙️ Setup Halaman Standar
------------------------

* * *

🧰 Troubleshooting Cepat
------------------------

Gejala

Penyebab

Solusi

"Elemen kuis tidak ditemukan"

Quiz belum dirender / tab tidak aktif

Versi baru: kuis selalu dirender (hidden). Pastikan `quiz-dashboard-lite2` terbaru.

Kriteria forum "Tercapai 0"

`forumApiUrl` kosong / beda deployment

Isi `forum-api-url` dengan URL Web App `code-forum-tugas.gs`.

Soal edit hilang setelah Save

Questions tersimpan di shadow DOM

Versi baru: soal otomatis persist ke attribute `questions` dashboard → tersimpan saat Save halaman HAXcms.

Warning "Import already in progress"

Race condition HAXcms saat simpan

Jinak — data tetap tersimpan. Refresh halaman jika tampilan ketinggalan.

Heatmap kosong

`student-id` tidak match / history 0

Pastikan siswa sudah login & punya aktivitas; cek `getActivityHistory` return data.

* * *

📎 File Pendukung di Repo
-------------------------

*   `custom/src/quiz-dashboard-lite2/lib/code.gs` — Apps Script utama (kuis, aktivitas, rapor, Users)
*   `custom/src/quiz-dashboard-lite2/lib/code-forum-tugas.gs` — Forum & Tugas (deployment terpisah)
*   `custom/src/quiz-dashboard-lite2/lib/code.gs.md` — Dokumentasi API actions
*   `custom/src/quiz-dashboard-lite2/lib/code-forum-tugas.gs.md` — Dokumentasi forum & tugas