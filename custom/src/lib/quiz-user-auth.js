import { LitElement, html, css } from "lit";

class QuizUserAuth extends LitElement {
  static get tag() {
    return "quiz-user-auth";
  }

  static get properties() {
    return {
      appsScriptUrl: { type: String, attribute: "apps-script-url" },
      _screen: { state: true },
      _nama: { state: true },
      _email: { state: true },
      _studentId: { state: true },
      _errorMsg: { state: true },
      _successMsg: { state: true },
      _loading: { state: true }
    };
  }

  constructor() {
    super();
    this.appsScriptUrl = "";
    this._screen = "check"; // check → login → register → logged-in
    this._nama = "";
    this._email = "";
    this._studentId = "";
    this._errorMsg = "";
    this._successMsg = "";
    this._loading = false;
  }

  connectedCallback() {
    super.connectedCallback();
    // Cek apakah sudah login dari localStorage
    const saved = this._load("quiz_user_session");
    if (saved && saved.studentId) {
      this._studentId = saved.studentId;
      this._nama = saved.nama;
      this._email = saved.email;
      this._verifySession();
    } else {
      this._screen = "login";
    }
  }

  _load(key) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : null;
    } catch { return null; }
  }

  _save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
  }

  _clear(key) {
    try { localStorage.removeItem(key); } catch {}
  }

  async _verifySession() {
    if (!this.appsScriptUrl || !this._studentId) {
      this._screen = "login";
      return;
    }
    this._loading = true;
    try {
      const url = this.appsScriptUrl + "?action=verify&studentId=" + encodeURIComponent(this._studentId);
      const res = await fetch(url);
      const data = await res.json();
      if (data.status === "success") {
        this._nama = data.nama;
        this._screen = "logged-in";
        this._dispatchLogin();
      } else {
        this._clear("quiz_user_session");
        this._screen = "login";
      }
    } catch {
      // Jika gagal verify, tetap pakai data lokal
      this._screen = "logged-in";
      this._dispatchLogin();
    }
    this._loading = false;
  }

  async _handleLogin(e) {
    e.preventDefault();
    this._errorMsg = "";
    this._successMsg = "";
    this._loading = true;

    try {
      const params = new URLSearchParams({
        action: "login",
        email: this._email.trim()
      });
      const res = await fetch(this.appsScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ action: "login", email: this._email.trim() })
      });

      // Karena no-cors, kita tidak bisa baca response
      // Gunakan GET fallback untuk baca response
      const getUrl = this.appsScriptUrl + "?" + params.toString();
      const getRes = await fetch(getUrl);
      const data = await getRes.json();

      if (data.status === "success") {
        this._studentId = data.studentId;
        this._nama = data.nama;
        this._save("quiz_user_session", {
          studentId: data.studentId,
          nama: data.nama,
          email: this._email.trim()
        });
        this._screen = "logged-in";
        this._dispatchLogin();
        this._successMsg = `Selamat datang, ${data.nama}!`;
      } else {
        this._errorMsg = data.message || "Login gagal";
      }
    } catch (err) {
      this._errorMsg = "Gagal menghubungi server: " + err.message;
    }
    this._loading = false;
  }

  async _handleRegister(e) {
    e.preventDefault();
    this._errorMsg = "";
    this._successMsg = "";
    this._loading = true;

    try {
      const params = new URLSearchParams({
        action: "register",
        nama: this._nama.trim(),
        email: this._email.trim()
      });
      const getUrl = this.appsScriptUrl + "?" + params.toString();
      const res = await fetch(getUrl);
      const data = await res.json();

      if (data.status === "success") {
        this._studentId = data.studentId;
        this._save("quiz_user_session", {
          studentId: data.studentId,
          nama: data.nama,
          email: this._email.trim()
        });
        this._screen = "logged-in";
        this._dispatchLogin();
        this._successMsg = `Registrasi berhasil! ID: ${data.studentId}`;
      } else if (data.status === "exists") {
        this._studentId = data.studentId;
        this._nama = data.nama;
        this._save("quiz_user_session", {
          studentId: data.studentId,
          nama: data.nama,
          email: this._email.trim()
        });
        this._screen = "logged-in";
        this._dispatchLogin();
        this._successMsg = `Akun sudah ada. Login sebagai ${data.nama}.`;
      } else {
        this._errorMsg = data.message || "Registrasi gagal";
      }
    } catch (err) {
      this._errorMsg = "Gagal menghubungi server: " + err.message;
    }
    this._loading = false;
  }

  _handleLogout() {
    this._clear("quiz_user_session");
    this._studentId = "";
    this._nama = "";
    this._email = "";
    this._screen = "login";
    window.dispatchEvent(new CustomEvent("quiz-user-logout", {
      bubbles: true, composed: true
    }));
  }

  _dispatchLogin() {
    window.dispatchEvent(new CustomEvent("quiz-user-login", {
      detail: {
        studentId: this._studentId,
        nama: this._nama,
        email: this._email
      },
      bubbles: true,
      composed: true
    }));
  }

  static get styles() {
    return css`
      :host { display: block; font-family: 'Roboto', system-ui, sans-serif; }
      .auth-card {
        background: white;
        border-radius: 16px;
        padding: 24px;
        border: 1px solid #e8e3f5;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        max-width: 420px;
        margin: 0 auto;
      }
      h2 { color: #6750a4; font-size: 20px; margin: 0 0 8px 0; text-align: center; }
      .subtitle { color: #666; font-size: 13px; text-align: center; margin-bottom: 20px; }
      .field { margin-bottom: 14px; }
      .field label { display: block; font-size: 12px; font-weight: 600; color: #49454f; margin-bottom: 4px; }
      .field input {
        width: 100%; padding: 10px 14px; border: 1px solid #cac4d0;
        border-radius: 8px; font-size: 14px; font-family: inherit;
        box-sizing: border-box;
      }
      .field input:focus { outline: none; border-color: #6750a4; box-shadow: 0 0 0 2px rgba(103,80,164,0.15); }
      .btn {
        width: 100%; padding: 12px; border: none; border-radius: 8px;
        font-size: 14px; font-weight: 600; cursor: pointer;
        font-family: inherit; transition: all 0.2s; margin-top: 8px;
      }
      .btn-primary { background: #6750a4; color: white; }
      .btn-primary:hover { background: #58418e; }
      .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
      .btn-link { background: none; color: #6750a4; font-size: 13px; text-decoration: underline; margin-top: 12px; }
      .msg { padding: 10px 14px; border-radius: 8px; font-size: 13px; margin-bottom: 12px; }
      .msg-error { background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; }
      .msg-success { background: #d1fae5; color: #065f46; border: 1px solid #6ee7b7; }
      .user-bar {
        display: flex; align-items: center; justify-content: space-between;
        background: #f3f0fa; border-radius: 12px; padding: 14px 18px;
        border: 1px solid #e8e3f5;
      }
      .user-info { display: flex; align-items: center; gap: 12px; }
      .avatar {
        width: 40px; height: 40px; border-radius: 50%;
        background: #6750a4; color: white; display: flex;
        align-items: center; justify-content: center;
        font-weight: bold; font-size: 16px;
      }
      .user-name { font-weight: 600; color: #1c1b1f; font-size: 14px; }
      .user-email { font-size: 11px; color: #666; }
      .user-id { font-size: 10px; color: #6750a4; font-family: monospace; }
      .logout-btn {
        padding: 6px 14px; border: 1px solid #ba1a1a; color: #ba1a1a;
        background: none; border-radius: 6px; font-size: 12px;
        cursor: pointer; font-family: inherit;
      }
      .logout-btn:hover { background: #ba1a1a; color: white; }
      .loading { text-align: center; padding: 40px; color: #6750a4; }
    `;
  }

  render() {
    if (this._loading && this._screen === "check") {
      return html`<div class="loading">⏳ Memverifikasi sesi...</div>`;
    }

    if (this._screen === "logged-in") {
      const initial = this._nama ? this._nama.charAt(0).toUpperCase() : "?";
      return html`
        <div class="user-bar">
          <div class="user-info">
            <div class="avatar">${initial}</div>
            <div>
              <div class="user-name">${this._nama}</div>
              <div class="user-email">${this._email}</div>
              <div class="user-id">ID: ${this._studentId}</div>
            </div>
          </div>
          <button class="logout-btn" @click="${this._handleLogout}">Keluar</button>
        </div>
      `;
    }

    return html`
      <div class="auth-card">
        <h2>🔐 ${this._screen === "register" ? "Daftar Akun" : "Masuk"}</h2>
        <p class="subtitle">
          ${this._screen === "register"
            ? "Buat akun untuk menyimpan hasil kuis & aktivitas"
            : "Masuk dengan email yang sudah terdaftar"}
        </p>

        ${this._errorMsg ? html`<div class="msg msg-error">${this._errorMsg}</div>` : ""}
        ${this._successMsg ? html`<div class="msg msg-success">${this._successMsg}</div>` : ""}

        ${this._screen === "register" ? html`
          <form @submit="${this._handleRegister}">
            <div class="field">
              <label>Nama Lengkap</label>
              <input type="text" .value="${this._nama}"
                @input="${e => this._nama = e.target.value}"
                placeholder="Contoh: Ahmad Dahlan" required minlength="3">
            </div>
            <div class="field">
              <label>Email</label>
              <input type="email" .value="${this._email}"
                @input="${e => this._email = e.target.value}"
                placeholder="contoh@email.com" required>
            </div>
            <button class="btn btn-primary" type="submit" ?disabled="${this._loading}">
              ${this._loading ? "⏳ Mendaftar..." : "Daftar"}
            </button>
          </form>
          <button class="btn btn-link" @click="${() => { this._screen = "login"; this._errorMsg = ""; }}">
            Sudah punya akun? Masuk
          </button>
        ` : html`
          <form @submit="${this._handleLogin}">
            <div class="field">
              <label>Email</label>
              <input type="email" .value="${this._email}"
                @input="${e => this._email = e.target.value}"
                placeholder="contoh@email.com" required>
            </div>
            <button class="btn btn-primary" type="submit" ?disabled="${this._loading}">
              ${this._loading ? "⏳ Masuk..." : "Masuk"}
            </button>
          </form>
          <button class="btn btn-link" @click="${() => { this._screen = "register"; this._errorMsg = ""; }}">
            Belum punya akun? Daftar
          </button>
        `}
      </div>
    `;
  }
}

globalThis.customElements.define(QuizUserAuth.tag, QuizUserAuth);
export { QuizUserAuth };