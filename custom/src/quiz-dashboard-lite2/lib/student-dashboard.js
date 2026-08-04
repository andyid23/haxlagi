import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js"
import { LitElement, html, css } from "lit"
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js"

/**
 * <student-dashboard>
 * Dashboard siswa untuk melihat nilai, leaderboard, dan aktivitas dari Google Sheets.
 * Fetch data via Apps Script GET endpoints.
 */
export class StudentDashboard extends I18NMixin(DDDSuper(LitElement)) {
  static get tag() {
    return "student-dashboard"
  }

  static get properties() {
    return {
      ...super.properties,
      appsScriptUrl: { type: String, attribute: "apps-script-url" },
      studentName: { type: String, attribute: "student-name", reflect: true },
      _activeTab: { state: true },
      _loading: { state: true },
      _error: { state: true },
      _leaderboard: { state: true },
      _student: { state: true },
      _rawKuis: { state: true },
      _rawAktivitas: { state: true },
      _pertemuanList: { state: true },
      _pertemuanDetail: { state: true },
      _loaded: { state: true }
    }
  }

  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Student Dashboard",
        description: "Dashboard siswa untuk melihat nilai, leaderboard, dan aktivitas dari Google Sheets",
        icon: "icons:dashboard",
        color: "purple",
        tags: ["Education", "Dashboard", "Gradebook"]
      },
      settings: {
        configure: [
          {
            property: "appsScriptUrl",
            title: "Apps Script URL",
            description: "URL Google Apps Script Web App untuk fetch data",
            inputMethod: "textfield",
            required: true
          },
          {
            property: "studentName",
            title: "Nama Siswa (opsional)",
            description: "Nama siswa default (bisa diubah di form setup)",
            inputMethod: "textfield"
          }
        ],
        advanced: []
      },
      saveOptions: {
        unsetAttributes: ["_activeTab", "_loading", "_error", "_leaderboard", "_student", "_rawKuis", "_rawAktivitas", "_pertemuanList", "_pertemuanDetail", "_loaded"]
      }
    }
  }

  constructor() {
    super()
    this.appsScriptUrl = ""
    this.studentName = ""
    this._activeTab = "leaderboard"
    this._loading = false
    this._error = ""
    this._leaderboard = []
    this._student = null
    this._rawKuis = []
    this._rawAktivitas = []
    this._pertemuanList = []
    this._pertemuanDetail = null
    this._loaded = false
    this.t = {
      ...this.t,
      title: "Dashboard Siswa",
      subtitle: "Lihat nilai & aktivitas dari Google Sheets",
      setupTitle: "Hubungkan ke Google Sheets",
      setupDesc: "Masukkan URL Apps Script Web App dan nama Anda untuk melihat data.",
      urlLabel: "URL Apps Script",
      nameLabel: "Nama Anda",
      urlPlaceholder: "https://script.google.com/macros/s/.../exec",
      namePlaceholder: "Nama siswa...",
      loadBtn: "Tampilkan Data",
      loading: "Mengambil data dari Google Sheets...",
      tabLeaderboard: "Leaderboard",
      tabKuis: "Kuis Saya",
      tabAktivitas: "Aktivitas Saya",
      tabPertemuan: "Pertemuan",
      noData: "Belum ada data.",
      noKuis: "Belum ada data kuis. Kerjakan kuis di halaman pertemuan!",
      noAktivitas: "Belum ada log aktivitas. Aktivitas otomatis tercatat saat kamu scroll atau klik materi!",
      caraKerja: "Cara Kerja",
      cara1: "Masukkan URL Apps Script — sama dengan yang dipakai di dashboard kuis",
      cara2: "Masukkan nama Anda — data dicocokkan dengan nama di sheet",
      cara3: "Klik Tampilkan — fetch data dari Apps Script API GET endpoint",
      cara4: "Jelajahi tab: Leaderboard, Kuis Saya, Aktivitas Saya, Pertemuan"
    }
  }

  connectedCallback() {
    super.connectedCallback()
    if (globalThis.HaxStore && typeof globalThis.HaxStore.requestAvailability === "function") {
      const store = globalThis.HaxStore.requestAvailability()
      if (store && !store.elementList[StudentDashboard.tag]) {
        store.elementList[StudentDashboard.tag] = StudentDashboard.haxProperties
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  get _url() {
    return this.appsScriptUrl || ""
  }

  get _name() {
    return this.studentName || ""
  }

  _getStorage(key, fb) {
    try {
      const v = localStorage.getItem(key)
      return v ? JSON.parse(v) : fb
    } catch { return fb }
  }

  _setStorage(key, v) {
    try { localStorage.setItem(key, JSON.stringify(v)) } catch {}
  }

  _setupUrl(e) {
    e.preventDefault()
    const urlEl = this.shadowRoot.querySelector("#url-input")
    const nameEl = this.shadowRoot.querySelector("#name-input")
    const url = urlEl ? urlEl.value.trim() : ""
    const name = nameEl ? nameEl.value.trim() : ""
    if (!url) { this._error = "Masukkan URL Apps Script terlebih dahulu."; return }
    if (!name) { this._error = "Masukkan nama Anda."; return }
    this.appsScriptUrl = url
    this.studentName = name
    this._setStorage("apps_script_url", url)
    this._setStorage("student_name", name)
    this._error = ""
    this._loadData()
  }

  async _loadData() {
    const url = this._url
    const name = this._name
    if (!url || !name) return
    this._loading = true
    this._error = ""
    try {
      const base = url + (url.includes("?") ? "&" : "?")
      const [lbRes, sumRes] = await Promise.all([
        fetch(base + "action=leaderboard"),
        fetch(base + "action=summary&name=" + encodeURIComponent(name))
      ])
      const lb = await lbRes.json()
      const sum = await sumRes.json()

      let studentRow = null
      if (sum.status === "ok" && sum.data) {
        studentRow = sum.data
      } else if (sum.status === "not_found" && sum.data) {
        studentRow = {
          "Nama": name,
          "Total Kuis": sum.data.totalKuis || 0,
          "Rata-rata Skor": sum.data.rataSkor || 0,
          "Skor Tertinggi": sum.data.skorTertinggi || 0,
          "Skor Terendah": 0,
          "Total Aktivitas": sum.data.totalAktivitas || 0,
          "Reading": 0,
          "Quiz Activity": 0,
          "Discussion": 0,
          "Download": 0,
          "Jumlah Pertemuan": 0
        }
        if (sum.data.kuis) {
          sum.data.kuis.forEach(k => {
            if (k.score > (parseInt(studentRow["Skor Tertinggi"]) || 0)) studentRow["Skor Tertinggi"] = k.score
            if (k.score < (parseInt(studentRow["Skor Terendah"]) || 100)) studentRow["Skor Terendah"] = k.score
          })
        }
        if (sum.data.aktivitas) {
          sum.data.aktivitas.forEach(a => {
            const t = a.type || ""
            if (t === "reading") studentRow.Reading = (parseInt(studentRow.Reading) || 0) + 1
            else if (t === "quiz") studentRow["Quiz Activity"] = (parseInt(studentRow["Quiz Activity"]) || 0) + 1
            else if (t === "discussion") studentRow.Discussion = (parseInt(studentRow.Discussion) || 0) + 1
            else if (t === "download") studentRow.Download = (parseInt(studentRow.Download) || 0) + 1
          })
        }
      }

      this._leaderboard = (lb.status === "ok" ? lb.leaderboard : [])
      this._student = studentRow
      this._rawKuis = sum.data ? (sum.data.kuis || []) : []
      this._rawAktivitas = sum.data ? (sum.data.aktivitas || []) : []
      this._loaded = true
    } catch (err) {
      this._error = "Gagal mengambil data. Pastikan URL Apps Script benar dan sudah di-deploy sebagai Web App dengan akses 'Anyone'."
      console.error("[student-dashboard]", err)
    }
    this._loading = false
  }

  async _loadPertemuan(p) {
    const url = this._url
    const name = this._name
    if (!url) return
    this._pertemuanDetail = { loading: true, pertemuan: p, quiz: [], aktivitas: [] }
    try {
      const base = url + (url.includes("?") ? "&" : "?")
      const [quizRes, actRes] = await Promise.all([
        fetch(base + "action=pertemuan&sheet=" + encodeURIComponent(p)),
        fetch(base + "action=aktivitas&sheet=" + encodeURIComponent(p) + "&name=" + encodeURIComponent(name))
      ])
      const quizData = await quizRes.json()
      const actData = await actRes.json()
      this._pertemuanDetail = {
        loading: false,
        pertemuan: p,
        quiz: quizData.siswa || [],
        aktivitas: actData.aktivitas || []
      }
    } catch (err) {
      this._pertemuanDetail = { loading: false, pertemuan: p, quiz: [], aktivitas: [], error: "Gagal memuat data pertemuan." }
      console.error("[student-dashboard] pertemuan fetch failed:", err)
    }
  }

  async _loadPertemuanList() {
    const url = this._url
    if (!url) return
    try {
      const base = url + (url.includes("?") ? "&" : "?")
      const res = await fetch(base + "action=list")
      const data = await res.json()
      const raw = data.pertemuan || []
      const seen = {}
      const uniq = []
      raw.forEach(s => {
        const p = s.replace(" - Kuis", "").replace(" - Aktivitas", "")
        if (!seen[p]) { seen[p] = true; uniq.push(p) }
      })
      this._pertemuanList = uniq
    } catch (err) {
      console.error("[student-dashboard] list fetch failed:", err)
    }
  }

  _setTab(tab) {
    this._activeTab = tab
    if (tab === "pertemuan" && this._pertemuanList.length === 0) {
      this._loadPertemuanList()
    }
  }

  _rankBadge(i) {
    if (i === 0) return html`<span class="rank-badge rank-1">1</span>`
    if (i === 1) return html`<span class="rank-badge rank-2">2</span>`
    if (i === 2) return html`<span class="rank-badge rank-3">3</span>`
    return html`<span class="rank-badge">${i + 1}</span>`
  }

  _typeEmoji(type) {
    return { reading: "📖", quiz: "📝", discussion: "💬", download: "📥" }[type] || "📌"
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
          color: var(--ddd-theme-default-text);
          max-width: 960px;
          /* margin: 0 auto — No DDD token; centering pattern for host element */
          margin: 0 auto;
        }
        .setup-card {
          background: var(--ddd-theme-default-surface);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-5);
          margin-bottom: var(--ddd-spacing-5);
          box-shadow: var(--ddd-shadow-1);
        }
        .setup-card h2 {
          color: var(--ddd-theme-primary);
          margin: 0 0 var(--ddd-spacing-1) 0;
          font-size: var(--ddd-font-size-l);
        }
        .setup-card p {
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-secondary);
          margin: 0 0 var(--ddd-spacing-4) 0;
        }
        .form-row {
          display: flex;
          gap: var(--ddd-spacing-3);
          flex-wrap: wrap;
          align-items: flex-end;
        }
        .form-group {
          flex: 1;
          min-width: 250px;
        }
        .form-group label {
          display: block;
          font-size: var(--ddd-font-size-xs);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-text);
          margin-bottom: var(--ddd-spacing-1);
        }
        .form-group input {
          width: 100%;
          padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-s);
          font-family: var(--ddd-font-primary);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          /* outline: none — No DDD token; focus state handled via box-shadow focus-ring instead */
          outline: none;
          box-sizing: border-box;
          background: var(--ddd-theme-default-surface);
          color: var(--ddd-theme-default-text);
        }
        .form-group input:focus {
          border-color: var(--ddd-theme-primary);
          box-shadow: 0 0 0 2px var(--ddd-theme-polaris-focus-ring);
        }
        .btn {
          padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          background: var(--ddd-theme-primary);
          color: var(--ddd-theme-on-primary);
          /* border: none — No DDD token; button reset requires explicit removal of default browser border */
          border: none;
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          font-family: var(--ddd-font-primary);
          white-space: nowrap;
        }
        .btn:hover { background: var(--ddd-theme-accent); }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .error-msg {
          margin-top: var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-xs);
          color: var(--ddd-theme-error);
        }
        .loading {
          text-align: center;
          padding: var(--ddd-spacing-8);
          color: var(--ddd-theme-secondary);
        }
        .spinner {
          display: inline-block;
          width: 32px;
          height: 32px;
          border: 3px solid var(--ddd-theme-polaris-border);
          border-top-color: var(--ddd-theme-primary);
          /* border-radius: 50% — No DDD token; DDD --ddd-radius-full is for pill shapes, not perfect circle for square elements */
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-bottom: var(--ddd-spacing-3);
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-5);
        }
        .stat-card {
          background: var(--ddd-theme-polaris-surface);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-4);
          text-align: center;
        }
        .stat-card .label {
          font-size: var(--ddd-font-size-xs);
          color: var(--ddd-theme-secondary);
          text-transform: uppercase;
          letter-spacing: var(--ddd-ls-36-lg);
        }
        .stat-card .val {
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-primary);
          margin-top: var(--ddd-spacing-1);
        }
        .stat-card.highlight {
          background: var(--ddd-theme-polaris-surface-hover);
          border-color: var(--ddd-theme-primary);
        }
        .stat-card.highlight .val {
          color: var(--ddd-theme-default-text);
        }
        .tabs {
          display: flex;
          gap: var(--ddd-spacing-1);
          margin-bottom: var(--ddd-spacing-0);
          border-bottom: 2px solid var(--ddd-theme-polaris-border);
          overflow-x: auto;
        }
        .tab-btn {
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
          font-family: var(--ddd-font-primary);
          background: transparent;
          color: var(--ddd-theme-default-text);
          /* border: none — No DDD token; button reset */
          border: none;
          /* border-bottom: 2px solid transparent — No DDD token; inactive tab indicator uses transparent border for alignment */
          border-bottom: 2px solid transparent;
          /* margin-bottom: -2px — No DDD token; negative margin aligns active border with container border */
          margin-bottom: -2px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .tab-btn:hover { color: var(--ddd-theme-primary); background: var(--ddd-theme-polaris-surface-hover); }
        .tab-btn.active {
          color: var(--ddd-theme-primary);
          border-bottom-color: var(--ddd-theme-primary);
          font-weight: var(--ddd-font-weight-bold);
        }
        .tab-content {
          background: var(--ddd-theme-default-surface);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-top: none;
          border-radius: 0 0 var(--ddd-radius-md) var(--ddd-radius-md);
          padding: var(--ddd-spacing-5);
          min-height: 300px;
        }
        table.dtable {
          width: 100%;
          border-collapse: collapse;
          font-size: var(--ddd-font-size-xs);
        }
        table.dtable th {
          background: var(--ddd-theme-polaris-surface-hover);
          color: var(--ddd-theme-primary);
          font-weight: var(--ddd-font-weight-bold);
          padding: var(--ddd-spacing-3);
          text-align: left;
          border-bottom: 2px solid var(--ddd-theme-polaris-border);
        }
        table.dtable td {
          padding: var(--ddd-spacing-3);
          border-bottom: 1px solid var(--ddd-theme-polaris-border);
        }
        table.dtable tr:hover td { background: var(--ddd-theme-polaris-surface); }
        .badge-lulus {
          background: var(--ddd-theme-success);
          color: var(--ddd-theme-on-primary);
          /* padding: 2px 8px — No DDD token; compact badge sizing not covered by DDD spacing scale */
          padding: 2px 8px;
          border-radius: var(--ddd-radius-full);
          font-size: var(--ddd-font-size-3xs);
          font-weight: var(--ddd-font-weight-bold);
        }
        .badge-gagal {
          background: var(--ddd-theme-error);
          color: var(--ddd-theme-on-primary);
          /* padding: 2px 8px — No DDD token; compact badge sizing not covered by DDD spacing scale */
          padding: 2px 8px;
          border-radius: var(--ddd-radius-full);
          font-size: var(--ddd-font-size-3xs);
          font-weight: var(--ddd-font-weight-bold);
        }
        .rank-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          /* border-radius: 50% — No DDD token; DDD --ddd-radius-full is for pill shapes, not perfect circle for square elements */
          border-radius: 50%;
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-xs);
          background: var(--ddd-theme-polaris-surface-hover);
        }
        .rank-1 { background: #ffd700; color: #5c4100; }
        .rank-2 { background: #c0c0c0; color: #333; }
        .rank-3 { background: #cd7f32; color: #fff; }
        .pertemuan-grid {
          display: flex;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-2);
          margin-bottom: var(--ddd-spacing-4);
        }
        .pertemuan-btn {
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-xs);
          font-family: var(--ddd-font-primary);
          background: var(--ddd-theme-polaris-surface-hover);
          border: 1px solid var(--ddd-theme-primary);
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          color: var(--ddd-theme-primary);
        }
        .pertemuan-btn:hover { background: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary); }
        .empty { text-align: center; color: var(--ddd-theme-secondary); padding: var(--ddd-spacing-8); }
        .info-section {
          margin-top: var(--ddd-spacing-5);
          padding: var(--ddd-spacing-4);
          background: var(--ddd-theme-polaris-surface);
          border-radius: var(--ddd-radius-md);
          border: 1px solid var(--ddd-theme-polaris-border);
        }
        .info-section h3 {
          color: var(--ddd-theme-primary);
          margin: 0 0 var(--ddd-spacing-3) 0;
          font-size: var(--ddd-font-size-m);
        }
        .info-section ol {
          margin: var(--ddd-spacing-0);
          padding-left: var(--ddd-spacing-5);
        }
        .info-section li {
          margin-bottom: var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-xs);
        }
        @media (max-width: 600px) {
          .form-row { flex-direction: column; }
          .form-group { min-width: 100%; }
          .stats-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `
    ]
  }

  render() {
    return html`
      ${!this._loaded ? this._renderSetup() : this._renderDashboard()}
    `
  }

  _renderSetup() {
    return html`
      <div class="setup-card">
        <h2>${this.t.setupTitle}</h2>
        <p>${this.t.setupDesc}</p>
        <form @submit=${this._setupUrl}>
          <div class="form-row">
            <div class="form-group">
              <label for="url-input">${this.t.urlLabel}</label>
              <input id="url-input" type="text" placeholder="${this.t.urlPlaceholder}" .value=${this._getStorage("apps_script_url", "")} />
            </div>
            <div class="form-group" style="min-width:160px;flex:0.5;">
              <label for="name-input">${this.t.nameLabel}</label>
              <input id="name-input" type="text" placeholder="${this.t.namePlaceholder}" .value=${this._getStorage("student_name", "")} />
            </div>
            <button class="btn" type="submit">${this.t.loadBtn}</button>
          </div>
        </form>
        ${this._error ? html`<div class="error-msg">${this._error}</div>` : ""}
      </div>
    `
  }

  _renderDashboard() {
    if (this._loading) {
      return html`<div class="loading"><div class="spinner"></div><p>${this.t.loading}</p></div>`
    }
    const s = this._student || {}
    return html`
      <div class="stats-grid">
        <div class="stat-card"><div class="label">Rata-rata Skor</div><div class="val">${s["Rata-rata Skor"] || 0}%</div></div>
        <div class="stat-card"><div class="label">Skor Tertinggi</div><div class="val">${s["Skor Tertinggi"] || 0}%</div></div>
        <div class="stat-card"><div class="label">Total Kuis</div><div class="val">${s["Total Kuis"] || 0}</div></div>
        <div class="stat-card"><div class="label">Aktivitas</div><div class="val">${s["Total Aktivitas"] || 0}x</div></div>
        <div class="stat-card highlight"><div class="label">Pertemuan</div><div class="val">${s["Jumlah Pertemuan"] || 0}</div></div>
      </div>
      <div class="tabs">
        <button class="tab-btn ${this._activeTab === "leaderboard" ? "active" : ""}" @click=${() => this._setTab("leaderboard")}>🏆 ${this.t.tabLeaderboard}</button>
        <button class="tab-btn ${this._activeTab === "kuis" ? "active" : ""}" @click=${() => this._setTab("kuis")}>📝 ${this.t.tabKuis}</button>
        <button class="tab-btn ${this._activeTab === "aktivitas" ? "active" : ""}" @click=${() => this._setTab("aktivitas")}>📅 ${this.t.tabAktivitas}</button>
        <button class="tab-btn ${this._activeTab === "pertemuan" ? "active" : ""}" @click=${() => this._setTab("pertemuan")}>📚 ${this.t.tabPertemuan}</button>
      </div>
      <div class="tab-content">
        ${this._activeTab === "leaderboard" ? this._renderLeaderboard() : ""}
        ${this._activeTab === "kuis" ? this._renderKuis() : ""}
        ${this._activeTab === "aktivitas" ? this._renderAktivitas() : ""}
        ${this._activeTab === "pertemuan" ? this._renderPertemuan() : ""}
      </div>
    `
  }

  _renderLeaderboard() {
    if (this._leaderboard.length === 0) {
      return html`<div class="empty">${this.t.noData}</div>`
    }
    return html`
      <table class="dtable">
        <thead><tr><th>#</th><th>Nama</th><th>Rata-rata</th><th>Tertinggi</th><th>Kuis</th><th>Aktivitas</th><th>Pertemuan</th></tr></thead>
        <tbody>
          ${this._leaderboard.map((row, i) => html`
            <tr>
              <td>${this._rankBadge(i)}</td>
              <td style="font-weight:600;">${row["Nama"] || ""}</td>
              <td>${row["Rata-rata Skor"] || 0}%</td>
              <td>${row["Skor Tertinggi"] || 0}</td>
              <td>${row["Total Kuis"] || 0}</td>
              <td>${row["Total Aktivitas"] || 0}</td>
              <td>${row["Jumlah Pertemuan"] || 0}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `
  }

  _renderKuis() {
    if (this._rawKuis.length === 0) {
      return html`<div class="empty">${this.t.noKuis}</div>`
    }
    return html`
      <table class="dtable">
        <thead><tr><th>Pertemuan</th><th>Skor</th><th>Status</th><th>Waktu</th></tr></thead>
        <tbody>
          ${this._rawKuis.map(k => html`
            <tr>
              <td style="font-weight:600;">${k.pertemuan || "-"}</td>
              <td style="font-weight:bold;color:var(--ddd-theme-primary);">${k.score}%</td>
              <td>${k.status === "LULUS" ? html`<span class="badge-lulus">LULUS</span>` : html`<span class="badge-gagal">TIDAK LULUS</span>`}</td>
              <td style="font-size:var(--ddd-font-size-3xs);color:var(--ddd-theme-secondary);">${k.timestamp || "-"}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `
  }

  _renderAktivitas() {
    if (this._rawAktivitas.length === 0) {
      return html`<div class="empty">${this.t.noAktivitas}</div>`
    }
    return html`
      <table class="dtable">
        <thead><tr><th>Pertemuan</th><th>Tipe</th><th>Deskripsi</th><th>Waktu</th></tr></thead>
        <tbody>
          ${this._rawAktivitas.map(a => html`
            <tr>
              <td style="font-weight:600;">${a.pertemuan || "-"}</td>
              <td>${this._typeEmoji(a.type)} ${a.type || "activity"}</td>
              <td>${a.desc || "-"}</td>
              <td style="font-size:var(--ddd-font-size-3xs);color:var(--ddd-theme-secondary);">${a.timestamp || "-"}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `
  }

  _renderPertemuan() {
    return html`
      <div class="pertemuan-grid">
        ${this._pertemuanList.map(p => html`
          <button class="pertemuan-btn" @click=${() => this._loadPertemuan(p)}>📅 ${p}</button>
        `)}
      </div>
      ${this._pertemuanDetail ? this._renderPertemuanDetail() : ""}
    `
  }

  _renderPertemuanDetail() {
    const d = this._pertemuanDetail
    if (d.loading) {
      return html`<div class="loading"><div class="spinner"></div><p>Memuat data ${d.pertemuan}...</p></div>`
    }
    const isMe = (nama) => nama && this._name && nama.trim().toLowerCase() === this._name.trim().toLowerCase()
    return html`
      <h4 style="color:var(--ddd-theme-primary);margin:var(--ddd-spacing-4) 0 var(--ddd-spacing-3) 0;">📝 Hasil Kuis — ${d.pertemuan}</h4>
      ${d.quiz.length === 0
        ? html`<p style="color:var(--ddd-theme-secondary);">Belum ada data kuis di pertemuan ini.</p>`
        : html`
          <table class="dtable">
            <thead><tr><th>Nama</th><th>Skor</th><th>Status</th></tr></thead>
            <tbody>
              ${d.quiz.map(s => html`
                <tr ${isMe(s.nama) ? 'style="background:var(--ddd-theme-polaris-surface-hover);"' : ""}>
                  <td style="font-weight:600;">${s.nama}${isMe(s.nama) ? " 👈" : ""}</td>
                  <td style="font-weight:bold;color:var(--ddd-theme-primary);">${s.skor}%</td>
                  <td>${s.status === "LULUS" ? html`<span class="badge-lulus">LULUS</span>` : html`<span class="badge-gagal">TIDAK LULUS</span>`}</td>
                </tr>
              `)}
            </tbody>
          </table>
        `}
      <h4 style="color:var(--ddd-theme-primary);margin:var(--ddd-spacing-5) 0 var(--ddd-spacing-3) 0;">📅 Aktivitas Saya — ${d.pertemuan}</h4>
      ${d.aktivitas.length === 0
        ? html`<p style="color:var(--ddd-theme-secondary);">Belum ada log aktivitas di pertemuan ini.</p>`
        : html`
          <div style="display:flex;gap:var(--ddd-spacing-3);flex-wrap:wrap;margin-bottom:var(--ddd-spacing-4);">
            ${(() => {
              const counts = {}
              d.aktivitas.forEach(a => { counts[a.type] = (counts[a.type] || 0) + 1 })
              return Object.entries(counts).map(([t, c]) => html`
                <div style="background:var(--ddd-theme-polaris-surface-hover);border-radius:var(--ddd-radius-md);padding:var(--ddd-spacing-2) var(--ddd-spacing-4);text-align:center;font-size:var(--ddd-font-size-xs);">
                  <div style="font-size:20px;">${this._typeEmoji(t)}</div>
                  <div style="font-weight:bold;">${c}</div>
                  <div style="font-size:var(--ddd-font-size-3xs);color:var(--ddd-theme-secondary);">${t}</div>
                </div>
              `)
            })()}
          </div>
        `}
      ${d.error ? html`<div class="error-msg">${d.error}</div>` : ""}
    `
  }
}

globalThis.customElements.define(StudentDashboard.tag, StudentDashboard)
