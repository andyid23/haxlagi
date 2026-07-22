/**
 * Google Apps Script — Full Quiz & Attendance Handler (v3)
 * 
 * 1 SPREADSHEET = 1 COURSE
 * 1 PERTEMUAN menghasilkan 2 atau 3 sheet tab: Kuis, Aktivitas, Rangkuman
 * 
 * Data yang diterima:
 *   - Hasil kuis: { name, score, sheet, totalQuestions, timestamp }
 *   - Log aktivitas: { type:"attendance", name, activityType, description, sheet, timestamp }
 * 
 * CARA SETUP:
 * 1. Buka Google Sheets, buat spreadsheet baru untuk 1 course
 * 2. Extensions > Apps Script > copy-paste kode ini
 * 3. Deploy > New deployment > Web app
 * 4. Execute as: Me, Who has access: Anyone
 * 5. Copy URL
 * 6. Di HAXcms: <full-quiz-dashboard apps-script-url="URL" sheet-name="Pertemuan 1">
 * 
 * STRUKTUR SHEET YANG DIHASILKAN:
 *   "Pertemuan 1 - Kuis"       → Hasil kuis pertemuan 1
 *   "Pertemuan 1 - Aktivitas"  → Log aktivitas pertemuan 1
 *   "Pertemuan 2 - Kuis"       → Hasil kuis pertemuan 2
 *   "Pertemuan 2 - Aktivitas"  → Log aktivitas pertemuan 2
 *   "Rangkuman"               → Agregasi seluruh course
 */

/**
 * GET — Health check ATAU baca data
 * 
 * Parameter URL:
 *   ?action=list          → List semua sheet tab
 *   ?action=leaderboard   → Leaderboard dari sheet "Rangkuman"
 *   ?action=summary&name=Andi → Data rangkuman siswa tertentu
 *   ?action=pertemuan&sheet=Pertemuan 1 → Data semua siswa di pertemuan tsb
 *   ?action=aktivitas&sheet=Pertemuan 1&name=Andi → Log aktivitas siswa di pertemuan tsb
 */
function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || "list";
  const name   = (e && e.parameter && e.parameter.name) || "";
  const sheet  = (e && e.parameter && e.parameter.sheet) || "";

  try {
    switch (action) {
      case "leaderboard":
        return response(getLeaderboard());
      case "summary":
        return response(getStudentSummary(name));
      case "pertemuan":
        return response(getPertemuanData(sheet));
      case "aktivitas":
        return response(getAktivitasLog(sheet, name));
      case "list":
      default:
        return response(getSheetList());
    }
  } catch (error) {
    return response({ status: "error", message: error.toString() });
  }
}

/**
 * List semua sheet tab (pertemuan)
 */
function getSheetList() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const allSheets = ss.getSheets();
  const list = allSheets
    .map(s => s.getName())
    .filter(n => n !== "Rangkuman");
  return { status: "ok", pertemuan: list };
}

/**
 * Dapatkan data rangkuman satu siswa
 */
function getStudentSummary(studentName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const summarySheet = ss.getSheetByName("Rangkuman");
  if (!summarySheet) return { status: "error", message: "Sheet Rangkuman belum ada. Kerjakan kuis dulu!" };

  const data = summarySheet.getDataRange().getValues();
  const headers = data[0];

  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]).trim().toLowerCase() === studentName.trim().toLowerCase()) {
      const row = {};
      headers.forEach((h, idx) => { row[h] = data[i][idx] || ""; });
      return { status: "ok", data: row };
    }
  }

  // Siswa tidak ditemukan di Rangkuman — coba cek manual dari semua sheet
  return { status: "not_found", message: `Siswa "${studentName}" belum ada di rangkuman. Mungkin belum ada data kuis?`, data: getManualStudentSummary(studentName) };
}

/**
 * Fallback: baca langsung dari semua sheet untuk siswa
 */
function getManualStudentSummary(studentName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const allSheets = ss.getSheets();
  const result = { kuis: [], aktivitas: [], totalKuis: 0, totalAktivitas: 0, rataSkor: 0, skorTertinggi: 0 };

  let totalScore = 0;

  allSheets.forEach(sheet => {
    const sheetName = sheet.getName();
    if (sheetName === "Rangkuman" || sheet.getLastRow() <= 1) return;

    const data = sheet.getDataRange().getValues();
    const isKuis = sheetName.includes(" - Kuis");
    const isAktivitas = sheetName.includes(" - Aktivitas");
    const pertemuanName = sheetName.replace(" - Kuis", "").replace(" - Aktivitas", "");

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const rowName = String(row[1] || "").trim().toLowerCase();
      if (rowName !== studentName.trim().toLowerCase()) continue;

      if (isKuis) {
        const score = parseInt(row[2]) || 0;
        const status = row[4] || "";
        result.kuis.push({ pertemuan: pertemuanName, score, status, timestamp: row[0] });
        totalScore += score;
        result.totalKuis++;
        if (score > result.skorTertinggi) result.skorTertinggi = score;
      }

      if (isAktivitas) {
        result.aktivitas.push({
          pertemuan: pertemuanName,
          type: row[4] || "activity",
          desc: row[5] || "",
          timestamp: row[0]
        });
        result.totalAktivitas++;
      }
    }
  });

  result.rataSkor = result.totalKuis > 0 ? Math.round(totalScore / result.totalKuis) : 0;
  return result;
}

/**
 * Dapatkan data semua siswa di satu pertemuan (kuis)
 */
function getPertemuanData(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const quizSheet = ss.getSheetByName(sheetName + " - Kuis");
  const result = [];

  if (quizSheet) {
    const data = quizSheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (!row[1]) continue;
      result.push({
        timestamp: row[0],
        nama: row[1],
        skor: parseInt(row[2]) || 0,
        totalSoal: parseInt(row[3]) || 5,
        status: row[4] || ""
      });
    }
  }

  return { status: "ok", pertemuan: sheetName, siswa: result };
}

/**
 * Dapatkan log aktivitas siswa di satu pertemuan
 */
function getAktivitasLog(sheetName, studentName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const actSheet = ss.getSheetByName(sheetName + " - Aktivitas");
  const result = [];

  if (actSheet) {
    const data = actSheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const rowName = String(row[3] || "").trim().toLowerCase();
      if (studentName && rowName !== studentName.trim().toLowerCase()) continue;
      result.push({
        timestamp: row[0],
        nama: row[3],
        type: row[4] || "",
        deskripsi: row[5] || "",
        count: row[6] || 1
      });
    }
  }

  return { status: "ok", pertemuan: sheetName, aktivitas: result };
}

/**
 * Dapatkan leaderboard dari sheet Rangkuman
 */
function getLeaderboard() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const summarySheet = ss.getSheetByName("Rangkuman");
  if (!summarySheet) {
    return { status: "error", message: "Belum ada data. Kerjakan kuis dulu!", leaderboard: [] };
  }

  const data = summarySheet.getDataRange().getValues();
  if (data.length <= 1) {
    return { status: "ok", message: "Belum ada siswa terdaftar.", leaderboard: [] };
  }

  const headers = data[0];
  const leaderboard = [];

  for (let i = 1; i < data.length; i++) {
    const row = {};
    headers.forEach((h, idx) => { row[h] = data[i][idx] || ""; });
    leaderboard.push(row);
  }

  // Sort by rata-rata skor descending
  leaderboard.sort((a, b) => {
    const aScore = parseInt(a["Rata-rata Skor"]) || 0;
    const bScore = parseInt(b["Rata-rata Skor"]) || 0;
    return bScore - aScore;
  });

  return { status: "ok", leaderboard };
}

/**
 * POST — Terima data kuis ATAU log aktivitas
 * Data bisa via JSON body atau URL parameter
 */
function doPost(e) {
  try {
    let data = {};

    // Coba parse JSON dari postData
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (_) {
        // Bukan JSON, baca dari parameter
      }
    }

    // Fallback: baca dari URL parameter
    if (e.parameter) {
      data.name         = data.name || e.parameter.name;
      data.score        = data.score || (e.parameter.score ? parseInt(e.parameter.score) : null);
      data.sheet        = data.sheet || e.parameter.sheet || e.parameter.sheetName;
      data.timestamp    = data.timestamp || e.parameter.timestamp;
      data.totalQuestions = data.totalQuestions || (e.parameter.totalQuestions ? parseInt(e.parameter.totalQuestions) : 5);
      data.type         = data.type || e.parameter.type || "quiz";
      data.activityType = data.activityType || e.parameter.activityType;
      data.description  = data.description || e.parameter.description;
    }

    // Validasi
    if (!data.name) {
      return response({ status: "error", message: "Nama wajib diisi." });
    }
    if (!data.sheet) {
      return response({ status: "error", message: "Nama sheet/pertemuan wajib diisi (pakai parameter 'sheet')." });
    }

    // ROUTE: attendance atau quiz?
    let result;
    if (data.type === "attendance" || data.activityType) {
      result = saveAttendance(data);
    } else {
      // Harus ada score untuk quiz
      if (data.score === null || data.score === undefined) {
        return response({ status: "error", message: "Skor wajib diisi untuk tipe quiz." });
      }
      result = saveQuiz(data);
    }

    // Update rangkuman
    try { updateSummary(); } catch (_) {}

    return response({ status: "success", message: "Data tersimpan!", data: result });

  } catch (error) {
    return response({ status: "error", message: "Error: " + error.toString() });
  }
}

/**
 * Simpan hasil kuis ke sheet "[Pertemuan] - Kuis"
 */
function saveQuiz(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = (data.sheet || "Unknown") + " - Kuis";
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    setupHeader(sheet, [
      "Timestamp", "Nama", "Skor (%)", "Total Soal", "Status"
    ]);
  }

  const score = parseInt(data.score) || 0;
  const totalSoal = parseInt(data.totalQuestions) || 5;
  const status = score >= 70 ? "LULUS" : "TIDAK LULUS";
  const timestamp = data.timestamp ? new Date(data.timestamp) : new Date();
  const formattedTime = Utilities.formatDate(timestamp, "Asia/Jakarta", "dd/MM/yyyy HH:mm:ss");

  sheet.appendRow([formattedTime, data.name, score, totalSoal, status]);

  const lastRow = sheet.getLastRow();
  const range = sheet.getRange(lastRow, 1, 1, 5);
  if (score >= 70) {
    range.setBackground("#d1fae5");
  } else {
    range.setBackground("#fee2e2");
  }
  sheet.autoResizeColumns(1, 5);

  return { sheet: sheetName, row: lastRow, type: "quiz", name: data.name, score: score, status: status };
}

/**
 * Simpan log aktivitas ke sheet "[Pertemuan] - Aktivitas"
 */
function saveAttendance(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = (data.sheet || "Unknown") + " - Aktivitas";
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    setupHeader(sheet, [
      "Timestamp", "Tanggal", "Hari", "Nama", "Tipe Aktivitas", "Deskripsi", "Count"
    ]);
  }

  const timestamp = data.timestamp ? new Date(data.timestamp) : new Date();
  const formattedTime = Utilities.formatDate(timestamp, "Asia/Jakarta", "dd/MM/yyyy HH:mm:ss");
  const formattedDate = Utilities.formatDate(timestamp, "Asia/Jakarta", "dd/MM/yyyy");
  const dayName = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][timestamp.getDay()];

  sheet.appendRow([
    formattedTime,
    formattedDate,
    dayName,
    data.name,
    data.activityType || "activity",
    data.description || data.activityType || "Aktivitas pembelajaran",
    1
  ]);

  sheet.autoResizeColumns(1, 7);

  return { sheet: sheetName, row: sheet.getLastRow(), type: data.activityType };
}

/**
 * Setup header sheet baru — style ungu HAX
 */
function setupHeader(sheet, headers) {
  const range = sheet.getRange(1, 1, 1, headers.length);
  range.setValues([headers]);
  range.setFontWeight("bold");
  range.setBackground("#6750a4");
  range.setFontColor("white");
  range.setHorizontalAlignment("center");
}

/**
 * Update sheet "Rangkuman" — agregasi seluruh course
 * Membaca SEMUA sheet "* - Kuis" dan "* - Aktivitas"
 */
function updateSummary() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const allSheets = ss.getSheets();
  const studentStats = {};

  allSheets.forEach(sheet => {
    const name = sheet.getName();
    if (name === "Rangkuman" || sheet.getLastRow() <= 1) return;
    const data = sheet.getDataRange().getValues();

    // Deteksi apakah sheet ini kuis atau aktivitas dari nama
    const isKuis = name.includes(" - Kuis");
    const isAktivitas = name.includes(" - Aktivitas");
    const pertemuanName = name.replace(" - Kuis", "").replace(" - Aktivitas", "");

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const studentName = row[1] ? String(row[1]).trim() : null;
      if (!studentName) continue;

      if (!studentStats[studentName]) {
        studentStats[studentName] = {
          totalKuis: 0, totalScore: 0, highestScore: 0, lowestScore: 100,
          reading: 0, quizActivity: 0, discussion: 0, download: 0, totalActivity: 0,
          pertemuan: [], lastQuizStatus: ""
        };
      }

      const s = studentStats[studentName];

      if (isKuis) {
        const score = parseInt(row[2]) || 0;
        s.totalKuis++;
        s.totalScore += score;
        if (score > s.highestScore) s.highestScore = score;
        if (score < s.lowestScore) s.lowestScore = score;
        s.lastQuizStatus = row[4] || "";
      }

      if (isAktivitas) {
        const type = row[4] || "activity";
        s.totalActivity++;
        if (type === "reading") s.reading++;
        else if (type === "quiz") s.quizActivity++;
        else if (type === "discussion") s.discussion++;
        else if (type === "download") s.download++;
      }

      if (!s.pertemuan.includes(pertemuanName)) s.pertemuan.push(pertemuanName);
    }
  });

  // Tulis ke sheet Rangkuman
  let summarySheet = ss.getSheetByName("Rangkuman");
  if (!summarySheet) {
    summarySheet = ss.insertSheet("Rangkuman");
  }
  summarySheet.clear();

  const headers = [
    "Nama", "Total Kuis", "Rata-rata Skor", "Skor Tertinggi", "Skor Terendah",
    "Total Aktivitas", "Reading", "Quiz Activity", "Discussion", "Download",
    "Jumlah Pertemuan", "Status Kuis Terakhir"
  ];
  const hRange = summarySheet.getRange(1, 1, 1, headers.length);
  hRange.setValues([headers]);
  hRange.setFontWeight("bold");
  hRange.setBackground("#6750a4");
  hRange.setFontColor("white");
  hRange.setHorizontalAlignment("center");

  let rowNum = 2;
  Object.entries(studentStats).forEach(([studentName, stats]) => {
    const avg = stats.totalKuis > 0 ? Math.round(stats.totalScore / stats.totalKuis) : 0;
    const high = stats.totalKuis > 0 ? stats.highestScore : 0;
    const low = stats.totalKuis > 0 ? stats.lowestScore : 0;

    summarySheet.getRange(rowNum, 1, 1, headers.length).setValues([[
      studentName,
      stats.totalKuis,
      avg,
      high,
      low,
      stats.totalActivity,
      stats.reading,
      stats.quizActivity,
      stats.discussion,
      stats.download,
      stats.pertemuan.length,
      stats.lastQuizStatus || "N/A"
    ]]);

    // Warna baris berdasarkan status
    if (stats.lastQuizStatus === "LULUS") {
      summarySheet.getRange(rowNum, 1, 1, headers.length).setBackground("#d1fae5");
    } else if (stats.lastQuizStatus === "TIDAK LULUS") {
      summarySheet.getRange(rowNum, 1, 1, headers.length).setBackground("#fee2e2");
    }
    rowNum++;
  });

  summarySheet.autoResizeColumns(1, headers.length);
}

/**
 * Response helper
 */
function response(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test — jalankan dari editor Apps Script
 */
function test() {
  // Simulasi data pertemuan 1
  saveQuiz({ name: "Andi", score: 85, sheet: "Pertemuan 1", timestamp: new Date().toISOString(), totalQuestions: 5 });
  saveAttendance({ name: "Andi", sheet: "Pertemuan 1", timestamp: new Date().toISOString(), activityType: "reading", description: "Membaca modul HAXcms" });
  saveAttendance({ name: "Andi", sheet: "Pertemuan 1", timestamp: new Date().toISOString(), activityType: "quiz", description: "Mengerjakan kuis pertemuan 1" });

  saveQuiz({ name: "Budi", score: 60, sheet: "Pertemuan 1", timestamp: new Date().toISOString(), totalQuestions: 5 });
  saveAttendance({ name: "Budi", sheet: "Pertemuan 1", timestamp: new Date().toISOString(), activityType: "reading", description: "Scroll halaman" });

  // Simulasi data pertemuan 2
  saveQuiz({ name: "Andi", score: 90, sheet: "Pertemuan 2", timestamp: new Date().toISOString(), totalQuestions: 5 });
  saveAttendance({ name: "Andi", sheet: "Pertemuan 2", timestamp: new Date().toISOString(), activityType: "discussion", description: "Komentar di forum" });

  updateSummary();
  Logger.log("✅ Test complete! 2 siswa, 2 pertemuan. Cek sheet Anda!");
}
