var Ut=(k,t)=>()=>{try{return t||k((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};import{css as Bt,html as O}from"@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";import{PolarisFlexTheme as Dt}from"@haxtheweb/polaris-theme/lib/polaris-flex-theme.js";import"@haxtheweb/haxcms-elements/lib/ui-components/blocks/site-children-block.js";import{DDDSuper as E}from"@haxtheweb/d-d-d/d-d-d.js";import{LitElement as P,css as q,html as n}from"lit";import{I18NMixin as L}from"@haxtheweb/i18n-manager/lib/I18NMixin.js";var Ot=Ut((Yt,j)=>{class it extends Dt{static get styles(){return[super.styles,Bt`
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
      `]}renderHeaderSlot(){return O``}renderSideBar(){return O`
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
    `}renderFooterContactInformation(){return O``}renderFooterSecondarySlot(){return O``}renderFooterPrimarySlot(){return O``}static get tag(){return"custom-haxquiz-theme"}constructor(){super()}}if(customElements.define(it.tag,it),typeof customElements<"u"){class k extends HTMLElement{static get observedAttributes(){return["message","type","duration","visible"]}constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._message="",this._type="info",this._duration=5e3,this._visible=!1,this._timeoutId=null,this.render(),this._setupEventListeners()}get message(){return this._message}set message(e){this._message=e||"",this._renderContent(),this.setAttribute("message",this._message)}get type(){return this._type}set type(e){this._type=e||"info",this._renderContent(),this.setAttribute("type",this._type)}get duration(){return this._duration}set duration(e){this._duration=parseInt(e)||5e3,this.setAttribute("duration",this._duration.toString())}get visible(){return this._visible}set visible(e){this._visible=e===!0||e==="true"||e==="",this._updateVisibility(),this.setAttribute("visible",this._visible?"":"false")}connectedCallback(){this._updateVisibility()}disconnectedCallback(){this._clearTimeout()}attributeChangedCallback(e,i,a){if(i!==a)switch(e){case"message":this.message=a;break;case"type":this.type=a;break;case"duration":this.duration=a;break;case"visible":this.visible=a;break}}_setupEventListeners(){this._shadow.addEventListener("click",e=>{e.target.classList.contains("close-btn")&&this.hide()})}_renderContent(){const e={info:"notif-info",success:"notif-success",warning:"notif-warning",error:"notif-error"}[this._type]||"notif-info";this._shadow.innerHTML=`
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
      `}_updateVisibility(){const e=this._shadow.querySelector(".notification");e&&e.classList.toggle("show",this._visible),this._visible&&this._timeoutId===null&&this._duration>0&&(this._timeoutId=setTimeout(()=>{this.hide()},this._duration))}_clearTimeout(){this._timeoutId&&(clearTimeout(this._timeoutId),this._timeoutId=null)}show(){this._clearTimeout(),this._visible=!0,this._updateVisibility(),this._duration>0&&(this._timeoutId=setTimeout(()=>{this.hide()},this._duration)),this.dispatchEvent(new CustomEvent("notif-show",{bubbles:!0,composed:!0,detail:{message:this._message,type:this._type}}))}hide(){this._clearTimeout(),this._visible=!1,this._updateVisibility(),this.dispatchEvent(new CustomEvent("notif-hide",{bubbles:!0,composed:!0,detail:{message:this._message,type:this._type}}))}render(){this._renderContent()}}customElements.define("notif-element",k)}let st=class extends L(E(P)){static get tag(){return"todo-list"}static get properties(){return{...super.properties,tasks:{type:Array,attribute:"tasks",reflect:!0,converter:{fromAttribute(t){if(t==null||t==="")return;if(Array.isArray(t)||typeof t=="object")return t;const e=String(t).trim();if(!(!e||e==="[object Object]"||e==="undefined"||e==="null")&&(e.startsWith("[")||e.startsWith("{")))try{const i=JSON.parse(e);return Array.isArray(i)?i:i&&typeof i=="object"&&Array.isArray(i.tasks)?i.tasks:void 0}catch{return}},toAttribute(t){if(!Array.isArray(t))return null;try{return JSON.stringify(t)}catch{return null}}}},editable:{type:Boolean,attribute:!0,reflect:!0},editing:{type:Boolean,attribute:!0,reflect:!0},_validationError:{type:String},_screen:{state:!0},_tempTasks:{state:!0},_editingIndex:{state:!0},_tempTaskText:{state:!0},_editorOrigin:{state:!0}}}constructor(){super(),this.tasks=[],this.editable=!1,this.editing=!1,this._validationError="",this._screen="list",this._tempTasks=[],this._editingIndex=-1,this._tempTaskText="",this._editorOrigin="list",this.t={addTask:"Add Task",inputPlaceholder:"Enter a new task...",deleteTask:"Delete task",emptyMessage:"No tasks yet. Add one above!",taskCompleted:"Mark as incomplete",taskIncomplete:"Mark as complete",validationErrorMinLength:"Task must be at least 3 characters",validationErrorMaxLength:"Task must be no more than 50 characters",editTitle:"Edit Task List",closeEditor:"Close Editor",addTaskBtnEditor:"Add Task",editTaskBtn:"Edit",saveEditBtn:"Save",cancelEditBtn:"Cancel",saveAllBtn:"Save & Exit",cancelAllBtn:"Cancel",emptyTaskError:"Task cannot be empty",ariaEditTitle:"Task list editor panel",ariaOpenEditor:"Open task list editor",ariaCloseEditor:"Close task list editor",ariaTaskInputEditor:"Editor task input",ariaTasksListEditor:"Editable task list",ariaEditTask:"Edit this task",ariaDeleteTask:"Delete this task",ariaSaveAll:"Save all task changes",ariaCancelAll:"Cancel all task changes"}}updated(t){super.updated&&super.updated(t),Array.isArray(this.tasks)||(this.tasks=[])}get _inHaxEditor(){return!!(globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"&&globalThis.HaxStore.requestAvailability().editMode)}static get styles(){return[super.styles,q`
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
      `]}render(){return this._screen==="editor"?this._renderEditorScreen():n`
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

      ${this._validationError?n`<p id="task-input-error" role="alert" class="validation-error">
            ${this._validationError}
          </p>`:""}
      ${this.tasks.length===0?n`<p class="empty-message">${this.t.emptyMessage}</p>`:n`
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
    `}_renderEditorScreen(){return n`
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
          ${this._tempTasks.map((t,e)=>n`
              <div class="question-card">
                ${this._editingIndex===e?n`
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
                    `:n`
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
    `}_renderTask(t){return n`
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
    `}_handleInputKeydown(t){t.key==="Enter"&&this._addTask()}_handleAddClick(){this._addTask()}_handleInputChange(t){t.target.value.trim().length===0&&(this._validationError="")}_handleDelete(t){this.tasks=this.tasks.filter(e=>e.id!==t)}_handleToggleComplete(t,e){this.tasks=this.tasks.map(i=>i.id===t?{...i,completed:e}:i)}_addTask(){const t=this.shadowRoot.querySelector("#task-input"),e=t.value.trim();if(!e){this._validationError="";return}if(e.length<3){this._validationError=this.t.validationErrorMinLength;return}if(e.length>50){this._validationError=this.t.validationErrorMaxLength;return}this._validationError="";const i={id:typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now(),text:e,completed:!1};this.tasks=[...this.tasks,i],t.value="",t.focus()}_openEditor(){this._screen==="list"&&(this.editing||(this.editing=!0,this._editingIndex=-1,this._tempTaskText="",this._tempTasks=JSON.parse(JSON.stringify(this.tasks||[])),this._editorOrigin="list",this._screen="editor"))}_addTaskEditor(){const t=(this._tempTaskText||"").trim();if(t){if(t.length<3){this._validationError=this.t.validationErrorMinLength;return}if(t.length>50){this._validationError=this.t.validationErrorMaxLength;return}this._validationError="",this._tempTasks=[...this._tempTasks,{id:typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now(),text:t,completed:!1}],this._tempTaskText=""}}_deleteTaskEditor(t){this._tempTasks=this._tempTasks.filter((e,i)=>i!==t),this._editingIndex===t?(this._editingIndex=-1,this._tempTaskText=""):this._editingIndex>t&&(this._editingIndex=this._editingIndex-1)}_toggleCompleteEditor(t,e){this._tempTasks=this._tempTasks.map((i,a)=>a===t?{...i,completed:e}:i)}_startEditTask(t){this._editingIndex=t,this._tempTaskText=this._tempTasks[t]?.text||""}_saveEditTask(){const t=(this._tempTaskText||"").trim();if(!t){this._validationError=this.t.emptyTaskError;return}if(t.length<3){this._validationError=this.t.validationErrorMinLength;return}if(t.length>50){this._validationError=this.t.validationErrorMaxLength;return}this._editingIndex<0||this._editingIndex>=this._tempTasks.length||(this._validationError="",this._tempTasks=this._tempTasks.map((e,i)=>i===this._editingIndex?{...e,text:t}:e),this._editingIndex=-1,this._tempTaskText="")}_cancelEditTask(){this._editingIndex=-1,this._tempTaskText=""}_saveAll(){this._screen==="editor"&&(this.tasks=JSON.parse(JSON.stringify(this._tempTasks||[])),this.editing=!1,this._editingIndex=-1,this._tempTaskText="",this._screen=this._editorOrigin||"list",this._editorOrigin="list")}_cancelAll(){this._screen==="editor"&&(this.editing=!1,this._editingIndex=-1,this._tempTaskText="",this._screen=this._editorOrigin||"list",this._editorOrigin="list")}static get haxProperties(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Todo List",description:"A simple task management web component",icon:"icons:assignment",color:"blue",tags:["Productivity","Content"]},settings:{configure:[],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_validationError","_screen","_tempTasks","_editingIndex","_tempTaskText","_editorOrigin","editing","editable"]}}}};globalThis.customElements.define(st.tag,st);const Q="a3_attendance_logs",U="a3_last_activity_date";function B(){const k=new Date;return`${k.getFullYear()}-${String(k.getMonth()+1).padStart(2,"0")}-${String(k.getDate()).padStart(2,"0")}`}function R(){const k=B();if(localStorage.getItem(U)!==k)return localStorage.setItem(Q,"[]"),localStorage.setItem(U,k),[];const t=localStorage.getItem(Q);return t?JSON.parse(t):[]}class at extends L(E(P)){static get tag(){return"activity-logger"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},sheetName:{type:String,attribute:"sheet-name"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},_logs:{state:!0},_expanded:{state:!0},_toastMsg:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.sheetName="Aktivitas",this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this._logs=R(),this._expanded=!1,this._toastMsg="",this._lastScrollTime=0,this._scrollDistance=0,this._handleScroll=this._handleScroll.bind(this),this._handleQuizSaved=this._handleQuizSaved.bind(this),this._handleDiscussionSaved=this._handleDiscussionSaved.bind(this),this._handleAssignmentSaved=this._handleAssignmentSaved.bind(this),this._handleReadingSaved=this._handleReadingSaved.bind(this),this._handleVisibilityChange=this._handleVisibilityChange.bind(this)}connectedCallback(){super.connectedCallback(),globalThis.addEventListener("scroll",this._handleScroll,{passive:!0}),globalThis.addEventListener("quiz-saved",this._handleQuizSaved),globalThis.addEventListener("discussion-saved",this._handleDiscussionSaved),globalThis.addEventListener("assignment-saved",this._handleAssignmentSaved),globalThis.addEventListener("reading-saved",this._handleReadingSaved),globalThis.addEventListener("visibilitychange",this._handleVisibilityChange);const t=B();localStorage.getItem(U)!==t&&(this._logs=[],localStorage.setItem(Q,"[]"),localStorage.setItem(U,t))}disconnectedCallback(){globalThis.removeEventListener("scroll",this._handleScroll),globalThis.removeEventListener("quiz-saved",this._handleQuizSaved),globalThis.removeEventListener("discussion-saved",this._handleDiscussionSaved),globalThis.removeEventListener("assignment-saved",this._handleAssignmentSaved),globalThis.removeEventListener("reading-saved",this._handleReadingSaved),globalThis.removeEventListener("visibilitychange",this._handleVisibilityChange),super.disconnectedCallback()}_handleScroll(){const t=Date.now();t-this._lastScrollTime<12e4||globalThis.scrollY>1e3&&(this._lastScrollTime=t,this.logActivity("reading",`Membaca materi (scroll ${Math.round(globalThis.scrollY)}px)`))}_handleVisibilityChange(){document.visibilityState==="visible"&&(this._scrollDistance=0)}_handleQuizSaved(t){const e=t.detail?.score||0;this.logActivity("quiz",`Kuis selesai (Skor: ${e}%)`)}_handleDiscussionSaved(t){const e=t.detail?.thread||t.detail?.title||"Forum";this.logActivity("discussion",`Diskusi di: ${e}`)}_handleAssignmentSaved(t){const e=t.detail?.title||"Tugas";this.logActivity("assignment",`Tugas dikumpulkan: ${e}`)}_handleReadingSaved(t){const e=t.detail?.title||"Materi";this.logActivity("reading",`Membaca: ${e}`)}logActivity(t,e){const i=new Date,a=B();localStorage.getItem(U)!==a&&(this._logs=[],localStorage.setItem(Q,"[]"),localStorage.setItem(U,a));const d={id:"log-"+i.getTime(),timestamp:i.toISOString(),date:a,type:t,description:e},l=[d,...this._logs];if(this._logs=l,localStorage.setItem(Q,JSON.stringify(l)),this.appsScriptUrl&&this.studentId){const b=new URLSearchParams({action:"logActivity",timestamp:d.timestamp,date:a,name:this.studentName,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",activityType:t,description:e,sheet:this.sheetName});fetch(`${this.appsScriptUrl}?${b.toString()}`,{redirect:"follow"}).catch(()=>{})}this._showToast(`\u2713 ${e.substring(0,40)}`)}_showToast(t){this._toastMsg=t,setTimeout(()=>{this._toastMsg===t&&(this._toastMsg="")},3e3)}_resetToday(){confirm("Reset semua aktivitas hari ini?")&&(this._logs=[],localStorage.setItem(Q,"[]"),this._showToast("Aktivitas hari ini direset"))}static get styles(){return[super.styles,q`
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
      `]}render(){const t=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"});return n`
      <div class="floating-logger-pill" @click="${()=>this._expanded=!this._expanded}">
        <span class="pulse-dot"></span>
        <span>Aktivitas Hari Ini (${this._logs.length})</span>
      </div>
      ${this._expanded?n`
        <div class="drawer">
          <div class="drawer-header">
            <span>📊 Aktivitas Hari Ini</span>
            <button class="close-btn" @click="${()=>this._expanded=!1}">×</button>
          </div>
          <div class="drawer-content">
            <div class="date-label">📅 ${t}</div>
            <div class="logs-list">
              ${this._logs.length===0?n`<div style="color: var(--ddd-theme-secondary); text-align: center; padding: var(--ddd-spacing-6) 0;">Belum ada aktivitas tercatat hari ini.</div>`:this._logs.map(e=>n`
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
      ${this._toastMsg?n`<div class="toast">${this._toastMsg}</div>`:""}
    `}}globalThis.customElements.define(at.tag,at);class rt extends L(E(P)){static get tag(){return"attendance-tracker"}static get properties(){return{...super.properties,_logs:{state:!0}}}constructor(){super(),this._logs=R()}connectedCallback(){super.connectedCallback(),this._reloadHandler=()=>{this._logs=R()},globalThis.addEventListener("a3-activity-logged",this._reloadHandler),globalThis.addEventListener("storage",this._reloadHandler)}disconnectedCallback(){globalThis.removeEventListener("a3-activity-logged",this._reloadHandler),globalThis.removeEventListener("storage",this._reloadHandler),super.disconnectedCallback()}_getTodayStats(){const t=B(),e=this._logs.filter($=>$.date===t),i={reading:e.filter($=>$.type==="reading").length,quiz:e.filter($=>$.type==="quiz").length,assignment:e.filter($=>$.type==="assignment").length,discussion:e.filter($=>$.type==="discussion").length,total:e.length},a=i.reading>=1?1:0,d=i.quiz+i.assignment+i.discussion>=1?1:0,l=i.total>=3?1:0,b=a+d+l,A=Math.round(b/3*100);return{counts:i,attendancePercentage:A,status:A>=67?"LENGKAP":A>=34?"PROSES":"BELUM MULAI"}}static get styles(){return[super.styles,q`
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
      `]}render(){const t=this._getTodayStats(),e=65,i=2*Math.PI*e,a=i-t.attendancePercentage/100*i,d=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long"});return n`
      <div class="tracker-card">
        <h3>📊 Status Kehadiran Hari Ini</h3>
        <div class="date-info">📅 ${d}</div>
        <div class="flex-container">
          <div class="gauge-section">
            <div class="gauge-wrapper">
              <svg><circle class="bg-circle" cx="80" cy="80" r="${e}"></circle><circle class="fg-circle" cx="80" cy="80" r="${e}" stroke-dasharray="${i}" stroke-dashoffset="${a}"></circle></svg>
              <div class="gauge-value">${t.attendancePercentage}%</div>
            </div>
            <span class="badge ${t.attendancePercentage>=67?"success":t.attendancePercentage>=34?"warning":"info"}">Status: ${t.status}</span>
          </div>
          <div class="criteria-list">
            <div class="criteria-item">
              <div class="crit-info"><div class="icon">📖</div><div><div class="crit-name">Membaca Materi</div><div class="crit-progress">Tercapai: ${t.counts.reading} dari min. 1 kali</div></div></div>
              <div class="status-indicator ${t.counts.reading>=1?"check":"cross"}">${t.counts.reading>=1?"\u2705":"\u23F3"}</div>
            </div>
            <div class="criteria-item">
              <div class="crit-info"><div class="icon">🎯</div><div><div class="crit-name">Aktivitas Inti (Kuis/Tugas/Diskusi)</div><div class="crit-progress">Tercapai: ${t.counts.quiz+t.counts.assignment+t.counts.discussion} dari min. 1 kali</div></div></div>
              <div class="status-indicator ${t.counts.quiz+t.counts.assignment+t.counts.discussion>=1?"check":"cross"}">${t.counts.quiz+t.counts.assignment+t.counts.discussion>=1?"\u2705":"\u23F3"}</div>
            </div>
            <div class="criteria-item">
              <div class="crit-info"><div class="icon">🔥</div><div><div class="crit-name">Total Aktivitas Hari Ini</div><div class="crit-progress">Tercapai: ${t.counts.total} dari min. 3 kali</div></div></div>
              <div class="status-indicator ${t.counts.total>=3?"check":"cross"}">${t.counts.total>=3?"\u2705":"\u23F3"}</div>
            </div>
          </div>
        </div>
      </div>
    `}}globalThis.customElements.define(rt.tag,rt);class dt extends L(E(P)){static get tag(){return"engagement-score"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},studentId:{type:String,attribute:"student-id"},_history:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.studentId="",this._history=[]}connectedCallback(){super.connectedCallback(),this._fetchHistory()}async _fetchHistory(){if(!this.appsScriptUrl||!this.studentId){this._history=[{date:B(),count:R().length}];return}try{const t=new URLSearchParams({action:"getActivityHistory",studentId:this.studentId,days:28}),e=await(await fetch(`${this.appsScriptUrl}?${t.toString()}`)).json();this._history=e.history||[]}catch(t){console.error("[engagement-score] Fetch failed:",t),this._history=[{date:B(),count:R().length}]}}_getActivityMap(){const t=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],e=new Date,i=[];for(let a=27;a>=0;a--){const d=new Date;d.setDate(e.getDate()-a);const l=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`,b=this._history.find($=>$.date===l),A=b?b.count:0;i.push({date:d,dateStr:l,dayName:t[d.getDay()],count:A})}return i}static get styles(){return[super.styles,q`
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
      `]}render(){const t=this._getActivityMap(),e=t.reduce((d,l)=>d+l.count,0),i=t.filter(d=>d.count>0).length,a=Math.round(i/28*100);return n`
      <div class="engagement-card">
        <h3>🔥 Konsistensi 28 Hari Terakhir</h3>
        <div class="consistency-stats">
          <div class="stat-mini-card"><span class="mini-label">Total Aktivitas</span><span class="mini-val">${e} kali</span></div>
          <div class="stat-mini-card"><span class="mini-label">Hari Aktif</span><span class="mini-val">${i} / 28</span></div>
          <div class="stat-mini-card"><span class="mini-label">Indeks Konsistensi</span><span class="mini-val">${a}%</span></div>
        </div>
        <div class="heatmap-grid">
          ${t.map(d=>{let l="";return d.count===1?l="lvl-1":d.count===2?l="lvl-2":d.count>=3&&d.count<=5?l="lvl-3":d.count>5&&(l="lvl-4"),n`<div class="cell ${l}" title="${d.dateStr}: ${d.count} aktivitas">${d.count>0?d.count:""}</div>`})}
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
    `}}globalThis.customElements.define(dt.tag,dt);class nt extends L(E(P)){static get tag(){return"transparent-gradebook"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},viewMode:{type:String,attribute:"view-mode"},_scores:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.studentId="",this.studentName="",this.viewMode="student",this._scores={kehadiran:0,ulanganHarian:0,uts:0,uas:0}}connectedCallback(){super.connectedCallback(),this._fetchScores()}async _fetchScores(){if(!(!this.appsScriptUrl||!this.studentId))try{const t=new URLSearchParams({action:"getStudentScores",studentId:this.studentId}),e=await(await fetch(`${this.appsScriptUrl}?${t.toString()}`)).json();e.scores&&(this._scores=e.scores)}catch(t){console.error("[gradebook] Fetch failed:",t)}}_getFinalScore(){const t=this._scores.kehadiran*.125+this._scores.ulanganHarian*.375+this._scores.uts*.25+this._scores.uas*.25;return Math.round(t*10)/10}_getGradeLetter(t){return t>=85?"A":t>=80?"A-":t>=75?"B+":t>=70?"B":t>=60?"C+":"D"}static get styles(){return[super.styles,q`
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
      `]}render(){const t=this._getFinalScore(),e=this._getGradeLetter(t);return n`
      <div class="grade-card">
        <h3>📖 Pencapaian Hasil Belajar</h3>
        <div class="summary-grid">
          <div class="summary-item"><span class="summary-label">Kehadiran</span><span class="summary-val">${this._scores.kehadiran}%</span></div>
          <div class="summary-item"><span class="summary-label">Ulangan Harian</span><span class="summary-val">${this._scores.ulanganHarian}%</span></div>
          <div class="summary-item highlight"><span class="summary-label">Nilai Akhir</span><span class="summary-val brand">${t}</span></div>
          <div class="summary-item highlight"><span class="summary-label">Grade</span><span class="summary-val brand">${e}</span></div>
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>Komponen</th><th>Bobot</th><th>Nilai</th></tr></thead>
            <tbody>
              <tr><td class="row-category">Kehadiran</td><td style="text-align: center;">12.5%</td><td>${this._scores.kehadiran}</td></tr>
              <tr><td class="row-category">Ulangan Harian</td><td style="text-align: center;">37.5%</td><td>${this._scores.ulanganHarian}</td></tr>
              <tr><td class="row-category">UTS</td><td style="text-align: center;">25%</td><td>${this._scores.uts||"\u2014"}</td></tr>
              <tr><td class="row-category">UAS</td><td style="text-align: center;">25%</td><td>${this._scores.uas||"\u2014"}</td></tr>
            </tbody>
            <tfoot><tr><td colspan="2" style="font-weight: var(--ddd-font-weight-bold); text-align: right;">Nilai Akhir:</td><td style="font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary);">${t} (${e})</td></tr></tfoot>
          </table>
        </div>
      </div>
    `}}globalThis.customElements.define(nt.tag,nt);var j={};(function k(t,e,i,a){var d=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),l=typeof Path2D=="function"&&typeof DOMMatrix=="function",b=(function(){if(!t.OffscreenCanvas)return!1;try{var r=new OffscreenCanvas(1,1),s=r.getContext("2d");s.fillRect(0,0,1,1);var o=r.transferToImageBitmap();s.createPattern(o,"no-repeat")}catch{return!1}return!0})();function A(){}function $(r){var s=e.exports.Promise,o=s!==void 0?s:t.Promise;return typeof o=="function"?new o(r):(r(A,A),null)}var H=(function(r,s){return{transform:function(o){if(r)return o;if(s.has(o))return s.get(o);var h=new OffscreenCanvas(o.width,o.height),u=h.getContext("2d");return u.drawImage(o,0,0),s.set(o,h),h},clear:function(){s.clear()}}})(b,new Map),K=(function(){var r=Math.floor(16.666666666666668),s,o,h={},u=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(s=function(p){var m=Math.random();return h[m]=requestAnimationFrame(function c(g){u===g||u+r-1<g?(u=g,delete h[m],p()):h[m]=requestAnimationFrame(c)}),m},o=function(p){h[p]&&cancelAnimationFrame(h[p])}):(s=function(p){return setTimeout(p,r)},o=function(p){return clearTimeout(p)}),{frame:s,cancel:o}})(),ht=(function(){var r,s,o={};function h(u){function p(m,c){u.postMessage({options:m||{},callback:c})}u.init=function(c){var g=c.transferControlToOffscreen();u.postMessage({canvas:g},[g])},u.fire=function(c,g,f){if(s)return p(c,null),s;var x=Math.random().toString(36).slice(2);return s=$(function(_){function y(S){S.data.callback===x&&(delete o[x],u.removeEventListener("message",y),s=null,H.clear(),f(),_())}u.addEventListener("message",y),p(c,x),o[x]=y.bind(null,{data:{callback:x}})}),s},u.reset=function(){u.postMessage({reset:!0});for(var c in o)o[c](),delete o[c]}}return function(){if(r)return r;if(!i&&d){var u=["var CONFETTI, SIZE = {}, module = {};","("+k.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([u])))}catch(p){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",p),null}h(r)}return r}})(),ut={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function pt(r,s){return s?s(r):r}function mt(r){return r!=null}function w(r,s,o){return pt(r&&mt(r[s])?r[s]:ut[s],o)}function gt(r){return r<0?0:Math.floor(r)}function vt(r,s){return Math.floor(Math.random()*(s-r))+r}function G(r){return parseInt(r,16)}function bt(r){return r.map(ft)}function ft(r){var s=String(r).replace(/[^0-9a-f]/gi,"");return s.length<6&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]),{r:G(s.substring(0,2)),g:G(s.substring(2,4)),b:G(s.substring(4,6))}}function _t(r){var s=w(r,"origin",Object);return s.x=w(s,"x",Number),s.y=w(s,"y",Number),s}function xt(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function yt(r){var s=r.getBoundingClientRect();r.width=s.width,r.height=s.height}function kt(r){var s=document.createElement("canvas");return s.style.position="fixed",s.style.top="0px",s.style.left="0px",s.style.pointerEvents="none",s.style.zIndex=r,s}function wt(r,s,o,h,u,p,m,c,g){r.save(),r.translate(s,o),r.rotate(p),r.scale(h,u),r.arc(0,0,1,m,c,g),r.restore()}function $t(r){var s=r.angle*(Math.PI/180),o=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-s+(.5*o-Math.random()*o),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function St(r,s){s.x+=Math.cos(s.angle2D)*s.velocity+s.drift,s.y+=Math.sin(s.angle2D)*s.velocity+s.gravity,s.velocity*=s.decay,s.flat?(s.wobble=0,s.wobbleX=s.x+10*s.scalar,s.wobbleY=s.y+10*s.scalar,s.tiltSin=0,s.tiltCos=0,s.random=1):(s.wobble+=s.wobbleSpeed,s.wobbleX=s.x+10*s.scalar*Math.cos(s.wobble),s.wobbleY=s.y+10*s.scalar*Math.sin(s.wobble),s.tiltAngle+=.1,s.tiltSin=Math.sin(s.tiltAngle),s.tiltCos=Math.cos(s.tiltAngle),s.random=Math.random()+2);var o=s.tick++/s.totalTicks,h=s.x+s.random*s.tiltCos,u=s.y+s.random*s.tiltSin,p=s.wobbleX+s.random*s.tiltCos,m=s.wobbleY+s.random*s.tiltSin;if(r.fillStyle="rgba("+s.color.r+", "+s.color.g+", "+s.color.b+", "+(1-o)+")",r.beginPath(),l&&s.shape.type==="path"&&typeof s.shape.path=="string"&&Array.isArray(s.shape.matrix))r.fill(It(s.shape.path,s.shape.matrix,s.x,s.y,Math.abs(p-h)*.1,Math.abs(m-u)*.1,Math.PI/10*s.wobble));else if(s.shape.type==="bitmap"){var c=Math.PI/10*s.wobble,g=Math.abs(p-h)*.1,f=Math.abs(m-u)*.1,x=s.shape.bitmap.width*s.scalar,_=s.shape.bitmap.height*s.scalar,y=new DOMMatrix([Math.cos(c)*g,Math.sin(c)*g,-Math.sin(c)*f,Math.cos(c)*f,s.x,s.y]);y.multiplySelf(new DOMMatrix(s.shape.matrix));var S=r.createPattern(H.transform(s.shape.bitmap),"no-repeat");S.setTransform(y),r.globalAlpha=1-o,r.fillStyle=S,r.fillRect(s.x-x/2,s.y-_/2,x,_),r.globalAlpha=1}else if(s.shape==="circle")r.ellipse?r.ellipse(s.x,s.y,Math.abs(p-h)*s.ovalScalar,Math.abs(m-u)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI):wt(r,s.x,s.y,Math.abs(p-h)*s.ovalScalar,Math.abs(m-u)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI);else if(s.shape==="star")for(var v=Math.PI/2*3,T=4*s.scalar,I=8*s.scalar,z=s.x,M=s.y,N=5,C=Math.PI/N;N--;)z=s.x+Math.cos(v)*I,M=s.y+Math.sin(v)*I,r.lineTo(z,M),v+=C,z=s.x+Math.cos(v)*T,M=s.y+Math.sin(v)*T,r.lineTo(z,M),v+=C;else r.moveTo(Math.floor(s.x),Math.floor(s.y)),r.lineTo(Math.floor(s.wobbleX),Math.floor(u)),r.lineTo(Math.floor(p),Math.floor(m)),r.lineTo(Math.floor(h),Math.floor(s.wobbleY));return r.closePath(),r.fill(),s.tick<s.totalTicks}function Tt(r,s,o,h,u){var p=s.slice(),m=r.getContext("2d"),c,g,f=$(function(x){function _(){c=g=null,m.clearRect(0,0,h.width,h.height),H.clear(),u(),x()}function y(){i&&!(h.width===a.width&&h.height===a.height)&&(h.width=r.width=a.width,h.height=r.height=a.height),!h.width&&!h.height&&(o(r),h.width=r.width,h.height=r.height),m.clearRect(0,0,h.width,h.height),p=p.filter(function(S){return St(m,S)}),p.length?c=K.frame(y):_()}c=K.frame(y),g=_});return{addFettis:function(x){return p=p.concat(x),f},canvas:r,promise:f,reset:function(){c&&K.cancel(c),g&&g()}}}function W(r,s){var o=!r,h=!!w(s||{},"resize"),u=!1,p=w(s,"disableForReducedMotion",Boolean),m=d&&!!w(s||{},"useWorker"),c=m?ht():null,g=o?xt:yt,f=r&&c?!!r.__confetti_initialized:!1,x=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,_;function y(v,T,I){for(var z=w(v,"particleCount",gt),M=w(v,"angle",Number),N=w(v,"spread",Number),C=w(v,"startVelocity",Number),Ct=w(v,"decay",Number),Mt=w(v,"gravity",Number),Et=w(v,"drift",Number),Z=w(v,"colors",bt),Pt=w(v,"ticks",Number),X=w(v,"shapes"),qt=w(v,"scalar"),Lt=!!w(v,"flat"),tt=_t(v),et=z,V=[],Nt=r.width*tt.x,Qt=r.height*tt.y;et--;)V.push($t({x:Nt,y:Qt,angle:M,spread:N,startVelocity:C,color:Z[et%Z.length],shape:X[vt(0,X.length)],ticks:Pt,decay:Ct,gravity:Mt,drift:Et,scalar:qt,flat:Lt}));return _?_.addFettis(V):(_=Tt(r,V,g,T,I),_.promise)}function S(v){var T=p||w(v,"disableForReducedMotion",Boolean),I=w(v,"zIndex",Number);if(T&&x)return $(function(C){C()});o&&_?r=_.canvas:o&&!r&&(r=kt(I),document.body.appendChild(r)),h&&!f&&g(r);var z={width:r.width,height:r.height};c&&!f&&c.init(r),f=!0,c&&(r.__confetti_initialized=!0);function M(){if(c){var C={getBoundingClientRect:function(){if(!o)return r.getBoundingClientRect()}};g(C),c.postMessage({resize:{width:C.width,height:C.height}});return}z.width=z.height=null}function N(){_=null,h&&(u=!1,t.removeEventListener("resize",M)),o&&r&&(document.body.contains(r)&&document.body.removeChild(r),r=null,f=!1)}return h&&!u&&(u=!0,t.addEventListener("resize",M,!1)),c?c.fire(v,z,N):y(v,z,N)}return S.reset=function(){c&&c.reset(),_&&_.reset()},S}var J;function Y(){return J||(J=W(null,{useWorker:!0,resize:!0})),J}function It(r,s,o,h,u,p,m){var c=new Path2D(r),g=new Path2D;g.addPath(c,new DOMMatrix(s));var f=new Path2D;return f.addPath(g,new DOMMatrix([Math.cos(m)*u,Math.sin(m)*u,-Math.sin(m)*p,Math.cos(m)*p,o,h])),f}function zt(r){if(!l)throw new Error("path confetti are not supported in this browser");var s,o;typeof r=="string"?s=r:(s=r.path,o=r.matrix);var h=new Path2D(s),u=document.createElement("canvas"),p=u.getContext("2d");if(!o){for(var m=1e3,c=m,g=m,f=0,x=0,_,y,S=0;S<m;S+=2)for(var v=0;v<m;v+=2)p.isPointInPath(h,S,v,"nonzero")&&(c=Math.min(c,S),g=Math.min(g,v),f=Math.max(f,S),x=Math.max(x,v));_=f-c,y=x-g;var T=10,I=Math.min(T/_,T/y);o=[I,0,0,I,-Math.round(_/2+c)*I,-Math.round(y/2+g)*I]}return{type:"path",path:s,matrix:o}}function At(r){var s,o=1,h="#000000",u='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?s=r:(s=r.text,o="scalar"in r?r.scalar:o,u="fontFamily"in r?r.fontFamily:u,h="color"in r?r.color:h);var p=10*o,m=""+p+"px "+u,c=new OffscreenCanvas(p,p),g=c.getContext("2d");g.font=m;var f=g.measureText(s),x=Math.ceil(f.actualBoundingBoxRight+f.actualBoundingBoxLeft),_=Math.ceil(f.actualBoundingBoxAscent+f.actualBoundingBoxDescent),y=2,S=f.actualBoundingBoxLeft+y,v=f.actualBoundingBoxAscent+y;x+=y+y,_+=y+y,c=new OffscreenCanvas(x,_),g=c.getContext("2d"),g.font=m,g.fillStyle=h,g.fillText(s,S,v);var T=1/o;return{type:"bitmap",bitmap:c.transferToImageBitmap(),matrix:[T,0,0,T,-x*T/2,-_*T/2]}}e.exports=function(){return Y().apply(this,arguments)},e.exports.reset=function(){Y().reset()},e.exports.create=W,e.exports.shapeFromPath=zt,e.exports.shapeFromText=At})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),j,!1);var Ft=j.exports;j.exports.create;const ot=[{question:"Apa ibu kota Indonesia?",choices:["Bandung","Surabaya","Jakarta","Medan"],correctIndex:2},{question:"Berapa hasil dari 7 \xD7 8?",choices:["54","56","58","60"],correctIndex:1},{question:"Planet terdekat dengan Matahari adalah?",choices:["Venus","Bumi","Mars","Merkurius"],correctIndex:3}];class D extends L(E(P)){static get tag(){return"explode-quiz"}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Explode Quiz",description:"Interactive multiple-choice quiz with confetti and Google Sheets integration",icon:"icons:question-answer",color:"purple",tags:["Education","Interactive","Content"]},settings:{configure:[{property:"scriptFunctionName",title:"Nama Fungsi Apps Script",description:"Nama fungsi Google Apps Script untuk menerima hasil kuis",inputMethod:"textfield"},{property:"quizCategory",title:"Kategori Kuis",description:"Kategori kuis: formatif, ulangan_harian, uts, atau uas",inputMethod:"select",options:{formatif:"Formatif (Absensi)",ulangan_harian:"Ulangan Harian",uts:"UTS",uas:"UAS"}},{property:"shuffleChoices",title:"Acak Pilihan Jawaban",description:"Mengacak urutan pilihan jawaban setiap kali kuis dimulai",inputMethod:"boolean"},{property:"hideAnswers",title:"Sembunyikan Jawaban",description:"Tidak menampilkan jawaban benar/salah setelah menjawab",inputMethod:"boolean"},{property:"hideConfetti",title:"Nonaktifkan Confetti",description:"Tidak menampilkan efek confetti saat jawaban benar",inputMethod:"boolean"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_screen","_studentName","_currentIndex","_score","_answered","_selectedIndex","_feedbackText","_feedbackPositive","_validationError","_nameInputValue","_editing","_tempQuestions","_editingIndex","_tempQuestionText","_tempChoice0","_tempChoice1","_tempChoice2","_tempChoice3","_tempCorrectIndex","_editorOrigin","editing","editable"]}}}static get properties(){return{...super.properties,questions:{type:Array,attribute:"questions",reflect:!0,converter:{fromAttribute(t){if(t==null||t==="")return;if(Array.isArray(t)||typeof t=="object")return t;const e=String(t).trim();if(!(!e||e==="[object Object]"||e==="undefined"||e==="null")&&(e.startsWith("[")||e.startsWith("{")))try{const i=JSON.parse(e);return Array.isArray(i)?i:i&&typeof i=="object"&&Array.isArray(i.questions)?i.questions:void 0}catch{return}},toAttribute(t){if(!Array.isArray(t))return null;try{return JSON.stringify(t)}catch{return null}}}},scriptFunctionName:{type:String,attribute:!0},spreadsheetId:{type:String,attribute:"spreadsheet-id",reflect:!0},accessToken:{type:String,attribute:"access-token"},appsScriptUrl:{type:String,attribute:"apps-script-url"},sheetName:{type:String,attribute:"sheet-name"},quizCategory:{type:String,attribute:"quiz-category"},shuffleChoices:{type:Boolean,attribute:"shuffle-choices",reflect:!0},hideAnswers:{type:Boolean,attribute:"hide-answers",reflect:!0},hideConfetti:{type:Boolean,attribute:"hide-confetti",reflect:!0},studentName:{type:String,attribute:"student-name"},studentId:{type:String,attribute:"student-id"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},editable:{type:Boolean,attribute:!0,reflect:!0},editing:{type:Boolean,attribute:!0,reflect:!0},_screen:{state:!0},_studentName:{state:!0},_currentIndex:{state:!0},_score:{state:!0},_answered:{state:!0},_selectedIndex:{state:!0},_feedbackText:{state:!0},_feedbackPositive:{state:!0},_validationError:{state:!0},_nameInputValue:{state:!0},_editing:{state:!0},_tempQuestions:{state:!0},_editingIndex:{state:!0},_tempQuestionText:{state:!0},_tempChoice0:{state:!0},_tempChoice1:{state:!0},_tempChoice2:{state:!0},_tempChoice3:{state:!0},_tempCorrectIndex:{state:!0},_editorOrigin:{state:!0},_tempQuestionImage:{state:!0},_tempQuestionType:{state:!0},_tempCorrectAnswers:{state:!0},_tempLeftItems:{state:!0},_tempRightItems:{state:!0},_tempCorrectPairs:{state:!0},_tempAcceptedAnswers:{state:!0},_tempAcceptedStatements:{state:!0},_shuffledQuestions:{state:!0},_selectedAnswers:{state:!0},_matchAnswers:{state:!0},_shortAnswerText:{state:!0},_tempQuestionPoints:{state:!0},_tempChoiceImage0:{state:!0},_tempChoiceImage1:{state:!0},_tempChoiceImage2:{state:!0},_tempChoiceImage3:{state:!0},_maxPoints:{state:!0}}}constructor(){super();let t=Ft;t&&typeof t!="function"&&typeof t.default=="function"&&(t=t.default),this._confettiFn=t,this.questions=ot,this.scriptFunctionName="submitQuizResult",this.spreadsheetId="",this.accessToken="",this.appsScriptUrl="",this.sheetName="Pertemuan",this.quizCategory="formatif",this.shuffleChoices=!1,this.hideAnswers=!1,this.hideConfetti=!1,this.studentName="",this.studentId="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.editable=!1,this._screen="name",this._studentName="",this._currentIndex=0,this._score=0,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._validationError="",this._nameInputValue="",this._editing=!1,this._tempQuestions=[],this._editingIndex=-1,this._tempQuestionText="",this._tempChoice0="",this._tempChoice1="",this._tempChoice2="",this._tempChoice3="",this._tempCorrectIndex="0",this._editorOrigin="result",this._shuffledQuestions=[],this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._tempQuestionImage="",this._tempQuestionType="mc",this._tempCorrectAnswers=[],this._tempLeftItems=["",""],this._tempRightItems=["",""],this._tempCorrectPairs={},this._tempAcceptedAnswers="",this._tempAcceptedStatements="[]",this._maxPoints=0,this._tempQuestionPoints=1,this._tempChoiceImage0="",this._tempChoiceImage1="",this._tempChoiceImage2="",this._tempChoiceImage3="",this.t={quizTitle:"Kuis Interaktif",quizInstruction:"Masukkan nama Anda untuk memulai kuis.",namePlaceholder:"Nama Anda...",startButton:"Mulai Kuis",validationNameEmpty:"Nama tidak boleh kosong.",validationNameShort:"Nama harus lebih dari 2 karakter.",questionOf:"Soal",of:"dari",scoreLabel:"Skor",feedbackCorrect:"Mantap, Benar!",feedbackWrongPrefix:"Yah, Salah. Jawaban benar: ",resultHeading:"Hasil Kuis",resultName:"Nama",resultScore:"Skor",resultTotal:"Total Soal",resultPercentage:"Persentase",messageHigh:"Luar Biasa! Kamu Hebat!",messageMedium:"Bagus! Terus Berlatih!",messageLow:"Jangan Menyerah! Coba Lagi!",restartButton:"Mulai Ulang",editTitle:"Edit Soal Kuis",closeEditor:"Tutup Editor",questionPlaceholder:"Tulis pertanyaan...",choicePlaceholder:"Pilihan {N}",choiceCorrectLabel:"Benar",addQuestionBtn:"Tambah Soal",editQuestionBtn:"Edit",deleteQuestionBtn:"Hapus",saveEditBtn:"Simpan Perubahan",cancelEditBtn:"Batal",saveAllBtn:"Simpan & Keluar",cancelAllBtn:"Batal",minQuestionsError:"Minimal 3 soal harus tersedia",emptyQuestionError:"Pertanyaan tidak boleh kosong",emptyChoiceError:"Semua pilihan jawaban harus diisi",ariaNameInput:"Kolom nama siswa",ariaStartButton:"Tombol mulai kuis",ariaAnswerButton:"Pilihan jawaban",ariaRestartButton:"Mulai ulang kuis",ariaScoreDisplay:"Skor saat ini",ariaProgressLabel:"Kemajuan kuis",ariaFeedback:"Umpan balik jawaban",ariaEditTitle:"Panel editor soal kuis",ariaCloseEditor:"Tutup panel editor",ariaAddForm:"Formulir tambah soal baru",ariaQuestionInput:"Teks pertanyaan",ariaChoiceInput:"Pilihan jawaban {N}",ariaCorrectChoice:"Pilihan jawaban benar",ariaQuestionsList:"Daftar soal yang tersedia",ariaQuestionCard:"Kartu soal",ariaEditQuestion:"Edit soal ini",ariaDeleteQuestion:"Hapus soal ini",ariaSaveEdit:"Simpan perubahan soal",ariaCancelEdit:"Batal mengedit soal",ariaSaveAll:"Simpan semua perubahan dan keluar",ariaCancelAll:"Batal semua perubahan dan keluar"}}updated(t){super.updated(t),this.questions&&this.questions.length===0&&(this.questions=ot),t.has("studentName")&&this.studentName&&(this._studentName=this.studentName,this._screen==="name"&&(this._screen="quiz"))}connectedCallback(){if(super.connectedCallback(),this._authHandler=t=>{t.detail.studentId&&(this.studentId=t.detail.studentId),t.detail.nama&&(this.studentName=t.detail.nama),t.detail.nis&&(this.studentNis=t.detail.nis),t.detail.absen&&(this.studentAbsen=t.detail.absen),t.detail.kelas&&(this.studentKelas=t.detail.kelas)},window.addEventListener("quiz-user-login",this._authHandler),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[D.tag]&&(t.elementList[D.tag]=D.haxProperties)}}get _inHaxEditor(){return!!(globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"&&globalThis.HaxStore.requestAvailability().editMode)}_fireConfetti(){if(typeof this._confettiFn=="function")try{const t={ticks:220,gravity:.85,decay:.92,startVelocity:42,zIndex:9999};this._confettiFn({...t,particleCount:70,spread:85,scalar:1.05,origin:{x:.5,y:.62}}),this._confettiFn({...t,particleCount:45,angle:58,spread:65,scalar:1.1,origin:{x:.1,y:.7}}),this._confettiFn({...t,particleCount:45,angle:122,spread:65,scalar:1.1,origin:{x:.9,y:.7}})}catch(t){console.error("[explode-quiz] Konfeti gagal dieksekusi:",t)}}_fireMegaConfetti(){if(typeof this._confettiFn=="function")try{const t=Date.now()+900,e=()=>{this._confettiFn({particleCount:3,angle:60,spread:55,origin:{x:0,y:.7},colors:["#ff0000","#00ff00","#0000ff","#ffff00"]}),this._confettiFn({particleCount:3,angle:120,spread:55,origin:{x:1,y:.7},colors:["#ff0000","#00ff00","#0000ff","#ffff00"]}),Date.now()<t&&requestAnimationFrame(e)};e()}catch(t){console.error("[explode-quiz] Mega konfeti gagal dieksekusi:",t)}}_getMaxPoints(){return(this.questions||[]).reduce((t,e)=>t+(e.points||1),0)}_shuffleArray(t){const e=[...t];for(let i=e.length-1;i>0;i--){const a=Math.floor(Math.random()*(i+1));[e[i],e[a]]=[e[a],e[i]]}return e}_startQuiz(){const t=this._nameInputValue.trim();if(t.length<=2){this._validationError=t.length===0?this.t.validationNameEmpty:this.t.validationNameShort;return}this._studentName=t,this._validationError="",this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this.shuffleChoices?this._shuffledQuestions=this.questions.map(e=>{if(!e.choices)return{...e};const i=e.choices.map((d,l)=>({text:d,origIndex:l})),a=this._shuffleArray(i);return{...e,choices:a.map(d=>d.text),_correctMap:a.map(d=>d.origIndex)}}):this._shuffledQuestions=[],this._screen="question"}_renderNameScreen(){return n`
      <h1 class="quiz-title">${this.t.quizTitle}</h1>
      <p class="quiz-instruction">${this.t.quizInstruction}</p>
      <div class="input-group">
        <input
          id="name-input"
          .value="${this._nameInputValue}"
          @input="${t=>this._nameInputValue=t.target.value}"
          @keydown="${t=>{t.key==="Enter"&&this._startQuiz()}}"
          .placeholder="${this.t.namePlaceholder}"
          aria-label="${this.t.ariaNameInput}"
          type="text"
        />
      </div>
      <button
        class="start-btn"
        @click="${this._startQuiz}"
        aria-label="${this.t.ariaStartButton}"
      >
        ${this.t.startButton}
      </button>
      ${this._validationError?n`<p class="validation-error">${this._validationError}</p>`:""}
      <button
        class="edit-questions-btn"
        @click="${this._openEditorFromName}"
        aria-label="${this.t.ariaCloseEditor}"
        ?hidden="${!this._inHaxEditor&&!this.editable}"
      >
        ${this.t.editTitle}
      </button>
    `}_renderQuestionScreen(){const t=this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions,e=t[this._currentIndex],i=`${this.t.questionOf} ${this._currentIndex+1} ${this.t.of} ${t.length}`,a=e.type||"mc",d=Array.isArray(e.correctAnswers);return n`
      <header class="quiz-header">
        <span class="progress-label">${i}</span>
        <span class="score-display">${this.t.scoreLabel}: ${this._score}</span>
      </header>

      <div class="question-text">${e.question}</div>
      ${e.image?n`<div style="text-align:center;margin:12px 0;"><img src="${e.image}" alt="Gambar soal" style="max-width:100%;border-radius:8px;border:1px solid #e0e0e0;"></div>`:""}

      ${a==="matching"?this._renderMatching(e):""}
      ${a==="shortAnswer"?this._renderShortAnswer(e):""}
      ${a==="pgk"?this._renderPGK(e):""}
      ${a==="mc"?this._renderMC(e,d):""}

      ${this._feedbackText?n`<div class="feedback-area ${this._feedbackPositive?"positive":"negative"}" aria-live="polite">${this._feedbackText}</div>`:""}

      ${this.editable?n`<button class="edit-questions-btn" style="margin-top:12px;font-size:12px;padding:6px 12px;" @click="${this._openEditor}">✏️ Edit Soal</button>`:""}
    `}_getChoiceText(t){return typeof t=="string"?t:t?.text||""}_getChoiceImage(t){return typeof t=="string"?null:t?.image||null}_renderMC(t,e){return n`<div class="answer-grid">
      ${t.choices.map((i,a)=>{let d="answer-btn";const l=e?this._selectedAnswers.has(a):a===this._selectedIndex;if(this._answered&&!this.hideAnswers){const b=t.correctAnswers||(t.correctIndex!=null?[t.correctIndex]:[]);(t._correctMap||b).includes(a)?d+=" answer-btn--correct":l&&(d+=" answer-btn--wrong")}else(e&&l||!e&&l)&&(d+=" answer-btn--selected");return n`<button class="${d}" ?disabled="${this._answered}"
          @click="${()=>e?this._toggleMultiAnswer(a):this._selectAnswer(a)}"
          aria-label="${this.t.ariaAnswerButton}: ${this._getChoiceText(i)}">
          ${this._getChoiceImage(i)?n`<img src="${this._getChoiceImage(i)}" alt="" style="max-height:60px;border-radius:6px;object-fit:contain;display:block;margin:0 auto 4px;">`:""}
          ${e&&l?"\u2713 ":""}${this._getChoiceText(i)}</button>`})}
      ${e&&!this._answered?n`<button class="start-btn" style="margin-top:12px;font-size:13px;" @click="${()=>this._submitMultiAnswers()}">Kirim Jawaban (${this._selectedAnswers.size} dipilih)</button>`:""}
    </div>`}_renderPGK(t){const e=t.statements||[];return n`<table style="width:100%;border-collapse:collapse;font-size:13px;margin:12px 0;">
      <thead><tr style="background:#f3f0fa;">
        <th style="text-align:left;padding:8px;">Pernyataan</th>
        <th style="text-align:center;width:80px;">Benar</th>
        <th style="text-align:center;width:80px;">Salah</th>
      </tr></thead>
      <tbody>
        ${e.map((i,a)=>n`<tr style="border-bottom:1px solid #eee;">
          <td style="padding:8px;">${i.text}</td>
          <td style="text-align:center;"><input type="radio" name="pgk_${this._currentIndex}_${a}" value="true"
            ?disabled="${this._answered}" @change="${()=>this._setPGK(a,!0)}"
            ${this._matchAnswers[a]===!0?"checked":""}></td>
          <td style="text-align:center;"><input type="radio" name="pgk_${this._currentIndex}_${a}" value="false"
            ?disabled="${this._answered}" @change="${()=>this._setPGK(a,!1)}"
            ${this._matchAnswers[a]===!1?"checked":""}></td>
        </tr>`)}
      </tbody>
    </table>
    ${this._answered?"":n`<button class="start-btn" style="margin-top:12px;font-size:13px;" @click="${()=>this._submitPGK()}">Kirim Jawaban</button>`}`}_renderMatching(t){const e=t.leftItems||[],i=t.rightItems||[];return n`<div style="margin:12px 0;">
      ${e.map((a,d)=>n`<div style="display:flex;align-items:center;gap:12px;margin:8px 0;font-size:13px;">
        <span style="min-width:200px;font-weight:500;">${d+1}. ${a}</span>
        <span style="font-size:18px;">→</span>
        <select ?disabled="${this._answered}" style="padding:6px 10px;border-radius:6px;border:1px solid #ccc;font-size:13px;"
          @change="${l=>{this._matchAnswers={...this._matchAnswers,[d]:parseInt(l.target.value)},this.requestUpdate()}}">
          <option value="-1">-- Pilih --</option>
          ${i.map((l,b)=>n`<option value="${b}" ?selected="${this._matchAnswers[d]===b}">${String.fromCharCode(65+b)}. ${l}</option>`)}
        </select>
      </div>`)}
      ${this._answered?"":n`<button class="start-btn" style="margin-top:12px;font-size:13px;" @click="${()=>this._submitMatching()}">Kirim Jawaban</button>`}
    </div>`}_renderShortAnswer(t){return n`<div style="margin:12px 0;">
      <input type="text" ?disabled="${this._answered}" placeholder="Ketik jawaban..."
        style="width:100%;padding:10px 14px;border-radius:8px;border:1px solid #ccc;font-size:14px;box-sizing:border-box;"
        .value="${this._shortAnswerText}" @input="${e=>{this._shortAnswerText=e.target.value}}">
      ${this._answered?"":n`<button class="start-btn" style="margin-top:12px;font-size:13px;" @click="${()=>this._submitShortAnswer()}">Kirim Jawaban</button>`}
    </div>`}_selectAnswer(t){if(this._answered)return;this._answered=!0,this._selectedIndex=t;const e=(this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions)[this._currentIndex],i=e.correctAnswers||(e.correctIndex!=null?[e.correctIndex]:[]);if(i.includes(t))this._score+=e.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti();else if(!this.hideAnswers){const a=i.map(d=>e.choices[d]).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${a}`,this._feedbackPositive=!1}setTimeout(()=>{this._advanceQuiz()},1200)}_toggleMultiAnswer(t){if(this._answered)return;const e=new Set(this._selectedAnswers);e.has(t)?e.delete(t):e.add(t),this._selectedAnswers=e}_submitMultiAnswers(){if(this._answered||this._selectedAnswers.size===0)return;this._answered=!0;const t=(this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions)[this._currentIndex],e=new Set(t.correctAnswers||[]),i=this._selectedAnswers;if(e.size===i.size&&[...e].every(a=>i.has(a)))this._score+=t.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti();else if(!this.hideAnswers){const a=[...e].map(d=>t.choices[d]).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${a}`,this._feedbackPositive=!1}setTimeout(()=>this._advanceQuiz(),1200)}_setPGK(t,e){this._answered||(this._matchAnswers={...this._matchAnswers,[t]:e})}_submitPGK(){if(this._answered)return;const t=(this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions)[this._currentIndex],e=t.statements||[];if(Object.keys(this._matchAnswers).length<e.length)return;this._answered=!0;const i=e.map(d=>d.answer);let a=!0;for(let d=0;d<e.length;d++)if(this._matchAnswers[d]!==i[d]){a=!1;break}if(a)this._score+=t.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti();else if(!this.hideAnswers){const d=e.map((l,b)=>`${b+1}: ${l.answer?"Benar":"Salah"}`).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${d}`,this._feedbackPositive=!1}setTimeout(()=>this._advanceQuiz(),1200)}_submitMatching(){if(this._answered)return;const t=(this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions)[this._currentIndex],e=t.leftItems||[],i=t.correctPairs||{};if(Object.keys(this._matchAnswers).length<e.length)return;this._answered=!0;let a=0;for(let b=0;b<e.length;b++)this._matchAnswers[b]===i[b]&&a++;const d=t.points||1,l=Math.round(a/e.length*d);if(this._score+=l,!this.hideAnswers)if(a===e.length)this._feedbackText=`${this.t.feedbackCorrect} (${a}/${e.length} pasangan benar, +${l} poin)`,this._feedbackPositive=!0;else if(a>0)this._feedbackText=`${a}/${e.length} pasangan benar (+${l} poin). Lanjutkan!`,this._feedbackPositive=!0;else{const b=Object.entries(i).map(([A,$])=>`${parseInt(A)+1}\u2192${String.fromCharCode(65+$)}`).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${b}`,this._feedbackPositive=!1}!this.hideConfetti&&a===e.length&&this._fireConfetti(),setTimeout(()=>this._advanceQuiz(),1200)}_submitShortAnswer(){if(this._answered)return;const t=this._shortAnswerText.trim().toLowerCase();if(!t)return;this._answered=!0;const e=(this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions)[this._currentIndex];(e.acceptedAnswers||[]).map(i=>i.toLowerCase()).some(i=>t.includes(i))?(this._score+=e.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti()):this.hideAnswers||(this._feedbackText=`${this.t.feedbackWrongPrefix}${(e.acceptedAnswers||[]).join(" / ")}`,this._feedbackPositive=!1),setTimeout(()=>this._advanceQuiz(),1200)}_advanceQuiz(){const t=this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions;if(this._currentIndex<t.length-1)this._currentIndex+=1,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._maxPoints=this._getMaxPoints();else{this._submitToSheets(this._studentName,this._score);const e=Math.round(this._score/this._maxPoints*100);this.dispatchEvent(new CustomEvent("quiz-saved",{detail:{name:this._studentName,score:e},bubbles:!0,composed:!0})),this._screen="result",this._score/this._maxPoints>=.8&&this._fireConfetti()}}_renderResultScreen(){const t=Math.round(this._score/this._maxPoints*100);let e=this.t.messageLow;return t>=80?e=this.t.messageHigh:t>=50&&(e=this.t.messageMedium),n`
      <h2 class="result-heading">${this.t.resultHeading}</h2>

      <div class="result-name">${this.t.resultName}: ${this._studentName}</div>
      <div class="result-score">
        ${this.t.resultScore}: ${this._score} / ${this._maxPoints} poin
      </div>
      <div class="result-percentage">
        ${this.t.resultPercentage}: ${t}%
      </div>

      <p class="result-message">${e}</p>

      <button
        class="restart-btn"
        @click="${this._restartQuiz}"
        aria-label="${this.t.ariaRestartButton}"
      >
        ${this.t.restartButton}
      </button>
      <button
        class="edit-questions-btn"
        @click="${this._openEditor}"
        aria-label="${this.t.ariaCloseEditor}"
        ?hidden="${!this._inHaxEditor&&!this.editable}"
      >
        ${this.t.editTitle}
      </button>
    `}_restartQuiz(){this._screen=this.studentName?"quiz":"name",this._studentName=this.studentName||"",this._currentIndex=0,this._score=0,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._validationError="",this._nameInputValue="",this._editing=!1,this._tempQuestions=[],this._editingIndex=-1,this._tempQuestionText="",this._tempChoice0="",this._tempChoice1="",this._tempChoice2="",this._tempChoice3="",this._tempCorrectIndex="0",this._editorOrigin="result"}_submitToSheets(t,e){const i=Math.round(e/this._maxPoints*100);if(this.appsScriptUrl){console.log("[explode-quiz] Mengirim ke Apps Script URL...",t,i);const a=new URLSearchParams({action:"submit",name:t,score:i,totalQuestions:this.questions.length,totalPoints:this._maxPoints,timestamp:new Date().toISOString(),sheet:this.sheetName||"Pertemuan",studentId:this.studentId||"",nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",quizCategory:this.quizCategory||"formatif",type:"quiz"}),d=`${this.appsScriptUrl}?${a.toString()}`;fetch(d,{redirect:"follow"}).then(l=>l.json()).then(l=>{console.log("[explode-quiz] Tersimpan:",l),this.dispatchEvent(new CustomEvent("quiz-saved",{detail:{name:t,score:i,data:l},bubbles:!0,composed:!0}))}).catch(l=>{console.error("[explode-quiz] Error menyimpan ke Google Sheets:",l)});return}if(this.spreadsheetId){console.log("[explode-quiz] Mengirim ke Sheets API via backend...",t,e),fetch("/api/save-quiz-result",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({spreadsheetId:this.spreadsheetId,name:t,score:e,accessToken:this.accessToken||""})}).then(a=>{if(!a.ok)throw new Error("Gagal menyimpan hasil kuis");return a.json()}).then(a=>{console.log("[explode-quiz] Data berhasil disimpan ke Google Sheets:",a),this.dispatchEvent(new CustomEvent("quiz-saved",{detail:{name:t,score:i,data:a},bubbles:!0,composed:!0}))}).catch(a=>{console.error("[explode-quiz] Error menyimpan ke Google Sheets:",a)});return}if(typeof globalThis.google<"u"&&globalThis.google?.script?.run){const a={timestamp:new Date().toISOString(),name:t,score:e};globalThis.google.script.run.withSuccessHandler(()=>console.log("[explode-quiz] Data berhasil dikirim ke Sheets")).withFailureHandler(d=>console.error("[explode-quiz] Gagal mengirim ke Sheets:",d))[this.scriptFunctionName](a);return}console.warn("[explode-quiz] Google Sheets belum dikonfigurasi (spreadsheet-id / access-token kosong)")}_openEditor(){this._editing||this._screen!=="result"&&this._screen!=="question"||(this._editing=!0,this._editingIndex=-1,this._tempQuestions=JSON.parse(JSON.stringify(this.questions)),this._screen="editor")}_openEditorFromName(){this._screen==="name"&&(this._editing||(this._editing=!0,this._editingIndex=-1,this._tempQuestions=JSON.parse(JSON.stringify(this.questions)),this._editorOrigin="name",this._screen="editor"))}_renderEditorScreen(){const t=this._tempQuestionType||"mc";return n`
      <header class="edit-header">
        <h2 class="edit-title">${this.t.editTitle}</h2>
        <button class="close-editor-btn" @click="${this._saveAll}">${this.t.closeEditor}</button>
      </header>

      <div class="editor-content">
        <form class="add-question-form">
          <div style="display:flex;gap:8px;margin-bottom:8px;align-items:center;">
            <select style="padding:6px 10px;border-radius:6px;border:1px solid #ccc;font-size:13px;" .value="${t}" @change="${e=>{this._tempQuestionType=e.target.value}}">
              <option value="mc">Pilihan Ganda</option>
              <option value="pgk">PG Kompleks (Benar/Salah)</option>
              <option value="matching">Menjodohkan</option>
              <option value="shortAnswer">Isian Singkat</option>
            </select>
            <input type="text" style="flex:1;padding:6px 10px;border-radius:6px;border:1px solid #ccc;font-size:13px;"
              placeholder="URL gambar (opsional)" .value="${this._tempQuestionImage}"
              @input="${e=>{this._tempQuestionImage=e.target.value}}">
            <label style="font-size:12px;color:#555;white-space:nowrap;">Poin:</label>
            <input type="number" min="1" style="width:50px;padding:6px;border-radius:6px;border:1px solid #ccc;font-size:13px;text-align:center;"
              .value="${this._tempQuestionPoints}" @input="${e=>{this._tempQuestionPoints=parseInt(e.target.value)||1}}">
          </div>
          ${this._tempQuestionImage?n`<div style="text-align:center;margin:8px 0;"><img src="${this._tempQuestionImage}" style="max-width:200px;border-radius:6px;border:1px solid #ddd;"></div>`:""}

          <textarea class="question-text-input" .value="${this._tempQuestionText}"
            @input="${e=>this._tempQuestionText=e.target.value}"
            placeholder="${this.t.questionPlaceholder}"></textarea>

          ${t==="mc"?this._renderEditorMC():""}
          ${t==="pgk"?this._renderEditorPGK():""}
          ${t==="matching"?this._renderEditorMatching():""}
          ${t==="shortAnswer"?this._renderEditorShortAnswer():""}

          <button type="button" class="add-question-btn" @click="${this._addQuestion}">${this.t.addQuestionBtn}</button>
        </form>

        <div class="questions-list">
          ${this._tempQuestions.map((e,i)=>n`
            <div class="question-card">
              ${this._editingIndex===i?n`
                <div class="edit-form">
                  <div style="display:flex;gap:8px;margin-bottom:8px;">
                    <select style="padding:6px 10px;border-radius:6px;border:1px solid #ccc;font-size:13px;"
                      .value="${this._tempQuestionType}" @change="${a=>{this._tempQuestionType=a.target.value}}">
                      <option value="mc">Pilihan Ganda</option>
                      <option value="pgk">PG Kompleks</option>
                      <option value="matching">Menjodohkan</option>
                      <option value="shortAnswer">Isian Singkat</option>
                    </select>
                    <input type="text" style="flex:1;padding:6px 10px;border-radius:6px;border:1px solid #ccc;font-size:13px;"
                      placeholder="URL gambar" .value="${this._tempQuestionImage}"
                      @input="${a=>{this._tempQuestionImage=a.target.value}}">
                    <label style="font-size:12px;color:#555;white-space:nowrap;">Poin:</label>
                    <input type="number" min="1" style="width:50px;padding:6px;border-radius:6px;border:1px solid #ccc;font-size:13px;text-align:center;"
                      .value="${this._tempQuestionPoints}" @input="${a=>{this._tempQuestionPoints=parseInt(a.target.value)||1}}">
                  </div>
                  <textarea class="edit-question-text-input" .value="${this._tempQuestionText}"
                    @input="${a=>this._tempQuestionText=a.target.value}"
                    placeholder="${this.t.questionPlaceholder}"></textarea>
                  ${this._tempQuestionType==="mc"?this._renderEditorMC():""}
                  ${this._tempQuestionType==="pgk"?this._renderEditorPGK():""}
                  ${this._tempQuestionType==="matching"?this._renderEditorMatching():""}
                  ${this._tempQuestionType==="shortAnswer"?this._renderEditorShortAnswer():""}
                  <div style="display:flex;gap:8px;margin-top:8px;">
                    <button type="button" class="add-question-btn" @click="${this._saveEditQuestion}">${this.t.saveEditBtn}</button>
                    <button type="button" class="add-question-btn" style="background:#ccc;color:#333;" @click="${this._cancelEditQuestion}">${this.t.cancelEditBtn}</button>
                  </div>
                </div>
              `:n`
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <div>
                    <strong style="color:#6750a4;">[${(e.type||"mc").toUpperCase()}]</strong> ${e.question}
                    ${e.image?n`<span style="font-size:11px;color:#888;">[gambar]</span>`:""}
                    <span style="font-size:11px;color:#059669;font-weight:bold;">[${e.points||1} poin]</span>
                  </div>
                  <div style="display:flex;gap:6px;">
                    <button class="edit-btn" @click="${()=>this._startEditQuestion(i)}">${this.t.editQuestionBtn}</button>
                    <button class="delete-btn" @click="${()=>this._deleteQuestion(i)}">${this.t.deleteQuestionBtn}</button>
                  </div>
                </div>
              `}
            </div>
          `)}
        </div>
      </div>
    `}_renderEditorMC(){return this._tempCorrectAnswers.length>1,n`
      <div class="choices-container">
        ${[0,1,2,3].map(t=>n`
          <div class="choice-input-wrapper" style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:6px;">
            <input class="choice-input" style="flex:1;min-width:120px;" .value="${this[`_tempChoice${t}`]}"
              @input="${e=>this[`_tempChoice${t}`]=e.target.value}"
              placeholder="${this.t.choicePlaceholder.replace("{N}",t+1)}" />
            <input type="url" placeholder="🖼️ URL gambar" style="width:150px;padding:6px;border-radius:4px;border:1px solid #ccc;font-size:12px;"
              .value="${this[`_tempChoiceImage${t}`]||""}"
              @input="${e=>this[`_tempChoiceImage${t}`]=e.target.value}" />
            <label class="choice-label" style="font-size:12px;">
              <input type="checkbox" ?checked="${this._tempCorrectAnswers.includes(t)}"
                @change="${e=>{e.target.checked?this._tempCorrectAnswers=[...this._tempCorrectAnswers,t]:this._tempCorrectAnswers=this._tempCorrectAnswers.filter(i=>i!==t),this._tempCorrectAnswers.length<=1&&(this._tempCorrectIndex=t.toString())}}" />
              ${this.t.choiceCorrectLabel}
            </label>
            ${this[`_tempChoiceImage${t}`]?n`<img src="${this[`_tempChoiceImage${t}`]}" style="max-height:32px;border-radius:3px;margin-left:auto;">`:""}
          </div>
        `)}
      </div>
      ${this._tempCorrectAnswers.length<=1?n`
        <div style="font-size:11px;color:#888;margin-top:4px;">Pilih 1 jawaban benar. Centang lebih dari 1 untuk mode PG Kompleks.</div>
      `:n`
        <div style="font-size:11px;color:#6750a4;margin-top:4px;font-weight:bold;">Mode PG Kompleks: ${this._tempCorrectAnswers.length} jawaban benar dipilih</div>
      `}
    `}_renderEditorPGK(){let t=[];try{t=JSON.parse(this._tempAcceptedStatements||"[]")}catch{}return n`<div style="margin:8px 0;font-size:13px;">
      <div style="font-weight:500;margin-bottom:4px;">Pernyataan (JSON array, format: [{"text":"...","answer":true}]):</div>
      <textarea style="width:100%;min-height:80px;padding:8px;border-radius:6px;border:1px solid #ccc;font-size:12px;font-family:monospace;"
        .value="${this._tempAcceptedStatements}" @input="${e=>{this._tempAcceptedStatements=e.target.value}}"></textarea>
    </div>`}_renderEditorMatching(){return n`<div style="margin:8px 0;font-size:13px;">
      <div style="display:flex;gap:16px;">
        <div style="flex:1;">
          <div style="font-weight:500;margin-bottom:4px;">Item Kiri:</div>
          ${this._tempLeftItems.map((t,e)=>n`
            <input style="width:100%;padding:4px 8px;margin:4px 0;border-radius:4px;border:1px solid #ccc;font-size:12px;"
              .value="${t}" @input="${i=>{const a=[...this._tempLeftItems];a[e]=i.target.value,this._tempLeftItems=a}}"
              placeholder="Item ${e+1}">
          `)}
          <button type="button" style="font-size:11px;margin-top:4px;padding:2px 8px;border-radius:4px;border:1px solid #ccc;"
            @click="${()=>{this._tempLeftItems=[...this._tempLeftItems,""]}}">+ Tambah</button>
        </div>
        <div style="flex:1;">
          <div style="font-weight:500;margin-bottom:4px;">Item Kanan:</div>
          ${this._tempRightItems.map((t,e)=>n`
            <input style="width:100%;padding:4px 8px;margin:4px 0;border-radius:4px;border:1px solid #ccc;font-size:12px;"
              .value="${t}" @input="${i=>{const a=[...this._tempRightItems];a[e]=i.target.value,this._tempRightItems=a}}"
              placeholder="Item ${String.fromCharCode(65+e)}">
          `)}
          <button type="button" style="font-size:11px;margin-top:4px;padding:2px 8px;border-radius:4px;border:1px solid #ccc;"
            @click="${()=>{this._tempRightItems=[...this._tempRightItems,""]}}">+ Tambah</button>
        </div>
      </div>
      <div style="margin-top:8px;">
        <div style="font-weight:500;margin-bottom:4px;">Kunci Jawaban (JSON: {"0":1,"1":0} artinya Item Kiri 0→Item Kanan B):</div>
        <input style="width:100%;padding:6px 8px;border-radius:4px;border:1px solid #ccc;font-size:12px;font-family:monospace;"
          .value="${JSON.stringify(this._tempCorrectPairs)}"
          @input="${t=>{try{this._tempCorrectPairs=JSON.parse(t.target.value)}catch{}}}">
      </div>
    </div>`}_renderEditorShortAnswer(){return n`<div style="margin:8px 0;font-size:13px;">
      <div style="font-weight:500;margin-bottom:4px;">Jawaban yang diterima (pisahkan koma):</div>
      <input style="width:100%;padding:6px 10px;border-radius:6px;border:1px solid #ccc;font-size:13px;"
        placeholder="contoh: biomassa, sekam padi, limbah pertanian"
        .value="${this._tempAcceptedAnswers}" @input="${t=>{this._tempAcceptedAnswers=t.target.value}}">
    </div>`}_addQuestion(){if(!this._tempQuestionText.trim()){console.warn(this.t.emptyQuestionError);return}const t=this._tempQuestionType||"mc",e={type:t,question:this._tempQuestionText.trim()};if(this._tempQuestionImage.trim()&&(e.image=this._tempQuestionImage.trim()),this._tempQuestionPoints>1&&(e.points=this._tempQuestionPoints),t==="mc"){if(!this._tempChoice0.trim()||!this._tempChoice1.trim()){console.warn(this.t.emptyChoiceError);return}e.choices=[0,1,2,3].map(i=>{const a=this[`_tempChoice${i}`]?.trim();if(!a)return null;const d=this[`_tempChoiceImage${i}`]?.trim();return d?{text:a,image:d}:a}).filter(Boolean),this._tempCorrectAnswers.length>1?e.correctAnswers=[...this._tempCorrectAnswers]:e.correctIndex=parseInt(this._tempCorrectIndex,10)}else t==="pgk"?e.statements=JSON.parse(this._tempAcceptedStatements||"[]"):t==="matching"?(e.leftItems=[...this._tempLeftItems],e.rightItems=[...this._tempRightItems],e.correctPairs={...this._tempCorrectPairs}):t==="shortAnswer"&&(e.acceptedAnswers=this._tempAcceptedAnswers.split(",").map(i=>i.trim()).filter(Boolean));this._tempQuestions=[...this._tempQuestions,e],this._resetEditorForm()}_deleteQuestion(t){if(this._tempQuestions.length<=3){console.warn(this.t.minQuestionsError);return}this._tempQuestions=this._tempQuestions.filter((e,i)=>i!==t),this._editingIndex===t?(this._editingIndex=-1,this._resetEditorForm()):this._editingIndex>t&&this._editingIndex--}_resetEditorForm(){this._tempQuestionText="",this._tempChoice0="",this._tempChoice1="",this._tempChoice2="",this._tempChoice3="",this._tempChoiceImage0="",this._tempChoiceImage1="",this._tempChoiceImage2="",this._tempChoiceImage3="",this._tempCorrectIndex="0",this._tempCorrectAnswers=[],this._tempQuestionImage="",this._tempQuestionType="mc",this._tempQuestionPoints=1,this._tempLeftItems=["",""],this._tempRightItems=["",""],this._tempCorrectPairs={},this._tempAcceptedAnswers="",this._tempAcceptedStatements="[]"}_startEditQuestion(t){if(t<0||t>=this._tempQuestions.length)return;this._editingIndex=t;const e=this._tempQuestions[t];this._tempQuestionText=e.question,this._tempQuestionImage=e.image||"",this._tempQuestionType=e.type||"mc",this._tempQuestionPoints=e.points||1;const i=e.choices||[];this._tempChoice0=this._getChoiceText(i[0])||"",this._tempChoice1=this._getChoiceText(i[1])||"",this._tempChoice2=this._getChoiceText(i[2])||"",this._tempChoice3=this._getChoiceText(i[3])||"",this._tempChoiceImage0=this._getChoiceImage(i[0])||"",this._tempChoiceImage1=this._getChoiceImage(i[1])||"",this._tempChoiceImage2=this._getChoiceImage(i[2])||"",this._tempChoiceImage3=this._getChoiceImage(i[3])||"",this._tempCorrectIndex=e.correctIndex!=null?e.correctIndex.toString():"0",this._tempCorrectAnswers=e.correctAnswers||[],this._tempLeftItems=e.leftItems||["",""],this._tempRightItems=e.rightItems||["",""],this._tempCorrectPairs=e.correctPairs||{},this._tempAcceptedAnswers=(e.acceptedAnswers||[]).join(", "),this._tempAcceptedStatements=JSON.stringify(e.statements||[])}_saveEditQuestion(){if(!this._tempQuestionText.trim()){console.warn(this.t.emptyQuestionError);return}if(this._editingIndex<0||this._editingIndex>=this._tempQuestions.length)return;const t=this._tempQuestionType||"mc",e={type:t,question:this._tempQuestionText.trim()};this._tempQuestionImage.trim()&&(e.image=this._tempQuestionImage.trim()),this._tempQuestionPoints>1&&(e.points=this._tempQuestionPoints),t==="mc"?(e.choices=[0,1,2,3].map(i=>{const a=this[`_tempChoice${i}`]?.trim();if(!a)return null;const d=this[`_tempChoiceImage${i}`]?.trim();return d?{text:a,image:d}:a}).filter(Boolean),this._tempCorrectAnswers.length>1?e.correctAnswers=[...this._tempCorrectAnswers]:e.correctIndex=parseInt(this._tempCorrectIndex,10)):t==="pgk"?e.statements=JSON.parse(this._tempAcceptedStatements||"[]"):t==="matching"?(e.leftItems=[...this._tempLeftItems],e.rightItems=[...this._tempRightItems],e.correctPairs={...this._tempCorrectPairs}):t==="shortAnswer"&&(e.acceptedAnswers=this._tempAcceptedAnswers.split(",").map(i=>i.trim()).filter(Boolean)),this._tempQuestions=this._tempQuestions.map((i,a)=>a===this._editingIndex?e:i),this._editingIndex=-1,this._resetEditorForm()}_cancelEditQuestion(){this._editingIndex<0||(this._editingIndex=-1,this._resetEditorForm())}_saveAll(){this._screen==="editor"&&(this.questions=JSON.parse(JSON.stringify(this._tempQuestions)),this._editing=!1,this._editingIndex=-1,this._screen=this._editorOrigin||"result",this._editorOrigin="result",this.dispatchEvent(new CustomEvent("questions-changed",{bubbles:!0,composed:!0,detail:{questions:this.questions}})))}_cancelAll(){this._screen==="editor"&&(this._editing=!1,this._editingIndex=-1,this._screen=this._editorOrigin||"result",this._editorOrigin="result")}render(){switch(this._screen){case"name":return this._renderNameScreen();case"question":return this._renderQuestionScreen();case"result":return this._renderResultScreen();case"editor":return this._renderEditorScreen();default:return this._renderNameScreen()}}static get styles(){return[super.styles,q`
        :host {
          display: block;
          max-width: 640px;
          margin: 0 auto;
          padding: var(--ddd-spacing-8);
          font-family: var(--ddd-font-primary);
        }

        .quiz-title {
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          margin-bottom: var(--ddd-spacing-4);
          color: var(--ddd-theme-primary);
        }

        .quiz-instruction {
          font-size: var(--ddd-font-size-m);
          margin-bottom: var(--ddd-spacing-6);
          color: var(--ddd-theme-secondary);
        }

        .input-group {
          margin-bottom: var(--ddd-spacing-4);
        }

        input#name-input {
          width: 100%;
          padding: var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-m);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          box-sizing: border-box;
          font-family: var(--ddd-font-primary);
        }

        input#name-input:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .start-btn {
          width: 100%;
          padding: var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-m);
          font-weight: var(--ddd-font-weight-bold);
          background: var(--ddd-theme-polaris-primary, #007bff);
          color: var(--ddd-theme-on-primary, #fff);
          border: none;
          border-radius: var(--ddd-radius-md, 8px);
          cursor: pointer;
          transition: background 0.2s;
        }

        .start-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .start-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .validation-error {
          margin-top: var(--ddd-spacing-2);
          color: var(--ddd-theme-error);
          font-size: var(--ddd-font-size-s);
        }

        /* Question Screen Styles */
        .quiz-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--ddd-spacing-6);
          font-weight: var(--ddd-font-weight-bold);
        }

        .progress-label,
        .score-display {
          color: var(--ddd-theme-primary);
        }

        .question-text {
          font-size: var(--ddd-font-size-m, 1rem);
          font-weight: var(--ddd-font-weight-regular, normal);
          line-height: var(--ddd-line-height, 1.6);
          text-align: justify;
          color: var(--ddd-theme-on-surface, #333);
          background: var(--ddd-theme-polaris-surface-hover, #f8f9fa);
          border-left: 4px solid var(--ddd-theme-polaris-primary, #007bff);
          padding: var(--ddd-spacing-4, 14px) var(--ddd-spacing-5, 18px);
          border-radius: 0 8px 8px 0;
          margin-bottom: var(--ddd-spacing-6, 24px);
        }

        .answer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-6);
        }

        @media (max-width: 480px) {
          .answer-grid {
            grid-template-columns: 1fr;
          }

          .answer-btn {
            min-height: 44px;
          }
        }

        .answer-btn {
          padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
          font-size: var(--ddd-font-size-m);
          font-weight: var(--ddd-font-weight-medium);
          background: var(--ddd-theme-polaris-surface, #fff);
          color: var(--ddd-theme-on-surface, #333);
          border: 1px solid var(--ddd-theme-polaris-border, #d1d5db);
          border-radius: var(--ddd-radius-md, 8px);
          cursor: pointer;
          transition:
            background 0.2s,
            border-color 0.2s;
        }

        .answer-btn:hover:not([disabled]) {
          background: var(--ddd-theme-polaris-surface-hover);
        }

        .answer-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .answer-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .answer-btn--correct {
          background: var(--ddd-theme-success, #28a745) !important;
          color: var(--ddd-theme-on-success, #fff) !important;
          border-color: var(--ddd-theme-success, #28a745) !important;
        }

        .answer-btn--selected {
          background: #e3d9fc !important;
          color: #6750a4 !important;
          border-color: #6750a4 !important;
          box-shadow: 0 0 0 2px rgba(103, 80, 164, 0.3);
        }

        .answer-btn--wrong {
          background: var(--ddd-theme-error, #dc3545) !important;
          color: var(--ddd-theme-on-error, #fff) !important;
          border-color: var(--ddd-theme-error, #dc3545) !important;
        }

        .feedback-area {
          padding: var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-md);
          font-weight: var(--ddd-font-weight-medium);
          text-align: center;
        }

        .feedback-area.positive {
          background: var(--ddd-theme-success, #d4edda);
          color: var(--ddd-theme-on-success, #155724);
        }

        .feedback-area.negative {
          background: var(--ddd-theme-error, #f8d7da);
          color: var(--ddd-theme-on-error, #721c24);
        }

        /* Result Screen Styles */
        .result-heading {
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          margin-bottom: var(--ddd-spacing-6);
          color: var(--ddd-theme-primary);
        }

        .result-name,
        .result-score,
        .result-percentage {
          font-size: var(--ddd-font-size-m);
          margin-bottom: var(--ddd-spacing-4);
          color: var(--ddd-theme-secondary);
        }

        .result-message {
          font-size: var(--ddd-font-size-l);
          font-weight: var(--ddd-font-weight-bold);
          margin: var(--ddd-spacing-6) 0;
          color: var(--ddd-theme-primary);
          text-align: center;
        }

        .restart-btn {
          width: 100%;
          padding: var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-m);
          font-weight: var(--ddd-font-weight-bold);
          background: var(--ddd-theme-polaris-primary);
          color: var(--ddd-theme-on-primary);
          border: none;
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
        }

        .restart-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .restart-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .edit-questions-btn {
          width: 100%;
          margin-top: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
          background: transparent;
          color: var(--ddd-theme-primary);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
        }

        .edit-questions-btn:hover {
          background: var(--ddd-theme-polaris-surface-hover);
        }

        .edit-questions-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        /* Editor Screen Styles */
        .edit-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--ddd-spacing-6);
          padding-bottom: var(--ddd-spacing-4);
          border-bottom: 1px solid var(--ddd-theme-polaris-border);
        }

        .edit-title {
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-primary);
          margin: 0;
        }

        .close-editor-btn {
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
          background: var(--ddd-theme-error);
          color: var(--ddd-theme-on-error);
          border: none;
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
        }

        .close-editor-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .close-editor-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .editor-content {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-6);
        }

        .add-question-form {
          padding: var(--ddd-spacing-4);
          background: var(--ddd-theme-polaris-surface);
          border-radius: var(--ddd-radius-md);
          border: 1px solid var(--ddd-theme-polaris-border);
        }

        .question-text-input {
          width: 100%;
          min-height: 80px;
          padding: var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-m);
          font-family: var(--ddd-font-primary);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-sm);
          resize: vertical;
          box-sizing: border-box;
          margin-bottom: var(--ddd-spacing-4);
        }

        .question-text-input:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .choices-container {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-4);
        }

        .choice-input-wrapper {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-3);
        }

        .choice-input,
        .edit-choice-input {
          flex: 1;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-m);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-sm);
          font-family: var(--ddd-font-primary);
        }

        .choice-input:focus-visible,
        .edit-choice-input:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .choice-label {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-secondary);
          cursor: pointer;
        }

        .add-question-btn,
        .save-all-btn,
        .cancel-all-btn {
          width: 100%;
          padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-m);
          font-weight: var(--ddd-font-weight-bold);
          border: none;
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
        }

        .add-question-btn {
          background: var(--ddd-theme-polaris-primary);
          color: var(--ddd-theme-on-primary);
        }

        .add-question-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .add-question-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .questions-list {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-4);
        }

        .question-card {
          padding: var(--ddd-spacing-4);
          background: var(--ddd-theme-polaris-surface);
          border-radius: var(--ddd-radius-md);
          border: 1px solid var(--ddd-theme-polaris-border);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--ddd-spacing-4);
        }

        .question-preview {
          flex: 1;
          font-size: var(--ddd-font-size-m);
          color: var(--ddd-theme-secondary);
          word-break: break-word;
        }

        .card-actions {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-2);
        }

        .edit-btn,
        .delete-btn {
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
          border: none;
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
          transition:
            background 0.2s,
            color 0.2s;
        }

        .edit-btn {
          background: var(--ddd-theme-polaris-surface-hover);
          color: var(--ddd-theme-primary);
        }

        .edit-btn:hover:not([disabled]) {
          background: var(--ddd-theme-accent);
        }

        .edit-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .delete-btn {
          background: transparent;
          color: var(--ddd-theme-error);
        }

        .delete-btn:hover:not([disabled]) {
          background: var(--ddd-theme-error);
          color: var(--ddd-theme-on-error);
        }

        .delete-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .edit-form {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-3);
        }

        .edit-question-text-input {
          width: 100%;
          min-height: 80px;
          padding: var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-m);
          font-family: var(--ddd-font-primary);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-sm);
          resize: vertical;
          box-sizing: border-box;
        }

        .edit-form-actions {
          display: flex;
          gap: var(--ddd-spacing-3);
        }

        .save-edit-btn {
          flex: 1;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          background: var(--ddd-theme-success);
          color: var(--ddd-theme-on-success);
          border: none;
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
        }

        .save-edit-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .cancel-edit-btn {
          flex: 1;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
          background: transparent;
          color: var(--ddd-theme-secondary);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
        }

        .cancel-edit-btn:hover {
          background: var(--ddd-theme-polaris-surface-hover);
        }

        .editor-actions {
          display: flex;
          gap: var(--ddd-spacing-4);
          margin-top: var(--ddd-spacing-4);
        }

        .save-all-btn {
          flex: 1;
          background: var(--ddd-theme-polaris-primary);
          color: var(--ddd-theme-on-primary);
        }

        .save-all-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .cancel-all-btn {
          flex: 1;
          background: transparent;
          color: var(--ddd-theme-secondary);
          border: 1px solid var(--ddd-theme-polaris-border);
        }

        .cancel-all-btn:hover {
          background: var(--ddd-theme-polaris-surface-hover);
        }

        .save-all-btn:focus-visible,
        .cancel-all-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        @media (max-width: 480px) {
          .card-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .card-actions {
            flex-direction: row;
            width: 100%;
          }

          .edit-btn,
          .delete-btn {
            flex: 1;
          }

          .editor-actions {
            flex-direction: column;
          }

          .save-all-btn,
          .cancel-all-btn {
            width: 100%;
          }
        }
      `]}disconnectedCallback(){super.disconnectedCallback(),this._authHandler&&window.removeEventListener("quiz-user-login",this._authHandler)}}globalThis.customElements.define(D.tag,D);class lt extends L(E(P)){static get tag(){return"quiz-user-auth"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},_screen:{state:!0},_nama:{state:!0},_email:{state:!0},_nis:{state:!0},_absen:{state:!0},_kelas:{state:!0},_studentId:{state:!0},_errorMsg:{state:!0},_successMsg:{state:!0},_loading:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this._screen="check",this._nama="",this._email="",this._nis="",this._absen="",this._kelas="",this._studentId="",this._errorMsg="",this._successMsg="",this._loading=!1,this.t={...this.t,login:"Masuk",register:"Daftar",nama:"Nama Lengkap",email:"Email",nis:"NIS",absen:"Nomor Absen",kelas:"Kelas",namaPlaceholder:"Contoh: Ahmad Dahlan",emailPlaceholder:"contoh@email.com",nisPlaceholder:"Contoh: 1234567",absenPlaceholder:"Contoh: 01",kelasPlaceholder:"Contoh: XII-IPA-1",welcome:"Selamat datang",logout:"Keluar",id:"ID"}}connectedCallback(){super.connectedCallback();const t=this._load("quiz_user_session");t?.studentId?(this._studentId=t.studentId,this._nama=t.nama,this._email=t.email,this._nis=t.nis||"",this._absen=t.absen||"",this._kelas=t.kelas||"",queueMicrotask(()=>this._verifySession())):this._screen="login"}_load(t){try{return JSON.parse(localStorage.getItem(t))}catch{return null}}_save(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}_clear(t){try{localStorage.removeItem(t)}catch{}}async _verifySession(){if(!this.appsScriptUrl||this.appsScriptUrl.trim()===""){this._screen="login";return}this._loading=!0;try{const t=`${this.appsScriptUrl}?action=verify&studentId=${encodeURIComponent(this._studentId)}`,e=await fetch(t),i=e.headers.get("content-type");if(!i||!i.includes("application/json"))throw new Error("Respon bukan JSON");const a=await e.json();a.status==="success"?(this._nama=a.nama,this._nis=a.nis||"",this._absen=a.absen||"",this._kelas=a.kelas||"",this._screen="logged-in",this._dispatchLogin()):(this._clear("quiz_user_session"),this._screen="login")}catch{this._screen="login"}this._loading=!1}async _handleLogin(t){if(t.preventDefault(),this._errorMsg="",!this.appsScriptUrl||this.appsScriptUrl.trim()===""){this._errorMsg="URL Apps Script belum dikonfigurasi. Harap hubungi administrator.";return}this._loading=!0;try{const e=`${this.appsScriptUrl}?action=login&nis=${encodeURIComponent(this._nis.trim())}&email=${encodeURIComponent(this._email.trim())}`,i=await fetch(e),a=i.headers.get("content-type");if(!a||!a.includes("application/json"))throw new Error("Respon dari server bukan format JSON. Periksa URL Apps Script.");const d=await i.json();d.status==="success"?(this._studentId=d.studentId,this._nama=d.nama,this._nis=d.nis||this._nis,this._absen=d.absen||"",this._kelas=d.kelas||"",this._save("quiz_user_session",{studentId:d.studentId,nama:d.nama,email:this._email.trim(),nis:this._nis,absen:this._absen,kelas:this._kelas}),this._screen="logged-in",this._dispatchLogin()):this._errorMsg=d.message||"Login gagal"}catch{this._errorMsg="Gagal menghubungi server"}this._loading=!1}async _handleRegister(t){if(t.preventDefault(),this._errorMsg="",!this.appsScriptUrl||this.appsScriptUrl.trim()===""){this._errorMsg="URL Apps Script belum dikonfigurasi. Harap hubungi administrator.",this._loading=!1;return}this._loading=!0;try{const e=new URLSearchParams({action:"register",nama:this._nama.trim(),email:this._email.trim(),nis:this._nis.trim(),absen:this._absen.trim(),kelas:this._kelas.trim()}),i=`${this.appsScriptUrl}?${e.toString()}`,a=await fetch(i,{redirect:"follow"}),d=a.headers.get("content-type");if(!d||!d.includes("application/json"))throw new Error("Respon dari server bukan format JSON. Periksa URL Apps Script.");const l=await a.json();l.status==="success"?(this._successMsg="Pendaftaran berhasil!",this._screen="login"):this._errorMsg=l.message||"Gagal mendaftar"}catch(e){console.error(e),this._errorMsg="Gagal menghubungi server."}finally{this._loading=!1}}_handleLogout(){this._clear("quiz_user_session"),this._studentId="",this._nama="",this._email="",this._nis="",this._absen="",this._kelas="",this._screen="login",window.dispatchEvent(new CustomEvent("quiz-user-logout",{bubbles:!0,composed:!0}))}_dispatchLogin(){window.dispatchEvent(new CustomEvent("quiz-user-login",{detail:{studentId:this._studentId,nama:this._nama,email:this._email,nis:this._nis,absen:this._absen,kelas:this._kelas},bubbles:!0,composed:!0}))}static get styles(){return[super.styles,q`
        :host { display: block; margin-bottom: var(--ddd-spacing-4); }
        .auth-card {
          background: var(--ddd-theme-polaris-surface);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-6);
          border: 1px solid var(--ddd-theme-polaris-border);
          max-width: 420px;
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
      `]}render(){if(this._loading&&this._screen==="check")return n`<div class="loading">⏳ Memverifikasi sesi...</div>`;if(this._screen==="logged-in"){const t=this._nama?this._nama.charAt(0).toUpperCase():"?";return n`
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
      `}return n`
      <div class="auth-card">
        <h2>🔐 ${this._screen==="register"?this.t.register:this.t.login}</h2>
        <p class="subtitle">
          ${this._screen==="register"?"Buat akun untuk menyimpan hasil kuis & aktivitas":"Masuk dengan email yang sudah terdaftar"}
        </p>

        ${this._errorMsg?n`<div class="msg msg-error">${this._errorMsg}</div>`:""}

        ${this._screen==="register"?n`
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
        `:n`
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
    `}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Quiz User Auth",description:"Sistem login/registrasi siswa untuk dashboard kuis",icon:"icons:account-circle",color:"purple",tags:["Education","Auth"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield",required:!0}]}}}}globalThis.customElements.define(lt.tag,lt);class ct extends L(E(P)){static get tag(){return"assignment-forum"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},assignmentTitle:{type:String,attribute:"assignment-title"},assignmentInstruction:{type:String,attribute:"assignment-instruction"},forumTopic:{type:String,attribute:"forum-topic"},_comments:{state:!0},_activeReplyId:{state:!0},_sortMode:{state:!0},_assignmentText:{state:!0},_assignmentLink:{state:!0},_assignmentSubmitted:{state:!0},_submitting:{state:!0},viewMode:{type:String,attribute:"view-mode"},hideDelete:{type:Boolean,attribute:"hide-delete",reflect:!0}}}constructor(){super(),this.appsScriptUrl="",this.sheetName="Pertemuan",this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.assignmentTitle="Tugas Mandiri",this.assignmentInstruction="Tuliskan refleksi atau jawaban tugas Anda.",this.forumTopic="Forum Diskusi",this._comments=[],this._activeReplyId=null,this._sortMode="best",this._assignmentText=localStorage.getItem("hax_assignment_text")||"",this._assignmentSubmitted=localStorage.getItem("hax_assignment_submitted")==="true",this._assignmentLink=localStorage.getItem("hax_assignment_link")||"",this._submitting=!1,this.hideDelete=!1,this.t={...this.t,assignmentTitle:"Tugas Mandiri",submitBtn:"Kirim & Kunci Tugas",submitted:"\u2705 Tugas Diserahkan & Tersimpan ke Google Sheets",pending:"\u26A0\uFE0F Belum Menyerahkan",forumTitle:"Forum Diskusi",postComment:"Post Comment",reply:"Reply",delete:"\u{1F5D1}\uFE0F Hapus",noComments:"Belum ada komentar. Mulai diskusi!"}}connectedCallback(){super.connectedCallback(),this._authHandler=t=>{t.detail.studentId&&(this.studentId=t.detail.studentId),t.detail.nama&&(this.studentName=t.detail.nama),t.detail.nis&&(this.studentNis=t.detail.nis),t.detail.absen&&(this.studentAbsen=t.detail.absen),t.detail.kelas&&(this.studentKelas=t.detail.kelas)},globalThis.addEventListener("quiz-user-login",this._authHandler),this._loadForumComments()}disconnectedCallback(){super.disconnectedCallback(),this._authHandler&&globalThis.removeEventListener("quiz-user-login",this._authHandler)}static get styles(){return[super.styles,q`
        :host { display: block; font-family: var(--ddd-font-primary); color: var(--ddd-theme-default-text); }
        .card { background: var(--ddd-theme-default-surface); border-radius: var(--ddd-radius-lg); box-shadow: var(--ddd-shadow-1); padding: var(--ddd-spacing-5); margin-bottom: var(--ddd-spacing-5); border: 1px solid var(--ddd-theme-polaris-border); }
        h3 { margin: 0 0 var(--ddd-spacing-2); font-size: var(--ddd-font-size-m); color: var(--ddd-theme-default-text); display: flex; align-items: center; gap: var(--ddd-spacing-2); }
        .meta { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); background: var(--ddd-theme-polaris-surface-hover); padding: var(--ddd-spacing-1) var(--ddd-spacing-3); border-radius: var(--ddd-radius-full); display: inline-block; margin-bottom: var(--ddd-spacing-3); }
        textarea, input[type="url"] { width: 100%; min-height: 90px; padding: var(--ddd-spacing-3); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); font-size: var(--ddd-font-size-s); box-sizing: border-box; resize: vertical; font-family: var(--ddd-font-primary); margin-bottom: var(--ddd-spacing-2); }
        textarea:focus, input[type="url"]:focus { outline: none; border-color: var(--ddd-theme-primary); box-shadow: 0 0 0 2px var(--ddd-theme-polaris-focus-ring); }
        textarea:disabled, input[type="url"]:disabled { background: var(--ddd-theme-polaris-surface); cursor: not-allowed; }
        .btn-group { display: flex; gap: var(--ddd-spacing-2); flex-wrap: wrap; margin-top: var(--ddd-spacing-3); }
        .btn { border: none; padding: var(--ddd-spacing-2) var(--ddd-spacing-4); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-bold); border-radius: var(--ddd-radius-md); cursor: pointer; transition: background 0.2s; color: var(--ddd-theme-on-primary); }
        .btn-primary { background: var(--ddd-theme-primary); }
        .btn-primary:hover { background: var(--ddd-theme-accent); }
        .btn-success { background: var(--ddd-theme-success); }
        .btn-success:hover { background: var(--ddd-theme-success-dark); }
        .btn-danger { background: var(--ddd-theme-error); }
        .btn-danger:hover { background: var(--ddd-theme-error-dark); }
        .btn-sm { padding: var(--ddd-spacing-1) var(--ddd-spacing-2); font-size: var(--ddd-font-size-xs); }
        .badge-done { background: var(--ddd-theme-success-light); color: var(--ddd-theme-success-text); padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border-radius: var(--ddd-radius-md); font-weight: var(--ddd-font-weight-bold); font-size: var(--ddd-font-size-xs); display: inline-flex; align-items: center; gap: var(--ddd-spacing-1); margin-top: var(--ddd-spacing-3); }
        .badge-pending { background: var(--ddd-theme-warning-light); color: var(--ddd-theme-warning-text); padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border-radius: var(--ddd-radius-md); font-weight: var(--ddd-font-weight-bold); font-size: var(--ddd-font-size-xs); display: inline-flex; align-items: center; gap: var(--ddd-spacing-1); margin-top: var(--ddd-spacing-3); }
        .summary-bar { display: flex; gap: var(--ddd-spacing-3); margin-bottom: var(--ddd-spacing-4); padding: var(--ddd-spacing-3); background: var(--ddd-theme-polaris-surface-hover); border-radius: var(--ddd-radius-md); font-size: var(--ddd-font-size-xs); }
        .input-container { display: flex; gap: var(--ddd-spacing-3); margin-bottom: var(--ddd-spacing-6); align-items: flex-start; }
        .avatar { width: 40px; height: 40px; border-radius: var(--ddd-radius-full); background: var(--ddd-theme-polaris-border); display: flex; align-items: center; justify-content: center; font-size: var(--ddd-font-size-l); flex-shrink: 0; }
        .input-wrapper { flex: 1; display: flex; flex-direction: column; gap: var(--ddd-spacing-2); }
        .input-box { width: 100%; padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); font-size: var(--ddd-font-size-s); box-sizing: border-box; font-family: var(--ddd-font-primary); resize: none; min-height: auto; }
        .input-box:focus { outline: none; border-color: var(--ddd-theme-primary); box-shadow: 0 0 0 2px var(--ddd-theme-polaris-focus-ring); }
        .btn-submit { align-self: flex-end; background: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary); border: none; padding: var(--ddd-spacing-2) var(--ddd-spacing-4); border-radius: var(--ddd-radius-md); font-weight: var(--ddd-font-weight-bold); cursor: pointer; font-size: var(--ddd-font-size-s); }
        .comment-card { display: flex; gap: var(--ddd-spacing-3); padding: var(--ddd-spacing-4); border-radius: var(--ddd-radius-md); margin-bottom: var(--ddd-spacing-3); position: relative; background: var(--ddd-theme-default-surface); border: 1px solid var(--ddd-theme-polaris-surface-hover); }
        .comment-content { flex: 1; min-width: 0; }
        .comment-header { display: flex; align-items: center; gap: var(--ddd-spacing-2); margin-bottom: var(--ddd-spacing-1); flex-wrap: wrap; }
        .user-name { font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-default-text); font-size: var(--ddd-font-size-s); }
        .time-stamp { color: var(--ddd-theme-secondary); font-size: var(--ddd-font-size-xs); }
        .text-comment { font-size: var(--ddd-font-size-s); color: var(--ddd-theme-default-text); line-height: 1.5; word-break: break-word; }
        .action-bar { display: flex; gap: var(--ddd-spacing-4); margin-top: var(--ddd-spacing-2); font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); font-weight: var(--ddd-font-weight-bold); align-items: center; }
        .action-btn { cursor: pointer; display: flex; align-items: center; gap: 3px; user-select: none; padding: 3px 5px; border-radius: var(--ddd-radius-sm); }
        .action-btn:hover { background: var(--ddd-theme-polaris-surface-hover); color: var(--ddd-theme-default-text); }
      `]}async _loadForumComments(){const t=this.forumApiUrl||this.appsScriptUrl;if(t)try{const e=await(await fetch(`${t}?action=getForumComments`,{redirect:"follow"})).json();e.status==="ok"&&e.comments&&(this._comments=this._buildThread(e.comments))}catch(e){console.error("[assignment-forum] Failed to load forum:",e)}}_buildThread(t){const e={},i=[];return t.forEach(a=>{e[a.id]={...a,replies:[]}}),t.forEach(a=>{a.parentId&&e[a.parentId]?e[a.parentId].replies.push(e[a.id]):e[a.id]&&i.push(e[a.id])}),i}_getSorted(){const t=[...this._comments];return this._sortMode==="newest"?t.sort((e,i)=>new Date(i.time)-new Date(e.time)):this._sortMode==="oldest"?t.sort((e,i)=>new Date(e.time)-new Date(i.time)):t.sort((e,i)=>(i.likes||0)-(e.likes||0)),t}_setSort(t){this._sortMode=t,this._comments=[...this._comments]}async _submitMainComment(){if(this._submitting)return;const t=this.shadowRoot.querySelector("#main-input"),e=t.value.trim();if(!e)return;this._submitting=!0;const i=this.forumApiUrl||this.appsScriptUrl,a={action:"saveForumComment",id:Date.now(),parentId:null,user:this.studentName||"Siswa",studentId:this.studentId||"",text:e,sheet:this.sheetName};try{const d=await(await fetch(i,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(a)})).json();d.status==="ok"&&d.data&&(this._comments=[...this._comments,{...d.data,replies:[]}]),t.value=""}catch(d){console.error("[assignment-forum] Submit failed:",d)}this._submitting=!1,this._sendActivity("discussion",`Forum: ${e.substring(0,50)}`)}async _submitReply(t){if(this._submitting)return;const e=this.shadowRoot.querySelector(`#reply-${t}`);if(!e)return;const i=e.value.trim();if(!i)return;this._submitting=!0;const a=this.forumApiUrl||this.appsScriptUrl,d={action:"saveForumComment",id:Date.now(),parentId:t,user:this.studentName||"Siswa",studentId:this.studentId||"",text:i,sheet:this.sheetName};try{const l=await(await fetch(a,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(d)})).json();l.status==="ok"&&l.data&&(this._comments=this._comments.map(b=>b.id===t?{...b,replies:[...b.replies,{...l.data,replies:[]}]}:b)),this._activeReplyId=null}catch(l){console.error("[assignment-forum] Reply failed:",l)}this._submitting=!1,this._sendActivity("discussion",`Reply: ${i.substring(0,50)}`)}async _deleteComment(t){if(!confirm("Hapus komentar ini?"))return;const e=this.forumApiUrl||this.appsScriptUrl;if(e)try{await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"deleteForumComment",id:t})});const i=new Set([t]);this._comments.forEach(a=>{a.id===t&&a.replies&&a.replies.forEach(d=>i.add(d.id))}),this._comments=this._comments.filter(a=>!i.has(a.id)).map(a=>({...a,replies:(a.replies||[]).filter(d=>!i.has(d.id))}))}catch(i){console.error("[assignment-forum] Delete failed:",i)}}_findAndUpdateComment(t,e,i){return t.map(a=>a.id===e?i(a):a.replies&&a.replies.length>0?{...a,replies:this._findAndUpdateComment(a.replies,e,i)}:a)}_handleLike(t){this._comments=this._findAndUpdateComment(this._comments,t,e=>{const i=!e.isLiked;return{...e,isLiked:i,likes:i?(e.likes||0)+1:(e.likes||0)-1}}),this._syncLike(t)}_handleDislike(t){this._comments=this._findAndUpdateComment(this._comments,t,e=>{const i=!e.isDisliked;return{...e,isDisliked:i,likes:(e.likes||0)+(i?-1:1)}}),this._syncLike(t)}_syncLike(t){const e=this.forumApiUrl||this.appsScriptUrl;if(!e)return;const i=this._comments.find(a=>a.id===t);i&&fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"saveForumComment",id:t,actionType:"like",isLiked:i.isLiked})}).catch(()=>{})}_toggleReply(t){this._activeReplyId=this._activeReplyId===t?null:t}_isValidUrl(t){try{const e=new URL(t);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}async _submitAssignment(){if(this._submitting)return;const t=this._assignmentText.trim();if(!t&&!this._assignmentLink){alert("Isi tugas atau link Google Drive terlebih dahulu!");return}if(this._assignmentLink&&!this._isValidUrl(this._assignmentLink)){alert("Format link tidak valid. Gunakan URL Google Drive/Doc.");return}this._submitting=!0;const e=this.forumApiUrl||this.appsScriptUrl;if(e)try{await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"saveAssignment",studentId:this.studentId,name:this.studentName,sheet:this.sheetName,title:this.assignmentTitle,content:t,link:this._assignmentLink})})}catch(i){console.error("[assignment-forum] Save assignment failed:",i)}localStorage.setItem("hax_assignment_submitted","true"),localStorage.setItem("hax_assignment_text",t),localStorage.setItem("hax_assignment_link",this._assignmentLink),this._assignmentSubmitted=!0,this._submitting=!1,this._sendActivity("assignment",`Tugas: ${this.assignmentTitle}`)}_resetAssignment(){localStorage.removeItem("hax_assignment_submitted"),localStorage.removeItem("hax_assignment_text"),localStorage.removeItem("hax_assignment_link"),this._assignmentSubmitted=!1,this._assignmentText="",this._assignmentLink=""}_sendActivity(t,e){const i=t==="assignment"?"assignment-saved":"discussion-saved";globalThis.dispatchEvent(new CustomEvent(i,{detail:{title:this.assignmentTitle,thread:this.forumTopic,studentId:this.studentId},bubbles:!0,composed:!0}));const a=this.appsScriptUrl;if(a&&this.studentId){const d=new URLSearchParams({action:"activity",activityType:t,description:e,name:this.studentName,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",sheet:this.sheetName,timestamp:new Date().toISOString()});fetch(`${a}?${d.toString()}`,{redirect:"follow"}).catch(()=>{})}}_timeAgo(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"Baru saja";if(i<60)return`${i} menit lalu`;const a=Math.floor(i/60);return a<24?`${a} jam lalu`:`${Math.floor(a/24)} hari lalu`}render(){const t=this._getSorted();return n`
      <div class="summary-bar">
        <div>${this._assignmentSubmitted?"\u2705":"\u23F3"} Tugas: ${this._assignmentSubmitted?"Selesai":"Belum"}</div>
        <div>💬 Forum: ${t.length} komentar</div>
      </div>
      <div class="card">
        <h3>📝 ${this.assignmentTitle}</h3>
        <div class="meta">Formatif | Tugas Mandiri</div>
        <p style="margin:0 0 var(--ddd-spacing-3); font-size: var(--ddd-font-size-s); color: var(--ddd-theme-secondary); line-height: 1.5;">${this.assignmentInstruction}</p>
        <input type="url" placeholder="🔗 Link Google Drive / Google Doc (opsional)"
          .value="${this._assignmentLink}"
          @input="${e=>{this._assignmentLink=e.target.value}}"
          ?disabled="${this._assignmentSubmitted}">
        <textarea .value="${this._assignmentText}" @input="${e=>{this._assignmentText=e.target.value}}"
          ?disabled="${this._assignmentSubmitted}" placeholder="Tulis jawaban tugas Anda di sini..."></textarea>
        <div class="btn-group">
          ${this._assignmentSubmitted?n`
              <button class="btn btn-success btn-sm" disabled>✅ Terkirim</button>
              <button class="btn btn-danger btn-sm" @click="${this._resetAssignment}">🔄 Ubah</button>
            `:n`<button class="btn btn-success" ?disabled="${this._submitting}" @click="${this._submitAssignment}">${this._submitting?"\u23F3 Mengirim...":"Kirim & Kunci Tugas"}</button>`}
        </div>
        <div class="${this._assignmentSubmitted?"badge-done":"badge-pending"}">
          ${this._assignmentSubmitted?"\u2705 Tugas Diserahkan & Tersimpan ke Google Sheets":"\u26A0\uFE0F Belum Menyerahkan"}
        </div>
      </div>
      <div class="card">
        <h3>💬 ${this.forumTopic}</h3>
        <div class="input-container">
          <div class="avatar">👤</div>
          <div class="input-wrapper">
            <textarea id="main-input" class="input-box" rows="2" placeholder="Tulis komentar..."></textarea>
            <button class="btn-submit" ?disabled="${this._submitting}" @click="${this._submitMainComment}">${this._submitting?"Posting...":"Post Comment"}</button>
          </div>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: var(--ddd-spacing-4); margin-bottom: var(--ddd-spacing-4); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-secondary);">
          <span style="cursor: pointer; ${this._sortMode==="best"?"color: var(--ddd-theme-primary);":""}" @click="${()=>this._setSort("best")}">Best</span>
          <span style="cursor: pointer; ${this._sortMode==="newest"?"color: var(--ddd-theme-primary);":""}" @click="${()=>this._setSort("newest")}">Newest</span>
          <span style="cursor: pointer; ${this._sortMode==="oldest"?"color: var(--ddd-theme-primary);":""}" @click="${()=>this._setSort("oldest")}">Oldest</span>
        </div>
        ${t.map(e=>n`
          <div class="comment-card">
            <div class="avatar">${e.user?e.user.charAt(0).toUpperCase():"?"}</div>
            <div class="comment-content">
              <div class="comment-header">
                <span class="user-name">${e.user}</span>
                <span class="time-stamp">${this._timeAgo(e.time)}</span>
              </div>
              <div class="text-comment">${e.text}</div>
              <div class="action-bar">
                <span class="action-btn" @click="${()=>this._handleLike(e.id)}">🔺 ${e.likes||0}</span>
                <span class="action-btn" @click="${()=>this._handleDislike(e.id)}">🔻</span>
                <span class="action-btn" @click="${()=>this._toggleReply(e.id)}">Reply</span>
                ${this.viewMode==="lecturer"&&!this.hideDelete?n`<span class="action-btn" style="color: var(--ddd-theme-error);" @click="${()=>this._deleteComment(e.id)}">🗑️ Hapus</span>`:""}
              </div>
              ${this._activeReplyId===e.id?n`
                <div style="display: flex; gap: var(--ddd-spacing-2); margin-top: var(--ddd-spacing-2); padding-left: var(--ddd-spacing-3); border-left: 2px solid var(--ddd-theme-polaris-border);">
                  <input id="reply-${e.id}" style="flex: 1; padding: var(--ddd-spacing-2); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-xs);" type="text" placeholder="Tulis balasan...">
                  <button class="btn-submit" style="font-size: var(--ddd-font-size-xs); padding: var(--ddd-spacing-1) var(--ddd-spacing-3);" ?disabled="${this._submitting}" @click="${()=>this._submitReply(e.id)}">${this._submitting?"...":"Reply"}</button>
                </div>
              `:""}
              ${e.replies&&e.replies.length>0?n`
                <div style="margin-top: var(--ddd-spacing-3); padding-left: var(--ddd-spacing-4); border-left: 2px solid var(--ddd-theme-polaris-surface-hover); display: flex; flex-direction: column; gap: var(--ddd-spacing-2);">
                  ${e.replies.map(i=>n`
                    <div style="display: flex; gap: var(--ddd-spacing-2); background: var(--ddd-theme-polaris-surface); padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border-radius: var(--ddd-radius-sm);">
                      <div class="avatar" style="width: 30px; height: 30px; font-size: var(--ddd-font-size-m);">${i.user?i.user.charAt(0).toUpperCase():"?"}</div>
                      <div class="comment-content">
                        <div class="comment-header">
                          <span class="user-name" style="font-size: var(--ddd-font-size-xs);">${i.user}</span>
                          <span class="time-stamp">${this._timeAgo(i.time)}</span>
                        </div>
                        <div class="text-comment" style="font-size: var(--ddd-font-size-xs);">${i.text}</div>
                      </div>
                    </div>
                  `)}
                </div>
              `:""}
            </div>
          </div>
        `)}
        ${t.length===0?n`<p style="font-size: var(--ddd-font-size-s); color: var(--ddd-theme-secondary); text-align: center; padding: var(--ddd-spacing-5);">${this.t.noComments}</p>`:""}
      </div>
    `}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Assignment Forum",description:"Forum diskusi dan pengumpulan tugas dengan integrasi Google Sheets",icon:"icons:forum",color:"blue",tags:["Education","Communication"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL (Main)",inputMethod:"textfield",description:"URL Apps Script utama untuk activity logging"},{property:"forumApiUrl",title:"Forum API URL (Terpisah)",inputMethod:"textfield",description:"URL Apps Script terpisah untuk forum & tugas"},{property:"assignmentTitle",title:"Judul Tugas",inputMethod:"textfield",default:"Tugas Mandiri"},{property:"forumTopic",title:"Topik Forum",inputMethod:"textfield",default:"Forum Diskusi"}]},saveOptions:{unsetAttributes:["_comments","_activeReplyId","_sortMode","_assignmentText","_assignmentLink","_assignmentSubmitted","_submitting"]}}}}globalThis.customElements.define(ct.tag,ct);class F extends L(E(P)){static get tag(){return"quiz-dashboard-lite2"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},sheetName:{type:String,attribute:"sheet-name"},viewMode:{type:String,attribute:"view-mode"},quizTabHidden:{type:Boolean,attribute:"quiz-tab-hidden",reflect:!0},_spreadsheetId:{state:!0},_activeTab:{state:!0},_successMsg:{state:!0},_errorMsg:{state:!0},_user:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.sheetName="Pertemuan",this.viewMode="student",this.quizTabHidden=!1,this._user=null,this._spreadsheetId="",this._activeTab=0,this._successMsg="",this._errorMsg="",this.t={...this.t,title:"Kuis Interaktif & Kehadiran",subtitle:"Sistem Belajar dan Latihan Kuis dengan Aktivitas Otomatis",tabQuiz:"\u{1F4DD} Ambil Kuis",tabAttendance:"\u{1F4C5} Kehadiran & Aktivitas",tabGuide:"\u{1F4D6} Panduan",tabNilai:"\u{1F4CA} Daftar Skor",welcome:"Selamat datang",dataRecorded:"Data kuis & aktivitas akan tercatat atas nama Anda"}}connectedCallback(){if(super.connectedCallback(),this._onUserLoginBound=this._onUserLogin.bind(this),this._onUserLogoutBound=this._onUserLogout.bind(this),globalThis.addEventListener("quiz-user-login",this._onUserLoginBound),globalThis.addEventListener("quiz-user-logout",this._onUserLogoutBound),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[F.tag]&&(t.elementList[F.tag]=F.haxProperties)}}disconnectedCallback(){globalThis.removeEventListener("quiz-user-login",this._onUserLoginBound),globalThis.removeEventListener("quiz-user-logout",this._onUserLogoutBound),super.disconnectedCallback()}_onUserLogin(t){this._user=t.detail,this._successMsg=`${this.t.welcome}, ${this._user.nama}! ${this.t.dataRecorded}.`,setTimeout(()=>{this._successMsg=""},4e3)}_onUserLogout(){this._user=null,this._successMsg="Anda telah keluar.",setTimeout(()=>{this._successMsg=""},3e3)}_onQuizSaved(t){globalThis.dispatchEvent(new CustomEvent("quiz-saved",{detail:t.detail,bubbles:!0,composed:!0})),this._successMsg=`Skor ${t.detail.name} sebesar ${t.detail.score}% berhasil disimpan!`,setTimeout(()=>{this._successMsg=""},4e3)}_simReading(){globalThis.dispatchEvent(new CustomEvent("reading-saved",{detail:{title:`Materi ${this.sheetName}`},bubbles:!0,composed:!0})),globalThis.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}static get styles(){return[super.styles,q`
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
      `]}render(){return n`
      <div class="header">
        <div class="title-section">
          <h1>${this.t.title}</h1>
          <p>${this.t.subtitle}</p>
        </div>
        <span class="badge">HAXcms Ready</span>
      </div>
      ${this._successMsg?n`<div class="msg msg-success">${this._successMsg}</div>`:""}
      
      <quiz-user-auth .appsScriptUrl="${this.appsScriptUrl}"></quiz-user-auth>
      
      <div class="tab-container">
        <button class="tab-btn ${this._activeTab===0?"active":""}" @click="${()=>this._activeTab=0}">${this.t.tabGuide}</button>
        ${this.quizTabHidden?"":n`<button class="tab-btn ${this._activeTab===1?"active":""}" @click="${()=>this._activeTab=1}">${this.t.tabQuiz}</button>`}
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

      <div class="main-content">
        ${this._activeTab===0?n`
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
        `:this._activeTab===1&&!this.quizTabHidden?n`
          <explode-quiz
            .appsScriptUrl="${this.appsScriptUrl}"
            .sheetName="${this.sheetName}"
            .studentId="${this._user?.studentId||""}"
            .studentName="${this._user?.nama||""}"
            .studentNis="${this._user?.nis||""}"
            .studentAbsen="${this._user?.absen||""}"
            .studentKelas="${this._user?.kelas||""}"
            .editable="${!0}"
            @quiz-saved="${this._onQuizSaved}">
          </explode-quiz>
        `:this._activeTab===2?n`
          <div class="tracker-grid" style="margin-top: var(--ddd-spacing-6);">
            <attendance-tracker></attendance-tracker>
            <engagement-score></engagement-score>
          </div>
        `:n`
          <div style="margin-top: var(--ddd-spacing-6);">
            <transparent-gradebook
              .appsScriptUrl="${this.appsScriptUrl}"
              .studentId="${this._user?.studentId||""}"
              .studentName="${this._user?.nama||""}"
              .viewMode="${this.viewMode}"
              .showAfterQuiz="${!0}">
            </transparent-gradebook>
          </div>
        `}
      </div>
    `}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Quiz Dashboard Lite",description:"Dashboard kuis modular dengan attendance tracking, login siswa, dan integrasi Google Sheets",icon:"icons:quiz",color:"purple",tags:["Education","Assessment","Interactive"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield",description:"URL Google Apps Script Web App"},{property:"sheetName",title:"Nama Pertemuan",inputMethod:"textfield",default:"Pertemuan"},{property:"viewMode",title:"Mode Tampilan",inputMethod:"select",options:{student:"View Mahasiswa",lecturer:"Mode Dosen (Console)"},default:"student"},{property:"quizTabHidden",title:"Sembunyikan Tab Kuis",inputMethod:"boolean",default:!1}]},saveOptions:{unsetAttributes:["_activeTab","_successMsg","_errorMsg","_user","_spreadsheetId"]}}}}globalThis.customElements.define(F.tag,F)});export default Ot();
