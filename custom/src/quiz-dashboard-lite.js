import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { LitElement, html, css } from "lit";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./attendance-system.js";
import "./explode-quiz.js";

const STORAGE_KEY = "quiz_lite_sheet_id";

class QuizDashboardLite extends I18NMixin(DDDSuper(LitElement)) {
  static get tag() {
    return "quiz-dashboard-lite";
  }

  static get properties() {
    return {
      ...super.properties,
      // PROPS BARU — bisa di-set via HTML attribute
      appsScriptUrl: { type: String, attribute: "apps-script-url" },
      sheetName: { type: String, attribute: "sheet-name" },
      
      // Internal state
      _spreadsheetId: { state: true },
      _activeTab: { state: true },
      _successMsg: { state: true },
      _errorMsg: { state: true }
    };
  }

  constructor() {
    super();
    // Default values
    this.appsScriptUrl = "";
    this.sheetName = "Pertemuan";
    this._spreadsheetId = this._getStorageItem(STORAGE_KEY) || "";
    this._activeTab = 0;
    this._successMsg = "";
    this._errorMsg = "";

    // i18n translations
    this.t = {
      ...this.t,
      title: "Kuis Interaktif & Kehadiran",
      subtitle: "Sistem Kuis dengan Pelacakan Aktivitas Otomatis",
      tabQuiz: "📝 Ambil Kuis",
      tabAttendance: "📅 Kehadiran & Aktivitas",
      tabGuide: "📖 Panduan",
      connectSheets: "Hubungkan dengan Google Sheets",
      connected: "✅ Terhubung ke Google Spreadsheet",
      disconnect: "Putuskan",
      openSheets: "Buka Google Sheets"
    };
  }

  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Quiz Dashboard Lite",
        description: "Dashboard kuis modular dengan attendance tracking dan integrasi Google Sheets",
        icon: "icons:quiz",
        color: "purple",
        tags: ["Education", "Assessment", "Interactive"]
      },
      settings: {
        configure: [
          {
            property: "appsScriptUrl",
            title: "Apps Script URL",
            inputMethod: "textfield",
            description: "URL Google Apps Script Web App"
          },
          {
            property: "sheetName",
            title: "Nama Pertemuan",
            inputMethod: "textfield",
            default: "Pertemuan"
          }
        ]
      }
    };
  }

  // ... (method _getStorageItem, _setStorageItem, _handleConnectSheet, dll tetap sama)

  _onQuizSaved(e) {
    // PERBAIKAN: Forward event ke activity-logger via global event
    window.dispatchEvent(new CustomEvent("quiz-saved", {
      detail: e.detail,
      bubbles: true,
      composed: true
    }));
    
    this._successMsg = `Skor ${e.detail.name} sebesar ${e.detail.score}% berhasil disimpan!`;
    setTimeout(() => { this._successMsg = ""; }, 4000);
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
          color: var(--ddd-theme-default-text);
          background-color: var(--ddd-theme-polaris-surface);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-6);
          box-shadow: var(--ddd-shadow-2);
          max-width: 1200px;
          margin: 0 auto;
        }
        /* Ganti semua hardcoded color dengan DDD tokens */
        .header h1 { color: var(--ddd-theme-primary); }
        .badge { 
          background-color: var(--ddd-theme-success-light); 
          color: var(--ddd-theme-success-text); 
        }
        .btn-primary { background: var(--ddd-theme-polaris-primary); }
        .tab-btn.active { 
          color: var(--ddd-theme-primary); 
          border-bottom-color: var(--ddd-theme-primary); 
        }
        /* ... sisanya pakai token */
      `
    ];
  }

  render() {
    return html`
      <div class="header">
        <div class="title-section">
          <h1>${this.t.title}</h1>
          <p>${this.t.subtitle}</p>
        </div>
        <span class="badge">HAXcms Ready</span>
      </div>

      ${this._errorMsg ? html`<div class="msg msg-error">${this._errorMsg}</div>` : ""}
      ${this._successMsg ? html`<div class="msg msg-success">${this._successMsg}</div>` : ""}

      <!-- Setup card (sama seperti sebelumnya) -->
      ${!this._spreadsheetId ? html`
        <div class="setup-card">
          <h2>${this.t.connectSheets}</h2>
          <form @submit="${this._handleConnectSheet}" class="setup-row">
            <input id="sheet-input" class="input-field" placeholder="ID atau URL Spreadsheet" />
            <button type="submit" class="btn btn-primary">Hubungkan</button>
          </form>
        </div>
      ` : html`
        <div class="setup-card connected-card">
          <h2>${this.t.connected}</h2>
          <a class="google-sheet-link" href="https://docs.google.com/spreadsheets/d/${this._spreadsheetId}" target="_blank">
            ${this.t.openSheets}
          </a>
          <button class="btn btn-outline" @click="${this._handleDisconnect}">${this.t.disconnect}</button>
        </div>
      `}

      <!-- Tabs -->
      <div class="tab-container">
        <button class="tab-btn ${this._activeTab === 0 ? 'active' : ''}" @click="${() => this._activeTab = 0}">${this.t.tabQuiz}</button>
        <button class="tab-btn ${this._activeTab === 1 ? 'active' : ''}" @click="${() => this._activeTab = 1}">${this.t.tabAttendance}</button>
        <button class="tab-btn ${this._activeTab === 2 ? 'active' : ''}" @click="${() => this._activeTab = 2}">${this.t.tabGuide}</button>
      </div>

      <div class="main-content">
        ${this._activeTab === 0 ? html`
          <!-- PERBAIKAN: Pass appsScriptUrl & sheetName ke explode-quiz -->
          <explode-quiz 
            .spreadsheetId="${this._spreadsheetId}"
            .appsScriptUrl="${this.appsScriptUrl}"
            .sheetName="${this.sheetName}"
            .editable="${true}" 
            @quiz-saved="${this._onQuizSaved}">
          </explode-quiz>
        ` : this._activeTab === 1 ? html`
          <!-- PERBAIKAN: Tambah activity-logger & pass props -->
          <activity-logger 
            .appsScriptUrl="${this.appsScriptUrl}"
            .sheetName="${this.sheetName}">
          </activity-logger>
          <div class="tracker-grid">
            <attendance-tracker></attendance-tracker>
            <engagement-score></engagement-score>
          </div>
          <transparent-gradebook></transparent-gradebook>
        ` : html`
          <!-- Guide content -->
          <h2>${this.t.tabGuide}</h2>
          <div class="guide-grid">
            <div class="guide-card">
              <h3>🚀 Memulai Kuis</h3>
              <p>Masukkan nama, jawab pertanyaan, skor tersimpan otomatis.</p>
            </div>
            <div class="guide-card">
              <h3>📅 Kehadiran</h3>
              <p>Dihitung otomatis dari aktivitas: scroll, download, kuis, diskusi.</p>
            </div>
            <div class="guide-card">
              <h3>🔗 Integrasi</h3>
              <p>Data tersinkron ke Google Sheets via Apps Script URL.</p>
            </div>
          </div>
        `}
      </div>
    `;
  }
}

globalThis.customElements.define(QuizDashboardLite.tag, QuizDashboardLite);
export { QuizDashboardLite };