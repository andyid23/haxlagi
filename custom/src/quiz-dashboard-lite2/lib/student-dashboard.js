import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js"
import { LitElement, html, css } from "lit"
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js"

export class StudentDashboard extends I18NMixin(DDDSuper(LitElement)) {
  static get tag() { return "student-dashboard" }

  static get properties() {
    return {
      ...super.properties,
      appsScriptUrl: { type: String, attribute: "apps-script-url" },
      studentName: { type: String, attribute: "student-name", reflect: true },
      _activeTab: { state: true },
      _loading: { state: true },
      _error: { state: true },
      _demo: { state: true },
      _loaded: { state: true },
      _toast: { state: true },
      _leaderboard: { state: true },
      _student: { state: true },
      _kuis: { state: true },
      _aktivitas: { state: true },
      _pertemuanList: { state: true },
      _detail: { state: true },
      _demoStore: { state: true },
    }
  }

  constructor() {
    super()
    this.appsScriptUrl = ""
    this.studentName = ""
    this._activeTab = "leaderboard"
    this._loading = false
    this._error = ""
    this._demo = false
    this._loaded = false
    this._toast = ""
    this._leaderboard = []
    this._student = null
    this._kuis = []
    this._aktivitas = []
    this._pertemuanList = []
    this._detail = null
    this._demoStore = null
    this._toastT = null
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
      demoBtn: "Coba Mode Demo",
      loading: "Mengambil data dari Google Sheets...",
      tabLeaderboard: "Leaderboard",
      tabKuis: "Kuis Saya",
      tabAktivitas: "Aktivitas Saya",
      tabPertemuan: "Pertemuan",
      noData: "Belum ada data.",
      noKuis: "Belum ada data kuis. Kerjakan kuis di halaman pertemuan!",
      noAktivitas: "Belum ada log aktivitas.",
      disconnect: "Putuskan koneksi",
      refresh: "Muat ulang",
      connected: "Terhubung",
      demoMode: "Mode Demo",
      howTitle: "Cara kerja",
      how1: "Masukkan URL Apps Script — sama dengan yang dipakai di dashboard kuis",
      how2: "Masukkan nama Anda — data dicocokkan dengan nama di sheet",
      how3: "Klik Tampilkan — fetch data dari Apps Script API GET endpoint",
      how4: "Jelajahi tab: Leaderboard, Kuis Saya, Aktivitas Saya, Pertemuan"
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
    this._handleSessionChanged = this._handleSessionChanged.bind(this)
    globalThis.addEventListener("quiz-user-session-changed", this._handleSessionChanged)
    const saved = this._loadSession()
    if (saved?.nama) {
      this.studentName = saved.nama
      if (this.appsScriptUrl) {
        this._loaded = true
        this._loading = true
        this._load()
      }
    }
  }

  disconnectedCallback() {
    globalThis.removeEventListener("quiz-user-session-changed", this._handleSessionChanged)
    super.disconnectedCallback()
  }

  _handleSessionChanged(e) {
    const session = e?.detail
    if (session?.nama) {
      this.studentName = session.nama
      if (this.appsScriptUrl && !this._loaded) {
        this._loaded = true
        this._loading = true
        this._load()
      }
    } else {
      this.studentName = ""
      this._loaded = false
      this._student = null
      this._leaderboard = []
      this._kuis = []
      this._aktivitas = []
    }
  }

  attributeChangedCallback(n, _o, v) {
    if (n === "apps-script-url" && v) this.appsScriptUrl = v
    if (n === "student-name" && v) this.studentName = v
    if (this.isConnected) this.requestUpdate()
  }

  _loadSession() {
    try {
      const data = JSON.parse(localStorage.getItem("quiz_user_session"))
      if (data?.expiresAt && Date.now() > data.expiresAt) {
        localStorage.removeItem("quiz_user_session")
        return null
      }
      return data
    } catch { return null }
  }

  _getStorage(k, fb) {
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb } catch { return fb }
  }
  _setStorage(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch {} }

  _esc(s) { return String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }
  _isMe(n) { return n && this.studentName && String(n).trim().toLowerCase() === String(this.studentName).trim().toLowerCase() }
  _fmtTs(t) {
    if (!t) return "-"
    const d = new Date(t)
    if (isNaN(d.getTime())) return String(t)
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" }) + " " + d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
  }
  _emoji(t) { return { reading: "\u{1F4D6}", quiz: "\u{1F4DD}", discussion: "\u{1F4AC}", download: "\u{1F4E5}" }[t] || "\u{1F4CC}" }

  _showToast(m) {
    this._toast = m
    if (this._toastT) clearTimeout(this._toastT)
    this._toastT = setTimeout(() => { this._toast = "" }, 2800)
  }

  _avatar(nm) {
    const ini = String(nm || "?").trim().split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase()
    let h = 0; for (const ch of String(nm || "x")) h = (h * 31 + ch.charCodeAt(0)) % 5
    return html`<div class="sd-avatar av${h + 1}">${this._esc(ini)}</div>`
  }

  _submit() {
    const urlEl = this.shadowRoot.querySelector("#sd-url")
    const nameEl = this.shadowRoot.querySelector("#sd-name")
    const url = urlEl ? urlEl.value.trim() : ""
    const name = nameEl ? nameEl.value.trim() : ""
    if (!url) return this._showToast("\u26A0\uFE0F Masukkan URL Apps Script terlebih dahulu!")
    if (!url.includes("script.google.com")) return this._showToast("\u26A0\uFE0F URL tidak valid! Gunakan URL Apps Script Web App.")
    if (!name) return this._showToast("\u26A0\uFE0F Masukkan nama Anda!")
    this.appsScriptUrl = url
    this.studentName = name
    this._demo = false
    this._setStorage("sd_apps_script_url", url)
    this._setStorage("sd_student_name", name)
    this._loaded = true
    this._loading = true
    this._load()
  }

  _startDemo() {
    const nameEl = this.shadowRoot.querySelector("#sd-name")
    this.studentName = (nameEl && nameEl.value.trim()) ? nameEl.value.trim() : "Siswa Demo"
    this._demo = true
    this._loaded = true
    this._loading = true
    setTimeout(() => {
      this._buildDemo()
      this._loading = false
      this._showToast("\u2728 Mode demo aktif \u2014 data contoh dimuat")
    }, 600)
  }

  _disconnect() {
    this._loaded = false
    this._demo = false
    this._leaderboard = []
    this._student = null
    this._kuis = []
    this._aktivitas = []
    this._pertemuanList = []
    this._detail = null
    this._showToast("\uD83D\uDD0C Koneksi diputus")
  }

  _refresh() {
    if (this._demo) { this._buildDemo(); this._showToast("\uD83D\uDD04 Data demo dimuat ulang"); return }
    this._loading = true
    this._load()
  }

  async _load() {
    if (this._demo) return
    const base = this.appsScriptUrl + (this.appsScriptUrl.includes("?") ? "&" : "?")
    try {
      const [lbRes, sumRes] = await Promise.all([
        fetch(base + "action=leaderboard"),
        fetch(base + "action=summary&name=" + encodeURIComponent(this.studentName))
      ])
      const lb = await lbRes.json()
      const sum = await sumRes.json()
      let row = null
      if (sum.status === "ok" && sum.data) {
        row = sum.data
      } else if (sum.status === "not_found" && sum.data) {
        row = { Nama: this.studentName, "Total Kuis": sum.data.totalKuis || 0, "Rata-rata Skor": sum.data.rataSkor || 0,
                "Skor Tertinggi": sum.data.skorTertinggi || 0, "Skor Terendah": 0,
                "Total Aktivitas": sum.data.totalAktivitas || 0, "Jumlah Pertemuan": 0 }
        if (sum.data.kuis) sum.data.kuis.forEach(k => {
          if (k.score > (parseInt(row["Skor Tertinggi"]) || 0)) row["Skor Tertinggi"] = k.score
          if (k.score < (parseInt(row["Skor Terendah"]) || 100)) row["Skor Terendah"] = k.score
        })
      }
      this._leaderboard = (lb.status === "ok") ? (lb.leaderboard || []) : []
      this._student = row
      this._kuis = sum.data ? (sum.data.kuis || []) : []
      this._aktivitas = sum.data ? (sum.data.aktivitas || []) : []
    } catch (err) {
      console.error("[student-dashboard]", err)
      this._error = "Gagal mengambil data. Periksa URL Apps Script & akses \"Anyone\"."
    }
    this._loading = false
  }

  async _loadList() {
    if (this._demo) { this._pertemuanList = this._demoStore.list; return }
    try {
      const base = this.appsScriptUrl + (this.appsScriptUrl.includes("?") ? "&" : "?")
      const res = await fetch(base + "action=list")
      const data = await res.json()
      const raw = data.pertemuan || []
      const seen = {}; const uniq = []
      raw.forEach(s => {
        const p = s.replace(" - Kuis", "").replace(" - Aktivitas", "")
        if (!seen[p]) { seen[p] = true; uniq.push(p) }
      })
      this._pertemuanList = uniq
    } catch (e) { console.error("[student-dashboard] list failed", e) }
  }

  async _loadPertemuan(p) {
    this._detail = { loading: true, pertemuan: p, quiz: [], aktivitas: [] }
    if (this._demo) {
      setTimeout(() => {
        const d = this._demoStore.pertemuan[p] || { quiz: [], aktivitas: [] }
        this._detail = { loading: false, pertemuan: p, quiz: d.quiz, aktivitas: d.aktivitas }
      }, 400)
      return
    }
    try {
      const base = this.appsScriptUrl + (this.appsScriptUrl.includes("?") ? "&" : "?")
      const [qRes, aRes] = await Promise.all([
        fetch(base + "action=pertemuan&sheet=" + encodeURIComponent(p)),
        fetch(base + "action=aktivitas&sheet=" + encodeURIComponent(p) + "&name=" + encodeURIComponent(this.studentName))
      ])
      const qd = await qRes.json()
      const ad = await aRes.json()
      this._detail = { loading: false, pertemuan: p, quiz: qd.siswa || [], aktivitas: ad.aktivitas || [] }
    } catch (e) {
      this._detail = { loading: false, pertemuan: p, quiz: [], aktivitas: [], error: "Gagal memuat data pertemuan." }
    }
  }

  _buildDemo() {
    const now = Date.now(), day = 86400000
    const ri = (a, b) => a + Math.floor(Math.random() * (b - a + 1))
    const me = this.studentName || "Siswa Demo"
    const pertemuan = ["Pertemuan 1", "Pertemuan 2", "Pertemuan 3", "Pertemuan 4", "Pertemuan 5", "Pertemuan 6"]

    const myKuis = []
    for (let i = 0; i < 5; i++) {
      const score = ri(55, 100)
      const ts = new Date(now - (24 - i * 4) * day - ri(1, 9) * 3600000)
      myKuis.push({ pertemuan: pertemuan[i], score, status: score >= 70 ? "LULUS" : "TIDAK LULUS", timestamp: ts.toISOString() })
    }
    const scores = myKuis.map(k => k.score)
    const rata = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)

    const pool = [
      ["reading", ["Membaca Modul", "Membaca materi pertemuan", "Mengeksplorasi halaman"]],
      ["download", ["Mengunduh PDF Materi", "Mengunduh Slide Presentasi", "Mengunduh Source Code"]],
      ["discussion", ["Bertanya di forum diskusi", "Membalas komentar teman", "Menanggapi postingan"]],
      ["quiz", ["Menyelesaikan kuis pertemuan"]]
    ]
    const myAkt = []
    for (let d = 0; d < 28; d++) {
      const n = d === 0 ? ri(2, 4) : (Math.random() < 0.85 ? ri(0, 3) : 0)
      for (let j = 0; j < n; j++) {
        const [type, descs] = pool[ri(0, pool.length - 1)]
        const p = pertemuan[ri(0, pertemuan.length - 1)]
        const ts = new Date(now - d * day - ri(0, 11) * 3600000)
        myAkt.unshift({ pertemuan: p, type, desc: descs[ri(0, descs.length - 1)], timestamp: ts.toISOString() })
      }
    }

    const others = ["Aisyah Putri", "Budi Santoso", "Citra Lestari", "Dimas Prasetyo", "Eka Ramadhani", "Fajar Nugroho", "Gita Maharani", "Hendra Wijaya"]
    const board = others.map(nama => {
      const nk = ri(3, 6)
      const sc = Array.from({ length: nk }, () => ri(55, 100))
      const r = Math.round(sc.reduce((a, b) => a + b, 0) / nk)
      return { Nama: nama, "Rata-rata Skor": r, "Skor Tertinggi": Math.max(...sc), "Skor Terendah": Math.min(...sc),
               "Total Kuis": nk, "Total Aktivitas": ri(10, 50), "Jumlah Pertemuan": ri(3, 6) }
    })
    board.push({ Nama: me, "Rata-rata Skor": rata, "Skor Tertinggi": Math.max(...scores), "Skor Terendah": Math.min(...scores),
                 "Total Kuis": myKuis.length, "Total Aktivitas": myAkt.length, "Jumlah Pertemuan": myKuis.length })
    board.sort((a, b) => b["Rata-rata Skor"] - a["Rata-rata Skor"] || b["Total Aktivitas"] - a["Total Aktivitas"])

    const pertStore = {}
    pertemuan.forEach(p => {
      const quiz = []
      board.forEach(r => {
        let skor = null
        if (r.Nama === me) { const k = myKuis.find(k => k.pertemuan === p); skor = k ? k.score : null }
        else if (Math.random() > 0.2) skor = ri(50, 100)
        if (skor !== null) quiz.push({ nama: r.Nama, skor, status: skor >= 70 ? "LULUS" : "TIDAK LULUS" })
      })
      quiz.sort((a, b) => b.skor - a.skor)
      pertStore[p] = { quiz, aktivitas: myAkt.filter(a => a.pertemuan === p) }
    })

    this._demoStore = { list: pertemuan, pertemuan: pertStore }
    this._leaderboard = board
    this._student = board.find(r => r.Nama === me)
    this._kuis = myKuis
    this._aktivitas = myAkt
    this._pertemuanList = pertemuan
  }

  _counts(list) {
    const c = { reading: 0, quiz: 0, discussion: 0, download: 0 }
    ;(list || this._aktivitas || []).forEach(a => { if (c[a.type] !== undefined) c[a.type]++ })
    return c
  }

  _heatmap() {
    const acts = this._aktivitas || []
    const res = []
    for (let o = 27; o >= 0; o--) {
      const d = new Date(); d.setDate(d.getDate() - o); d.setHours(0, 0, 0, 0)
      const count = acts.filter(a => { const t = new Date(a.timestamp); return !isNaN(t) && t.setHours(0, 0, 0, 0) === d.getTime() }).length
      res.push({ date: d, count })
    }
    return res
  }

  _streak() {
    let s = 0
    const d = new Date(); d.setHours(0, 0, 0, 0)
    for (let i = 0; i < 60; i++) {
      const has = this._aktivitas.some(a => { const t = new Date(a.timestamp); return !isNaN(t) && t.setHours(0, 0, 0, 0) === d.getTime() })
      if (has) s++; else if (i > 0) break
      d.setDate(d.getDate() - 1)
    }
    return s
  }

  render() {
    const toast = this._toast ? html`<div class="sd-toast">${this._esc(this._toast)}</div>` : ""
    if (!this._loaded) return html`${toast}${this._renderSetup()}`
    if (this._loading) return html`${toast}${this._renderHeader()}<div class="sd-card"><div class="sd-load"><div class="sd-spin"></div><p>${this.t.loading}</p></div></div>`
    return html`${toast}${this._renderHeader()}${this._renderStats()}${this._renderTabs()}${this._renderContent()}`
  }

  _renderSetup() {
    return html`
    <div class="sd-setup">
      <div class="sd-setup-ic">\uD83C\uDF93</div>
      <h2>${this.t.setupTitle}</h2>
      <p class="sd-setup-desc">${this.t.setupDesc}</p>
      <div class="sd-field"><label>${this.t.urlLabel}</label>
        <input class="sd-in" id="sd-url" placeholder="${this.t.urlPlaceholder}" .value=${this._getStorage("sd_apps_script_url", "")}></div>
      <div class="sd-field"><label>${this.t.nameLabel}</label>
        <input class="sd-in" id="sd-name" placeholder="${this.t.namePlaceholder}" .value=${this.studentName || this._getStorage("sd_student_name", "")}></div>
      <button class="sd-btn p sd-fw" @click=${() => this._submit()}>${this.t.loadBtn}</button>
      <div class="sd-or"><span>atau</span></div>
      <button class="sd-btn s sd-fw" @click=${() => this._startDemo()}>${this.t.demoBtn}</button>
      <div class="sd-how">
        <div class="sd-how-t">${this.t.howTitle}</div>
        <ol>
          <li>${this.t.how1}</li>
          <li>${this.t.how2}</li>
          <li>${this.t.how3}</li>
          <li>${this.t.how4}</li>
        </ol>
      </div>
    </div>`
  }

  _renderHeader() {
    return html`
    <div class="sd-hd">
      <div>
        <h1>\uD83C\uDF93 ${this.t.title}</h1>
        <p>${this.studentName ? html`Halo, <b>${this._esc(this.studentName)}</b>!` : ""} ${this.t.subtitle}</p>
      </div>
      <div class="sd-hd-a">
        <span class="sd-live">${this._demo ? this.t.demoMode : this.t.connected}</span>
        <button class="sd-icb" @click=${() => this._refresh()} title="${this.t.refresh}">\uD83D\uDD04</button>
        <button class="sd-icb" @click=${() => this._disconnect()} title="${this.t.disconnect}">\uD83D\uDD0C</button>
      </div>
    </div>`
  }

  _renderStats() {
    const s = this._student || {}
    const rata = Number(s["Rata-rata Skor"] || 0)
    const r = 38, c = 2 * Math.PI * r, off = c - (Math.min(100, rata) / 100) * c
    return html`
    <div class="sd-hero">
      <div class="sd-gauge">
        <svg width="96" height="96" viewBox="0 0 96 96" style="transform:rotate(-90deg)">
          <circle cx="48" cy="48" r="${r}" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="9"/>
          <circle cx="48" cy="48" r="${r}" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}"/>
        </svg>
        <div class="sd-gauge-v">${rata}<small>%</small></div>
      </div>
      <div>
        <div class="sd-hero-lb">Rata-rata Skor Kuis</div>
        <div class="sd-hero-msg">${rata >= 85 ? "Luar biasa! Pertahankan! \uD83C\uDF89" : rata >= 70 ? "Bagus! Terus semangat \uD83D\uDCAA" : "Ayo tingkatkan lagi! \uD83D\uDD25"}</div>
        <div class="sd-hero-sub">Berdasarkan ${s["Total Kuis"] || 0} kuis di ${s["Jumlah Pertemuan"] || 0} pertemuan</div>
      </div>
    </div>
    <div class="sd-stats">
      <div class="sd-stat"><div class="ic">\uD83C\uDFC6</div><div class="vl">${s["Skor Tertinggi"] || 0}%</div><div class="lb">Skor Tertinggi</div></div>
      <div class="sd-stat"><div class="ic">\uD83D\uDCC9</div><div class="vl">${s["Skor Terendah"] || 0}%</div><div class="lb">Skor Terendah</div></div>
      <div class="sd-stat"><div class="ic">\uD83D\uDCDD</div><div class="vl">${s["Total Kuis"] || 0}</div><div class="lb">Total Kuis</div></div>
      <div class="sd-stat"><div class="ic">\u26A1</div><div class="vl">${s["Total Aktivitas"] || 0}</div><div class="lb">Total Aktivitas</div></div>
      <div class="sd-stat"><div class="ic">\uD83D\uDCDA</div><div class="vl">${s["Jumlah Pertemuan"] || 0}</div><div class="lb">Pertemuan</div></div>
    </div>`
  }

  _renderTabs() {
    const tabs = [["leaderboard", "\uD83C\uDFC6 " + this.t.tabLeaderboard], ["kuis", "\uD83D\uDCDD " + this.t.tabKuis],
                  ["aktivitas", "\uD83D\uDCC5 " + this.t.tabAktivitas], ["pertemuan", "\uD83D\uDCDA " + this.t.tabPertemuan]]
    return html`<div class="sd-tabs">${tabs.map(([k, l]) => html`<button class="sd-tab ${this._activeTab === k ? "on" : ""}" @click=${() => { this._activeTab = k; this._detail = null; if (k === "pertemuan" && !this._pertemuanList.length) this._loadList() }}>${l}</button>`)}</div>`
  }

  _renderContent() {
    switch (this._activeTab) {
      case "kuis": return this._renderKuis()
      case "aktivitas": return this._renderAktivitas()
      case "pertemuan": return this._renderPertemuan()
      default: return this._renderLeaderboard()
    }
  }

  _renderLeaderboard() {
    if (!this._leaderboard.length) return html`<div class="sd-card sd-empty"><div class="sd-empty-i">\uD83C\uDFC6</div><p>${this.t.noData}</p></div>`
    const top3 = this._leaderboard.slice(0, 3)
    const rest = this._leaderboard.slice(3)
    const medals = ["\uD83E\uDD47", "\uD83E\uDD48", "\uD83E\uDD49"]
    return html`
    <div class="sd-card">
      <h2>\uD83C\uDFC6 Podium Kelas</h2>
      <div class="sd-podium">
        ${top3.map((r, i) => html`
        <div class="sd-pod p${i + 1} ${this._isMe(r.Nama) ? "me" : ""}" style="order:${i === 0 ? 2 : i === 1 ? 1 : 3}">
          <div class="medal">${medals[i]}</div>
          ${this._avatar(r.Nama)}
          <div class="pod-name">${this._esc(r.Nama)}${this._isMe(r.Nama) ? " \uD83D\uDC48" : ""}</div>
          <div class="pod-avg">${r["Rata-rata Skor"] || 0}%</div>
          <div class="pod-sub">${r["Total Kuis"] || 0} kuis \u00B7 ${r["Total Aktivitas"] || 0} aktivitas</div>
        </div>`)}
      </div>
      ${rest.length ? html`
      <div class="sd-tblwrap">
      <table class="sd-tbl sd-tbl-wide">
        <thead><tr><th>#</th><th>Nama</th><th>Rata-rata</th><th>Tertinggi</th><th>Kuis</th><th>Aktivitas</th><th>Pertemuan</th></tr></thead>
        <tbody>
        ${rest.map((r, i) => html`
        <tr class="${this._isMe(r.Nama) ? "me" : ""}">
          <td><span class="sd-rank">${i + 4}</span></td>
          <td class="nm">${this._esc(r.Nama)}${this._isMe(r.Nama) ? " \uD83D\uDC48" : ""}</td>
          <td><b>${r["Rata-rata Skor"] || 0}%</b></td>
          <td>${r["Skor Tertinggi"] || 0}</td>
          <td>${r["Total Kuis"] || 0}</td>
          <td>${r["Total Aktivitas"] || 0}</td>
          <td>${r["Jumlah Pertemuan"] || 0}</td>
        </tr>`)}
        </tbody>
      </table>
      </div>` : ""}
    </div>`
  }

  _renderKuis() {
    if (!this._kuis.length) return html`<div class="sd-card sd-empty"><div class="sd-empty-i">\uD83D\uDCDD</div><p>${this.t.noKuis}</p></div>`
    const lulus = this._kuis.filter(k => k.status === "LULUS").length
    const max = Math.max(...this._kuis.map(k => Number(k.score) || 0))
    return html`
    <div class="sd-card">
      <h2>\uD83D\uDCDD Riwayat Kuis Saya</h2>
      <div class="sd-chips">
        <span class="sd-chip">\u2705 Lulus: ${lulus}</span>
        <span class="sd-chip">\u274C Belum lulus: ${this._kuis.length - lulus}</span>
        <span class="sd-chip">\uD83D\uDCC8 Skor terbaik: ${max}%</span>
      </div>
      <div class="sd-tblwrap">
      <table class="sd-tbl">
        <thead><tr><th>Pertemuan</th><th>Skor</th><th>Status</th><th>Waktu</th></tr></thead>
        <tbody>
        ${this._kuis.map(k => html`
        <tr>
          <td class="nm">${this._esc(k.pertemuan || "-")}</td>
          <td><div class="sd-score"><div class="sd-bar"><span style="width:${Math.min(100, k.score || 0)}%"></span></div><b>${k.score}%</b></div></td>
          <td>${k.status === "LULUS" ? html`<span class="sd-pill pass">LULUS</span>` : html`<span class="sd-pill fail">TIDAK LULUS</span>`}</td>
          <td class="tm">${this._fmtTs(k.timestamp)}</td>
        </tr>`)}
        </tbody>
      </table>
      </div>
    </div>`
  }

  _renderAktivitas() {
    if (!this._aktivitas.length) return html`<div class="sd-card sd-empty"><div class="sd-empty-i">\uD83D\uDCC5</div><p>${this.t.noAktivitas}</p></div>`
    const c = this._counts()
    const hm = this._heatmap()
    const streak = this._streak()
    return html`
    <div class="sd-card">
      <h2>\uD83D\uDCC5 Aktivitas Saya <span class="sd-fire">\uD83D\uDD25 Streak: ${streak} hari</span></h2>
      <div class="sd-counters">
        <div class="sd-cnt"><div class="e">\uD83D\uDCD6</div><div class="n">${c.reading}</div><div class="l">Membaca</div></div>
        <div class="sd-cnt"><div class="e">\uD83D\uDCDD</div><div class="n">${c.quiz}</div><div class="l">Kuis</div></div>
        <div class="sd-cnt"><div class="e">\uD83D\uDCAC</div><div class="n">${c.discussion}</div><div class="l">Diskusi</div></div>
        <div class="sd-cnt"><div class="e">\uD83D\uDCE5</div><div class="n">${c.download}</div><div class="l">Unduh</div></div>
      </div>
      <div class="sd-heat-t">Peta Aktivitas 28 Hari</div>
      <div class="sd-hmh"><span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span></div>
      <div class="sd-hmg">
        ${hm.map(d => {
          let l = ""
          if (d.count > 7) l = "l4"; else if (d.count > 4) l = "l3"; else if (d.count > 2) l = "l2"; else if (d.count > 0) l = "l1"
          return html`<div class="sd-hc ${l}" title="${d.date.toLocaleDateString("id-ID")}: ${d.count} aktivitas">${d.count || ""}</div>`
        })}
      </div>
      <div class="sd-hml"><span>Sedikit</span><i style="background:var(--ddd-theme-polaris-surface)"></i><i style="background:var(--ddd-theme-polaris-surface-hover)"></i><i style="background:var(--ddd-theme-accent-light, #c9b6f8)"></i><i style="background:var(--ddd-theme-accent)"></i><i style="background:var(--ddd-theme-primary)"></i><span>Banyak</span></div>
    </div>
    <div class="sd-card">
      <h2>\uD83D\uDD52 Log Terbaru</h2>
      ${this._aktivitas.slice(0, 8).map(a => html`
      <div class="sd-log ${this._esc(a.type)}">
        <span class="sd-log-e">${this._emoji(a.type)}</span>
        <div class="sd-log-b">
          <div class="sd-log-d">${this._esc(a.desc || "-")}</div>
          <div class="sd-log-m">${this._esc(a.pertemuan || "")} \u00B7 ${this._fmtTs(a.timestamp)}</div>
        </div>
      </div>`)}
    </div>`
  }

  _renderPertemuan() {
    return html`
    <div class="sd-card">
      <h2>\uD83D\uDCDA Pilih Pertemuan</h2>
      ${this._pertemuanList.length
        ? html`<div class="sd-chips">${this._pertemuanList.map(p => html`<button class="sd-chipb ${this._detail && this._detail.pertemuan === p ? "on" : ""}" @click=${() => this._loadPertemuan(p)}>\uD83D\uDCC5 ${this._esc(p)}</button>`)}</div>`
        : html`<p class="sd-muted">Memuat daftar pertemuan\u2026</p>`}
    </div>
    ${this._detail ? this._renderPertemuanDetail() : ""}`
  }

  _renderPertemuanDetail() {
    const d = this._detail
    if (d.loading) return html`<div class="sd-card"><div class="sd-load"><div class="sd-spin"></div><p>Memuat data ${this._esc(d.pertemuan)}\u2026</p></div></div>`
    const cnt = {}; d.aktivitas.forEach(a => cnt[a.type] = (cnt[a.type] || 0) + 1)
    return html`
    <div class="sd-card">
      <h2>\uD83D\uDCDD Hasil Kuis \u2014 ${this._esc(d.pertemuan)}</h2>
      ${d.quiz.length ? html`
      <div class="sd-tblwrap">
      <table class="sd-tbl">
        <thead><tr><th>Nama</th><th>Skor</th><th>Status</th></tr></thead>
        <tbody>
        ${d.quiz.map(s => html`
        <tr class="${this._isMe(s.nama) ? "me" : ""}">
          <td class="nm">${this._esc(s.nama)}${this._isMe(s.nama) ? " \uD83D\uDC48" : ""}</td>
          <td><b class="sd-prime">${s.skor}%</b></td>
          <td>${s.status === "LULUS" ? html`<span class="sd-pill pass">LULUS</span>` : html`<span class="sd-pill fail">TIDAK LULUS</span>`}</td>
        </tr>`)}
        </tbody>
      </table>
      </div>` : html`<p class="sd-muted">Belum ada data kuis di pertemuan ini.</p>`}
    </div>
    <div class="sd-card">
      <h2>\uD83D\uDCC5 Aktivitas Saya \u2014 ${this._esc(d.pertemuan)}</h2>
      ${d.aktivitas.length ? html`
      <div class="sd-counters">
        ${Object.entries(cnt).map(([t, n]) => html`<div class="sd-cnt"><div class="e">${this._emoji(t)}</div><div class="n">${n}</div><div class="l">${this._esc(t)}</div></div>`)}
      </div>
      ${d.aktivitas.slice(0, 6).map(a => html`
      <div class="sd-log ${this._esc(a.type)}">
        <span class="sd-log-e">${this._emoji(a.type)}</span>
        <div class="sd-log-b">
          <div class="sd-log-d">${this._esc(a.desc || "-")}</div>
          <div class="sd-log-m">${this._fmtTs(a.timestamp)}</div>
        </div>
      </div>`)}
      ` : html`<p class="sd-muted">Belum ada log aktivitas di pertemuan ini.</p>`}
      ${d.error ? html`<div class="sd-err">${this._esc(d.error)}</div>` : ""}
    </div>`
  }

  static get styles() {
    return [super.styles, css`
:host{display:block;max-width:960px;margin:0 auto;font-family:var(--ddd-font-primary);color:var(--ddd-theme-default-text)}
*{box-sizing:border-box;margin:0;padding:0}
.sd-toast{position:fixed;bottom:var(--ddd-spacing-6);right:var(--ddd-spacing-6);background:var(--ddd-theme-default-text);color:var(--ddd-theme-on-primary);padding:var(--ddd-spacing-3) var(--ddd-spacing-5);border-radius:var(--ddd-radius-lg);font-size:var(--ddd-font-size-s);font-weight:var(--ddd-font-weight-bold);z-index:9999;box-shadow:var(--ddd-shadow-2);animation:sdin .3s ease}
@keyframes sdin{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
.sd-hd{background:linear-gradient(135deg,var(--ddd-theme-primary),var(--ddd-theme-accent));color:var(--ddd-theme-on-primary);border-radius:var(--ddd-radius-lg);padding:var(--ddd-spacing-5) var(--ddd-spacing-6);margin-bottom:var(--ddd-spacing-4);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:var(--ddd-spacing-3);box-shadow:0 10px 26px rgba(103,80,164,.28)}
.sd-hd h1{font-size:var(--ddd-font-size-l)}
.sd-hd p{font-size:var(--ddd-font-size-xs);opacity:.92}
.sd-hd-a{display:flex;gap:var(--ddd-spacing-2);align-items:center}
.sd-live{background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.35);padding:var(--ddd-spacing-2) var(--ddd-spacing-3);border-radius:var(--ddd-radius-full);font-size:var(--ddd-font-size-3xs);font-weight:var(--ddd-font-weight-bold)}
.sd-icb{width:38px;height:38px;border-radius:var(--ddd-radius-md);border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.15);color:var(--ddd-theme-on-primary);font-size:var(--ddd-font-size-s);cursor:pointer;transition:.2s}
.sd-icb:hover{background:rgba(255,255,255,.3);transform:translateY(-1px)}
.sd-hero{background:linear-gradient(135deg,var(--ddd-theme-primary),var(--ddd-theme-accent));border-radius:var(--ddd-radius-lg);padding:var(--ddd-spacing-5) var(--ddd-spacing-6);color:var(--ddd-theme-on-primary);display:flex;align-items:center;gap:var(--ddd-spacing-6);margin-bottom:var(--ddd-spacing-4);box-shadow:0 10px 26px rgba(103,80,164,.28);flex-wrap:wrap}
.sd-gauge{position:relative;width:96px;height:96px;flex:none}
.sd-gauge-v{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:var(--ddd-font-size-xl);font-weight:var(--ddd-font-weight-bold)}
.sd-gauge-v small{font-size:var(--ddd-font-size-3xs);font-weight:var(--ddd-font-weight-bold);opacity:.85}
.sd-hero-lb{font-size:var(--ddd-font-size-3xs);font-weight:var(--ddd-font-weight-bold);text-transform:uppercase;letter-spacing:1px;opacity:.85}
.sd-hero-msg{font-size:var(--ddd-font-size-m);font-weight:var(--ddd-font-weight-bold);margin-top:2px}
.sd-hero-sub{font-size:var(--ddd-font-size-3xs);opacity:.85;margin-top:3px}
.sd-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:var(--ddd-spacing-3);margin-bottom:var(--ddd-spacing-4)}
.sd-stat{background:var(--ddd-theme-default-surface);border:1px solid var(--ddd-theme-polaris-border);border-radius:var(--ddd-radius-lg);padding:var(--ddd-spacing-4);text-align:center;transition:.2s}
.sd-stat:hover{transform:translateY(-3px);box-shadow:0 10px 24px rgba(103,80,164,.13)}
.sd-stat .ic{font-size:var(--ddd-font-size-l)}
.sd-stat .vl{font-size:var(--ddd-font-size-xl);font-weight:var(--ddd-font-weight-bold);color:var(--ddd-theme-primary);margin-top:var(--ddd-spacing-1)}
.sd-stat .lb{font-size:var(--ddd-font-size-3xs);color:var(--ddd-theme-secondary);text-transform:uppercase;letter-spacing:.7px;font-weight:var(--ddd-font-weight-bold);margin-top:2px}
.sd-tabs{display:flex;gap:var(--ddd-spacing-2);margin-bottom:var(--ddd-spacing-4);overflow-x:auto;padding-bottom:2px}
.sd-tab{padding:var(--ddd-spacing-3) var(--ddd-spacing-4);border:1px solid var(--ddd-theme-polaris-border);background:var(--ddd-theme-default-surface);border-radius:var(--ddd-radius-full);font-size:var(--ddd-font-size-s);font-weight:var(--ddd-font-weight-bold);color:var(--ddd-theme-secondary);cursor:pointer;white-space:nowrap;transition:.2s;font-family:var(--ddd-font-primary)}
.sd-tab:hover{color:var(--ddd-theme-primary);border-color:var(--ddd-theme-accent);background:var(--ddd-theme-polaris-surface-hover)}
.sd-tab.on{background:var(--ddd-theme-primary);color:var(--ddd-theme-on-primary);border-color:var(--ddd-theme-primary);box-shadow:0 4px 12px rgba(103,80,164,.3)}
.sd-card{background:var(--ddd-theme-default-surface);border:1px solid var(--ddd-theme-polaris-border);border-radius:var(--ddd-radius-lg);padding:var(--ddd-spacing-5);margin-bottom:var(--ddd-spacing-4);box-shadow:var(--ddd-shadow-1)}
.sd-card h2{font-size:var(--ddd-font-size-m);color:var(--ddd-theme-primary);margin-bottom:var(--ddd-spacing-4);display:flex;align-items:center;gap:var(--ddd-spacing-2);flex-wrap:wrap}
.sd-podium{display:flex;align-items:flex-end;justify-content:center;gap:var(--ddd-spacing-3);margin-bottom:var(--ddd-spacing-5);flex-wrap:wrap}
.sd-pod{background:var(--ddd-theme-default-surface);border:1.5px solid var(--ddd-theme-polaris-border);border-radius:var(--ddd-radius-lg);padding:var(--ddd-spacing-4) var(--ddd-spacing-4);text-align:center;width:190px;transition:.25s}
.sd-pod:hover{transform:translateY(-5px);box-shadow:0 14px 30px rgba(103,80,164,.16)}
.sd-pod .medal{font-size:30px;line-height:1}
.sd-pod.p1{width:210px;padding:var(--ddd-spacing-6) var(--ddd-spacing-4);background:linear-gradient(165deg,var(--ddd-theme-surface,#fffdf3),var(--ddd-theme-default-surface));border-color:var(--ddd-theme-accent,#f2d98c);box-shadow:0 8px 24px rgba(242,185,90,.18)}
.sd-pod.p2{border-color:var(--ddd-theme-polaris-border);background:linear-gradient(165deg,var(--ddd-theme-polaris-surface,#fbfbfd),var(--ddd-theme-default-surface))}
.sd-pod.p3{border-color:var(--ddd-theme-accent-light,#e8c9ad);background:linear-gradient(165deg,var(--ddd-theme-surface,#fdf8f3),var(--ddd-theme-default-surface))}
.sd-pod.me{outline:3px solid var(--ddd-theme-accent)}
.pod-name{font-weight:var(--ddd-font-weight-bold);font-size:var(--ddd-font-size-s);margin-top:var(--ddd-spacing-2);word-break:break-word}
.pod-avg{font-size:var(--ddd-font-size-xl);font-weight:var(--ddd-font-weight-bold);color:var(--ddd-theme-primary);margin-top:2px}
.pod-sub{font-size:var(--ddd-font-size-3xs);color:var(--ddd-theme-secondary);margin-top:2px}
.sd-avatar{width:52px;height:52px;border-radius:50%;margin:var(--ddd-spacing-2) auto 0;display:flex;align-items:center;justify-content:center;color:var(--ddd-theme-on-primary);font-weight:var(--ddd-font-weight-bold);font-size:var(--ddd-font-size-s)}
.av1{background:linear-gradient(135deg,var(--ddd-theme-primary),var(--ddd-theme-accent))}.av2{background:linear-gradient(135deg,#ec4899,#f973b6)}.av3{background:linear-gradient(135deg,#10b981,#34d399)}.av4{background:linear-gradient(135deg,#f59e0b,#fbbf24)}.av5{background:linear-gradient(135deg,#3b82f6,#60a5fa)}
.sd-tblwrap{overflow-x:auto}
.sd-tbl{width:100%;border-collapse:collapse;font-size:var(--ddd-font-size-s)}
.sd-tbl-wide{min-width:560px}
.sd-tbl th{text-align:left;padding:var(--ddd-spacing-3) var(--ddd-spacing-3);background:var(--ddd-theme-polaris-surface-hover);color:var(--ddd-theme-primary);font-size:var(--ddd-font-size-3xs);text-transform:uppercase;letter-spacing:.5px}
.sd-tbl th:first-child{border-radius:var(--ddd-radius-md) 0 0 var(--ddd-radius-md)}
.sd-tbl th:last-child{border-radius:0 var(--ddd-radius-md) var(--ddd-radius-md) 0}
.sd-tbl td{padding:var(--ddd-spacing-3) var(--ddd-spacing-3);border-bottom:1px solid var(--ddd-theme-polaris-border)}
.sd-tbl tbody tr:hover td{background:var(--ddd-theme-polaris-surface)}
.sd-tbl tr.me td{background:var(--ddd-theme-polaris-surface-hover)}
td.nm{font-weight:var(--ddd-font-weight-bold)}
td.tm{font-size:var(--ddd-font-size-3xs);color:var(--ddd-theme-secondary);white-space:nowrap}
.sd-rank{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:var(--ddd-theme-polaris-surface-hover);color:var(--ddd-theme-primary);font-weight:var(--ddd-font-weight-bold);font-size:var(--ddd-font-size-3xs)}
.sd-pill{display:inline-block;padding:2px var(--ddd-spacing-3);border-radius:var(--ddd-radius-full);font-size:var(--ddd-font-size-3xs);font-weight:var(--ddd-font-weight-bold)}
.sd-pill.pass{background:var(--ddd-theme-success);color:var(--ddd-theme-on-primary)}
.sd-pill.fail{background:var(--ddd-theme-error);color:var(--ddd-theme-on-primary)}
.sd-score{display:flex;align-items:center;gap:var(--ddd-spacing-2);min-width:140px}
.sd-bar{flex:1;height:8px;background:var(--ddd-theme-polaris-surface);border-radius:var(--ddd-radius-full);overflow:hidden}
.sd-bar span{display:block;height:100%;background:linear-gradient(90deg,var(--ddd-theme-accent),var(--ddd-theme-primary));border-radius:var(--ddd-radius-full)}
.sd-chips{display:flex;flex-wrap:wrap;gap:var(--ddd-spacing-2);margin-bottom:var(--ddd-spacing-4)}
.sd-chip{background:var(--ddd-theme-polaris-surface);color:var(--ddd-theme-primary);border:1px solid var(--ddd-theme-polaris-border);padding:var(--ddd-spacing-1) var(--ddd-spacing-3);border-radius:var(--ddd-radius-full);font-size:var(--ddd-font-size-3xs);font-weight:var(--ddd-font-weight-bold)}
.sd-chipb{background:var(--ddd-theme-default-surface);color:var(--ddd-theme-primary);border:1.5px solid var(--ddd-theme-polaris-border);padding:var(--ddd-spacing-2) var(--ddd-spacing-4);border-radius:var(--ddd-radius-full);font-size:var(--ddd-font-size-s);font-weight:var(--ddd-font-weight-bold);cursor:pointer;font-family:var(--ddd-font-primary);transition:.2s}
.sd-chipb:hover{background:var(--ddd-theme-polaris-surface-hover);transform:translateY(-1px)}
.sd-chipb.on{background:var(--ddd-theme-primary);color:var(--ddd-theme-on-primary);border-color:var(--ddd-theme-primary);box-shadow:0 5px 14px rgba(103,80,164,.3)}
.sd-counters{display:grid;grid-template-columns:repeat(auto-fit,minmax(105px,1fr));gap:var(--ddd-spacing-3);margin-bottom:var(--ddd-spacing-4)}
.sd-cnt{background:var(--ddd-theme-polaris-surface);border:1px solid var(--ddd-theme-polaris-border);border-radius:var(--ddd-radius-md);padding:var(--ddd-spacing-3);text-align:center}
.sd-cnt .e{font-size:var(--ddd-font-size-l)}
.sd-cnt .n{font-size:var(--ddd-font-size-l);font-weight:var(--ddd-font-weight-bold);color:var(--ddd-theme-primary)}
.sd-cnt .l{font-size:var(--ddd-font-size-3xs);color:var(--ddd-theme-secondary)}
.sd-fire{font-size:var(--ddd-font-size-3xs);background:var(--ddd-theme-warning-light,#fff4e0);color:var(--ddd-theme-warning-text,#b45309);border:1px solid var(--ddd-theme-warning,#ffe1ad);padding:var(--ddd-spacing-1) var(--ddd-spacing-3);border-radius:var(--ddd-radius-full);font-weight:var(--ddd-font-weight-bold)}
.sd-heat-t{font-size:var(--ddd-font-size-3xs);font-weight:var(--ddd-font-weight-bold);color:var(--ddd-theme-secondary);text-align:center;margin:var(--ddd-spacing-3) 0 var(--ddd-spacing-2)}
.sd-hmh{display:flex;justify-content:center;gap:5px;margin-bottom:var(--ddd-spacing-1);font-size:var(--ddd-font-size-3xs);color:var(--ddd-theme-secondary);font-weight:var(--ddd-font-weight-bold)}
.sd-hmh span{width:26px;text-align:center}
.sd-hmg{display:grid;grid-template-columns:repeat(7,26px);gap:5px;justify-content:center}
.sd-hc{width:26px;height:26px;border-radius:var(--ddd-radius-sm);background:var(--ddd-theme-polaris-surface);display:flex;align-items:center;justify-content:center;font-size:9.5px;font-weight:var(--ddd-font-weight-bold);color:var(--ddd-theme-secondary);transition:transform .15s;cursor:default}
.sd-hc:hover{transform:scale(1.18)}
.sd-hc.l1{background:var(--ddd-theme-polaris-surface-hover);color:var(--ddd-theme-primary)}
.sd-hc.l2{background:var(--ddd-theme-accent-light,#c9b6f8);color:var(--ddd-theme-on-primary)}
.sd-hc.l3{background:var(--ddd-theme-accent);color:var(--ddd-theme-on-primary)}
.sd-hc.l4{background:var(--ddd-theme-primary);color:var(--ddd-theme-on-primary)}
.sd-hml{display:flex;align-items:center;justify-content:center;gap:4px;margin-top:var(--ddd-spacing-3);font-size:var(--ddd-font-size-3xs);color:var(--ddd-theme-secondary)}
.sd-hml i{width:12px;height:12px;border-radius:3px;display:inline-block}
.sd-log{display:flex;gap:var(--ddd-spacing-3);padding:var(--ddd-spacing-2) var(--ddd-spacing-3);border-radius:var(--ddd-radius-md);background:var(--ddd-theme-polaris-surface);border-left:3px solid var(--ddd-theme-polaris-border);margin-bottom:var(--ddd-spacing-1);font-size:var(--ddd-font-size-3xs);align-items:flex-start}
.sd-log.reading{border-left-color:var(--ddd-theme-primary,#6366f1)}.sd-log.quiz{border-left-color:var(--ddd-theme-error,#ec4899)}.sd-log.download{border-left-color:var(--ddd-theme-success,#10b981)}.sd-log.discussion{border-left-color:var(--ddd-theme-warning,#f59e0b)}
.sd-log-e{font-size:var(--ddd-font-size-m)}
.sd-log-d{font-weight:var(--ddd-font-weight-bold)}
.sd-log-m{font-size:var(--ddd-font-size-3xs);color:var(--ddd-theme-secondary)}
.sd-load{text-align:center;padding:var(--ddd-spacing-10) var(--ddd-spacing-5);color:var(--ddd-theme-secondary);font-size:var(--ddd-font-size-s)}
.sd-spin{width:36px;height:36px;border:3.5px solid var(--ddd-theme-polaris-border);border-top-color:var(--ddd-theme-primary);border-radius:50%;animation:sds .8s linear infinite;margin:0 auto var(--ddd-spacing-3)}
@keyframes sds{to{transform:rotate(360deg)}}
.sd-empty{text-align:center;padding:var(--ddd-spacing-10) var(--ddd-spacing-5);color:var(--ddd-theme-secondary)}
.sd-empty-i{font-size:44px;margin-bottom:var(--ddd-spacing-3)}
.sd-empty p{font-size:var(--ddd-font-size-s);max-width:400px;margin:0 auto}
.sd-err{margin-top:var(--ddd-spacing-3);background:var(--ddd-theme-error-light);color:var(--ddd-theme-error);padding:var(--ddd-spacing-3);border-radius:var(--ddd-radius-md);font-size:var(--ddd-font-size-xs)}
.sd-muted{color:var(--ddd-theme-secondary);font-size:var(--ddd-font-size-s)}
.sd-prime{color:var(--ddd-theme-primary)}
.sd-setup{background:var(--ddd-theme-default-surface);border:1px solid var(--ddd-theme-polaris-border);border-radius:var(--ddd-radius-lg);padding:var(--ddd-spacing-8) var(--ddd-spacing-7);max-width:620px;margin:var(--ddd-spacing-1) auto;box-shadow:0 10px 34px rgba(103,80,164,.1);text-align:center}
.sd-setup-ic{width:64px;height:64px;margin:0 auto var(--ddd-spacing-3);background:linear-gradient(135deg,var(--ddd-theme-primary),var(--ddd-theme-accent));border-radius:var(--ddd-radius-lg);display:flex;align-items:center;justify-content:center;font-size:30px;box-shadow:0 8px 20px rgba(103,80,164,.3)}
.sd-setup h2{color:var(--ddd-theme-primary);font-size:var(--ddd-font-size-l);margin-bottom:var(--ddd-spacing-1)}
.sd-setup-desc{color:var(--ddd-theme-secondary);font-size:var(--ddd-font-size-s);margin-bottom:var(--ddd-spacing-5)}
.sd-field{text-align:left;margin-bottom:var(--ddd-spacing-3)}
.sd-field label{display:block;font-size:var(--ddd-font-size-3xs);font-weight:var(--ddd-font-weight-bold);color:var(--ddd-theme-default-text);margin-bottom:var(--ddd-spacing-1)}
.sd-in{width:100%;padding:var(--ddd-spacing-3);border:1.5px solid var(--ddd-theme-polaris-border);border-radius:var(--ddd-radius-md);font-size:var(--ddd-font-size-s);font-family:var(--ddd-font-primary);background:var(--ddd-theme-polaris-surface);transition:.2s}
.sd-in:focus{outline:none;border-color:var(--ddd-theme-primary);background:var(--ddd-theme-default-surface);box-shadow:0 0 0 3px rgba(103,80,164,.15)}
.sd-btn{padding:var(--ddd-spacing-3) var(--ddd-spacing-5);border:none;border-radius:var(--ddd-radius-md);font-size:var(--ddd-font-size-s);font-weight:var(--ddd-font-weight-bold);cursor:pointer;font-family:var(--ddd-font-primary);transition:.2s}
.sd-btn.p{background:var(--ddd-theme-primary);color:var(--ddd-theme-on-primary)}
.sd-btn.p:hover{background:var(--ddd-theme-accent);transform:translateY(-1px);box-shadow:0 6px 16px rgba(103,80,164,.35)}
.sd-btn.s{background:var(--ddd-theme-polaris-surface-hover);color:var(--ddd-theme-primary);border:1px solid var(--ddd-theme-polaris-border)}
.sd-btn.s:hover{background:var(--ddd-theme-polaris-surface)}
.sd-fw{width:100%}
.sd-or{display:flex;align-items:center;gap:var(--ddd-spacing-3);margin:var(--ddd-spacing-4) 0;color:var(--ddd-theme-secondary);font-size:var(--ddd-font-size-3xs);font-weight:var(--ddd-font-weight-bold)}
.sd-or::before,.sd-or::after{content:'';flex:1;height:1px;background:var(--ddd-theme-polaris-border)}
.sd-how{margin-top:var(--ddd-spacing-5);background:var(--ddd-theme-polaris-surface);border:1px solid var(--ddd-theme-polaris-border);border-radius:var(--ddd-radius-md);padding:var(--ddd-spacing-4);text-align:left}
.sd-how-t{font-size:var(--ddd-font-size-s);font-weight:var(--ddd-font-weight-bold);color:var(--ddd-theme-primary);margin-bottom:var(--ddd-spacing-2)}
.sd-how ol{margin:0;padding-left:var(--ddd-spacing-5);font-size:var(--ddd-font-size-xs);color:var(--ddd-theme-secondary);display:flex;flex-direction:column;gap:var(--ddd-spacing-1)}
.sd-how code{background:var(--ddd-theme-polaris-surface-hover);color:var(--ddd-theme-primary);padding:1px 6px;border-radius:var(--ddd-radius-sm);font-size:var(--ddd-font-size-3xs)}
@media(max-width:640px){.sd-hero{justify-content:center;text-align:center}.sd-pod{width:calc(50% - 8px);min-width:150px}.sd-pod.p1{width:100%}}
    `]
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
          { property: "appsScriptUrl", title: "Apps Script URL", description: "URL Google Apps Script Web App untuk fetch data", inputMethod: "textfield", required: true },
          { property: "studentName", title: "Nama Siswa (opsional)", description: "Nama siswa default (bisa diubah di form setup)", inputMethod: "textfield" }
        ],
        advanced: []
      },
      saveOptions: {
        unsetAttributes: ["_activeTab", "_loading", "_error", "_demo", "_loaded", "_toast", "_leaderboard", "_student", "_kuis", "_aktivitas", "_pertemuanList", "_detail", "_demoStore"]
      }
    }
  }
}

globalThis.customElements.define(StudentDashboard.tag, StudentDashboard)
