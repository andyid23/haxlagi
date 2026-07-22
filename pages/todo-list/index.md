📝 Todo List — Daftar Tugas
===========================

Elemen `<todo-list>` adalah komponen daftar tugas sederhana yang menggunakan DDD Design System dari HAX. Mendukung fitur CRUD lengkap dengan editor bawaan.

🧪 Demo Langsung
----------------

Coba todo list interaktif di bawah ini:

📋 Atribut yang Didukung
------------------------

<editable-table accent-color="grey" column-header=""><table><thead class="thead"><tr class="thead-tr tr"><th scope="col" class="th th-or-td">-</th><th scope="col" class="th th-or-td">-</th></tr></thead><tbody class="tbody"><tr class="tbody-tr tr"><td class="td th-or-td">-</td><td class="td th-or-td">-</td></tr></tbody></table></editable-table>

🖥️ Cara Penggunaan
-------------------

### Tag Dasar

    <todo-list></todo-list>

### Dengan Data Awal

    <todo-list tasks='[{"id":"1","text":"Belajar HAXcms","completed":false},{"id":"2","text":"Buat komponen kustom","completed":true}]'></todo-list>

### Menggunakan JavaScript

    const todoList = document.querySelector('todo-list');
    todoList.tasks = [
      { id: '1', text: 'Belajar Lit Element', completed: false },
      { id: '2', text: 'Buat Web Component', completed: true }
    ];

🛠️ Fitur
---------

*   **Tambah Tugas:** Input teks + tombol Add, atau tekan Enter
*   **Checklist:** Tandai tugas selesai/belum
*   **Hapus Tugas:** Tombol delete pada setiap item
*   **Validasi Input:** Minimal 3 karakter, maksimal 50 karakter
*   **Editor Bawaan:** Panel editor untuk mengelola daftar tugas (mode HAX editor)
*   **Empty State:** Tampilan saat belum ada tugas
*   **DDD Design System:** Menggunakan token desain HAX (warna, spacing, font)
*   **Aksesibilitas:** aria-label lengkap, keyboard navigation

🎨 Tema Polaris
---------------

Komponen ini menggunakan tema **Polaris** dengan palet ungu:

*   Background: putih dengan shadow
*   Border kiri ungu pada setiap item tugas
*   Tombol Delete: outline merah, fill merah saat hover
*   Teks tugas selesai: dicoret dengan opacity 50%

📦 Struktur Data Tugas
----------------------

    {
      "id": "string (UUID atau timestamp)",
      "text": "string (teks tugas, 3-50 karakter)",
      "completed": boolean
    }

🧩 Integrasi dengan HAX Editor
------------------------------

Saat digunakan di dalam HAXcms editor, komponen ini otomatis menampilkan tombol **"Edit Task List"** yang membuka panel editor untuk mengelola daftar tugas secara visual.