📚 Modul 1: Pengenalan HAXcms & Web Component
=============================================

Selamat datang di modul pembelajaran interaktif! Halaman ini adalah contoh bagaimana materi pembelajaran dipadukan dengan **pelacakan aktivitas otomatis** dan **kuis evaluasi**. Setiap aktivitas Anda — scroll membaca, klik link, download file, dan mengerjakan kuis — tercatat otomatis oleh sistem.

⏰

**Activity Logger Aktif!**

Scroll, klik, dan kerjakan kuis di halaman ini akan dicatat otomatis untuk validasi kehadiran Anda.

* * *

📖 1.1 Apa itu HAXcms?
----------------------

HAXcms adalah **Headless Authoring eXperience Content Management System** — platform berbasis web component untuk membuat dan mengelola konten web dengan mudah. Bayangkan seperti WordPress tapi lebih ringan, lebih modern, dan sepenuhnya berbasis standar web.

### Konsep Dasar

*   **Web Component:** Elemen HTML kustom yang bisa digunakan ulang
*   **Lit Element:** Library dari Google untuk membuat Web Component dengan performa tinggi
*   **DDD Design System:** Token desain konsisten untuk warna, spacing, dan tipografi
*   **JSON Outline Schema:** Format untuk mendefinisikan struktur situs

📖 1.2 Apa itu Web Component?
-----------------------------

Web Component adalah teknologi browser native yang memungkinkan Anda membuat elemen HTML kustom dengan fungsionalitas sendiri. Komponen terisolasi, bisa digunakan ulang di mana saja.

### Contoh Web Component HAX:

<grid-plate layout="1-1-1"><div slot="col-1" style="text-align: center; padding: 16px; background: #f3f0fa; border-radius: 12px;"><span>📝</span><h4>todo-list</h4><p style="font-size: 13px; color: #666;">Daftar tugas interaktif</p></div><div slot="col-2" style="text-align: center; padding: 16px; background: #f3f0fa; border-radius: 12px;"><span>🎯</span><h4>explode-quiz</h4><p style="font-size: 13px; color: #666;">Kuis interaktif + confetti</p></div><div slot="col-3" style="text-align: center; padding: 16px; background: #f3f0fa; border-radius: 12px;"><span>🎬</span><h4>video-player</h4><p style="font-size: 13px; color: #666;">Pemutar video YouTube</p></div></grid-plate>

📖 1.3 Struktur Dasar Web Component
-----------------------------------

Sebuah Web Component terdiri dari tiga bagian utama:

Bagian

Deskripsi

**class**

Definisi class JavaScript yang mewarisi HTMLElement

**Shadow DOM**

DOM terisolasi, style tidak bocor ke halaman luar

**Custom Element**

Nama tag HTML kustom, contoh: `<todo-list>`

### Contoh Kode Sederhana:

    <!-- HTML -->
    <my-greeting name="Dunia"></my-greeting>
    
    <!-- JavaScript -->
    class MyGreeting extends HTMLElement {
      connectedCallback() {
        const name = this.getAttribute('name');
        this.innerHTML = `<h2>Halo, ${name}!</h2>`;
      }
    }
    customElements.define('my-greeting', MyGreeting);

📖 1.4 Kenapa Web Component?
----------------------------

*   ✅ **Native:** Tidak butuh library tambahan — browser sudah support
*   ✅ **Terisolasi:** Style dan logika tidak bentrok dengan halaman lain
*   ✅ **Reusable:** Buat sekali, pakai di mana saja
*   ✅ **Framework-agnostic:** Bekerja dengan React, Vue, Angular, atau plain HTML
*   ✅ **Standar W3C:** Didukung semua browser modern

* * *

📥 Download Materi Pendukung
----------------------------

Klik link di bawah untuk mengunduh file materi (aktivitas download akan tercatat otomatis):

*   [📄 Download PDF: Panduan Lengkap HAXcms](files/panduan-haxcms.pdf)
*   [📦 Download ZIP: Source Code Contoh Web Component](files/contoh-komponen.zip)

**📝 Catatan:** Scroll halaman ini sampai bawah, klik link download, dan kerjakan kuis di bawah — semua akan tercatat sebagai aktivitas belajar Anda!

* * *

🎯 Evaluasi: Kuis Modul 1
-------------------------

Setelah membaca materi di atas, silakan kerjakan kuis berikut untuk menguji pemahaman Anda. Skor akan dicatat otomatis!

* * *

📊 Cek Kehadiran Anda
---------------------

Di bawah ini adalah ringkasan kehadiran dan aktivitas Anda. Data dihitung otomatis dari interaksi Anda dengan halaman ini.

Selanjutnya
-----------

Setelah menyelesaikan modul ini, lanjutkan ke:

*   [📅 Tutorial: Cara Menambah Kuis di Hari Lain](tutorial-kursus)
*   [📖 Belajar Dasar HTML untuk Pemula](tutor-html)