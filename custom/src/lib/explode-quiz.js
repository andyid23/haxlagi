import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { LitElement, html, css } from "lit";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import confetti from "canvas-confetti";

const DEFAULT_QUESTIONS = [
  { question: "Apa ibu kota Indonesia?", choices: ["Bandung", "Surabaya", "Jakarta", "Medan"], correctIndex: 2 },
  { question: "Berapa hasil dari 7 × 8?", choices: ["54", "56", "58", "60"], correctIndex: 1 },
  { question: "Planet terdekat dengan Matahari adalah?", choices: ["Venus", "Bumi", "Mars", "Merkurius"], correctIndex: 3 }
];

class ExplodeQuiz extends I18NMixin(DDDSuper(LitElement)) {
  static get tag() { return "explode-quiz"; }

  static get properties() {
    return {
      ...super.properties,
      questions: { type: Array, attribute: "questions", reflect: true },
      appsScriptUrl: { type: String, attribute: "apps-script-url" },
      sheetName: { type: String, attribute: "sheet-name" },
      studentName: { type: String, attribute: "student-name" },
      studentId: { type: String, attribute: "student-id" },
      studentNis: { type: String, attribute: "student-nis" },
      studentAbsen: { type: String, attribute: "student-absen" },
      studentKelas: { type: String, attribute: "student-kelas" },
      editable: { type: Boolean, attribute: true, reflect: true },
      _screen: { state: true },
      _studentName: { state: true },
      _currentIndex: { state: true },
      _score: { state: true },
      _answered: { state: true },
      _selectedIndex: { state: true },
      _feedbackText: { state: true },
      _feedbackPositive: { state: true },
      _validationError: { state: true },
      _nameInputValue: { state: true },
      _editing: { state: true },
      _tempQuestions: { state: true },
      _editingIndex: { state: true },
      _advanceTimer: { state: true } // FIX: Track setTimeout to prevent race conditions
    };
  }

  constructor() {
    super();
    let fn = confetti;
    if (fn && typeof fn !== "function" && typeof fn.default === "function") { fn = fn.default; }
    this._confettiFn = fn;
    this.questions = DEFAULT_QUESTIONS;
    this.appsScriptUrl = "";
    this.sheetName = "Pertemuan";
    this.studentName = "";
    this.studentId = "";
    this.studentNis = "";
    this.studentAbsen = "";
    this.studentKelas = "";
    this.editable = false;
    this._screen = "name";
    this._studentName = "";
    this._currentIndex = 0;
    this._score = 0;
    this._answered = false;
    this._selectedIndex = -1;
    this._feedbackText = "";
    this._feedbackPositive = false;
    this._validationError = "";
    this._nameInputValue = "";
    this._editing = false;
    this._tempQuestions = [];
    this._editingIndex = -1;
    this._advanceTimer = null; // FIX: Initialize timer tracker
    this.t = {
      quizTitle: "Kuis Interaktif", quizInstruction: "Masukkan nama Anda untuk memulai kuis.",
      namePlaceholder: "Nama Anda...", startButton: "Mulai Kuis",
      validationNameEmpty: "Nama tidak boleh kosong.", validationNameShort: "Nama harus lebih dari 2 karakter.",
      questionOf: "Soal", of: "dari", scoreLabel: "Skor",
      feedbackCorrect: "Mantap, Benar!", feedbackWrongPrefix: "Yah, Salah. Jawaban benar: ",
      resultHeading: "Hasil Kuis", resultName: "Nama", resultScore: "Skor", resultPercentage: "Persentase",
      messageHigh: "Luar Biasa! Kamu Hebat!", messageMedium: "Bagus! Terus Berlatih!", messageLow: "Jangan Menyerah! Coba Lagi!",
      restartButton: "Mulai Ulang", editTitle: "Edit Soal Kuis", closeEditor: "Tutup Editor"
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this._authHandler = (e) => {
      if (e.detail.studentId) this.studentId = e.detail.studentId;
      if (e.detail.nama) this.studentName = e.detail.nama;
      if (e.detail.nis) this.studentNis = e.detail.nis;
      if (e.detail.absen) this.studentAbsen = e.detail.absen;
      if (e.detail.kelas) this.studentKelas = e.detail.kelas;
    };
    globalThis.addEventListener("quiz-user-login", this._authHandler);
    
    if (globalThis.HaxStore && typeof globalThis.HaxStore.requestAvailability === "function") {
      const store = globalThis.HaxStore.requestAvailability();
      if (store && !store.elementList[ExplodeQuiz.tag]) {
        store.elementList[ExplodeQuiz.tag] = ExplodeQuiz.haxProperties;
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // FIX: Clear timer to prevent ghost advances and memory leaks
    this._clearAdvanceTimer();
    if (this._authHandler) globalThis.removeEventListener("quiz-user-login", this._authHandler);
  }

  // FIX: Helper to clear pending timeouts
  _clearAdvanceTimer() {
    if (this._advanceTimer) {
      clearTimeout(this._advanceTimer);
      this._advanceTimer = null;
    }
  }

  _startQuiz() {
    const trimmed = this._nameInputValue.trim();
    if (trimmed.length <= 2) {
      this._validationError = trimmed.length === 0 ? this.t.validationNameEmpty : this.t.validationNameShort;
      return;
    }
    this._studentName = trimmed;
    this._validationError = "";
    this._screen = "question";
  }

  _selectAnswer(choiceIndex) {
    if (this._answered) return;
    this._answered = true;
    this._selectedIndex = choiceIndex;
    const q = this.questions[this._currentIndex];
    const correctIndices = q.correctAnswers || (q.correctIndex != null ? [q.correctIndex] : []);
    const isCorrect = correctIndices.includes(choiceIndex);
    
    if (isCorrect) {
      this._score += (q.points || 1);
      this._feedbackText = this.t.feedbackCorrect;
      this._feedbackPositive = true;
      this._fireConfetti();
    } else {
      const correctNames = correctIndices.map(i => q.choices[i]).join(", ");
      this._feedbackText = `${this.t.feedbackWrongPrefix}${correctNames}`;
      this._feedbackPositive = false;
    }
    
    // FIX: Clear existing timer before setting a new one
    this._clearAdvanceTimer();
    this._advanceTimer = setTimeout(() => { this._advanceQuiz(); }, 1200);
  }

  _advanceQuiz() {
    if (this._currentIndex < this.questions.length - 1) {
      this._currentIndex += 1;
      this._answered = false;
      this._selectedIndex = -1;
      this._feedbackText = "";
      this._feedbackPositive = false;
    } else {
      this._submitToSheets(this._studentName, this._score);
      const percentage = Math.round((this._score / this.questions.length) * 100);
      
      // FIX: Full student data payload for activity tracking (No regression)
      const detail = {
        name: this._studentName,
        score: percentage,
        sheet: this.sheetName || "Pertemuan",
        studentId: this.studentId || "",
        nis: this.studentNis || "",
        absen: this.studentAbsen || "",
        kelas: this.studentKelas || "",
        activityType: "quiz",
        description: "Quiz formatif selesai"
      };
      
      this.dispatchEvent(new CustomEvent("quiz-saved", { detail, bubbles: true, composed: true }));
      globalThis.dispatchEvent(new CustomEvent("quiz-completed", { detail, bubbles: true, composed: true }));
      
      this._screen = "result";
      if (percentage >= 80) this._fireConfetti();
    }
  }

  _submitToSheets(name, score) {
    if (!this.appsScriptUrl) return;
    const percentage = Math.round((score / this.questions.length) * 100);
    const params = new URLSearchParams({
      action: "submit", name, score: percentage, totalQuestions: this.questions.length,
      timestamp: new Date().toISOString(), sheet: this.sheetName,
      studentId: this.studentId || "", nis: this.studentNis || "",
      absen: this.studentAbsen || "", kelas: this.studentKelas || "", type: "quiz"
    });
    fetch(`${this.appsScriptUrl}?${params.toString()}`, { redirect: "follow" })
      .then(res => res.json())
      .catch(err => console.error("[explode-quiz] Error:", err));
  }

  _renderNameScreen() {
    return html`
      <h1 class="quiz-title">${this.t.quizTitle}</h1>
      <p class="quiz-instruction">${this.t.quizInstruction}</p>
      <div class="input-group">
        <input id="name-input" .value="${this._nameInputValue}" @input="${(e) => (this._nameInputValue = e.target.value)}" @keydown="${(e) => { if (e.key === 'Enter') this._startQuiz(); }}" .placeholder="${this.t.namePlaceholder}" type="text" />
      </div>
      <button class="start-btn" @click="${this._startQuiz}">${this.t.startButton}</button>
      ${this._validationError ? html`<p class="validation-error">${this._validationError}</p>` : ""}
    `;
  }

  _renderQuestionScreen() {
    const q = this.questions[this._currentIndex];
    return html`
      <header class="quiz-header">
        <span class="progress-label">${this.t.questionOf} ${this._currentIndex + 1} ${this.t.of} ${this.questions.length}</span>
        <span class="score-display">${this.t.scoreLabel}: ${this._score}</span>
      </header>
      <div class="question-text">${q.question}</div>
      <div class="answer-grid">
        ${q.choices.map((choice, index) => {
          let btnClass = "answer-btn";
          if (this._answered) {
            const correctIndices = q.correctAnswers || (q.correctIndex != null ? [q.correctIndex] : []);
            if (correctIndices.includes(index)) btnClass += " answer-btn--correct";
            else if (index === this._selectedIndex) btnClass += " answer-btn--wrong";
          } else if (index === this._selectedIndex) {
            btnClass += " answer-btn--selected";
          }
          return html`<button class="${btnClass}" ?disabled="${this._answered}" @click="${() => this._selectAnswer(index)}">${choice}</button>`;
        })}
      </div>
      ${this._feedbackText ? html`<div class="feedback-area ${this._feedbackPositive ? 'positive' : 'negative'}" aria-live="polite">${this._feedbackText}</div>` : ""}
    `;
  }

  _renderResultScreen() {
    const percentage = Math.round((this._score / this.questions.length) * 100);
    let message = this.t.messageLow;
    if (percentage >= 80) message = this.t.messageHigh;
    else if (percentage >= 50) message = this.t.messageMedium;
    
    return html`
      <h2 class="result-heading">${this.t.resultHeading}</h2>
      <div class="result-name">${this.t.resultName}: ${this._studentName}</div>
      <div class="result-score">${this.t.resultScore}: ${this._score} / ${this.questions.length}</div>
      <div class="result-percentage">${this.t.resultPercentage}: ${percentage}%</div>
      <p class="result-message">${message}</p>
      <button class="restart-btn" @click="${() => { this._screen = 'name'; this._score = 0; this._currentIndex = 0; }}">${this.t.restartButton}</button>
    `;
  }

  render() {
    switch (this._screen) {
      case "name": return this._renderNameScreen();
      case "question": return this._renderQuestionScreen();
      case "result": return this._renderResultScreen();
      default: return this._renderNameScreen();
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: block; max-width: 640px; margin: 0 auto; padding: var(--ddd-spacing-8); font-family: var(--ddd-font-primary); }
        .quiz-title { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); margin-bottom: var(--ddd-spacing-4); color: var(--ddd-theme-primary); }
        .quiz-instruction { font-size: var(--ddd-font-size-m); margin-bottom: var(--ddd-spacing-6); color: var(--ddd-theme-secondary); }
        .input-group { margin-bottom: var(--ddd-spacing-4); }
        input#name-input { width: 100%; padding: var(--ddd-spacing-4); font-size: var(--ddd-font-size-m); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); box-sizing: border-box; font-family: var(--ddd-font-primary); }
        .start-btn, .restart-btn { width: 100%; padding: var(--ddd-spacing-4); font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-bold); background: var(--ddd-theme-polaris-primary); color: var(--ddd-theme-on-primary); border: none; border-radius: var(--ddd-radius-md); cursor: pointer; transition: background 0.2s; }
        .start-btn:hover, .restart-btn:hover { background: var(--ddd-theme-accent); }
        .validation-error { margin-top: var(--ddd-spacing-2); color: var(--ddd-theme-error); font-size: var(--ddd-font-size-s); }
        .quiz-header { display: flex; justify-content: space-between; margin-bottom: var(--ddd-spacing-6); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary); }
        .question-text { font-size: var(--ddd-font-size-m); line-height: 1.6; text-align: justify; color: var(--ddd-theme-on-surface); background: var(--ddd-theme-polaris-surface-hover); border-left: 4px solid var(--ddd-theme-polaris-primary); padding: var(--ddd-spacing-4) var(--ddd-spacing-5); border-radius: 0 var(--ddd-radius-md) var(--ddd-radius-md) 0; margin-bottom: var(--ddd-spacing-6); }
        .answer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--ddd-spacing-3); margin-bottom: var(--ddd-spacing-6); }
        @media (max-width: 480px) { .answer-grid { grid-template-columns: 1fr; } }
        .answer-btn { padding: var(--ddd-spacing-4) var(--ddd-spacing-5); font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-medium); background: var(--ddd-theme-polaris-surface); color: var(--ddd-theme-on-surface); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); cursor: pointer; transition: background 0.2s, border-color 0.2s; }
        .answer-btn:hover:not([disabled]) { background: var(--ddd-theme-polaris-surface-hover); }
        .answer-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .answer-btn--correct { background: var(--ddd-theme-success) !important; color: var(--ddd-theme-on-success) !important; border-color: var(--ddd-theme-success) !important; }
        .answer-btn--selected { background: var(--ddd-theme-polaris-surface-hover) !important; color: var(--ddd-theme-primary) !important; border-color: var(--ddd-theme-primary) !important; }
        .answer-btn--wrong { background: var(--ddd-theme-error) !important; color: var(--ddd-theme-on-error) !important; border-color: var(--ddd-theme-error) !important; }
        .feedback-area { padding: var(--ddd-spacing-4); border-radius: var(--ddd-radius-md); font-weight: var(--ddd-font-weight-medium); text-align: center; }
        .feedback-area.positive { background: var(--ddd-theme-success-light); color: var(--ddd-theme-on-success); }
        .feedback-area.negative { background: var(--ddd-theme-error-light); color: var(--ddd-theme-on-error); }
        .result-heading { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); margin-bottom: var(--ddd-spacing-6); color: var(--ddd-theme-primary); }
        .result-name, .result-score, .result-percentage { font-size: var(--ddd-font-size-m); margin-bottom: var(--ddd-spacing-4); color: var(--ddd-theme-secondary); }
        .result-message { font-size: var(--ddd-font-size-l); font-weight: var(--ddd-font-weight-bold); margin: var(--ddd-spacing-6) 0; color: var(--ddd-theme-primary); text-align: center; }
      `
    ];
  }

  static get haxProperties() {
    return {
      canScale: true, canPosition: true, canEditSource: false,
      gizmo: { title: "Explode Quiz", description: "Interactive multiple-choice quiz", icon: "icons:question-answer", color: "purple", tags: ["Education", "Interactive"] },
      settings: {
        configure: [
          { property: "appsScriptUrl", title: "Apps Script URL", inputMethod: "textfield" },
          { property: "sheetName", title: "Nama Pertemuan", inputMethod: "textfield", default: "Pertemuan" }
        ]
      },
      saveOptions: {
        unsetAttributes: ["_screen", "_studentName", "_currentIndex", "_score", "_answered", "_selectedIndex", "_feedbackText", "_feedbackPositive", "_validationError", "_nameInputValue", "_editing", "_tempQuestions", "_editingIndex", "_advanceTimer"]
      }
    };
  }
}

globalThis.customElements.define(ExplodeQuiz.tag, ExplodeQuiz);
export { ExplodeQuiz, DEFAULT_QUESTIONS };