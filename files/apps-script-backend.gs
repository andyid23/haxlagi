/**
 * ============================================================
 *  KUIS & DASHBOARD TOOLKIT — Google Apps Script Backend
 * ============================================================
 *  Pasangan komponen:
 *   - <full-quiz-dashboard>  → POST : simpan hasil kuis & aktivitas
 *   - <student-dashboard>    → GET  : leaderboard / summary / list /
 *                                     pertemuan / aktivitas
 *
 *  DEPLOY:
 *   1. Spreadsheet → Extensions → Apps Script, tempel ke Code.gs
 *   2. Deploy → New deployment → Web app
 *        Execute as: Me · Who has access: Anyone
 *   3. Salin URL /exec ke atribut apps-script-url
 *
 *  BONUS: menu "🎓 Kuis Toolkit" untuk membuat struktur sheet
 *  dan mengisi data contoh (setara _buildDemo() di komponen).
 */

var PASS_SCORE = 70; // skor minimum LULUS

/* ================= MENU SPREADSHEET ================= */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🎓 Kuis Toolkit')
    .addItem('1. Buat struktur sheet (6 pertemuan)', 'setupStruktur')
    .addItem('2. Isi data contoh (demo)', 'isiDataContoh')
    .addToUi();
}

function setupStruktur() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  for (var i = 1; i <= 6; i++) {
    getOrCreate_(ss, 'Pertemuan ' + i + ' - Kuis', ['Timestamp', 'Nama', 'Skor', 'Total Soal']);
    getOrCreate_(ss, 'Pertemuan ' + i + ' - Aktivitas', ['Timestamp', 'Nama', 'Tipe', 'Deskripsi']);
  }
  SpreadsheetApp.getUi().alert('✅ Struktur 6 pertemuan berhasil dibuat!');
}

function isiDataContoh() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var siswa = ['Siswa Demo', 'Aisyah Putri', 'Budi Santoso', 'Citra Lestari',
               'Dimas Prasetyo', 'Eka Ramadhani', 'Fajar Nugroho',
               'Gita Maharani', 'Hendra Wijaya'];
  var desk = {
    reading:    ['Membaca Modul', 'Membaca materi pertemuan', 'Mengeksplorasi halaman'],
    download:   ['Mengunduh PDF Materi', 'Mengunduh Slide Presentasi', 'Mengunduh Source Code'],
    discussion: ['Bertanya di forum diskusi', 'Membalas komentar teman', 'Menanggapi postingan'],
    quiz:       ['Menyelesaikan kuis pertemuan']
  };
  var tipe = ['reading', 'download', 'discussion', 'quiz'];
  var now = new Date();

  for (var p = 1; p <= 6; p++) {
    var shKuis = getOrCreate_(ss, 'Pertemuan ' + p + ' - Kuis', ['Timestamp', 'Nama', 'Skor', 'Total Soal']);
    var shAkt  = getOrCreate_(ss, 'Pertemuan ' + p + ' - Aktivitas', ['Timestamp', 'Nama', 'Tipe', 'Deskripsi']);

    siswa.forEach(function (nama) {
      // hasil kuis (Pertemuan 6: sebagian siswa belum ikut)
      var ikut = (p === 6) ? (Math.random() > 0.4) : (Math.random() > 0.1);
      if (ikut) {
        var hari = (24 - (p - 1) * 4) - Math.floor(Math.random() * 3);
        var ts = new Date(now.getTime() - hari * 86400000 - Math.floor(Math.random() * 9) * 3600000);
        shKuis.appendRow([ts, nama, 50 + Math.floor(Math.random() * 51), 5]);
      }
      // log aktivitas 1-3 per pertemuan (rentang 28 hari utk heatmap)
      var n = 1 + Math.floor(Math.random() * 3);
      for (var i = 0; i < n; i++) {
        var t = tipe[Math.floor(Math.random() * tipe.length)];
        var d = desk[t][Math.floor(Math.random() * desk[t].length)];
        var hari2 = (24 - (p - 1) * 4) - Math.floor(Math.random() * 3);
        var ts2 = new Date(now.getTime() - hari2 * 86400000 - Math.floor(Math.random() * 11) * 3600000);
        shAkt.appendRow([ts2, nama, t, d]);
      }
    });
  }
  SpreadsheetApp.getUi().alert('✅ Data contoh 9 siswa × 6 pertemuan berhasil dibuat!');
}

/* ============ POST: terima data dari dashboard kuis ============ */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents); // no-cors text/plain
    } else if (e.parameter) {
      data = e.parameter; // fallback GET
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var pertemuan = data.sheet || 'Pertemuan';

    if (data.type === 'attendance' && data.activityType) {
      var shA = getOrCreate_(ss, pertemuan + ' - Aktivitas', ['Timestamp', 'Nama', 'Tipe', 'Deskripsi']);
      shA.appendRow([data.timestamp || new Date().toISOString(),
                     data.name || 'Student', data.activityType, data.description || '']);
      return json_({ status: 'ok', written: 'aktivitas' });
    }

    if (typeof data.score !== 'undefined') {
      var shK = getOrCreate_(ss, pertemuan + ' - Kuis', ['Timestamp', 'Nama', 'Skor', 'Total Soal']);
      shK.appendRow([data.timestamp || new Date().toISOString(),
                     data.name || 'Student', data.score, data.totalQuestions || '']);
      return json_({ status: 'ok', written: 'kuis' });
    }

    return json_({ status: 'error', message: 'Format data tidak dikenali' });
  } catch (err) {
    return json_({ status: 'error', message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/* ============ GET: layani dashboard siswa ============ */

function doGet(e) {
  var action = (e.parameter && e.parameter.action) || '';
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  try {
    if (action === 'leaderboard') return json_(leaderboard_(ss));
    if (action === 'summary')     return json_(summary_(ss, e.parameter.name));
    if (action === 'list')        return json_({ pertemuan: list_(ss) });
    if (action === 'pertemuan')   return json_(pertemuan_(ss, e.parameter.sheet));
    if (action === 'aktivitas')   return json_(aktivitas_(ss, e.parameter.sheet, e.parameter.name));
    if (action === 'health')      return json_({ status: 'ok', time: new Date().toISOString() });
    return json_({ status: 'error', message: 'Action tidak dikenal: ' + action });
  } catch (err) {
    return json_({ status: 'error', message: String(err) });
  }
}

/* ================= helper ================= */

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreate_(ss, name, headers) {
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(headers);
    sh.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold').setBackground('#6750a4').setFontColor('#ffffff');
    sh.setFrozenRows(1);
  }
  return sh;
}

function readRows_(sh) {
  if (!sh || sh.getLastRow() < 2) return [];
  var values = sh.getDataRange().getValues();
  var headers = values.shift() || [];
  return values.filter(function (r) { return r.join('') !== ''; })
    .map(function (r) {
      var o = {};
      headers.forEach(function (h, i) { o[h] = r[i]; });
      return o;
    });
}

function norm_(s) { return String(s || '').trim().toLowerCase(); }
function quizSheets_(ss) { return ss.getSheets().filter(function (s) { return / - Kuis$/.test(s.getName()); }); }
function aktSheets_(ss)  { return ss.getSheets().filter(function (s) { return / - Aktivitas$/.test(s.getName()); }); }
function pertName_(name) { return name.replace(' - Kuis', '').replace(' - Aktivitas', ''); }
function fmtTs_(v) {
  if (!v) return '';
  var d = new Date(v);
  return isNaN(d.getTime()) ? String(v)
    : Utilities.formatDate(d, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm');
}

/* agregasi statistik seluruh siswa */
function collectAll_(ss) {
  var students = {};
  quizSheets_(ss).forEach(function (sh) {
    var p = pertName_(sh.getName());
    readRows_(sh).forEach(function (r) {
      var nama = String(r['Nama'] || '').trim();
      if (!nama) return;
      var k = norm_(nama);
      if (!students[k]) students[k] = { Nama: nama, skor: [], pertemuan: {}, aktivitas: 0 };
      students[k].skor.push(Number(r['Skor']) || 0);
      students[k].pertemuan[p] = true;
    });
  });
  aktSheets_(ss).forEach(function (sh) {
    readRows_(sh).forEach(function (r) {
      var nama = String(r['Nama'] || '').trim();
      if (!nama) return;
      var k = norm_(nama);
      if (!students[k]) students[k] = { Nama: nama, skor: [], pertemuan: {}, aktivitas: 0 };
      students[k].aktivitas++;
    });
  });
  return students;
}

function leaderboard_(ss) {
  var students = collectAll_(ss);
  var rows = Object.keys(students).map(function (k) {
    var s = students[k];
    var n = s.skor.length;
    var rata = n ? Math.round(s.skor.reduce(function (a, b) { return a + b; }, 0) / n) : 0;
    return {
      'Nama': s.Nama,
      'Rata-rata Skor': rata,
      'Skor Tertinggi': n ? Math.max.apply(null, s.skor) : 0,
      'Skor Terendah': n ? Math.min.apply(null, s.skor) : 0,
      'Total Kuis': n,
      'Total Aktivitas': s.aktivitas,
      'Jumlah Pertemuan': Object.keys(s.pertemuan).length
    };
  });
  rows.sort(function (a, b) {
    return b['Rata-rata Skor'] - a['Rata-rata Skor'] || b['Total Aktivitas'] - a['Total Aktivitas'];
  });
  return { status: 'ok', leaderboard: rows };
}

function summary_(ss, name) {
  var target = norm_(name);
  var kuis = [], aktivitas = [];

  quizSheets_(ss).forEach(function (sh) {
    var p = pertName_(sh.getName());
    readRows_(sh).forEach(function (r) {
      if (norm_(r['Nama']) !== target) return;
      var skor = Number(r['Skor']) || 0;
      kuis.push({ pertemuan: p, score: skor,
        status: skor >= PASS_SCORE ? 'LULUS' : 'TIDAK LULUS',
        timestamp: fmtTs_(r['Timestamp']) });
    });
  });

  aktSheets_(ss).forEach(function (sh) {
    var p = pertName_(sh.getName());
    readRows_(sh).forEach(function (r) {
      if (norm_(r['Nama']) !== target) return;
      aktivitas.push({ pertemuan: p, type: String(r['Tipe'] || '').toLowerCase(),
        desc: String(r['Deskripsi'] || ''), timestamp: fmtTs_(r['Timestamp']) });
    });
  });

  var sk = kuis.map(function (k) { return k.score; });
  var data = {
    Nama: name,
    totalKuis: kuis.length,
    rataSkor: kuis.length ? Math.round(sk.reduce(function (a, b) { return a + b; }, 0) / sk.length) : 0,
    skorTertinggi: kuis.length ? Math.max.apply(null, sk) : 0,
    skorTerendah: kuis.length ? Math.min.apply(null, sk) : 0,
    totalAktivitas: aktivitas.length,
    kuis: kuis,
    aktivitas: aktivitas
  };
  return { status: (kuis.length || aktivitas.length) ? 'ok' : 'not_found', data: data };
}

function list_(ss) {
  return ss.getSheets().map(function (s) { return s.getName(); });
}

function pertemuan_(ss, sheet) {
  var sh = ss.getSheetByName(sheet + ' - Kuis') || ss.getSheetByName(sheet);
  var best = {};
  readRows_(sh).forEach(function (r) {
    var nama = String(r['Nama'] || '').trim();
    if (!nama) return;
    var skor = Number(r['Skor']) || 0;
    var k = norm_(nama);
    if (!best[k] || skor > best[k].skor) best[k] = { nama: nama, skor: skor };
  });
  var siswa = Object.keys(best).map(function (k) {
    return { nama: best[k].nama, skor: best[k].skor,
      status: best[k].skor >= PASS_SCORE ? 'LULUS' : 'TIDAK LULUS' };
  });
  siswa.sort(function (a, b) { return b.skor - a.skor; });
  return { siswa: siswa };
}

function aktivitas_(ss, sheet, name) {
  var target = norm_(name);
  var sh = ss.getSheetByName(sheet + ' - Aktivitas');
  var out = [];
  readRows_(sh).forEach(function (r) {
    if (norm_(r['Nama']) !== target) return;
    out.push({ pertemuan: sheet, type: String(r['Tipe'] || '').toLowerCase(),
      desc: String(r['Deskripsi'] || ''), timestamp: fmtTs_(r['Timestamp']) });
  });
  return { aktivitas: out };
}
