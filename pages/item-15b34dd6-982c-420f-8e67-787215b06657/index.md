🔗 Integrasi Aktivitas + Tugas + Forum + Kuis
=============================================

**Full Integration Demo:** Semua komponen terhubung ke Google Sheets via `code.gs`.  
• `quiz-user-auth` — login/registrasi siswa  
• `activity-logger` — tracking baca materi, diskusi, tugas  
• `assignment-forum` — tugas mandiri + forum diskusi (Disqus-style, nested replies)  
• `explode-quiz` — kuis formatif  
• `transparent-gradebook` — nilai + mode dosen (6 komponen bobot)

1 Login / Registrasi
--------------------

2 Tugas Mandiri & Forum Diskusi
-------------------------------

Tugas tersimpan ke `Tugas Log` sheet. Forum CRUD via `Forum Log` sheet (nested replies, like, sort).

3 Kuis Formatif
---------------

4 Dashboard Dosen (Nilai + Rapor)
---------------------------------

Mode dosen: generate rapor, input UTS/UAS manual, atur 6 komponen bobot (Kehadiran:UH:UTS:UAS:Sikap:Skill). Auto-calc sikap dari tugas+forum, skill dari quiz+baca.

📊 Alur Data ke Google Sheets
-----------------------------

Aksi

Sheet

Event

Tipe Aktivitas

Login/Registrasi

Users

quiz-user-login

—

Kirim Tugas

Tugas Log

assignment-saved

assignment

Post Forum

Forum Log

discussion-saved

discussion

Reply Forum

Forum Log

discussion-saved

discussion

Submit Kuis

\[Pertemuan\] - Kuis

quiz-saved

quiz

Baca Materi

\[Pertemuan\] - Aktivitas

reading-saved

reading

Generate Rapor

Akumulasi Nilai Rapor

—

—

🎮 Simulator Aktivitas
----------------------

Klik tombol untuk mensimulasikan aktivitas siswa. Setiap klik = 1 aktivitas tercatat di Google Sheets + localStorage.

📖 Baca Modul 📌 Tugas 💬 Forum/Chat 📝 Kuis

// code.gs new sheets:
Forum Log    — \[Timestamp, CommentID, ParentID, UserName, StudentID, Text, Sheet, Action, Likes\]
Tugas Log    — \[Timestamp, StudentID, Nama, Sheet, Title, Content\]
Akumulasi    — \[...existing cols..., Skor Sikap, Skor Keterampilan, Nilai Akhir, Grade\]

\[${time}\] ${msg}