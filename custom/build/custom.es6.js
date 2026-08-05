var Wt=($,t)=>()=>{try{return t||$((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};import{css as Yt,html as ct}from"@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";import{PolarisFlexTheme as Vt}from"@haxtheweb/polaris-theme/lib/polaris-flex-theme.js";import"@haxtheweb/haxcms-elements/lib/ui-components/blocks/site-children-block.js";import{DDDSuper as N}from"@haxtheweb/d-d-d/d-d-d.js";import{LitElement as L,css as D,html as d}from"lit";import{I18NMixin as U}from"@haxtheweb/i18n-manager/lib/I18NMixin.js";var ee=Wt((ce,ht)=>{let kt=class extends Vt{static get styles(){return[super.styles,Yt`
        :host {
          display: block;
        }
        aside {
          float: left;
          width: 240px;
        }
        aside section h4 {
          font-size: 16px;
          margin: var(--ddd-spacing-0) var(--ddd-spacing-0) var(--ddd-spacing-6) var(--ddd-spacing-0);
          text-transform: uppercase;
          font-family: "Open Sans", sans-serif;
          font-weight: 300;
        }

        aside section {
          background-color: #fff;
          border-radius: 3px;
          margin-bottom: var(--ddd-spacing-10);
          padding: 0px var(--ddd-spacing-10) var(--ddd-spacing-10) 0px;
        }

        site-children-block {
          --site-children-block-border-bottom: lightblue 1px solid;
          --site-children-block-li-padding: 8px 0;
          --site-children-block-link-hover-color: rgb(0, 95, 169);
          --site-children-block-active-border-left: rgb(0, 95, 169) 3px solid;
          --site-children-block-link-active-color: rgb(0, 30, 68);
          font-family: "Roboto Condensed", sans-serif;
          font-size: 16px;
        }
      `]}renderHeaderSlot(){return ct``}renderSideBar(){return ct`
    <aside
          role="complementary"
          aria-label="Primary Sidebar"
          itemtype="http://schema.org/WPSideBar"
          part="page-primary-sidebar"
        >
          <section>
            <site-children-block
              part="page-children-block"
              dynamic-methodology="ancestor"
            ></site-children-block>
          </section>
        </aside>
    `}renderFooterContactInformation(){return ct``}renderFooterSecondarySlot(){return ct``}renderFooterPrimarySlot(){return ct``}static get tag(){return"custom-haxquiz-theme"}constructor(){super()}};if(customElements.define(kt.tag,kt),typeof customElements<"u"){class $ extends HTMLElement{static get observedAttributes(){return["message","type","duration","visible"]}constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._message="",this._type="info",this._duration=5e3,this._visible=!1,this._timeoutId=null,this.render(),this._setupEventListeners()}get message(){return this._message}set message(e){this._message=e||"",this._renderContent(),this.setAttribute("message",this._message)}get type(){return this._type}set type(e){this._type=e||"info",this._renderContent(),this.setAttribute("type",this._type)}get duration(){return this._duration}set duration(e){this._duration=parseInt(e)||5e3,this.setAttribute("duration",this._duration.toString())}get visible(){return this._visible}set visible(e){this._visible=e===!0||e==="true"||e==="",this._updateVisibility(),this.setAttribute("visible",this._visible?"":"false")}connectedCallback(){this._updateVisibility()}disconnectedCallback(){this._clearTimeout()}attributeChangedCallback(e,i,a){if(i!==a)switch(e){case"message":this.message=a;break;case"type":this.type=a;break;case"duration":this.duration=a;break;case"visible":this.visible=a;break}}_setupEventListeners(){this._shadow.addEventListener("click",e=>{e.target.classList.contains("close-btn")&&this.hide()})}_renderContent(){const e={info:"notif-info",success:"notif-success",warning:"notif-warning",error:"notif-error"}[this._type]||"notif-info";this._shadow.innerHTML=`
        <style>
          :host {
            display: block;
            position: relative;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          }
          .notification {
            display: flex;
            align-items: center;
            padding: 12px 16px;
            border-radius: 4px;
            margin: 8px 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateY(-10px);
            max-width: 100%;
          }
          .notification.show {
            opacity: 1;
            transform: translateY(0);
          }
          .notification.info { background-color: #e3f2fd; color: #1565c0; }
          .notification.success { background-color: #e8f5e9; color: #2e7d32; }
          .notification.warning { background-color: #fff8e1; color: #f57c00; }
          .notification.error { background-color: #ffebee; color: #c62828; }
          .notification-content {
            flex: 1;
            margin-right: 12px;
            line-height: 1.4;
          }
          .close-btn {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            font-size: 18px;
            padding: 4px;
            border-radius: 4px;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .close-btn:hover {
            background-color: rgba(0,0,0,0.05);
          }
          .close-btn:active {
            transform: scale(0.95);
          }
          @media (prefers-reduced-motion: reduce) {
            .notification {
              transition: none;
            }
          }
        </style>
        <div class="notification ${e} ${this._visible?"show":""}">
          <div class="notification-content">${this._message||"Notification message"}</div>
          <button class="close-btn" aria-label="Close notification">\xD7</button>
        </div>
      `}_updateVisibility(){const e=this._shadow.querySelector(".notification");e&&e.classList.toggle("show",this._visible),this._visible&&this._timeoutId===null&&this._duration>0&&(this._timeoutId=setTimeout(()=>{this.hide()},this._duration))}_clearTimeout(){this._timeoutId&&(clearTimeout(this._timeoutId),this._timeoutId=null)}show(){this._clearTimeout(),this._visible=!0,this._updateVisibility(),this._duration>0&&(this._timeoutId=setTimeout(()=>{this.hide()},this._duration)),this.dispatchEvent(new CustomEvent("notif-show",{bubbles:!0,composed:!0,detail:{message:this._message,type:this._type}}))}hide(){this._clearTimeout(),this._visible=!1,this._updateVisibility(),this.dispatchEvent(new CustomEvent("notif-hide",{bubbles:!0,composed:!0,detail:{message:this._message,type:this._type}}))}render(){this._renderContent()}}customElements.define("notif-element",$)}class xt extends U(N(L)){static get tag(){return"todo-list"}static get properties(){return{...super.properties,tasks:{type:Array,attribute:"tasks",reflect:!0,converter:{fromAttribute(t){if(t==null||t==="")return;if(Array.isArray(t)||typeof t=="object")return t;const e=String(t).trim();if(!(!e||e==="[object Object]"||e==="undefined"||e==="null")&&(e.startsWith("[")||e.startsWith("{")))try{const i=JSON.parse(e);return Array.isArray(i)?i:i&&typeof i=="object"&&Array.isArray(i.tasks)?i.tasks:void 0}catch{return}},toAttribute(t){if(!Array.isArray(t))return null;try{return JSON.stringify(t)}catch{return null}}}},editable:{type:Boolean,attribute:!0,reflect:!0},editing:{type:Boolean,attribute:!0,reflect:!0},_validationError:{type:String},_screen:{state:!0},_tempTasks:{state:!0},_editingIndex:{state:!0},_tempTaskText:{state:!0},_editorOrigin:{state:!0}}}constructor(){super(),this.tasks=[],this.editable=!1,this.editing=!1,this._validationError="",this._screen="list",this._tempTasks=[],this._editingIndex=-1,this._tempTaskText="",this._editorOrigin="list",this.t={addTask:"Add Task",inputPlaceholder:"Enter a new task...",deleteTask:"Delete task",emptyMessage:"No tasks yet. Add one above!",taskCompleted:"Mark as incomplete",taskIncomplete:"Mark as complete",validationErrorMinLength:"Task must be at least 3 characters",validationErrorMaxLength:"Task must be no more than 50 characters",editTitle:"Edit Task List",closeEditor:"Close Editor",addTaskBtnEditor:"Add Task",editTaskBtn:"Edit",saveEditBtn:"Save",cancelEditBtn:"Cancel",saveAllBtn:"Save & Exit",cancelAllBtn:"Cancel",emptyTaskError:"Task cannot be empty",ariaEditTitle:"Task list editor panel",ariaOpenEditor:"Open task list editor",ariaCloseEditor:"Close task list editor",ariaTaskInputEditor:"Editor task input",ariaTasksListEditor:"Editable task list",ariaEditTask:"Edit this task",ariaDeleteTask:"Delete this task",ariaSaveAll:"Save all task changes",ariaCancelAll:"Cancel all task changes"}}updated(t){super.updated&&super.updated(t),Array.isArray(this.tasks)||(this.tasks=[])}get _inHaxEditor(){return!!(globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"&&globalThis.HaxStore.requestAvailability().editMode)}static get styles(){return[super.styles,D`
        /* ── Polaris Theme: host container ───────────────────────────────── */
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
          padding: var(--ddd-spacing-8);
          background: var(
            --ddd-theme-polaris-background,
            var(--ddd-theme-background)
          );
          color: var(--ddd-theme-polaris-text, var(--ddd-theme-primary));
          max-width: 640px;
          border-radius: var(--ddd-radius-lg);
          box-shadow: 0 var(--ddd-spacing-1) var(--ddd-spacing-5)
            rgba(0, 0, 0, 0.08);
        }

        /* ── Polaris heading ─────────────────────────────────────────────── */
        .todo-heading {
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-polaris-primary, var(--ddd-theme-primary));
          margin: 0 0 var(--ddd-spacing-6) 0;
          letter-spacing: -0.01em;
        }

        /* ── Input area ──────────────────────────────────────────────────── */
        .input-area {
          display: flex;
          gap: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-3);
        }

        .task-input {
          flex: 1;
          padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-s);
          border: 1.5px solid
            var(--ddd-theme-polaris-border, var(--ddd-theme-accent));
          border-radius: var(--ddd-radius-md);
          background: var(
            --ddd-theme-polaris-surface,
            var(--ddd-theme-background)
          );
          color: var(--ddd-theme-polaris-text, var(--ddd-theme-primary));
          outline: none;
          transition:
            border-color 0.15s ease,
            box-shadow 0.15s ease;
        }

        .task-input:focus {
          border-color: var(--ddd-theme-polaris-accent, var(--ddd-theme-link));
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        /* ── Polaris pill-style Add button ───────────────────────────────── */
        .add-button {
          padding: var(--ddd-spacing-4) var(--ddd-spacing-7);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          background: var(--ddd-theme-polaris-primary, var(--ddd-theme-accent));
          color: var(
            --ddd-theme-polaris-primary-text,
            var(--ddd-theme-background)
          );
          border: none;
          border-radius: var(--ddd-radius-xl);
          cursor: pointer;
          white-space: nowrap;
          transition:
            background 0.15s ease,
            box-shadow 0.15s ease;
          box-shadow: 0 var(--ddd-spacing-1) var(--ddd-spacing-3)
            rgba(0, 0, 0, 0.12);
        }

        .add-button:hover {
          background: var(
            --ddd-theme-polaris-primary-hover,
            var(--ddd-theme-link)
          );
          box-shadow: 0 var(--ddd-spacing-1) var(--ddd-spacing-4)
            rgba(0, 0, 0, 0.18);
        }

        .add-button:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        /* ── Task list ───────────────────────────────────────────────────── */
        .task-list {
          list-style: none;
          padding: var(--ddd-spacing-0, 0);
          margin: var(--ddd-spacing-4) 0 0 0;
        }

        /* ── Polaris card-style task item ────────────────────────────────── */
        .task-item {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
          margin-bottom: var(--ddd-spacing-3);
          background: var(
            --ddd-theme-polaris-surface,
            var(--ddd-theme-background-secondary)
          );
          border-radius: var(--ddd-radius-lg);
          border-left: var(--ddd-spacing-1) solid
            var(--ddd-theme-polaris-accent, var(--ddd-theme-accent));
          box-shadow: 0 1px var(--ddd-spacing-3) rgba(0, 0, 0, 0.06);
          transition: box-shadow 0.15s ease;
        }

        .task-item:hover {
          box-shadow: 0 var(--ddd-spacing-1) var(--ddd-spacing-5)
            rgba(0, 0, 0, 0.1);
        }

        /* ── Checkbox ────────────────────────────────────────────────────── */
        .task-checkbox {
          width: var(--ddd-spacing-5);
          height: var(--ddd-spacing-5);
          cursor: pointer;
          accent-color: var(
            --ddd-theme-polaris-primary,
            var(--ddd-theme-accent)
          );
          flex-shrink: 0;
        }

        .task-checkbox:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        /* ── Task text ───────────────────────────────────────────────────── */
        .task-text {
          flex: 1;
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-polaris-text, var(--ddd-theme-primary));
          line-height: 1.5;
        }

        .task-text.completed {
          text-decoration: line-through;
          color: var(--ddd-theme-disabled);
          opacity: var(--ddd-opacity-50);
        }

        /* ── Polaris rounded-rectangle Delete button ─────────────────────── */
        .delete-button {
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-xs);
          font-weight: var(--ddd-font-weight-bold);
          background: transparent;
          color: var(--ddd-theme-error);
          border: 1.5px solid var(--ddd-theme-error);
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          flex-shrink: 0;
          transition:
            background 0.15s ease,
            color 0.15s ease;
        }

        .delete-button:hover {
          background: var(--ddd-theme-error);
          color: var(--ddd-theme-polaris-surface, var(--ddd-theme-background));
        }

        .delete-button:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            rgba(var(--ddd-theme-error-rgb, 220, 38, 38), 0.25);
        }

        /* ── Polaris empty state ─────────────────────────────────────────── */
        .empty-message {
          text-align: center;
          padding: var(--ddd-spacing-10) var(--ddd-spacing-8);
          color: var(--ddd-theme-disabled);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-m);
          font-style: italic;
          background: var(
            --ddd-theme-polaris-surface,
            var(--ddd-theme-background-secondary)
          );
          border-radius: var(--ddd-radius-lg);
          border: 1.5px dashed
            var(--ddd-theme-polaris-border, var(--ddd-theme-accent));
          margin-top: var(--ddd-spacing-4);
        }

        /* ── Validation error ────────────────────────────────────────────── */
        .validation-error {
          color: var(--ddd-theme-error);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-xs);
          margin: var(--ddd-spacing-0, 0);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-1);
        }
      `]}render(){return this._screen==="editor"?this._renderEditorScreen():d`
      <div class="input-area">
        <input
          id="task-input"
          class="task-input"
          type="text"
          placeholder="${this.t.inputPlaceholder}"
          aria-label="${this.t.addTask}"
          aria-describedby="task-input-error"
          @keydown="${this._handleInputKeydown}"
          @input="${this._handleInputChange}"
        />
        <button
          class="add-button"
          aria-label="${this.t.addTask}"
          @click="${this._handleAddClick}"
          ?hidden="${this._inHaxEditor}"
        >
          ${this.t.addTask}
        </button>
      </div>

      ${this._validationError?d`<p id="task-input-error" role="alert" class="validation-error">
            ${this._validationError}
          </p>`:""}
      ${this.tasks.length===0?d`<p class="empty-message">${this.t.emptyMessage}</p>`:d`
            <ul class="task-list" aria-label="Task list">
              ${this.tasks.map(t=>this._renderTask(t))}
            </ul>
          `}

      <button
        class="edit-questions-btn"
        @click="${this._openEditor}"
        aria-label="${this.t.ariaOpenEditor}"
        ?hidden="${!this._inHaxEditor}"
      >
        ${this.t.editTitle}
      </button>
    `}_renderEditorScreen(){return d`
      <header class="edit-header">
        <h2 class="edit-title">${this.t.editTitle}</h2>
        <button
          class="close-editor-btn"
          @click="${this._saveAll}"
          aria-label="${this.t.ariaCloseEditor}"
        >
          ${this.t.closeEditor}
        </button>
      </header>

      <div class="editor-content">
        <div class="add-question-form">
          <div class="input-area">
            <input
              class="task-input"
              type="text"
              .value="${this._tempTaskText}"
              @input="${t=>this._tempTaskText=t.target.value}"
              placeholder="${this.t.inputPlaceholder}"
              aria-label="${this.t.ariaTaskInputEditor}"
            />
            <button
              class="add-button"
              @click="${this._addTaskEditor}"
              aria-label="${this.t.addTaskBtnEditor}"
            >
              ${this.t.addTaskBtnEditor}
            </button>
          </div>
        </div>

        <div class="questions-list" aria-label="${this.t.ariaTasksListEditor}">
          ${this._tempTasks.map((t,e)=>d`
              <div class="question-card">
                ${this._editingIndex===e?d`
                      <div class="edit-form">
                        <input
                          class="edit-choice-input"
                          type="text"
                          .value="${this._tempTaskText}"
                          @input="${i=>this._tempTaskText=i.target.value}"
                          aria-label="${this.t.ariaTaskInputEditor}"
                        />
                        <div class="edit-form-actions">
                          <button
                            class="save-edit-btn"
                            @click="${this._saveEditTask}"
                          >
                            ${this.t.saveEditBtn}
                          </button>
                          <button
                            class="cancel-edit-btn"
                            @click="${this._cancelEditTask}"
                          >
                            ${this.t.cancelEditBtn}
                          </button>
                        </div>
                      </div>
                    `:d`
                      <div class="card-header">
                        <span
                          class="question-preview ${t.completed?"completed":""}"
                        >
                          ${t.text}
                        </span>
                        <div class="card-actions">
                          <input
                            type="checkbox"
                            class="task-checkbox"
                            .checked="${t.completed}"
                            @change="${i=>this._toggleCompleteEditor(e,i.target.checked)}"
                            aria-label="${t.completed?this.t.taskCompleted:this.t.taskIncomplete}"
                          />
                          <button
                            class="edit-btn"
                            @click="${()=>this._startEditTask(e)}"
                            aria-label="${this.t.ariaEditTask}"
                          >
                            ${this.t.editTaskBtn}
                          </button>
                          <button
                            class="delete-btn"
                            @click="${()=>this._deleteTaskEditor(e)}"
                            aria-label="${this.t.ariaDeleteTask}"
                          >
                            ${this.t.deleteTask}
                          </button>
                        </div>
                      </div>
                    `}
              </div>
            `)}
        </div>
      </div>

      <div class="editor-actions">
        <button
          class="save-all-btn"
          @click="${this._saveAll}"
          aria-label="${this.t.ariaSaveAll}"
        >
          ${this.t.saveAllBtn}
        </button>
        <button
          class="cancel-all-btn"
          @click="${this._cancelAll}"
          aria-label="${this.t.ariaCancelAll}"
        >
          ${this.t.cancelAllBtn}
        </button>
      </div>
    `}_renderTask(t){return d`
      <li class="task-item" data-id="${t.id}">
        <input
          type="checkbox"
          class="task-checkbox"
          .checked="${t.completed}"
          aria-label="${t.completed?this.t.taskCompleted:this.t.taskIncomplete}"
          aria-checked="${t.completed}"
          @change="${e=>this._handleToggleComplete(t.id,e.target.checked)}"
        />
        <span class="task-text ${t.completed?"completed":""}"
          >${t.text}</span
        >
        <button
          class="delete-button"
          aria-label="${this.t.deleteTask}: ${t.text}"
          @click="${()=>this._handleDelete(t.id)}"
          ?hidden="${this._inHaxEditor}"
        >
          ${this.t.deleteTask}
        </button>
      </li>
    `}_handleInputKeydown(t){t.key==="Enter"&&this._addTask()}_handleAddClick(){this._addTask()}_handleInputChange(t){t.target.value.trim().length===0&&(this._validationError="")}_handleDelete(t){this.tasks=this.tasks.filter(e=>e.id!==t)}_handleToggleComplete(t,e){this.tasks=this.tasks.map(i=>i.id===t?{...i,completed:e}:i)}_addTask(){const t=this.shadowRoot.querySelector("#task-input"),e=t.value.trim();if(!e){this._validationError="";return}if(e.length<3){this._validationError=this.t.validationErrorMinLength;return}if(e.length>50){this._validationError=this.t.validationErrorMaxLength;return}this._validationError="";const i={id:typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now(),text:e,completed:!1};this.tasks=[...this.tasks,i],t.value="",t.focus()}_openEditor(){this._screen==="list"&&(this.editing||(this.editing=!0,this._editingIndex=-1,this._tempTaskText="",this._tempTasks=JSON.parse(JSON.stringify(this.tasks||[])),this._editorOrigin="list",this._screen="editor"))}_addTaskEditor(){const t=(this._tempTaskText||"").trim();if(t){if(t.length<3){this._validationError=this.t.validationErrorMinLength;return}if(t.length>50){this._validationError=this.t.validationErrorMaxLength;return}this._validationError="",this._tempTasks=[...this._tempTasks,{id:typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now(),text:t,completed:!1}],this._tempTaskText=""}}_deleteTaskEditor(t){this._tempTasks=this._tempTasks.filter((e,i)=>i!==t),this._editingIndex===t?(this._editingIndex=-1,this._tempTaskText=""):this._editingIndex>t&&(this._editingIndex=this._editingIndex-1)}_toggleCompleteEditor(t,e){this._tempTasks=this._tempTasks.map((i,a)=>a===t?{...i,completed:e}:i)}_startEditTask(t){this._editingIndex=t,this._tempTaskText=this._tempTasks[t]?.text||""}_saveEditTask(){const t=(this._tempTaskText||"").trim();if(!t){this._validationError=this.t.emptyTaskError;return}if(t.length<3){this._validationError=this.t.validationErrorMinLength;return}if(t.length>50){this._validationError=this.t.validationErrorMaxLength;return}this._editingIndex<0||this._editingIndex>=this._tempTasks.length||(this._validationError="",this._tempTasks=this._tempTasks.map((e,i)=>i===this._editingIndex?{...e,text:t}:e),this._editingIndex=-1,this._tempTaskText="")}_cancelEditTask(){this._editingIndex=-1,this._tempTaskText=""}_saveAll(){this._screen==="editor"&&(this.tasks=JSON.parse(JSON.stringify(this._tempTasks||[])),this.editing=!1,this._editingIndex=-1,this._tempTaskText="",this._screen=this._editorOrigin||"list",this._editorOrigin="list")}_cancelAll(){this._screen==="editor"&&(this.editing=!1,this._editingIndex=-1,this._tempTaskText="",this._screen=this._editorOrigin||"list",this._editorOrigin="list")}static get haxProperties(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Todo List",description:"A simple task management web component",icon:"icons:assignment",color:"blue",tags:["Productivity","Content"]},settings:{configure:[],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_validationError","_screen","_tempTasks","_editingIndex","_tempTaskText","_editorOrigin","editing","editable"]}}}}globalThis.customElements.define(xt.tag,xt);const j="a3_attendance_logs",Z="a3_last_activity_date";function J(){const $=new Date;return`${$.getFullYear()}-${String($.getMonth()+1).padStart(2,"0")}-${String($.getDate()).padStart(2,"0")}`}function V(){const $=J();if(localStorage.getItem(Z)!==$)return localStorage.setItem(j,"[]"),localStorage.setItem(Z,$),[];const t=localStorage.getItem(j);return t?JSON.parse(t):[]}function wt($,t){const e=new Date,i=J();localStorage.getItem(Z)!==i&&(localStorage.setItem(j,"[]"),localStorage.setItem(Z,i));const a=V();if(a.slice(0,5).filter(l=>l.type===$&&l.description===t&&l.timestamp===e.toISOString()).length>0)return a;const s={id:"log-"+e.getTime(),timestamp:e.toISOString(),date:i,type:$,description:t,synced:!1},o=[s,...a];return localStorage.setItem(j,JSON.stringify(o)),globalThis.dispatchEvent(new CustomEvent("a3-activity-logged",{detail:{log:s}})),o}function St($){try{const t=JSON.parse(localStorage.getItem(j)||"[]").map(e=>e.id===$?{...e,synced:!0}:e);localStorage.setItem(j,JSON.stringify(t))}catch{}}function Xt(){try{return JSON.parse(localStorage.getItem(j)||"[]").filter($=>!$.synced)}catch{return[]}}class tt extends U(N(L)){static get tag(){return"activity-logger"}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Activity Logger",description:"Pencatat aktivitas belajar siswa",icon:"icons:list-alt",color:"green",tags:["Education","Attendance"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet",inputMethod:"textfield"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},kdMateri:{type:String,attribute:"kd-materi"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},_logs:{state:!0},_expanded:{state:!0},_toastMsg:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.kdMateri="",this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this._logs=V(),this._expanded=!1,this._toastMsg="",this._lastScrollTime=0,this._handleScroll=this._handleScroll.bind(this),this._handleQuizSaved=this._handleQuizSaved.bind(this),this._handleDiscussionSaved=this._handleDiscussionSaved.bind(this),this._handleAssignmentSaved=this._handleAssignmentSaved.bind(this),this._handleReadingSaved=this._handleReadingSaved.bind(this),this._handleSessionChanged=this._handleSessionChanged.bind(this)}get _kdMateriVal(){return this.kdMateri||this.sheetName||"Pertemuan"}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const e=globalThis.HaxStore.requestAvailability();e&&!e.elementList[tt.tag]&&(e.elementList[tt.tag]=tt.haxProperties)}globalThis.addEventListener("scroll",this._handleScroll,{passive:!0}),globalThis.addEventListener("quiz-saved",this._handleQuizSaved),globalThis.addEventListener("discussion-saved",this._handleDiscussionSaved),globalThis.addEventListener("assignment-saved",this._handleAssignmentSaved),globalThis.addEventListener("reading-saved",this._handleReadingSaved),globalThis.addEventListener("download-saved",this._handleDownloadSaved),globalThis.addEventListener("quiz-user-session-changed",this._handleSessionChanged),this._downloadClickHandler=e=>this._handleDownloadClick(e),globalThis.document.addEventListener("click",this._downloadClickHandler,!0);const t=J();localStorage.getItem(Z)!==t&&(this._logs=[],localStorage.setItem(j,"[]"),localStorage.setItem(Z,t)),this._handleSessionChanged({detail:this._loadSession()})}_loadSession(){try{const t=JSON.parse(localStorage.getItem("quiz_user_session"));return t?.expiresAt&&Date.now()>t.expiresAt?(localStorage.removeItem("quiz_user_session"),null):t}catch{return null}}_handleSessionChanged(t){const e=t?.detail||this._loadSession();e?.studentId?(this.studentId=e.studentId,this.studentName=e.nama,this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||""):(this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="")}disconnectedCallback(){globalThis.removeEventListener("scroll",this._handleScroll),globalThis.removeEventListener("quiz-saved",this._handleQuizSaved),globalThis.removeEventListener("discussion-saved",this._handleDiscussionSaved),globalThis.removeEventListener("assignment-saved",this._handleAssignmentSaved),globalThis.removeEventListener("reading-saved",this._handleReadingSaved),globalThis.removeEventListener("download-saved",this._handleDownloadSaved),globalThis.removeEventListener("quiz-user-session-changed",this._handleSessionChanged),globalThis.document.removeEventListener("click",this._downloadClickHandler,!0),super.disconnectedCallback()}_handleScroll(){const t=Date.now();t-this._lastScrollTime<12e4||globalThis.scrollY>1e3&&(this._lastScrollTime=t,this.logActivity("reading",`Membaca materi (scroll ${Math.round(globalThis.scrollY)}px)`))}_handleQuizSaved(t){const e=t.detail?.score||0;this.logActivity("quiz",`Kuis selesai (Skor: ${e}%)`)}_handleDiscussionSaved(t){const e=t.detail?.thread||t.detail?.title||"Forum";t.detail?.kdMateri||this._kdMateriVal,this.logActivity("discussion",`Diskusi di: ${e}`)}_handleAssignmentSaved(t){const e=t.detail?.title||"Tugas";t.detail?.kdMateri||this._kdMateriVal,this.logActivity("assignment",`Tugas dikumpulkan: ${e}`)}_handleReadingSaved(t){const e=t.detail?.title||"Materi";this.logActivity("reading",`Membaca: ${e}`)}_handleDownloadSaved(t){const e=t.detail?.title||"Materi";this.logActivity("download",`Download materi: ${e}`)}_handleDownloadClick(t){if(!t.target)return;const e=t.target.closest?t.target.closest('a[download], a[href*="/files/"], a[href*="files/"]'):null;if(!e)return;const i=e.getAttribute("download")||e.getAttribute("aria-label")||e.textContent.trim()||e.getAttribute("href")||"Materi";this.logActivity("download",`Download materi: ${i.substring(0,60)}`)}logActivity(t,e){if(wt(t,e),this._logs=V(),this.appsScriptUrl&&this.studentId){const i=this._logs[0],a=new URLSearchParams({action:"logActivity",timestamp:new Date().toISOString(),date:J(),name:this.studentName,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",activityType:t,description:e,kdMateri:this._kdMateriVal});fetch(`${this.appsScriptUrl}?${a.toString()}`,{redirect:"follow"}).then(()=>{i&&St(i.id)}).catch(()=>{})}this._showToast(`\u2713 ${e.substring(0,40)}`)}_flushPendingLogs(){if(!this.studentId||!this.appsScriptUrl)return;const t=Xt();for(const e of t){const i=new URLSearchParams({action:"logActivity",timestamp:e.timestamp,date:e.date,name:this.studentName,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",activityType:e.type,description:e.description,kdMateri:this._kdMateriVal});fetch(`${this.appsScriptUrl}?${i.toString()}`,{redirect:"follow"}).then(()=>{St(e.id)}).catch(()=>{})}}_showToast(t){this._toastMsg=t,setTimeout(()=>{this._toastMsg===t&&(this._toastMsg="")},3e3)}_resetToday(){globalThis.confirm("Reset semua aktivitas hari ini?")&&(this._logs=[],localStorage.setItem(j,"[]"),this._showToast("Aktivitas hari ini direset"))}static get styles(){return[super.styles,D`:host { display: block; font-family: var(--ddd-font-primary); } .floating-logger-pill { position: fixed; bottom: var(--ddd-spacing-6); right: var(--ddd-spacing-6); background-color: var(--ddd-theme-default-text); color: var(--ddd-theme-on-primary); padding: var(--ddd-spacing-3) var(--ddd-spacing-5); border-radius: var(--ddd-radius-full); box-shadow: var(--ddd-shadow-2); display: flex; align-items: center; gap: var(--ddd-spacing-3); cursor: pointer; z-index: 1000; transition: all 0.3s; font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-medium); } .floating-logger-pill:hover { transform: translateY(-2px); box-shadow: var(--ddd-shadow-3); } .pulse-dot { width: 8px; height: 8px; background-color: var(--ddd-theme-success); border-radius: 50%; animation: pulse 1.6s infinite; } @keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34,197,94,0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34,197,94,0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34,197,94,0); } } .drawer { position: fixed; bottom: 84px; right: var(--ddd-spacing-6); width: 380px; max-height: 500px; background: var(--ddd-theme-default-surface); border-radius: var(--ddd-radius-lg); box-shadow: var(--ddd-shadow-3); border: 1px solid var(--ddd-theme-polaris-border); z-index: 1000; display: flex; flex-direction: column; overflow: hidden; } .drawer-header { background-color: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary); padding: var(--ddd-spacing-4); font-weight: var(--ddd-font-weight-bold); display: flex; justify-content: space-between; align-items: center; } .close-btn { background: none; border: none; color: var(--ddd-theme-on-primary); font-size: var(--ddd-font-size-xl); cursor: pointer; } .drawer-content { padding: var(--ddd-spacing-4); overflow-y: auto; flex: 1; } .date-label { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-bottom: var(--ddd-spacing-3); text-align: center; } .logs-list { display: flex; flex-direction: column; gap: var(--ddd-spacing-2); max-height: 280px; overflow-y: auto; } .log-item { padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border-radius: var(--ddd-radius-md); background-color: var(--ddd-theme-polaris-surface-hover); font-size: var(--ddd-font-size-xs); border-left: 3px solid var(--ddd-theme-secondary); } .log-item.reading { border-left-color: var(--ddd-theme-link); } .log-item.quiz { border-left-color: var(--ddd-theme-accent); } .log-item.assignment { border-left-color: var(--ddd-theme-success); } .log-item.discussion { border-left-color: var(--ddd-theme-warning); } .log-time { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-bottom: 2px; } .reset-btn { background: var(--ddd-theme-error); color: var(--ddd-theme-on-error); border: none; padding: var(--ddd-spacing-1) var(--ddd-spacing-3); border-radius: var(--ddd-radius-md); font-size: var(--ddd-font-size-xs); cursor: pointer; margin-top: var(--ddd-spacing-3); } .toast { position: fixed; bottom: 90px; right: var(--ddd-spacing-6); background-color: var(--ddd-theme-default-text); color: var(--ddd-theme-on-primary); padding: var(--ddd-spacing-3) var(--ddd-spacing-5); border-radius: var(--ddd-radius-md); box-shadow: var(--ddd-shadow-2); font-size: var(--ddd-font-size-s); z-index: 1001; animation: fadeInOut 3s forwards; } @keyframes fadeInOut { 0% { opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { opacity: 0; } }`]}render(){const t=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"});return d`
      <div class="floating-logger-pill" @click="${()=>this._expanded=!this._expanded}">
        <span class="pulse-dot"></span>
        <span>Aktivitas Hari Ini (${this._logs.length})</span>
      </div>
      ${this._expanded?d`
        <div class="drawer">
          <div class="drawer-header">
            <span>📊 Aktivitas Hari Ini</span>
            <button class="close-btn" @click="${()=>this._expanded=!1}">×</button>
          </div>
          <div class="drawer-content">
            <div class="date-label">📅 ${t}</div>
            <div class="logs-list">
              ${this._logs.length===0?d`<div style="color: var(--ddd-theme-secondary); text-align: center; padding: var(--ddd-spacing-6) 0;">Belum ada aktivitas tercatat hari ini.</div>`:this._logs.map(e=>d`
                  <div class="log-item ${e.type}">
                    <div class="log-time">${new Date(e.timestamp).toLocaleTimeString("id-ID")}</div>
                    <div>${e.description}</div>
                  </div>
                `)}
            </div>
            <button class="reset-btn" @click="${this._resetToday}">🔄 Reset Hari Ini</button>
          </div>
        </div>
      `:""}
      ${this._toastMsg?d`<div class="toast">${this._toastMsg}</div>`:""}
    `}}globalThis.customElements.define(tt.tag,tt);class et extends U(N(L)){static get tag(){return"attendance-tracker"}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Attendance Tracker",description:"Rekap absensi dan aktivitas harian siswa",icon:"icons:check-circle",color:"green",tags:["Education","Attendance"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield"},{property:"forumApiUrl",title:"Forum API URL",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet (KD Materi)",inputMethod:"textfield"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},studentId:{type:String,attribute:"student-id"},_logs:{state:!0},_forumToday:{state:!0}}}constructor(){super(),this._logs=V(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.studentId="",this._forumToday=0,this._handleSessionChanged=this._handleSessionChanged.bind(this)}get kdMateri(){return this.sheetName||"Pertemuan"}_loadSession(){try{const t=JSON.parse(localStorage.getItem("quiz_user_session"));return t?.expiresAt&&Date.now()>t.expiresAt?(localStorage.removeItem("quiz_user_session"),null):t}catch{return null}}_handleSessionChanged(t){const e=t?.detail||this._loadSession();e?.studentId?(this.studentId=e.studentId,this.studentName=e.nama,this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||"",this._fetchForumToday()):(this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="")}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[et.tag]&&(t.elementList[et.tag]=et.haxProperties)}this._reloadHandler=()=>{this._logs=V()},this._forumHandler=()=>{this._fetchForumToday()},globalThis.addEventListener("a3-activity-logged",this._reloadHandler),globalThis.addEventListener("storage",this._reloadHandler),globalThis.addEventListener("discussion-saved",this._forumHandler),globalThis.addEventListener("quiz-user-session-changed",this._handleSessionChanged),this._handleSessionChanged({detail:this._loadSession()}),this._fetchForumToday()}disconnectedCallback(){globalThis.removeEventListener("a3-activity-logged",this._reloadHandler),globalThis.removeEventListener("storage",this._reloadHandler),globalThis.removeEventListener("discussion-saved",this._forumHandler),globalThis.removeEventListener("quiz-user-session-changed",this._handleSessionChanged),super.disconnectedCallback()}async _fetchForumToday(){if(!this.forumApiUrl||!this.studentId){this._forumToday=0;return}try{const t=new URLSearchParams({action:"getForumActivityHistory",studentId:this.studentId,days:1,kdMateri:this._kdMateriVal}),e=(await(await fetch(`${this.forumApiUrl}?${t.toString()}`)).json()).history||[];this._forumToday=e.reduce((i,a)=>i+(a.count||0),0)}catch(t){console.error("[attendance-tracker] Forum fetch failed:",t),this._forumToday=0}}_getTodayStats(){const t=J(),e=this._logs.filter(c=>c.date===t),i={reading:e.filter(c=>c.type==="reading").length,quiz:e.filter(c=>c.type==="quiz").length,assignment:e.filter(c=>c.type==="assignment").length,discussion:e.filter(c=>c.type==="discussion").length,download:e.filter(c=>c.type==="download").length,forum:e.filter(c=>c.type==="discussion").length,total:e.length},a=i.reading>=3?1:0,s=i.quiz>=1?1:0,o=i.assignment>=1?1:0,l=i.download>=1?1:0,y=this.forumApiUrl?i.forum>=1?1:0:null,h=i.total>=8?1:0,g=y===null?5:6,A=a+s+o+l+(y||0)+h,q=Math.round(A/g*100);return{counts:i,attendancePercentage:q,status:q>=100?"LENGKAP":q>=50?"PROSES":"BELUM MULAI"}}static get styles(){return[super.styles,D`:host { display: block; font-family: var(--ddd-font-primary); color: var(--ddd-theme-default-text); } .tracker-card { background: var(--ddd-theme-default-surface); border-radius: var(--ddd-radius-lg); padding: var(--ddd-spacing-6); border: 1px solid var(--ddd-theme-polaris-border); box-shadow: var(--ddd-shadow-1); } h3 { margin: 0 0 var(--ddd-spacing-4) 0; font-size: var(--ddd-font-size-l); color: var(--ddd-theme-primary); display: flex; align-items: center; gap: var(--ddd-spacing-2); } .date-info { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-bottom: var(--ddd-spacing-4); text-align: center; } .flex-container { display: flex; gap: var(--ddd-spacing-8); align-items: center; flex-wrap: wrap; } .gauge-section { flex: 1; min-width: 220px; display: flex; flex-direction: column; align-items: center; text-align: center; } .gauge-wrapper { position: relative; width: 160px; height: 160px; margin-bottom: var(--ddd-spacing-3); } svg { transform: rotate(-90deg); width: 160px; height: 160px; } circle { fill: none; stroke-width: 12; } .bg-circle { stroke: var(--ddd-theme-polaris-surface-hover); } .fg-circle { stroke: var(--ddd-theme-primary); stroke-linecap: round; transition: stroke-dashoffset 0.6s; } .gauge-value { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); } .badge { padding: var(--ddd-spacing-2) var(--ddd-spacing-4); border-radius: var(--ddd-radius-full); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-bold); display: inline-block; margin-top: var(--ddd-spacing-2); } .badge.success { background-color: var(--ddd-theme-success-light); color: var(--ddd-theme-success-text); } .badge.warning { background-color: var(--ddd-theme-warning-light); color: var(--ddd-theme-warning-text); } .badge.info { background-color: var(--ddd-theme-polaris-surface-hover); color: var(--ddd-theme-secondary); } .criteria-list { flex: 2; min-width: 280px; display: flex; flex-direction: column; gap: var(--ddd-spacing-3); } .criteria-item { display: flex; align-items: center; justify-content: space-between; padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-radius: var(--ddd-radius-md); background-color: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border); } .crit-info { display: flex; align-items: center; gap: var(--ddd-spacing-3); } .icon { font-size: var(--ddd-font-size-l); width: 32px; height: 32px; background-color: var(--ddd-theme-polaris-surface-hover); border-radius: var(--ddd-radius-md); display: flex; align-items: center; justify-content: center; } .crit-name { font-weight: var(--ddd-font-weight-medium); font-size: var(--ddd-font-size-s); } .crit-progress { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-top: 2px; } .status-indicator { font-size: var(--ddd-font-size-l); } .status-indicator.check { color: var(--ddd-theme-success); } .status-indicator.cross { color: var(--ddd-theme-polaris-border); }`]}render(){const t=this._getTodayStats(),e=65,i=2*Math.PI*e,a=i-t.attendancePercentage/100*i,s=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long"});return d`
      <div class="tracker-card">
        <h3>📊 Status Kehadiran Hari Ini</h3>
        <div class="date-info">📅 ${s}</div>
        <div class="flex-container">
          <div class="gauge-section">
            <div class="gauge-wrapper">
              <svg><circle class="bg-circle" cx="80" cy="80" r="${e}"></circle><circle class="fg-circle" cx="80" cy="80" r="${e}" stroke-dasharray="${i}" stroke-dashoffset="${a}"></circle></svg>
              <div class="gauge-value">${t.attendancePercentage}%</div>
            </div>
            <span class="badge ${t.attendancePercentage>=100?"success":t.attendancePercentage>=50?"warning":"info"}">Status: ${t.status}</span>
          </div>
          <div class="criteria-list">
            <div class="criteria-item">
              <div class="crit-info"><div class="icon">📖</div><div><div class="crit-name">Membaca Materi</div><div class="crit-progress">Tercapai: ${t.counts.reading} dari min. 3 kali</div></div></div>
              <div class="status-indicator ${t.counts.reading>=3?"check":"cross"}">${t.counts.reading>=3?"\u2705":"\u23F3"}</div>
            </div>
            <div class="criteria-item">
              <div class="crit-info"><div class="icon">🎯</div><div><div class="crit-name">Mengerjakan Kuis</div><div class="crit-progress">Tercapai: ${t.counts.quiz} dari min. 1 kali</div></div></div>
              <div class="status-indicator ${t.counts.quiz>=1?"check":"cross"}">${t.counts.quiz>=1?"\u2705":"\u23F3"}</div>
            </div>
            <div class="criteria-item">
              <div class="crit-info"><div class="icon">📝</div><div><div class="crit-name">Mengumpulkan Tugas</div><div class="crit-progress">Tercapai: ${t.counts.assignment} dari min. 1 kali</div></div></div>
              <div class="status-indicator ${t.counts.assignment>=1?"check":"cross"}">${t.counts.assignment>=1?"\u2705":"\u23F3"}</div>
            </div>
            <div class="criteria-item">
              <div class="crit-info"><div class="icon">⬇️</div><div><div class="crit-name">Download Materi</div><div class="crit-progress">Tercapai: ${t.counts.download} dari min. 1 kali (klik link file/unduhan)</div></div></div>
              <div class="status-indicator ${t.counts.download>=1?"check":"cross"}">${t.counts.download>=1?"\u2705":"\u23F3"}</div>
            </div>
            ${this.forumApiUrl?d`
              <div class="criteria-item">
                <div class="crit-info"><div class="icon">💬</div><div><div class="crit-name">Mengirim Komentar Forum</div><div class="crit-progress">Tercapai: ${t.counts.forum} dari min. 1 kali (cek sheet Forum Log)</div></div></div>
                <div class="status-indicator ${t.counts.forum>=1?"check":"cross"}">${t.counts.forum>=1?"\u2705":"\u23F3"}</div>
              </div>
            `:""}
            <div class="criteria-item">
              <div class="crit-info"><div class="icon">🔥</div><div><div class="crit-name">Total Aktivitas Hari Ini</div><div class="crit-progress">Tercapai: ${t.counts.total} dari min. 8 kali</div></div></div>
              <div class="status-indicator ${t.counts.total>=8?"check":"cross"}">${t.counts.total>=8?"\u2705":"\u23F3"}</div>
            </div>
          </div>
        </div>
      </div>
    `}}globalThis.customElements.define(et.tag,et);class it extends U(N(L)){static get tag(){return"engagement-score"}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Engagement Score",description:"Skor keterlibatan belajar siswa (heatmap 6 minggu)",icon:"icons:whatshot",color:"orange",tags:["Education","Attendance"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield"},{property:"forumApiUrl",title:"Forum API URL",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet (KD Materi)",inputMethod:"textfield"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},studentId:{type:String,attribute:"student-id"},_history:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.studentId="",this._history=[],this._handleSessionChanged=this._handleSessionChanged.bind(this)}get kdMateri(){return this.sheetName||"Pertemuan"}_loadSession(){try{const t=JSON.parse(localStorage.getItem("quiz_user_session"));return t?.expiresAt&&Date.now()>t.expiresAt?(localStorage.removeItem("quiz_user_session"),null):t}catch{return null}}_handleSessionChanged(t){const e=t?.detail||this._loadSession();e?.studentId?(this.studentId=e.studentId,this.studentName=e.nama,this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||"",this._fetchHistory()):(this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="")}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[it.tag]&&(t.elementList[it.tag]=it.haxProperties)}this._reloadHandler=()=>this._fetchHistory(),globalThis.addEventListener("a3-activity-logged",this._reloadHandler),globalThis.addEventListener("discussion-saved",this._reloadHandler),globalThis.addEventListener("quiz-user-session-changed",this._handleSessionChanged),this._handleSessionChanged({detail:this._loadSession()}),this._fetchHistory()}disconnectedCallback(){globalThis.removeEventListener("a3-activity-logged",this._reloadHandler),globalThis.removeEventListener("discussion-saved",this._reloadHandler),globalThis.removeEventListener("quiz-user-session-changed",this._handleSessionChanged),super.disconnectedCallback()}async _fetchHistory(){if(!this.appsScriptUrl||!this.studentId){this._history=[{date:J(),count:V().length}];return}try{const t=new URLSearchParams({action:"getActivityHistory",studentId:this.studentId,days:42,kdMateri:this._kdMateriVal}),e=await(await fetch(`${this.appsScriptUrl}?${t.toString()}`)).json(),i={};if((e.history||[]).forEach(a=>{i[a.date]=(i[a.date]||0)+(a.count||0)}),this.forumApiUrl)try{const a=new URLSearchParams({action:"getForumActivityHistory",studentId:this.studentId,days:42,kdMateri:this._kdMateriVal});((await(await fetch(`${this.forumApiUrl}?${a.toString()}`)).json()).history||[]).forEach(s=>{i[s.date]=(i[s.date]||0)+(s.count||0)})}catch(a){console.error("[engagement-score] Forum fetch failed:",a)}this._history=Object.keys(i).map(a=>({date:a,count:i[a]}))}catch(t){console.error("[engagement-score] Fetch failed:",t),this._history=[{date:J(),count:V().length}]}}_getActivityMap(){const t=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],e=new Date,i=J(),a=new Date(e);a.setDate(a.getDate()-e.getDay()-35);const s=[],o=[];let l=[];for(let y=0;y<42;y++){const h=new Date(a);h.setDate(a.getDate()+y);const g=`${h.getFullYear()}-${String(h.getMonth()+1).padStart(2,"0")}-${String(h.getDate()).padStart(2,"0")}`,A=this._history.find(c=>c.date===g),q=A?A.count:0;l.push({date:h,dateStr:g,dayName:t[h.getDay()],count:q,isToday:g===i}),l.length===7&&(o.push(l),l=[])}return s.push(...o.flat()),{cells:s,weeks:o}}static get styles(){return[super.styles,D`:host { display: block; font-family: var(--ddd-font-primary); color: var(--ddd-theme-default-text); } .engagement-card { background: var(--ddd-theme-default-surface); border-radius: var(--ddd-radius-lg); padding: var(--ddd-spacing-6); border: 1px solid var(--ddd-theme-polaris-border); box-shadow: var(--ddd-shadow-1); } h3 { margin: 0 0 var(--ddd-spacing-3) 0; font-size: var(--ddd-font-size-l); color: var(--ddd-theme-primary); display: flex; align-items: center; gap: var(--ddd-spacing-2); } .consistency-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--ddd-spacing-3); } .stat-mini-card { background-color: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); display: flex; flex-direction: column; gap: var(--ddd-spacing-1); } .mini-label { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); font-weight: var(--ddd-font-weight-medium); } .mini-val { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary); } .heatmap-layout { display: grid; grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr); gap: var(--ddd-spacing-6); align-items: start; } .heatmap-col { min-width: 0; } .side-col { display: flex; flex-direction: column; gap: var(--ddd-spacing-4); min-width: 0; } .heatmap-wrap { display: flex; gap: 3px; max-width: 640px; margin: 0; } .heatmap-months { display: grid; grid-auto-flow: column; grid-auto-columns: 18px; gap: 3px; font-size: 10px; color: var(--ddd-theme-secondary); margin-bottom: 3px; margin-left: 32px; } .heatmap-months span { overflow: visible; white-space: nowrap; } .day-labels { display: grid; grid-template-rows: repeat(7, 18px); gap: 3px; font-size: 10px; color: var(--ddd-theme-secondary); text-align: right; padding-right: 8px; } .heatmap-grid { display: grid; grid-template-rows: repeat(7, 18px); grid-auto-flow: column; grid-auto-columns: 18px; gap: 3px; } .cell { width: 18px; height: 18px; background-color: var(--ddd-theme-polaris-surface-hover); border-radius: 3px; cursor: pointer; transition: transform 0.15s; } .cell:hover { transform: scale(1.3); z-index: 10; box-shadow: var(--ddd-shadow-1); } .cell.lvl-1 { background-color: var(--ddd-theme-accent-light); } .cell.lvl-2 { background-color: var(--ddd-theme-accent); } .cell.lvl-3 { background-color: var(--ddd-theme-primary); } .cell.lvl-4 { background-color: var(--ddd-theme-default-text); } .cell.today { outline: 2px solid var(--ddd-theme-accent); outline-offset: 1px; } .cell.today.done { background-color: var(--ddd-theme-accent); } .legend { display: flex; align-items: center; gap: var(--ddd-spacing-2); flex-wrap: wrap; font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); } .legend-cell { width: 12px; height: 12px; border-radius: 3px; } .heatmap-note { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); } .side-note-card { background-color: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); font-size: var(--ddd-font-size-s); color: var(--ddd-theme-secondary); line-height: 1.6; } @media (max-width: 768px) { .heatmap-layout { grid-template-columns: 1fr; } .heatmap-col { overflow-x: auto; } } @media (max-width: 480px) { .heatmap-grid { grid-template-rows: repeat(7, 12px); grid-auto-columns: 12px; gap: 2px; } .cell { width: 12px; height: 12px; } .day-labels { grid-template-rows: repeat(7, 12px); gap: 2px; } .heatmap-months { grid-auto-columns: 12px; gap: 2px; } }`]}render(){const{cells:t,weeks:e}=this._getActivityMap(),i=t.reduce((h,g)=>h+g.count,0),a=t.filter(h=>h.count>0).length,s=Math.round(a/42*100),o=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],l=e.map((h,g)=>{const A=o[h[0].date.getMonth()];if(g===0)return A;const q=o[e[g-1][0].date.getMonth()];return A===q?"":A}),y=["Min","Sen","Sel","Rab","Kam","Jum","Sab"];return d`
      <div class="engagement-card">
        <h3>🔥 Heatmap Aktivitas 1 Bulan</h3>
        <div class="heatmap-layout">
          <div class="heatmap-col">
            <div class="heatmap-months">${l.map(h=>d`<span>${h}</span>`)}</div>
            <div class="heatmap-wrap">
              <div class="day-labels">${y.map(h=>d`<span>${h}</span>`)}</div>
              <div class="heatmap-grid">
                ${t.map(h=>{let g="";h.count===1?g="lvl-1":h.count===2?g="lvl-2":h.count>=3&&h.count<=5?g="lvl-3":h.count>5&&(g="lvl-4");const A=h.isToday?"today":"",q=h.isToday&&h.count>0?"done":"",c=`${h.dateStr}: ${h.count} aktivitas${h.isToday?" (Hari ini)":""}`;return d`<div class="cell ${g} ${A} ${q}" title="${c}"></div>`})}
              </div>
            </div>
          </div>
          <div class="side-col">
            <div class="consistency-stats">
              <div class="stat-mini-card"><span class="mini-label">Total Aktivitas</span><span class="mini-val">${i} kali</span></div>
              <div class="stat-mini-card"><span class="mini-label">Hari Aktif</span><span class="mini-val">${a} / 42</span></div>
              <div class="stat-mini-card"><span class="mini-label">Indeks Konsistensi</span><span class="mini-val">${s}%</span></div>
            </div>
            <div class="side-note-card">${this.forumApiUrl?d`📌 Heatmap menggabungkan aktivitas dari <strong>getActivityHistory</strong> (sheet Aktivitas + pertemuan-kuis) dan <strong>getForumActivityHistory</strong> (sheet Forum Log).`:d`📌 Hover sel untuk detail harian. Sumber: sheet Aktivitas + pertemuan-kuis (via getActivityHistory).`}
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
        </div>
      </div>
    `}}globalThis.customElements.define(it.tag,it);class at extends U(N(L)){static get tag(){return"transparent-gradebook"}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Transparent Gradebook",description:"Buku nilai transparan untuk siswa",icon:"icons:grade",color:"blue",tags:["Education","Gradebook"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},viewMode:{type:String,attribute:"view-mode"},_scores:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.studentId="",this.studentName="",this.viewMode="student",this._scores={kehadiran:0,ulanganHarian:0,uts:0,uas:0,sikap:0,keterampilan:0,formatif:{count:0,all:[]}}}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[at.tag]&&(t.elementList[at.tag]=at.haxProperties)}this._fetchScores()}async _fetchScores(){if(!(!this.appsScriptUrl||!this.studentId))try{const t=new URLSearchParams({action:"getStudentScores",studentId:this.studentId}),e=await(await fetch(`${this.appsScriptUrl}?${t.toString()}`)).json();e.status==="ok"&&e.data&&(this._scores=e.data)}catch(t){console.error("[gradebook] Fetch failed:",t)}}_getUH(){const t=this._scores.ulanganHarian;return t==null?0:typeof t=="number"?t:t.average||0}_getUTS(){const t=this._scores.uts;return t==null?0:typeof t=="number"?t:t.highest||0}_getUAS(){const t=this._scores.uas;return t==null?0:typeof t=="number"?t:t.highest||0}_getBreakdown(){const t=[],e=(i,a)=>{i&&Array.isArray(i.all)&&i.all.forEach(s=>t.push({label:a,pertemuan:s.pertemuan||"\u2014",score:s.score}))};return e(this._scores.ulanganHarian,"Ulangan Harian"),e(this._scores.uts,"UTS"),e(this._scores.uas,"UAS"),e(this._scores.formatif,"Formatif"),t}_getFinalScore(){const t=this._scores.kehadiran*.125+this._getUH()*.375+this._getUTS()*.25+this._getUAS()*.25;return Math.round(t*10)/10}_getGradeLetter(t){return t>=85?"A":t>=80?"A-":t>=75?"B+":t>=70?"B":t>=60?"C+":"D"}static get styles(){return[super.styles,D`:host { display: block; font-family: var(--ddd-font-primary); color: var(--ddd-theme-default-text); } .grade-card { background: var(--ddd-theme-default-surface); border-radius: var(--ddd-radius-lg); padding: var(--ddd-spacing-6); border: 1px solid var(--ddd-theme-polaris-border); box-shadow: var(--ddd-shadow-1); } h3 { margin: 0; font-size: var(--ddd-font-size-l); color: var(--ddd-theme-primary); display: flex; align-items: center; gap: var(--ddd-spacing-2); } .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: var(--ddd-spacing-4); margin: var(--ddd-spacing-6) 0; } .summary-item { background: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); text-align: center; } .summary-item.highlight { background-color: var(--ddd-theme-polaris-surface-hover); border-color: var(--ddd-theme-accent); } .summary-label { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); text-transform: uppercase; letter-spacing: 0.5px; font-weight: var(--ddd-font-weight-medium); } .summary-val { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); margin-top: var(--ddd-spacing-1); } .summary-val.brand { color: var(--ddd-theme-primary); } .table-wrapper { width: 100%; overflow-x: auto; border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-theme-polaris-border); } table { width: 100%; border-collapse: collapse; text-align: left; font-size: var(--ddd-font-size-s); } th { background-color: var(--ddd-theme-polaris-surface-hover); color: var(--ddd-theme-secondary); font-weight: var(--ddd-font-weight-bold); padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-bottom: 2px solid var(--ddd-theme-polaris-border); } td { padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-bottom: 1px solid var(--ddd-theme-polaris-border); } .row-category { font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary); } .breakdown { margin-top: var(--ddd-spacing-5); } .breakdown-title { font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary); margin-bottom: var(--ddd-spacing-3); } .breakdown-note { margin-top: var(--ddd-spacing-5); font-size: var(--ddd-font-size-s); color: var(--ddd-theme-secondary); background: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); } .breakdown-note code { background: var(--ddd-theme-polaris-surface-hover); padding: 2px 6px; border-radius: var(--ddd-radius-sm); }`]}render(){const t=this._getFinalScore(),e=this._getGradeLetter(t),i=this._getUH(),a=this._getUTS(),s=this._getUAS(),o=this._getBreakdown();return d`
      <div class="grade-card">
        <h3>📖 Pencapaian Hasil Belajar</h3>
        <div class="summary-grid">
          <div class="summary-item"><span class="summary-label">Kehadiran</span><span class="summary-val">${this._scores.kehadiran||0}%</span></div>
          <div class="summary-item"><span class="summary-label">Ulangan Harian</span><span class="summary-val">${i}%</span></div>
          <div class="summary-item highlight"><span class="summary-label">Nilai Akhir</span><span class="summary-val brand">${t}</span></div>
          <div class="summary-item highlight"><span class="summary-label">Grade</span><span class="summary-val brand">${e}</span></div>
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>Komponen</th><th>Bobot</th><th>Nilai</th></tr></thead>
            <tbody>
              <tr><td class="row-category">Kehadiran</td><td style="text-align: center;">12.5%</td><td>${this._scores.kehadiran||0}</td></tr>
              <tr><td class="row-category">Ulangan Harian</td><td style="text-align: center;">37.5%</td><td>${i}</td></tr>
              <tr><td class="row-category">UTS</td><td style="text-align: center;">25%</td><td>${a||"\u2014"}</td></tr>
              <tr><td class="row-category">UAS</td><td style="text-align: center;">25%</td><td>${s||"\u2014"}</td></tr>
              <tr><td class="row-category">Sikap</td><td style="text-align: center;">—</td><td>${this._scores.sikap||0}</td></tr>
              <tr><td class="row-category">Keterampilan</td><td style="text-align: center;">—</td><td>${this._scores.keterampilan||0}</td></tr>
            </tbody>
            <tfoot><tr><td colspan="2" style="font-weight: var(--ddd-font-weight-bold); text-align: right;">Nilai Akhir:</td><td style="font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary);">${t} (${e})</td></tr></tfoot>
          </table>
        </div>
        ${o.length>0?d`
          <div class="breakdown">
            <div class="breakdown-title">📋 Rincian per Materi (dari sheet pertemuan-kuis)</div>
            <div class="table-wrapper">
              <table>
                <thead><tr><th>Komponen</th><th>Kode Materi</th><th>Skor</th></tr></thead>
                <tbody>
                  ${o.slice(0,10).map(l=>d`
                    <tr><td>${l.label}</td><td>${l.pertemuan}</td><td>${l.score}</td></tr>
                  `)}
                </tbody>
              </table>
            </div>
          </div>
        `:d`
          <div class="breakdown-note">Nilai UTS/UAS/UH bersumber dari sheet <code>pertemuan-kuis</code> (kolom Kategori Kuis + Kode Materi). Jalankan <strong>Generate Laporan</strong> di mode dosen untuk rekap resmi.</div>
        `}
      </div>
    `}}globalThis.customElements.define(at.tag,at);var ht={};(function $(t,e,i,a){var s=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=(function(){if(!t.OffscreenCanvas)return!1;try{var n=new OffscreenCanvas(1,1),r=n.getContext("2d");r.fillRect(0,0,1,1);var u=n.transferToImageBitmap();r.createPattern(u,"no-repeat")}catch{return!1}return!0})();function y(){}function h(n){var r=e.exports.Promise,u=r!==void 0?r:t.Promise;return typeof u=="function"?new u(n):(n(y,y),null)}var g=(function(n,r){return{transform:function(u){if(n)return u;if(r.has(u))return r.get(u);var m=new OffscreenCanvas(u.width,u.height),v=m.getContext("2d");return v.drawImage(u,0,0),r.set(u,m),m},clear:function(){r.clear()}}})(l,new Map),A=(function(){var n=Math.floor(16.666666666666668),r,u,m={},v=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(r=function(b){var f=Math.random();return m[f]=requestAnimationFrame(function p(_){v===_||v+n-1<_?(v=_,delete m[f],b()):m[f]=requestAnimationFrame(p)}),f},u=function(b){m[b]&&cancelAnimationFrame(m[b])}):(r=function(b){return setTimeout(b,n)},u=function(b){return clearTimeout(b)}),{frame:r,cancel:u}})(),q=(function(){var n,r,u={};function m(v){function b(f,p){v.postMessage({options:f||{},callback:p})}v.init=function(p){var _=p.transferControlToOffscreen();v.postMessage({canvas:_},[_])},v.fire=function(p,_,S){if(r)return b(p,null),r;var I=Math.random().toString(36).slice(2);return r=h(function(T){function M(E){E.data.callback===I&&(delete u[I],v.removeEventListener("message",M),r=null,g.clear(),S(),T())}v.addEventListener("message",M),b(p,I),u[I]=M.bind(null,{data:{callback:I}})}),r},v.reset=function(){v.postMessage({reset:!0});for(var p in u)u[p](),delete u[p]}}return function(){if(n)return n;if(!i&&s){var v=["var CONFETTI, SIZE = {}, module = {};","("+$.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{n=new Worker(URL.createObjectURL(new Blob([v])))}catch(b){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",b),null}m(n)}return n}})(),c={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(n,r){return r?r(n):n}function C(n){return n!=null}function x(n,r,u){return w(n&&C(n[r])?n[r]:c[r],u)}function O(n){return n<0?0:Math.floor(n)}function W(n,r){return Math.floor(Math.random()*(r-n))+n}function lt(n){return parseInt(n,16)}function At(n){return n.map(It)}function It(n){var r=String(n).replace(/[^0-9a-f]/gi,"");return r.length<6&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]),{r:lt(r.substring(0,2)),g:lt(r.substring(2,4)),b:lt(r.substring(4,6))}}function Mt(n){var r=x(n,"origin",Object);return r.x=x(r,"x",Number),r.y=x(r,"y",Number),r}function Ct(n){n.width=document.documentElement.clientWidth,n.height=document.documentElement.clientHeight}function qt(n){var r=n.getBoundingClientRect();n.width=r.width,n.height=r.height}function Et(n){var r=document.createElement("canvas");return r.style.position="fixed",r.style.top="0px",r.style.left="0px",r.style.pointerEvents="none",r.style.zIndex=n,r}function Pt(n,r,u,m,v,b,f,p,_){n.save(),n.translate(r,u),n.rotate(b),n.scale(m,v),n.arc(0,0,1,f,p,_),n.restore()}function Nt(n){var r=n.angle*(Math.PI/180),u=n.spread*(Math.PI/180);return{x:n.x,y:n.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:n.startVelocity*.5+Math.random()*n.startVelocity,angle2D:-r+(.5*u-Math.random()*u),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:n.color,shape:n.shape,tick:0,totalTicks:n.ticks,decay:n.decay,drift:n.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:n.gravity*3,ovalScalar:.6,scalar:n.scalar,flat:n.flat}}function Lt(n,r){r.x+=Math.cos(r.angle2D)*r.velocity+r.drift,r.y+=Math.sin(r.angle2D)*r.velocity+r.gravity,r.velocity*=r.decay,r.flat?(r.wobble=0,r.wobbleX=r.x+10*r.scalar,r.wobbleY=r.y+10*r.scalar,r.tiltSin=0,r.tiltCos=0,r.random=1):(r.wobble+=r.wobbleSpeed,r.wobbleX=r.x+10*r.scalar*Math.cos(r.wobble),r.wobbleY=r.y+10*r.scalar*Math.sin(r.wobble),r.tiltAngle+=.1,r.tiltSin=Math.sin(r.tiltAngle),r.tiltCos=Math.cos(r.tiltAngle),r.random=Math.random()+2);var u=r.tick++/r.totalTicks,m=r.x+r.random*r.tiltCos,v=r.y+r.random*r.tiltSin,b=r.wobbleX+r.random*r.tiltCos,f=r.wobbleY+r.random*r.tiltSin;if(n.fillStyle="rgba("+r.color.r+", "+r.color.g+", "+r.color.b+", "+(1-u)+")",n.beginPath(),o&&r.shape.type==="path"&&typeof r.shape.path=="string"&&Array.isArray(r.shape.matrix))n.fill(Ut(r.shape.path,r.shape.matrix,r.x,r.y,Math.abs(b-m)*.1,Math.abs(f-v)*.1,Math.PI/10*r.wobble));else if(r.shape.type==="bitmap"){var p=Math.PI/10*r.wobble,_=Math.abs(b-m)*.1,S=Math.abs(f-v)*.1,I=r.shape.bitmap.width*r.scalar,T=r.shape.bitmap.height*r.scalar,M=new DOMMatrix([Math.cos(p)*_,Math.sin(p)*_,-Math.sin(p)*S,Math.cos(p)*S,r.x,r.y]);M.multiplySelf(new DOMMatrix(r.shape.matrix));var E=n.createPattern(g.transform(r.shape.bitmap),"no-repeat");E.setTransform(M),n.globalAlpha=1-u,n.fillStyle=E,n.fillRect(r.x-I/2,r.y-T/2,I,T),n.globalAlpha=1}else if(r.shape==="circle")n.ellipse?n.ellipse(r.x,r.y,Math.abs(b-m)*r.ovalScalar,Math.abs(f-v)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI):Pt(n,r.x,r.y,Math.abs(b-m)*r.ovalScalar,Math.abs(f-v)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI);else if(r.shape==="star")for(var k=Math.PI/2*3,P=4*r.scalar,F=8*r.scalar,R=r.x,H=r.y,Y=5,K=Math.PI/Y;Y--;)R=r.x+Math.cos(k)*F,H=r.y+Math.sin(k)*F,n.lineTo(R,H),k+=K,R=r.x+Math.cos(k)*P,H=r.y+Math.sin(k)*P,n.lineTo(R,H),k+=K;else n.moveTo(Math.floor(r.x),Math.floor(r.y)),n.lineTo(Math.floor(r.wobbleX),Math.floor(v)),n.lineTo(Math.floor(b),Math.floor(f)),n.lineTo(Math.floor(m),Math.floor(r.wobbleY));return n.closePath(),n.fill(),r.tick<r.totalTicks}function Dt(n,r,u,m,v){var b=r.slice(),f=n.getContext("2d"),p,_,S=h(function(I){function T(){p=_=null,f.clearRect(0,0,m.width,m.height),g.clear(),v(),I()}function M(){i&&!(m.width===a.width&&m.height===a.height)&&(m.width=n.width=a.width,m.height=n.height=a.height),!m.width&&!m.height&&(u(n),m.width=n.width,m.height=n.height),f.clearRect(0,0,m.width,m.height),b=b.filter(function(E){return Lt(f,E)}),b.length?p=A.frame(M):T()}p=A.frame(M),_=T});return{addFettis:function(I){return b=b.concat(I),S},canvas:n,promise:S,reset:function(){p&&A.cancel(p),_&&_()}}}function gt(n,r){var u=!n,m=!!x(r||{},"resize"),v=!1,b=x(r,"disableForReducedMotion",Boolean),f=s&&!!x(r||{},"useWorker"),p=f?q():null,_=u?Ct:qt,S=n&&p?!!n.__confetti_initialized:!1,I=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,T;function M(k,P,F){for(var R=x(k,"particleCount",O),H=x(k,"angle",Number),Y=x(k,"spread",Number),K=x(k,"startVelocity",Number),Kt=x(k,"decay",Number),Bt=x(k,"gravity",Number),Ot=x(k,"drift",Number),bt=x(k,"colors",At),Ht=x(k,"ticks",Number),ft=x(k,"shapes"),jt=x(k,"scalar"),Qt=!!x(k,"flat"),_t=Mt(k),yt=R,mt=[],Gt=n.width*_t.x,Jt=n.height*_t.y;yt--;)mt.push(Nt({x:Gt,y:Jt,angle:H,spread:Y,startVelocity:K,color:bt[yt%bt.length],shape:ft[W(0,ft.length)],ticks:Ht,decay:Kt,gravity:Bt,drift:Ot,scalar:jt,flat:Qt}));return T?T.addFettis(mt):(T=Dt(n,mt,_,P,F),T.promise)}function E(k){var P=b||x(k,"disableForReducedMotion",Boolean),F=x(k,"zIndex",Number);if(P&&I)return h(function(K){K()});u&&T?n=T.canvas:u&&!n&&(n=Et(F),document.body.appendChild(n)),m&&!S&&_(n);var R={width:n.width,height:n.height};p&&!S&&p.init(n),S=!0,p&&(n.__confetti_initialized=!0);function H(){if(p){var K={getBoundingClientRect:function(){if(!u)return n.getBoundingClientRect()}};_(K),p.postMessage({resize:{width:K.width,height:K.height}});return}R.width=R.height=null}function Y(){T=null,m&&(v=!1,t.removeEventListener("resize",H)),u&&n&&(document.body.contains(n)&&document.body.removeChild(n),n=null,S=!1)}return m&&!v&&(v=!0,t.addEventListener("resize",H,!1)),p?p.fire(k,R,Y):M(k,R,Y)}return E.reset=function(){p&&p.reset(),T&&T.reset()},E}var pt;function vt(){return pt||(pt=gt(null,{useWorker:!0,resize:!0})),pt}function Ut(n,r,u,m,v,b,f){var p=new Path2D(n),_=new Path2D;_.addPath(p,new DOMMatrix(r));var S=new Path2D;return S.addPath(_,new DOMMatrix([Math.cos(f)*v,Math.sin(f)*v,-Math.sin(f)*b,Math.cos(f)*b,u,m])),S}function Ft(n){if(!o)throw new Error("path confetti are not supported in this browser");var r,u;typeof n=="string"?r=n:(r=n.path,u=n.matrix);var m=new Path2D(r),v=document.createElement("canvas"),b=v.getContext("2d");if(!u){for(var f=1e3,p=f,_=f,S=0,I=0,T,M,E=0;E<f;E+=2)for(var k=0;k<f;k+=2)b.isPointInPath(m,E,k,"nonzero")&&(p=Math.min(p,E),_=Math.min(_,k),S=Math.max(S,E),I=Math.max(I,k));T=S-p,M=I-_;var P=10,F=Math.min(P/T,P/M);u=[F,0,0,F,-Math.round(T/2+p)*F,-Math.round(M/2+_)*F]}return{type:"path",path:r,matrix:u}}function Rt(n){var r,u=1,m="#000000",v='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof n=="string"?r=n:(r=n.text,u="scalar"in n?n.scalar:u,v="fontFamily"in n?n.fontFamily:v,m="color"in n?n.color:m);var b=10*u,f=""+b+"px "+v,p=new OffscreenCanvas(b,b),_=p.getContext("2d");_.font=f;var S=_.measureText(r),I=Math.ceil(S.actualBoundingBoxRight+S.actualBoundingBoxLeft),T=Math.ceil(S.actualBoundingBoxAscent+S.actualBoundingBoxDescent),M=2,E=S.actualBoundingBoxLeft+M,k=S.actualBoundingBoxAscent+M;I+=M+M,T+=M+M,p=new OffscreenCanvas(I,T),_=p.getContext("2d"),_.font=f,_.fillStyle=m,_.fillText(r,E,k);var P=1/u;return{type:"bitmap",bitmap:p.transferToImageBitmap(),matrix:[P,0,0,P,-I*P/2,-T*P/2]}}e.exports=function(){return vt().apply(this,arguments)},e.exports.reset=function(){vt().reset()},e.exports.create=gt,e.exports.shapeFromPath=Ft,e.exports.shapeFromText=Rt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),ht,!1);var Zt=ht.exports;ht.exports.create;const X=[{question:"Apa ibu kota Indonesia?",choices:["Bandung","Surabaya","Jakarta","Medan"],correctIndex:2},{question:"Berapa hasil dari 7 \xD7 8?",choices:["54","56","58","60"],correctIndex:1},{question:"Planet terdekat dengan Matahari adalah?",choices:["Venus","Bumi","Mars","Merkurius"],correctIndex:3}];class B extends U(N(L)){static get tag(){return"explode-quiz"}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Explode Quiz",description:"Interactive multi-type quiz with confetti and Google Sheets integration",icon:"icons:question-answer",color:"purple",tags:["Education","Interactive","Content"]},settings:{configure:[{property:"scriptFunctionName",title:"Nama Fungsi Apps Script",description:"Nama fungsi Google Apps Script untuk menerima hasil kuis",inputMethod:"textfield"},{property:"quizCategory",title:"Kategori Kuis",description:"Kategori kuis: formatif, ulangan_harian, uts, atau uas",inputMethod:"select",options:{formatif:"Formatif (Absensi)",ulangan_harian:"Ulangan Harian",uts:"UTS",uas:"UAS"}},{property:"sheetName",title:"Nama Sheet",description:"Identitas sheet (default: Pertemuan)",inputMethod:"textfield"},{property:"kdMateri",title:"Kode Materi",description:"Kode materi unik untuk kuis ini. Prioritas: kd-materi > tag > sheet-name. Disimpan di kolom Kode Materi sheet pertemuan-kuis.",inputMethod:"textfield"},{property:"tag",title:"Tag (Legacy)",description:"Tag fallback jika kd-materi kosong",inputMethod:"textfield"},{property:"questions",title:"Soal (JSON)",description:"Array soal kuis dalam format JSON. Format tiap soal: { type: 'mc'|'pgk'|'matching'|'shortAnswer', question, choices, correctIndex, points }. Simpan setelah mengubah lewat tombol Simpan di editor soal.",inputMethod:"code-editor"},{property:"shuffleChoices",title:"Acak Pilihan Jawaban",description:"Mengacak urutan pilihan jawaban setiap kali kuis dimulai",inputMethod:"boolean"},{property:"hideAnswers",title:"Sembunyikan Jawaban",description:"Tidak menampilkan jawaban benar/salah setelah menjawab",inputMethod:"boolean"},{property:"hideConfetti",title:"Nonaktifkan Confetti",description:"Tidak menampilkan efek confetti saat jawaban benar",inputMethod:"boolean"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_screen","_studentName","_currentIndex","_score","_answered","_selectedIndex","_feedbackText","_feedbackPositive","_validationError","_nameInputValue","_editing","_tempQuestions","_editingIndex","_tempQuestionText","_tempChoice0","_tempChoice1","_tempChoice2","_tempChoice3","_tempCorrectIndex","_editorOrigin","_tempQuestionImage","_tempQuestionType","_tempCorrectAnswers","_tempLeftItems","_tempRightItems","_tempCorrectPairs","_tempAcceptedAnswers","_tempAcceptedStatements","_shuffledQuestions","_selectedAnswers","_matchAnswers","_shortAnswerText","_tempQuestionPoints","_tempChoiceImage0","_tempChoiceImage1","_tempChoiceImage2","_tempChoiceImage3","_maxPoints","_advanceTimer","_megaConfettiFrameId","editing"]}}}static get properties(){return{...super.properties,questions:{type:Array,attribute:"questions",reflect:!0,converter:{fromAttribute(t){if(t==null||t==="")return;if(Array.isArray(t)||typeof t=="object")return t;const e=String(t).trim();if(!(!e||e.includes("[object Object]")||e==="undefined"||e==="null")&&(e.startsWith("[")||e.startsWith("{")))try{const i=JSON.parse(e);return Array.isArray(i)?i:i&&typeof i=="object"&&Array.isArray(i.questions)?i.questions:void 0}catch{return}},toAttribute(t){if(!Array.isArray(t))return null;try{return JSON.stringify(t)}catch{return null}}}},scriptFunctionName:{type:String,attribute:!0},spreadsheetId:{type:String,attribute:"spreadsheet-id",reflect:!0},accessToken:{type:String,attribute:"access-token"},appsScriptUrl:{type:String,attribute:"apps-script-url"},sheetName:{type:String,attribute:"sheet-name"},tag:{type:String,attribute:"tag"},quizCategory:{type:String,attribute:"quiz-category"},shuffleChoices:{type:Boolean,attribute:"shuffle-choices",reflect:!0},hideAnswers:{type:Boolean,attribute:"hide-answers",reflect:!0},hideConfetti:{type:Boolean,attribute:"hide-confetti",reflect:!0},studentName:{type:String,attribute:"student-name"},studentId:{type:String,attribute:"student-id"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},editable:{type:Boolean,attribute:!0,reflect:!0},editing:{type:Boolean,attribute:!0,reflect:!0},kdMateri:{type:String,attribute:"kd-materi",reflect:!0},_screen:{state:!0},_studentName:{state:!0},_currentIndex:{state:!0},_score:{state:!0},_answered:{state:!0},_selectedIndex:{state:!0},_feedbackText:{state:!0},_feedbackPositive:{state:!0},_validationError:{state:!0},_nameInputValue:{state:!0},_editing:{state:!0},_tempQuestions:{state:!0},_editingIndex:{state:!0},_tempQuestionText:{state:!0},_tempChoice0:{state:!0},_tempChoice1:{state:!0},_tempChoice2:{state:!0},_tempChoice3:{state:!0},_tempCorrectIndex:{state:!0},_editorOrigin:{state:!0},_tempQuestionImage:{state:!0},_tempQuestionType:{state:!0},_tempCorrectAnswers:{state:!0},_tempLeftItems:{state:!0},_tempRightItems:{state:!0},_tempCorrectPairs:{state:!0},_tempAcceptedAnswers:{state:!0},_tempAcceptedStatements:{state:!0},_shuffledQuestions:{state:!0},_selectedAnswers:{state:!0},_matchAnswers:{state:!0},_shortAnswerText:{state:!0},_tempQuestionPoints:{state:!0},_tempChoiceImage0:{state:!0},_tempChoiceImage1:{state:!0},_tempChoiceImage2:{state:!0},_tempChoiceImage3:{state:!0},_maxPoints:{state:!0},_advanceTimer:{state:!0},_megaConfettiFrameId:{state:!0}}}constructor(){super();let t=Zt;t&&typeof t!="function"&&typeof t.default=="function"&&(t=t.default),this._confettiFn=t,this.questions=X,this.scriptFunctionName="submitQuizResult",this.spreadsheetId="",this.accessToken="",this.appsScriptUrl="",this.sheetName="Pertemuan",this.tag="",this.quizCategory="formatif",this.shuffleChoices=!1,this.hideAnswers=!1,this.hideConfetti=!1,this.studentName="",this.studentId="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.editable=!1,this._screen="name",this._studentName="",this._currentIndex=0,this._score=0,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._validationError="",this._nameInputValue="",this._editing=!1,this._tempQuestions=[],this._editingIndex=-1,this._tempQuestionText="",this._tempChoice0="",this._tempChoice1="",this._tempChoice2="",this._tempChoice3="",this._tempCorrectIndex="0",this._editorOrigin="result",this._shuffledQuestions=[],this._kdMateri="",this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._tempQuestionImage="",this._tempQuestionType="mc",this._tempCorrectAnswers=[],this._tempLeftItems=["",""],this._tempRightItems=["",""],this._tempCorrectPairs={},this._tempAcceptedAnswers="",this._tempAcceptedStatements="[]",this._maxPoints=0,this._tempQuestionPoints=1,this._tempChoiceImage0="",this._tempChoiceImage1="",this._tempChoiceImage2="",this._tempChoiceImage3="",this._advanceTimer=null,this._megaConfettiFrameId=null,this.t={quizTitle:"Kuis Interaktif",quizInstruction:"Masukkan nama Anda untuk memulai kuis.",namePlaceholder:"Nama Anda...",startButton:"Mulai Kuis",validationNameEmpty:"Nama tidak boleh kosong.",validationNameShort:"Nama harus lebih dari 2 karakter.",questionOf:"Soal",of:"dari",scoreLabel:"Skor",feedbackCorrect:"Mantap, Benar!",feedbackWrongPrefix:"Yah, Salah. Jawaban benar: ",resultHeading:"Hasil Kuis",resultName:"Nama",resultScore:"Skor",resultTotal:"Total Soal",resultPercentage:"Persentase",messageHigh:"Luar Biasa! Kamu Hebat!",messageMedium:"Bagus! Terus Berlatih!",messageLow:"Jangan Menyerah! Coba Lagi!",restartButton:"Mulai Ulang",editTitle:"Edit Soal Kuis",closeEditor:"Tutup Editor",questionPlaceholder:"Tulis pertanyaan...",choicePlaceholder:"Pilihan {N}",choiceCorrectLabel:"Benar",addQuestionBtn:"Tambah Soal",editQuestionBtn:"Edit",deleteQuestionBtn:"Hapus",saveEditBtn:"Simpan Perubahan",cancelEditBtn:"Batal",saveAllBtn:"Simpan & Keluar",cancelAllBtn:"Batal",minQuestionsError:"Minimal 3 soal harus tersedia",emptyQuestionError:"Pertanyaan tidak boleh kosong",emptyChoiceError:"Semua pilihan jawaban harus diisi",ariaNameInput:"Kolom nama siswa",ariaStartButton:"Tombol mulai kuis",ariaAnswerButton:"Pilihan jawaban",ariaRestartButton:"Mulai ulang kuis",ariaScoreDisplay:"Skor saat ini",ariaProgressLabel:"Kemajuan kuis",ariaFeedback:"Umpan balik jawaban",ariaEditTitle:"Panel editor soal kuis",ariaCloseEditor:"Tutup panel editor",ariaAddForm:"Formulir tambah soal baru",ariaQuestionInput:"Teks pertanyaan",ariaChoiceInput:"Pilihan jawaban {N}",ariaCorrectChoice:"Pilihan jawaban benar",ariaQuestionsList:"Daftar soal yang tersedia",ariaQuestionCard:"Kartu soal",ariaEditQuestion:"Edit soal ini",ariaDeleteQuestion:"Hapus soal ini",ariaSaveEdit:"Simpan perubahan soal",ariaCancelEdit:"Batal mengedit soal",ariaSaveAll:"Simpan semua perubahan dan keluar",ariaCancelAll:"Batal semua perubahan dan keluar"}}get kdMateri(){return this._kdMateri||this.tag||this.sheetName||"Pertemuan"}set kdMateri(t){this._kdMateri=t}updated(t){super.updated(t),(!Array.isArray(this.questions)||this.questions.length===0)&&(this.questions=X),t.has("studentName")&&this.studentName&&(this._studentName=this.studentName,this._screen==="name"&&(this._screen="quiz"))}connectedCallback(){if(super.connectedCallback(),this._authHandler=t=>{t.detail.studentId&&(this.studentId=t.detail.studentId),t.detail.nama&&(this.studentName=t.detail.nama),t.detail.nis&&(this.studentNis=t.detail.nis),t.detail.absen&&(this.studentAbsen=t.detail.absen),t.detail.kelas&&(this.studentKelas=t.detail.kelas),this._flushPendingSubmissions()},this._sessionHandler=t=>{const e=t?.detail;e?.studentId?(this.studentId=e.studentId,this.studentName=e.nama,this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||"",this._flushPendingSubmissions()):(this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="")},globalThis.addEventListener("quiz-user-login",this._authHandler),globalThis.addEventListener("quiz-user-session-changed",this._sessionHandler),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[B.tag]&&(t.elementList[B.tag]=B.haxProperties)}}disconnectedCallback(){this._clearAdvanceTimer(),this._cancelMegaConfetti(),this._authHandler&&globalThis.removeEventListener("quiz-user-login",this._authHandler),this._sessionHandler&&globalThis.removeEventListener("quiz-user-session-changed",this._sessionHandler),super.disconnectedCallback()}_clearAdvanceTimer(){this._advanceTimer&&(clearTimeout(this._advanceTimer),this._advanceTimer=null)}_cancelMegaConfetti(){this._megaConfettiFrameId&&(globalThis.cancelAnimationFrame(this._megaConfettiFrameId),this._megaConfettiFrameId=null)}get _inHaxEditor(){return!!(globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"&&globalThis.HaxStore.requestAvailability().editMode)}_fireConfetti(){if(typeof this._confettiFn=="function")try{const t={ticks:220,gravity:.85,decay:.92,startVelocity:42,zIndex:9999};this._confettiFn({...t,particleCount:70,spread:85,scalar:1.05,origin:{x:.5,y:.62}}),this._confettiFn({...t,particleCount:45,angle:58,spread:65,scalar:1.1,origin:{x:.1,y:.7}}),this._confettiFn({...t,particleCount:45,angle:122,spread:65,scalar:1.1,origin:{x:.9,y:.7}})}catch(t){console.error("[explode-quiz] Konfeti gagal dieksekusi:",t)}}_fireMegaConfetti(){if(typeof this._confettiFn=="function")try{this._cancelMegaConfetti();const t=Date.now()+900,e=()=>{this._confettiFn({particleCount:3,angle:60,spread:55,origin:{x:0,y:.7},colors:["#ff0000","#00ff00","#0000ff","#ffff00"]}),this._confettiFn({particleCount:3,angle:120,spread:55,origin:{x:1,y:.7},colors:["#ff0000","#00ff00","#0000ff","#ffff00"]}),Date.now()<t?this._megaConfettiFrameId=globalThis.requestAnimationFrame(e):this._megaConfettiFrameId=null};this._megaConfettiFrameId=globalThis.requestAnimationFrame(e)}catch(t){console.error("[explode-quiz] Mega konfeti gagal dieksekusi:",t)}}_getMaxPoints(){return(this.questions||[]).reduce((t,e)=>t+(e.points||1),0)}_shuffleArray(t){const e=[...t];for(let i=e.length-1;i>0;i--){const a=Math.floor(Math.random()*(i+1));[e[i],e[a]]=[e[a],e[i]]}return e}_startQuiz(){const t=this._nameInputValue.trim();if(t.length<=2){this._validationError=t.length===0?this.t.validationNameEmpty:this.t.validationNameShort;return}this._studentName=t,this._validationError="",this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._maxPoints=this._getMaxPoints();const e=Array.isArray(this.questions)?this.questions:X;this.shuffleChoices?this._shuffledQuestions=e.map(i=>{if(!i.choices)return{...i};const a=i.choices.map((o,l)=>({text:o,origIndex:l})),s=this._shuffleArray(a);return{...i,choices:s.map(o=>o.text),_correctMap:s.map(o=>o.origIndex)}}):this._shuffledQuestions=[],this._screen="question"}_renderNameScreen(){return d`<h1 class="quiz-title">${this.t.quizTitle}</h1> <p class="quiz-instruction">${this.t.quizInstruction}</p> <div class="input-group"> <input id="name-input" name="student-name" .value="${this._nameInputValue}" @input="${t=>this._nameInputValue=t.target.value}" @keydown="${t=>{t.key==="Enter"&&this._startQuiz()}}" .placeholder="${this.t.namePlaceholder}" aria-label="${this.t.ariaNameInput}" type="text" /> </div> <button class="start-btn" @click="${this._startQuiz}" aria-label="${this.t.ariaStartButton}" > ${this.t.startButton} </button> ${this._validationError?d`<p class="validation-error">${this._validationError}</p>`:""} <button class="edit-questions-btn" @click="${this._openEditorFromName}" aria-label="${this.t.ariaCloseEditor}" ?hidden="${!this._inHaxEditor&&!this.editable}" > ${this.t.editTitle} </button>`}_getActiveQuestions(){const t=Array.isArray(this.questions)?this.questions:X;return this._shuffledQuestions.length>0?this._shuffledQuestions:t}_renderQuestionScreen(){const t=this._getActiveQuestions(),e=t[this._currentIndex],i=`${this.t.questionOf} ${this._currentIndex+1} ${this.t.of} ${t.length}`,a=e.type||"mc",s=Array.isArray(e.correctAnswers);return d`<header class="quiz-header"> <span class="progress-label">${i}</span> <span class="score-display">${this.t.scoreLabel}: ${this._score}</span> </header> <div class="question-text">${e.question}</div> ${e.image?d` <div class="question-image"> <img src="${e.image}" alt="Gambar soal" /> </div>`:""} ${a==="matching"?this._renderMatching(e):""} ${a==="shortAnswer"?this._renderShortAnswer(e):""} ${a==="pgk"?this._renderPGK(e):""} ${a==="mc"?this._renderMC(e,s):""} ${this._feedbackText?d` <div class="feedback-area ${this._feedbackPositive?"positive":"negative"}" aria-live="polite" > ${this._feedbackText} </div>`:""} ${this.editable?d` <button class="edit-questions-btn" @click="${this._openEditor}" > ✏️ Edit Soal </button>`:""}`}_getChoiceText(t){return typeof t=="string"?t:t?.text||""}_getChoiceImage(t){return typeof t=="string"?null:t?.image||null}_renderMC(t,e){return d`<div class="answer-grid"> ${t.choices.map((i,a)=>{let s="answer-btn";const o=e?this._selectedAnswers.has(a):a===this._selectedIndex;if(this._answered&&!this.hideAnswers){const l=t.correctAnswers||(t.correctIndex!=null?[t.correctIndex]:[]);(t._correctMap?l.map(y=>t._correctMap.indexOf(y)):l).includes(a)?s+=" answer-btn--correct":o&&(s+=" answer-btn--wrong")}else o&&(s+=" answer-btn--selected");return d` <button class="${s}" ?disabled="${this._answered}" @click="${()=>e?this._toggleMultiAnswer(a):this._selectAnswer(a)}" aria-label="${this.t.ariaAnswerButton}: ${this._getChoiceText(i)}" > ${this._getChoiceImage(i)?d`<img src="${this._getChoiceImage(i)}" alt="" class="choice-image" />`:""} ${e&&o?"\u2713 ":""}${this._getChoiceText(i)} </button>`})} ${e&&!this._answered?d` <button class="start-btn multi-submit" @click="${()=>this._submitMultiAnswers()}" > Kirim Jawaban (${this._selectedAnswers.size} dipilih) </button>`:""} </div>`}_renderPGK(t){const e=t.statements||[];return d`<table class="pgk-table"> <thead> <tr> <th>Pernyataan</th> <th>Benar</th> <th>Salah</th> </tr> </thead> <tbody> ${e.map((i,a)=>d` <tr> <td>${i.text}</td> <td class="pgk-cell"> <input type="radio" name="pgk-${this._currentIndex}-${a}" value="true" ?disabled="${this._answered}" @change="${()=>this._setPGK(a,!0)}" ?checked="${this._matchAnswers[a]===!0}" /> </td> <td class="pgk-cell"> <input type="radio" name="pgk-${this._currentIndex}-${a}" value="false" ?disabled="${this._answered}" @change="${()=>this._setPGK(a,!1)}" ?checked="${this._matchAnswers[a]===!1}" /> </td> </tr> `)} </tbody> </table> ${this._answered?"":d` <button class="start-btn multi-submit" @click="${()=>this._submitPGK()}" > Kirim Jawaban </button>`}`}_renderMatching(t){const e=t.leftItems||[],i=t.rightItems||[];return d`<div class="matching-container"> ${e.map((a,s)=>d` <div class="matching-row"> <span class="matching-item">${s+1}. ${a}</span> <span class="matching-arrow">→</span> <select name="matching-${s}" class="matching-select" ?disabled="${this._answered}" @change="${o=>{this._matchAnswers={...this._matchAnswers,[s]:parseInt(o.target.value)},this.requestUpdate()}}" > <option value="-1">-- Pilih --</option> ${i.map((o,l)=>d`<option value="${l}" ?selected="${this._matchAnswers[s]===l}" > ${String.fromCharCode(65+l)}. ${o} </option>`)} </select> </div> `)} ${this._answered?"":d` <button class="start-btn multi-submit" @click="${()=>this._submitMatching()}" > Kirim Jawaban </button>`} </div>`}_renderShortAnswer(t){return d`<div class="short-answer-container"> <input type="text" name="short-answer" class="short-answer-input" ?disabled="${this._answered}" placeholder="Ketik jawaban..." .value="${this._shortAnswerText}" @input="${e=>{this._shortAnswerText=e.target.value}}" /> ${this._answered?"":d`<button class="start-btn multi-submit" @click="${()=>this._submitShortAnswer()}" > Kirim Jawaban </button>`} </div>`}_selectAnswer(t){if(this._answered)return;this._answered=!0,this._selectedIndex=t;const e=this._getActiveQuestions()[this._currentIndex],i=e.correctAnswers||(e.correctIndex!=null?[e.correctIndex]:[]),a=e._correctMap?i.map(s=>e._correctMap.indexOf(s)):i;if(a.includes(t))this._score+=e.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti();else if(!this.hideAnswers){const s=a.map(o=>e.choices[o]).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${s}`,this._feedbackPositive=!1}this._clearAdvanceTimer(),this._advanceTimer=setTimeout(()=>{this._advanceQuiz()},1200)}_toggleMultiAnswer(t){if(this._answered)return;const e=new Set(this._selectedAnswers);e.has(t)?e.delete(t):e.add(t),this._selectedAnswers=e}_submitMultiAnswers(){if(this._answered||this._selectedAnswers.size===0)return;this._answered=!0;const t=this._getActiveQuestions()[this._currentIndex],e=new Set(t.correctAnswers||[]),i=this._selectedAnswers,a=t._correctMap?new Set([...i].map(s=>t._correctMap[s])):i;if(e.size===a.size&&[...e].every(s=>a.has(s)))this._score+=t.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti();else if(!this.hideAnswers){const s=(t._correctMap?[...e].map(o=>t._correctMap.indexOf(o)):[...e]).map(o=>t.choices[o]).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${s}`,this._feedbackPositive=!1}this._clearAdvanceTimer(),this._advanceTimer=setTimeout(()=>this._advanceQuiz(),1200)}_setPGK(t,e){this._answered||(this._matchAnswers={...this._matchAnswers,[t]:e})}_submitPGK(){if(this._answered)return;const t=this._getActiveQuestions()[this._currentIndex],e=t.statements||[];if(Object.keys(this._matchAnswers).length<e.length)return;this._answered=!0;const i=e.map(s=>s.answer);let a=!0;for(let s=0;s<e.length;s++)if(this._matchAnswers[s]!==i[s]){a=!1;break}if(a)this._score+=t.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti();else if(!this.hideAnswers){const s=e.map((o,l)=>`${l+1}: ${o.answer?"Benar":"Salah"}`).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${s}`,this._feedbackPositive=!1}this._clearAdvanceTimer(),this._advanceTimer=setTimeout(()=>this._advanceQuiz(),1200)}_submitMatching(){if(this._answered)return;const t=this._getActiveQuestions()[this._currentIndex],e=t.leftItems||[],i=t.correctPairs||{};if(Object.keys(this._matchAnswers).length<e.length)return;this._answered=!0;let a=0;for(let l=0;l<e.length;l++)this._matchAnswers[l]===i[l]&&a++;const s=t.points||1,o=Math.round(a/e.length*s);if(this._score+=o,!this.hideAnswers)if(a===e.length)this._feedbackText=`${this.t.feedbackCorrect} (${a}/${e.length} pasangan benar, +${o} poin)`,this._feedbackPositive=!0;else if(a>0)this._feedbackText=`${a}/${e.length} pasangan benar (+${o} poin). Lanjutkan!`,this._feedbackPositive=!0;else{const l=Object.entries(i).map(([y,h])=>`${parseInt(y)+1}\u2192${String.fromCharCode(65+h)}`).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${l}`,this._feedbackPositive=!1}!this.hideConfetti&&a===e.length&&this._fireConfetti(),this._clearAdvanceTimer(),this._advanceTimer=setTimeout(()=>this._advanceQuiz(),1200)}_submitShortAnswer(){if(this._answered)return;const t=this._shortAnswerText.trim().toLowerCase();if(!t)return;this._answered=!0;const e=this._getActiveQuestions()[this._currentIndex];(e.acceptedAnswers||[]).map(i=>i.toLowerCase()).some(i=>t.includes(i))?(this._score+=e.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti()):this.hideAnswers||(this._feedbackText=`${this.t.feedbackWrongPrefix}${(e.acceptedAnswers||[]).join(" / ")}`,this._feedbackPositive=!1),this._clearAdvanceTimer(),this._advanceTimer=setTimeout(()=>this._advanceQuiz(),1200)}_advanceQuiz(){const t=this._getActiveQuestions();if(this._currentIndex<t.length-1)this._currentIndex+=1,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._maxPoints=this._getMaxPoints();else{this._submitToSheets(this._studentName,this._score);const e=Math.round(this._score/this._maxPoints*100);try{wt("quiz",`Kuis selesai (Skor: ${e}%)`)}catch(a){console.warn("[explode-quiz] Gagal menulis log lokal:",a)}const i={name:this._studentName,score:e,sheet:this.sheetName||"Pertemuan",tag:this.kdMateri||this.tag||"",studentId:this.studentId||"",nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",activityType:"quiz",description:`Quiz ${this.quizCategory||"formatif"}${this.kdMateri?" ("+this.kdMateri+")":""} selesai`};this.dispatchEvent(new CustomEvent("quiz-saved",{detail:i,bubbles:!0,composed:!0})),globalThis.dispatchEvent(new CustomEvent("quiz-completed",{detail:i,bubbles:!0,composed:!0})),this._screen="result",this._score/this._maxPoints>=.8&&this._fireMegaConfetti()}}_renderResultScreen(){const t=Math.round(this._score/this._maxPoints*100);let e=this.t.messageLow;t>=80?e=this.t.messageHigh:t>=50&&(e=this.t.messageMedium);const i=this.studentId?"":d`<p class="pending-submit-msg" style="color:#f59e0b;margin-top:8px;">Data tersimpan lokal. Login untuk mengirim jawaban ke sheet.</p>`;return d`<h2 class="result-heading">${this.t.resultHeading}</h2> <div class="result-name">${this.t.resultName}: ${this._studentName}</div> <div class="result-score"> ${this.t.resultScore}: ${this._score} / ${this._maxPoints} poin </div> <div class="result-percentage"> ${this.t.resultPercentage}: ${t}% </div> <p class="result-message">${e}</p> ${i} <button class="restart-btn" @click="${this._restartQuiz}" aria-label="${this.t.ariaRestartButton}" > ${this.t.restartButton} </button> <button class="edit-questions-btn" @click="${this._openEditor}" aria-label="${this.t.ariaCloseEditor}" ?hidden="${!this._inHaxEditor&&!this.editable}" > ${this.t.editTitle} </button>`}_restartQuiz(){this._clearAdvanceTimer(),this._screen=this.studentName?"quiz":"name",this._studentName=this.studentName||"",this._currentIndex=0,this._score=0,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._validationError="",this._nameInputValue="",this._editing=!1,this._tempQuestions=[],this._editingIndex=-1,this._tempQuestionText="",this._tempChoice0="",this._tempChoice1="",this._tempChoice2="",this._tempChoice3="",this._tempCorrectIndex="0",this._editorOrigin="result",this._maxPoints=this._getMaxPoints()}static get PENDING_KEY(){return"quiz_pending_submissions"}static get PENDING_TTL_MS(){return 1440*60*1e3}_getPendingSubmissions(){try{const t=localStorage.getItem(B.PENDING_KEY);return t?JSON.parse(t):[]}catch{return[]}}_savePendingSubmissions(t){try{localStorage.setItem(B.PENDING_KEY,JSON.stringify(t))}catch{}}_saveDraft(t){const e=this._getPendingSubmissions();e.push({id:`draft-${Date.now()}`,timestamp:new Date().toISOString(),synced:!1,data:t}),this._savePendingSubmissions(e)}_flushPendingSubmissions(){if(!this.studentId||!this.appsScriptUrl)return;const t=this._getPendingSubmissions(),e=t.filter(l=>!l.synced);if(e.length===0)return;const i=Date.now(),a=[];for(const l of t){if(l.synced||i-new Date(l.timestamp).getTime()>B.PENDING_TTL_MS)continue;const y=new URLSearchParams({...l.data,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||""}),h=`${this.appsScriptUrl}?${y.toString()}`;fetch(h,{redirect:"follow"}).then(g=>g.json()).then(g=>{console.log("[explode-quiz] Pending flushed:",g)}).catch(g=>{console.error("[explode-quiz] Flush gagal:",g),a.push(l)})}const s=t.filter(l=>l.synced||!l.synced&&i-new Date(l.timestamp).getTime()<=B.PENDING_TTL_MS&&!e.includes(l)),o=[...a,...s.filter(l=>!e.includes(l))];this._savePendingSubmissions(o)}_submitToSheets(t,e){const i=Math.round(e/this._maxPoints*100);if(this.appsScriptUrl){const a={action:"submit",name:t,score:i,totalQuestions:(this.questions||[]).length,totalPoints:this._maxPoints,timestamp:new Date().toISOString(),sheet:this.sheetName||"Pertemuan",tag:this.kdMateri||this.tag||"",studentId:this.studentId||"",nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",quizCategory:this.quizCategory||"formatif",type:"quiz"};if(!this.studentId){this._saveDraft(a),console.log("[explode-quiz] Belum login, tersimpan ke localStorage");return}const s=new URLSearchParams(a),o=`${this.appsScriptUrl}?${s.toString()}`;fetch(o,{redirect:"follow"}).then(l=>l.json()).then(l=>{console.log("[explode-quiz] Tersimpan:",l)}).catch(l=>{console.error("[explode-quiz] Error menyimpan ke Google Sheets:",l)});return}if(this.spreadsheetId){fetch("/api/save-quiz-result",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({spreadsheetId:this.spreadsheetId,name:t,score:e,accessToken:this.accessToken||""})}).then(a=>{if(!a.ok)throw new Error("Gagal menyimpan hasil kuis");return a.json()}).then(a=>{console.log("[explode-quiz] Data berhasil disimpan:",a)}).catch(a=>{console.error("[explode-quiz] Error:",a)});return}if(typeof globalThis.google<"u"&&globalThis.google?.script?.run){const a={timestamp:new Date().toISOString(),name:t,score:e};globalThis.google.script.run.withSuccessHandler(()=>console.log("[explode-quiz] Data berhasil dikirim ke Sheets")).withFailureHandler(s=>console.error("[explode-quiz] Gagal mengirim ke Sheets:",s))[this.scriptFunctionName](a);return}console.warn("[explode-quiz] Google Sheets belum dikonfigurasi (spreadsheet-id / access-token kosong)")}_openEditor(){this._editing||this._screen!=="result"&&this._screen!=="question"||(this._editing=!0,this._editingIndex=-1,this._tempQuestions=JSON.parse(JSON.stringify(this.questions||X)),this._screen="editor")}_openEditorFromName(){this._screen==="name"&&(this._editing||(this._editing=!0,this._editingIndex=-1,this._tempQuestions=JSON.parse(JSON.stringify(this.questions||X)),this._editorOrigin="name",this._screen="editor"))}_renderEditorScreen(){const t=this._tempQuestionType||"mc";return d`<header class="edit-header"> <h2 class="edit-title">${this.t.editTitle}</h2> <button class="close-editor-btn" @click="${this._saveAll}"> ${this.t.closeEditor} </button> </header> <div class="editor-content"> <form class="add-question-form"> <div class="editor-toolbar"> <select name="question-type" class="editor-select" .value="${t}" @change="${e=>{this._tempQuestionType=e.target.value}}" > <option value="mc">Pilihan Ganda</option> <option value="pgk">PG Kompleks (Benar/Salah)</option> <option value="matching">Menjodohkan</option> <option value="shortAnswer">Isian Singkat</option> </select> <input type="text" name="question-image" class="editor-input" placeholder="URL gambar (opsional)" .value="${this._tempQuestionImage}" @input="${e=>{this._tempQuestionImage=e.target.value}}" /> <label class="editor-label">Poin:</label> <input type="number" name="question-points" min="1" class="editor-input-small" .value="${String(this._tempQuestionPoints)}" @input="${e=>{this._tempQuestionPoints=parseInt(e.target.value)||1}}" /> </div> ${this._tempQuestionImage?d` <div class="editor-image-preview"> <img src="${this._tempQuestionImage}" /> </div>`:""} <textarea name="question-text" class="question-text-input" .value="${this._tempQuestionText}" @input="${e=>this._tempQuestionText=e.target.value}" placeholder="${this.t.questionPlaceholder}" ></textarea> ${t==="mc"?this._renderEditorMC():""} ${t==="pgk"?this._renderEditorPGK():""} ${t==="matching"?this._renderEditorMatching():""} ${t==="shortAnswer"?this._renderEditorShortAnswer():""} <button type="button" class="add-question-btn" @click="${this._addQuestion}" > ${this.t.addQuestionBtn} </button> </form> <div class="questions-list"> ${this._tempQuestions.map((e,i)=>d` <div class="question-card"> ${this._editingIndex===i?d`<div class="edit-form"> <div class="editor-toolbar"> <select name="question-type" class="editor-select" .value="${this._tempQuestionType}" @change="${a=>{this._tempQuestionType=a.target.value}}" > <option value="mc">Pilihan Ganda</option> <option value="pgk">PG Kompleks</option> <option value="matching">Menjodohkan</option> <option value="shortAnswer">Isian Singkat</option> </select> <input type="text" name="question-image" class="editor-input" placeholder="URL gambar" .value="${this._tempQuestionImage}" @input="${a=>{this._tempQuestionImage=a.target.value}}" /> <label class="editor-label">Poin:</label> <input type="number" name="question-points" min="1" class="editor-input-small" .value="${String(this._tempQuestionPoints)}" @input="${a=>{this._tempQuestionPoints=parseInt(a.target.value)||1}}" /> </div> <textarea name="question-text" class="edit-question-text-input" .value="${this._tempQuestionText}" @input="${a=>this._tempQuestionText=a.target.value}" placeholder="${this.t.questionPlaceholder}" ></textarea> ${this._tempQuestionType==="mc"?this._renderEditorMC():""} ${this._tempQuestionType==="pgk"?this._renderEditorPGK():""} ${this._tempQuestionType==="matching"?this._renderEditorMatching():""} ${this._tempQuestionType==="shortAnswer"?this._renderEditorShortAnswer():""} <div class="edit-form-actions"> <button type="button" class="save-edit-btn" @click="${this._saveEditQuestion}" > ${this.t.saveEditBtn} </button> <button type="button" class="cancel-edit-btn" @click="${this._cancelEditQuestion}" > ${this.t.cancelEditBtn} </button> </div> </div>`:d`<div class="question-card-header"> <div> <strong class="question-type-badge" >[${(e.type||"mc").toUpperCase()}]</strong> ${e.question} ${e.image?d` <span class="question-image-indicator" >[gambar]</span>`:""} <span class="question-points-indicator" >[${e.points||1} poin]</span> </div> <div class="question-card-actions"> <button class="edit-btn" @click="${()=>this._startEditQuestion(i)}" > ${this.t.editQuestionBtn} </button> <button class="delete-btn" @click="${()=>this._deleteQuestion(i)}" > ${this.t.deleteQuestionBtn} </button> </div> </div>`} </div> `)} </div> </div>`}_renderEditorMC(){return d`<div class="choices-container"> ${[0,1,2,3].map(t=>d` <div class="choice-input-wrapper"> <input name="choice-${t}" class="choice-input" .value="${this[`_tempChoice${t}`]}" @input="${e=>this[`_tempChoice${t}`]=e.target.value}" placeholder="${this.t.choicePlaceholder.replace("{N}",t+1)}" /> <input type="url" name="choice-image-${t}" class="choice-image-input" placeholder="🖼️ URL gambar" .value="${this[`_tempChoiceImage${t}`]||""}" @input="${e=>this[`_tempChoiceImage${t}`]=e.target.value}" /> <label class="choice-label"> <input type="checkbox" ?checked="${this._tempCorrectAnswers.includes(t)}" @change="${e=>{e.target.checked?this._tempCorrectAnswers=[...this._tempCorrectAnswers,t]:this._tempCorrectAnswers=this._tempCorrectAnswers.filter(i=>i!==t),this._tempCorrectAnswers.length===1?this._tempCorrectIndex=String(this._tempCorrectAnswers[0]):this._tempCorrectAnswers.length===0&&(this._tempCorrectIndex=t.toString())}}" /> ${this.t.choiceCorrectLabel} </label> ${this[`_tempChoiceImage${t}`]?d`<img src="${this[`_tempChoiceImage${t}`]}" class="choice-image-preview" />`:""} </div> `)} ${this._tempCorrectAnswers.length<=1?d` <div class="editor-hint"> Pilih 1 jawaban benar. Centang lebih dari 1 untuk mode PG Kompleks. </div>`:d` <div class="editor-hint editor-hint--accent"> Mode PG Kompleks: ${this._tempCorrectAnswers.length} jawaban benar dipilih </div>`} </div>`}_renderEditorPGK(){return d`<div class="editor-pgk-container"> <div class="editor-hint"> Pernyataan (JSON array, format: [{"text":"...","answer":true}]): </div> <textarea name="pgk-statements" class="editor-json-textarea" .value="${this._tempAcceptedStatements}" @input="${t=>{this._tempAcceptedStatements=t.target.value}}" ></textarea> </div>`}_renderEditorMatching(){return d`<div class="editor-matching-container"> <div class="editor-matching-columns"> <div class="editor-matching-column"> <div class="editor-hint">Item Kiri:</div> ${this._tempLeftItems.map((t,e)=>d` <input name="left-${e}" class="editor-input" .value="${t}" @input="${i=>{const a=[...this._tempLeftItems];a[e]=i.target.value,this._tempLeftItems=a}}" placeholder="Item ${e+1}" /> `)} <button type="button" class="editor-add-btn" @click="${()=>{this._tempLeftItems=[...this._tempLeftItems,""]}}" > + Tambah </button> </div> <div class="editor-matching-column"> <div class="editor-hint">Item Kanan:</div> ${this._tempRightItems.map((t,e)=>d` <input name="right-${e}" class="editor-input" .value="${t}" @input="${i=>{const a=[...this._tempRightItems];a[e]=i.target.value,this._tempRightItems=a}}" placeholder="Item ${String.fromCharCode(65+e)}" /> `)} <button type="button" class="editor-add-btn" @click="${()=>{this._tempRightItems=[...this._tempRightItems,""]}}" > + Tambah </button> </div> </div> <div class="editor-hint"> Kunci Jawaban (JSON: {"0":1,"1":0} artinya Item Kiri 0→Item Kanan B): </div> <input name="matching-keys" class="editor-json-input" .value="${JSON.stringify(this._tempCorrectPairs)}" @input="${t=>{try{this._tempCorrectPairs=JSON.parse(t.target.value)}catch{}}}" /> </div>`}_renderEditorShortAnswer(){return d`<div class="editor-short-answer-container"> <div class="editor-hint">Jawaban yang diterima (pisahkan koma):</div> <input name="short-answer-accepted" class="editor-input" placeholder="contoh: biomassa, sekam padi, limbah pertanian" .value="${this._tempAcceptedAnswers}" @input="${t=>{this._tempAcceptedAnswers=t.target.value}}" /> </div>`}_addQuestion(){if(!this._tempQuestionText.trim()){console.warn(this.t.emptyQuestionError);return}const t=this._tempQuestionType||"mc",e={type:t,question:this._tempQuestionText.trim()};if(this._tempQuestionImage.trim()&&(e.image=this._tempQuestionImage.trim()),this._tempQuestionPoints>1&&(e.points=this._tempQuestionPoints),t==="mc"){if(!this._tempChoice0.trim()||!this._tempChoice1.trim()){console.warn(this.t.emptyChoiceError);return}e.choices=[0,1,2,3].map(i=>{const a=this[`_tempChoice${i}`]?.trim();if(!a)return null;const s=this[`_tempChoiceImage${i}`]?.trim();return s?{text:a,image:s}:a}).filter(Boolean),this._tempCorrectAnswers.length>1?e.correctAnswers=[...this._tempCorrectAnswers]:e.correctIndex=parseInt(this._tempCorrectIndex,10)}else if(t==="pgk")try{e.statements=JSON.parse(this._tempAcceptedStatements||"[]")}catch{e.statements=[]}else t==="matching"?(e.leftItems=[...this._tempLeftItems],e.rightItems=[...this._tempRightItems],e.correctPairs={...this._tempCorrectPairs}):t==="shortAnswer"&&(e.acceptedAnswers=this._tempAcceptedAnswers.split(",").map(i=>i.trim()).filter(Boolean));this._tempQuestions=[...this._tempQuestions,e],this._resetEditorForm()}_deleteQuestion(t){if(this._tempQuestions.length<=3){console.warn(this.t.minQuestionsError);return}this._tempQuestions=this._tempQuestions.filter((e,i)=>i!==t),this._editingIndex===t?(this._editingIndex=-1,this._resetEditorForm()):this._editingIndex>t&&this._editingIndex--}_resetEditorForm(){this._tempQuestionText="",this._tempChoice0="",this._tempChoice1="",this._tempChoice2="",this._tempChoice3="",this._tempChoiceImage0="",this._tempChoiceImage1="",this._tempChoiceImage2="",this._tempChoiceImage3="",this._tempCorrectIndex="0",this._tempCorrectAnswers=[],this._tempQuestionImage="",this._tempQuestionType="mc",this._tempQuestionPoints=1,this._tempLeftItems=["",""],this._tempRightItems=["",""],this._tempCorrectPairs={},this._tempAcceptedAnswers="",this._tempAcceptedStatements="[]"}_startEditQuestion(t){if(t<0||t>=this._tempQuestions.length)return;this._editingIndex=t;const e=this._tempQuestions[t];this._tempQuestionText=e.question,this._tempQuestionImage=e.image||"",this._tempQuestionType=e.type||"mc",this._tempQuestionPoints=e.points||1;const i=e.choices||[];this._tempChoice0=this._getChoiceText(i[0])||"",this._tempChoice1=this._getChoiceText(i[1])||"",this._tempChoice2=this._getChoiceText(i[2])||"",this._tempChoice3=this._getChoiceText(i[3])||"",this._tempChoiceImage0=this._getChoiceImage(i[0])||"",this._tempChoiceImage1=this._getChoiceImage(i[1])||"",this._tempChoiceImage2=this._getChoiceImage(i[2])||"",this._tempChoiceImage3=this._getChoiceImage(i[3])||"",this._tempCorrectIndex=e.correctIndex!=null?e.correctIndex.toString():"0",this._tempCorrectAnswers=e.correctAnswers||[],this._tempLeftItems=e.leftItems||["",""],this._tempRightItems=e.rightItems||["",""],this._tempCorrectPairs=e.correctPairs||{},this._tempAcceptedAnswers=(e.acceptedAnswers||[]).join(", "),this._tempAcceptedStatements=JSON.stringify(e.statements||[])}_saveEditQuestion(){if(!this._tempQuestionText.trim()){console.warn(this.t.emptyQuestionError);return}if(this._editingIndex<0||this._editingIndex>=this._tempQuestions.length)return;const t=this._tempQuestionType||"mc",e={type:t,question:this._tempQuestionText.trim()};if(this._tempQuestionImage.trim()&&(e.image=this._tempQuestionImage.trim()),this._tempQuestionPoints>1&&(e.points=this._tempQuestionPoints),t==="mc")e.choices=[0,1,2,3].map(i=>{const a=this[`_tempChoice${i}`]?.trim();if(!a)return null;const s=this[`_tempChoiceImage${i}`]?.trim();return s?{text:a,image:s}:a}).filter(Boolean),this._tempCorrectAnswers.length>1?e.correctAnswers=[...this._tempCorrectAnswers]:e.correctIndex=parseInt(this._tempCorrectIndex,10);else if(t==="pgk")try{e.statements=JSON.parse(this._tempAcceptedStatements||"[]")}catch{e.statements=[]}else t==="matching"?(e.leftItems=[...this._tempLeftItems],e.rightItems=[...this._tempRightItems],e.correctPairs={...this._tempCorrectPairs}):t==="shortAnswer"&&(e.acceptedAnswers=this._tempAcceptedAnswers.split(",").map(i=>i.trim()).filter(Boolean));this._tempQuestions=this._tempQuestions.map((i,a)=>a===this._editingIndex?e:i),this._editingIndex=-1,this._resetEditorForm()}_cancelEditQuestion(){this._editingIndex<0||(this._editingIndex=-1,this._resetEditorForm())}loadQuestions(t){Array.isArray(t)||(t=Array.isArray(this.questions)?this.questions:X),this.questions=t,this._currentIndex=0,this._score=0,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._shuffledQuestions=[],this._screen="name",this.dispatchEvent(new CustomEvent("questions-changed",{bubbles:!0,composed:!0,detail:{questions:this.questions}}))}_saveAll(){if(this._screen==="editor"){this.questions=JSON.parse(JSON.stringify(this._tempQuestions));try{this.setAttribute("questions",JSON.stringify(this.questions))}catch{}this._editing=!1,this._editingIndex=-1,this._screen=this._editorOrigin||"result",this._editorOrigin="result",this.dispatchEvent(new CustomEvent("questions-changed",{bubbles:!0,composed:!0,detail:{questions:this.questions}}))}}render(){switch(this._screen){case"name":return this._renderNameScreen();case"question":return this._renderQuestionScreen();case"result":return this._renderResultScreen();case"editor":return this._renderEditorScreen();default:return this._renderNameScreen()}}static get styles(){return[super.styles,D`:host { display: block; max-width: 640px; margin: 0 auto; padding: var(--ddd-spacing-8); font-family: var(--ddd-font-primary); } .quiz-title { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); margin-bottom: var(--ddd-spacing-4); color: var(--ddd-theme-primary); } .quiz-instruction { font-size: var(--ddd-font-size-m); margin-bottom: var(--ddd-spacing-6); color: var(--ddd-theme-secondary); } .input-group { margin-bottom: var(--ddd-spacing-4); } input#name-input { width: 100%; padding: var(--ddd-spacing-4); font-size: var(--ddd-font-size-m); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); box-sizing: border-box; font-family: var(--ddd-font-primary); } input#name-input:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--ddd-theme-polaris-focus-ring); } .start-btn { width: 100%; padding: var(--ddd-spacing-4); font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-bold); background: var(--ddd-theme-polaris-primary); color: var(--ddd-theme-on-primary); border: none; border-radius: var(--ddd-radius-md); cursor: pointer; transition: background 0.2s; font-family: var(--ddd-font-primary); } .start-btn:hover { background: var(--ddd-theme-accent); } .start-btn.multi-submit { margin-top: var(--ddd-spacing-3); font-size: var(--ddd-font-size-s); } .validation-error { margin-top: var(--ddd-spacing-2); color: var(--ddd-theme-error); font-size: var(--ddd-font-size-s); } .quiz-header { display: flex; justify-content: space-between; margin-bottom: var(--ddd-spacing-6); font-weight: var(--ddd-font-weight-bold); } .progress-label, .score-display { color: var(--ddd-theme-primary); } .question-text { font-size: var(--ddd-font-size-m); line-height: 1.6; text-align: justify; color: var(--ddd-theme-on-surface); background: var(--ddd-theme-polaris-surface-hover); border-left: 4px solid var(--ddd-theme-polaris-primary); padding: var(--ddd-spacing-4) var(--ddd-spacing-5); border-radius: 0 var(--ddd-radius-md) var(--ddd-radius-md) 0; margin-bottom: var(--ddd-spacing-6); } .question-image { text-align: center; margin-bottom: var(--ddd-spacing-4); } .question-image img { max-width: 100%; border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-theme-polaris-border); } .answer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--ddd-spacing-3); margin-bottom: var(--ddd-spacing-6); } @media (max-width: 480px) { .answer-grid { grid-template-columns: 1fr; } } .answer-btn { padding: var(--ddd-spacing-4) var(--ddd-spacing-5); font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-medium); background: var(--ddd-theme-polaris-surface); color: var(--ddd-theme-on-surface); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); cursor: pointer; transition: background 0.2s, border-color 0.2s; font-family: var(--ddd-font-primary); } .answer-btn:hover:not([disabled]) { background: var(--ddd-theme-polaris-surface-hover); } .answer-btn:disabled { opacity: 0.6; cursor: not-allowed; } .answer-btn--correct { background: var(--ddd-theme-success) !important; color: var(--ddd-theme-on-success) !important; border-color: var(--ddd-theme-success) !important; } .answer-btn--selected { background: var(--ddd-theme-accent-light) !important; color: var(--ddd-theme-primary) !important; border-color: var(--ddd-theme-primary) !important; box-shadow: 0 0 0 2px var(--ddd-theme-polaris-focus-ring); } .answer-btn--wrong { background: var(--ddd-theme-error) !important; color: var(--ddd-theme-on-error) !important; border-color: var(--ddd-theme-error) !important; } .choice-image { max-height: 60px; border-radius: var(--ddd-radius-sm); object-fit: contain; display: block; margin: 0 auto var(--ddd-spacing-1); } .feedback-area { padding: var(--ddd-spacing-4); border-radius: var(--ddd-radius-md); font-weight: var(--ddd-font-weight-medium); text-align: center; } .feedback-area.positive { background: var(--ddd-theme-success-light); color: var(--ddd-theme-on-success); } .feedback-area.negative { background: var(--ddd-theme-error-light); color: var(--ddd-theme-on-error); } .result-heading { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); margin-bottom: var(--ddd-spacing-6); color: var(--ddd-theme-primary); } .result-name, .result-score, .result-percentage { font-size: var(--ddd-font-size-m); margin-bottom: var(--ddd-spacing-4); color: var(--ddd-theme-secondary); } .result-message { font-size: var(--ddd-font-size-l); font-weight: var(--ddd-font-weight-bold); margin: var(--ddd-spacing-6) 0; color: var(--ddd-theme-primary); text-align: center; } .restart-btn { width: 100%; padding: var(--ddd-spacing-4); font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-bold); background: var(--ddd-theme-polaris-primary); color: var(--ddd-theme-on-primary); border: none; border-radius: var(--ddd-radius-md); cursor: pointer; transition: background 0.2s; font-family: var(--ddd-font-primary); } .restart-btn:hover { background: var(--ddd-theme-accent); } .edit-questions-btn { width: 100%; margin-top: var(--ddd-spacing-3); padding: var(--ddd-spacing-3) var(--ddd-spacing-4); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-medium); background: transparent; color: var(--ddd-theme-primary); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); cursor: pointer; transition: background 0.2s; font-family: var(--ddd-font-primary); } .edit-questions-btn:hover { background: var(--ddd-theme-polaris-surface-hover); } .edit-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--ddd-spacing-6); padding-bottom: var(--ddd-spacing-4); border-bottom: 1px solid var(--ddd-theme-polaris-border); } .edit-title { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary); margin: 0; } .close-editor-btn { padding: var(--ddd-spacing-2) var(--ddd-spacing-4); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-medium); background: var(--ddd-theme-error); color: var(--ddd-theme-on-error); border: none; border-radius: var(--ddd-radius-md); cursor: pointer; font-family: var(--ddd-font-primary); } .editor-content { display: flex; flex-direction: column; gap: var(--ddd-spacing-6); } .add-question-form { padding: var(--ddd-spacing-4); background: var(--ddd-theme-polaris-surface); border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-theme-polaris-border); } .editor-toolbar { display: flex; gap: var(--ddd-spacing-2); margin-bottom: var(--ddd-spacing-3); align-items: center; flex-wrap: wrap; } .editor-select, .editor-input { flex: 1; min-width: 120px; padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-s); font-family: var(--ddd-font-primary); } .editor-input-small { width: var(--ddd-spacing-14); padding: var(--ddd-spacing-2); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-s); text-align: center; font-family: var(--ddd-font-primary); } .editor-label { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); white-space: nowrap; } .editor-image-preview { text-align: center; margin-bottom: var(--ddd-spacing-3); } .editor-image-preview img { max-width: 200px; border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-theme-polaris-border); } .question-text-input, .edit-question-text-input { width: 100%; min-height: var(--ddd-spacing-20); padding: var(--ddd-spacing-3); font-size: var(--ddd-font-size-m); font-family: var(--ddd-font-primary); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); resize: vertical; box-sizing: border-box; margin-bottom: var(--ddd-spacing-4); } .choices-container { display: flex; flex-direction: column; gap: var(--ddd-spacing-3); margin-bottom: var(--ddd-spacing-4); } .choice-input-wrapper { display: flex; flex-wrap: wrap; gap: var(--ddd-spacing-2); align-items: center; } .choice-input { flex: 1; min-width: 120px; padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-m); font-family: var(--ddd-font-primary); } .choice-image-input { width: 150px; padding: var(--ddd-spacing-2); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-xs); font-family: var(--ddd-font-primary); } .choice-image-preview { max-height: 32px; border-radius: var(--ddd-radius-sm); margin-left: auto; } .choice-label { display: flex; align-items: center; gap: var(--ddd-spacing-2); font-size: var(--ddd-font-size-s); color: var(--ddd-theme-secondary); cursor: pointer; } .editor-hint { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-top: var(--ddd-spacing-1); } .editor-hint--accent { color: var(--ddd-theme-primary); font-weight: var(--ddd-font-weight-bold); } .add-question-btn { width: 100%; padding: var(--ddd-spacing-3) var(--ddd-spacing-4); font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-bold); background: var(--ddd-theme-polaris-primary); color: var(--ddd-theme-on-primary); border: none; border-radius: var(--ddd-radius-md); cursor: pointer; font-family: var(--ddd-font-primary); } .add-question-btn:hover { background: var(--ddd-theme-accent); } .editor-add-btn { font-size: var(--ddd-font-size-xs); margin-top: var(--ddd-spacing-1); padding: var(--ddd-spacing-1) var(--ddd-spacing-3); border-radius: var(--ddd-radius-sm); border: 1px solid var(--ddd-theme-polaris-border); background: transparent; cursor: pointer; font-family: var(--ddd-font-primary); } .questions-list { display: flex; flex-direction: column; gap: var(--ddd-spacing-4); } .question-card { padding: var(--ddd-spacing-4); background: var(--ddd-theme-polaris-surface); border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-theme-polaris-border); } .question-card-header { display: flex; justify-content: space-between; align-items: center; } .question-type-badge { color: var(--ddd-theme-primary); } .question-image-indicator { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); } .question-points-indicator { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-success); font-weight: var(--ddd-font-weight-bold); } .question-card-actions { display: flex; gap: var(--ddd-spacing-2); } .edit-btn { padding: var(--ddd-spacing-1) var(--ddd-spacing-3); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-medium); background: var(--ddd-theme-polaris-surface-hover); color: var(--ddd-theme-primary); border: none; border-radius: var(--ddd-radius-sm); cursor: pointer; font-family: var(--ddd-font-primary); } .delete-btn { padding: var(--ddd-spacing-1) var(--ddd-spacing-3); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-medium); background: transparent; color: var(--ddd-theme-error); border: none; border-radius: var(--ddd-radius-sm); cursor: pointer; font-family: var(--ddd-font-primary); } .delete-btn:hover { background: var(--ddd-theme-error); color: var(--ddd-theme-on-error); } .edit-form { display: flex; flex-direction: column; gap: var(--ddd-spacing-3); } .edit-form-actions { display: flex; gap: var(--ddd-spacing-3); } .save-edit-btn { flex: 1; padding: var(--ddd-spacing-2) var(--ddd-spacing-3); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-bold); background: var(--ddd-theme-success); color: var(--ddd-theme-on-success); border: none; border-radius: var(--ddd-radius-sm); cursor: pointer; font-family: var(--ddd-font-primary); } .cancel-edit-btn { flex: 1; padding: var(--ddd-spacing-2) var(--ddd-spacing-3); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-medium); background: transparent; color: var(--ddd-theme-secondary); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); cursor: pointer; font-family: var(--ddd-font-primary); } .editor-pgk-container, .editor-matching-container, .editor-short-answer-container { margin: var(--ddd-spacing-3) 0; font-size: var(--ddd-font-size-s); } .editor-matching-columns { display: flex; gap: var(--ddd-spacing-4); } .editor-matching-column { flex: 1; } .editor-json-textarea { width: 100%; min-height: var(--ddd-spacing-20); padding: var(--ddd-spacing-3); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-xs); font-family: monospace; box-sizing: border-box; } .editor-json-input { width: 100%; padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-xs); font-family: monospace; box-sizing: border-box; } .pgk-table { width: 100%; border-collapse: collapse; font-size: var(--ddd-font-size-s); margin: var(--ddd-spacing-3) 0; } .pgk-table th { text-align: left; padding: var(--ddd-spacing-2); background: var(--ddd-theme-polaris-surface-hover); } .pgk-table td { padding: var(--ddd-spacing-2); border-bottom: 1px solid var(--ddd-theme-polaris-border); } .pgk-cell { text-align: center; width: var(--ddd-spacing-20); } .matching-container { margin: var(--ddd-spacing-3) 0; } .matching-row { display: flex; align-items: center; gap: var(--ddd-spacing-3); margin: var(--ddd-spacing-2) 0; font-size: var(--ddd-font-size-s); } .matching-item { min-width: 200px; font-weight: var(--ddd-font-weight-medium); } .matching-arrow { font-size: var(--ddd-font-size-l); } .matching-select { padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border-radius: var(--ddd-radius-sm); border: 1px solid var(--ddd-theme-polaris-border); font-size: var(--ddd-font-size-s); font-family: var(--ddd-font-primary); } .short-answer-container { margin: var(--ddd-spacing-3) 0; } .short-answer-input { width: 100%; padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-theme-polaris-border); font-size: var(--ddd-font-size-m); box-sizing: border-box; font-family: var(--ddd-font-primary); }`]}}globalThis.customElements.define(B.tag,B);let $t=class ut extends U(N(L)){static get tag(){return"quiz-user-auth"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},autoLogin:{type:Boolean,attribute:"auto-login"},_screen:{state:!0},_nama:{state:!0},_email:{state:!0},_nis:{state:!0},_absen:{state:!0},_kelas:{state:!0},_studentId:{state:!0},_errorMsg:{state:!0},_successMsg:{state:!0},_loading:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.autoLogin=!0,this._screen="check",this._nama="",this._email="",this._nis="",this._absen="",this._kelas="",this._studentId="",this._errorMsg="",this._successMsg="",this._loading=!1,this.t={...this.t,login:"Masuk",register:"Daftar",nama:"Nama Lengkap",email:"Email",nis:"NIS",absen:"Nomor Absen",kelas:"Kelas",namaPlaceholder:"Contoh: Ahmad Dahlan",emailPlaceholder:"contoh@email.com",nisPlaceholder:"Contoh: 1234567",absenPlaceholder:"Contoh: 01",kelasPlaceholder:"Contoh: XII-IPA-1",welcome:"Selamat datang",logout:"Keluar",id:"ID"}}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const e=globalThis.HaxStore.requestAvailability();e&&!e.elementList[ut.tag]&&(e.elementList[ut.tag]=ut.haxProperties)}const t=this._load("quiz_user_session");t?.studentId?(this._studentId=t.studentId,this._nama=t.nama,this._email=t.email,this._nis=t.nis||"",this._absen=t.absen||"",this._kelas=t.kelas||"",this._screen="logged-in",queueMicrotask(()=>this._verifySession()),this.autoLogin&&this._dispatchSessionChanged(),this._startSessionWatch()):this._screen="login"}_load(t){try{const e=JSON.parse(localStorage.getItem(t));return e?.expiresAt&&Date.now()>e.expiresAt?(this._clear(t),null):e}catch{return null}}_save(t,e){try{const i={...e,expiresAt:Date.now()+864e5};localStorage.setItem(t,JSON.stringify(i))}catch{}}_clear(t){try{localStorage.removeItem(t)}catch{}}async _verifySession(){if(!this.appsScriptUrl||this.appsScriptUrl.trim()===""){this._screen="login";return}this._loading=!0;try{const t=`${this.appsScriptUrl}?action=verify&studentId=${encodeURIComponent(this._studentId)}`,e=await fetch(t),i=e.headers.get("content-type");if(!i||!i.includes("application/json"))throw new Error("Respon bukan JSON");const a=await e.json();a.status==="success"?(this._nama=a.nama,this._nis=a.nis||"",this._absen=a.absen||"",this._kelas=a.kelas||"",this._screen="logged-in",this._dispatchLogin()):(this._clear("quiz_user_session"),this._screen="login",this._dispatchSessionChanged())}catch{this._screen="login",this._dispatchSessionChanged()}this._loading=!1}async _handleLogin(t){if(t.preventDefault(),this._errorMsg="",!this.appsScriptUrl||this.appsScriptUrl.trim()===""){this._errorMsg="URL Apps Script belum dikonfigurasi. Harap hubungi administrator.";return}this._loading=!0;try{const e=`${this.appsScriptUrl}?action=login&nis=${encodeURIComponent(this._nis.trim())}&email=${encodeURIComponent(this._email.trim())}`,i=await fetch(e),a=i.headers.get("content-type");if(!a||!a.includes("application/json"))throw new Error("Respon dari server bukan format JSON. Periksa URL Apps Script.");const s=await i.json();s.status==="success"?(this._studentId=s.studentId,this._nama=s.nama,this._nis=s.nis||this._nis,this._absen=s.absen||"",this._kelas=s.kelas||"",this._save("quiz_user_session",{studentId:s.studentId,nama:s.nama,email:this._email.trim(),nis:this._nis,absen:this._absen,kelas:this._kelas}),this._screen="logged-in",this._dispatchLogin(),this._startSessionWatch()):this._errorMsg=s.message||"Login gagal"}catch{this._errorMsg="Gagal menghubungi server"}this._loading=!1}_startSessionWatch(){this._sessionInterval&&clearInterval(this._sessionInterval),this._sessionInterval=setInterval(()=>{!this._load("quiz_user_session")?.studentId&&this._screen==="logged-in"&&this._handleLogout()},6e4)}async _handleRegister(t){if(t.preventDefault(),this._errorMsg="",!this.appsScriptUrl||this.appsScriptUrl.trim()===""){this._errorMsg="URL Apps Script belum dikonfigurasi. Harap hubungi administrator.",this._loading=!1;return}this._loading=!0;try{const e=new URLSearchParams({action:"register",nama:this._nama.trim(),email:this._email.trim(),nis:this._nis.trim(),absen:this._absen.trim(),kelas:this._kelas.trim()}),i=`${this.appsScriptUrl}?${e.toString()}`,a=await fetch(i,{redirect:"follow"}),s=a.headers.get("content-type");if(!s||!s.includes("application/json"))throw new Error("Respon dari server bukan format JSON. Periksa URL Apps Script.");const o=await a.json();o.status==="success"?(this._successMsg="Pendaftaran berhasil!",this._screen="login"):this._errorMsg=o.message||"Gagal mendaftar"}catch(e){console.error(e),this._errorMsg="Gagal menghubungi server."}finally{this._loading=!1}}_handleLogout(){this._sessionInterval&&(clearInterval(this._sessionInterval),this._sessionInterval=null),this._clear("quiz_user_session"),this._studentId="",this._nama="",this._email="",this._nis="",this._absen="",this._kelas="",this._screen="login",window.dispatchEvent(new CustomEvent("quiz-user-logout",{bubbles:!0,composed:!0})),this._dispatchSessionChanged()}_dispatchLogin(){window.dispatchEvent(new CustomEvent("quiz-user-login",{detail:{studentId:this._studentId,nama:this._nama,email:this._email,nis:this._nis,absen:this._absen,kelas:this._kelas},bubbles:!0,composed:!0})),this._dispatchSessionChanged()}_dispatchSessionChanged(){const t=this._load("quiz_user_session");window.dispatchEvent(new CustomEvent("quiz-user-session-changed",{detail:t,bubbles:!0,composed:!0}))}static get styles(){return[super.styles,D`
        :host { display: block; margin-bottom: var(--ddd-spacing-4); }
        .auth-card {
          background: var(--ddd-theme-polaris-surface);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-6);
          border: 1px solid var(--ddd-theme-polaris-border);
          max-width: 420px;
          /* margin: 0 auto — No DDD token; centering pattern for card layout */
          margin: 0 auto;
        }
        h2 { color: var(--ddd-theme-primary); font-size: var(--ddd-font-size-l); margin: 0 0 var(--ddd-spacing-2) 0; text-align: center; }
        .subtitle { color: var(--ddd-theme-secondary); font-size: var(--ddd-font-size-s); text-align: center; margin-bottom: var(--ddd-spacing-4); }
        .field { margin-bottom: var(--ddd-spacing-3); }
        .field-row { display: flex; gap: var(--ddd-spacing-3); }
        .field-row .field { flex: 1; }
        .field label { display: block; font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-secondary); margin-bottom: var(--ddd-spacing-1); }
        .field input {
          width: 100%; padding: var(--ddd-spacing-3); border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md); font-size: var(--ddd-font-size-m); font-family: var(--ddd-font-primary);
          box-sizing: border-box;
        }
        .field input:focus { outline: none; border-color: var(--ddd-theme-primary); box-shadow: 0 0 0 2px rgba(103,80,164,0.15); }
        .btn {
          width: 100%; padding: var(--ddd-spacing-3); border: none; border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-bold); cursor: pointer;
          font-family: var(--ddd-font-primary); margin-top: var(--ddd-spacing-2);
          background: var(--ddd-theme-polaris-primary); color: var(--ddd-theme-on-primary);
        }
        .btn:hover { background: var(--ddd-theme-accent); }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .btn-link { background: none; color: var(--ddd-theme-primary); font-size: var(--ddd-font-size-s); text-decoration: underline; margin-top: var(--ddd-spacing-3); font-weight: var(--ddd-font-weight-medium); }
        .msg { padding: var(--ddd-spacing-3); border-radius: var(--ddd-radius-md); font-size: var(--ddd-font-size-s); margin-bottom: var(--ddd-spacing-3); }
        .msg-error { background: var(--ddd-theme-error-light); color: var(--ddd-theme-on-error); border: 1px solid var(--ddd-theme-error); }
        .msg-success { background: var(--ddd-theme-success-light); color: var(--ddd-theme-on-success); border: 1px solid var(--ddd-theme-success); }
        .user-bar {
          display: flex; align-items: center; justify-content: space-between;
          background: var(--ddd-theme-polaris-surface-hover); border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-4); border: 1px solid var(--ddd-theme-polaris-border);
        }
        .user-info { display: flex; align-items: center; gap: var(--ddd-spacing-3); }
        .avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary);
          display: flex; align-items: center; justify-content: center;
          font-weight: var(--ddd-font-weight-bold); font-size: var(--ddd-font-size-l);
        }
        .user-name { font-weight: var(--ddd-font-weight-bold); font-size: var(--ddd-font-size-m); }
        .user-email { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); }
        .user-meta { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-top: var(--ddd-spacing-1); }
        .logout-btn {
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border: 1px solid var(--ddd-theme-error);
          color: var(--ddd-theme-error); background: none; border-radius: var(--ddd-radius-sm);
          font-size: var(--ddd-font-size-xs); cursor: pointer; font-family: var(--ddd-font-primary);
        }
        .logout-btn:hover { background: var(--ddd-theme-error); color: var(--ddd-theme-on-error); }
        .loading { text-align: center; padding: var(--ddd-spacing-8); color: var(--ddd-theme-primary); }
      `]}render(){if(this._loading&&this._screen==="check")return d`<div class="loading">⏳ Memverifikasi sesi...</div>`;if(this._screen==="logged-in"){const t=this._nama?this._nama.charAt(0).toUpperCase():"?";return d`
        <div class="user-bar">
          <div class="user-info">
            <div class="avatar">${t}</div>
            <div>
              <div class="user-name">${this._nama}</div>
              <div class="user-email">${this._email}</div>
              <div class="user-meta">NIS: ${this._nis} | Absen: ${this._absen} | Kelas: ${this._kelas}</div>
            </div>
          </div>
          <button class="logout-btn" @click="${this._handleLogout}">${this.t.logout}</button>
        </div>
      `}return d`
      <div class="auth-card">
        <h2>🔐 ${this._screen==="register"?this.t.register:this.t.login}</h2>
        <p class="subtitle">
          ${this._screen==="register"?"Buat akun untuk menyimpan hasil kuis & aktivitas":"Masuk dengan email yang sudah terdaftar"}
        </p>

        ${this._errorMsg?d`<div class="msg msg-error">${this._errorMsg}</div>`:""}

        ${this._screen==="register"?d`
          <form @submit="${this._handleRegister}">
            <div class="field">
              <label>${this.t.nis}</label>
              <input type="text" .value="${this._nis}"
                @input="${t=>this._nis=t.target.value}"
                placeholder="${this.t.nisPlaceholder}" required>
            </div>
            <div class="field">
              <label>${this.t.nama}</label>
              <input type="text" .value="${this._nama}"
                @input="${t=>this._nama=t.target.value}"
                placeholder="${this.t.namaPlaceholder}" required minlength="3">
            </div>
            <div class="field">
              <label>${this.t.email}</label>
              <input type="email" .value="${this._email}"
                @input="${t=>this._email=t.target.value}"
                placeholder="${this.t.emailPlaceholder}" required>
            </div>
            <div class="field-row">
              <div class="field">
                <label>${this.t.absen}</label>
                <input type="text" .value="${this._absen}"
                  @input="${t=>this._absen=t.target.value}"
                  placeholder="${this.t.absenPlaceholder}" required>
              </div>
              <div class="field">
                <label>${this.t.kelas}</label>
                <input type="text" .value="${this._kelas}"
                  @input="${t=>this._kelas=t.target.value}"
                  placeholder="${this.t.kelasPlaceholder}" required>
              </div>
            </div>
            <button class="btn" type="submit" ?disabled="${this._loading}">
              ${this._loading?"\u23F3 Mendaftar...":this.t.register}
            </button>
          </form>
          <button class="btn-link" @click="${()=>{this._screen="login",this._errorMsg=""}}">
            Sudah punya akun? ${this.t.login}
          </button>
        `:d`
          <form @submit="${this._handleLogin}">
            <div class="field">
              <label>${this.t.nis}</label>
              <input type="text" .value="${this._nis}"
                @input="${t=>this._nis=t.target.value}"
                placeholder="${this.t.nisPlaceholder}" required>
            </div>
            <div class="field">
              <label>${this.t.email}</label>
              <input type="email" .value="${this._email}"
                @input="${t=>this._email=t.target.value}"
                placeholder="${this.t.emailPlaceholder}" required>
            </div>
            <button class="btn" type="submit" ?disabled="${this._loading}">
              ${this._loading?"\u23F3 Masuk...":this.t.login}
            </button>
          </form>
          <button class="btn-link" @click="${()=>{this._screen="register",this._errorMsg=""}}">
            Belum punya akun? ${this.t.register}
          </button>
        `}
      </div>
    `}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Quiz User Auth",description:"Sistem login/registrasi siswa untuk dashboard kuis",icon:"icons:account-circle",color:"purple",tags:["Education","Auth"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield",required:!0}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_screen","_nama","_email","_nis","_absen","_kelas","_studentId","_errorMsg","_successMsg","_loading"]}}}};globalThis.customElements.define($t.tag,$t);class Q extends U(N(L)){static get tag(){return"assignment-forum"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},kdMateri:{type:String,attribute:"kd-materi"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},assignmentTitle:{type:String,attribute:"assignment-title"},assignmentInstruction:{type:String,attribute:"assignment-instruction"},forumTopic:{type:String,attribute:"forum-topic"},viewMode:{type:String,attribute:"view-mode"},hideDelete:{type:Boolean,attribute:"hide-delete",reflect:!0},hideTugas:{type:Boolean,attribute:"hide-tugas",reflect:!0},_comments:{state:!0},_activeReplyId:{state:!0},_sortMode:{state:!0},_assignmentText:{state:!0},_assignmentLink:{state:!0},_assignmentSubmitted:{state:!0},_submitting:{state:!0},_loadingComments:{state:!0},_toastMsg:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.kdMateri="",this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.assignmentTitle="Tugas Mandiri",this.assignmentInstruction="Tuliskan refleksi atau jawaban tugas Anda.",this.forumTopic="Forum Diskusi",this.viewMode="student",this.hideDelete=!1,this.hideTugas=!1,this._comments=[],this._activeReplyId=null,this._sortMode="best",this._assignmentText=localStorage.getItem("hax_assignment_text")||"",this._assignmentLink=localStorage.getItem("hax_assignment_link")||"",this._assignmentSubmitted=localStorage.getItem("hax_assignment_submitted")==="true",this._submitting=!1,this._loadingComments=!1,this._toastMsg="",this.t={...this.t,assignmentTitle:"Tugas Mandiri",submitBtn:"Kirim & Kunci Tugas",submitting:"Mengirim...",submitted:"Tugas Diserahkan & Tersimpan ke Google Sheets",pending:"Belum Menyerahkan",resetBtn:"Ubah",forumTitle:"Forum Diskusi",postComment:"Post Comment",posting:"Posting...",reply:"Reply",deleteBtn:"Hapus",noComments:"Belum ada komentar. Mulai diskusi!",sortBest:"Terbaik",sortNewest:"Terbaru",sortOldest:"Terlama",placeholderComment:"Tulis komentar...",placeholderReply:"Tulis balasan...",placeholderTask:"Tulis jawaban tugas Anda di sini...",placeholderLink:"Link Google Drive / Google Doc (opsional)",invalidLink:"Format link tidak valid. Gunakan URL Google Drive/Doc.",emptyTask:"Isi tugas atau link Google Drive terlebih dahulu!",confirmDelete:"Hapus komentar ini?",taskDone:"Selesai",taskPending:"Belum",justNow:"Baru saja",minutesAgo:"menit lalu",hoursAgo:"jam lalu",daysAgo:"hari lalu",activityForum:"Aktivitas forum tercatat",activityAssignment:"Tugas dikumpulkan"}}get _kdMateriVal(){return this.kdMateri||this.sheetName||"Pertemuan"}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[Q.tag]&&(t.elementList[Q.tag]=Q.haxProperties)}this._authHandler=this._onUserLogin.bind(this),globalThis.addEventListener("quiz-user-login",this._authHandler),this._loadForumComments()}disconnectedCallback(){this._authHandler&&globalThis.removeEventListener("quiz-user-login",this._authHandler),super.disconnectedCallback()}_onUserLogin(t){t.detail&&(t.detail.studentId&&(this.studentId=t.detail.studentId),t.detail.nama&&(this.studentName=t.detail.nama),t.detail.nis&&(this.studentNis=t.detail.nis),t.detail.absen&&(this.studentAbsen=t.detail.absen),t.detail.kelas&&(this.studentKelas=t.detail.kelas),this._flushPending())}static get PENDING_KEY(){return"forum_pending_submissions"}static get PENDING_TTL_MS(){return 1440*60*1e3}_getPending(){try{const t=localStorage.getItem(Q.PENDING_KEY);return t?JSON.parse(t):[]}catch{return[]}}_savePending(t){try{localStorage.setItem(Q.PENDING_KEY,JSON.stringify(t))}catch{}}_saveDraft(t){const e=this._getPending();e.push({id:`draft-${Date.now()}`,timestamp:new Date().toISOString(),synced:!1,data:t}),this._savePending(e)}_flushPending(){if(!this.studentId)return;const t=this.forumApiUrl||this.appsScriptUrl;if(!t)return;const e=this._getPending(),i=Date.now(),a=[];for(const s of e)s.synced||i-new Date(s.timestamp).getTime()>Q.PENDING_TTL_MS||fetch(t,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({...s.data,studentId:this.studentId,user:this.studentName||"Siswa"})}).then(()=>{console.log("[assignment-forum] Pending flushed")}).catch(()=>{a.push(s)});this._savePending(a)}async _loadForumComments(){const t=this.forumApiUrl||this.appsScriptUrl;if(t){this._loadingComments=!0;try{const e=await(await fetch(`${t}?action=getForumComments`,{redirect:"follow"})).json();e.status==="ok"&&e.comments&&(this._comments=this._buildThread(e.comments))}catch(e){console.error("[assignment-forum] Failed to load forum:",e)}this._loadingComments=!1}}_buildThread(t){const e={},i=[];return t.forEach(a=>{e[a.id]={...a,replies:[]}}),t.forEach(a=>{a.parentId&&e[a.parentId]?e[a.parentId].replies.push(e[a.id]):e[a.id]&&i.push(e[a.id])}),i}_getSorted(){const t=[...this._comments];return this._sortMode==="newest"?t.sort((e,i)=>new Date(i.time)-new Date(e.time)):this._sortMode==="oldest"?t.sort((e,i)=>new Date(e.time)-new Date(i.time)):t.sort((e,i)=>(i.likes||0)-(e.likes||0)),t}_setSort(t){this._sortMode=t,this._comments=[...this._comments]}async _submitMainComment(){if(this._submitting)return;const t=this.shadowRoot.querySelector("#main-input");if(!t)return;const e=t.value.trim();if(!e)return;this._submitting=!0;const i={action:"saveForumComment",id:Date.now(),parentId:null,user:this.studentName||"Siswa",studentId:this.studentId||"",text:e,sheet:this.sheetName,kdMateri:this._kdMateriVal};if(!this.studentId){this._saveDraft(i),t.value="",this._submitting=!1,this._showToast("Tersimpan lokal. Login untuk mengirim komentar.");return}const a=this.forumApiUrl||this.appsScriptUrl;try{const s=await(await fetch(a,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(i)})).json();s.status==="ok"&&s.data&&(this._comments=[...this._comments,{...s.data,replies:[]}]),t.value=""}catch(s){console.error("[assignment-forum] Submit failed:",s)}this._submitting=!1,this._sendActivity("discussion",`Forum: ${e.substring(0,50)}`)}async _submitReply(t){if(this._submitting)return;const e=this.shadowRoot.querySelector(`#reply-${t}`);if(!e)return;const i=e.value.trim();if(!i)return;this._submitting=!0;const a={action:"saveForumComment",id:Date.now(),parentId:t,user:this.studentName||"Siswa",studentId:this.studentId||"",text:i,sheet:this.sheetName,kdMateri:this._kdMateriVal};if(!this.studentId){this._saveDraft(a),e.value="",this._submitting=!1,this._showToast("Tersimpan lokal. Login untuk mengirim balasan.");return}const s=this.forumApiUrl||this.appsScriptUrl;try{const o=await(await fetch(s,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(a)})).json();o.status==="ok"&&o.data&&(this._comments=this._comments.map(l=>l.id===t?{...l,replies:[...l.replies,{...o.data,replies:[]}]}:l)),this._activeReplyId=null}catch(o){console.error("[assignment-forum] Reply failed:",o)}this._submitting=!1,this._sendActivity("discussion",`Reply: ${i.substring(0,50)}`)}async _deleteComment(t){if(!globalThis.confirm(this.t.confirmDelete))return;const e=this.forumApiUrl||this.appsScriptUrl;if(e)try{await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"deleteForumComment",id:t})});const i=new Set([t]);this._comments.forEach(a=>{a.id===t&&a.replies&&a.replies.forEach(s=>i.add(s.id))}),this._comments=this._comments.filter(a=>!i.has(a.id)).map(a=>({...a,replies:(a.replies||[]).filter(s=>!i.has(s.id))}))}catch(i){console.error("[assignment-forum] Delete failed:",i)}}_findAndUpdateComment(t,e,i){return t.map(a=>a.id===e?i(a):a.replies&&a.replies.length>0?{...a,replies:this._findAndUpdateComment(a.replies,e,i)}:a)}_handleLike(t){this._comments=this._findAndUpdateComment(this._comments,t,e=>{const i=!e.isLiked;return{...e,isLiked:i,likes:i?(e.likes||0)+1:(e.likes||0)-1}}),this._syncLike(t)}_syncLike(t){const e=this.forumApiUrl||this.appsScriptUrl;if(!e)return;const i=this._comments.find(a=>a.id===t);i&&fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"saveForumComment",id:t,actionType:"like",isLiked:i.isLiked})}).catch(()=>{})}_toggleReply(t){this._activeReplyId=this._activeReplyId===t?null:t}_isValidUrl(t){try{const e=new URL(t);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}async _submitAssignment(){if(this._submitting)return;const t=this._assignmentText.trim();if(!t&&!this._assignmentLink){globalThis.alert(this.t.emptyTask);return}if(this._assignmentLink&&!this._isValidUrl(this._assignmentLink)){globalThis.alert(this.t.invalidLink);return}this._submitting=!0;const e={action:"saveAssignment",studentId:this.studentId,name:this.studentName,sheet:this.sheetName,title:this.assignmentTitle,content:t,link:this._assignmentLink,kdMateri:this._kdMateriVal};if(!this.studentId){this._saveDraft(e),localStorage.setItem("hax_assignment_submitted","true"),localStorage.setItem("hax_assignment_text",t),localStorage.setItem("hax_assignment_link",this._assignmentLink),this._assignmentSubmitted=!0,this._submitting=!1,this._showToast("Tersimpan lokal. Login untuk mengirim tugas.");return}const i=this.forumApiUrl||this.appsScriptUrl;if(i)try{await fetch(i,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)})}catch(a){console.error("[assignment-forum] Save assignment failed:",a)}localStorage.setItem("hax_assignment_submitted","true"),localStorage.setItem("hax_assignment_text",t),localStorage.setItem("hax_assignment_link",this._assignmentLink),this._assignmentSubmitted=!0,this._submitting=!1,this._showToast(`\u2713 ${this.t.activityAssignment}`),this._sendActivity("assignment",`Tugas: ${this.assignmentTitle}`)}_resetAssignment(){localStorage.removeItem("hax_assignment_submitted"),localStorage.removeItem("hax_assignment_text"),localStorage.removeItem("hax_assignment_link"),this._assignmentSubmitted=!1,this._assignmentText="",this._assignmentLink=""}_sendActivity(t,e){const i=t==="assignment"?"assignment-saved":"discussion-saved";globalThis.dispatchEvent(new CustomEvent(i,{detail:{title:this.assignmentTitle,thread:this.forumTopic,studentId:this.studentId,kdMateri:this._kdMateriVal},bubbles:!0,composed:!0}));const a=this.appsScriptUrl;if(a&&this.studentId){const s=new URLSearchParams({action:"activity",activityType:t,description:e,name:this.studentName,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",sheet:this.sheetName,kdMateri:this._kdMateriVal,timestamp:new Date().toISOString()});fetch(`${a}?${s.toString()}`,{redirect:"follow"}).catch(()=>{})}}_timeAgo(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return this.t.justNow;if(i<60)return`${i} ${this.t.minutesAgo}`;const a=Math.floor(i/60);return a<24?`${a} ${this.t.hoursAgo}`:`${Math.floor(a/24)} ${this.t.daysAgo}`}_showToast(t){this._toastMsg=t,setTimeout(()=>{this._toastMsg===t&&(this._toastMsg="")},3e3)}static get styles(){return[super.styles,D`
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
          color: var(--ddd-theme-default-text);
        }
        .card {
          background: var(--ddd-theme-default-surface);
          border-radius: var(--ddd-radius-lg);
          box-shadow: var(--ddd-shadow-1);
          padding: var(--ddd-spacing-5);
          margin-bottom: var(--ddd-spacing-5);
          border: 1px solid var(--ddd-theme-polaris-border);
        }
        h3 {
          margin: 0 0 var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-m);
          color: var(--ddd-theme-default-text);
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
        }
        .meta {
          font-size: var(--ddd-font-size-xs);
          color: var(--ddd-theme-secondary);
          background: var(--ddd-theme-polaris-surface-hover);
          padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-full);
          display: inline-block;
          margin-bottom: var(--ddd-spacing-3);
        }
        .instruction {
          margin: 0 0 var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-secondary);
          line-height: 1.5;
        }
        textarea,
        input[type="url"],
        input[type="text"] {
          width: 100%;
          min-height: var(--ddd-spacing-20);
          padding: var(--ddd-spacing-3);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-s);
          box-sizing: border-box;
          resize: vertical;
          font-family: var(--ddd-font-primary);
          margin-bottom: var(--ddd-spacing-2);
          background: var(--ddd-theme-default-surface);
          color: var(--ddd-theme-default-text);
        }
        textarea:focus,
        input:focus {
          outline: none;
          border-color: var(--ddd-theme-primary);
          box-shadow: 0 0 0 2px var(--ddd-theme-polaris-focus-ring);
        }
        textarea:disabled,
        input:disabled {
          background: var(--ddd-theme-polaris-surface);
          cursor: not-allowed;
          opacity: 0.7;
        }
        .btn-group {
          display: flex;
          gap: var(--ddd-spacing-2);
          flex-wrap: wrap;
          margin-top: var(--ddd-spacing-3);
        }
        .btn {
          border: none;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          font-family: var(--ddd-font-primary);
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
          color: var(--ddd-theme-on-primary);
        }
        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .btn-primary { background: var(--ddd-theme-primary); }
        .btn-primary:hover:not(:disabled) { background: var(--ddd-theme-accent); }
        .btn-success { background: var(--ddd-theme-success); }
        .btn-success:hover:not(:disabled) { background: var(--ddd-theme-success-dark); }
        .btn-danger { background: var(--ddd-theme-error); }
        .btn-danger:hover:not(:disabled) { background: var(--ddd-theme-error-dark); }
        .btn-sm {
          padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-xs);
        }
        .badge-done {
          background: var(--ddd-theme-success-light);
          color: var(--ddd-theme-success-text);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-md);
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-xs);
          display: inline-flex;
          align-items: center;
          gap: var(--ddd-spacing-1);
          margin-top: var(--ddd-spacing-3);
        }
        .badge-pending {
          background: var(--ddd-theme-warning-light);
          color: var(--ddd-theme-warning-text);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-md);
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-xs);
          display: inline-flex;
          align-items: center;
          gap: var(--ddd-spacing-1);
          margin-top: var(--ddd-spacing-3);
        }
        .summary-bar {
          display: flex;
          gap: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-3);
          background: var(--ddd-theme-polaris-surface-hover);
          border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-xs);
        }
        .input-container {
          display: flex;
          gap: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-6);
          align-items: flex-start;
        }
        .avatar {
          width: var(--ddd-spacing-10);
          height: var(--ddd-spacing-10);
          border-radius: var(--ddd-radius-full);
          background: var(--ddd-theme-polaris-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--ddd-font-size-l);
          flex-shrink: 0;
          color: var(--ddd-theme-default-text);
        }
        .avatar-sm {
          width: var(--ddd-spacing-8);
          height: var(--ddd-spacing-8);
          font-size: var(--ddd-font-size-m);
        }
        .input-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-2);
        }
        .input-box {
          width: 100%;
          padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-s);
          box-sizing: border-box;
          font-family: var(--ddd-font-primary);
          resize: none;
          min-height: auto;
          background: var(--ddd-theme-default-surface);
          color: var(--ddd-theme-default-text);
        }
        .input-box:focus {
          outline: none;
          border-color: var(--ddd-theme-primary);
          box-shadow: 0 0 0 2px var(--ddd-theme-polaris-focus-ring);
        }
        .btn-submit {
          align-self: flex-end;
          background: var(--ddd-theme-primary);
          color: var(--ddd-theme-on-primary);
          border: none;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-md);
          font-weight: var(--ddd-font-weight-bold);
          font-family: var(--ddd-font-primary);
          cursor: pointer;
          font-size: var(--ddd-font-size-s);
        }
        .btn-submit:hover:not(:disabled) { background: var(--ddd-theme-accent); }
        .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .comment-card {
          display: flex;
          gap: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-md);
          margin-bottom: var(--ddd-spacing-3);
          position: relative;
          background: var(--ddd-theme-default-surface);
          border: 1px solid var(--ddd-theme-polaris-surface-hover);
        }
        .comment-content {
          flex: 1;
          min-width: 0;
        }
        .comment-header {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
          margin-bottom: var(--ddd-spacing-1);
          flex-wrap: wrap;
        }
        .user-name {
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-text);
          font-size: var(--ddd-font-size-s);
        }
        .time-stamp {
          color: var(--ddd-theme-secondary);
          font-size: var(--ddd-font-size-xs);
        }
        .text-comment {
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-default-text);
          line-height: 1.5;
          word-break: break-word;
        }
        .action-bar {
          display: flex;
          gap: var(--ddd-spacing-4);
          margin-top: var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-xs);
          color: var(--ddd-theme-secondary);
          font-weight: var(--ddd-font-weight-bold);
          align-items: center;
        }
        .action-btn {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 3px;
          user-select: none;
          padding: 3px 5px;
          border-radius: var(--ddd-radius-sm);
          background: transparent;
          border: none;
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-xs);
          color: inherit;
        }
        .action-btn:hover {
          background: var(--ddd-theme-polaris-surface-hover);
          color: var(--ddd-theme-default-text);
        }
        .action-btn--danger:hover {
          color: var(--ddd-theme-error);
        }
        .sort-bar {
          display: flex;
          justify-content: flex-end;
          gap: var(--ddd-spacing-4);
          margin-bottom: var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-secondary);
        }
        .sort-btn {
          cursor: pointer;
          background: transparent;
          border: none;
          padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-secondary);
          border-radius: var(--ddd-radius-sm);
        }
        .sort-btn:hover { color: var(--ddd-theme-default-text); }
        .sort-btn--active { color: var(--ddd-theme-primary); }
        .reply-container {
          display: flex;
          gap: var(--ddd-spacing-2);
          margin-top: var(--ddd-spacing-2);
          padding-left: var(--ddd-spacing-3);
          border-left: 2px solid var(--ddd-theme-polaris-border);
        }
        .reply-container input {
          flex: 1;
          padding: var(--ddd-spacing-2);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-sm);
          font-size: var(--ddd-font-size-xs);
          font-family: var(--ddd-font-primary);
          min-height: auto;
          margin: 0;
        }
        .replies-list {
          margin-top: var(--ddd-spacing-3);
          padding-left: var(--ddd-spacing-4);
          border-left: 2px solid var(--ddd-theme-polaris-surface-hover);
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-2);
        }
        .reply-item {
          display: flex;
          gap: var(--ddd-spacing-2);
          background: var(--ddd-theme-polaris-surface);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-sm);
        }
        .empty-state {
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-secondary);
          text-align: center;
          padding: var(--ddd-spacing-5);
        }
        .toast {
          position: fixed;
          bottom: var(--ddd-spacing-6);
          left: 50%;
          transform: translateX(-50%);
          background: var(--ddd-theme-default-text);
          color: var(--ddd-theme-on-primary);
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-md);
          box-shadow: var(--ddd-shadow-2);
          font-size: var(--ddd-font-size-s);
          z-index: 1001;
          animation: toastFade 3s forwards;
        }
        @keyframes toastFade {
          0% { opacity: 0; transform: translate(-50%, 10px); }
          10% { opacity: 1; transform: translate(-50%, 0); }
          90% { opacity: 1; transform: translate(-50%, 0); }
          100% { opacity: 0; transform: translate(-50%, 10px); }
        }
      `]}render(){const t=this._getSorted();return d`
      <div class="summary-bar" role="status" aria-live="polite">
        <div>${this._assignmentSubmitted?"\u2705":"\u23F3"} ${this.t.assignmentTitle}: ${this._assignmentSubmitted?this.t.taskDone:this.t.taskPending}</div>
        <div>💬 ${this.t.forumTitle}: ${t.length}</div>
      </div>

      ${this.hideTugas?"":d`
      <section class="card" aria-labelledby="assignment-heading">
        <h3 id="assignment-heading">📝 ${this.assignmentTitle}</h3>
        <div class="meta">Formatif | ${this.t.assignmentTitle}</div>
        <p class="instruction">${this.assignmentInstruction}</p>
        <label class="sr-only" for="task-link">${this.t.placeholderLink}</label>
        <input
          id="task-link"
          type="url"
          placeholder="${this.t.placeholderLink}"
          .value="${this._assignmentLink}"
          @input="${e=>{this._assignmentLink=e.target.value}}"
          ?disabled="${this._assignmentSubmitted}"
          aria-label="${this.t.placeholderLink}"
        >
        <label class="sr-only" for="task-text">${this.t.placeholderTask}</label>
        <textarea
          id="task-text"
          .value="${this._assignmentText}"
          @input="${e=>{this._assignmentText=e.target.value}}"
          ?disabled="${this._assignmentSubmitted}"
          placeholder="${this.t.placeholderTask}"
          aria-label="${this.t.placeholderTask}"
        ></textarea>
        <div class="btn-group">
          ${this._assignmentSubmitted?d`
              <button class="btn btn-success btn-sm" disabled aria-label="${this.t.submitted}">✅ ${this.t.submitted}</button>
              <button class="btn btn-danger btn-sm" @click="${this._resetAssignment}" aria-label="${this.t.resetBtn}">🔄 ${this.t.resetBtn}</button>
            `:d`
              <button
                class="btn btn-success"
                ?disabled="${this._submitting}"
                @click="${this._submitAssignment}"
                aria-label="${this.t.submitBtn}"
              >
                ${this._submitting?`\u23F3 ${this.t.submitting}`:this.t.submitBtn}
              </button>
            `}
        </div>
        <div class="${this._assignmentSubmitted?"badge-done":"badge-pending"}" role="status" aria-live="polite">
          ${this._assignmentSubmitted?`\u2705 ${this.t.submitted}`:`\u26A0\uFE0F ${this.t.pending}`}
        </div>
      </section>
      `}

      <section class="card" aria-labelledby="forum-heading">
        <h3 id="forum-heading">💬 ${this.forumTopic}</h3>
        <div class="input-container">
          <div class="avatar" aria-hidden="true">👤</div>
          <div class="input-wrapper">
            <label class="sr-only" for="main-input">${this.t.placeholderComment}</label>
            <textarea
              id="main-input"
              class="input-box"
              rows="2"
              placeholder="${this.t.placeholderComment}"
              aria-label="${this.t.placeholderComment}"
            ></textarea>
            <button
              class="btn-submit"
              ?disabled="${this._submitting}"
              @click="${this._submitMainComment}"
              aria-label="${this.t.postComment}"
            >
              ${this._submitting?this.t.posting:this.t.postComment}
            </button>
          </div>
        </div>

        <div class="sort-bar" role="tablist" aria-label="Sort comments">
          <button
            class="sort-btn ${this._sortMode==="best"?"sort-btn--active":""}"
            @click="${()=>this._setSort("best")}"
            role="tab"
            aria-selected="${this._sortMode==="best"}"
          >${this.t.sortBest}</button>
          <button
            class="sort-btn ${this._sortMode==="newest"?"sort-btn--active":""}"
            @click="${()=>this._setSort("newest")}"
            role="tab"
            aria-selected="${this._sortMode==="newest"}"
          >${this.t.sortNewest}</button>
          <button
            class="sort-btn ${this._sortMode==="oldest"?"sort-btn--active":""}"
            @click="${()=>this._setSort("oldest")}"
            role="tab"
            aria-selected="${this._sortMode==="oldest"}"
          >${this.t.sortOldest}</button>
        </div>

        ${this._loadingComments?d`<div class="empty-state">Loading...</div>`:t.length===0?d`<div class="empty-state">${this.t.noComments}</div>`:t.map(e=>this._renderComment(e))}
      </section>

      ${this._toastMsg?d`<div class="toast" role="status" aria-live="polite">${this._toastMsg}</div>`:""}
    `}_renderComment(t){const e=t.user?t.user.charAt(0).toUpperCase():"?",i=this.viewMode==="lecturer"&&!this.hideDelete;return d`
      <article class="comment-card" aria-label="${this.t.forumTitle}">
        <div class="avatar" aria-hidden="true">${e}</div>
        <div class="comment-content">
          <header class="comment-header">
            <span class="user-name">${t.user}</span>
            <time class="time-stamp" datetime="${t.time}">${this._timeAgo(t.time)}</time>
          </header>
          <div class="text-comment">${t.text}</div>
          <nav class="action-bar" aria-label="Comment actions">
            <button
              class="action-btn"
              @click="${()=>this._handleLike(t.id)}"
              aria-label="Like (${t.likes||0})"
            >🔺 ${t.likes||0}</button>
            <button
              class="action-btn"
              @click="${()=>this._toggleReply(t.id)}"
              aria-label="${this.t.reply}"
            >${this.t.reply}</button>
            ${i?d`
              <button
                class="action-btn action-btn--danger"
                @click="${()=>this._deleteComment(t.id)}"
                aria-label="${this.t.deleteBtn}"
              >🗑️ ${this.t.deleteBtn}</button>
            `:""}
          </nav>
          ${this._activeReplyId===t.id?d`
            <div class="reply-container">
              <label class="sr-only" for="reply-${t.id}">${this.t.placeholderReply}</label>
              <input
                id="reply-${t.id}"
                type="text"
                placeholder="${this.t.placeholderReply}"
                aria-label="${this.t.placeholderReply}"
              >
              <button
                class="btn-submit"
                ?disabled="${this._submitting}"
                @click="${()=>this._submitReply(t.id)}"
                aria-label="${this.t.reply}"
              >${this._submitting?"...":this.t.reply}</button>
            </div>
          `:""}
          ${t.replies&&t.replies.length>0?d`
            <div class="replies-list">
              ${t.replies.map(a=>this._renderReply(a))}
            </div>
          `:""}
        </div>
      </article>
    `}_renderReply(t){const e=t.user?t.user.charAt(0).toUpperCase():"?";return d`
      <article class="reply-item" aria-label="${this.t.reply}">
        <div class="avatar avatar-sm" aria-hidden="true">${e}</div>
        <div class="comment-content">
          <header class="comment-header">
            <span class="user-name" style="font-size: var(--ddd-font-size-xs);">${t.user}</span>
            <time class="time-stamp" datetime="${t.time}">${this._timeAgo(t.time)}</time>
          </header>
          <div class="text-comment" style="font-size: var(--ddd-font-size-xs);">${t.text}</div>
        </div>
      </article>
    `}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Assignment Forum",description:"Forum diskusi bertingkat + pengumpulan tugas dengan integrasi Google Sheets (2 deployment terpisah untuk quota Apps Script)",icon:"icons:forum",color:"blue",tags:["Education","Communication","Assessment"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL (Main)",description:"URL deployment utama untuk activity logging",inputMethod:"textfield",required:!0},{property:"forumApiUrl",title:"Forum API URL (Terpisah)",description:"URL deployment terpisah untuk forum & tugas (hemat quota)",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet/Pertemuan",description:"Nama sheet di Google Sheets",inputMethod:"textfield",default:"Pertemuan"},{property:"assignmentTitle",title:"Judul Tugas",inputMethod:"textfield",default:"Tugas Mandiri"},{property:"assignmentInstruction",title:"Instruksi Tugas",inputMethod:"textarea"},{property:"forumTopic",title:"Topik Forum",inputMethod:"textfield",default:"Forum Diskusi"},{property:"viewMode",title:"Mode Tampilan",inputMethod:"select",options:{student:"Siswa",lecturer:"Dosen (bisa hapus komentar)"},default:"student"},{property:"hideDelete",title:"Sembunyikan Tombol Hapus",inputMethod:"boolean",default:!1}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_comments","_activeReplyId","_sortMode","_assignmentText","_assignmentLink","_assignmentSubmitted","_submitting","_loadingComments","_toastMsg"]}}}}globalThis.customElements.define(Q.tag,Q);class G extends U(N(L)){static get tag(){return"assignment-component"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},kdMateri:{type:String,attribute:"kd-materi"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},assignmentTitle:{type:String,attribute:"assignment-title"},assignmentInstruction:{type:String,attribute:"assignment-instruction"},hideDelete:{type:Boolean,attribute:"hide-delete",reflect:!0},_assignmentText:{state:!0},_assignmentLink:{state:!0},_assignmentSubmitted:{state:!0},_submitting:{state:!0},_toastMsg:{state:!0}}}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Assignment Component",description:"Komponen pengumpulan tugas mandiri terpisah",icon:"icons:assignment-turned-in",color:"blue",tags:["Education","Assignment"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL (Activity)",inputMethod:"textfield"},{property:"forumApiUrl",title:"Forum API URL (Tugas)",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet / KD Materi",inputMethod:"textfield",default:"Pertemuan"},{property:"assignmentTitle",title:"Judul Tugas",inputMethod:"textfield",default:"Tugas Mandiri"},{property:"assignmentInstruction",title:"Instruksi Tugas",inputMethod:"textfield",default:"Tuliskan refleksi atau jawaban tugas Anda."},{property:"hideDelete",title:"Sembunyikan Hapus",inputMethod:"boolean"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.kdMateri="",this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.assignmentTitle="Tugas Mandiri",this.assignmentInstruction="Tuliskan refleksi atau jawaban tugas Anda.",this.hideDelete=!1,this._assignmentText="",this._assignmentLink="",this._assignmentSubmitted=!1,this._submitting=!1,this._toastMsg="",this.t={...this.t,assignmentTitle:"Tugas Mandiri",submitBtn:"Kirim & Kunci Tugas",submitting:"Mengirim...",submitted:"Tugas Diserahkan & Tersimpan ke Google Sheets",pending:"Belum Menyerahkan",resetBtn:"Ubah",placeholderTask:"Tulis jawaban tugas Anda di sini...",placeholderLink:"Link Google Drive / Google Doc (opsional)",invalidLink:"Format link tidak valid. Gunakan URL Google Drive/Doc.",emptyTask:"Isi tugas atau link Google Drive terlebih dahulu!",activityAssignment:"Tugas dikumpulkan"}}get _kdMateriVal(){return this.kdMateri||this.sheetName||"Pertemuan"}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[G.tag]&&(t.elementList[G.tag]=G.haxProperties)}this._loadFromStorage(),this._listenSession(),this._onLogout=this._onLogout.bind(this),globalThis.addEventListener("quiz-user-logout",this._onLogout)}disconnectedCallback(){globalThis.removeEventListener("quiz-user-session-changed",this._handleSessionChanged),globalThis.removeEventListener("quiz-user-logout",this._onLogout),super.disconnectedCallback()}_listenSession(){this._handleSessionChanged=this._handleSessionChanged.bind(this),globalThis.addEventListener("quiz-user-session-changed",this._handleSessionChanged),this._handleSessionChanged({detail:this._loadSession()})}_onLogout(){this._savePending([]),this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas=""}_loadSession(){try{const t=JSON.parse(localStorage.getItem("quiz_user_session"));return t?.expiresAt&&Date.now()>t.expiresAt?(localStorage.removeItem("quiz_user_session"),null):t}catch{return null}}_handleSessionChanged(t){const e=t?.detail||this._loadSession();e?.studentId?(this.studentId=e.studentId,this.studentName=e.nama,this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||"",this._flushPending()):(this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="")}_storageKey(){return`hax_assignment_${this._kdMateriVal}`}_loadFromStorage(){try{const t=JSON.parse(localStorage.getItem(this._storageKey()));t&&(this._assignmentSubmitted=t.submitted===!0,this._assignmentText=t.text||"",this._assignmentLink=t.link||"")}catch{}}_saveToStorage(){try{localStorage.setItem(this._storageKey(),JSON.stringify({submitted:this._assignmentSubmitted,text:this._assignmentText,link:this._assignmentLink}))}catch{}}_isValidUrl(t){try{const e=new URL(t);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}static get PENDING_KEY(){return"assignment_pending_submissions"}static get PENDING_TTL_MS(){return 1440*60*1e3}_getPending(){try{const t=localStorage.getItem(G.PENDING_KEY);return t?JSON.parse(t):[]}catch{return[]}}_savePending(t){try{localStorage.setItem(G.PENDING_KEY,JSON.stringify(t))}catch{}}_saveDraft(t){const e=this._getPending();e.push({id:`draft-${Date.now()}`,timestamp:new Date().toISOString(),synced:!1,data:t}),this._savePending(e)}_flushPending(){if(!this.studentId)return;const t=this.forumApiUrl||this.appsScriptUrl;if(!t)return;const e=this._getPending(),i=Date.now(),a=[];for(const s of e)s.synced||i-new Date(s.timestamp).getTime()>G.PENDING_TTL_MS||fetch(t,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({...s.data,studentId:this.studentId,name:this.studentName,kdMateri:this._kdMateriVal,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||""})}).then(()=>{console.log("[assignment-component] Pending flushed")}).catch(()=>{a.push(s)});this._savePending(a)}async _submitAssignment(){if(this._submitting)return;const t=this._assignmentText.trim();if(!t&&!this._assignmentLink){globalThis.alert(this.t.emptyTask);return}if(this._assignmentLink&&!this._isValidUrl(this._assignmentLink)){globalThis.alert(this.t.invalidLink);return}this._submitting=!0;const e={action:"saveAssignment",studentId:this.studentId,name:this.studentName,sheet:this.sheetName,title:this.assignmentTitle,content:t,link:this._assignmentLink,kdMateri:this._kdMateriVal,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||""};if(!this.studentId){this._saveDraft(e),this._submitting=!1,this._assignmentSubmitted=!0,this._saveToStorage(),this._showToast("Tersimpan lokal. Login untuk mengirim tugas.");return}const i=this.forumApiUrl||this.appsScriptUrl;if(i)try{await fetch(i,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)})}catch(a){console.error("[assignment-component] Save assignment failed:",a)}this._assignmentSubmitted=!0,this._submitting=!1,this._saveToStorage(),this._showToast(`\u2713 ${this.t.activityAssignment}`),this._dispatchActivity("assignment",`Tugas: ${this.assignmentTitle}`)}_resetAssignment(){this._assignmentSubmitted=!1,this._assignmentText="",this._assignmentLink="",this._saveToStorage()}_dispatchActivity(t,e){globalThis.dispatchEvent(new CustomEvent(t==="assignment"?"assignment-saved":"discussion-saved",{detail:{title:this.assignmentTitle,studentId:this.studentId,kdMateri:this._kdMateriVal},bubbles:!0,composed:!0}));const i=this.appsScriptUrl;if(i&&this.studentId){const a=new URLSearchParams({action:"activity",activityType:t,description:e,name:this.studentName,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",sheet:this.sheetName,kdMateri:this._kdMateriVal,timestamp:new Date().toISOString()});fetch(`${i}?${a.toString()}`,{redirect:"follow"}).catch(()=>{})}}_showToast(t){this._toastMsg=t,setTimeout(()=>{this._toastMsg===t&&(this._toastMsg="")},3e3)}static get styles(){return[super.styles,D`
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
          color: var(--ddd-theme-default-text);
        }
        .card {
          background: var(--ddd-theme-default-surface);
          border-radius: var(--ddd-radius-lg);
          box-shadow: var(--ddd-shadow-1);
          padding: var(--ddd-spacing-5);
          margin-bottom: var(--ddd-spacing-5);
          border: 1px solid var(--ddd-theme-polaris-border);
        }
        h3 {
          margin: 0 0 var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-m);
          color: var(--ddd-theme-default-text);
          display: flex; align-items: center; gap: var(--ddd-spacing-2);
        }
        .meta {
          font-size: var(--ddd-font-size-xs);
          color: var(--ddd-theme-secondary);
          background: var(--ddd-theme-polaris-surface-hover);
          padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-full);
          display: inline-block;
          margin-bottom: var(--ddd-spacing-3);
        }
        .instruction {
          margin: 0 0 var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-secondary);
          line-height: 1.5;
        }
        textarea,
        input[type="url"],
        input[type="text"] {
          width: 100%;
          min-height: var(--ddd-spacing-20);
          padding: var(--ddd-spacing-3);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-s);
          box-sizing: border-box;
          resize: vertical;
          font-family: var(--ddd-font-primary);
          margin-bottom: var(--ddd-spacing-2);
          background: var(--ddd-theme-default-surface);
          color: var(--ddd-theme-default-text);
        }
        textarea:focus,
        input:focus {
          outline: none;
          border-color: var(--ddd-theme-primary);
          box-shadow: 0 0 0 2px var(--ddd-theme-polaris-focus-ring);
        }
        textarea:disabled,
        input:disabled {
          background: var(--ddd-theme-polaris-surface);
          cursor: not-allowed;
          opacity: 0.7;
        }
        .btn-group {
          display: flex;
          gap: var(--ddd-spacing-2);
          flex-wrap: wrap;
          margin-top: var(--ddd-spacing-3);
        }
        .btn {
          border: none;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          font-family: var(--ddd-font-primary);
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
          color: var(--ddd-theme-on-primary);
        }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .btn-primary { background: var(--ddd-theme-primary); }
        .btn-primary:hover:not(:disabled) { background: var(--ddd-theme-accent); }
        .btn-success { background: var(--ddd-theme-success); }
        .btn-success:hover:not(:disabled) { background: var(--ddd-theme-success-dark); }
        .btn-danger { background: var(--ddd-theme-error); }
        .btn-danger:hover:not(:disabled) { background: var(--ddd-theme-error-dark); }
        .btn-sm {
          padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-xs);
        }
        .badge-done {
          background: var(--ddd-theme-success-light);
          color: var(--ddd-theme-success-text);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-md);
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-xs);
          display: inline-flex;
          align-items: center;
          gap: var(--ddd-spacing-1);
          margin-top: var(--ddd-spacing-2);
        }
        .badge-pending {
          background: var(--ddd-theme-warning-light);
          color: var(--ddd-theme-warning-text);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-md);
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-xs);
          display: inline-flex;
          align-items: center;
          gap: var(--ddd-spacing-1);
          margin-top: var(--ddd-spacing-2);
        }
        .toast {
          position: fixed; bottom: var(--ddd-spacing-6); left: 50%;
          transform: translateX(-50%);
          background: var(--ddd-theme-default-text); color: var(--ddd-theme-on-primary);
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-full);
          box-shadow: var(--ddd-shadow-2);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
          z-index: 1000;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp { from { opacity: 0; transform: translateX(-50%) translateY(10px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
      `]}render(){return d`
      <section class="card" aria-labelledby="assignment-heading">
        <h3 id="assignment-heading">📝 ${this.assignmentTitle}</h3>
        <div class="meta">Formatif | ${this.t.assignmentTitle} | KD: ${this._kdMateriVal}</div>
        <p class="instruction">${this.assignmentInstruction}</p>
        <label class="sr-only" for="task-link">${this.t.placeholderLink}</label>
        <input
          id="task-link"
          type="url"
          placeholder="${this.t.placeholderLink}"
          .value="${this._assignmentLink}"
          @input="${t=>{this._assignmentLink=t.target.value}}"
          ?disabled="${this._assignmentSubmitted}"
          aria-label="${this.t.placeholderLink}"
        >
        <label class="sr-only" for="task-text">${this.t.placeholderTask}</label>
        <textarea
          id="task-text"
          .value="${this._assignmentText}"
          @input="${t=>{this._assignmentText=t.target.value}}"
          ?disabled="${this._assignmentSubmitted}"
          placeholder="${this.t.placeholderTask}"
          aria-label="${this.t.placeholderTask}"
        ></textarea>
        <div class="btn-group">
          ${this._assignmentSubmitted?d`
              <button class="btn btn-success btn-sm" disabled aria-label="${this.t.submitted}">✅ ${this.t.submitted}</button>
              <button class="btn btn-danger btn-sm" @click="${this._resetAssignment}" aria-label="${this.t.resetBtn}">🔄 ${this.t.resetBtn}</button>
            `:d`
              <button
                class="btn btn-success"
                ?disabled="${this._submitting}"
                @click="${this._submitAssignment}"
                aria-label="${this.t.submitBtn}"
              >
                ${this._submitting?`\u23F3 ${this.t.submitting}`:this.t.submitBtn}
              </button>
            `}
        </div>
        <div class="${this._assignmentSubmitted?"badge-done":"badge-pending"}" role="status" aria-live="polite">
          ${this._assignmentSubmitted?`\u2705 ${this.t.submitted}`:`\u26A0\uFE0F ${this.t.pending}`}
        </div>
      </section>
      ${this._toastMsg?d`<div class="toast">${this._toastMsg}</div>`:""}
    `}}globalThis.customElements.define(G.tag,G);class st extends U(N(L)){static get tag(){return"forum-component"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},kdMateri:{type:String,attribute:"kd-materi"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},forumTopic:{type:String,attribute:"forum-topic"},viewMode:{type:String,attribute:"view-mode"},hideDelete:{type:Boolean,attribute:"hide-delete",reflect:!0},_comments:{state:!0},_activeReplyId:{state:!0},_sortMode:{state:!0},_submitting:{state:!0},_loadingComments:{state:!0},_toastMsg:{state:!0}}}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Forum Component",description:"Komponen forum diskusi bertingkat terpisah",icon:"icons:forum",color:"purple",tags:["Education","Forum"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL (Activity)",inputMethod:"textfield"},{property:"forumApiUrl",title:"Forum API URL",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet / KD Materi",inputMethod:"textfield",default:"Pertemuan"},{property:"forumTopic",title:"Topik Forum",inputMethod:"textfield",default:"Forum Diskusi"},{property:"viewMode",title:"Mode Tampilan",inputMethod:"select",options:{student:"Siswa",lecturer:"Dosen"},default:"student"},{property:"hideDelete",title:"Sembunyikan Hapus",inputMethod:"boolean"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.kdMateri="",this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.forumTopic="Forum Diskusi",this.viewMode="student",this.hideDelete=!1,this._comments=[],this._activeReplyId=null,this._sortMode="best",this._submitting=!1,this._loadingComments=!1,this._toastMsg="",this.t={...this.t,forumTitle:"Forum Diskusi",postComment:"Post Comment",posting:"Posting...",reply:"Balas",deleteBtn:"Hapus",noComments:"Belum ada komentar. Mulai diskusi!",sortBest:"Terbaik",sortNewest:"Terbaru",sortOldest:"Terlama",placeholderComment:"Tulis komentar...",placeholderReply:"Tulis balasan...",confirmDelete:"Hapus komentar ini?",activityForum:"Aktivitas forum tercatat",justNow:"Baru saja",minutesAgo:"menit lalu",hoursAgo:"jam lalu",daysAgo:"hari lalu"}}get _kdMateriVal(){return this.kdMateri||this.sheetName||"Pertemuan"}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[st.tag]&&(t.elementList[st.tag]=st.haxProperties)}this._authHandler=this._onUserLogin.bind(this),globalThis.addEventListener("quiz-user-login",this._authHandler),globalThis.addEventListener("quiz-user-session-changed",this._handleSessionChanged),this._loadForumComments()}disconnectedCallback(){this._authHandler&&globalThis.removeEventListener("quiz-user-login",this._authHandler),globalThis.removeEventListener("quiz-user-session-changed",this._handleSessionChanged),super.disconnectedCallback()}_onUserLogin(t){t.detail&&(t.detail.studentId&&(this.studentId=t.detail.studentId),t.detail.nama&&(this.studentName=t.detail.nama),t.detail.nis&&(this.studentNis=t.detail.nis),t.detail.absen&&(this.studentAbsen=t.detail.absen),t.detail.kelas&&(this.studentKelas=t.detail.kelas))}_handleSessionChanged(t){const e=t?.detail;e?.studentId?(this.studentId=e.studentId,this.studentName=e.nama,this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||""):(this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="")}async _loadForumComments(){const t=this.forumApiUrl||this.appsScriptUrl;if(t){this._loadingComments=!0;try{const e=new URLSearchParams({action:"getForumComments",kdMateri:this._kdMateriVal}),i=await(await fetch(`${t}?${e.toString()}`,{redirect:"follow"})).json();i.status==="ok"&&i.comments&&(this._comments=this._buildThread(i.comments))}catch(e){console.error("[forum-component] Failed to load forum:",e)}this._loadingComments=!1}}_buildThread(t){const e={},i=[];return t.forEach(a=>{e[a.id]={...a,replies:[]}}),t.forEach(a=>{a.parentId&&e[a.parentId]?e[a.parentId].replies.push(e[a.id]):e[a.id]&&i.push(e[a.id])}),i}_getSorted(){const t=[...this._comments];return this._sortMode==="newest"?t.sort((e,i)=>new Date(i.time)-new Date(e.time)):this._sortMode==="oldest"?t.sort((e,i)=>new Date(e.time)-new Date(i.time)):t.sort((e,i)=>(i.likes||0)-(e.likes||0)),t}_setSort(t){this._sortMode=t,this._comments=[...this._comments]}async _submitMainComment(){if(this._submitting)return;const t=this.shadowRoot.querySelector("#main-input");if(!t)return;const e=t.value.trim();if(!e)return;this._submitting=!0;const i=this.forumApiUrl||this.appsScriptUrl,a={action:"saveForumComment",id:Date.now(),parentId:null,user:this.studentName||"Siswa",studentId:this.studentId||"",text:e,sheet:this.sheetName,kdMateri:this._kdMateriVal,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||""};try{const s=await(await fetch(i,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(a)})).json();s.status==="ok"&&s.data&&(this._comments=[...this._comments,{...s.data,replies:[]}]),t.value=""}catch(s){console.error("[forum-component] Submit failed:",s)}this._submitting=!1,this._sendActivity("discussion",`Forum: ${e.substring(0,50)}`)}async _submitReply(t){if(this._submitting)return;const e=this.shadowRoot.querySelector(`#reply-${t}`);if(!e)return;const i=e.value.trim();if(!i)return;this._submitting=!0;const a=this.forumApiUrl||this.appsScriptUrl,s={action:"saveForumComment",id:Date.now(),parentId:t,user:this.studentName||"Siswa",studentId:this.studentId||"",text:i,sheet:this.sheetName,kdMateri:this._kdMateriVal,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||""};try{const o=await(await fetch(a,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(s)})).json();o.status==="ok"&&o.data&&(this._comments=this._comments.map(l=>l.id===t?{...l,replies:[...l.replies,{...o.data,replies:[]}]}:l)),this._activeReplyId=null}catch(o){console.error("[forum-component] Reply failed:",o)}this._submitting=!1,this._sendActivity("discussion",`Reply: ${i.substring(0,50)}`)}async _deleteComment(t){if(!globalThis.confirm(this.t.confirmDelete))return;const e=this.forumApiUrl||this.appsScriptUrl;if(e)try{await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"deleteForumComment",id:t})});const i=new Set([t]);this._comments.forEach(a=>{a.id===t&&a.replies&&a.replies.forEach(s=>i.add(s.id))}),this._comments=this._comments.filter(a=>!i.has(a.id)).map(a=>({...a,replies:(a.replies||[]).filter(s=>!i.has(s.id))}))}catch(i){console.error("[forum-component] Delete failed:",i)}}_findAndUpdateComment(t,e,i){return t.map(a=>a.id===e?i(a):a.replies&&a.replies.length>0?{...a,replies:this._findAndUpdateComment(a.replies,e,i)}:a)}_handleLike(t){this._comments=this._findAndUpdateComment(this._comments,t,e=>{const i=!e.isLiked;return{...e,isLiked:i,likes:i?(e.likes||0)+1:(e.likes||0)-1}}),this._syncLike(t)}_syncLike(t){const e=this.forumApiUrl||this.appsScriptUrl;if(!e)return;const i=this._comments.find(a=>a.id===t);i&&fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"saveForumComment",id:t,actionType:"like",isLiked:i.isLiked})}).catch(()=>{})}_toggleReply(t){this._activeReplyId=this._activeReplyId===t?null:t}_sendActivity(t,e){globalThis.dispatchEvent(new CustomEvent("discussion-saved",{detail:{title:this.forumTopic,studentId:this.studentId,kdMateri:this._kdMateriVal},bubbles:!0,composed:!0}));const i=this.appsScriptUrl;if(i&&this.studentId){const a=new URLSearchParams({action:"activity",activityType:t,description:e,name:this.studentName,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",sheet:this.sheetName,kdMateri:this._kdMateriVal,timestamp:new Date().toISOString()});fetch(`${i}?${a.toString()}`,{redirect:"follow"}).catch(()=>{})}}_timeAgo(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return this.t.justNow;if(i<60)return`${i} ${this.t.minutesAgo}`;const a=Math.floor(i/60);return a<24?`${a} ${this.t.hoursAgo}`:`${Math.floor(a/24)} ${this.t.daysAgo}`}_showToast(t){this._toastMsg=t,setTimeout(()=>{this._toastMsg===t&&(this._toastMsg="")},3e3)}static get styles(){return[super.styles,D`
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
          color: var(--ddd-theme-default-text);
        }
        .card {
          background: var(--ddd-theme-default-surface);
          border-radius: var(--ddd-radius-lg);
          box-shadow: var(--ddd-shadow-1);
          padding: var(--ddd-spacing-5);
          margin-bottom: var(--ddd-spacing-5);
          border: 1px solid var(--ddd-theme-polaris-border);
        }
        h3 {
          margin: 0 0 var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-m);
          color: var(--ddd-theme-default-text);
          display: flex; align-items: center; gap: var(--ddd-spacing-2);
        }
        .meta {
          font-size: var(--ddd-font-size-xs);
          color: var(--ddd-theme-secondary);
          background: var(--ddd-theme-polaris-surface-hover);
          padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-full);
          display: inline-block;
          margin-bottom: var(--ddd-spacing-3);
        }
        .input-container {
          display: flex; gap: var(--ddd-spacing-3); margin-bottom: var(--ddd-spacing-4);
        }
        .avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary);
          display: flex; align-items: center; justify-content: center;
          font-weight: var(--ddd-font-weight-bold); font-size: var(--ddd-font-size-l);
          flex-shrink: 0;
        }
        .input-wrapper { flex: 1; display: flex; flex-direction: column; gap: var(--ddd-spacing-2); }
        .input-box {
          width: 100%; padding: var(--ddd-spacing-3); border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md); font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-s); min-height: 60px; resize: vertical;
          background: var(--ddd-theme-default-surface); color: var(--ddd-theme-default-text);
        }
        .input-box:focus { outline: none; border-color: var(--ddd-theme-primary); box-shadow: 0 0 0 2px var(--ddd-theme-polaris-focus-ring); }
        .btn-submit {
          align-self: flex-end; padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          background: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary);
          /* border: none — No DDD token; button reset requires explicit removal of default browser border */
          border: none; border-radius: var(--ddd-radius-md); font-weight: var(--ddd-font-weight-bold); cursor: pointer;
        }
        .btn-submit:hover:not(:disabled) { background: var(--ddd-theme-accent); }
        .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .sort-bar { display: flex; gap: var(--ddd-spacing-2); margin-bottom: var(--ddd-spacing-4); }
        .sort-btn {
          padding: var(--ddd-spacing-1) var(--ddd-spacing-3); border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-full); background: var(--ddd-theme-default-surface);
          font-size: var(--ddd-font-size-xs); cursor: pointer;
        }
        .sort-btn--active { background: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary); border-color: var(--ddd-theme-primary); }
        .comments-list { display: flex; flex-direction: column; gap: var(--ddd-spacing-3); }
        .comment-card {
          background: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-3);
        }
        .comment-header { display: flex; align-items: center; gap: var(--ddd-spacing-2); margin-bottom: var(--ddd-spacing-1); }
        .comment-avatar { width: 32px; height: 32px; /* border-radius: 50% — No DDD token; DDD only has --ddd-radius-full for pill shapes, not perfect circle for square elements */ border-radius: 50%; background: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary); display: flex; align-items: center; justify-content: center; font-weight: var(--ddd-font-weight-bold); font-size: var(--ddd-font-size-s); }
        .comment-meta { display: flex; flex-direction: column; gap: 2px; }
        .comment-user { font-weight: var(--ddd-font-weight-bold); font-size: var(--ddd-font-size-s); }
        .comment-time { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); }
        .comment-text { font-size: var(--ddd-font-size-s); line-height: 1.5; margin-bottom: var(--ddd-spacing-2); }
        .comment-actions { display: flex; gap: var(--ddd-spacing-2); }
        .action-btn { padding: var(--ddd-spacing-1) var(--ddd-spacing-2); font-size: var(--ddd-font-size-xs); /* border: none — No DDD token; button reset */ border: none; background: var(--ddd-theme-polaris-surface-hover); border-radius: var(--ddd-radius-sm); cursor: pointer; }
        .action-btn:hover { background: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary); }
        .reply-form { margin-top: var(--ddd-spacing-3); padding-left: var(--ddd-spacing-6); border-left: 2px solid var(--ddd-theme-polaris-border); }
        .reply-input { width: 100%; padding: var(--ddd-spacing-2); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); font-family: var(--ddd-font-primary); margin-bottom: var(--ddd-spacing-2); }
        .replies-list { margin-top: var(--ddd-spacing-3); padding-left: var(--ddd-spacing-6); border-left: 2px solid var(--ddd-theme-polaris-border); }
        .toast {
          position: fixed; bottom: var(--ddd-spacing-6); left: 50%;
          transform: translateX(-50%);
          background: var(--ddd-theme-default-text); color: var(--ddd-theme-on-primary);
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-full);
          box-shadow: var(--ddd-shadow-2);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
          z-index: 1000;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp { from { opacity: 0; transform: translateX(-50%) translateY(10px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
      `]}render(){const t=this._getSorted();return d`
      <section class="card" aria-labelledby="forum-heading">
        <h3 id="forum-heading">💬 ${this.forumTopic}</h3>
        <div class="meta">KD Materi: ${this._kdMateriVal}</div>

        <div class="input-container">
          <div class="avatar" aria-hidden="true">👤</div>
          <div class="input-wrapper">
            <label class="sr-only" for="main-input">${this.t.placeholderComment}</label>
            <textarea
              id="main-input"
              class="input-box"
              rows="2"
              placeholder="${this.t.placeholderComment}"
              aria-label="${this.t.placeholderComment}"
            ></textarea>
            <button
              class="btn-submit"
              ?disabled="${this._submitting}"
              @click="${this._submitMainComment}"
              aria-label="${this.t.postComment}"
            >
              ${this._submitting?this.t.posting:this.t.postComment}
            </button>
          </div>
        </div>

        <div class="sort-bar" role="tablist" aria-label="Sort comments">
          <button
            class="sort-btn ${this._sortMode==="best"?"sort-btn--active":""}"
            @click="${()=>this._setSort("best")}"
            role="tab"
            aria-selected="${this._sortMode==="best"}"
          >${this.t.sortBest}</button>
          <button
            class="sort-btn ${this._sortMode==="newest"?"sort-btn--active":""}"
            @click="${()=>this._setSort("newest")}"
            role="tab"
            aria-selected="${this._sortMode==="newest"}"
          >${this.t.sortNewest}</button>
          <button
            class="sort-btn ${this._sortMode==="oldest"?"sort-btn--active":""}"
            @click="${()=>this._setSort("oldest")}"
            role="tab"
            aria-selected="${this._sortMode==="oldest"}"
          >${this.t.sortOldest}</button>
        </div>

        <div class="comments-list">
          ${this._loadingComments?d`<div style="text-align:center;padding:var(--ddd-spacing-6);color:var(--ddd-theme-secondary);">Memuat komentar...</div>`:t.length===0?d`<div style="text-align:center;padding:var(--ddd-spacing-6);color:var(--ddd-theme-secondary);">${this.t.noComments}</div>`:t.map(e=>this._renderComment(e))}
        </div>
      </section>
      ${this._toastMsg?d`<div class="toast">${this._toastMsg}</div>`:""}
    `}_renderComment(t){const e=t.isLiked;return d`
      <div class="comment-card" style="margin-bottom:var(--ddd-spacing-3);">
        <div class="comment-header">
          <div class="comment-avatar">${(t.user||"?")[0].toUpperCase()}</div>
          <div class="comment-meta">
            <span class="comment-user">${t.user}${t.kelas?d` <small>(${t.kelas})</small>`:""}</span>
            <span class="comment-time">${this._timeAgo(t.time)}</span>
          </div>
        </div>
        <div class="comment-text">${t.text}</div>
        <div class="comment-actions">
          <button class="action-btn" @click="${()=>this._handleLike(t.id)}" aria-label="${e?"Unlike":"Like"}">
            ${e?"\u2764\uFE0F":"\u{1F90D}"} ${t.likes||0}
          </button>
          <button class="action-btn" @click="${()=>this._toggleReply(t.id)}">${this.t.reply}</button>
          ${!this.hideDelete&&this.viewMode==="lecturer"?d`<button class="action-btn" @click="${()=>this._deleteComment(t.id)}" style="color:var(--ddd-theme-error);">${this.t.deleteBtn}</button>`:""}
        </div>

        ${this._activeReplyId===t.id?d`
            <div class="reply-form">
              <textarea
                id="reply-${t.id}"
                class="reply-input"
                rows="2"
                placeholder="${this.t.placeholderReply}"
                aria-label="${this.t.placeholderReply}"
              ></textarea>
              <button class="btn btn-primary btn-sm" @click="${()=>this._submitReply(t.id)}" ?disabled="${this._submitting}">
                ${this._submitting?"Mengirim...":"Kirim Balasan"}
              </button>
            </div>
          `:""}

        ${t.replies&&t.replies.length>0?d`
            <div class="replies-list">
              ${t.replies.map(i=>this._renderComment(i))}
            </div>
          `:""}
      </div>
    `}}globalThis.customElements.define(st.tag,st);class rt extends U(N(L)){static get tag(){return"lecturer-console"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},quizSelector:{type:String,attribute:"quiz-selector"},kategori:{type:String,attribute:"kategori"},roster:{type:Array},loading:{type:Boolean},generating:{type:Boolean},message:{type:String},messageType:{type:String,attribute:"message-type"},weights:{type:Object},manualUts:{type:Object},manualUas:{type:Object}}}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Lecturer Console",description:"Konsol penilaian untuk guru (rapor A3)",icon:"icons:assignment-turned-in",color:"blue",tags:["Education","Assessment"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}constructor(){super(),this.appsScriptUrl="",this.quizSelector="#quiz",this.kategori="campur",this.roster=[],this.loading=!1,this.generating=!1,this.message="",this.messageType="info",this.weights={attendanceWeight:1,ulanganHarianWeight:3,utsWeight:2,uasWeight:2,attitudeWeight:0,skillWeight:0},this.manualUts={},this.manualUas={};try{const t=JSON.parse(localStorage.getItem("a3-report-weights"));t&&typeof t=="object"&&(this.weights={...this.weights,...t})}catch{}}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[rt.tag]&&(t.elementList[rt.tag]=rt.haxProperties)}this.loadRoster()}_setMessage(t,e="info"){this.message=t,this.messageType=e}_weightsUpdated(){try{localStorage.setItem("a3-report-weights",JSON.stringify(this.weights))}catch{}}async _fetch(t,e){if(!this.appsScriptUrl)return this._setMessage("Apps Script URL belum dikonfigurasi di halaman dashboard.","error"),null;try{const i=await(await fetch(this.appsScriptUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:t,...e})})).json();return i&&i.status==="error"?(this._setMessage(i.message||"Terjadi kesalahan di server.","error"),null):i}catch(i){return this._setMessage("Gagal terhubung ke server: "+i.message,"error"),null}}async loadRoster(){this.loading=!0,this._setMessage("");const t=await this._fetch("getStudentRoster");t&&t.roster?(this.roster=t.roster,t.roster.forEach(e=>{e.uts&&(this.manualUts[e.studentId]=e.uts),e.uas&&(this.manualUas[e.studentId]=e.uas)}),this._setMessage("Roster dimuat ("+t.total+" siswa).","ok")):this.message||this._setMessage("Roster kosong atau belum ada siswa terdaftar.","warn"),this.loading=!1,this.requestUpdate()}async generateReport(){this.generating=!0,this._setMessage("Menghitung rapor...");const t=await this._fetch("generateReport",{...this.weights});t&&t.status==="ok"&&(this._setMessage(t.message+" Total "+t.totalSiswa+" siswa.","ok"),await this.loadRoster()),this.generating=!1}_getGenerator(){return this._gen||(this._gen=document.createElement("question-generator"),this.shadowRoot.appendChild(this._gen)),this._gen.appsScriptUrl=this.appsScriptUrl,this._gen.quizSelector=this.quizSelector,this._gen.kategori=this.kategori,this._gen}async generateFromTemplate(){const t=this._getGenerator(),e=await t.generateFromTemplate();return e&&e.length?this._setMessage(`Soal template lokal dimuat: ${e.length} soal (${this.kategori}).`,"ok"):this._setMessage(t.message||"Gagal memuat soal template.","error"),e}async generateFromBankSoal(){const t=this._getGenerator(),e=await t.generateFromBankSoal();return e&&e.length?this._setMessage(`Soal dari Bank Soal dimuat: ${e.length} soal (${this.kategori}).`,"ok"):this._setMessage(t.message||"Gagal memuat soal dari Bank Soal.","error"),e}async saveManualScore(t,e){const i=e==="uts"?this.manualUts[t]:this.manualUas[t],a=parseInt(i);if(isNaN(a)){this._setMessage("Skor "+e.toUpperCase()+" harus berupa angka 0-100.","warn");return}this._setMessage("Menyimpan nilai "+e.toUpperCase()+" "+t+"...");const s=await this._fetch("setManualScore",{studentId:t,kategori:e,skor:a});s&&s.status==="ok"&&(this._setMessage(s.message,"ok"),await this.loadRoster())}_onWeightChange(t){const e=t.target.getAttribute("name"),i=Math.max(0,parseInt(t.target.value)||0);this.weights={...this.weights,[e]:i},this._weightsUpdated()}static get styles(){return D`
      :host {
        display: block;
        font-family: var(--ddd-font-primary);
        color: var(--ddd-theme-default-text);
      }
      .console-card {
        background: var(--ddd-theme-default-surface);
        border-radius: var(--ddd-radius-lg);
        padding: var(--ddd-spacing-6);
        border: 1px solid var(--ddd-theme-polaris-border);
        box-shadow: var(--ddd-shadow-1);
      }
      .header-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: var(--ddd-spacing-3);
        margin-bottom: var(--ddd-spacing-5);
      }
      h2 {
        margin: 0;
        font-size: var(--ddd-font-size-xl);
        color: var(--ddd-theme-primary);
      }
      .actions {
        display: flex;
        gap: var(--ddd-spacing-2);
        flex-wrap: wrap;
      }
      button {
        font-family: var(--ddd-font-primary);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-medium);
        border: 1px solid var(--ddd-theme-polaris-border);
        border-radius: var(--ddd-radius-sm);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        cursor: pointer;
        background: var(--ddd-theme-polaris-surface);
        color: var(--ddd-theme-default-text);
        transition: background 0.15s;
      }
      button:hover {
        background: var(--ddd-theme-polaris-surface-hover);
      }
      button.primary {
        background: var(--ddd-theme-primary);
        border-color: var(--ddd-theme-primary);
        color: white;
      }
      button.primary:hover {
        background: var(--ddd-theme-primary-hover);
      }
      button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .message {
        padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-sm);
        margin-bottom: var(--ddd-spacing-4);
        font-size: var(--ddd-font-size-s);
      }
      .message.ok {
        background: color-mix(in srgb, var(--ddd-theme-success) 15%, transparent);
        color: var(--ddd-theme-success);
      }
      .message.error {
        background: color-mix(in srgb, var(--ddd-theme-error) 15%, transparent);
        color: var(--ddd-theme-error);
      }
      .message.warn {
        background: color-mix(in srgb, var(--ddd-theme-warning) 15%, transparent);
        color: var(--ddd-theme-warning);
      }
      .message.info {
        background: var(--ddd-theme-polaris-surface);
        color: var(--ddd-theme-secondary);
      }
      .weights-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: var(--ddd-spacing-3);
        margin-bottom: var(--ddd-spacing-5);
      }
      .weight-item {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-1);
        background: var(--ddd-theme-polaris-surface);
        border: 1px solid var(--ddd-theme-polaris-border);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-3);
      }
      .weight-item label {
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-secondary);
        font-weight: var(--ddd-font-weight-medium);
      }
      .weight-item input {
        font-family: var(--ddd-font-primary);
        font-size: var(--ddd-font-size-m);
        width: 100%;
        box-sizing: border-box;
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
        border: 1px solid var(--ddd-theme-polaris-border);
        border-radius: var(--ddd-radius-sm);
        background: var(--ddd-theme-default-surface);
        color: var(--ddd-theme-default-text);
      }
      .table-wrap {
        overflow-x: auto;
        border: 1px solid var(--ddd-theme-polaris-border);
        border-radius: var(--ddd-radius-md);
      }
      table {
        width: 100%;
        border-collapse: collapse;
        font-size: var(--ddd-font-size-s);
      }
      th,
      td {
        padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
        text-align: left;
        border-bottom: 1px solid var(--ddd-theme-polaris-border);
        white-space: nowrap;
      }
      th {
        background: var(--ddd-theme-polaris-surface);
        color: var(--ddd-theme-secondary);
        font-weight: var(--ddd-font-weight-medium);
        position: sticky;
        top: 0;
      }
      tr:last-child td {
        border-bottom: none;
      }
      td input {
        font-family: var(--ddd-font-primary);
        font-size: var(--ddd-font-size-s);
        width: 60px;
        padding: var(--ddd-spacing-1);
        border: 1px solid var(--ddd-theme-polaris-border);
        border-radius: var(--ddd-radius-sm);
        background: var(--ddd-theme-default-surface);
        color: var(--ddd-theme-default-text);
      }
      .empty {
        text-align: center;
        color: var(--ddd-theme-secondary);
        padding: var(--ddd-spacing-6);
      }
      @media (max-width: 640px) {
        .console-card {
          padding: var(--ddd-spacing-4);
        }
        th,
        td {
          padding: var(--ddd-spacing-2);
        }
      }
    `}render(){return d`
      <div class="console-card">
        <div class="header-row">
          <h2>🛠️ Console Dosen</h2>
          <div class="actions">
            <button @click="${this.loadRoster}" ?disabled="${this.loading}">${this.loading?"Memuat...":"\u21BB Muat Ulang Roster"}</button>
            <button class="primary" @click="${this.generateReport}" ?disabled="${this.generating}">${this.generating?"Menghitung...":"\u{1F4CA} Generate Laporan Rapor"}</button>
            <button @click="${this.generateFromTemplate}" ?disabled="${this.loading}">✨ Generate Soal Template Lokal</button>
            <button @click="${this.generateFromBankSoal}" ?disabled="${this.loading}">🗂️ Generate Soal dari Bank Soal</button>
          </div>
        </div>
        ${this.message?d`<div class="message ${this.messageType}">${this.message}</div>`:""}
        <div class="weights-grid">
          <div class="weight-item">
            <label for="w-attendance">Bobot Kehadiran</label>
            <input id="w-attendance" name="attendanceWeight" type="number" min="0" max="10" .value="${this.weights.attendanceWeight}" @input="${this._onWeightChange}" />
          </div>
          <div class="weight-item">
            <label for="w-uh">Bobot Ulangan Harian</label>
            <input id="w-uh" name="ulanganHarianWeight" type="number" min="0" max="10" .value="${this.weights.ulanganHarianWeight}" @input="${this._onWeightChange}" />
          </div>
          <div class="weight-item">
            <label for="w-uts">Bobot UTS</label>
            <input id="w-uts" name="utsWeight" type="number" min="0" max="10" .value="${this.weights.utsWeight}" @input="${this._onWeightChange}" />
          </div>
          <div class="weight-item">
            <label for="w-uas">Bobot UAS</label>
            <input id="w-uas" name="uasWeight" type="number" min="0" max="10" .value="${this.weights.uasWeight}" @input="${this._onWeightChange}" />
          </div>
          <div class="weight-item">
            <label for="w-sikap">Bobot Sikap</label>
            <input id="w-sikap" name="attitudeWeight" type="number" min="0" max="10" .value="${this.weights.attitudeWeight}" @input="${this._onWeightChange}" />
          </div>
          <div class="weight-item">
            <label for="w-keterampilan">Bobot Keterampilan</label>
            <input id="w-keterampilan" name="skillWeight" type="number" min="0" max="10" .value="${this.weights.skillWeight}" @input="${this._onWeightChange}" />
          </div>
        </div>
        <div class="table-wrap">
          ${this.roster.length===0?d`<div class="empty">${this.loading?"Memuat roster...":"Belum ada data siswa. Pastikan sheet Users terisi."}</div>`:d`
                <table>
                  <thead>
                    <tr>
                      <th>Nama</th>
                      <th>NIS</th>
                      <th>Aktivitas</th>
                      <th>Kehadiran</th>
                      <th>UH</th>
                      <th>UTS Manual</th>
                      <th>UAS Manual</th>
                      <th>Nilai Akhir</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${this.roster.map(t=>d`
                        <tr>
                          <td><strong>${t.nama}</strong></td>
                          <td>${t.nis}</td>
                          <td>${t.emoji} ${t.totalActivities}</td>
                          <td>${t.kehadiran}</td>
                          <td>${t.uh}</td>
                          <td>
                            <input type="number" min="0" max="100" .value="${this.manualUts[t.studentId]||""}" @change="${e=>{this.manualUts={...this.manualUts,[t.studentId]:e.target.value},this.saveManualScore(t.studentId,"uts")}}" />
                          </td>
                          <td>
                            <input type="number" min="0" max="100" .value="${this.manualUas[t.studentId]||""}" @change="${e=>{this.manualUas={...this.manualUas,[t.studentId]:e.target.value},this.saveManualScore(t.studentId,"uas")}}" />
                          </td>
                          <td>${t.nilaiAkhir}</td>
                          <td>${t.grade}</td>
                        </tr>
                      `)}
                  </tbody>
                </table>
              `}
        </div>
      </div>
    `}}globalThis.customElements.define(rt.tag,rt);const Tt=[{type:"mc",question:"Teks: 'Hujan asam terjadi ketika gas SO2 dan NOx dari pabrik bereaksi dengan uap air di atmosfer.' Pertanyaan: Dampak utama yang langsung ditimbulkan hujan asam adalah...",choices:["Tanah menjadi lebih subur","Air danau menjadi lebih asam sehingga biota terganggu","Suhu udara meningkat drastis","Angin bertiup lebih kencang"],correctIndex:1,points:1},{type:"mc",question:"Teks: 'Setelah membaca dua paragraf pertama, pembaca mengetahui bahwa tokoh utama merasa cemas sebelum ujian.' Simpulan paling tepat dari teks tersebut adalah...",choices:["Tokoh utama selalu gagal dalam ujian","Tokoh utama mengalami kecemasan menjelang ujian","Ujian membuat tokoh utama bahagia","Tokoh utama tidak pernah belajar"],correctIndex:1,points:1},{type:"mc",question:`Teks: 'Kata "konvensional" dalam kalimat berikut paling dekat maknanya dengan...' Kalimat: "Metode konvensional sudah jarang digunakan di era digital."`,choices:["Modern","Tradisional","Canggih","Otomatis"],correctIndex:1,points:1},{type:"pgk",question:"Tentukan Benar atau Salah untuk setiap pernyataan tentang teks informasi:",statements:[{text:"Ide pokok biasanya terletak di kalimat utama paragraf.",answer:!0},{text:"Kata tanya 'mengapa' digunakan untuk menanyakan tempat.",answer:!1},{text:"Kesimpulan harus didukung oleh fakta dalam teks.",answer:!0}],points:3}],zt=[{type:"mc",question:"Pak Budi membeli 3 lusin pensil. Setengahnya ia bagikan ke siswa. Berapa pensil yang dibagikan?",choices:["12","18","24","36"],correctIndex:1,points:1},{type:"mc",question:"Sebuah kelas memiliki 30 siswa. 40% di antaranya laki-laki. Banyak siswa perempuan adalah...",choices:["12 siswa","15 siswa","18 siswa","20 siswa"],correctIndex:2,points:1},{type:"matching",question:"Jodohkan bangun datar dengan banyak sisinya:",leftItems:["Segitiga","Persegi","Lingkaran"],rightItems:["3 sisi","4 sisi","Tanpa sisi"],correctPairs:{0:0,1:1,2:2},points:3},{type:"shortAnswer",question:"Berapakah 15% dari 200?",acceptedAnswers:["30","tiga puluh"],points:1},{type:"shortAnswer",question:"Tentukan KPK dari 4 dan 6!",acceptedAnswers:["12"],points:1},{type:"pgk",question:"Tentukan Benar atau Salah untuk setiap pernyataan:",statements:[{text:"7 adalah bilangan prima.",answer:!0},{text:"Semua bilangan genap habis dibagi 4.",answer:!1},{text:"Hasil 9 \xD7 8 = 72.",answer:!0}],points:3},{type:"mc",question:"Sebuah bak mandi berisi 240 liter air. Setiap menit air berkurang 8 liter. Berapa menit hingga bak kosong?",choices:["20 menit","25 menit","30 menit","40 menit"],correctIndex:2,points:1}],te={type:"mc",question:"Pilih DUA pernyataan yang benar tentang kubus:",choices:["Memiliki 6 sisi berbentuk persegi","Memiliki 8 titik sudut","Memiliki 10 rusuk","Semua sisinya berbentuk segitiga"],correctAnswers:[0,1],points:2};class dt extends U(N(L)){static get tag(){return"question-generator"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},kategori:{type:String,attribute:"kategori"},quizSelector:{type:String,attribute:"quiz-selector"},loading:{type:Boolean},message:{type:String},messageType:{type:String,attribute:"message-type"}}}get kdMateri(){const t=this._getQuizElement();return t?.sheetName||t?.kdMateri||"Pertemuan"}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Question Generator",description:"Generator soal AKM campuran (template lokal & bank soal)",icon:"icons:playlist-add",color:"teal",tags:["Education","Assessment","Content"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield"},{property:"kategori",title:"Kategori Soal",inputMethod:"select",options:{campur:"Campuran (Literasi + Numerasi)",literasi:"Literasi",numerasi:"Numerasi"}},{property:"quizSelector",title:"Selektor Target Kuis",description:"CSS selector elemen explode-quiz tempat soal diisi (mis. #quiz)",inputMethod:"textfield"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_screen"]}}}constructor(){super(),this.appsScriptUrl="",this.kategori="campur",this.quizSelector="#quiz",this.loading=!1,this.message="",this.messageType="info",this.t={title:"Generator Soal AKM",templateBtn:"\u2728 Generate Soal Template Lokal",bankBtn:"\u{1F5C2}\uFE0F Generate Soal dari Bank Soal",ok:"ok",noQuiz:"Elemen kuis tidak ditemukan (pastikan selector benar).",noUrl:"Apps Script URL belum diisi.",bankEmpty:"Bank soal kosong untuk kategori tersebut.",bankError:"Gagal mengambil soal dari bank soal."}}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[dt.tag]&&(t.elementList[dt.tag]=dt.haxProperties)}}_setMessage(t,e="info"){this.message=t,this.messageType=e}_getTemplateBank(){return this.kategori==="literasi"?[...Tt]:this.kategori==="numerasi"?[...zt]:[...Tt,...zt]}_shuffleArray(t){const e=[...t];for(let i=e.length-1;i>0;i--){const a=Math.floor(Math.random()*(i+1));[e[i],e[a]]=[e[a],e[i]]}return e}async _fetch(t,e){if(!this.appsScriptUrl)return this._setMessage(this.t.noUrl,"error"),null;try{return await(await fetch(this.appsScriptUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:t,...e})})).json()}catch{return this._setMessage(this.t.bankError,"error"),null}}_getQuizElement(){let t=this.getRootNode();for(;t;){const a=t.querySelector?t.querySelector(this.quizSelector):null;if(a)return a;t=t.host?t.host.getRootNode():null}const e=document.querySelector(this.quizSelector);if(e)return e;const i=document.querySelectorAll("explode-quiz");return i.length>0?i[0]:null}applyToQuiz(t){const e=this._getQuizElement();return!e||typeof e.loadQuestions!="function"?(this._setMessage(this.t.noQuiz,"error"),!1):(e.loadQuestions(t),this.dispatchEvent(new CustomEvent("questions-generated",{bubbles:!0,composed:!0,detail:{questions:t,source:"template",kategori:this.kategori}})),!0)}async generateFromTemplate(){this.loading=!0,this._setMessage("");let t=this._getTemplateBank();return this.kategori==="campur"?(t=this._shuffleArray(t),t.push(te),t=this._shuffleArray(t)):t=this._shuffleArray(t),await new Promise(e=>setTimeout(e,50)),this.loading=!1,this.applyToQuiz(t)&&this._setMessage(`Soal template lokal dimuat: ${t.length} soal (${this.kategori}).`,"ok"),t}async generateFromBankSoal(){this.loading=!0,this._setMessage("");const t=await this._fetch("getBankSoal",{kategori:this.kategori});if(this.loading=!1,!t||t.status!=="ok"||!Array.isArray(t.questions))return this._setMessage(t?.message||this.t.bankEmpty,"error"),[];const e=t.questions.map(i=>this._mapBankRow(i)).filter(Boolean);return e.length===0?(this._setMessage(this.t.bankEmpty,"error"),[]):(this.applyToQuiz(e)&&this._setMessage(`Soal dari Bank Soal dimuat: ${e.length} soal (${this.kategori}).`,"ok"),e)}_mapBankRow(t){if(!t||typeof t!="object")return null;if(t.type&&t.question)return t;if(typeof t.Detail=="string"||typeof t.detail=="string"){const e=typeof t.Detail=="string"?t.Detail:t.detail,i={type:t.Tipe||t.tipe||"mc",question:t.Soal||t.question,points:t.Poin||t.points||1};(t.Gambar||t.image)&&(i.image=t.Gambar||t.image);try{Object.assign(i,JSON.parse(e))}catch{return null}return i}if(t.Soal||t.question){const e={type:(t.Tipe||t.tipe||"mc").toLowerCase(),question:t.Soal||t.question,points:t.Poin||t.points||1};(t.Gambar||t.image)&&(e.image=t.Gambar||t.image);const i=t.Detail||t.detail;return typeof i=="object"&&i&&Object.assign(e,i),e}return null}render(){return d`
      <div class="gen-wrap">
        <h3 class="gen-title">${this.t.title}</h3>
        <div class="gen-actions">
          <button class="gen-btn" @click="${this.generateFromTemplate}" ?disabled="${this.loading}">
            ${this.t.templateBtn}
          </button>
          <button class="gen-btn primary" @click="${this.generateFromBankSoal}" ?disabled="${this.loading}">
            ${this.t.bankBtn}
          </button>
        </div>
        ${this.message?d`<div class="gen-message ${this.messageType}">${this.message}</div>`:""}
      </div>
    `}static get styles(){return[super.styles,D`
        :host {
          display: block;
        }
        .gen-wrap {
          font-family: var(--ddd-font-primary, inherit);
          padding: var(--ddd-spacing-4, 1rem);
        }
        .gen-title {
          margin: 0 0 var(--ddd-spacing-2, 0.5rem);
          font-size: 1.1rem;
        }
        .gen-actions {
          display: flex;
          gap: var(--ddd-spacing-2, 0.5rem);
          flex-wrap: wrap;
        }
        .gen-btn {
          cursor: pointer;
          border: 1px solid var(--ddd-theme-default-beaverBlue, #123);
          border-radius: 8px;
          padding: 0.5rem 0.9rem;
          background: var(--ddd-theme-default-white, #fff);
          color: var(--ddd-theme-default-beaverBlue, #123);
        }
        .gen-btn.primary {
          background: var(--ddd-theme-default-beaverBlue, #123);
          color: #fff;
        }
        .gen-btn[disabled] {
          opacity: 0.6;
          cursor: wait;
        }
        .gen-message {
          margin-top: var(--ddd-spacing-2, 0.5rem);
          padding: 0.5rem 0.8rem;
          border-radius: 8px;
          font-size: 0.9rem;
        }
        .gen-message.ok {
          background: var(--ddd-theme-default-limestoneLight, #e8f5e9);
          color: var(--ddd-theme-default-forestGreen, #1b5e20);
        }
        .gen-message.error {
          background: var(--ddd-theme-default-sunnyLight, #fdecea);
          color: var(--ddd-theme-default-errorRed, #b71c1c);
        }
      `]}}customElements.define(dt.tag,dt);class nt extends U(N(L)){static get tag(){return"quiz-dashboard-lite2"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},kdMateri:{type:String,attribute:"kd-materi",reflect:!0},viewMode:{type:String,attribute:"view-mode"},quizTabHidden:{type:Boolean,attribute:"quiz-tab-hidden",reflect:!0},questions:{type:Array},_spreadsheetId:{state:!0},_activeTab:{state:!0},_successMsg:{state:!0},_errorMsg:{state:!0},_user:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.kdMateri="",this.viewMode="student",this.quizTabHidden=!1,this.questions=[],this._user=null,this._spreadsheetId="",this._activeTab=0,this._successMsg="",this._errorMsg="",this.t={...this.t,title:"Kuis Interaktif & Kehadiran",subtitle:"Sistem Belajar dan Latihan Kuis dengan Aktivitas Otomatis",tabQuiz:"\u{1F4DD} Ambil Kuis",tabAttendance:"\u{1F4C5} Kehadiran & Aktivitas",tabGuide:"\u{1F4D6} Panduan",tabNilai:"\u{1F4CA} Daftar Skor",welcome:"Selamat datang",dataRecorded:"Data kuis & aktivitas akan tercatat atas nama Anda"}}connectedCallback(){if(super.connectedCallback(),this._onUserLoginBound=this._onUserLogin.bind(this),this._onUserLogoutBound=this._onUserLogout.bind(this),globalThis.addEventListener("quiz-user-login",this._onUserLoginBound),globalThis.addEventListener("quiz-user-logout",this._onUserLogoutBound),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[nt.tag]&&(t.elementList[nt.tag]=nt.haxProperties)}}disconnectedCallback(){globalThis.removeEventListener("quiz-user-login",this._onUserLoginBound),globalThis.removeEventListener("quiz-user-logout",this._onUserLogoutBound),super.disconnectedCallback()}_onUserLogin(t){this._user=t.detail,this._successMsg=`${this.t.welcome}, ${this._user.nama}! ${this.t.dataRecorded}.`,setTimeout(()=>{this._successMsg=""},4e3)}_onUserLogout(){this._user=null,this._successMsg="Anda telah keluar.",setTimeout(()=>{this._successMsg=""},3e3)}_onQuizSaved(t){globalThis.dispatchEvent(new CustomEvent("quiz-saved",{detail:t.detail,bubbles:!0,composed:!0})),this._successMsg=`Skor ${t.detail.name} sebesar ${t.detail.score}% berhasil disimpan!`,setTimeout(()=>{this._successMsg=""},4e3)}_onQuizQuestionsChanged(t){const e=t&&t.detail&&t.detail.questions;if(Array.isArray(e)){this.questions=e;try{this.setAttribute("questions",JSON.stringify(e))}catch{}}}_onQuestionsGenerated(){this._activeTab=1}_simReading(){globalThis.dispatchEvent(new CustomEvent("reading-saved",{detail:{title:`Materi ${this.sheetName}`},bubbles:!0,composed:!0})),globalThis.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}static get styles(){return[super.styles,D`
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
        explode-quiz[hidden] {
          display: none !important;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--ddd-theme-polaris-border);
          padding-bottom: var(--ddd-spacing-4);
          margin-bottom: var(--ddd-spacing-6);
          flex-wrap: wrap;
          gap: var(--ddd-spacing-4);
        }
        .title-section h1 {
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          margin: 0 0 var(--ddd-spacing-1) 0;
          color: var(--ddd-theme-primary);
        }
        .title-section p {
          font-size: var(--ddd-font-size-m);
          margin: 0;
          color: var(--ddd-theme-secondary);
        }
        .badge {
          font-size: var(--ddd-font-size-xs);
          background-color: var(--ddd-theme-success-light);
          color: var(--ddd-theme-success-text);
          padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-full);
          font-weight: var(--ddd-font-weight-bold);
        }
        .tab-container {
          display: flex;
          gap: var(--ddd-spacing-1);
          margin-bottom: var(--ddd-spacing-6);
          border-bottom: 2px solid var(--ddd-theme-polaris-border);
          overflow-x: auto;
        }
        .tab-btn {
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          font-size: var(--ddd-font-size-m);
          font-weight: var(--ddd-font-weight-medium);
          font-family: var(--ddd-font-primary);
          background: transparent;
          color: var(--ddd-theme-secondary);
          border: none;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .tab-btn:hover {
          color: var(--ddd-theme-primary);
          background: rgba(103,80,164,0.05);
        }
        .tab-btn.active {
          color: var(--ddd-theme-primary);
          border-bottom-color: var(--ddd-theme-primary);
          font-weight: var(--ddd-font-weight-bold);
        }
        .main-content {
          background-color: var(--ddd-theme-default-surface);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-6);
          border: 1px solid var(--ddd-theme-polaris-border);
          min-height: 400px;
        }
        .msg {
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
          margin-bottom: var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-m);
        }
        .msg-success {
          background-color: var(--ddd-theme-success-light);
          color: var(--ddd-theme-on-success);
          border: 1px solid var(--ddd-theme-success);
        }
        .tracker-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--ddd-spacing-6);
        }
        .guide-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--ddd-spacing-5);
          margin-top: var(--ddd-spacing-5);
        }
        .guide-card {
          background: var(--ddd-theme-polaris-surface-hover);
          padding: var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-lg);
          border: 1px solid var(--ddd-theme-polaris-border);
        }
        .guide-card h3 {
          color: var(--ddd-theme-primary);
          margin: 0 0 var(--ddd-spacing-3) 0;
          font-size: var(--ddd-font-size-l);
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
        }
        .guide-card p {
          font-size: var(--ddd-font-size-m);
          line-height: 1.6;
          color: var(--ddd-theme-secondary);
          margin: 0;
        }
      `]}render(){return d`
      <div class="header">
        <div class="title-section">
          <h1>${this.t.title}</h1>
          <p>${this.t.subtitle}</p>
        </div>
        <span class="badge">HAXcms Ready</span>
      </div>
      ${this._successMsg?d`<div class="msg msg-success">${this._successMsg}</div>`:""}
      
      <quiz-user-auth .appsScriptUrl="${this.appsScriptUrl}"></quiz-user-auth>
      
      <div class="tab-container">
        <button class="tab-btn ${this._activeTab===0?"active":""}" @click="${()=>this._activeTab=0}">${this.t.tabGuide}</button>
        ${this.quizTabHidden?"":d`<button class="tab-btn ${this._activeTab===1?"active":""}" @click="${()=>this._activeTab=1}">${this.t.tabQuiz}</button>`}
        <button class="tab-btn ${this._activeTab===2?"active":""}" @click="${()=>this._activeTab=2}">${this.t.tabAttendance}</button>
        <button class="tab-btn ${this._activeTab===3?"active":""}" @click="${()=>this._activeTab=3}">${this.t.tabNilai}</button>
      </div>

      <activity-logger
        .appsScriptUrl="${this.appsScriptUrl}"
        .sheetName="${this.sheetName}"
        .studentId="${this._user?.studentId||""}"
        .studentName="${this._user?.nama||""}"
        .studentNis="${this._user?.nis||""}"
        .studentAbsen="${this._user?.absen||""}"
        .studentKelas="${this._user?.kelas||""}">
      </activity-logger>

      ${this.quizTabHidden?"":d`<explode-quiz
        id="quiz"
        ?hidden="${this._activeTab!==1}"
        .appsScriptUrl="${this.appsScriptUrl}"
        .sheetName="${this.sheetName}"
        .kdMateri="${this.kdMateri||""}"
        .questions="${this.questions}"
        .studentId="${this._user?.studentId||""}"
        .studentName="${this._user?.nama||""}"
        .studentNis="${this._user?.nis||""}"
        .studentAbsen="${this._user?.absen||""}"
        .studentKelas="${this._user?.kelas||""}"
        .editable="${!0}"
        @quiz-saved="${this._onQuizSaved}"
        @questions-changed="${this._onQuizQuestionsChanged}">
      </explode-quiz>`}

      <div class="main-content">
        ${this._activeTab===0?d`
          <h2 style="color: var(--ddd-theme-primary);">${this.t.tabGuide}</h2>
          <div class="guide-grid">
            <div class="guide-card">
              <h3>🚀 Memulai Kuis</h3>
              <p>Login terlebih dahulu, lalu kerjakan kuis. Skor tersimpan otomatis ke Google Sheets atas nama Anda.</p>
            </div>
            <div class="guide-card">
              <h3>📅 Kehadiran</h3>
              <p>Dihitung otomatis dari aktivitas: scroll, download, kuis, diskusi. Semua tercatat atas nama login Anda.</p>
            </div>
            <div class="guide-card">
              <h3>🔗 Integrasi</h3>
              <p>Data tersinkron ke Google Sheets via Apps Script. Gunakan atribut <code>apps-script-url</code> dan <code>sheet-name</code>.</p>
            </div>
          </div>
        `:this._activeTab===2?d`
          <div class="tracker-grid" style="margin-top: var(--ddd-spacing-6);">
            <attendance-tracker
              .appsScriptUrl="${this.appsScriptUrl}"
              .forumApiUrl="${this.forumApiUrl}"
              .studentId="${this._user?.studentId||""}"></attendance-tracker>
            <engagement-score
              .appsScriptUrl="${this.appsScriptUrl}"
              .forumApiUrl="${this.forumApiUrl}"
              .studentId="${this._user?.studentId||""}"></engagement-score>
          </div>
        `:d`
          <div style="margin-top: var(--ddd-spacing-6);">
            ${this.viewMode==="lecturer"?d`
                  <lecturer-console
                    .appsScriptUrl="${this.appsScriptUrl}"
                    .quizSelector="${"#quiz"}"
                    @questions-generated="${this._onQuestionsGenerated}"></lecturer-console>
                `:d`
                  <transparent-gradebook
                    .appsScriptUrl="${this.appsScriptUrl}"
                    .studentId="${this._user?.studentId||""}"
                    .studentName="${this._user?.nama||""}"
                    .viewMode="${this.viewMode}"
                    .showAfterQuiz="${!0}">
                  </transparent-gradebook>
                `}
          </div>
        `}
      </div>
    `}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Quiz Dashboard Lite",description:"Dashboard kuis modular dengan attendance tracking, login siswa, dan integrasi Google Sheets",icon:"icons:quiz",color:"purple",tags:["Education","Assessment","Interactive"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield",description:"URL Google Apps Script Web App"},{property:"forumApiUrl",title:"Forum Apps Script URL (Opsional)",inputMethod:"textfield",description:"URL Web App code-forum-tugas.gs \u2014 untuk kriteria Mengirim Komentar Forum & heatmap"},{property:"sheetName",title:"Nama Pertemuan",inputMethod:"textfield",default:"Pertemuan"},{property:"viewMode",title:"Mode Tampilan",inputMethod:"select",options:{student:"View Mahasiswa",lecturer:"Mode Dosen (Console)"},default:"student"},{property:"quizTabHidden",title:"Sembunyikan Tab Kuis",inputMethod:"boolean",default:!1}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_activeTab","_successMsg","_errorMsg","_user","_spreadsheetId"]}}}}globalThis.customElements.define(nt.tag,nt),(function(){const $="(prefers-color-scheme: dark)",t="a3-dark-mode";function e(a){document.body.classList.toggle("dark-mode",a)}function i(){const a=localStorage.getItem(t);return a==="light"||a==="dark"?a==="dark":window.matchMedia($).matches}try{e(i())}catch{const a=window.matchMedia($);e(a.matches)}try{window.matchMedia($).addEventListener("change",a=>e(a.matches))}catch{}document.addEventListener("a3-dark-mode-toggle",a=>{const s=!!(a.detail&&a.detail.dark);try{localStorage.setItem(t,s?"dark":"light")}catch{}e(s)})})();class ot extends U(N(L)){static get tag(){return"student-dashboard"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},studentName:{type:String,attribute:"student-name",reflect:!0},_activeTab:{state:!0},_loading:{state:!0},_error:{state:!0},_demo:{state:!0},_loaded:{state:!0},_toast:{state:!0},_leaderboard:{state:!0},_student:{state:!0},_kuis:{state:!0},_aktivitas:{state:!0},_pertemuanList:{state:!0},_detail:{state:!0},_demoStore:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.studentName="",this._activeTab="leaderboard",this._loading=!1,this._error="",this._demo=!1,this._loaded=!1,this._toast="",this._leaderboard=[],this._student=null,this._kuis=[],this._aktivitas=[],this._pertemuanList=[],this._detail=null,this._demoStore=null,this._toastT=null,this.t={...this.t,title:"Dashboard Siswa",subtitle:"Lihat nilai & aktivitas dari Google Sheets",setupTitle:"Hubungkan ke Google Sheets",setupDesc:"Masukkan URL Apps Script Web App dan nama Anda untuk melihat data.",urlLabel:"URL Apps Script",nameLabel:"Nama Anda",urlPlaceholder:"https://script.google.com/macros/s/.../exec",namePlaceholder:"Nama siswa...",loadBtn:"Tampilkan Data",demoBtn:"Coba Mode Demo",loading:"Mengambil data dari Google Sheets...",tabLeaderboard:"Leaderboard",tabKuis:"Kuis Saya",tabAktivitas:"Aktivitas Saya",tabPertemuan:"Pertemuan",noData:"Belum ada data.",noKuis:"Belum ada data kuis. Kerjakan kuis di halaman pertemuan!",noAktivitas:"Belum ada log aktivitas.",disconnect:"Putuskan koneksi",refresh:"Muat ulang",connected:"Terhubung",demoMode:"Mode Demo",howTitle:"Cara kerja",how1:"Masukkan URL Apps Script \u2014 sama dengan yang dipakai di dashboard kuis",how2:"Masukkan nama Anda \u2014 data dicocokkan dengan nama di sheet",how3:"Klik Tampilkan \u2014 fetch data dari Apps Script API GET endpoint",how4:"Jelajahi tab: Leaderboard, Kuis Saya, Aktivitas Saya, Pertemuan"}}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const e=globalThis.HaxStore.requestAvailability();e&&!e.elementList[ot.tag]&&(e.elementList[ot.tag]=ot.haxProperties)}this._handleSessionChanged=this._handleSessionChanged.bind(this),globalThis.addEventListener("quiz-user-session-changed",this._handleSessionChanged);const t=this._loadSession();t?.nama&&(this.studentName=t.nama,this.appsScriptUrl&&(this._loaded=!0,this._loading=!0,this._load()))}disconnectedCallback(){globalThis.removeEventListener("quiz-user-session-changed",this._handleSessionChanged),super.disconnectedCallback()}_handleSessionChanged(t){const e=t?.detail;e?.nama?(this.studentName=e.nama,this.appsScriptUrl&&!this._loaded&&(this._loaded=!0,this._loading=!0,this._load())):(this.studentName="",this._loaded=!1,this._student=null,this._leaderboard=[],this._kuis=[],this._aktivitas=[])}attributeChangedCallback(t,e,i){t==="apps-script-url"&&i&&(this.appsScriptUrl=i),t==="student-name"&&i&&(this.studentName=i),this.isConnected&&this.requestUpdate()}_loadSession(){try{const t=JSON.parse(localStorage.getItem("quiz_user_session"));return t?.expiresAt&&Date.now()>t.expiresAt?(localStorage.removeItem("quiz_user_session"),null):t}catch{return null}}_getStorage(t,e){try{const i=localStorage.getItem(t);return i?JSON.parse(i):e}catch{return e}}_setStorage(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}_esc(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}_isMe(t){return t&&this.studentName&&String(t).trim().toLowerCase()===String(this.studentName).trim().toLowerCase()}_fmtTs(t){if(!t)return"-";const e=new Date(t);return isNaN(e.getTime())?String(t):e.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})+" "+e.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})}_emoji(t){return{reading:"\u{1F4D6}",quiz:"\u{1F4DD}",discussion:"\u{1F4AC}",download:"\u{1F4E5}"}[t]||"\u{1F4CC}"}_showToast(t){this._toast=t,this._toastT&&clearTimeout(this._toastT),this._toastT=setTimeout(()=>{this._toast=""},2800)}_avatar(t){const e=String(t||"?").trim().split(/\s+/).map(a=>a[0]).slice(0,2).join("").toUpperCase();let i=0;for(const a of String(t||"x"))i=(i*31+a.charCodeAt(0))%5;return d`<div class="sd-avatar av${i+1}">${this._esc(e)}</div>`}_submit(){const t=this.shadowRoot.querySelector("#sd-url"),e=this.shadowRoot.querySelector("#sd-name"),i=t?t.value.trim():"",a=e?e.value.trim():"";if(!i)return this._showToast("\u26A0\uFE0F Masukkan URL Apps Script terlebih dahulu!");if(!i.includes("script.google.com"))return this._showToast("\u26A0\uFE0F URL tidak valid! Gunakan URL Apps Script Web App.");if(!a)return this._showToast("\u26A0\uFE0F Masukkan nama Anda!");this.appsScriptUrl=i,this.studentName=a,this._demo=!1,this._setStorage("sd_apps_script_url",i),this._setStorage("sd_student_name",a),this._loaded=!0,this._loading=!0,this._load()}_startDemo(){const t=this.shadowRoot.querySelector("#sd-name");this.studentName=t&&t.value.trim()?t.value.trim():"Siswa Demo",this._demo=!0,this._loaded=!0,this._loading=!0,setTimeout(()=>{this._buildDemo(),this._loading=!1,this._showToast("\u2728 Mode demo aktif \u2014 data contoh dimuat")},600)}_disconnect(){this._loaded=!1,this._demo=!1,this._leaderboard=[],this._student=null,this._kuis=[],this._aktivitas=[],this._pertemuanList=[],this._detail=null,this._showToast("\u{1F50C} Koneksi diputus")}_refresh(){if(this._demo){this._buildDemo(),this._showToast("\u{1F504} Data demo dimuat ulang");return}this._loading=!0,this._load()}async _load(){if(this._demo)return;const t=this.appsScriptUrl+(this.appsScriptUrl.includes("?")?"&":"?");try{const[e,i]=await Promise.all([fetch(t+"action=leaderboard"),fetch(t+"action=summary&name="+encodeURIComponent(this.studentName))]),a=await e.json(),s=await i.json();let o=null;s.status==="ok"&&s.data?o=s.data:s.status==="not_found"&&s.data&&(o={Nama:this.studentName,"Total Kuis":s.data.totalKuis||0,"Rata-rata Skor":s.data.rataSkor||0,"Skor Tertinggi":s.data.skorTertinggi||0,"Skor Terendah":0,"Total Aktivitas":s.data.totalAktivitas||0,"Jumlah Pertemuan":0},s.data.kuis&&s.data.kuis.forEach(l=>{l.score>(parseInt(o["Skor Tertinggi"])||0)&&(o["Skor Tertinggi"]=l.score),l.score<(parseInt(o["Skor Terendah"])||100)&&(o["Skor Terendah"]=l.score)})),this._leaderboard=a.status==="ok"?a.leaderboard||[]:[],this._student=o,this._kuis=s.data?s.data.kuis||[]:[],this._aktivitas=s.data?s.data.aktivitas||[]:[]}catch(e){console.error("[student-dashboard]",e),this._error='Gagal mengambil data. Periksa URL Apps Script & akses "Anyone".'}this._loading=!1}async _loadList(){if(this._demo){this._pertemuanList=this._demoStore.list;return}try{const t=this.appsScriptUrl+(this.appsScriptUrl.includes("?")?"&":"?"),e=(await(await fetch(t+"action=list")).json()).pertemuan||[],i={},a=[];e.forEach(s=>{const o=s.replace(" - Kuis","").replace(" - Aktivitas","");i[o]||(i[o]=!0,a.push(o))}),this._pertemuanList=a}catch(t){console.error("[student-dashboard] list failed",t)}}async _loadPertemuan(t){if(this._detail={loading:!0,pertemuan:t,quiz:[],aktivitas:[]},this._demo){setTimeout(()=>{const e=this._demoStore.pertemuan[t]||{quiz:[],aktivitas:[]};this._detail={loading:!1,pertemuan:t,quiz:e.quiz,aktivitas:e.aktivitas}},400);return}try{const e=this.appsScriptUrl+(this.appsScriptUrl.includes("?")?"&":"?"),[i,a]=await Promise.all([fetch(e+"action=pertemuan&sheet="+encodeURIComponent(t)),fetch(e+"action=aktivitas&sheet="+encodeURIComponent(t)+"&name="+encodeURIComponent(this.studentName))]),s=await i.json(),o=await a.json();this._detail={loading:!1,pertemuan:t,quiz:s.siswa||[],aktivitas:o.aktivitas||[]}}catch{this._detail={loading:!1,pertemuan:t,quiz:[],aktivitas:[],error:"Gagal memuat data pertemuan."}}}_buildDemo(){const t=Date.now(),e=864e5,i=(c,w)=>c+Math.floor(Math.random()*(w-c+1)),a=this.studentName||"Siswa Demo",s=["Pertemuan 1","Pertemuan 2","Pertemuan 3","Pertemuan 4","Pertemuan 5","Pertemuan 6"],o=[];for(let c=0;c<5;c++){const w=i(55,100),C=new Date(t-(24-c*4)*e-i(1,9)*36e5);o.push({pertemuan:s[c],score:w,status:w>=70?"LULUS":"TIDAK LULUS",timestamp:C.toISOString()})}const l=o.map(c=>c.score),y=Math.round(l.reduce((c,w)=>c+w,0)/l.length),h=[["reading",["Membaca Modul","Membaca materi pertemuan","Mengeksplorasi halaman"]],["download",["Mengunduh PDF Materi","Mengunduh Slide Presentasi","Mengunduh Source Code"]],["discussion",["Bertanya di forum diskusi","Membalas komentar teman","Menanggapi postingan"]],["quiz",["Menyelesaikan kuis pertemuan"]]],g=[];for(let c=0;c<28;c++){const w=c===0?i(2,4):Math.random()<.85?i(0,3):0;for(let C=0;C<w;C++){const[x,O]=h[i(0,h.length-1)],W=s[i(0,s.length-1)],lt=new Date(t-c*e-i(0,11)*36e5);g.unshift({pertemuan:W,type:x,desc:O[i(0,O.length-1)],timestamp:lt.toISOString()})}}const A=["Aisyah Putri","Budi Santoso","Citra Lestari","Dimas Prasetyo","Eka Ramadhani","Fajar Nugroho","Gita Maharani","Hendra Wijaya"].map(c=>{const w=i(3,6),C=Array.from({length:w},()=>i(55,100)),x=Math.round(C.reduce((O,W)=>O+W,0)/w);return{Nama:c,"Rata-rata Skor":x,"Skor Tertinggi":Math.max(...C),"Skor Terendah":Math.min(...C),"Total Kuis":w,"Total Aktivitas":i(10,50),"Jumlah Pertemuan":i(3,6)}});A.push({Nama:a,"Rata-rata Skor":y,"Skor Tertinggi":Math.max(...l),"Skor Terendah":Math.min(...l),"Total Kuis":o.length,"Total Aktivitas":g.length,"Jumlah Pertemuan":o.length}),A.sort((c,w)=>w["Rata-rata Skor"]-c["Rata-rata Skor"]||w["Total Aktivitas"]-c["Total Aktivitas"]);const q={};s.forEach(c=>{const w=[];A.forEach(C=>{let x=null;if(C.Nama===a){const O=o.find(W=>W.pertemuan===c);x=O?O.score:null}else Math.random()>.2&&(x=i(50,100));x!==null&&w.push({nama:C.Nama,skor:x,status:x>=70?"LULUS":"TIDAK LULUS"})}),w.sort((C,x)=>x.skor-C.skor),q[c]={quiz:w,aktivitas:g.filter(C=>C.pertemuan===c)}}),this._demoStore={list:s,pertemuan:q},this._leaderboard=A,this._student=A.find(c=>c.Nama===a),this._kuis=o,this._aktivitas=g,this._pertemuanList=s}_counts(t){const e={reading:0,quiz:0,discussion:0,download:0};return(t||this._aktivitas||[]).forEach(i=>{e[i.type]!==void 0&&e[i.type]++}),e}_heatmap(){const t=this._aktivitas||[],e=[];for(let i=27;i>=0;i--){const a=new Date;a.setDate(a.getDate()-i),a.setHours(0,0,0,0);const s=t.filter(o=>{const l=new Date(o.timestamp);return!isNaN(l)&&l.setHours(0,0,0,0)===a.getTime()}).length;e.push({date:a,count:s})}return e}_streak(){let t=0;const e=new Date;e.setHours(0,0,0,0);for(let i=0;i<60;i++){if(this._aktivitas.some(a=>{const s=new Date(a.timestamp);return!isNaN(s)&&s.setHours(0,0,0,0)===e.getTime()}))t++;else if(i>0)break;e.setDate(e.getDate()-1)}return t}render(){const t=this._toast?d`<div class="sd-toast">${this._esc(this._toast)}</div>`:"";return this._loaded?this._loading?d`${t}${this._renderHeader()}<div class="sd-card"><div class="sd-load"><div class="sd-spin"></div><p>${this.t.loading}</p></div></div>`:d`${t}${this._renderHeader()}${this._renderStats()}${this._renderTabs()}${this._renderContent()}`:d`${t}${this._renderSetup()}`}_renderSetup(){return d`
    <div class="sd-setup">
      <div class="sd-setup-ic">\uD83C\uDF93</div>
      <h2>${this.t.setupTitle}</h2>
      <p class="sd-setup-desc">${this.t.setupDesc}</p>
      <div class="sd-field"><label>${this.t.urlLabel}</label>
        <input class="sd-in" id="sd-url" placeholder="${this.t.urlPlaceholder}" .value=${this._getStorage("sd_apps_script_url","")}></div>
      <div class="sd-field"><label>${this.t.nameLabel}</label>
        <input class="sd-in" id="sd-name" placeholder="${this.t.namePlaceholder}" .value=${this.studentName||this._getStorage("sd_student_name","")}></div>
      <button class="sd-btn p sd-fw" @click=${()=>this._submit()}>${this.t.loadBtn}</button>
      <div class="sd-or"><span>atau</span></div>
      <button class="sd-btn s sd-fw" @click=${()=>this._startDemo()}>${this.t.demoBtn}</button>
      <div class="sd-how">
        <div class="sd-how-t">${this.t.howTitle}</div>
        <ol>
          <li>${this.t.how1}</li>
          <li>${this.t.how2}</li>
          <li>${this.t.how3}</li>
          <li>${this.t.how4}</li>
        </ol>
      </div>
    </div>`}_renderHeader(){return d`
    <div class="sd-hd">
      <div>
        <h1>\uD83C\uDF93 ${this.t.title}</h1>
        <p>${this.studentName?d`Halo, <b>${this._esc(this.studentName)}</b>!`:""} ${this.t.subtitle}</p>
      </div>
      <div class="sd-hd-a">
        <span class="sd-live">${this._demo?this.t.demoMode:this.t.connected}</span>
        <button class="sd-icb" @click=${()=>this._refresh()} title="${this.t.refresh}">\uD83D\uDD04</button>
        <button class="sd-icb" @click=${()=>this._disconnect()} title="${this.t.disconnect}">\uD83D\uDD0C</button>
      </div>
    </div>`}_renderStats(){const t=this._student||{},e=Number(t["Rata-rata Skor"]||0),i=38,a=2*Math.PI*i,s=a-Math.min(100,e)/100*a;return d`
    <div class="sd-hero">
      <div class="sd-gauge">
        <svg width="96" height="96" viewBox="0 0 96 96" style="transform:rotate(-90deg)">
          <circle cx="48" cy="48" r="${i}" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="9"/>
          <circle cx="48" cy="48" r="${i}" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-dasharray="${a}" stroke-dashoffset="${s}"/>
        </svg>
        <div class="sd-gauge-v">${e}<small>%</small></div>
      </div>
      <div>
        <div class="sd-hero-lb">Rata-rata Skor Kuis</div>
        <div class="sd-hero-msg">${e>=85?"Luar biasa! Pertahankan! \u{1F389}":e>=70?"Bagus! Terus semangat \u{1F4AA}":"Ayo tingkatkan lagi! \u{1F525}"}</div>
        <div class="sd-hero-sub">Berdasarkan ${t["Total Kuis"]||0} kuis di ${t["Jumlah Pertemuan"]||0} pertemuan</div>
      </div>
    </div>
    <div class="sd-stats">
      <div class="sd-stat"><div class="ic">\uD83C\uDFC6</div><div class="vl">${t["Skor Tertinggi"]||0}%</div><div class="lb">Skor Tertinggi</div></div>
      <div class="sd-stat"><div class="ic">\uD83D\uDCC9</div><div class="vl">${t["Skor Terendah"]||0}%</div><div class="lb">Skor Terendah</div></div>
      <div class="sd-stat"><div class="ic">\uD83D\uDCDD</div><div class="vl">${t["Total Kuis"]||0}</div><div class="lb">Total Kuis</div></div>
      <div class="sd-stat"><div class="ic">\u26A1</div><div class="vl">${t["Total Aktivitas"]||0}</div><div class="lb">Total Aktivitas</div></div>
      <div class="sd-stat"><div class="ic">\uD83D\uDCDA</div><div class="vl">${t["Jumlah Pertemuan"]||0}</div><div class="lb">Pertemuan</div></div>
    </div>`}_renderTabs(){const t=[["leaderboard","\u{1F3C6} "+this.t.tabLeaderboard],["kuis","\u{1F4DD} "+this.t.tabKuis],["aktivitas","\u{1F4C5} "+this.t.tabAktivitas],["pertemuan","\u{1F4DA} "+this.t.tabPertemuan]];return d`<div class="sd-tabs">${t.map(([e,i])=>d`<button class="sd-tab ${this._activeTab===e?"on":""}" @click=${()=>{this._activeTab=e,this._detail=null,e==="pertemuan"&&!this._pertemuanList.length&&this._loadList()}}>${i}</button>`)}</div>`}_renderContent(){switch(this._activeTab){case"kuis":return this._renderKuis();case"aktivitas":return this._renderAktivitas();case"pertemuan":return this._renderPertemuan();default:return this._renderLeaderboard()}}_renderLeaderboard(){if(!this._leaderboard.length)return d`<div class="sd-card sd-empty"><div class="sd-empty-i">\uD83C\uDFC6</div><p>${this.t.noData}</p></div>`;const t=this._leaderboard.slice(0,3),e=this._leaderboard.slice(3),i=["\u{1F947}","\u{1F948}","\u{1F949}"];return d`
    <div class="sd-card">
      <h2>\uD83C\uDFC6 Podium Kelas</h2>
      <div class="sd-podium">
        ${t.map((a,s)=>d`
        <div class="sd-pod p${s+1} ${this._isMe(a.Nama)?"me":""}" style="order:${s===0?2:s===1?1:3}">
          <div class="medal">${i[s]}</div>
          ${this._avatar(a.Nama)}
          <div class="pod-name">${this._esc(a.Nama)}${this._isMe(a.Nama)?" \u{1F448}":""}</div>
          <div class="pod-avg">${a["Rata-rata Skor"]||0}%</div>
          <div class="pod-sub">${a["Total Kuis"]||0} kuis \u00B7 ${a["Total Aktivitas"]||0} aktivitas</div>
        </div>`)}
      </div>
      ${e.length?d`
      <div class="sd-tblwrap">
      <table class="sd-tbl sd-tbl-wide">
        <thead><tr><th>#</th><th>Nama</th><th>Rata-rata</th><th>Tertinggi</th><th>Kuis</th><th>Aktivitas</th><th>Pertemuan</th></tr></thead>
        <tbody>
        ${e.map((a,s)=>d`
        <tr class="${this._isMe(a.Nama)?"me":""}">
          <td><span class="sd-rank">${s+4}</span></td>
          <td class="nm">${this._esc(a.Nama)}${this._isMe(a.Nama)?" \u{1F448}":""}</td>
          <td><b>${a["Rata-rata Skor"]||0}%</b></td>
          <td>${a["Skor Tertinggi"]||0}</td>
          <td>${a["Total Kuis"]||0}</td>
          <td>${a["Total Aktivitas"]||0}</td>
          <td>${a["Jumlah Pertemuan"]||0}</td>
        </tr>`)}
        </tbody>
      </table>
      </div>`:""}
    </div>`}_renderKuis(){if(!this._kuis.length)return d`<div class="sd-card sd-empty"><div class="sd-empty-i">\uD83D\uDCDD</div><p>${this.t.noKuis}</p></div>`;const t=this._kuis.filter(i=>i.status==="LULUS").length,e=Math.max(...this._kuis.map(i=>Number(i.score)||0));return d`
    <div class="sd-card">
      <h2>\uD83D\uDCDD Riwayat Kuis Saya</h2>
      <div class="sd-chips">
        <span class="sd-chip">\u2705 Lulus: ${t}</span>
        <span class="sd-chip">\u274C Belum lulus: ${this._kuis.length-t}</span>
        <span class="sd-chip">\uD83D\uDCC8 Skor terbaik: ${e}%</span>
      </div>
      <div class="sd-tblwrap">
      <table class="sd-tbl">
        <thead><tr><th>Pertemuan</th><th>Skor</th><th>Status</th><th>Waktu</th></tr></thead>
        <tbody>
        ${this._kuis.map(i=>d`
        <tr>
          <td class="nm">${this._esc(i.pertemuan||"-")}</td>
          <td><div class="sd-score"><div class="sd-bar"><span style="width:${Math.min(100,i.score||0)}%"></span></div><b>${i.score}%</b></div></td>
          <td>${i.status==="LULUS"?d`<span class="sd-pill pass">LULUS</span>`:d`<span class="sd-pill fail">TIDAK LULUS</span>`}</td>
          <td class="tm">${this._fmtTs(i.timestamp)}</td>
        </tr>`)}
        </tbody>
      </table>
      </div>
    </div>`}_renderAktivitas(){if(!this._aktivitas.length)return d`<div class="sd-card sd-empty"><div class="sd-empty-i">\uD83D\uDCC5</div><p>${this.t.noAktivitas}</p></div>`;const t=this._counts(),e=this._heatmap(),i=this._streak();return d`
    <div class="sd-card">
      <h2>\uD83D\uDCC5 Aktivitas Saya <span class="sd-fire">\uD83D\uDD25 Streak: ${i} hari</span></h2>
      <div class="sd-counters">
        <div class="sd-cnt"><div class="e">\uD83D\uDCD6</div><div class="n">${t.reading}</div><div class="l">Membaca</div></div>
        <div class="sd-cnt"><div class="e">\uD83D\uDCDD</div><div class="n">${t.quiz}</div><div class="l">Kuis</div></div>
        <div class="sd-cnt"><div class="e">\uD83D\uDCAC</div><div class="n">${t.discussion}</div><div class="l">Diskusi</div></div>
        <div class="sd-cnt"><div class="e">\uD83D\uDCE5</div><div class="n">${t.download}</div><div class="l">Unduh</div></div>
      </div>
      <div class="sd-heat-t">Peta Aktivitas 28 Hari</div>
      <div class="sd-hmh"><span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span></div>
      <div class="sd-hmg">
        ${e.map(a=>{let s="";return a.count>7?s="l4":a.count>4?s="l3":a.count>2?s="l2":a.count>0&&(s="l1"),d`<div class="sd-hc ${s}" title="${a.date.toLocaleDateString("id-ID")}: ${a.count} aktivitas">${a.count||""}</div>`})}
      </div>
      <div class="sd-hml"><span>Sedikit</span><i style="background:var(--ddd-theme-polaris-surface)"></i><i style="background:var(--ddd-theme-polaris-surface-hover)"></i><i style="background:var(--ddd-theme-accent-light, #c9b6f8)"></i><i style="background:var(--ddd-theme-accent)"></i><i style="background:var(--ddd-theme-primary)"></i><span>Banyak</span></div>
    </div>
    <div class="sd-card">
      <h2>\uD83D\uDD52 Log Terbaru</h2>
      ${this._aktivitas.slice(0,8).map(a=>d`
      <div class="sd-log ${this._esc(a.type)}">
        <span class="sd-log-e">${this._emoji(a.type)}</span>
        <div class="sd-log-b">
          <div class="sd-log-d">${this._esc(a.desc||"-")}</div>
          <div class="sd-log-m">${this._esc(a.pertemuan||"")} \u00B7 ${this._fmtTs(a.timestamp)}</div>
        </div>
      </div>`)}
    </div>`}_renderPertemuan(){return d`
    <div class="sd-card">
      <h2>\uD83D\uDCDA Pilih Pertemuan</h2>
      ${this._pertemuanList.length?d`<div class="sd-chips">${this._pertemuanList.map(t=>d`<button class="sd-chipb ${this._detail&&this._detail.pertemuan===t?"on":""}" @click=${()=>this._loadPertemuan(t)}>\uD83D\uDCC5 ${this._esc(t)}</button>`)}</div>`:d`<p class="sd-muted">Memuat daftar pertemuan\u2026</p>`}
    </div>
    ${this._detail?this._renderPertemuanDetail():""}`}_renderPertemuanDetail(){const t=this._detail;if(t.loading)return d`<div class="sd-card"><div class="sd-load"><div class="sd-spin"></div><p>Memuat data ${this._esc(t.pertemuan)}\u2026</p></div></div>`;const e={};return t.aktivitas.forEach(i=>e[i.type]=(e[i.type]||0)+1),d`
    <div class="sd-card">
      <h2>\uD83D\uDCDD Hasil Kuis \u2014 ${this._esc(t.pertemuan)}</h2>
      ${t.quiz.length?d`
      <div class="sd-tblwrap">
      <table class="sd-tbl">
        <thead><tr><th>Nama</th><th>Skor</th><th>Status</th></tr></thead>
        <tbody>
        ${t.quiz.map(i=>d`
        <tr class="${this._isMe(i.nama)?"me":""}">
          <td class="nm">${this._esc(i.nama)}${this._isMe(i.nama)?" \u{1F448}":""}</td>
          <td><b class="sd-prime">${i.skor}%</b></td>
          <td>${i.status==="LULUS"?d`<span class="sd-pill pass">LULUS</span>`:d`<span class="sd-pill fail">TIDAK LULUS</span>`}</td>
        </tr>`)}
        </tbody>
      </table>
      </div>`:d`<p class="sd-muted">Belum ada data kuis di pertemuan ini.</p>`}
    </div>
    <div class="sd-card">
      <h2>\uD83D\uDCC5 Aktivitas Saya \u2014 ${this._esc(t.pertemuan)}</h2>
      ${t.aktivitas.length?d`
      <div class="sd-counters">
        ${Object.entries(e).map(([i,a])=>d`<div class="sd-cnt"><div class="e">${this._emoji(i)}</div><div class="n">${a}</div><div class="l">${this._esc(i)}</div></div>`)}
      </div>
      ${t.aktivitas.slice(0,6).map(i=>d`
      <div class="sd-log ${this._esc(i.type)}">
        <span class="sd-log-e">${this._emoji(i.type)}</span>
        <div class="sd-log-b">
          <div class="sd-log-d">${this._esc(i.desc||"-")}</div>
          <div class="sd-log-m">${this._fmtTs(i.timestamp)}</div>
        </div>
      </div>`)}
      `:d`<p class="sd-muted">Belum ada log aktivitas di pertemuan ini.</p>`}
      ${t.error?d`<div class="sd-err">${this._esc(t.error)}</div>`:""}
    </div>`}static get styles(){return[super.styles,D`
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
    `]}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Student Dashboard",description:"Dashboard siswa untuk melihat nilai, leaderboard, dan aktivitas dari Google Sheets",icon:"icons:dashboard",color:"purple",tags:["Education","Dashboard","Gradebook"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",description:"URL Google Apps Script Web App untuk fetch data",inputMethod:"textfield",required:!0},{property:"studentName",title:"Nama Siswa (opsional)",description:"Nama siswa default (bisa diubah di form setup)",inputMethod:"textfield"}],advanced:[]},saveOptions:{unsetAttributes:["_activeTab","_loading","_error","_demo","_loaded","_toast","_leaderboard","_student","_kuis","_aktivitas","_pertemuanList","_detail","_demoStore"]}}}}globalThis.customElements.define(ot.tag,ot);class z extends HTMLElement{static LOGS_KEY="a3_attendance_activity_logs";static THRESHOLD_KEY="a3_attendance_threshold_config";static GRADES_KEY="a3_attendance_grades_config";static SHEETS_KEY="quiz_sheet_id";static SCRIPT_KEY="apps_script_url";static SHEET_NAME_KEY="quiz_sheet_name";static QUESTIONS_KEY="quiz_custom_questions";static QUESTIONS=[{question:"Apa ibu kota Indonesia?",choices:["Bandung","Surabaya","Jakarta","Medan"],correctIndex:2},{question:"Berapa hasil dari 7 \xD7 8?",choices:["54","56","58","60"],correctIndex:1},{question:"Planet terdekat dengan Matahari?",choices:["Venus","Bumi","Mars","Merkurius"],correctIndex:3},{question:"Siapa presiden pertama Indonesia?",choices:["Soeharto","Soekarno","Habibie","Megawati"],correctIndex:1},{question:"Berapa jumlah provinsi di Indonesia?",choices:["32","34","36","38"],correctIndex:2}];static THRESHOLDS={minWeeklyActivities:5,minReading:2,minQuiz:1,minDiscussion:1};static GRADES={uts:85,uas:88,attendanceWeight:30,quizWeight:20,utsWeight:25,uasWeight:25};static get observedAttributes(){return["apps-script-url","spreadsheet-id","questions","sheet-name"]}constructor(){super(),this.attachShadow({mode:"open"}),this._init()}_init(){this._sid=this._load(z.SHEETS_KEY,""),this._url="",this._sheet=this._load(z.SHEET_NAME_KEY,"")||"Pertemuan",this.questions=this._load(z.QUESTIONS_KEY,null)||z.QUESTIONS,this.thresholds={...z.THRESHOLDS,...this._load(z.THRESHOLD_KEY,{})},this.grades={...z.GRADES,...this._load(z.GRADES_KEY,{})},this.quiz={screen:"name",name:"",idx:0,score:0,answered:!1,sel:-1,fb:"",fbPos:!1},this._tab="setup",this._toast="",this._toastT=null,this._lastScroll=0,this._editing=!1,this._editIdx=-1,this._edit={q:"",c0:"",c1:"",c2:"",c3:"",correct:"0"},this._onScroll=this._onScroll.bind(this),this._onClick=this._onClick.bind(this)}connectedCallback(){const t=this.getAttribute("sheet-name");t&&(this._sheet=t,this._save(z.SHEET_NAME_KEY,t));const e=this.getAttribute("apps-script-url");e&&(this._url=e),this._connected&&this._tab==="setup"&&(this._tab="quiz"),this._render(),addEventListener("scroll",this._onScroll,{passive:!0}),addEventListener("click",this._onClick)}disconnectedCallback(){removeEventListener("scroll",this._onScroll),removeEventListener("click",this._onClick)}attributeChangedCallback(t,e,i){if(t==="apps-script-url"&&(this._url=i),t==="spreadsheet-id"&&(this._sid=i),t==="sheet-name"&&(this._sheet=i),t==="questions"&&i)try{this.questions=JSON.parse(i)}catch{}this.isConnected&&(this._connected&&this._tab==="setup"&&(this._tab="quiz"),this._render())}_load(t,e){try{const i=localStorage.getItem(t);return i?JSON.parse(i):e}catch{return e}}_save(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}_rem(t){try{localStorage.removeItem(t)}catch{}}_logs(){return this._load(z.LOGS_KEY,[])}_show(t){this._toast=t,this._toastT&&clearTimeout(this._toastT),this._toastT=setTimeout(()=>{this._toast="",this._render()},3e3),this._render()}get _connected(){return!!(this._url||this._sid)}_connect(t){if(!t?.includes?.("script.google.com"))return this._show("URL tidak valid!");this._show("URL sudah di-hardcode di HTML. Edit atribut apps-script-url untuk mengganti."),this._render()}_connectSheets(t){let e=t.trim();const i=e.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);if(i&&(e=i[1]),!e)return this._show("ID tidak valid!");this._sid=e,this._save(z.SHEETS_KEY,this._sid),this._show("Sheet ID terhubung!"),this._render()}_disc(){this._url="",this._sid="",this._rem(z.SCRIPT_KEY),this._rem(z.SHEETS_KEY),this._tab="setup",this._show("Koneksi diputus."),this._render()}_send(t){if(!this._url)return;!t.sheet&&this._sheet&&(t.sheet=this._sheet);const e=new URLSearchParams;Object.entries(t).forEach(([a,s])=>{s!=null&&e.append(a,String(s))});const i=this._url+(this._url.includes("?")?"&":"?")+e.toString();fetch(this._url,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(t)}).then(()=>{this._show("\u2705 Data tersimpan ke Sheets")}).catch(()=>{fetch(i,{method:"GET",mode:"no-cors"}).catch(()=>{})})}_onScroll(){const t=Date.now();scrollY<300||t-this._lastScroll<6e4||(this._lastScroll=t,this._log("reading",`Membaca materi (Scroll ${Math.round(scrollY)}px)`))}_onClick(t){const e=t.composedPath()[0];if(!(!e||e.closest?.("full-quiz-dashboard"))&&e.tagName==="A"&&e.href&&(e.href.match(/\.(pdf|docx|zip|xlsx|pptx|mp4|png|jpg)$/i)||e.hasAttribute("download"))){const i=e.href.substring(e.href.lastIndexOf("/")+1)||"materi";this._log("download",`Mengunduh: ${decodeURIComponent(i)}`)}}_log(t,e){const i=this._logs(),a={id:"log-"+Date.now()+"-"+Math.random(),timestamp:new Date().toISOString(),type:t,description:e};i.unshift(a),this._save(z.LOGS_KEY,i),this._send({type:"attendance",timestamp:a.timestamp,name:"Student",activityType:t,description:e}),(this._tab==="attendance"||this._tab==="grades")&&this._render()}_sim(t){const e={reading:["Membaca Modul 1","Membaca Modul 2","Mengeksplorasi Halaman"],download:["Mengunduh PDF Panduan.pdf","Mengunduh Source Code.zip"],discussion:["Mengirimkan pertanyaan di Forum","Membalas tanggapan di diskusi"]}[t];this._log(t,e[Math.floor(Math.random()*e.length)]),this._show(`Simulasi ${t} tercatat!`)}_clearLogs(){this._rem(z.LOGS_KEY),this._show("Log direset!"),this._render()}_start(t){if(!t||t.length<=2)return this._show("Nama minimal 3 karakter!");this.quiz={screen:"question",name:t,idx:0,score:0,answered:!1,sel:-1,fb:"",fbPos:!1},this._render()}_select(t){if(this.quiz.answered)return;this.quiz.answered=!0,this.quiz.sel=t;const e=this.questions[this.quiz.idx];t===e.correctIndex?(this.quiz.score++,this.quiz.fb="\u2705 Benar!",this.quiz.fbPos=!0):(this.quiz.fb=`\u274C Salah. Jawaban: ${e.choices[e.correctIndex]}`,this.quiz.fbPos=!1),this._render(),setTimeout(()=>this._next(),1200)}_next(){if(this.quiz.idx<this.questions.length-1)this.quiz.idx++,this.quiz.answered=!1,this.quiz.sel=-1,this.quiz.fb="";else{const t=Math.round(this.quiz.score/this.questions.length*100);this._log("quiz",`Menyelesaikan Kuis (Skor: ${t}%)`),this._send({timestamp:new Date().toISOString(),name:this.quiz.name,score:t,totalQuestions:this.questions.length}),this.quiz.screen="result"}this._render()}_restart(){this.quiz={screen:"name",name:"",idx:0,score:0,answered:!1,sel:-1,fb:"",fbPos:!1},this._render()}_weekly(){const t=this._logs(),e=new Date(Date.now()-7*864e5),i=t.filter(y=>new Date(y.timestamp)>=e),a=this.thresholds,s={reading:i.filter(y=>y.type==="reading").length,quiz:i.filter(y=>y.type==="quiz").length,discussion:i.filter(y=>y.type==="discussion").length,total:i.length},o={reading:s.reading>=a.minReading,quiz:s.quiz>=a.minQuiz,discussion:s.discussion>=a.minDiscussion,total:s.total>=a.minWeeklyActivities},l=(o.reading?1:0)+(o.quiz?1:0)+(o.discussion?1:0)+(o.total?1:0);return{counts:s,goals:o,pct:Math.round(l/4*100),status:l>=3?"HADIR":"BELUM LENGKAP"}}_streak(){const t=this._logs();let e=0,i=new Date;i.setHours(0,0,0,0);for(let a=0;a<30;a++){if(t.filter(s=>{const o=new Date(s.timestamp);return o.setHours(0,0,0,0),o.getTime()===i.getTime()}).length>0)e++;else if(a>0)break;i.setDate(i.getDate()-1)}return e}_heatmap(){const t=this._logs(),e=[];for(let i=27;i>=0;i--){const a=new Date;a.setDate(a.getDate()-i),a.setHours(0,0,0,0),e.push({date:a,count:t.filter(s=>{const o=new Date(s.timestamp);return o.setHours(0,0,0,0),o.getTime()===a.getTime()}).length})}return e}_grade(){const t=this._weekly().pct,e=this._logs().filter(l=>l.type==="quiz");let i=0;e.length&&(i=Math.max(...e.map(l=>{const y=l.description.match(/Skor:\s*(\d+)%/);return y?parseInt(y[1]):0})));const a=this.grades,s=(t*a.attendanceWeight+i*a.quizWeight+a.uts*a.utsWeight+a.uas*a.uasWeight)/100;let o="E";return s>=85?o="A":s>=80?o="A-":s>=75?o="B+":s>=70?o="B":s>=65?o="B-":s>=60?o="C+":s>=55?o="C":s>=40&&(o="D"),{att:t,quiz:i,final:Math.round(s*10)/10,grade:o}}_addQ(){const t=this._edit;if(!t.q||!t.c0||!t.c1||!t.c2||!t.c3)return this._show("Semua field harus diisi!");this.questions=[...this.questions,{question:t.q,choices:[t.c0,t.c1,t.c2,t.c3],correctIndex:parseInt(t.correct)}],this._save(z.QUESTIONS_KEY,this.questions),this._edit={q:"",c0:"",c1:"",c2:"",c3:"",correct:"0"},this._show("Soal ditambahkan!"),this._render()}_editQ(t){const e=this.questions[t];this._editIdx=t,this._edit={q:e.question,c0:e.choices[0],c1:e.choices[1],c2:e.choices[2],c3:e.choices[3],correct:String(e.correctIndex)},this._render()}_saveQ(){const t=this._edit;if(!t.q)return this._show("Pertanyaan tidak boleh kosong!");this.questions=this.questions.map((e,i)=>i===this._editIdx?{question:t.q,choices:[t.c0,t.c1,t.c2,t.c3],correctIndex:parseInt(t.correct)}:e),this._save(z.QUESTIONS_KEY,this.questions),this._editIdx=-1,this._edit={q:"",c0:"",c1:"",c2:"",c3:"",correct:"0"},this._show("Soal diupdate!"),this._render()}_delQ(t){if(this.questions.length<=3)return this._show("Minimal 3 soal!");this.questions=this.questions.filter((e,i)=>i!==t),this._save(z.QUESTIONS_KEY,this.questions),this._editIdx===t&&(this._editIdx=-1,this._edit={q:"",c0:"",c1:"",c2:"",c3:"",correct:"0"}),this._show("Soal dihapus!"),this._render()}_updThreshold(t,e){this.thresholds={...this.thresholds,[t]:parseInt(e)},this._save(z.THRESHOLD_KEY,this.thresholds),this._render()}_updGrade(t,e){this.grades={...this.grades,[t]:parseInt(e)},this._save(z.GRADES_KEY,this.grades),this._render()}_render(){this.shadowRoot.innerHTML=`
      <style>${z.CSS}</style>
      ${this._renderToast()}
      ${this._connected?this._renderHeader():""}
      ${this._renderTabs()}
      ${this._renderContent()}
    `,this._bind()}_renderToast(){return this._toast?`<div class="t">${this._toast}</div>`:""}_renderHeader(){return'<div class="hd"><div><h1>\u{1F3AF} Dashboard Pembelajaran</h1><p>Kuis + Kehadiran + Nilai</p></div><div class="hdr"><span class="b g">Online</span><button class="bs" data-a="disc">\u{1F50C}</button></div></div>'}_renderTabs(){return`<div class="tb">${(this._connected?[["quiz","\u{1F4DD} Kuis"],["attendance","\u{1F4CA} Kehadiran"],["grades","\u{1F4D6} Nilai"],["editor","\u2699\uFE0F Soal"],["settings","\u{1F527} Atur"]]:[["setup","\u2699\uFE0F Setup"]]).map(([t,e])=>`<button class="tbb ${this._tab===t?"a":""}" data-tab="${t}">${e}</button>`).join("")}</div>`}_renderContent(){if(!this._connected||this._tab==="setup")return this._renderSetup();switch(this._tab){case"quiz":return this._renderQuiz();case"attendance":return this._renderAtt();case"grades":return this._renderGrade();case"editor":return this._renderEditor();case"settings":return this._renderSettings();default:return this._renderQuiz()}}_renderSetup(){return`
      <div class="c">
        <div class="sc">
          <h2 style="justify-content:center">\u2699\uFE0F Setup Koneksi</h2>
          <p style="color:#666;margin-bottom:20px">Hubungkan dashboard ke Google Sheets untuk menyimpan data.</p>
          <div class="so">
            <h3>\u{1F517} Apps Script URL</h3>
            <p>Paste URL Apps Script Web App Anda.</p>
            <div class="ir">
              <input id="ai" placeholder="https://script.google.com/macros/s/xxx/exec">
              <button id="ca" class="b p">Hubungkan</button>
            </div>
          </div>
          <div class="dv"></div>
          <div class="so">
            <h3>\u{1F4CA} Spreadsheet ID (opsional)</h3>
            <p>Atau masukkan ID spreadsheet langsung.</p>
            <div class="ir">
              <input id="si" placeholder="ID Spreadsheet atau URL">
              <button id="cs" class="b s">Hubungkan</button>
            </div>
          </div>
          <div class="ti">\u{1F4A1} Tip: Anda juga bisa set atribut <code>apps-script-url</code> langsung di tag HTML.</div>
        </div>
      </div>
    `}_renderQuiz(){switch(this.quiz.screen){case"name":return this._renderQName();case"question":return this._renderQQuestion();case"result":return this._renderQResult();default:return this._renderQName()}}_renderQName(){return`<div class="c"><div class="qc"><h2>\u{1F4DD} Kuis Interaktif</h2><p style="color:#666;margin-bottom:16px">Masukkan nama Anda.</p><div class="qi"><input id="qn" placeholder="Nama Anda..." autofocus></div><button id="qs" class="b p fw">Mulai Kuis</button><p style="text-align:center;font-size:12px;color:#888;margin-top:12px">${this.questions.length} soal</p></div></div>`}_renderQQuestion(){const t=this.questions[this.quiz.idx];return`<div class="c"><div class="qc">
      <div class="qh"><span>Soal ${this.quiz.idx+1}/${this.questions.length}</span><span>Skor: ${this.quiz.score}</span></div>
      <div class="qq">${t.question}</div>
      <div class="qa">${t.choices.map((e,i)=>{let a="qab";return this.quiz.answered&&(i===t.correctIndex?a+=" cc":i===this.quiz.sel&&(a+=" cw")),`<button class="${a}" ${this.quiz.answered?"disabled":""} data-choice="${i}">${e}</button>`}).join("")}</div>
      ${this.quiz.fb?`<div class="qf ${this.quiz.fbPos?"p":"n"}">${this.quiz.fb}</div>`:""}
    </div></div>`}_renderQResult(){const t=Math.round(this.quiz.score/this.questions.length*100);let e="Jangan Menyerah! Coba Lagi!";return t>=80?e="Luar Biasa! \u{1F389}":t>=50&&(e="Bagus! \u{1F4AA}"),`<div class="c"><div class="rc">
      <h2>\u{1F38A} Hasil Kuis</h2><div class="ri">Nama: <strong>${this.quiz.name}</strong></div><div class="ri">Skor: <strong>${this.quiz.score}/${this.questions.length}</strong></div>
      <div class="rp">${t}%</div><p class="rm">${e}</p><button id="qr" class="b p fw">Mulai Ulang</button>
      ${this._url?'<p style="text-align:center;font-size:12px;color:#4caf50;margin-top:12px">\u2705 Tersimpan ke Sheets</p>':""}
    </div></div>`}_renderAtt(){const t=this._weekly(),e=this._streak(),i=this._heatmap(),a=this._logs(),s=this.thresholds,o=56,l=2*Math.PI*o,y=l-t.pct/100*l;return`
      <div class="c"><h2>\u{1F4CA} Pelacakan Aktivitas</h2><p style="font-size:13px;color:#666;margin-bottom:4px">Total: <strong>${a.length}</strong> | Streak: <strong>\u{1F525} ${e} hari</strong></p>
        <div class="smb"><span class="sl">Simulasi:</span><button class="bs" data-sim="reading">\u{1F4D6}</button><button class="bs" data-sim="download">\u{1F4E5}</button><button class="bs" data-sim="discussion">\u{1F4AC}</button><button class="bs dg" id="cl">\u{1F5D1}\uFE0F Reset</button></div>
      </div>
      <div class="g2">
        <div class="c"><h3>\u{1F4C5} Kehadiran Pekan Ini</h3>
          <div class="gw"><svg width="140" height="140" viewBox="0 0 140 140" style="transform:rotate(-90deg)"><circle fill="none" stroke="#f3f0fa" stroke-width="10" cx="70" cy="70" r="${o}"/><circle fill="none" stroke="#6750a4" stroke-width="10" stroke-linecap="round" cx="70" cy="70" r="${o}" stroke-dasharray="${l}" stroke-dashoffset="${y}"/></svg><div class="gv">${t.pct}%</div></div>
          <div style="text-align:center;margin-top:8px"><span class="b ${t.pct>=75?"g":"o"}">${t.status}</span></div>
          <div class="cll" style="margin-top:16px">
            ${this._cri("\u{1F4D6}","Membaca Modul",t.counts.reading,s.minReading,t.goals.reading)}
            ${this._cri("\u{1F4DD}","Kuis Selesai",t.counts.quiz,s.minQuiz,t.goals.quiz)}
            ${this._cri("\u{1F4AC}","Forum & Diskusi",t.counts.discussion,s.minDiscussion,t.goals.discussion)}
            ${this._cri("\u{1F4C8}","Total Aktivitas",t.counts.total,s.minWeeklyActivities,t.goals.total)}
          </div>
        </div>
        <div class="c"><h3>\u{1F525} Konsistensi Belajar</h3>
          <div class="sm2"><div class="sm"><div class="sml">Total</div><div class="smv">${a.length}</div></div><div class="sm"><div class="sml">Streak</div><div class="smv">\u{1F525} ${e} hari</div></div></div>
          <div style="font-size:12px;font-weight:600;color:#666;text-align:center;margin:16px 0 8px">Peta Aktivitas 28 Hari</div>
          <div class="hmh"><span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span></div>
          <div class="hmg">${i.map(h=>{let g="";return h.count>0&&h.count<=2?g="l1":h.count>2&&h.count<=4?g="l2":h.count>4&&h.count<=7?g="l3":h.count>7&&(g="l4"),`<div class="hc ${g}" title="${h.date.toLocaleDateString("id-ID")}: ${h.count}">${h.count||""}</div>`}).join("")}</div>
          <div class="hml"><span>Sedikit</span><div class="lb" style="background:#f3f0fa"></div><div class="lb" style="background:#e3d9fc"></div><div class="lb" style="background:#c7b3fc"></div><div class="lb" style="background:#9d7bfc"></div><div class="lb" style="background:#6750a4"></div><span>Banyak</span></div>
          <div style="margin-top:16px;max-height:200px;overflow-y:auto">
            <div style="font-size:12px;font-weight:600;color:#666;margin-bottom:8px">Log Terbaru:</div>
            ${a.slice(0,5).map(h=>`<div class="li ${h.type}"><span class="lt">${new Date(h.timestamp).toLocaleString("id-ID")}</span><span class="ld">${h.description}</span></div>`).join("")}
          </div>
        </div>
      </div>
    `}_cri(t,e,i,a,s){return`<div class="cri"><div class="crl"><span class="cric">${t}</span><div><div class="crn">${e}</div><div class="crp">${i} dari ${a}</div></div></div><span>${s?"\u2705":"\u23F3"}</span></div>`}_renderGrade(){const t=this._grade(),e=this.grades;return`<div class="c"><h2>\u{1F4D6} Transparansi Nilai</h2>
      <div class="gg">
        <div class="gi"><div class="gl">Kehadiran</div><div class="gv">${t.att}%</div></div>
        <div class="gi"><div class="gl">Kuis</div><div class="gv">${t.quiz}%</div></div>
        <div class="gi"><div class="gl">UTS</div><div class="gv">${e.uts}%</div></div>
        <div class="gi"><div class="gl">UAS</div><div class="gv">${e.uas}%</div></div>
        <div class="gi hl"><div class="gl">Nilai Akhir</div><div class="gv br">${t.final}</div></div>
        <div class="gi hl"><div class="gl">Grade</div><div class="gv br" style="font-size:32px">${t.grade}</div></div>
      </div>
      <table class="gt"><thead><tr><th>Komponen</th><th>Bobot</th><th>Nilai</th></tr></thead><tbody>
        <tr><td class="bld">Kehadiran</td><td>${e.attendanceWeight}%</td><td>${t.att}</td></tr>
        <tr><td class="bld">Kuis</td><td>${e.quizWeight}%</td><td>${t.quiz}</td></tr>
        <tr><td class="bld">UTS</td><td>${e.utsWeight}%</td><td>${e.uts}</td></tr>
        <tr><td class="bld">UAS</td><td>${e.uasWeight}%</td><td>${e.uas}</td></tr>
        <tr><td class="bld" colspan="3">Final = (${t.att}\xD7${e.attendanceWeight}% + ${t.quiz}\xD7${e.quizWeight}% + ${e.uts}\xD7${e.utsWeight}% + ${e.uas}\xD7${e.uasWeight}%)\xF7100 = <strong>${t.final}</strong> (${t.grade})</td></tr>
      </tbody></table>
      <div class="ti">\u{1F9EE} Bobot bisa diubah di tab <strong>Atur</strong></div>
    </div>`}_renderEditor(){const t=this._edit;return`<div class="c"><h2>\u2699\uFE0F Edit Soal (${this.questions.length})</h2>
      <div class="ef"><h3>${this._editIdx>=0?"Edit #"+(this._editIdx+1):"Tambah Baru"}</h3>
        <textarea class="et" data-ed="q" placeholder="Pertanyaan...">${t.q||""}</textarea>
        <div class="ec">${[0,1,2,3].map(e=>`<div class="ecr"><input data-ed="c${e}" placeholder="Pilihan ${e+1}" value="${t["c"+e]||""}"><label class="rl"><input type="radio" name="ca" value="${e}" ${String(t.correct)===String(e)?"checked":""} data-ed="correct"> Benar</label></div>`).join("")}</div>
        ${this._editIdx>=0?'<div class="ea"><button id="sv" class="b p">Simpan</button><button id="cx" class="b s">Batal</button></div>':'<button id="aq" class="b p fw">Tambah Soal</button>'}
      </div>
      <div style="margin-top:20px"><h3>Daftar Soal</h3>
        ${this.questions.map((e,i)=>`<div class="qcrd"><div class="qi2"><span class="qn">#${i+1}</span><span>${e.question}</span></div><div class="qa2"><button class="bs" data-edit="${i}">\u270F\uFE0F</button><button class="bs dg" data-del="${i}" ${this.questions.length<=3?"disabled":""}>\u{1F5D1}\uFE0F</button></div></div>`).join("")}
      </div>
    </div>`}_renderSettings(){const t=this.thresholds,e=this.grades;return`<div class="c"><h2>\u{1F527} Pengaturan</h2>
      <h3 style="margin-top:20px">Threshold Kehadiran</h3>
      <div class="sg">${[{l:"Total Aktivitas",k:"minWeeklyActivities",v:t.minWeeklyActivities},{l:"Membaca",k:"minReading",v:t.minReading},{l:"Kuis",k:"minQuiz",v:t.minQuiz},{l:"Diskusi",k:"minDiscussion",v:t.minDiscussion}].map(i=>`<div class="si"><label>${i.l}</label><input class="sin" data-key="${i.k}" data-type="th" value="${i.v}" type="number"></div>`).join("")}</div>
      <h3 style="margin-top:20px">Bobot Nilai</h3>
      <div class="sg">${[{l:"Nilai UTS",k:"uts",v:e.uts},{l:"Nilai UAS",k:"uas",v:e.uas},{l:"Bobot Kehadiran (%)",k:"attendanceWeight",v:e.attendanceWeight},{l:"Bobot Kuis (%)",k:"quizWeight",v:e.quizWeight},{l:"Bobot UTS (%)",k:"utsWeight",v:e.utsWeight},{l:"Bobot UAS (%)",k:"uasWeight",v:e.uasWeight}].map(i=>`<div class="si"><label>${i.l}</label><input class="sin" data-key="${i.k}" data-type="gr" value="${i.v}" type="number"></div>`).join("")}</div>
      <div class="ti w">\u26A0\uFE0F Total bobot: ${e.attendanceWeight+e.quizWeight+e.utsWeight+e.uasWeight}% (sebaiknya 100%)</div>
    </div>`}_bind(){const t=c=>this.shadowRoot.querySelector(c),e=c=>this.shadowRoot.querySelectorAll(c);e(".tbb").forEach(c=>c.onclick=()=>{this._tab=c.dataset.tab,this._render()});const i=t("#ca");i&&(i.onclick=()=>{const c=t("#ai");c&&this._connect(c.value)});const a=t("#cs");a&&(a.onclick=()=>{const c=t("#si");c&&this._connectSheets(c.value)});const s=t('[data-a="disc"]');s&&(s.onclick=()=>this._disc());const o=t("#qs");o&&(o.onclick=()=>{const c=t("#qn");c&&this._start(c.value)});const l=t("#qn");l&&(l.onkeydown=c=>{c.key==="Enter"&&this._start(l.value)}),e(".qab:not([disabled])").forEach(c=>c.onclick=()=>this._select(parseInt(c.dataset.choice)));const y=t("#qr");y&&(y.onclick=()=>this._restart()),e("[data-sim]").forEach(c=>c.onclick=()=>this._sim(c.dataset.sim));const h=t("#cl");h&&(h.onclick=()=>this._clearLogs());const g=t("#aq");g&&(g.onclick=()=>this._addQ());const A=t("#sv");A&&(A.onclick=()=>this._saveQ());const q=t("#cx");q&&(q.onclick=()=>{this._editIdx=-1,this._edit={q:"",c0:"",c1:"",c2:"",c3:"",correct:"0"},this._render()}),e("[data-edit]").forEach(c=>c.onclick=()=>this._editQ(parseInt(c.dataset.edit))),e("[data-del]").forEach(c=>c.onclick=()=>this._delQ(parseInt(c.dataset.del))),e("[data-ed]").forEach(c=>c.oninput=w=>{const C=w.target.dataset.ed;this._edit[C==="correct"?"correct":C]=(w.target.type,w.target.value)}),e('.sin[data-type="th"]').forEach(c=>c.onchange=w=>this._updThreshold(w.target.dataset.key,w.target.value)),e('.sin[data-type="gr"]').forEach(c=>c.onchange=w=>this._updGrade(w.target.dataset.key,w.target.value))}static CSS=`
    :host { display:block; font-family:'Roboto','Segoe UI',sans-serif; color:#1c1b1f; max-width:960px; margin:0 auto; }
    * { box-sizing:border-box; margin:0; padding:0; }
    .hd { background:linear-gradient(135deg,#6750a4,#9c7cf4); color:white; border-radius:16px; padding:20px 24px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; }
    .hd h1 { font-size:22px; margin-bottom:4px; }
    .hd p { font-size:13px; opacity:0.9; }
    .hdr { display:flex; gap:8px; align-items:center; }
    .b { display:inline-block; padding:4px 10px; border-radius:99px; font-size:11px; font-weight:500; }
    .b.g { background:#d1fae5; color:#065f46; }
    .b.o { background:#fef3c7; color:#92400e; }
    .tb { display:flex; border-bottom:2px solid #e0e0e0; margin-bottom:20px; overflow-x:auto; }
    .tbb { padding:10px 18px; background:none; border:none; border-bottom:3px solid transparent; margin-bottom:-2px; cursor:pointer; font-size:13px; font-weight:500; color:#666; white-space:nowrap; transition:all .2s; }
    .tbb:hover { color:#6750a4; background:#f3f0fa; }
    .tbb.a { color:#6750a4; border-bottom-color:#6750a4; }
    .c { background:white; border-radius:14px; padding:22px; margin-bottom:20px; box-shadow:0 2px 8px rgba(0,0,0,.06); border:1px solid #e8e3f5; }
    .c h2 { color:#6750a4; font-size:18px; margin-bottom:14px; display:flex; align-items:center; gap:8px; }
    .c h3 { color:#49454f; font-size:15px; margin-bottom:10px; }
    .b { display:inline-block; padding:10px 20px; border:none; border-radius:8px; font-size:14px; font-weight:500; cursor:pointer; transition:all .2s; }
    .b.p { background:#6750a4; color:white; }
    .b.p:hover { background:#7c6bb5; }
    .b.s { background:transparent; color:#6750a4; border:1px solid #6750a4; }
    .b.s:hover { background:#f3f0fa; }
    .b.fw { width:100%; text-align:center; }
    .bs { padding:5px 10px; border:1px solid #e0e0e0; border-radius:6px; background:white; font-size:12px; cursor:pointer; transition:all .2s; }
    .bs:hover { background:#f3f0fa; }
    .bs.dg { color:#ba1a1a; border-color:#ffcdd2; }
    .bs.dg:hover { background:#ffebee; }
    .sc { max-width:600px; margin:20px auto; text-align:center; }
    .so { background:#fcfbfe; border-radius:10px; padding:18px; margin-bottom:16px; text-align:left; }
    .so h3 { font-size:14px; color:#6750a4; margin-bottom:6px; }
    .so p { font-size:12px; color:#666; margin-bottom:10px; }
    .ir { display:flex; gap:8px; }
    .ir input { flex:1; padding:10px 12px; border:1px solid #ccc; border-radius:8px; font-size:13px; font-family:inherit; }
    .ir input:focus { outline:none; border-color:#6750a4; box-shadow:0 0 0 2px rgba(103,80,164,.2); }
    .dv { height:1px; background:#e0e0e0; margin:16px 0; }
    .qc { max-width:560px; margin:0 auto; }
    .qi { margin-bottom:16px; }
    .qi input { width:100%; padding:12px 16px; border:2px solid #e0e0e0; border-radius:10px; font-size:16px; font-family:inherit; }
    .qi input:focus { outline:none; border-color:#6750a4; }
    .qh { display:flex; justify-content:space-between; font-weight:600; color:#6750a4; margin-bottom:20px; }
    .qq { font-size:18px; font-weight:600; margin-bottom:20px; line-height:1.5; }
    .qa { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:20px; }
    .qab { padding:14px 16px; background:white; border:2px solid #e0e0e0; border-radius:10px; font-size:14px; cursor:pointer; transition:all .2s; text-align:left; font-family:inherit; }
    .qab:hover:not(:disabled) { border-color:#6750a4; background:#f3f0fa; }
    .qab:disabled { cursor:not-allowed; opacity:.7; }
    .qab.cc { border-color:#10b981; background:#d1fae5; color:#065f46; }
    .qab.cw { border-color:#ef4444; background:#fee2e2; color:#991b1b; }
    .qf { padding:14px; border-radius:10px; text-align:center; font-weight:600; }
    .qf.p { background:#d1fae5; color:#065f46; }
    .qf.n { background:#fee2e2; color:#991b1b; }
    .rc { text-align:center; }
    .ri { font-size:16px; margin-bottom:8px; color:#49454f; }
    .rp { font-size:48px; font-weight:700; color:#6750a4; margin:16px 0; }
    .rm { font-size:18px; color:#6750a4; margin-bottom:20px; }
    .g2 { display:grid; grid-template-columns:repeat(auto-fit,minmax(340px,1fr)); gap:20px; margin-bottom:20px; }
    .gw { position:relative; width:140px; height:140px; margin:0 auto; }
    .gv { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-size:26px; font-weight:700; }
    .cll { display:flex; flex-direction:column; gap:10px; }
    .cri { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; background:#fcfbfe; border-radius:8px; }
    .crl { display:flex; align-items:center; gap:10px; }
    .cric { font-size:20px; }
    .crn { font-weight:500; font-size:13px; }
    .crp { font-size:11px; color:#666; }
    .smb { display:flex; align-items:center; gap:6px; margin-bottom:14px; flex-wrap:wrap; }
    .sl { font-size:12px; color:#666; font-weight:500; }
    .sm2 { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px; }
    .sm { background:#fbf9ff; border-radius:8px; padding:12px; text-align:center; }
    .sml { font-size:11px; color:#666; }
    .smv { font-size:20px; font-weight:700; color:#6750a4; margin-top:4px; }
    .hmh { display:flex; justify-content:center; gap:5px; margin-bottom:6px; font-size:10px; color:#666; font-weight:600; }
    .hmh span { width:28px; text-align:center; }
    .hmg { display:grid; grid-template-columns:repeat(7,1fr); gap:4px; max-width:280px; margin:0 auto; }
    .hc { aspect-ratio:1; border-radius:3px; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:600; cursor:default; color:#9c99a6; background:#f3f0fa; transition:transform .15s; }
    .hc:hover { transform:scale(1.2); }
    .hc.l1 { background:#e3d9fc; color:#6750a4; }
    .hc.l2 { background:#c7b3fc; color:white; }
    .hc.l3 { background:#9d7bfc; color:white; }
    .hc.l4 { background:#6750a4; color:white; }
    .hml { display:flex; justify-content:center; align-items:center; gap:4px; margin-top:10px; font-size:10px; color:#666; }
    .lb { width:12px; height:12px; border-radius:2px; }
    .li { display:flex; gap:8px; align-items:flex-start; padding:6px 8px; border-radius:4px; font-size:11px; border-left:3px solid #ccc; margin-bottom:4px; background:#f8f9fa; }
    .li.reading { border-left-color:#4f46e5; }
    .li.quiz { border-left-color:#ec4899; }
    .li.download { border-left-color:#10b981; }
    .li.discussion { border-left-color:#f59e0b; }
    .lt { color:#888; min-width:120px; }
    .ld { flex:1; }
    .gg { display:grid; grid-template-columns:repeat(auto-fit,minmax(120px,1fr)); gap:12px; margin-bottom:20px; }
    .gi { background:#fcfbfe; border:1px solid #f1eef8; border-radius:10px; padding:14px; text-align:center; }
    .gi.hl { background:#f3f0fa; border-color:#c7b3fc; }
    .gl { font-size:10px; color:#666; text-transform:uppercase; letter-spacing:.5px; font-weight:600; }
    .gv { font-size:22px; font-weight:700; color:#1c1b1f; margin-top:4px; }
    .gv.br { color:#6750a4; }
    .gt { width:100%; border-collapse:collapse; font-size:13px; }
    .gt th { background:#f3f0fa; color:#6750a4; font-weight:600; padding:10px; text-align:left; }
    .gt td { padding:10px; border-bottom:1px solid #f0f0f0; }
    .bld { font-weight:600; }
    .ef { background:#fcfbfe; border-radius:10px; padding:16px; margin-bottom:16px; }
    .et { width:100%; min-height:70px; padding:10px; border:1px solid #ccc; border-radius:6px; font-size:13px; font-family:inherit; resize:vertical; margin-bottom:12px; }
    .et:focus { outline:none; border-color:#6750a4; }
    .ecr { display:flex; gap:10px; align-items:center; margin-bottom:8px; }
    .ecr input { flex:1; padding:8px 10px; border:1px solid #ddd; border-radius:6px; font-size:13px; font-family:inherit; }
    .ecr input:focus { outline:none; border-color:#6750a4; }
    .rl { font-size:12px; color:#666; display:flex; align-items:center; gap:4px; cursor:pointer; }
    .ea { display:flex; gap:8px; margin-top:10px; }
    .qcrd { display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:#f8f9fa; border-radius:6px; margin-bottom:6px; }
    .qi2 { display:flex; align-items:center; gap:10px; flex:1; }
    .qn { font-weight:600; color:#6750a4; min-width:30px; }
    .qa2 { display:flex; gap:4px; }
    .sg { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px; }
    .si { margin-bottom:8px; }
    .si label { display:block; font-size:12px; color:#666; font-weight:500; margin-bottom:4px; }
    .sin { width:100%; padding:8px 10px; border:1px solid #ccc; border-radius:6px; font-size:13px; font-family:inherit; }
    .sin:focus { outline:none; border-color:#6750a4; }
    .ti { padding:12px 16px; border-radius:8px; font-size:13px; margin:12px 0; background:#e3f2fd; border-left:4px solid #2196f3; color:#1565c0; }
    .ti.w { background:#fff3e0; border-left-color:#ff9800; color:#e65100; }
    .t { position:fixed; bottom:24px; right:24px; background:#323232; color:white; padding:12px 20px; border-radius:8px; font-size:14px; z-index:9999; box-shadow:0 4px 12px rgba(0,0,0,.2); animation:si .3s ease; }
    @keyframes si { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
    @media(max-width:600px){ .qa,.hmg{grid-template-columns:1fr} .ir{flex-direction:column} .g2{grid-template-columns:1fr} .gg{grid-template-columns:repeat(3,1fr)} .sg{grid-template-columns:1fr 1fr} }
  `;static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Full Quiz Dashboard",description:"Dashboard pembelajaran lengkap: Kuis + Kehadiran + Heatmap + Gradebook dengan integrasi Google Sheets",icon:"icons:dashboard",color:"purple",tags:["Education","Interactive","Assessment","Analytics"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",description:"URL Google Apps Script Web App untuk sinkronisasi data",inputMethod:"textfield",required:!0},{property:"sheetName",title:"Nama Pertemuan/Sheet",description:"Nama sheet pertemuan (contoh: 'Pertemuan 2')",inputMethod:"textfield",default:"Pertemuan"}],advanced:[{property:"spreadsheetId",title:"Spreadsheet ID (opsional)",inputMethod:"textfield"}]}}}get appsScriptUrl(){return this._url}set appsScriptUrl(t){this._url=t,this.isConnected&&this._render()}get sheetName(){return this._sheet}set sheetName(t){this._sheet=t,this._save(z.SHEET_NAME_KEY,t),this.isConnected&&this._render()}}customElements.define("full-quiz-dashboard",z)});export default ee();
