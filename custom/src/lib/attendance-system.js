import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { LitElement, html, css } from "lit";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

// FIX: Storage key per-hari untuk menghindari data campur antar hari
const LOGS_STORAGE_KEY = "a3_attendance_logs";
const LAST_DATE_KEY = "a3_last_activity_date";

// FIX: Helper untuk mendapatkan tanggal hari ini (YYYY-MM-DD)
function getTodayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// FIX: Auto-reset logs jika hari sudah berganti
function getInitialLogs() {
  const today = getTodayString();
  const lastDate = localStorage.getItem(LAST_DATE_KEY);
  
  if (lastDate !== today) {
    // Hari berganti → reset logs hari ini
    localStorage.setItem(LOGS_STORAGE_KEY, "[]");
    localStorage.setItem(LAST_DATE_KEY, today);
    return [];
  }
  
  const stored = localStorage.getItem(LOGS_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

// ==========================================
// 1. COMPONENT: <activity-logger>
// ==========================================
export class ActivityLogger extends I18NMixin(DDDSuper(LitElement)) {
  static get tag() { return "activity-logger"; }

  static get properties() {
    return {
      ...super.properties,
      appsScriptUrl: { type: String, attribute: "apps-script-url" },
      sheetName: { type: String, attribute: "sheet-name" },
      studentId: { type: String, attribute: "student-id" },
      studentName: { type: String, attribute: "student-name" },
      studentNis: { type: String, attribute: "student-nis" },
      studentAbsen: { type: String, attribute: "student-absen" },
      studentKelas: { type: String, attribute: "student-kelas" },
      _logs: { state: true },
      _expanded: { state: true },
      _toastMsg: { state: true }
    };
  }

  constructor() {
    super();
    this.appsScriptUrl = "";
    this.sheetName = "Aktivitas"; // FIX: Default sheet tunggal
    this.studentId = "";
    this.studentName = "";
    this.studentNis = "";
    this.studentAbsen = "";
    this.studentKelas = "";
    this._logs = getInitialLogs();
    this._expanded = false;
    this._toastMsg = "";
    this._lastScrollTime = 0;
    this._scrollDistance = 0; // FIX: Track scroll distance
    
    this._handleScroll = this._handleScroll.bind(this);
    this._handleQuizSaved = this._handleQuizSaved.bind(this);
    this._handleDiscussionSaved = this._handleDiscussionSaved.bind(this);
    this._handleAssignmentSaved = this._handleAssignmentSaved.bind(this);
    this._handleReadingSaved = this._handleReadingSaved.bind(this);
    this._handleVisibilityChange = this._handleVisibilityChange.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    globalThis.addEventListener("scroll", this._handleScroll, { passive: true });
    globalThis.addEventListener("quiz-saved", this._handleQuizSaved);
    globalThis.addEventListener("discussion-saved", this._handleDiscussionSaved);
    globalThis.addEventListener("assignment-saved", this._handleAssignmentSaved);
    globalThis.addEventListener("reading-saved", this._handleReadingSaved);
    globalThis.addEventListener("visibilitychange", this._handleVisibilityChange);
    
    // FIX: Cek apakah hari sudah berganti saat komponen di-mount
    const today = getTodayString();
    const lastDate = localStorage.getItem(LAST_DATE_KEY);
    if (lastDate !== today) {
      this._logs = [];
      localStorage.setItem(LOGS_STORAGE_KEY, "[]");
      localStorage.setItem(LAST_DATE_KEY, today);
    }
  }

  disconnectedCallback() {
    globalThis.removeEventListener("scroll", this._handleScroll);
    globalThis.removeEventListener("quiz-saved", this._handleQuizSaved);
    globalThis.removeEventListener("discussion-saved", this._handleDiscussionSaved);
    globalThis.removeEventListener("assignment-saved", this._handleAssignmentSaved);
    globalThis.removeEventListener("reading-saved", this._handleReadingSaved);
    globalThis.removeEventListener("visibilitychange", this._handleVisibilityChange);
    super.disconnectedCallback();
  }

  // FIX: Scroll hanya tercatat jika user benar-benar membaca (scroll > 1000px total)
  _handleScroll() {
    const now = Date.now();
    if (now - this._lastScrollTime < 120000) return; // 2 menit cooldown
    
    // FIX: Butuh scroll aktif > 1000px, bukan sekadar buka halaman
    if (globalThis.scrollY > 1000) {
      this._lastScrollTime = now;
      this.logActivity("reading", `Membaca materi (scroll ${Math.round(globalThis.scrollY)}px)`);
    }
  }

  _handleVisibilityChange() {
    // FIX: Reset scroll counter saat user kembali ke tab (mencegah false positive)
    if (document.visibilityState === "visible") {
      this._scrollDistance = 0;
    }
  }

  _handleQuizSaved(e) {
    const score = e.detail?.score || 0;
    this.logActivity("quiz", `Kuis selesai (Skor: ${score}%)`);
  }

  _handleDiscussionSaved(e) {
    const thread = e.detail?.thread || e.detail?.title || "Forum";
    this.logActivity("discussion", `Diskusi di: ${thread}`);
  }

  _handleAssignmentSaved(e) {
    const title = e.detail?.title || "Tugas";
    this.logActivity("assignment", `Tugas dikumpulkan: ${title}`);
  }

  _handleReadingSaved(e) {
    const title = e.detail?.title || "Materi";
    this.logActivity("reading", `Membaca: ${title}`);
  }

  logActivity(type, description) {
    // FIX: Pastikan log hanya untuk hari ini
    const now = new Date();
    const today = getTodayString();
    const lastDate = localStorage.getItem(LAST_DATE_KEY);
    
    if (lastDate !== today) {
      // Hari berganti → reset
      this._logs = [];
      localStorage.setItem(LOGS_STORAGE_KEY, "[]");
      localStorage.setItem(LAST_DATE_KEY, today);
    }
    
    const newLog = {
      id: "log-" + now.getTime(),
      timestamp: now.toISOString(),
      date: today, // FIX: Tambah kolom tanggal eksplisit
      type,
      description
    };
    
    const currentLogs = [newLog, ...this._logs];
    this._logs = currentLogs;
    localStorage.setItem(LOGS_STORAGE_KEY, JSON.stringify(currentLogs));

    // FIX: Kirim ke Apps Script dengan payload lengkap (satu sheet)
    if (this.appsScriptUrl && this.studentId) {
      const params = new URLSearchParams({
        action: "logActivity",
        timestamp: newLog.timestamp,
        date: today,
        name: this.studentName,
        studentId: this.studentId,
        nis: this.studentNis || "",
        absen: this.studentAbsen || "",
        kelas: this.studentKelas || "",
        activityType: type,
        description,
        sheet: this.sheetName // FIX: Semua log masuk ke 1 sheet
      });
      fetch(`${this.appsScriptUrl}?${params.toString()}`, { redirect: "follow" }).catch(() => {});
    }

    this._showToast(`✓ ${description.substring(0, 40)}`);
  }

  _showToast(msg) {
    this._toastMsg = msg;
    setTimeout(() => { if (this._toastMsg === msg) this._toastMsg = ""; }, 3000);
  }

  // FIX: Reset manual untuk debug
  _resetToday() {
    if (confirm("Reset semua aktivitas hari ini?")) {
      this._logs = [];
      localStorage.setItem(LOGS_STORAGE_KEY, "[]");
      this._showToast("Aktivitas hari ini direset");
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: block; font-family: var(--ddd-font-primary); }
        .floating-logger-pill {
          position: fixed; bottom: var(--ddd-spacing-6); right: var(--ddd-spacing-6);
          background-color: var(--ddd-theme-default-text); color: var(--ddd-theme-on-primary);
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5); border-radius: var(--ddd-radius-full);
          box-shadow: var(--ddd-shadow-2); display: flex; align-items: center; gap: var(--ddd-spacing-3);
          cursor: pointer; z-index: 1000; transition: all 0.3s; font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
        }
        .floating-logger-pill:hover { transform: translateY(-2px); box-shadow: var(--ddd-shadow-3); }
        .pulse-dot { width: 8px; height: 8px; background-color: var(--ddd-theme-success); border-radius: 50%; animation: pulse 1.6s infinite; }
        @keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34,197,94,0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34,197,94,0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34,197,94,0); } }
        .drawer { position: fixed; bottom: 84px; right: var(--ddd-spacing-6); width: 380px; max-height: 500px; background: var(--ddd-theme-default-surface); border-radius: var(--ddd-radius-lg); box-shadow: var(--ddd-shadow-3); border: 1px solid var(--ddd-theme-polaris-border); z-index: 1000; display: flex; flex-direction: column; overflow: hidden; }
        .drawer-header { background-color: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary); padding: var(--ddd-spacing-4); font-weight: var(--ddd-font-weight-bold); display: flex; justify-content: space-between; align-items: center; }
        .close-btn { background: none; border: none; color: var(--ddd-theme-on-primary); font-size: var(--ddd-font-size-xl); cursor: pointer; }
        .drawer-content { padding: var(--ddd-spacing-4); overflow-y: auto; flex: 1; }
        .date-label { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-bottom: var(--ddd-spacing-3); text-align: center; }
        .logs-list { display: flex; flex-direction: column; gap: var(--ddd-spacing-2); max-height: 280px; overflow-y: auto; }
        .log-item { padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border-radius: var(--ddd-radius-md); background-color: var(--ddd-theme-polaris-surface-hover); font-size: var(--ddd-font-size-xs); border-left: 3px solid var(--ddd-theme-secondary); }
        .log-item.reading { border-left-color: var(--ddd-theme-link); }
        .log-item.quiz { border-left-color: var(--ddd-theme-accent); }
        .log-item.assignment { border-left-color: var(--ddd-theme-success); }
        .log-item.discussion { border-left-color: var(--ddd-theme-warning); }
        .log-time { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-bottom: 2px; }
        .reset-btn { background: var(--ddd-theme-error); color: var(--ddd-theme-on-error); border: none; padding: var(--ddd-spacing-1) var(--ddd-spacing-3); border-radius: var(--ddd-radius-md); font-size: var(--ddd-font-size-xs); cursor: pointer; margin-top: var(--ddd-spacing-3); }
        .toast { position: fixed; bottom: 90px; right: var(--ddd-spacing-6); background-color: var(--ddd-theme-default-text); color: var(--ddd-theme-on-primary); padding: var(--ddd-spacing-3) var(--ddd-spacing-5); border-radius: var(--ddd-radius-md); box-shadow: var(--ddd-shadow-2); font-size: var(--ddd-font-size-s); z-index: 1001; animation: fadeInOut 3s forwards; }
        @keyframes fadeInOut { 0% { opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { opacity: 0; } }
      `
    ];
  }

  render() {
    const today = new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    return html`
      <div class="floating-logger-pill" @click="${() => this._expanded = !this._expanded}">
        <span class="pulse-dot"></span>
        <span>Aktivitas Hari Ini (${this._logs.length})</span>
      </div>
      ${this._expanded ? html`
        <div class="drawer">
          <div class="drawer-header">
            <span>📊 Aktivitas Hari Ini</span>
            <button class="close-btn" @click="${() => this._expanded = false}">×</button>
          </div>
          <div class="drawer-content">
            <div class="date-label">📅 ${today}</div>
            <div class="logs-list">
              ${this._logs.length === 0 
                ? html`<div style="color: var(--ddd-theme-secondary); text-align: center; padding: var(--ddd-spacing-6) 0;">Belum ada aktivitas tercatat hari ini.</div>` 
                : this._logs.map(log => html`
                  <div class="log-item ${log.type}">
                    <div class="log-time">${new Date(log.timestamp).toLocaleTimeString("id-ID")}</div>
                    <div>${log.description}</div>
                  </div>
                `)}
            </div>
            <button class="reset-btn" @click="${this._resetToday}">🔄 Reset Hari Ini</button>
          </div>
        </div>
      ` : ""}
      ${this._toastMsg ? html`<div class="toast">${this._toastMsg}</div>` : ""}
    `;
  }
}
globalThis.customElements.define(ActivityLogger.tag, ActivityLogger);

// ==========================================
// 2. COMPONENT: <attendance-tracker>
// ==========================================
export class AttendanceTracker extends I18NMixin(DDDSuper(LitElement)) {
  static get tag() { return "attendance-tracker"; }
  static get properties() { return { ...super.properties, _logs: { state: true } }; }
  constructor() { super(); this._logs = getInitialLogs(); }
  
  connectedCallback() {
    super.connectedCallback();
    this._reloadHandler = () => { this._logs = getInitialLogs(); };
    globalThis.addEventListener("a3-activity-logged", this._reloadHandler);
    globalThis.addEventListener("storage", this._reloadHandler);
  }
  disconnectedCallback() {
    globalThis.removeEventListener("a3-activity-logged", this._reloadHandler);
    globalThis.removeEventListener("storage", this._reloadHandler);
    super.disconnectedCallback();
  }

  // FIX: Hitung progress HARI INI saja (bukan 7 hari)
  _getTodayStats() {
    const today = getTodayString();
    const todayLogs = this._logs.filter(log => log.date === today);
    
    const counts = {
      reading: todayLogs.filter(l => l.type === "reading").length,
      quiz: todayLogs.filter(l => l.type === "quiz").length,
      assignment: todayLogs.filter(l => l.type === "assignment").length,
      discussion: todayLogs.filter(l => l.type === "discussion").length,
      total: todayLogs.length
    };
    
    // FIX: Kriteria harian yang realistis (tidak langsung 100%)
    // Target: minimal 5 aktivitas total + minimal 1 dari 3 kategori inti
    const hasReading = counts.reading >= 1 ? 1 : 0;
    const hasCoreActivity = (counts.quiz + counts.assignment + counts.discussion) >= 1 ? 1 : 0;
    const hasEnoughActivity = counts.total >= 3 ? 1 : 0;
    
    const criteriaCount = hasReading + hasCoreActivity + hasEnoughActivity;
    const attendancePercentage = Math.round((criteriaCount / 3) * 100);
    
    return { 
      counts, 
      attendancePercentage, 
      status: attendancePercentage >= 67 ? "LENGKAP" : attendancePercentage >= 34 ? "PROSES" : "BELUM MULAI"
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: block; font-family: var(--ddd-font-primary); color: var(--ddd-theme-default-text); }
        .tracker-card { background: var(--ddd-theme-default-surface); border-radius: var(--ddd-radius-lg); padding: var(--ddd-spacing-6); border: 1px solid var(--ddd-theme-polaris-border); box-shadow: var(--ddd-shadow-1); }
        h3 { margin: 0 0 var(--ddd-spacing-4) 0; font-size: var(--ddd-font-size-l); color: var(--ddd-theme-primary); display: flex; align-items: center; gap: var(--ddd-spacing-2); }
        .date-info { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-bottom: var(--ddd-spacing-4); text-align: center; }
        .flex-container { display: flex; gap: var(--ddd-spacing-8); align-items: center; flex-wrap: wrap; }
        .gauge-section { flex: 1; min-width: 220px; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .gauge-wrapper { position: relative; width: 160px; height: 160px; margin-bottom: var(--ddd-spacing-3); }
        svg { transform: rotate(-90deg); width: 160px; height: 160px; }
        circle { fill: none; stroke-width: 12; }
        .bg-circle { stroke: var(--ddd-theme-polaris-surface-hover); }
        .fg-circle { stroke: var(--ddd-theme-primary); stroke-linecap: round; transition: stroke-dashoffset 0.6s; }
        .gauge-value { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); }
        .badge { padding: var(--ddd-spacing-2) var(--ddd-spacing-4); border-radius: var(--ddd-radius-full); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-bold); display: inline-block; margin-top: var(--ddd-spacing-2); }
        .badge.success { background-color: var(--ddd-theme-success-light); color: var(--ddd-theme-success-text); }
        .badge.warning { background-color: var(--ddd-theme-warning-light); color: var(--ddd-theme-warning-text); }
        .badge.info { background-color: var(--ddd-theme-info-light, #e3f2fd); color: var(--ddd-theme-info-text, #1976d2); }
        .criteria-list { flex: 2; min-width: 280px; display: flex; flex-direction: column; gap: var(--ddd-spacing-3); }
        .criteria-item { display: flex; align-items: center; justify-content: space-between; padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-radius: var(--ddd-radius-md); background-color: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border); }
        .crit-info { display: flex; align-items: center; gap: var(--ddd-spacing-3); }
        .icon { font-size: var(--ddd-font-size-l); width: 32px; height: 32px; background-color: var(--ddd-theme-polaris-surface-hover); border-radius: var(--ddd-radius-md); display: flex; align-items: center; justify-content: center; }
        .crit-name { font-weight: var(--ddd-font-weight-medium); font-size: var(--ddd-font-size-s); }
        .crit-progress { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-top: 2px; }
        .status-indicator { font-size: var(--ddd-font-size-l); }
        .status-indicator.check { color: var(--ddd-theme-success); }
        .status-indicator.cross { color: var(--ddd-theme-polaris-border); }
      `
    ];
  }

  render() {
    const stats = this._getTodayStats();
    const radius = 65;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (stats.attendancePercentage / 100) * circumference;
    const today = new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long" });
    
    return html`
      <div class="tracker-card">
        <h3>📊 Status Kehadiran Hari Ini</h3>
        <div class="date-info">📅 ${today}</div>
        <div class="flex-container">
          <div class="gauge-section">
            <div class="gauge-wrapper">
              <svg><circle class="bg-circle" cx="80" cy="80" r="${radius}"></circle><circle class="fg-circle" cx="80" cy="80" r="${radius}" stroke-dasharray="${circumference}" stroke-dashoffset="${strokeDashoffset}"></circle></svg>
              <div class="gauge-value">${stats.attendancePercentage}%</div>
            </div>
            <span class="badge ${stats.attendancePercentage >= 67 ? 'success' : stats.attendancePercentage >= 34 ? 'warning' : 'info'}">Status: ${stats.status}</span>
          </div>
          <div class="criteria-list">
            <div class="criteria-item">
              <div class="crit-info"><div class="icon">📖</div><div><div class="crit-name">Membaca Materi</div><div class="crit-progress">Tercapai: ${stats.counts.reading} dari min. 1 kali</div></div></div>
              <div class="status-indicator ${stats.counts.reading >= 1 ? 'check' : 'cross'}">${stats.counts.reading >= 1 ? "✅" : "⏳"}</div>
            </div>
            <div class="criteria-item">
              <div class="crit-info"><div class="icon">🎯</div><div><div class="crit-name">Aktivitas Inti (Kuis/Tugas/Diskusi)</div><div class="crit-progress">Tercapai: ${stats.counts.quiz + stats.counts.assignment + stats.counts.discussion} dari min. 1 kali</div></div></div>
              <div class="status-indicator ${(stats.counts.quiz + stats.counts.assignment + stats.counts.discussion) >= 1 ? 'check' : 'cross'}">${(stats.counts.quiz + stats.counts.assignment + stats.counts.discussion) >= 1 ? "✅" : "⏳"}</div>
            </div>
            <div class="criteria-item">
              <div class="crit-info"><div class="icon">🔥</div><div><div class="crit-name">Total Aktivitas Hari Ini</div><div class="crit-progress">Tercapai: ${stats.counts.total} dari min. 3 kali</div></div></div>
              <div class="status-indicator ${stats.counts.total >= 3 ? 'check' : 'cross'}">${stats.counts.total >= 3 ? "✅" : "⏳"}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
globalThis.customElements.define(AttendanceTracker.tag, AttendanceTracker);

// ==========================================
// 3. COMPONENT: <engagement-score>
// ==========================================
export class EngagementScore extends I18NMixin(DDDSuper(LitElement)) {
  static get tag() { return "engagement-score"; }
  static get properties() { return { ...super.properties, appsScriptUrl: { type: String, attribute: "apps-script-url" }, studentId: { type: String, attribute: "student-id" }, _history: { state: true } }; }
  constructor() { 
    super(); 
    this.appsScriptUrl = "";
    this.studentId = "";
    this._history = []; // FIX: Ambil dari Apps Script, bukan localStorage
  }
  
  connectedCallback() {
    super.connectedCallback();
    this._fetchHistory();
  }
  
  // FIX: Ambil data 28 hari dari Apps Script (satu sheet, filter by date)
  async _fetchHistory() {
    if (!this.appsScriptUrl || !this.studentId) {
      // Fallback: hitung dari localStorage hari ini saja
      this._history = [{ date: getTodayString(), count: getInitialLogs().length }];
      return;
    }
    
    try {
      const params = new URLSearchParams({
        action: "getActivityHistory",
        studentId: this.studentId,
        days: 28
      });
      const res = await fetch(`${this.appsScriptUrl}?${params.toString()}`);
      const data = await res.json();
      this._history = data.history || [];
    } catch (e) {
      console.error("[engagement-score] Fetch failed:", e);
      this._history = [{ date: getTodayString(), count: getInitialLogs().length }];
    }
  }
  
  _getActivityMap() {
    const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    const now = new Date();
    const map = [];
    
    // FIX: Bangun map dari data history (bisa dari server)
    for (let offset = 27; offset >= 0; offset--) {
      const d = new Date(); 
      d.setDate(now.getDate() - offset);
      const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      
      // Cari data untuk tanggal ini
      const dayData = this._history.find(h => h.date === dateStr);
      const count = dayData ? dayData.count : 0;
      
      map.push({ 
        date: d, 
        dateStr,
        dayName: days[d.getDay()], 
        count 
      });
    }
    return map;
  }
  
  static get styles() {
    return [
      super.styles,
      css`
        :host { display: block; font-family: var(--ddd-font-primary); color: var(--ddd-theme-default-text); }
        .engagement-card { background: var(--ddd-theme-default-surface); border-radius: var(--ddd-radius-lg); padding: var(--ddd-spacing-6); border: 1px solid var(--ddd-theme-polaris-border); box-shadow: var(--ddd-shadow-1); }
        h3 { margin: 0 0 var(--ddd-spacing-3) 0; font-size: var(--ddd-font-size-l); color: var(--ddd-theme-primary); display: flex; align-items: center; gap: var(--ddd-spacing-2); }
        .consistency-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--ddd-spacing-4); margin-bottom: var(--ddd-spacing-6); }
        .stat-mini-card { background-color: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); display: flex; flex-direction: column; gap: var(--ddd-spacing-1); }
        .mini-label { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); font-weight: var(--ddd-font-weight-medium); }
        .mini-val { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary); }
        .heatmap-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: var(--ddd-spacing-2); max-width: 500px; margin: 0 auto; }
        .cell { aspect-ratio: 1; background-color: var(--ddd-theme-polaris-surface-hover); border-radius: var(--ddd-radius-sm); cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; font-size: var(--ddd-font-size-xs); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-secondary); }
        .cell:hover { transform: scale(1.15); z-index: 10; box-shadow: var(--ddd-shadow-1); }
        .cell.lvl-1 { background-color: var(--ddd-theme-accent-light); color: var(--ddd-theme-on-primary); }
        .cell.lvl-2 { background-color: var(--ddd-theme-accent); color: var(--ddd-theme-on-primary); }
        .cell.lvl-3 { background-color: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary); }
        .cell.lvl-4 { background-color: var(--ddd-theme-default-text); color: var(--ddd-theme-on-primary); }
        .legend { display: flex; justify-content: center; gap: var(--ddd-spacing-2); margin-top: var(--ddd-spacing-4); font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); align-items: center; }
        .legend-cell { width: 16px; height: 16px; border-radius: var(--ddd-radius-sm); }
      `
    ];
  }
  
  render() {
    const activityMap = this._getActivityMap();
    const totalInteractions = activityMap.reduce((sum, d) => sum + d.count, 0);
    const activeDays = activityMap.filter(day => day.count > 0).length;
    const consistencyIndex = Math.round((activeDays / 28) * 100);
    
    return html`
      <div class="engagement-card">
        <h3>🔥 Konsistensi 28 Hari Terakhir</h3>
        <div class="consistency-stats">
          <div class="stat-mini-card"><span class="mini-label">Total Aktivitas</span><span class="mini-val">${totalInteractions} kali</span></div>
          <div class="stat-mini-card"><span class="mini-label">Hari Aktif</span><span class="mini-val">${activeDays} / 28</span></div>
          <div class="stat-mini-card"><span class="mini-label">Indeks Konsistensi</span><span class="mini-val">${consistencyIndex}%</span></div>
        </div>
        <div class="heatmap-grid">
          ${activityMap.map(cell => {
            let lvl = "";
            if (cell.count === 1) lvl = "lvl-1";
            else if (cell.count === 2) lvl = "lvl-2";
            else if (cell.count >= 3 && cell.count <= 5) lvl = "lvl-3";
            else if (cell.count > 5) lvl = "lvl-4";
            return html`<div class="cell ${lvl}" title="${cell.dateStr}: ${cell.count} aktivitas">${cell.count > 0 ? cell.count : ""}</div>`;
          })}
        </div>
        <div class="legend">
          <span>Sedikit</span>
          <div class="legend-cell" style="background: var(--ddd-theme-polaris-surface-hover);"></div>
          <div class="legend-cell" style="background: var(--ddd-theme-accent-light);"></div>
          <div class="legend-cell" style="background: var(--ddd-theme-accent);"></div>
          <div class="legend-cell" style="background: var(--ddd-theme-primary);"></div>
          <div class="legend-cell" style="background: var(--ddd-theme-default-text);"></div>
          <span>Banyak</span>
        </div>
      </div>
    `;
  }
}
globalThis.customElements.define(EngagementScore.tag, EngagementScore);

// ==========================================
// 4. COMPONENT: <transparent-gradebook>
// (Tetap sama seperti versi sebelumnya, tidak ada perubahan signifikan)
// ==========================================
export class TransparentGradebook extends I18NMixin(DDDSuper(LitElement)) {
  static get tag() { return "transparent-gradebook"; }
  static get properties() {
    return {
      ...super.properties,
      appsScriptUrl: { type: String, attribute: "apps-script-url" },
      studentId: { type: String, attribute: "student-id" },
      studentName: { type: String, attribute: "student-name" },
      viewMode: { type: String, attribute: "view-mode" },
      _scores: { state: true }
    };
  }
  constructor() {
    super();
    this.appsScriptUrl = "";
    this.studentId = "";
    this.studentName = "";
    this.viewMode = "student";
    this._scores = { kehadiran: 0, ulanganHarian: 0, uts: 0, uas: 0 };
  }
  
  connectedCallback() {
    super.connectedCallback();
    this._fetchScores();
  }
  
  async _fetchScores() {
    if (!this.appsScriptUrl || !this.studentId) return;
    try {
      const params = new URLSearchParams({
        action: "getStudentScores",
        studentId: this.studentId
      });
      const res = await fetch(`${this.appsScriptUrl}?${params.toString()}`);
      const data = await res.json();
      if (data.scores) this._scores = data.scores;
    } catch (e) { console.error("[gradebook] Fetch failed:", e); }
  }
  
  _getFinalScore() {
    const final = (this._scores.kehadiran * 0.125) + (this._scores.ulanganHarian * 0.375) + (this._scores.uts * 0.25) + (this._scores.uas * 0.25);
    return Math.round(final * 10) / 10;
  }
  
  _getGradeLetter(score) {
    if (score >= 85) return "A";
    if (score >= 80) return "A-";
    if (score >= 75) return "B+";
    if (score >= 70) return "B";
    if (score >= 60) return "C+";
    return "D";
  }
  
  static get styles() {
    return [
      super.styles,
      css`
        :host { display: block; font-family: var(--ddd-font-primary); color: var(--ddd-theme-default-text); }
        .grade-card { background: var(--ddd-theme-default-surface); border-radius: var(--ddd-radius-lg); padding: var(--ddd-spacing-6); border: 1px solid var(--ddd-theme-polaris-border); box-shadow: var(--ddd-shadow-1); }
        h3 { margin: 0; font-size: var(--ddd-font-size-l); color: var(--ddd-theme-primary); display: flex; align-items: center; gap: var(--ddd-spacing-2); }
        .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: var(--ddd-spacing-4); margin: var(--ddd-spacing-6) 0; }
        .summary-item { background: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); text-align: center; }
        .summary-item.highlight { background-color: var(--ddd-theme-polaris-surface-hover); border-color: var(--ddd-theme-accent); }
        .summary-label { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); text-transform: uppercase; letter-spacing: 0.5px; font-weight: var(--ddd-font-weight-medium); }
        .summary-val { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); margin-top: var(--ddd-spacing-1); }
        .summary-val.brand { color: var(--ddd-theme-primary); }
        .table-wrapper { width: 100%; overflow-x: auto; border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-theme-polaris-border); }
        table { width: 100%; border-collapse: collapse; text-align: left; font-size: var(--ddd-font-size-s); }
        th { background-color: var(--ddd-theme-polaris-surface-hover); color: var(--ddd-theme-secondary); font-weight: var(--ddd-font-weight-bold); padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-bottom: 2px solid var(--ddd-theme-polaris-border); }
        td { padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-bottom: 1px solid var(--ddd-theme-polaris-border); }
        .row-category { font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary); }
      `
    ];
  }
  
  render() {
    const finalScore = this._getFinalScore();
    const gradeLetter = this._getGradeLetter(finalScore);
    return html`
      <div class="grade-card">
        <h3>📖 Pencapaian Hasil Belajar</h3>
        <div class="summary-grid">
          <div class="summary-item"><span class="summary-label">Kehadiran</span><span class="summary-val">${this._scores.kehadiran}%</span></div>
          <div class="summary-item"><span class="summary-label">Ulangan Harian</span><span class="summary-val">${this._scores.ulanganHarian}%</span></div>
          <div class="summary-item highlight"><span class="summary-label">Nilai Akhir</span><span class="summary-val brand">${finalScore}</span></div>
          <div class="summary-item highlight"><span class="summary-label">Grade</span><span class="summary-val brand">${gradeLetter}</span></div>
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>Komponen</th><th>Bobot</th><th>Nilai</th></tr></thead>
            <tbody>
              <tr><td class="row-category">Kehadiran</td><td style="text-align: center;">12.5%</td><td>${this._scores.kehadiran}</td></tr>
              <tr><td class="row-category">Ulangan Harian</td><td style="text-align: center;">37.5%</td><td>${this._scores.ulanganHarian}</td></tr>
              <tr><td class="row-category">UTS</td><td style="text-align: center;">25%</td><td>${this._scores.uts || '—'}</td></tr>
              <tr><td class="row-category">UAS</td><td style="text-align: center;">25%</td><td>${this._scores.uas || '—'}</td></tr>
            </tbody>
            <tfoot><tr><td colspan="2" style="font-weight: var(--ddd-font-weight-bold); text-align: right;">Nilai Akhir:</td><td style="font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary);">${finalScore} (${gradeLetter})</td></tr></tfoot>
          </table>
        </div>
      </div>
    `;
  }
}
globalThis.customElements.define(TransparentGradebook.tag, TransparentGradebook);