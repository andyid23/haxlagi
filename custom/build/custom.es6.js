var Jt=(x,t)=>()=>{try{return t||x((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};import{css as Vt,html as st}from"@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";import{PolarisFlexTheme as Wt}from"@haxtheweb/polaris-theme/lib/polaris-flex-theme.js";import"@haxtheweb/haxcms-elements/lib/ui-components/blocks/site-children-block.js";import{DDDSuper as C}from"@haxtheweb/d-d-d/d-d-d.js";import{LitElement as E,css as P,html as r}from"lit";import{I18NMixin as N}from"@haxtheweb/i18n-manager/lib/I18NMixin.js";var te=Jt((le,rt)=>{let vt=class extends Wt{static get styles(){return[super.styles,Vt`
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
      `]}renderHeaderSlot(){return st``}renderSideBar(){return st`
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
    `}renderFooterContactInformation(){return st``}renderFooterSecondarySlot(){return st``}renderFooterPrimarySlot(){return st``}static get tag(){return"custom-haxquiz-theme"}constructor(){super()}};if(customElements.define(vt.tag,vt),typeof customElements<"u"){class x extends HTMLElement{static get observedAttributes(){return["message","type","duration","visible"]}constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._message="",this._type="info",this._duration=5e3,this._visible=!1,this._timeoutId=null,this.render(),this._setupEventListeners()}get message(){return this._message}set message(e){this._message=e||"",this._renderContent(),this.setAttribute("message",this._message)}get type(){return this._type}set type(e){this._type=e||"info",this._renderContent(),this.setAttribute("type",this._type)}get duration(){return this._duration}set duration(e){this._duration=parseInt(e)||5e3,this.setAttribute("duration",this._duration.toString())}get visible(){return this._visible}set visible(e){this._visible=e===!0||e==="true"||e==="",this._updateVisibility(),this.setAttribute("visible",this._visible?"":"false")}connectedCallback(){this._updateVisibility()}disconnectedCallback(){this._clearTimeout()}attributeChangedCallback(e,a,i){if(a!==i)switch(e){case"message":this.message=i;break;case"type":this.type=i;break;case"duration":this.duration=i;break;case"visible":this.visible=i;break}}_setupEventListeners(){this._shadow.addEventListener("click",e=>{e.target.classList.contains("close-btn")&&this.hide()})}_renderContent(){const e={info:"notif-info",success:"notif-success",warning:"notif-warning",error:"notif-error"}[this._type]||"notif-info";this._shadow.innerHTML=`
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
      `}_updateVisibility(){const e=this._shadow.querySelector(".notification");e&&e.classList.toggle("show",this._visible),this._visible&&this._timeoutId===null&&this._duration>0&&(this._timeoutId=setTimeout(()=>{this.hide()},this._duration))}_clearTimeout(){this._timeoutId&&(clearTimeout(this._timeoutId),this._timeoutId=null)}show(){this._clearTimeout(),this._visible=!0,this._updateVisibility(),this._duration>0&&(this._timeoutId=setTimeout(()=>{this.hide()},this._duration)),this.dispatchEvent(new CustomEvent("notif-show",{bubbles:!0,composed:!0,detail:{message:this._message,type:this._type}}))}hide(){this._clearTimeout(),this._visible=!1,this._updateVisibility(),this.dispatchEvent(new CustomEvent("notif-hide",{bubbles:!0,composed:!0,detail:{message:this._message,type:this._type}}))}render(){this._renderContent()}}customElements.define("notif-element",x)}class bt extends N(C(E)){static get tag(){return"todo-list"}static get properties(){return{...super.properties,tasks:{type:Array,attribute:"tasks",reflect:!0,converter:{fromAttribute(t){if(t==null||t==="")return;if(Array.isArray(t)||typeof t=="object")return t;const e=String(t).trim();if(!(!e||e==="[object Object]"||e==="undefined"||e==="null")&&(e.startsWith("[")||e.startsWith("{")))try{const a=JSON.parse(e);return Array.isArray(a)?a:a&&typeof a=="object"&&Array.isArray(a.tasks)?a.tasks:void 0}catch{return}},toAttribute(t){if(!Array.isArray(t))return null;try{return JSON.stringify(t)}catch{return null}}}},editable:{type:Boolean,attribute:!0,reflect:!0},editing:{type:Boolean,attribute:!0,reflect:!0},_validationError:{type:String},_screen:{state:!0},_tempTasks:{state:!0},_editingIndex:{state:!0},_tempTaskText:{state:!0},_editorOrigin:{state:!0}}}constructor(){super(),this.tasks=[],this.editable=!1,this.editing=!1,this._validationError="",this._screen="list",this._tempTasks=[],this._editingIndex=-1,this._tempTaskText="",this._editorOrigin="list",this.t={addTask:"Add Task",inputPlaceholder:"Enter a new task...",deleteTask:"Delete task",emptyMessage:"No tasks yet. Add one above!",taskCompleted:"Mark as incomplete",taskIncomplete:"Mark as complete",validationErrorMinLength:"Task must be at least 3 characters",validationErrorMaxLength:"Task must be no more than 50 characters",editTitle:"Edit Task List",closeEditor:"Close Editor",addTaskBtnEditor:"Add Task",editTaskBtn:"Edit",saveEditBtn:"Save",cancelEditBtn:"Cancel",saveAllBtn:"Save & Exit",cancelAllBtn:"Cancel",emptyTaskError:"Task cannot be empty",ariaEditTitle:"Task list editor panel",ariaOpenEditor:"Open task list editor",ariaCloseEditor:"Close task list editor",ariaTaskInputEditor:"Editor task input",ariaTasksListEditor:"Editable task list",ariaEditTask:"Edit this task",ariaDeleteTask:"Delete this task",ariaSaveAll:"Save all task changes",ariaCancelAll:"Cancel all task changes"}}updated(t){super.updated&&super.updated(t),Array.isArray(this.tasks)||(this.tasks=[])}get _inHaxEditor(){return!!(globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"&&globalThis.HaxStore.requestAvailability().editMode)}static get styles(){return[super.styles,P`
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
      `]}render(){return this._screen==="editor"?this._renderEditorScreen():r`
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

      ${this._validationError?r`<p id="task-input-error" role="alert" class="validation-error">
            ${this._validationError}
          </p>`:""}
      ${this.tasks.length===0?r`<p class="empty-message">${this.t.emptyMessage}</p>`:r`
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
    `}_renderEditorScreen(){return r`
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
          ${this._tempTasks.map((t,e)=>r`
              <div class="question-card">
                ${this._editingIndex===e?r`
                      <div class="edit-form">
                        <input
                          class="edit-choice-input"
                          type="text"
                          .value="${this._tempTaskText}"
                          @input="${a=>this._tempTaskText=a.target.value}"
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
                    `:r`
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
                            @change="${a=>this._toggleCompleteEditor(e,a.target.checked)}"
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
    `}_renderTask(t){return r`
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
    `}_handleInputKeydown(t){t.key==="Enter"&&this._addTask()}_handleAddClick(){this._addTask()}_handleInputChange(t){t.target.value.trim().length===0&&(this._validationError="")}_handleDelete(t){this.tasks=this.tasks.filter(e=>e.id!==t)}_handleToggleComplete(t,e){this.tasks=this.tasks.map(a=>a.id===t?{...a,completed:e}:a)}_addTask(){const t=this.shadowRoot.querySelector("#task-input"),e=t.value.trim();if(!e){this._validationError="";return}if(e.length<3){this._validationError=this.t.validationErrorMinLength;return}if(e.length>50){this._validationError=this.t.validationErrorMaxLength;return}this._validationError="";const a={id:typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now(),text:e,completed:!1};this.tasks=[...this.tasks,a],t.value="",t.focus()}_openEditor(){this._screen==="list"&&(this.editing||(this.editing=!0,this._editingIndex=-1,this._tempTaskText="",this._tempTasks=JSON.parse(JSON.stringify(this.tasks||[])),this._editorOrigin="list",this._screen="editor"))}_addTaskEditor(){const t=(this._tempTaskText||"").trim();if(t){if(t.length<3){this._validationError=this.t.validationErrorMinLength;return}if(t.length>50){this._validationError=this.t.validationErrorMaxLength;return}this._validationError="",this._tempTasks=[...this._tempTasks,{id:typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now(),text:t,completed:!1}],this._tempTaskText=""}}_deleteTaskEditor(t){this._tempTasks=this._tempTasks.filter((e,a)=>a!==t),this._editingIndex===t?(this._editingIndex=-1,this._tempTaskText=""):this._editingIndex>t&&(this._editingIndex=this._editingIndex-1)}_toggleCompleteEditor(t,e){this._tempTasks=this._tempTasks.map((a,i)=>i===t?{...a,completed:e}:a)}_startEditTask(t){this._editingIndex=t,this._tempTaskText=this._tempTasks[t]?.text||""}_saveEditTask(){const t=(this._tempTaskText||"").trim();if(!t){this._validationError=this.t.emptyTaskError;return}if(t.length<3){this._validationError=this.t.validationErrorMinLength;return}if(t.length>50){this._validationError=this.t.validationErrorMaxLength;return}this._editingIndex<0||this._editingIndex>=this._tempTasks.length||(this._validationError="",this._tempTasks=this._tempTasks.map((e,a)=>a===this._editingIndex?{...e,text:t}:e),this._editingIndex=-1,this._tempTaskText="")}_cancelEditTask(){this._editingIndex=-1,this._tempTaskText=""}_saveAll(){this._screen==="editor"&&(this.tasks=JSON.parse(JSON.stringify(this._tempTasks||[])),this.editing=!1,this._editingIndex=-1,this._tempTaskText="",this._screen=this._editorOrigin||"list",this._editorOrigin="list")}_cancelAll(){this._screen==="editor"&&(this.editing=!1,this._editingIndex=-1,this._tempTaskText="",this._screen=this._editorOrigin||"list",this._editorOrigin="list")}static get haxProperties(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Todo List",description:"A simple task management web component",icon:"icons:assignment",color:"blue",tags:["Productivity","Content"]},settings:{configure:[],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_validationError","_screen","_tempTasks","_editingIndex","_tempTaskText","_editorOrigin","editing","editable"]}}}}globalThis.customElements.define(bt.tag,bt);const O="a3_attendance_logs",J="a3_last_activity_date";function Q(){const x=new Date;return`${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,"0")}-${String(x.getDate()).padStart(2,"0")}`}function j(){const x=Q();if(localStorage.getItem(J)!==x)return localStorage.setItem(O,"[]"),localStorage.setItem(J,x),[];const t=localStorage.getItem(O);return t?JSON.parse(t):[]}function ft(x,t){const e=new Date,a=Q();localStorage.getItem(J)!==a&&(localStorage.setItem(O,"[]"),localStorage.setItem(J,a));const i=j();if(i.slice(0,5).filter(o=>o.type===x&&o.description===t&&o.timestamp===e.toISOString()).length>0)return i;const d={id:"log-"+e.getTime(),timestamp:e.toISOString(),date:a,type:x,description:t,synced:!1},l=[d,...i];return localStorage.setItem(O,JSON.stringify(l)),globalThis.dispatchEvent(new CustomEvent("a3-activity-logged",{detail:{log:d}})),l}function _t(x){try{const t=JSON.parse(localStorage.getItem(O)||"[]").map(e=>e.id===x?{...e,synced:!0}:e);localStorage.setItem(O,JSON.stringify(t))}catch{}}function Yt(){try{return JSON.parse(localStorage.getItem(O)||"[]").filter(x=>!x.synced)}catch{return[]}}class V extends N(C(E)){static get tag(){return"activity-logger"}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Activity Logger",description:"Pencatat aktivitas belajar siswa",icon:"icons:list-alt",color:"green",tags:["Education","Attendance"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet",inputMethod:"textfield"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},kdMateri:{type:String,attribute:"kd-materi"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},_logs:{state:!0},_expanded:{state:!0},_toastMsg:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.kdMateri="",this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this._logs=j(),this._expanded=!1,this._toastMsg="",this._lastScrollTime=0,this._handleScroll=this._handleScroll.bind(this),this._handleQuizSaved=this._handleQuizSaved.bind(this),this._handleDiscussionSaved=this._handleDiscussionSaved.bind(this),this._handleAssignmentSaved=this._handleAssignmentSaved.bind(this),this._handleReadingSaved=this._handleReadingSaved.bind(this),this._handleSessionChanged=this._handleSessionChanged.bind(this)}get _kdMateriVal(){return this.kdMateri||this.sheetName||"Pertemuan"}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const e=globalThis.HaxStore.requestAvailability();e&&!e.elementList[V.tag]&&(e.elementList[V.tag]=V.haxProperties)}globalThis.addEventListener("scroll",this._handleScroll,{passive:!0}),globalThis.addEventListener("quiz-saved",this._handleQuizSaved),globalThis.addEventListener("discussion-saved",this._handleDiscussionSaved),globalThis.addEventListener("assignment-saved",this._handleAssignmentSaved),globalThis.addEventListener("reading-saved",this._handleReadingSaved),globalThis.addEventListener("download-saved",this._handleDownloadSaved),globalThis.addEventListener("quiz-user-session-changed",this._handleSessionChanged),this._downloadClickHandler=e=>this._handleDownloadClick(e),globalThis.document.addEventListener("click",this._downloadClickHandler,!0);const t=Q();localStorage.getItem(J)!==t&&(this._logs=[],localStorage.setItem(O,"[]"),localStorage.setItem(J,t)),this._handleSessionChanged({detail:this._loadSession()})}_loadSession(){try{const t=JSON.parse(localStorage.getItem("quiz_user_session"));return t?.expiresAt&&Date.now()>t.expiresAt?(localStorage.removeItem("quiz_user_session"),null):t}catch{return null}}_handleSessionChanged(t){const e=t?.detail||this._loadSession();e?.studentId&&(this.studentId=e.studentId,this.studentName=e.nama,this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||"")}disconnectedCallback(){globalThis.removeEventListener("scroll",this._handleScroll),globalThis.removeEventListener("quiz-saved",this._handleQuizSaved),globalThis.removeEventListener("discussion-saved",this._handleDiscussionSaved),globalThis.removeEventListener("assignment-saved",this._handleAssignmentSaved),globalThis.removeEventListener("reading-saved",this._handleReadingSaved),globalThis.removeEventListener("download-saved",this._handleDownloadSaved),globalThis.removeEventListener("quiz-user-session-changed",this._handleSessionChanged),globalThis.document.removeEventListener("click",this._downloadClickHandler,!0),super.disconnectedCallback()}_handleScroll(){const t=Date.now();t-this._lastScrollTime<12e4||globalThis.scrollY>1e3&&(this._lastScrollTime=t,this.logActivity("reading",`Membaca materi (scroll ${Math.round(globalThis.scrollY)}px)`))}_handleQuizSaved(t){const e=t.detail?.score||0;this.logActivity("quiz",`Kuis selesai (Skor: ${e}%)`)}_handleDiscussionSaved(t){const e=t.detail?.thread||t.detail?.title||"Forum";t.detail?.kdMateri||this._kdMateriVal,this.logActivity("discussion",`Diskusi di: ${e}`)}_handleAssignmentSaved(t){const e=t.detail?.title||"Tugas";t.detail?.kdMateri||this._kdMateriVal,this.logActivity("assignment",`Tugas dikumpulkan: ${e}`)}_handleReadingSaved(t){const e=t.detail?.title||"Materi";this.logActivity("reading",`Membaca: ${e}`)}_handleDownloadSaved(t){const e=t.detail?.title||"Materi";this.logActivity("download",`Download materi: ${e}`)}_handleDownloadClick(t){if(!t.target)return;const e=t.target.closest?t.target.closest('a[download], a[href*="/files/"], a[href*="files/"]'):null;if(!e)return;const a=e.getAttribute("download")||e.getAttribute("aria-label")||e.textContent.trim()||e.getAttribute("href")||"Materi";this.logActivity("download",`Download materi: ${a.substring(0,60)}`)}logActivity(t,e){if(ft(t,e),this._logs=j(),this.appsScriptUrl&&this.studentId){const a=this._logs[0],i=new URLSearchParams({action:"logActivity",timestamp:new Date().toISOString(),date:Q(),name:this.studentName,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",activityType:t,description:e,kdMateri:this._kdMateriVal});fetch(`${this.appsScriptUrl}?${i.toString()}`,{redirect:"follow"}).then(()=>{a&&_t(a.id)}).catch(()=>{})}this._showToast(`\u2713 ${e.substring(0,40)}`)}_flushPendingLogs(){if(!this.studentId||!this.appsScriptUrl)return;const t=Yt();for(const e of t){const a=new URLSearchParams({action:"logActivity",timestamp:e.timestamp,date:e.date,name:this.studentName,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",activityType:e.type,description:e.description,kdMateri:this._kdMateriVal});fetch(`${this.appsScriptUrl}?${a.toString()}`,{redirect:"follow"}).then(()=>{_t(e.id)}).catch(()=>{})}}_showToast(t){this._toastMsg=t,setTimeout(()=>{this._toastMsg===t&&(this._toastMsg="")},3e3)}_resetToday(){globalThis.confirm("Reset semua aktivitas hari ini?")&&(this._logs=[],localStorage.setItem(O,"[]"),this._showToast("Aktivitas hari ini direset"))}static get styles(){return[super.styles,P`:host { display: block; font-family: var(--ddd-font-primary); } .floating-logger-pill { position: fixed; bottom: var(--ddd-spacing-6); right: var(--ddd-spacing-6); background-color: var(--ddd-theme-default-text); color: var(--ddd-theme-on-primary); padding: var(--ddd-spacing-3) var(--ddd-spacing-5); border-radius: var(--ddd-radius-full); box-shadow: var(--ddd-shadow-2); display: flex; align-items: center; gap: var(--ddd-spacing-3); cursor: pointer; z-index: 1000; transition: all 0.3s; font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-medium); } .floating-logger-pill:hover { transform: translateY(-2px); box-shadow: var(--ddd-shadow-3); } .pulse-dot { width: 8px; height: 8px; background-color: var(--ddd-theme-success); border-radius: 50%; animation: pulse 1.6s infinite; } @keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34,197,94,0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34,197,94,0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34,197,94,0); } } .drawer { position: fixed; bottom: 84px; right: var(--ddd-spacing-6); width: 380px; max-height: 500px; background: var(--ddd-theme-default-surface); border-radius: var(--ddd-radius-lg); box-shadow: var(--ddd-shadow-3); border: 1px solid var(--ddd-theme-polaris-border); z-index: 1000; display: flex; flex-direction: column; overflow: hidden; } .drawer-header { background-color: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary); padding: var(--ddd-spacing-4); font-weight: var(--ddd-font-weight-bold); display: flex; justify-content: space-between; align-items: center; } .close-btn { background: none; border: none; color: var(--ddd-theme-on-primary); font-size: var(--ddd-font-size-xl); cursor: pointer; } .drawer-content { padding: var(--ddd-spacing-4); overflow-y: auto; flex: 1; } .date-label { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-bottom: var(--ddd-spacing-3); text-align: center; } .logs-list { display: flex; flex-direction: column; gap: var(--ddd-spacing-2); max-height: 280px; overflow-y: auto; } .log-item { padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border-radius: var(--ddd-radius-md); background-color: var(--ddd-theme-polaris-surface-hover); font-size: var(--ddd-font-size-xs); border-left: 3px solid var(--ddd-theme-secondary); } .log-item.reading { border-left-color: var(--ddd-theme-link); } .log-item.quiz { border-left-color: var(--ddd-theme-accent); } .log-item.assignment { border-left-color: var(--ddd-theme-success); } .log-item.discussion { border-left-color: var(--ddd-theme-warning); } .log-time { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-bottom: 2px; } .reset-btn { background: var(--ddd-theme-error); color: var(--ddd-theme-on-error); border: none; padding: var(--ddd-spacing-1) var(--ddd-spacing-3); border-radius: var(--ddd-radius-md); font-size: var(--ddd-font-size-xs); cursor: pointer; margin-top: var(--ddd-spacing-3); } .toast { position: fixed; bottom: 90px; right: var(--ddd-spacing-6); background-color: var(--ddd-theme-default-text); color: var(--ddd-theme-on-primary); padding: var(--ddd-spacing-3) var(--ddd-spacing-5); border-radius: var(--ddd-radius-md); box-shadow: var(--ddd-shadow-2); font-size: var(--ddd-font-size-s); z-index: 1001; animation: fadeInOut 3s forwards; } @keyframes fadeInOut { 0% { opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { opacity: 0; } }`]}render(){const t=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"});return r`
      <div class="floating-logger-pill" @click="${()=>this._expanded=!this._expanded}">
        <span class="pulse-dot"></span>
        <span>Aktivitas Hari Ini (${this._logs.length})</span>
      </div>
      ${this._expanded?r`
        <div class="drawer">
          <div class="drawer-header">
            <span>📊 Aktivitas Hari Ini</span>
            <button class="close-btn" @click="${()=>this._expanded=!1}">×</button>
          </div>
          <div class="drawer-content">
            <div class="date-label">📅 ${t}</div>
            <div class="logs-list">
              ${this._logs.length===0?r`<div style="color: var(--ddd-theme-secondary); text-align: center; padding: var(--ddd-spacing-6) 0;">Belum ada aktivitas tercatat hari ini.</div>`:this._logs.map(e=>r`
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
      ${this._toastMsg?r`<div class="toast">${this._toastMsg}</div>`:""}
    `}}globalThis.customElements.define(V.tag,V);class W extends N(C(E)){static get tag(){return"attendance-tracker"}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Attendance Tracker",description:"Rekap absensi dan aktivitas harian siswa",icon:"icons:check-circle",color:"green",tags:["Education","Attendance"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield"},{property:"forumApiUrl",title:"Forum API URL",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet (KD Materi)",inputMethod:"textfield"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},studentId:{type:String,attribute:"student-id"},_logs:{state:!0},_forumToday:{state:!0}}}constructor(){super(),this._logs=j(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.studentId="",this._forumToday=0,this._handleSessionChanged=this._handleSessionChanged.bind(this)}get kdMateri(){return this.sheetName||"Pertemuan"}_loadSession(){try{const t=JSON.parse(localStorage.getItem("quiz_user_session"));return t?.expiresAt&&Date.now()>t.expiresAt?(localStorage.removeItem("quiz_user_session"),null):t}catch{return null}}_handleSessionChanged(t){const e=t?.detail||this._loadSession();e?.studentId&&(this.studentId=e.studentId,this.studentName=e.nama,this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||"",this._fetchForumToday())}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[W.tag]&&(t.elementList[W.tag]=W.haxProperties)}this._reloadHandler=()=>{this._logs=j()},this._forumHandler=()=>{this._fetchForumToday()},globalThis.addEventListener("a3-activity-logged",this._reloadHandler),globalThis.addEventListener("storage",this._reloadHandler),globalThis.addEventListener("discussion-saved",this._forumHandler),globalThis.addEventListener("quiz-user-session-changed",this._handleSessionChanged),this._handleSessionChanged({detail:this._loadSession()}),this._fetchForumToday()}disconnectedCallback(){globalThis.removeEventListener("a3-activity-logged",this._reloadHandler),globalThis.removeEventListener("storage",this._reloadHandler),globalThis.removeEventListener("discussion-saved",this._forumHandler),globalThis.removeEventListener("quiz-user-session-changed",this._handleSessionChanged),super.disconnectedCallback()}async _fetchForumToday(){if(!this.forumApiUrl||!this.studentId){this._forumToday=0;return}try{const t=new URLSearchParams({action:"getForumActivityHistory",studentId:this.studentId,days:1,kdMateri:this._kdMateriVal}),e=(await(await fetch(`${this.forumApiUrl}?${t.toString()}`)).json()).history||[];this._forumToday=e.reduce((a,i)=>a+(i.count||0),0)}catch(t){console.error("[attendance-tracker] Forum fetch failed:",t),this._forumToday=0}}_getTodayStats(){const t=Q(),e=this._logs.filter(A=>A.date===t),a={reading:e.filter(A=>A.type==="reading").length,quiz:e.filter(A=>A.type==="quiz").length,assignment:e.filter(A=>A.type==="assignment").length,discussion:e.filter(A=>A.type==="discussion").length,download:e.filter(A=>A.type==="download").length,forum:e.filter(A=>A.type==="discussion").length,total:e.length},i=a.reading>=3?1:0,d=a.quiz>=1?1:0,l=a.assignment>=1?1:0,o=a.download>=1?1:0,f=this.forumApiUrl?a.forum>=1?1:0:null,u=a.total>=8?1:0,y=f===null?5:6,z=i+d+l+o+(f||0)+u,L=Math.round(z/y*100);return{counts:a,attendancePercentage:L,status:L>=100?"LENGKAP":L>=50?"PROSES":"BELUM MULAI"}}static get styles(){return[super.styles,P`:host { display: block; font-family: var(--ddd-font-primary); color: var(--ddd-theme-default-text); } .tracker-card { background: var(--ddd-theme-default-surface); border-radius: var(--ddd-radius-lg); padding: var(--ddd-spacing-6); border: 1px solid var(--ddd-theme-polaris-border); box-shadow: var(--ddd-shadow-1); } h3 { margin: 0 0 var(--ddd-spacing-4) 0; font-size: var(--ddd-font-size-l); color: var(--ddd-theme-primary); display: flex; align-items: center; gap: var(--ddd-spacing-2); } .date-info { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-bottom: var(--ddd-spacing-4); text-align: center; } .flex-container { display: flex; gap: var(--ddd-spacing-8); align-items: center; flex-wrap: wrap; } .gauge-section { flex: 1; min-width: 220px; display: flex; flex-direction: column; align-items: center; text-align: center; } .gauge-wrapper { position: relative; width: 160px; height: 160px; margin-bottom: var(--ddd-spacing-3); } svg { transform: rotate(-90deg); width: 160px; height: 160px; } circle { fill: none; stroke-width: 12; } .bg-circle { stroke: var(--ddd-theme-polaris-surface-hover); } .fg-circle { stroke: var(--ddd-theme-primary); stroke-linecap: round; transition: stroke-dashoffset 0.6s; } .gauge-value { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); } .badge { padding: var(--ddd-spacing-2) var(--ddd-spacing-4); border-radius: var(--ddd-radius-full); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-bold); display: inline-block; margin-top: var(--ddd-spacing-2); } .badge.success { background-color: var(--ddd-theme-success-light); color: var(--ddd-theme-success-text); } .badge.warning { background-color: var(--ddd-theme-warning-light); color: var(--ddd-theme-warning-text); } .badge.info { background-color: var(--ddd-theme-polaris-surface-hover); color: var(--ddd-theme-secondary); } .criteria-list { flex: 2; min-width: 280px; display: flex; flex-direction: column; gap: var(--ddd-spacing-3); } .criteria-item { display: flex; align-items: center; justify-content: space-between; padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-radius: var(--ddd-radius-md); background-color: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border); } .crit-info { display: flex; align-items: center; gap: var(--ddd-spacing-3); } .icon { font-size: var(--ddd-font-size-l); width: 32px; height: 32px; background-color: var(--ddd-theme-polaris-surface-hover); border-radius: var(--ddd-radius-md); display: flex; align-items: center; justify-content: center; } .crit-name { font-weight: var(--ddd-font-weight-medium); font-size: var(--ddd-font-size-s); } .crit-progress { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-top: 2px; } .status-indicator { font-size: var(--ddd-font-size-l); } .status-indicator.check { color: var(--ddd-theme-success); } .status-indicator.cross { color: var(--ddd-theme-polaris-border); }`]}render(){const t=this._getTodayStats(),e=65,a=2*Math.PI*e,i=a-t.attendancePercentage/100*a,d=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long"});return r`
      <div class="tracker-card">
        <h3>📊 Status Kehadiran Hari Ini</h3>
        <div class="date-info">📅 ${d}</div>
        <div class="flex-container">
          <div class="gauge-section">
            <div class="gauge-wrapper">
              <svg><circle class="bg-circle" cx="80" cy="80" r="${e}"></circle><circle class="fg-circle" cx="80" cy="80" r="${e}" stroke-dasharray="${a}" stroke-dashoffset="${i}"></circle></svg>
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
            ${this.forumApiUrl?r`
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
    `}}globalThis.customElements.define(W.tag,W);class Y extends N(C(E)){static get tag(){return"engagement-score"}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Engagement Score",description:"Skor keterlibatan belajar siswa (heatmap 6 minggu)",icon:"icons:whatshot",color:"orange",tags:["Education","Attendance"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield"},{property:"forumApiUrl",title:"Forum API URL",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet (KD Materi)",inputMethod:"textfield"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},studentId:{type:String,attribute:"student-id"},_history:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.studentId="",this._history=[],this._handleSessionChanged=this._handleSessionChanged.bind(this)}get kdMateri(){return this.sheetName||"Pertemuan"}_loadSession(){try{const t=JSON.parse(localStorage.getItem("quiz_user_session"));return t?.expiresAt&&Date.now()>t.expiresAt?(localStorage.removeItem("quiz_user_session"),null):t}catch{return null}}_handleSessionChanged(t){const e=t?.detail||this._loadSession();e?.studentId&&(this.studentId=e.studentId,this.studentName=e.nama,this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||"",this._fetchHistory())}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[Y.tag]&&(t.elementList[Y.tag]=Y.haxProperties)}this._reloadHandler=()=>this._fetchHistory(),globalThis.addEventListener("a3-activity-logged",this._reloadHandler),globalThis.addEventListener("discussion-saved",this._reloadHandler),globalThis.addEventListener("quiz-user-session-changed",this._handleSessionChanged),this._handleSessionChanged({detail:this._loadSession()}),this._fetchHistory()}disconnectedCallback(){globalThis.removeEventListener("a3-activity-logged",this._reloadHandler),globalThis.removeEventListener("discussion-saved",this._reloadHandler),globalThis.removeEventListener("quiz-user-session-changed",this._handleSessionChanged),super.disconnectedCallback()}async _fetchHistory(){if(!this.appsScriptUrl||!this.studentId){this._history=[{date:Q(),count:j().length}];return}try{const t=new URLSearchParams({action:"getActivityHistory",studentId:this.studentId,days:42,kdMateri:this._kdMateriVal}),e=await(await fetch(`${this.appsScriptUrl}?${t.toString()}`)).json(),a={};if((e.history||[]).forEach(i=>{a[i.date]=(a[i.date]||0)+(i.count||0)}),this.forumApiUrl)try{const i=new URLSearchParams({action:"getForumActivityHistory",studentId:this.studentId,days:42,kdMateri:this._kdMateriVal});((await(await fetch(`${this.forumApiUrl}?${i.toString()}`)).json()).history||[]).forEach(d=>{a[d.date]=(a[d.date]||0)+(d.count||0)})}catch(i){console.error("[engagement-score] Forum fetch failed:",i)}this._history=Object.keys(a).map(i=>({date:i,count:a[i]}))}catch(t){console.error("[engagement-score] Fetch failed:",t),this._history=[{date:Q(),count:j().length}]}}_getActivityMap(){const t=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],e=new Date,a=Q(),i=new Date(e);i.setDate(i.getDate()-e.getDay()-35);const d=[],l=[];let o=[];for(let f=0;f<42;f++){const u=new Date(i);u.setDate(i.getDate()+f);const y=`${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}-${String(u.getDate()).padStart(2,"0")}`,z=this._history.find(A=>A.date===y),L=z?z.count:0;o.push({date:u,dateStr:y,dayName:t[u.getDay()],count:L,isToday:y===a}),o.length===7&&(l.push(o),o=[])}return d.push(...l.flat()),{cells:d,weeks:l}}static get styles(){return[super.styles,P`:host { display: block; font-family: var(--ddd-font-primary); color: var(--ddd-theme-default-text); } .engagement-card { background: var(--ddd-theme-default-surface); border-radius: var(--ddd-radius-lg); padding: var(--ddd-spacing-6); border: 1px solid var(--ddd-theme-polaris-border); box-shadow: var(--ddd-shadow-1); } h3 { margin: 0 0 var(--ddd-spacing-3) 0; font-size: var(--ddd-font-size-l); color: var(--ddd-theme-primary); display: flex; align-items: center; gap: var(--ddd-spacing-2); } .consistency-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--ddd-spacing-3); } .stat-mini-card { background-color: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); display: flex; flex-direction: column; gap: var(--ddd-spacing-1); } .mini-label { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); font-weight: var(--ddd-font-weight-medium); } .mini-val { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary); } .heatmap-layout { display: grid; grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr); gap: var(--ddd-spacing-6); align-items: start; } .heatmap-col { min-width: 0; } .side-col { display: flex; flex-direction: column; gap: var(--ddd-spacing-4); min-width: 0; } .heatmap-wrap { display: flex; gap: 3px; max-width: 640px; margin: 0; } .heatmap-months { display: grid; grid-auto-flow: column; grid-auto-columns: 18px; gap: 3px; font-size: 10px; color: var(--ddd-theme-secondary); margin-bottom: 3px; margin-left: 32px; } .heatmap-months span { overflow: visible; white-space: nowrap; } .day-labels { display: grid; grid-template-rows: repeat(7, 18px); gap: 3px; font-size: 10px; color: var(--ddd-theme-secondary); text-align: right; padding-right: 8px; } .heatmap-grid { display: grid; grid-template-rows: repeat(7, 18px); grid-auto-flow: column; grid-auto-columns: 18px; gap: 3px; } .cell { width: 18px; height: 18px; background-color: var(--ddd-theme-polaris-surface-hover); border-radius: 3px; cursor: pointer; transition: transform 0.15s; } .cell:hover { transform: scale(1.3); z-index: 10; box-shadow: var(--ddd-shadow-1); } .cell.lvl-1 { background-color: var(--ddd-theme-accent-light); } .cell.lvl-2 { background-color: var(--ddd-theme-accent); } .cell.lvl-3 { background-color: var(--ddd-theme-primary); } .cell.lvl-4 { background-color: var(--ddd-theme-default-text); } .cell.today { outline: 2px solid var(--ddd-theme-accent); outline-offset: 1px; } .cell.today.done { background-color: var(--ddd-theme-accent); } .legend { display: flex; align-items: center; gap: var(--ddd-spacing-2); flex-wrap: wrap; font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); } .legend-cell { width: 12px; height: 12px; border-radius: 3px; } .heatmap-note { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); } .side-note-card { background-color: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); font-size: var(--ddd-font-size-s); color: var(--ddd-theme-secondary); line-height: 1.6; } @media (max-width: 768px) { .heatmap-layout { grid-template-columns: 1fr; } .heatmap-col { overflow-x: auto; } } @media (max-width: 480px) { .heatmap-grid { grid-template-rows: repeat(7, 12px); grid-auto-columns: 12px; gap: 2px; } .cell { width: 12px; height: 12px; } .day-labels { grid-template-rows: repeat(7, 12px); gap: 2px; } .heatmap-months { grid-auto-columns: 12px; gap: 2px; } }`]}render(){const{cells:t,weeks:e}=this._getActivityMap(),a=t.reduce((u,y)=>u+y.count,0),i=t.filter(u=>u.count>0).length,d=Math.round(i/42*100),l=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],o=e.map((u,y)=>{const z=l[u[0].date.getMonth()];if(y===0)return z;const L=l[e[y-1][0].date.getMonth()];return z===L?"":z}),f=["Min","Sen","Sel","Rab","Kam","Jum","Sab"];return r`
      <div class="engagement-card">
        <h3>🔥 Heatmap Aktivitas 1 Bulan</h3>
        <div class="heatmap-layout">
          <div class="heatmap-col">
            <div class="heatmap-months">${o.map(u=>r`<span>${u}</span>`)}</div>
            <div class="heatmap-wrap">
              <div class="day-labels">${f.map(u=>r`<span>${u}</span>`)}</div>
              <div class="heatmap-grid">
                ${t.map(u=>{let y="";u.count===1?y="lvl-1":u.count===2?y="lvl-2":u.count>=3&&u.count<=5?y="lvl-3":u.count>5&&(y="lvl-4");const z=u.isToday?"today":"",L=u.isToday&&u.count>0?"done":"",A=`${u.dateStr}: ${u.count} aktivitas${u.isToday?" (Hari ini)":""}`;return r`<div class="cell ${y} ${z} ${L}" title="${A}"></div>`})}
              </div>
            </div>
          </div>
          <div class="side-col">
            <div class="consistency-stats">
              <div class="stat-mini-card"><span class="mini-label">Total Aktivitas</span><span class="mini-val">${a} kali</span></div>
              <div class="stat-mini-card"><span class="mini-label">Hari Aktif</span><span class="mini-val">${i} / 42</span></div>
              <div class="stat-mini-card"><span class="mini-label">Indeks Konsistensi</span><span class="mini-val">${d}%</span></div>
            </div>
            <div class="side-note-card">${this.forumApiUrl?r`📌 Heatmap menggabungkan aktivitas dari <strong>getActivityHistory</strong> (sheet Aktivitas + pertemuan-kuis) dan <strong>getForumActivityHistory</strong> (sheet Forum Log).`:r`📌 Hover sel untuk detail harian. Sumber: sheet Aktivitas + pertemuan-kuis (via getActivityHistory).`}
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
    `}}globalThis.customElements.define(Y.tag,Y);class X extends N(C(E)){static get tag(){return"transparent-gradebook"}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Transparent Gradebook",description:"Buku nilai transparan untuk siswa",icon:"icons:grade",color:"blue",tags:["Education","Gradebook"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},viewMode:{type:String,attribute:"view-mode"},_scores:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.studentId="",this.studentName="",this.viewMode="student",this._scores={kehadiran:0,ulanganHarian:0,uts:0,uas:0,sikap:0,keterampilan:0,formatif:{count:0,all:[]}}}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[X.tag]&&(t.elementList[X.tag]=X.haxProperties)}this._fetchScores()}async _fetchScores(){if(!(!this.appsScriptUrl||!this.studentId))try{const t=new URLSearchParams({action:"getStudentScores",studentId:this.studentId}),e=await(await fetch(`${this.appsScriptUrl}?${t.toString()}`)).json();e.status==="ok"&&e.data&&(this._scores=e.data)}catch(t){console.error("[gradebook] Fetch failed:",t)}}_getUH(){const t=this._scores.ulanganHarian;return t==null?0:typeof t=="number"?t:t.average||0}_getUTS(){const t=this._scores.uts;return t==null?0:typeof t=="number"?t:t.highest||0}_getUAS(){const t=this._scores.uas;return t==null?0:typeof t=="number"?t:t.highest||0}_getBreakdown(){const t=[],e=(a,i)=>{a&&Array.isArray(a.all)&&a.all.forEach(d=>t.push({label:i,pertemuan:d.pertemuan||"\u2014",score:d.score}))};return e(this._scores.ulanganHarian,"Ulangan Harian"),e(this._scores.uts,"UTS"),e(this._scores.uas,"UAS"),e(this._scores.formatif,"Formatif"),t}_getFinalScore(){const t=this._scores.kehadiran*.125+this._getUH()*.375+this._getUTS()*.25+this._getUAS()*.25;return Math.round(t*10)/10}_getGradeLetter(t){return t>=85?"A":t>=80?"A-":t>=75?"B+":t>=70?"B":t>=60?"C+":"D"}static get styles(){return[super.styles,P`:host { display: block; font-family: var(--ddd-font-primary); color: var(--ddd-theme-default-text); } .grade-card { background: var(--ddd-theme-default-surface); border-radius: var(--ddd-radius-lg); padding: var(--ddd-spacing-6); border: 1px solid var(--ddd-theme-polaris-border); box-shadow: var(--ddd-shadow-1); } h3 { margin: 0; font-size: var(--ddd-font-size-l); color: var(--ddd-theme-primary); display: flex; align-items: center; gap: var(--ddd-spacing-2); } .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: var(--ddd-spacing-4); margin: var(--ddd-spacing-6) 0; } .summary-item { background: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); text-align: center; } .summary-item.highlight { background-color: var(--ddd-theme-polaris-surface-hover); border-color: var(--ddd-theme-accent); } .summary-label { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); text-transform: uppercase; letter-spacing: 0.5px; font-weight: var(--ddd-font-weight-medium); } .summary-val { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); margin-top: var(--ddd-spacing-1); } .summary-val.brand { color: var(--ddd-theme-primary); } .table-wrapper { width: 100%; overflow-x: auto; border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-theme-polaris-border); } table { width: 100%; border-collapse: collapse; text-align: left; font-size: var(--ddd-font-size-s); } th { background-color: var(--ddd-theme-polaris-surface-hover); color: var(--ddd-theme-secondary); font-weight: var(--ddd-font-weight-bold); padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-bottom: 2px solid var(--ddd-theme-polaris-border); } td { padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-bottom: 1px solid var(--ddd-theme-polaris-border); } .row-category { font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary); } .breakdown { margin-top: var(--ddd-spacing-5); } .breakdown-title { font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary); margin-bottom: var(--ddd-spacing-3); } .breakdown-note { margin-top: var(--ddd-spacing-5); font-size: var(--ddd-font-size-s); color: var(--ddd-theme-secondary); background: var(--ddd-theme-polaris-surface); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); } .breakdown-note code { background: var(--ddd-theme-polaris-surface-hover); padding: 2px 6px; border-radius: var(--ddd-radius-sm); }`]}render(){const t=this._getFinalScore(),e=this._getGradeLetter(t),a=this._getUH(),i=this._getUTS(),d=this._getUAS(),l=this._getBreakdown();return r`
      <div class="grade-card">
        <h3>📖 Pencapaian Hasil Belajar</h3>
        <div class="summary-grid">
          <div class="summary-item"><span class="summary-label">Kehadiran</span><span class="summary-val">${this._scores.kehadiran||0}%</span></div>
          <div class="summary-item"><span class="summary-label">Ulangan Harian</span><span class="summary-val">${a}%</span></div>
          <div class="summary-item highlight"><span class="summary-label">Nilai Akhir</span><span class="summary-val brand">${t}</span></div>
          <div class="summary-item highlight"><span class="summary-label">Grade</span><span class="summary-val brand">${e}</span></div>
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>Komponen</th><th>Bobot</th><th>Nilai</th></tr></thead>
            <tbody>
              <tr><td class="row-category">Kehadiran</td><td style="text-align: center;">12.5%</td><td>${this._scores.kehadiran||0}</td></tr>
              <tr><td class="row-category">Ulangan Harian</td><td style="text-align: center;">37.5%</td><td>${a}</td></tr>
              <tr><td class="row-category">UTS</td><td style="text-align: center;">25%</td><td>${i||"\u2014"}</td></tr>
              <tr><td class="row-category">UAS</td><td style="text-align: center;">25%</td><td>${d||"\u2014"}</td></tr>
              <tr><td class="row-category">Sikap</td><td style="text-align: center;">—</td><td>${this._scores.sikap||0}</td></tr>
              <tr><td class="row-category">Keterampilan</td><td style="text-align: center;">—</td><td>${this._scores.keterampilan||0}</td></tr>
            </tbody>
            <tfoot><tr><td colspan="2" style="font-weight: var(--ddd-font-weight-bold); text-align: right;">Nilai Akhir:</td><td style="font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary);">${t} (${e})</td></tr></tfoot>
          </table>
        </div>
        ${l.length>0?r`
          <div class="breakdown">
            <div class="breakdown-title">📋 Rincian per Materi (dari sheet pertemuan-kuis)</div>
            <div class="table-wrapper">
              <table>
                <thead><tr><th>Komponen</th><th>Kode Materi</th><th>Skor</th></tr></thead>
                <tbody>
                  ${l.slice(0,10).map(o=>r`
                    <tr><td>${o.label}</td><td>${o.pertemuan}</td><td>${o.score}</td></tr>
                  `)}
                </tbody>
              </table>
            </div>
          </div>
        `:r`
          <div class="breakdown-note">Nilai UTS/UAS/UH bersumber dari sheet <code>pertemuan-kuis</code> (kolom Kategori Kuis + Kode Materi). Jalankan <strong>Generate Laporan</strong> di mode dosen untuk rekap resmi.</div>
        `}
      </div>
    `}}globalThis.customElements.define(X.tag,X);var rt={};(function x(t,e,a,i){var d=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),l=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=(function(){if(!t.OffscreenCanvas)return!1;try{var n=new OffscreenCanvas(1,1),s=n.getContext("2d");s.fillRect(0,0,1,1);var c=n.transferToImageBitmap();s.createPattern(c,"no-repeat")}catch{return!1}return!0})();function f(){}function u(n){var s=e.exports.Promise,c=s!==void 0?s:t.Promise;return typeof c=="function"?new c(n):(n(f,f),null)}var y=(function(n,s){return{transform:function(c){if(n)return c;if(s.has(c))return s.get(c);var p=new OffscreenCanvas(c.width,c.height),m=p.getContext("2d");return m.drawImage(c,0,0),s.set(c,p),p},clear:function(){s.clear()}}})(o,new Map),z=(function(){var n=Math.floor(16.666666666666668),s,c,p={},m=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(s=function(g){var v=Math.random();return p[v]=requestAnimationFrame(function h(b){m===b||m+n-1<b?(m=b,delete p[v],g()):p[v]=requestAnimationFrame(h)}),v},c=function(g){p[g]&&cancelAnimationFrame(p[g])}):(s=function(g){return setTimeout(g,n)},c=function(g){return clearTimeout(g)}),{frame:s,cancel:c}})(),L=(function(){var n,s,c={};function p(m){function g(v,h){m.postMessage({options:v||{},callback:h})}m.init=function(h){var b=h.transferControlToOffscreen();m.postMessage({canvas:b},[b])},m.fire=function(h,b,k){if(s)return g(h,null),s;var S=Math.random().toString(36).slice(2);return s=u(function(w){function $(I){I.data.callback===S&&(delete c[S],m.removeEventListener("message",$),s=null,y.clear(),k(),w())}m.addEventListener("message",$),g(h,S),c[S]=$.bind(null,{data:{callback:S}})}),s},m.reset=function(){m.postMessage({reset:!0});for(var h in c)c[h](),delete c[h]}}return function(){if(n)return n;if(!a&&d){var m=["var CONFETTI, SIZE = {}, module = {};","("+x.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{n=new Worker(URL.createObjectURL(new Blob([m])))}catch(g){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",g),null}p(n)}return n}})(),A={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function wt(n,s){return s?s(n):n}function St(n){return n!=null}function T(n,s,c){return wt(n&&St(n[s])?n[s]:A[s],c)}function $t(n){return n<0?0:Math.floor(n)}function Tt(n,s){return Math.floor(Math.random()*(s-n))+n}function nt(n){return parseInt(n,16)}function At(n){return n.map(It)}function It(n){var s=String(n).replace(/[^0-9a-f]/gi,"");return s.length<6&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]),{r:nt(s.substring(0,2)),g:nt(s.substring(2,4)),b:nt(s.substring(4,6))}}function zt(n){var s=T(n,"origin",Object);return s.x=T(s,"x",Number),s.y=T(s,"y",Number),s}function Mt(n){n.width=document.documentElement.clientWidth,n.height=document.documentElement.clientHeight}function Ct(n){var s=n.getBoundingClientRect();n.width=s.width,n.height=s.height}function Et(n){var s=document.createElement("canvas");return s.style.position="fixed",s.style.top="0px",s.style.left="0px",s.style.pointerEvents="none",s.style.zIndex=n,s}function Pt(n,s,c,p,m,g,v,h,b){n.save(),n.translate(s,c),n.rotate(g),n.scale(p,m),n.arc(0,0,1,v,h,b),n.restore()}function Nt(n){var s=n.angle*(Math.PI/180),c=n.spread*(Math.PI/180);return{x:n.x,y:n.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:n.startVelocity*.5+Math.random()*n.startVelocity,angle2D:-s+(.5*c-Math.random()*c),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:n.color,shape:n.shape,tick:0,totalTicks:n.ticks,decay:n.decay,drift:n.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:n.gravity*3,ovalScalar:.6,scalar:n.scalar,flat:n.flat}}function Lt(n,s){s.x+=Math.cos(s.angle2D)*s.velocity+s.drift,s.y+=Math.sin(s.angle2D)*s.velocity+s.gravity,s.velocity*=s.decay,s.flat?(s.wobble=0,s.wobbleX=s.x+10*s.scalar,s.wobbleY=s.y+10*s.scalar,s.tiltSin=0,s.tiltCos=0,s.random=1):(s.wobble+=s.wobbleSpeed,s.wobbleX=s.x+10*s.scalar*Math.cos(s.wobble),s.wobbleY=s.y+10*s.scalar*Math.sin(s.wobble),s.tiltAngle+=.1,s.tiltSin=Math.sin(s.tiltAngle),s.tiltCos=Math.cos(s.tiltAngle),s.random=Math.random()+2);var c=s.tick++/s.totalTicks,p=s.x+s.random*s.tiltCos,m=s.y+s.random*s.tiltSin,g=s.wobbleX+s.random*s.tiltCos,v=s.wobbleY+s.random*s.tiltSin;if(n.fillStyle="rgba("+s.color.r+", "+s.color.g+", "+s.color.b+", "+(1-c)+")",n.beginPath(),l&&s.shape.type==="path"&&typeof s.shape.path=="string"&&Array.isArray(s.shape.matrix))n.fill(qt(s.shape.path,s.shape.matrix,s.x,s.y,Math.abs(g-p)*.1,Math.abs(v-m)*.1,Math.PI/10*s.wobble));else if(s.shape.type==="bitmap"){var h=Math.PI/10*s.wobble,b=Math.abs(g-p)*.1,k=Math.abs(v-m)*.1,S=s.shape.bitmap.width*s.scalar,w=s.shape.bitmap.height*s.scalar,$=new DOMMatrix([Math.cos(h)*b,Math.sin(h)*b,-Math.sin(h)*k,Math.cos(h)*k,s.x,s.y]);$.multiplySelf(new DOMMatrix(s.shape.matrix));var I=n.createPattern(y.transform(s.shape.bitmap),"no-repeat");I.setTransform($),n.globalAlpha=1-c,n.fillStyle=I,n.fillRect(s.x-S/2,s.y-w/2,S,w),n.globalAlpha=1}else if(s.shape==="circle")n.ellipse?n.ellipse(s.x,s.y,Math.abs(g-p)*s.ovalScalar,Math.abs(v-m)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI):Pt(n,s.x,s.y,Math.abs(g-p)*s.ovalScalar,Math.abs(v-m)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI);else if(s.shape==="star")for(var _=Math.PI/2*3,M=4*s.scalar,U=8*s.scalar,q=s.x,R=s.y,H=5,D=Math.PI/H;H--;)q=s.x+Math.cos(_)*U,R=s.y+Math.sin(_)*U,n.lineTo(q,R),_+=D,q=s.x+Math.cos(_)*M,R=s.y+Math.sin(_)*M,n.lineTo(q,R),_+=D;else n.moveTo(Math.floor(s.x),Math.floor(s.y)),n.lineTo(Math.floor(s.wobbleX),Math.floor(m)),n.lineTo(Math.floor(g),Math.floor(v)),n.lineTo(Math.floor(p),Math.floor(s.wobbleY));return n.closePath(),n.fill(),s.tick<s.totalTicks}function Ut(n,s,c,p,m){var g=s.slice(),v=n.getContext("2d"),h,b,k=u(function(S){function w(){h=b=null,v.clearRect(0,0,p.width,p.height),y.clear(),m(),S()}function $(){a&&!(p.width===i.width&&p.height===i.height)&&(p.width=n.width=i.width,p.height=n.height=i.height),!p.width&&!p.height&&(c(n),p.width=n.width,p.height=n.height),v.clearRect(0,0,p.width,p.height),g=g.filter(function(I){return Lt(v,I)}),g.length?h=z.frame($):w()}h=z.frame($),b=w});return{addFettis:function(S){return g=g.concat(S),k},canvas:n,promise:k,reset:function(){h&&z.cancel(h),b&&b()}}}function ct(n,s){var c=!n,p=!!T(s||{},"resize"),m=!1,g=T(s,"disableForReducedMotion",Boolean),v=d&&!!T(s||{},"useWorker"),h=v?L():null,b=c?Mt:Ct,k=n&&h?!!n.__confetti_initialized:!1,S=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,w;function $(_,M,U){for(var q=T(_,"particleCount",$t),R=T(_,"angle",Number),H=T(_,"spread",Number),D=T(_,"startVelocity",Number),Rt=T(_,"decay",Number),Ot=T(_,"gravity",Number),Ft=T(_,"drift",Number),ut=T(_,"colors",At),Kt=T(_,"ticks",Number),pt=T(_,"shapes"),Qt=T(_,"scalar"),Ht=!!T(_,"flat"),mt=zt(_),gt=q,lt=[],jt=n.width*mt.x,Gt=n.height*mt.y;gt--;)lt.push(Nt({x:jt,y:Gt,angle:R,spread:H,startVelocity:D,color:ut[gt%ut.length],shape:pt[Tt(0,pt.length)],ticks:Kt,decay:Rt,gravity:Ot,drift:Ft,scalar:Qt,flat:Ht}));return w?w.addFettis(lt):(w=Ut(n,lt,b,M,U),w.promise)}function I(_){var M=g||T(_,"disableForReducedMotion",Boolean),U=T(_,"zIndex",Number);if(M&&S)return u(function(D){D()});c&&w?n=w.canvas:c&&!n&&(n=Et(U),document.body.appendChild(n)),p&&!k&&b(n);var q={width:n.width,height:n.height};h&&!k&&h.init(n),k=!0,h&&(n.__confetti_initialized=!0);function R(){if(h){var D={getBoundingClientRect:function(){if(!c)return n.getBoundingClientRect()}};b(D),h.postMessage({resize:{width:D.width,height:D.height}});return}q.width=q.height=null}function H(){w=null,p&&(m=!1,t.removeEventListener("resize",R)),c&&n&&(document.body.contains(n)&&document.body.removeChild(n),n=null,k=!1)}return p&&!m&&(m=!0,t.addEventListener("resize",R,!1)),h?h.fire(_,q,H):$(_,q,H)}return I.reset=function(){h&&h.reset(),w&&w.reset()},I}var ot;function ht(){return ot||(ot=ct(null,{useWorker:!0,resize:!0})),ot}function qt(n,s,c,p,m,g,v){var h=new Path2D(n),b=new Path2D;b.addPath(h,new DOMMatrix(s));var k=new Path2D;return k.addPath(b,new DOMMatrix([Math.cos(v)*m,Math.sin(v)*m,-Math.sin(v)*g,Math.cos(v)*g,c,p])),k}function Dt(n){if(!l)throw new Error("path confetti are not supported in this browser");var s,c;typeof n=="string"?s=n:(s=n.path,c=n.matrix);var p=new Path2D(s),m=document.createElement("canvas"),g=m.getContext("2d");if(!c){for(var v=1e3,h=v,b=v,k=0,S=0,w,$,I=0;I<v;I+=2)for(var _=0;_<v;_+=2)g.isPointInPath(p,I,_,"nonzero")&&(h=Math.min(h,I),b=Math.min(b,_),k=Math.max(k,I),S=Math.max(S,_));w=k-h,$=S-b;var M=10,U=Math.min(M/w,M/$);c=[U,0,0,U,-Math.round(w/2+h)*U,-Math.round($/2+b)*U]}return{type:"path",path:s,matrix:c}}function Bt(n){var s,c=1,p="#000000",m='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof n=="string"?s=n:(s=n.text,c="scalar"in n?n.scalar:c,m="fontFamily"in n?n.fontFamily:m,p="color"in n?n.color:p);var g=10*c,v=""+g+"px "+m,h=new OffscreenCanvas(g,g),b=h.getContext("2d");b.font=v;var k=b.measureText(s),S=Math.ceil(k.actualBoundingBoxRight+k.actualBoundingBoxLeft),w=Math.ceil(k.actualBoundingBoxAscent+k.actualBoundingBoxDescent),$=2,I=k.actualBoundingBoxLeft+$,_=k.actualBoundingBoxAscent+$;S+=$+$,w+=$+$,h=new OffscreenCanvas(S,w),b=h.getContext("2d"),b.font=v,b.fillStyle=p,b.fillText(s,I,_);var M=1/c;return{type:"bitmap",bitmap:h.transferToImageBitmap(),matrix:[M,0,0,M,-S*M/2,-w*M/2]}}e.exports=function(){return ht().apply(this,arguments)},e.exports.reset=function(){ht().reset()},e.exports.create=ct,e.exports.shapeFromPath=Dt,e.exports.shapeFromText=Bt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),rt,!1);var Xt=rt.exports;rt.exports.create;const G=[{question:"Apa ibu kota Indonesia?",choices:["Bandung","Surabaya","Jakarta","Medan"],correctIndex:2},{question:"Berapa hasil dari 7 \xD7 8?",choices:["54","56","58","60"],correctIndex:1},{question:"Planet terdekat dengan Matahari adalah?",choices:["Venus","Bumi","Mars","Merkurius"],correctIndex:3}];class B extends N(C(E)){static get tag(){return"explode-quiz"}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Explode Quiz",description:"Interactive multi-type quiz with confetti and Google Sheets integration",icon:"icons:question-answer",color:"purple",tags:["Education","Interactive","Content"]},settings:{configure:[{property:"scriptFunctionName",title:"Nama Fungsi Apps Script",description:"Nama fungsi Google Apps Script untuk menerima hasil kuis",inputMethod:"textfield"},{property:"quizCategory",title:"Kategori Kuis",description:"Kategori kuis: formatif, ulangan_harian, uts, atau uas",inputMethod:"select",options:{formatif:"Formatif (Absensi)",ulangan_harian:"Ulangan Harian",uts:"UTS",uas:"UAS"}},{property:"sheetName",title:"Nama Sheet",description:"Identitas sheet (default: Pertemuan)",inputMethod:"textfield"},{property:"kdMateri",title:"Kode Materi",description:"Kode materi unik untuk kuis ini. Prioritas: kd-materi > tag > sheet-name. Disimpan di kolom Kode Materi sheet pertemuan-kuis.",inputMethod:"textfield"},{property:"tag",title:"Tag (Legacy)",description:"Tag fallback jika kd-materi kosong",inputMethod:"textfield"},{property:"questions",title:"Soal (JSON)",description:"Array soal kuis dalam format JSON. Format tiap soal: { type: 'mc'|'pgk'|'matching'|'shortAnswer', question, choices, correctIndex, points }. Simpan setelah mengubah lewat tombol Simpan di editor soal.",inputMethod:"code-editor"},{property:"shuffleChoices",title:"Acak Pilihan Jawaban",description:"Mengacak urutan pilihan jawaban setiap kali kuis dimulai",inputMethod:"boolean"},{property:"hideAnswers",title:"Sembunyikan Jawaban",description:"Tidak menampilkan jawaban benar/salah setelah menjawab",inputMethod:"boolean"},{property:"hideConfetti",title:"Nonaktifkan Confetti",description:"Tidak menampilkan efek confetti saat jawaban benar",inputMethod:"boolean"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_screen","_studentName","_currentIndex","_score","_answered","_selectedIndex","_feedbackText","_feedbackPositive","_validationError","_nameInputValue","_editing","_tempQuestions","_editingIndex","_tempQuestionText","_tempChoice0","_tempChoice1","_tempChoice2","_tempChoice3","_tempCorrectIndex","_editorOrigin","_tempQuestionImage","_tempQuestionType","_tempCorrectAnswers","_tempLeftItems","_tempRightItems","_tempCorrectPairs","_tempAcceptedAnswers","_tempAcceptedStatements","_shuffledQuestions","_selectedAnswers","_matchAnswers","_shortAnswerText","_tempQuestionPoints","_tempChoiceImage0","_tempChoiceImage1","_tempChoiceImage2","_tempChoiceImage3","_maxPoints","_advanceTimer","_megaConfettiFrameId","editing"]}}}static get properties(){return{...super.properties,questions:{type:Array,attribute:"questions",reflect:!0,converter:{fromAttribute(t){if(t==null||t==="")return;if(Array.isArray(t)||typeof t=="object")return t;const e=String(t).trim();if(!(!e||e.includes("[object Object]")||e==="undefined"||e==="null")&&(e.startsWith("[")||e.startsWith("{")))try{const a=JSON.parse(e);return Array.isArray(a)?a:a&&typeof a=="object"&&Array.isArray(a.questions)?a.questions:void 0}catch{return}},toAttribute(t){if(!Array.isArray(t))return null;try{return JSON.stringify(t)}catch{return null}}}},scriptFunctionName:{type:String,attribute:!0},spreadsheetId:{type:String,attribute:"spreadsheet-id",reflect:!0},accessToken:{type:String,attribute:"access-token"},appsScriptUrl:{type:String,attribute:"apps-script-url"},sheetName:{type:String,attribute:"sheet-name"},tag:{type:String,attribute:"tag"},quizCategory:{type:String,attribute:"quiz-category"},shuffleChoices:{type:Boolean,attribute:"shuffle-choices",reflect:!0},hideAnswers:{type:Boolean,attribute:"hide-answers",reflect:!0},hideConfetti:{type:Boolean,attribute:"hide-confetti",reflect:!0},studentName:{type:String,attribute:"student-name"},studentId:{type:String,attribute:"student-id"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},editable:{type:Boolean,attribute:!0,reflect:!0},editing:{type:Boolean,attribute:!0,reflect:!0},kdMateri:{type:String,attribute:"kd-materi",reflect:!0},_screen:{state:!0},_studentName:{state:!0},_currentIndex:{state:!0},_score:{state:!0},_answered:{state:!0},_selectedIndex:{state:!0},_feedbackText:{state:!0},_feedbackPositive:{state:!0},_validationError:{state:!0},_nameInputValue:{state:!0},_editing:{state:!0},_tempQuestions:{state:!0},_editingIndex:{state:!0},_tempQuestionText:{state:!0},_tempChoice0:{state:!0},_tempChoice1:{state:!0},_tempChoice2:{state:!0},_tempChoice3:{state:!0},_tempCorrectIndex:{state:!0},_editorOrigin:{state:!0},_tempQuestionImage:{state:!0},_tempQuestionType:{state:!0},_tempCorrectAnswers:{state:!0},_tempLeftItems:{state:!0},_tempRightItems:{state:!0},_tempCorrectPairs:{state:!0},_tempAcceptedAnswers:{state:!0},_tempAcceptedStatements:{state:!0},_shuffledQuestions:{state:!0},_selectedAnswers:{state:!0},_matchAnswers:{state:!0},_shortAnswerText:{state:!0},_tempQuestionPoints:{state:!0},_tempChoiceImage0:{state:!0},_tempChoiceImage1:{state:!0},_tempChoiceImage2:{state:!0},_tempChoiceImage3:{state:!0},_maxPoints:{state:!0},_advanceTimer:{state:!0},_megaConfettiFrameId:{state:!0}}}constructor(){super();let t=Xt;t&&typeof t!="function"&&typeof t.default=="function"&&(t=t.default),this._confettiFn=t,this.questions=G,this.scriptFunctionName="submitQuizResult",this.spreadsheetId="",this.accessToken="",this.appsScriptUrl="",this.sheetName="Pertemuan",this.tag="",this.quizCategory="formatif",this.shuffleChoices=!1,this.hideAnswers=!1,this.hideConfetti=!1,this.studentName="",this.studentId="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.editable=!1,this._screen="name",this._studentName="",this._currentIndex=0,this._score=0,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._validationError="",this._nameInputValue="",this._editing=!1,this._tempQuestions=[],this._editingIndex=-1,this._tempQuestionText="",this._tempChoice0="",this._tempChoice1="",this._tempChoice2="",this._tempChoice3="",this._tempCorrectIndex="0",this._editorOrigin="result",this._shuffledQuestions=[],this._kdMateri="",this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._tempQuestionImage="",this._tempQuestionType="mc",this._tempCorrectAnswers=[],this._tempLeftItems=["",""],this._tempRightItems=["",""],this._tempCorrectPairs={},this._tempAcceptedAnswers="",this._tempAcceptedStatements="[]",this._maxPoints=0,this._tempQuestionPoints=1,this._tempChoiceImage0="",this._tempChoiceImage1="",this._tempChoiceImage2="",this._tempChoiceImage3="",this._advanceTimer=null,this._megaConfettiFrameId=null,this.t={quizTitle:"Kuis Interaktif",quizInstruction:"Masukkan nama Anda untuk memulai kuis.",namePlaceholder:"Nama Anda...",startButton:"Mulai Kuis",validationNameEmpty:"Nama tidak boleh kosong.",validationNameShort:"Nama harus lebih dari 2 karakter.",questionOf:"Soal",of:"dari",scoreLabel:"Skor",feedbackCorrect:"Mantap, Benar!",feedbackWrongPrefix:"Yah, Salah. Jawaban benar: ",resultHeading:"Hasil Kuis",resultName:"Nama",resultScore:"Skor",resultTotal:"Total Soal",resultPercentage:"Persentase",messageHigh:"Luar Biasa! Kamu Hebat!",messageMedium:"Bagus! Terus Berlatih!",messageLow:"Jangan Menyerah! Coba Lagi!",restartButton:"Mulai Ulang",editTitle:"Edit Soal Kuis",closeEditor:"Tutup Editor",questionPlaceholder:"Tulis pertanyaan...",choicePlaceholder:"Pilihan {N}",choiceCorrectLabel:"Benar",addQuestionBtn:"Tambah Soal",editQuestionBtn:"Edit",deleteQuestionBtn:"Hapus",saveEditBtn:"Simpan Perubahan",cancelEditBtn:"Batal",saveAllBtn:"Simpan & Keluar",cancelAllBtn:"Batal",minQuestionsError:"Minimal 3 soal harus tersedia",emptyQuestionError:"Pertanyaan tidak boleh kosong",emptyChoiceError:"Semua pilihan jawaban harus diisi",ariaNameInput:"Kolom nama siswa",ariaStartButton:"Tombol mulai kuis",ariaAnswerButton:"Pilihan jawaban",ariaRestartButton:"Mulai ulang kuis",ariaScoreDisplay:"Skor saat ini",ariaProgressLabel:"Kemajuan kuis",ariaFeedback:"Umpan balik jawaban",ariaEditTitle:"Panel editor soal kuis",ariaCloseEditor:"Tutup panel editor",ariaAddForm:"Formulir tambah soal baru",ariaQuestionInput:"Teks pertanyaan",ariaChoiceInput:"Pilihan jawaban {N}",ariaCorrectChoice:"Pilihan jawaban benar",ariaQuestionsList:"Daftar soal yang tersedia",ariaQuestionCard:"Kartu soal",ariaEditQuestion:"Edit soal ini",ariaDeleteQuestion:"Hapus soal ini",ariaSaveEdit:"Simpan perubahan soal",ariaCancelEdit:"Batal mengedit soal",ariaSaveAll:"Simpan semua perubahan dan keluar",ariaCancelAll:"Batal semua perubahan dan keluar"}}get kdMateri(){return this._kdMateri||this.tag||this.sheetName||"Pertemuan"}set kdMateri(t){this._kdMateri=t}updated(t){super.updated(t),(!Array.isArray(this.questions)||this.questions.length===0)&&(this.questions=G),t.has("studentName")&&this.studentName&&(this._studentName=this.studentName,this._screen==="name"&&(this._screen="quiz"))}connectedCallback(){if(super.connectedCallback(),this._authHandler=t=>{t.detail.studentId&&(this.studentId=t.detail.studentId),t.detail.nama&&(this.studentName=t.detail.nama),t.detail.nis&&(this.studentNis=t.detail.nis),t.detail.absen&&(this.studentAbsen=t.detail.absen),t.detail.kelas&&(this.studentKelas=t.detail.kelas),this._flushPendingSubmissions()},globalThis.addEventListener("quiz-user-login",this._authHandler),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[B.tag]&&(t.elementList[B.tag]=B.haxProperties)}}disconnectedCallback(){this._clearAdvanceTimer(),this._cancelMegaConfetti(),this._authHandler&&globalThis.removeEventListener("quiz-user-login",this._authHandler),super.disconnectedCallback()}_clearAdvanceTimer(){this._advanceTimer&&(clearTimeout(this._advanceTimer),this._advanceTimer=null)}_cancelMegaConfetti(){this._megaConfettiFrameId&&(globalThis.cancelAnimationFrame(this._megaConfettiFrameId),this._megaConfettiFrameId=null)}get _inHaxEditor(){return!!(globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"&&globalThis.HaxStore.requestAvailability().editMode)}_fireConfetti(){if(typeof this._confettiFn=="function")try{const t={ticks:220,gravity:.85,decay:.92,startVelocity:42,zIndex:9999};this._confettiFn({...t,particleCount:70,spread:85,scalar:1.05,origin:{x:.5,y:.62}}),this._confettiFn({...t,particleCount:45,angle:58,spread:65,scalar:1.1,origin:{x:.1,y:.7}}),this._confettiFn({...t,particleCount:45,angle:122,spread:65,scalar:1.1,origin:{x:.9,y:.7}})}catch(t){console.error("[explode-quiz] Konfeti gagal dieksekusi:",t)}}_fireMegaConfetti(){if(typeof this._confettiFn=="function")try{this._cancelMegaConfetti();const t=Date.now()+900,e=()=>{this._confettiFn({particleCount:3,angle:60,spread:55,origin:{x:0,y:.7},colors:["#ff0000","#00ff00","#0000ff","#ffff00"]}),this._confettiFn({particleCount:3,angle:120,spread:55,origin:{x:1,y:.7},colors:["#ff0000","#00ff00","#0000ff","#ffff00"]}),Date.now()<t?this._megaConfettiFrameId=globalThis.requestAnimationFrame(e):this._megaConfettiFrameId=null};this._megaConfettiFrameId=globalThis.requestAnimationFrame(e)}catch(t){console.error("[explode-quiz] Mega konfeti gagal dieksekusi:",t)}}_getMaxPoints(){return(this.questions||[]).reduce((t,e)=>t+(e.points||1),0)}_shuffleArray(t){const e=[...t];for(let a=e.length-1;a>0;a--){const i=Math.floor(Math.random()*(a+1));[e[a],e[i]]=[e[i],e[a]]}return e}_startQuiz(){const t=this._nameInputValue.trim();if(t.length<=2){this._validationError=t.length===0?this.t.validationNameEmpty:this.t.validationNameShort;return}this._studentName=t,this._validationError="",this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._maxPoints=this._getMaxPoints();const e=Array.isArray(this.questions)?this.questions:G;this.shuffleChoices?this._shuffledQuestions=e.map(a=>{if(!a.choices)return{...a};const i=a.choices.map((l,o)=>({text:l,origIndex:o})),d=this._shuffleArray(i);return{...a,choices:d.map(l=>l.text),_correctMap:d.map(l=>l.origIndex)}}):this._shuffledQuestions=[],this._screen="question"}_renderNameScreen(){return r`<h1 class="quiz-title">${this.t.quizTitle}</h1> <p class="quiz-instruction">${this.t.quizInstruction}</p> <div class="input-group"> <input id="name-input" name="student-name" .value="${this._nameInputValue}" @input="${t=>this._nameInputValue=t.target.value}" @keydown="${t=>{t.key==="Enter"&&this._startQuiz()}}" .placeholder="${this.t.namePlaceholder}" aria-label="${this.t.ariaNameInput}" type="text" /> </div> <button class="start-btn" @click="${this._startQuiz}" aria-label="${this.t.ariaStartButton}" > ${this.t.startButton} </button> ${this._validationError?r`<p class="validation-error">${this._validationError}</p>`:""} <button class="edit-questions-btn" @click="${this._openEditorFromName}" aria-label="${this.t.ariaCloseEditor}" ?hidden="${!this._inHaxEditor&&!this.editable}" > ${this.t.editTitle} </button>`}_getActiveQuestions(){const t=Array.isArray(this.questions)?this.questions:G;return this._shuffledQuestions.length>0?this._shuffledQuestions:t}_renderQuestionScreen(){const t=this._getActiveQuestions(),e=t[this._currentIndex],a=`${this.t.questionOf} ${this._currentIndex+1} ${this.t.of} ${t.length}`,i=e.type||"mc",d=Array.isArray(e.correctAnswers);return r`<header class="quiz-header"> <span class="progress-label">${a}</span> <span class="score-display">${this.t.scoreLabel}: ${this._score}</span> </header> <div class="question-text">${e.question}</div> ${e.image?r` <div class="question-image"> <img src="${e.image}" alt="Gambar soal" /> </div>`:""} ${i==="matching"?this._renderMatching(e):""} ${i==="shortAnswer"?this._renderShortAnswer(e):""} ${i==="pgk"?this._renderPGK(e):""} ${i==="mc"?this._renderMC(e,d):""} ${this._feedbackText?r` <div class="feedback-area ${this._feedbackPositive?"positive":"negative"}" aria-live="polite" > ${this._feedbackText} </div>`:""} ${this.editable?r` <button class="edit-questions-btn" @click="${this._openEditor}" > ✏️ Edit Soal </button>`:""}`}_getChoiceText(t){return typeof t=="string"?t:t?.text||""}_getChoiceImage(t){return typeof t=="string"?null:t?.image||null}_renderMC(t,e){return r`<div class="answer-grid"> ${t.choices.map((a,i)=>{let d="answer-btn";const l=e?this._selectedAnswers.has(i):i===this._selectedIndex;if(this._answered&&!this.hideAnswers){const o=t.correctAnswers||(t.correctIndex!=null?[t.correctIndex]:[]);(t._correctMap?o.map(f=>t._correctMap.indexOf(f)):o).includes(i)?d+=" answer-btn--correct":l&&(d+=" answer-btn--wrong")}else l&&(d+=" answer-btn--selected");return r` <button class="${d}" ?disabled="${this._answered}" @click="${()=>e?this._toggleMultiAnswer(i):this._selectAnswer(i)}" aria-label="${this.t.ariaAnswerButton}: ${this._getChoiceText(a)}" > ${this._getChoiceImage(a)?r`<img src="${this._getChoiceImage(a)}" alt="" class="choice-image" />`:""} ${e&&l?"\u2713 ":""}${this._getChoiceText(a)} </button>`})} ${e&&!this._answered?r` <button class="start-btn multi-submit" @click="${()=>this._submitMultiAnswers()}" > Kirim Jawaban (${this._selectedAnswers.size} dipilih) </button>`:""} </div>`}_renderPGK(t){const e=t.statements||[];return r`<table class="pgk-table"> <thead> <tr> <th>Pernyataan</th> <th>Benar</th> <th>Salah</th> </tr> </thead> <tbody> ${e.map((a,i)=>r` <tr> <td>${a.text}</td> <td class="pgk-cell"> <input type="radio" name="pgk-${this._currentIndex}-${i}" value="true" ?disabled="${this._answered}" @change="${()=>this._setPGK(i,!0)}" ?checked="${this._matchAnswers[i]===!0}" /> </td> <td class="pgk-cell"> <input type="radio" name="pgk-${this._currentIndex}-${i}" value="false" ?disabled="${this._answered}" @change="${()=>this._setPGK(i,!1)}" ?checked="${this._matchAnswers[i]===!1}" /> </td> </tr> `)} </tbody> </table> ${this._answered?"":r` <button class="start-btn multi-submit" @click="${()=>this._submitPGK()}" > Kirim Jawaban </button>`}`}_renderMatching(t){const e=t.leftItems||[],a=t.rightItems||[];return r`<div class="matching-container"> ${e.map((i,d)=>r` <div class="matching-row"> <span class="matching-item">${d+1}. ${i}</span> <span class="matching-arrow">→</span> <select name="matching-${d}" class="matching-select" ?disabled="${this._answered}" @change="${l=>{this._matchAnswers={...this._matchAnswers,[d]:parseInt(l.target.value)},this.requestUpdate()}}" > <option value="-1">-- Pilih --</option> ${a.map((l,o)=>r`<option value="${o}" ?selected="${this._matchAnswers[d]===o}" > ${String.fromCharCode(65+o)}. ${l} </option>`)} </select> </div> `)} ${this._answered?"":r` <button class="start-btn multi-submit" @click="${()=>this._submitMatching()}" > Kirim Jawaban </button>`} </div>`}_renderShortAnswer(t){return r`<div class="short-answer-container"> <input type="text" name="short-answer" class="short-answer-input" ?disabled="${this._answered}" placeholder="Ketik jawaban..." .value="${this._shortAnswerText}" @input="${e=>{this._shortAnswerText=e.target.value}}" /> ${this._answered?"":r`<button class="start-btn multi-submit" @click="${()=>this._submitShortAnswer()}" > Kirim Jawaban </button>`} </div>`}_selectAnswer(t){if(this._answered)return;this._answered=!0,this._selectedIndex=t;const e=this._getActiveQuestions()[this._currentIndex],a=e.correctAnswers||(e.correctIndex!=null?[e.correctIndex]:[]),i=e._correctMap?a.map(d=>e._correctMap.indexOf(d)):a;if(i.includes(t))this._score+=e.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti();else if(!this.hideAnswers){const d=i.map(l=>e.choices[l]).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${d}`,this._feedbackPositive=!1}this._clearAdvanceTimer(),this._advanceTimer=setTimeout(()=>{this._advanceQuiz()},1200)}_toggleMultiAnswer(t){if(this._answered)return;const e=new Set(this._selectedAnswers);e.has(t)?e.delete(t):e.add(t),this._selectedAnswers=e}_submitMultiAnswers(){if(this._answered||this._selectedAnswers.size===0)return;this._answered=!0;const t=this._getActiveQuestions()[this._currentIndex],e=new Set(t.correctAnswers||[]),a=this._selectedAnswers,i=t._correctMap?new Set([...a].map(d=>t._correctMap[d])):a;if(e.size===i.size&&[...e].every(d=>i.has(d)))this._score+=t.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti();else if(!this.hideAnswers){const d=(t._correctMap?[...e].map(l=>t._correctMap.indexOf(l)):[...e]).map(l=>t.choices[l]).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${d}`,this._feedbackPositive=!1}this._clearAdvanceTimer(),this._advanceTimer=setTimeout(()=>this._advanceQuiz(),1200)}_setPGK(t,e){this._answered||(this._matchAnswers={...this._matchAnswers,[t]:e})}_submitPGK(){if(this._answered)return;const t=this._getActiveQuestions()[this._currentIndex],e=t.statements||[];if(Object.keys(this._matchAnswers).length<e.length)return;this._answered=!0;const a=e.map(d=>d.answer);let i=!0;for(let d=0;d<e.length;d++)if(this._matchAnswers[d]!==a[d]){i=!1;break}if(i)this._score+=t.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti();else if(!this.hideAnswers){const d=e.map((l,o)=>`${o+1}: ${l.answer?"Benar":"Salah"}`).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${d}`,this._feedbackPositive=!1}this._clearAdvanceTimer(),this._advanceTimer=setTimeout(()=>this._advanceQuiz(),1200)}_submitMatching(){if(this._answered)return;const t=this._getActiveQuestions()[this._currentIndex],e=t.leftItems||[],a=t.correctPairs||{};if(Object.keys(this._matchAnswers).length<e.length)return;this._answered=!0;let i=0;for(let o=0;o<e.length;o++)this._matchAnswers[o]===a[o]&&i++;const d=t.points||1,l=Math.round(i/e.length*d);if(this._score+=l,!this.hideAnswers)if(i===e.length)this._feedbackText=`${this.t.feedbackCorrect} (${i}/${e.length} pasangan benar, +${l} poin)`,this._feedbackPositive=!0;else if(i>0)this._feedbackText=`${i}/${e.length} pasangan benar (+${l} poin). Lanjutkan!`,this._feedbackPositive=!0;else{const o=Object.entries(a).map(([f,u])=>`${parseInt(f)+1}\u2192${String.fromCharCode(65+u)}`).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${o}`,this._feedbackPositive=!1}!this.hideConfetti&&i===e.length&&this._fireConfetti(),this._clearAdvanceTimer(),this._advanceTimer=setTimeout(()=>this._advanceQuiz(),1200)}_submitShortAnswer(){if(this._answered)return;const t=this._shortAnswerText.trim().toLowerCase();if(!t)return;this._answered=!0;const e=this._getActiveQuestions()[this._currentIndex];(e.acceptedAnswers||[]).map(a=>a.toLowerCase()).some(a=>t.includes(a))?(this._score+=e.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti()):this.hideAnswers||(this._feedbackText=`${this.t.feedbackWrongPrefix}${(e.acceptedAnswers||[]).join(" / ")}`,this._feedbackPositive=!1),this._clearAdvanceTimer(),this._advanceTimer=setTimeout(()=>this._advanceQuiz(),1200)}_advanceQuiz(){const t=this._getActiveQuestions();if(this._currentIndex<t.length-1)this._currentIndex+=1,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._maxPoints=this._getMaxPoints();else{this._submitToSheets(this._studentName,this._score);const e=Math.round(this._score/this._maxPoints*100);try{ft("quiz",`Kuis selesai (Skor: ${e}%)`)}catch(i){console.warn("[explode-quiz] Gagal menulis log lokal:",i)}const a={name:this._studentName,score:e,sheet:this.sheetName||"Pertemuan",tag:this.kdMateri||this.tag||"",studentId:this.studentId||"",nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",activityType:"quiz",description:`Quiz ${this.quizCategory||"formatif"}${this.kdMateri?" ("+this.kdMateri+")":""} selesai`};this.dispatchEvent(new CustomEvent("quiz-saved",{detail:a,bubbles:!0,composed:!0})),globalThis.dispatchEvent(new CustomEvent("quiz-completed",{detail:a,bubbles:!0,composed:!0})),this._screen="result",this._score/this._maxPoints>=.8&&this._fireMegaConfetti()}}_renderResultScreen(){const t=Math.round(this._score/this._maxPoints*100);let e=this.t.messageLow;t>=80?e=this.t.messageHigh:t>=50&&(e=this.t.messageMedium);const a=this.studentId?"":r`<p class="pending-submit-msg" style="color:#f59e0b;margin-top:8px;">Data tersimpan lokal. Login untuk mengirim jawaban ke sheet.</p>`;return r`<h2 class="result-heading">${this.t.resultHeading}</h2> <div class="result-name">${this.t.resultName}: ${this._studentName}</div> <div class="result-score"> ${this.t.resultScore}: ${this._score} / ${this._maxPoints} poin </div> <div class="result-percentage"> ${this.t.resultPercentage}: ${t}% </div> <p class="result-message">${e}</p> ${a} <button class="restart-btn" @click="${this._restartQuiz}" aria-label="${this.t.ariaRestartButton}" > ${this.t.restartButton} </button> <button class="edit-questions-btn" @click="${this._openEditor}" aria-label="${this.t.ariaCloseEditor}" ?hidden="${!this._inHaxEditor&&!this.editable}" > ${this.t.editTitle} </button>`}_restartQuiz(){this._clearAdvanceTimer(),this._screen=this.studentName?"quiz":"name",this._studentName=this.studentName||"",this._currentIndex=0,this._score=0,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._validationError="",this._nameInputValue="",this._editing=!1,this._tempQuestions=[],this._editingIndex=-1,this._tempQuestionText="",this._tempChoice0="",this._tempChoice1="",this._tempChoice2="",this._tempChoice3="",this._tempCorrectIndex="0",this._editorOrigin="result",this._maxPoints=this._getMaxPoints()}static get PENDING_KEY(){return"quiz_pending_submissions"}static get PENDING_TTL_MS(){return 1440*60*1e3}_getPendingSubmissions(){try{const t=localStorage.getItem(B.PENDING_KEY);return t?JSON.parse(t):[]}catch{return[]}}_savePendingSubmissions(t){try{localStorage.setItem(B.PENDING_KEY,JSON.stringify(t))}catch{}}_saveDraft(t){const e=this._getPendingSubmissions();e.push({id:`draft-${Date.now()}`,timestamp:new Date().toISOString(),synced:!1,data:t}),this._savePendingSubmissions(e)}_flushPendingSubmissions(){if(!this.studentId||!this.appsScriptUrl)return;const t=this._getPendingSubmissions(),e=t.filter(o=>!o.synced);if(e.length===0)return;const a=Date.now(),i=[];for(const o of t){if(o.synced||a-new Date(o.timestamp).getTime()>B.PENDING_TTL_MS)continue;const f=new URLSearchParams({...o.data,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||""}),u=`${this.appsScriptUrl}?${f.toString()}`;fetch(u,{redirect:"follow"}).then(y=>y.json()).then(y=>{console.log("[explode-quiz] Pending flushed:",y)}).catch(y=>{console.error("[explode-quiz] Flush gagal:",y),i.push(o)})}const d=t.filter(o=>o.synced||!o.synced&&a-new Date(o.timestamp).getTime()<=B.PENDING_TTL_MS&&!e.includes(o)),l=[...i,...d.filter(o=>!e.includes(o))];this._savePendingSubmissions(l)}_submitToSheets(t,e){const a=Math.round(e/this._maxPoints*100);if(this.appsScriptUrl){const i={action:"submit",name:t,score:a,totalQuestions:(this.questions||[]).length,totalPoints:this._maxPoints,timestamp:new Date().toISOString(),sheet:this.sheetName||"Pertemuan",tag:this.kdMateri||this.tag||"",studentId:this.studentId||"",nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",quizCategory:this.quizCategory||"formatif",type:"quiz"};if(!this.studentId){this._saveDraft(i),console.log("[explode-quiz] Belum login, tersimpan ke localStorage");return}const d=new URLSearchParams(i),l=`${this.appsScriptUrl}?${d.toString()}`;fetch(l,{redirect:"follow"}).then(o=>o.json()).then(o=>{console.log("[explode-quiz] Tersimpan:",o)}).catch(o=>{console.error("[explode-quiz] Error menyimpan ke Google Sheets:",o)});return}if(this.spreadsheetId){fetch("/api/save-quiz-result",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({spreadsheetId:this.spreadsheetId,name:t,score:e,accessToken:this.accessToken||""})}).then(i=>{if(!i.ok)throw new Error("Gagal menyimpan hasil kuis");return i.json()}).then(i=>{console.log("[explode-quiz] Data berhasil disimpan:",i)}).catch(i=>{console.error("[explode-quiz] Error:",i)});return}if(typeof globalThis.google<"u"&&globalThis.google?.script?.run){const i={timestamp:new Date().toISOString(),name:t,score:e};globalThis.google.script.run.withSuccessHandler(()=>console.log("[explode-quiz] Data berhasil dikirim ke Sheets")).withFailureHandler(d=>console.error("[explode-quiz] Gagal mengirim ke Sheets:",d))[this.scriptFunctionName](i);return}console.warn("[explode-quiz] Google Sheets belum dikonfigurasi (spreadsheet-id / access-token kosong)")}_openEditor(){this._editing||this._screen!=="result"&&this._screen!=="question"||(this._editing=!0,this._editingIndex=-1,this._tempQuestions=JSON.parse(JSON.stringify(this.questions||G)),this._screen="editor")}_openEditorFromName(){this._screen==="name"&&(this._editing||(this._editing=!0,this._editingIndex=-1,this._tempQuestions=JSON.parse(JSON.stringify(this.questions||G)),this._editorOrigin="name",this._screen="editor"))}_renderEditorScreen(){const t=this._tempQuestionType||"mc";return r`<header class="edit-header"> <h2 class="edit-title">${this.t.editTitle}</h2> <button class="close-editor-btn" @click="${this._saveAll}"> ${this.t.closeEditor} </button> </header> <div class="editor-content"> <form class="add-question-form"> <div class="editor-toolbar"> <select name="question-type" class="editor-select" .value="${t}" @change="${e=>{this._tempQuestionType=e.target.value}}" > <option value="mc">Pilihan Ganda</option> <option value="pgk">PG Kompleks (Benar/Salah)</option> <option value="matching">Menjodohkan</option> <option value="shortAnswer">Isian Singkat</option> </select> <input type="text" name="question-image" class="editor-input" placeholder="URL gambar (opsional)" .value="${this._tempQuestionImage}" @input="${e=>{this._tempQuestionImage=e.target.value}}" /> <label class="editor-label">Poin:</label> <input type="number" name="question-points" min="1" class="editor-input-small" .value="${String(this._tempQuestionPoints)}" @input="${e=>{this._tempQuestionPoints=parseInt(e.target.value)||1}}" /> </div> ${this._tempQuestionImage?r` <div class="editor-image-preview"> <img src="${this._tempQuestionImage}" /> </div>`:""} <textarea name="question-text" class="question-text-input" .value="${this._tempQuestionText}" @input="${e=>this._tempQuestionText=e.target.value}" placeholder="${this.t.questionPlaceholder}" ></textarea> ${t==="mc"?this._renderEditorMC():""} ${t==="pgk"?this._renderEditorPGK():""} ${t==="matching"?this._renderEditorMatching():""} ${t==="shortAnswer"?this._renderEditorShortAnswer():""} <button type="button" class="add-question-btn" @click="${this._addQuestion}" > ${this.t.addQuestionBtn} </button> </form> <div class="questions-list"> ${this._tempQuestions.map((e,a)=>r` <div class="question-card"> ${this._editingIndex===a?r`<div class="edit-form"> <div class="editor-toolbar"> <select name="question-type" class="editor-select" .value="${this._tempQuestionType}" @change="${i=>{this._tempQuestionType=i.target.value}}" > <option value="mc">Pilihan Ganda</option> <option value="pgk">PG Kompleks</option> <option value="matching">Menjodohkan</option> <option value="shortAnswer">Isian Singkat</option> </select> <input type="text" name="question-image" class="editor-input" placeholder="URL gambar" .value="${this._tempQuestionImage}" @input="${i=>{this._tempQuestionImage=i.target.value}}" /> <label class="editor-label">Poin:</label> <input type="number" name="question-points" min="1" class="editor-input-small" .value="${String(this._tempQuestionPoints)}" @input="${i=>{this._tempQuestionPoints=parseInt(i.target.value)||1}}" /> </div> <textarea name="question-text" class="edit-question-text-input" .value="${this._tempQuestionText}" @input="${i=>this._tempQuestionText=i.target.value}" placeholder="${this.t.questionPlaceholder}" ></textarea> ${this._tempQuestionType==="mc"?this._renderEditorMC():""} ${this._tempQuestionType==="pgk"?this._renderEditorPGK():""} ${this._tempQuestionType==="matching"?this._renderEditorMatching():""} ${this._tempQuestionType==="shortAnswer"?this._renderEditorShortAnswer():""} <div class="edit-form-actions"> <button type="button" class="save-edit-btn" @click="${this._saveEditQuestion}" > ${this.t.saveEditBtn} </button> <button type="button" class="cancel-edit-btn" @click="${this._cancelEditQuestion}" > ${this.t.cancelEditBtn} </button> </div> </div>`:r`<div class="question-card-header"> <div> <strong class="question-type-badge" >[${(e.type||"mc").toUpperCase()}]</strong> ${e.question} ${e.image?r` <span class="question-image-indicator" >[gambar]</span>`:""} <span class="question-points-indicator" >[${e.points||1} poin]</span> </div> <div class="question-card-actions"> <button class="edit-btn" @click="${()=>this._startEditQuestion(a)}" > ${this.t.editQuestionBtn} </button> <button class="delete-btn" @click="${()=>this._deleteQuestion(a)}" > ${this.t.deleteQuestionBtn} </button> </div> </div>`} </div> `)} </div> </div>`}_renderEditorMC(){return r`<div class="choices-container"> ${[0,1,2,3].map(t=>r` <div class="choice-input-wrapper"> <input name="choice-${t}" class="choice-input" .value="${this[`_tempChoice${t}`]}" @input="${e=>this[`_tempChoice${t}`]=e.target.value}" placeholder="${this.t.choicePlaceholder.replace("{N}",t+1)}" /> <input type="url" name="choice-image-${t}" class="choice-image-input" placeholder="🖼️ URL gambar" .value="${this[`_tempChoiceImage${t}`]||""}" @input="${e=>this[`_tempChoiceImage${t}`]=e.target.value}" /> <label class="choice-label"> <input type="checkbox" ?checked="${this._tempCorrectAnswers.includes(t)}" @change="${e=>{e.target.checked?this._tempCorrectAnswers=[...this._tempCorrectAnswers,t]:this._tempCorrectAnswers=this._tempCorrectAnswers.filter(a=>a!==t),this._tempCorrectAnswers.length===1?this._tempCorrectIndex=String(this._tempCorrectAnswers[0]):this._tempCorrectAnswers.length===0&&(this._tempCorrectIndex=t.toString())}}" /> ${this.t.choiceCorrectLabel} </label> ${this[`_tempChoiceImage${t}`]?r`<img src="${this[`_tempChoiceImage${t}`]}" class="choice-image-preview" />`:""} </div> `)} ${this._tempCorrectAnswers.length<=1?r` <div class="editor-hint"> Pilih 1 jawaban benar. Centang lebih dari 1 untuk mode PG Kompleks. </div>`:r` <div class="editor-hint editor-hint--accent"> Mode PG Kompleks: ${this._tempCorrectAnswers.length} jawaban benar dipilih </div>`} </div>`}_renderEditorPGK(){return r`<div class="editor-pgk-container"> <div class="editor-hint"> Pernyataan (JSON array, format: [{"text":"...","answer":true}]): </div> <textarea name="pgk-statements" class="editor-json-textarea" .value="${this._tempAcceptedStatements}" @input="${t=>{this._tempAcceptedStatements=t.target.value}}" ></textarea> </div>`}_renderEditorMatching(){return r`<div class="editor-matching-container"> <div class="editor-matching-columns"> <div class="editor-matching-column"> <div class="editor-hint">Item Kiri:</div> ${this._tempLeftItems.map((t,e)=>r` <input name="left-${e}" class="editor-input" .value="${t}" @input="${a=>{const i=[...this._tempLeftItems];i[e]=a.target.value,this._tempLeftItems=i}}" placeholder="Item ${e+1}" /> `)} <button type="button" class="editor-add-btn" @click="${()=>{this._tempLeftItems=[...this._tempLeftItems,""]}}" > + Tambah </button> </div> <div class="editor-matching-column"> <div class="editor-hint">Item Kanan:</div> ${this._tempRightItems.map((t,e)=>r` <input name="right-${e}" class="editor-input" .value="${t}" @input="${a=>{const i=[...this._tempRightItems];i[e]=a.target.value,this._tempRightItems=i}}" placeholder="Item ${String.fromCharCode(65+e)}" /> `)} <button type="button" class="editor-add-btn" @click="${()=>{this._tempRightItems=[...this._tempRightItems,""]}}" > + Tambah </button> </div> </div> <div class="editor-hint"> Kunci Jawaban (JSON: {"0":1,"1":0} artinya Item Kiri 0→Item Kanan B): </div> <input name="matching-keys" class="editor-json-input" .value="${JSON.stringify(this._tempCorrectPairs)}" @input="${t=>{try{this._tempCorrectPairs=JSON.parse(t.target.value)}catch{}}}" /> </div>`}_renderEditorShortAnswer(){return r`<div class="editor-short-answer-container"> <div class="editor-hint">Jawaban yang diterima (pisahkan koma):</div> <input name="short-answer-accepted" class="editor-input" placeholder="contoh: biomassa, sekam padi, limbah pertanian" .value="${this._tempAcceptedAnswers}" @input="${t=>{this._tempAcceptedAnswers=t.target.value}}" /> </div>`}_addQuestion(){if(!this._tempQuestionText.trim()){console.warn(this.t.emptyQuestionError);return}const t=this._tempQuestionType||"mc",e={type:t,question:this._tempQuestionText.trim()};if(this._tempQuestionImage.trim()&&(e.image=this._tempQuestionImage.trim()),this._tempQuestionPoints>1&&(e.points=this._tempQuestionPoints),t==="mc"){if(!this._tempChoice0.trim()||!this._tempChoice1.trim()){console.warn(this.t.emptyChoiceError);return}e.choices=[0,1,2,3].map(a=>{const i=this[`_tempChoice${a}`]?.trim();if(!i)return null;const d=this[`_tempChoiceImage${a}`]?.trim();return d?{text:i,image:d}:i}).filter(Boolean),this._tempCorrectAnswers.length>1?e.correctAnswers=[...this._tempCorrectAnswers]:e.correctIndex=parseInt(this._tempCorrectIndex,10)}else if(t==="pgk")try{e.statements=JSON.parse(this._tempAcceptedStatements||"[]")}catch{e.statements=[]}else t==="matching"?(e.leftItems=[...this._tempLeftItems],e.rightItems=[...this._tempRightItems],e.correctPairs={...this._tempCorrectPairs}):t==="shortAnswer"&&(e.acceptedAnswers=this._tempAcceptedAnswers.split(",").map(a=>a.trim()).filter(Boolean));this._tempQuestions=[...this._tempQuestions,e],this._resetEditorForm()}_deleteQuestion(t){if(this._tempQuestions.length<=3){console.warn(this.t.minQuestionsError);return}this._tempQuestions=this._tempQuestions.filter((e,a)=>a!==t),this._editingIndex===t?(this._editingIndex=-1,this._resetEditorForm()):this._editingIndex>t&&this._editingIndex--}_resetEditorForm(){this._tempQuestionText="",this._tempChoice0="",this._tempChoice1="",this._tempChoice2="",this._tempChoice3="",this._tempChoiceImage0="",this._tempChoiceImage1="",this._tempChoiceImage2="",this._tempChoiceImage3="",this._tempCorrectIndex="0",this._tempCorrectAnswers=[],this._tempQuestionImage="",this._tempQuestionType="mc",this._tempQuestionPoints=1,this._tempLeftItems=["",""],this._tempRightItems=["",""],this._tempCorrectPairs={},this._tempAcceptedAnswers="",this._tempAcceptedStatements="[]"}_startEditQuestion(t){if(t<0||t>=this._tempQuestions.length)return;this._editingIndex=t;const e=this._tempQuestions[t];this._tempQuestionText=e.question,this._tempQuestionImage=e.image||"",this._tempQuestionType=e.type||"mc",this._tempQuestionPoints=e.points||1;const a=e.choices||[];this._tempChoice0=this._getChoiceText(a[0])||"",this._tempChoice1=this._getChoiceText(a[1])||"",this._tempChoice2=this._getChoiceText(a[2])||"",this._tempChoice3=this._getChoiceText(a[3])||"",this._tempChoiceImage0=this._getChoiceImage(a[0])||"",this._tempChoiceImage1=this._getChoiceImage(a[1])||"",this._tempChoiceImage2=this._getChoiceImage(a[2])||"",this._tempChoiceImage3=this._getChoiceImage(a[3])||"",this._tempCorrectIndex=e.correctIndex!=null?e.correctIndex.toString():"0",this._tempCorrectAnswers=e.correctAnswers||[],this._tempLeftItems=e.leftItems||["",""],this._tempRightItems=e.rightItems||["",""],this._tempCorrectPairs=e.correctPairs||{},this._tempAcceptedAnswers=(e.acceptedAnswers||[]).join(", "),this._tempAcceptedStatements=JSON.stringify(e.statements||[])}_saveEditQuestion(){if(!this._tempQuestionText.trim()){console.warn(this.t.emptyQuestionError);return}if(this._editingIndex<0||this._editingIndex>=this._tempQuestions.length)return;const t=this._tempQuestionType||"mc",e={type:t,question:this._tempQuestionText.trim()};if(this._tempQuestionImage.trim()&&(e.image=this._tempQuestionImage.trim()),this._tempQuestionPoints>1&&(e.points=this._tempQuestionPoints),t==="mc")e.choices=[0,1,2,3].map(a=>{const i=this[`_tempChoice${a}`]?.trim();if(!i)return null;const d=this[`_tempChoiceImage${a}`]?.trim();return d?{text:i,image:d}:i}).filter(Boolean),this._tempCorrectAnswers.length>1?e.correctAnswers=[...this._tempCorrectAnswers]:e.correctIndex=parseInt(this._tempCorrectIndex,10);else if(t==="pgk")try{e.statements=JSON.parse(this._tempAcceptedStatements||"[]")}catch{e.statements=[]}else t==="matching"?(e.leftItems=[...this._tempLeftItems],e.rightItems=[...this._tempRightItems],e.correctPairs={...this._tempCorrectPairs}):t==="shortAnswer"&&(e.acceptedAnswers=this._tempAcceptedAnswers.split(",").map(a=>a.trim()).filter(Boolean));this._tempQuestions=this._tempQuestions.map((a,i)=>i===this._editingIndex?e:a),this._editingIndex=-1,this._resetEditorForm()}_cancelEditQuestion(){this._editingIndex<0||(this._editingIndex=-1,this._resetEditorForm())}loadQuestions(t){Array.isArray(t)||(t=Array.isArray(this.questions)?this.questions:G),this.questions=t,this._currentIndex=0,this._score=0,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._shuffledQuestions=[],this._screen="name",this.dispatchEvent(new CustomEvent("questions-changed",{bubbles:!0,composed:!0,detail:{questions:this.questions}}))}_saveAll(){if(this._screen==="editor"){this.questions=JSON.parse(JSON.stringify(this._tempQuestions));try{this.setAttribute("questions",JSON.stringify(this.questions))}catch{}this._editing=!1,this._editingIndex=-1,this._screen=this._editorOrigin||"result",this._editorOrigin="result",this.dispatchEvent(new CustomEvent("questions-changed",{bubbles:!0,composed:!0,detail:{questions:this.questions}}))}}render(){switch(this._screen){case"name":return this._renderNameScreen();case"question":return this._renderQuestionScreen();case"result":return this._renderResultScreen();case"editor":return this._renderEditorScreen();default:return this._renderNameScreen()}}static get styles(){return[super.styles,P`:host { display: block; max-width: 640px; margin: 0 auto; padding: var(--ddd-spacing-8); font-family: var(--ddd-font-primary); } .quiz-title { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); margin-bottom: var(--ddd-spacing-4); color: var(--ddd-theme-primary); } .quiz-instruction { font-size: var(--ddd-font-size-m); margin-bottom: var(--ddd-spacing-6); color: var(--ddd-theme-secondary); } .input-group { margin-bottom: var(--ddd-spacing-4); } input#name-input { width: 100%; padding: var(--ddd-spacing-4); font-size: var(--ddd-font-size-m); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); box-sizing: border-box; font-family: var(--ddd-font-primary); } input#name-input:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--ddd-theme-polaris-focus-ring); } .start-btn { width: 100%; padding: var(--ddd-spacing-4); font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-bold); background: var(--ddd-theme-polaris-primary); color: var(--ddd-theme-on-primary); border: none; border-radius: var(--ddd-radius-md); cursor: pointer; transition: background 0.2s; font-family: var(--ddd-font-primary); } .start-btn:hover { background: var(--ddd-theme-accent); } .start-btn.multi-submit { margin-top: var(--ddd-spacing-3); font-size: var(--ddd-font-size-s); } .validation-error { margin-top: var(--ddd-spacing-2); color: var(--ddd-theme-error); font-size: var(--ddd-font-size-s); } .quiz-header { display: flex; justify-content: space-between; margin-bottom: var(--ddd-spacing-6); font-weight: var(--ddd-font-weight-bold); } .progress-label, .score-display { color: var(--ddd-theme-primary); } .question-text { font-size: var(--ddd-font-size-m); line-height: 1.6; text-align: justify; color: var(--ddd-theme-on-surface); background: var(--ddd-theme-polaris-surface-hover); border-left: 4px solid var(--ddd-theme-polaris-primary); padding: var(--ddd-spacing-4) var(--ddd-spacing-5); border-radius: 0 var(--ddd-radius-md) var(--ddd-radius-md) 0; margin-bottom: var(--ddd-spacing-6); } .question-image { text-align: center; margin-bottom: var(--ddd-spacing-4); } .question-image img { max-width: 100%; border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-theme-polaris-border); } .answer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--ddd-spacing-3); margin-bottom: var(--ddd-spacing-6); } @media (max-width: 480px) { .answer-grid { grid-template-columns: 1fr; } } .answer-btn { padding: var(--ddd-spacing-4) var(--ddd-spacing-5); font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-medium); background: var(--ddd-theme-polaris-surface); color: var(--ddd-theme-on-surface); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); cursor: pointer; transition: background 0.2s, border-color 0.2s; font-family: var(--ddd-font-primary); } .answer-btn:hover:not([disabled]) { background: var(--ddd-theme-polaris-surface-hover); } .answer-btn:disabled { opacity: 0.6; cursor: not-allowed; } .answer-btn--correct { background: var(--ddd-theme-success) !important; color: var(--ddd-theme-on-success) !important; border-color: var(--ddd-theme-success) !important; } .answer-btn--selected { background: var(--ddd-theme-accent-light) !important; color: var(--ddd-theme-primary) !important; border-color: var(--ddd-theme-primary) !important; box-shadow: 0 0 0 2px var(--ddd-theme-polaris-focus-ring); } .answer-btn--wrong { background: var(--ddd-theme-error) !important; color: var(--ddd-theme-on-error) !important; border-color: var(--ddd-theme-error) !important; } .choice-image { max-height: 60px; border-radius: var(--ddd-radius-sm); object-fit: contain; display: block; margin: 0 auto var(--ddd-spacing-1); } .feedback-area { padding: var(--ddd-spacing-4); border-radius: var(--ddd-radius-md); font-weight: var(--ddd-font-weight-medium); text-align: center; } .feedback-area.positive { background: var(--ddd-theme-success-light); color: var(--ddd-theme-on-success); } .feedback-area.negative { background: var(--ddd-theme-error-light); color: var(--ddd-theme-on-error); } .result-heading { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); margin-bottom: var(--ddd-spacing-6); color: var(--ddd-theme-primary); } .result-name, .result-score, .result-percentage { font-size: var(--ddd-font-size-m); margin-bottom: var(--ddd-spacing-4); color: var(--ddd-theme-secondary); } .result-message { font-size: var(--ddd-font-size-l); font-weight: var(--ddd-font-weight-bold); margin: var(--ddd-spacing-6) 0; color: var(--ddd-theme-primary); text-align: center; } .restart-btn { width: 100%; padding: var(--ddd-spacing-4); font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-bold); background: var(--ddd-theme-polaris-primary); color: var(--ddd-theme-on-primary); border: none; border-radius: var(--ddd-radius-md); cursor: pointer; transition: background 0.2s; font-family: var(--ddd-font-primary); } .restart-btn:hover { background: var(--ddd-theme-accent); } .edit-questions-btn { width: 100%; margin-top: var(--ddd-spacing-3); padding: var(--ddd-spacing-3) var(--ddd-spacing-4); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-medium); background: transparent; color: var(--ddd-theme-primary); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-md); cursor: pointer; transition: background 0.2s; font-family: var(--ddd-font-primary); } .edit-questions-btn:hover { background: var(--ddd-theme-polaris-surface-hover); } .edit-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--ddd-spacing-6); padding-bottom: var(--ddd-spacing-4); border-bottom: 1px solid var(--ddd-theme-polaris-border); } .edit-title { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-primary); margin: 0; } .close-editor-btn { padding: var(--ddd-spacing-2) var(--ddd-spacing-4); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-medium); background: var(--ddd-theme-error); color: var(--ddd-theme-on-error); border: none; border-radius: var(--ddd-radius-md); cursor: pointer; font-family: var(--ddd-font-primary); } .editor-content { display: flex; flex-direction: column; gap: var(--ddd-spacing-6); } .add-question-form { padding: var(--ddd-spacing-4); background: var(--ddd-theme-polaris-surface); border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-theme-polaris-border); } .editor-toolbar { display: flex; gap: var(--ddd-spacing-2); margin-bottom: var(--ddd-spacing-3); align-items: center; flex-wrap: wrap; } .editor-select, .editor-input { flex: 1; min-width: 120px; padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-s); font-family: var(--ddd-font-primary); } .editor-input-small { width: var(--ddd-spacing-14); padding: var(--ddd-spacing-2); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-s); text-align: center; font-family: var(--ddd-font-primary); } .editor-label { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); white-space: nowrap; } .editor-image-preview { text-align: center; margin-bottom: var(--ddd-spacing-3); } .editor-image-preview img { max-width: 200px; border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-theme-polaris-border); } .question-text-input, .edit-question-text-input { width: 100%; min-height: var(--ddd-spacing-20); padding: var(--ddd-spacing-3); font-size: var(--ddd-font-size-m); font-family: var(--ddd-font-primary); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); resize: vertical; box-sizing: border-box; margin-bottom: var(--ddd-spacing-4); } .choices-container { display: flex; flex-direction: column; gap: var(--ddd-spacing-3); margin-bottom: var(--ddd-spacing-4); } .choice-input-wrapper { display: flex; flex-wrap: wrap; gap: var(--ddd-spacing-2); align-items: center; } .choice-input { flex: 1; min-width: 120px; padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-m); font-family: var(--ddd-font-primary); } .choice-image-input { width: 150px; padding: var(--ddd-spacing-2); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-xs); font-family: var(--ddd-font-primary); } .choice-image-preview { max-height: 32px; border-radius: var(--ddd-radius-sm); margin-left: auto; } .choice-label { display: flex; align-items: center; gap: var(--ddd-spacing-2); font-size: var(--ddd-font-size-s); color: var(--ddd-theme-secondary); cursor: pointer; } .editor-hint { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); margin-top: var(--ddd-spacing-1); } .editor-hint--accent { color: var(--ddd-theme-primary); font-weight: var(--ddd-font-weight-bold); } .add-question-btn { width: 100%; padding: var(--ddd-spacing-3) var(--ddd-spacing-4); font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-bold); background: var(--ddd-theme-polaris-primary); color: var(--ddd-theme-on-primary); border: none; border-radius: var(--ddd-radius-md); cursor: pointer; font-family: var(--ddd-font-primary); } .add-question-btn:hover { background: var(--ddd-theme-accent); } .editor-add-btn { font-size: var(--ddd-font-size-xs); margin-top: var(--ddd-spacing-1); padding: var(--ddd-spacing-1) var(--ddd-spacing-3); border-radius: var(--ddd-radius-sm); border: 1px solid var(--ddd-theme-polaris-border); background: transparent; cursor: pointer; font-family: var(--ddd-font-primary); } .questions-list { display: flex; flex-direction: column; gap: var(--ddd-spacing-4); } .question-card { padding: var(--ddd-spacing-4); background: var(--ddd-theme-polaris-surface); border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-theme-polaris-border); } .question-card-header { display: flex; justify-content: space-between; align-items: center; } .question-type-badge { color: var(--ddd-theme-primary); } .question-image-indicator { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-secondary); } .question-points-indicator { font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-success); font-weight: var(--ddd-font-weight-bold); } .question-card-actions { display: flex; gap: var(--ddd-spacing-2); } .edit-btn { padding: var(--ddd-spacing-1) var(--ddd-spacing-3); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-medium); background: var(--ddd-theme-polaris-surface-hover); color: var(--ddd-theme-primary); border: none; border-radius: var(--ddd-radius-sm); cursor: pointer; font-family: var(--ddd-font-primary); } .delete-btn { padding: var(--ddd-spacing-1) var(--ddd-spacing-3); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-medium); background: transparent; color: var(--ddd-theme-error); border: none; border-radius: var(--ddd-radius-sm); cursor: pointer; font-family: var(--ddd-font-primary); } .delete-btn:hover { background: var(--ddd-theme-error); color: var(--ddd-theme-on-error); } .edit-form { display: flex; flex-direction: column; gap: var(--ddd-spacing-3); } .edit-form-actions { display: flex; gap: var(--ddd-spacing-3); } .save-edit-btn { flex: 1; padding: var(--ddd-spacing-2) var(--ddd-spacing-3); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-bold); background: var(--ddd-theme-success); color: var(--ddd-theme-on-success); border: none; border-radius: var(--ddd-radius-sm); cursor: pointer; font-family: var(--ddd-font-primary); } .cancel-edit-btn { flex: 1; padding: var(--ddd-spacing-2) var(--ddd-spacing-3); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-medium); background: transparent; color: var(--ddd-theme-secondary); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); cursor: pointer; font-family: var(--ddd-font-primary); } .editor-pgk-container, .editor-matching-container, .editor-short-answer-container { margin: var(--ddd-spacing-3) 0; font-size: var(--ddd-font-size-s); } .editor-matching-columns { display: flex; gap: var(--ddd-spacing-4); } .editor-matching-column { flex: 1; } .editor-json-textarea { width: 100%; min-height: var(--ddd-spacing-20); padding: var(--ddd-spacing-3); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-xs); font-family: monospace; box-sizing: border-box; } .editor-json-input { width: 100%; padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border: 1px solid var(--ddd-theme-polaris-border); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-xs); font-family: monospace; box-sizing: border-box; } .pgk-table { width: 100%; border-collapse: collapse; font-size: var(--ddd-font-size-s); margin: var(--ddd-spacing-3) 0; } .pgk-table th { text-align: left; padding: var(--ddd-spacing-2); background: var(--ddd-theme-polaris-surface-hover); } .pgk-table td { padding: var(--ddd-spacing-2); border-bottom: 1px solid var(--ddd-theme-polaris-border); } .pgk-cell { text-align: center; width: var(--ddd-spacing-20); } .matching-container { margin: var(--ddd-spacing-3) 0; } .matching-row { display: flex; align-items: center; gap: var(--ddd-spacing-3); margin: var(--ddd-spacing-2) 0; font-size: var(--ddd-font-size-s); } .matching-item { min-width: 200px; font-weight: var(--ddd-font-weight-medium); } .matching-arrow { font-size: var(--ddd-font-size-l); } .matching-select { padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border-radius: var(--ddd-radius-sm); border: 1px solid var(--ddd-theme-polaris-border); font-size: var(--ddd-font-size-s); font-family: var(--ddd-font-primary); } .short-answer-container { margin: var(--ddd-spacing-3) 0; } .short-answer-input { width: 100%; padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-theme-polaris-border); font-size: var(--ddd-font-size-m); box-sizing: border-box; font-family: var(--ddd-font-primary); }`]}}globalThis.customElements.define(B.tag,B);let yt=class dt extends N(C(E)){static get tag(){return"quiz-user-auth"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},autoLogin:{type:Boolean,attribute:"auto-login"},_screen:{state:!0},_nama:{state:!0},_email:{state:!0},_nis:{state:!0},_absen:{state:!0},_kelas:{state:!0},_studentId:{state:!0},_errorMsg:{state:!0},_successMsg:{state:!0},_loading:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.autoLogin=!0,this._screen="check",this._nama="",this._email="",this._nis="",this._absen="",this._kelas="",this._studentId="",this._errorMsg="",this._successMsg="",this._loading=!1,this.t={...this.t,login:"Masuk",register:"Daftar",nama:"Nama Lengkap",email:"Email",nis:"NIS",absen:"Nomor Absen",kelas:"Kelas",namaPlaceholder:"Contoh: Ahmad Dahlan",emailPlaceholder:"contoh@email.com",nisPlaceholder:"Contoh: 1234567",absenPlaceholder:"Contoh: 01",kelasPlaceholder:"Contoh: XII-IPA-1",welcome:"Selamat datang",logout:"Keluar",id:"ID"}}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const e=globalThis.HaxStore.requestAvailability();e&&!e.elementList[dt.tag]&&(e.elementList[dt.tag]=dt.haxProperties)}const t=this._load("quiz_user_session");t?.studentId?(this._studentId=t.studentId,this._nama=t.nama,this._email=t.email,this._nis=t.nis||"",this._absen=t.absen||"",this._kelas=t.kelas||"",this._screen="logged-in",queueMicrotask(()=>this._verifySession()),this.autoLogin&&this._dispatchSessionChanged()):this._screen="login"}_load(t){try{const e=JSON.parse(localStorage.getItem(t));return e?.expiresAt&&Date.now()>e.expiresAt?(this._clear(t),null):e}catch{return null}}_save(t,e){try{const a={...e,expiresAt:Date.now()+864e5};localStorage.setItem(t,JSON.stringify(a))}catch{}}_clear(t){try{localStorage.removeItem(t)}catch{}}async _verifySession(){if(!this.appsScriptUrl||this.appsScriptUrl.trim()===""){this._screen="login";return}this._loading=!0;try{const t=`${this.appsScriptUrl}?action=verify&studentId=${encodeURIComponent(this._studentId)}`,e=await fetch(t),a=e.headers.get("content-type");if(!a||!a.includes("application/json"))throw new Error("Respon bukan JSON");const i=await e.json();i.status==="success"?(this._nama=i.nama,this._nis=i.nis||"",this._absen=i.absen||"",this._kelas=i.kelas||"",this._screen="logged-in",this._dispatchLogin()):(this._clear("quiz_user_session"),this._screen="login",this._dispatchSessionChanged())}catch{this._screen="login",this._dispatchSessionChanged()}this._loading=!1}async _handleLogin(t){if(t.preventDefault(),this._errorMsg="",!this.appsScriptUrl||this.appsScriptUrl.trim()===""){this._errorMsg="URL Apps Script belum dikonfigurasi. Harap hubungi administrator.";return}this._loading=!0;try{const e=`${this.appsScriptUrl}?action=login&nis=${encodeURIComponent(this._nis.trim())}&email=${encodeURIComponent(this._email.trim())}`,a=await fetch(e),i=a.headers.get("content-type");if(!i||!i.includes("application/json"))throw new Error("Respon dari server bukan format JSON. Periksa URL Apps Script.");const d=await a.json();d.status==="success"?(this._studentId=d.studentId,this._nama=d.nama,this._nis=d.nis||this._nis,this._absen=d.absen||"",this._kelas=d.kelas||"",this._save("quiz_user_session",{studentId:d.studentId,nama:d.nama,email:this._email.trim(),nis:this._nis,absen:this._absen,kelas:this._kelas}),this._screen="logged-in",this._dispatchLogin()):this._errorMsg=d.message||"Login gagal"}catch{this._errorMsg="Gagal menghubungi server"}this._loading=!1}async _handleRegister(t){if(t.preventDefault(),this._errorMsg="",!this.appsScriptUrl||this.appsScriptUrl.trim()===""){this._errorMsg="URL Apps Script belum dikonfigurasi. Harap hubungi administrator.",this._loading=!1;return}this._loading=!0;try{const e=new URLSearchParams({action:"register",nama:this._nama.trim(),email:this._email.trim(),nis:this._nis.trim(),absen:this._absen.trim(),kelas:this._kelas.trim()}),a=`${this.appsScriptUrl}?${e.toString()}`,i=await fetch(a,{redirect:"follow"}),d=i.headers.get("content-type");if(!d||!d.includes("application/json"))throw new Error("Respon dari server bukan format JSON. Periksa URL Apps Script.");const l=await i.json();l.status==="success"?(this._successMsg="Pendaftaran berhasil!",this._screen="login"):this._errorMsg=l.message||"Gagal mendaftar"}catch(e){console.error(e),this._errorMsg="Gagal menghubungi server."}finally{this._loading=!1}}_handleLogout(){this._clear("quiz_user_session"),this._studentId="",this._nama="",this._email="",this._nis="",this._absen="",this._kelas="",this._screen="login",window.dispatchEvent(new CustomEvent("quiz-user-logout",{bubbles:!0,composed:!0})),this._dispatchSessionChanged()}_dispatchLogin(){window.dispatchEvent(new CustomEvent("quiz-user-login",{detail:{studentId:this._studentId,nama:this._nama,email:this._email,nis:this._nis,absen:this._absen,kelas:this._kelas},bubbles:!0,composed:!0})),this._dispatchSessionChanged()}_dispatchSessionChanged(){const t=this._load("quiz_user_session");window.dispatchEvent(new CustomEvent("quiz-user-session-changed",{detail:t,bubbles:!0,composed:!0}))}static get styles(){return[super.styles,P`
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
      `]}render(){if(this._loading&&this._screen==="check")return r`<div class="loading">⏳ Memverifikasi sesi...</div>`;if(this._screen==="logged-in"){const t=this._nama?this._nama.charAt(0).toUpperCase():"?";return r`
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
      `}return r`
      <div class="auth-card">
        <h2>🔐 ${this._screen==="register"?this.t.register:this.t.login}</h2>
        <p class="subtitle">
          ${this._screen==="register"?"Buat akun untuk menyimpan hasil kuis & aktivitas":"Masuk dengan email yang sudah terdaftar"}
        </p>

        ${this._errorMsg?r`<div class="msg msg-error">${this._errorMsg}</div>`:""}

        ${this._screen==="register"?r`
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
        `:r`
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
    `}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Quiz User Auth",description:"Sistem login/registrasi siswa untuk dashboard kuis",icon:"icons:account-circle",color:"purple",tags:["Education","Auth"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield",required:!0}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_screen","_nama","_email","_nis","_absen","_kelas","_studentId","_errorMsg","_successMsg","_loading"]}}}};globalThis.customElements.define(yt.tag,yt);class F extends N(C(E)){static get tag(){return"assignment-forum"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},kdMateri:{type:String,attribute:"kd-materi"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},assignmentTitle:{type:String,attribute:"assignment-title"},assignmentInstruction:{type:String,attribute:"assignment-instruction"},forumTopic:{type:String,attribute:"forum-topic"},viewMode:{type:String,attribute:"view-mode"},hideDelete:{type:Boolean,attribute:"hide-delete",reflect:!0},hideTugas:{type:Boolean,attribute:"hide-tugas",reflect:!0},_comments:{state:!0},_activeReplyId:{state:!0},_sortMode:{state:!0},_assignmentText:{state:!0},_assignmentLink:{state:!0},_assignmentSubmitted:{state:!0},_submitting:{state:!0},_loadingComments:{state:!0},_toastMsg:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.kdMateri="",this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.assignmentTitle="Tugas Mandiri",this.assignmentInstruction="Tuliskan refleksi atau jawaban tugas Anda.",this.forumTopic="Forum Diskusi",this.viewMode="student",this.hideDelete=!1,this.hideTugas=!1,this._comments=[],this._activeReplyId=null,this._sortMode="best",this._assignmentText=localStorage.getItem("hax_assignment_text")||"",this._assignmentLink=localStorage.getItem("hax_assignment_link")||"",this._assignmentSubmitted=localStorage.getItem("hax_assignment_submitted")==="true",this._submitting=!1,this._loadingComments=!1,this._toastMsg="",this.t={...this.t,assignmentTitle:"Tugas Mandiri",submitBtn:"Kirim & Kunci Tugas",submitting:"Mengirim...",submitted:"Tugas Diserahkan & Tersimpan ke Google Sheets",pending:"Belum Menyerahkan",resetBtn:"Ubah",forumTitle:"Forum Diskusi",postComment:"Post Comment",posting:"Posting...",reply:"Reply",deleteBtn:"Hapus",noComments:"Belum ada komentar. Mulai diskusi!",sortBest:"Terbaik",sortNewest:"Terbaru",sortOldest:"Terlama",placeholderComment:"Tulis komentar...",placeholderReply:"Tulis balasan...",placeholderTask:"Tulis jawaban tugas Anda di sini...",placeholderLink:"Link Google Drive / Google Doc (opsional)",invalidLink:"Format link tidak valid. Gunakan URL Google Drive/Doc.",emptyTask:"Isi tugas atau link Google Drive terlebih dahulu!",confirmDelete:"Hapus komentar ini?",taskDone:"Selesai",taskPending:"Belum",justNow:"Baru saja",minutesAgo:"menit lalu",hoursAgo:"jam lalu",daysAgo:"hari lalu",activityForum:"Aktivitas forum tercatat",activityAssignment:"Tugas dikumpulkan"}}get _kdMateriVal(){return this.kdMateri||this.sheetName||"Pertemuan"}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[F.tag]&&(t.elementList[F.tag]=F.haxProperties)}this._authHandler=this._onUserLogin.bind(this),globalThis.addEventListener("quiz-user-login",this._authHandler),this._loadForumComments()}disconnectedCallback(){this._authHandler&&globalThis.removeEventListener("quiz-user-login",this._authHandler),super.disconnectedCallback()}_onUserLogin(t){t.detail&&(t.detail.studentId&&(this.studentId=t.detail.studentId),t.detail.nama&&(this.studentName=t.detail.nama),t.detail.nis&&(this.studentNis=t.detail.nis),t.detail.absen&&(this.studentAbsen=t.detail.absen),t.detail.kelas&&(this.studentKelas=t.detail.kelas),this._flushPending())}static get PENDING_KEY(){return"forum_pending_submissions"}static get PENDING_TTL_MS(){return 1440*60*1e3}_getPending(){try{const t=localStorage.getItem(F.PENDING_KEY);return t?JSON.parse(t):[]}catch{return[]}}_savePending(t){try{localStorage.setItem(F.PENDING_KEY,JSON.stringify(t))}catch{}}_saveDraft(t){const e=this._getPending();e.push({id:`draft-${Date.now()}`,timestamp:new Date().toISOString(),synced:!1,data:t}),this._savePending(e)}_flushPending(){if(!this.studentId)return;const t=this.forumApiUrl||this.appsScriptUrl;if(!t)return;const e=this._getPending(),a=Date.now(),i=[];for(const d of e)d.synced||a-new Date(d.timestamp).getTime()>F.PENDING_TTL_MS||fetch(t,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({...d.data,studentId:this.studentId,user:this.studentName||"Siswa"})}).then(()=>{console.log("[assignment-forum] Pending flushed")}).catch(()=>{i.push(d)});this._savePending(i)}async _loadForumComments(){const t=this.forumApiUrl||this.appsScriptUrl;if(t){this._loadingComments=!0;try{const e=await(await fetch(`${t}?action=getForumComments`,{redirect:"follow"})).json();e.status==="ok"&&e.comments&&(this._comments=this._buildThread(e.comments))}catch(e){console.error("[assignment-forum] Failed to load forum:",e)}this._loadingComments=!1}}_buildThread(t){const e={},a=[];return t.forEach(i=>{e[i.id]={...i,replies:[]}}),t.forEach(i=>{i.parentId&&e[i.parentId]?e[i.parentId].replies.push(e[i.id]):e[i.id]&&a.push(e[i.id])}),a}_getSorted(){const t=[...this._comments];return this._sortMode==="newest"?t.sort((e,a)=>new Date(a.time)-new Date(e.time)):this._sortMode==="oldest"?t.sort((e,a)=>new Date(e.time)-new Date(a.time)):t.sort((e,a)=>(a.likes||0)-(e.likes||0)),t}_setSort(t){this._sortMode=t,this._comments=[...this._comments]}async _submitMainComment(){if(this._submitting)return;const t=this.shadowRoot.querySelector("#main-input");if(!t)return;const e=t.value.trim();if(!e)return;this._submitting=!0;const a={action:"saveForumComment",id:Date.now(),parentId:null,user:this.studentName||"Siswa",studentId:this.studentId||"",text:e,sheet:this.sheetName,kdMateri:this._kdMateriVal};if(!this.studentId){this._saveDraft(a),t.value="",this._submitting=!1,this._showToast("Tersimpan lokal. Login untuk mengirim komentar.");return}const i=this.forumApiUrl||this.appsScriptUrl;try{const d=await(await fetch(i,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(a)})).json();d.status==="ok"&&d.data&&(this._comments=[...this._comments,{...d.data,replies:[]}]),t.value=""}catch(d){console.error("[assignment-forum] Submit failed:",d)}this._submitting=!1,this._sendActivity("discussion",`Forum: ${e.substring(0,50)}`)}async _submitReply(t){if(this._submitting)return;const e=this.shadowRoot.querySelector(`#reply-${t}`);if(!e)return;const a=e.value.trim();if(!a)return;this._submitting=!0;const i={action:"saveForumComment",id:Date.now(),parentId:t,user:this.studentName||"Siswa",studentId:this.studentId||"",text:a,sheet:this.sheetName,kdMateri:this._kdMateriVal};if(!this.studentId){this._saveDraft(i),e.value="",this._submitting=!1,this._showToast("Tersimpan lokal. Login untuk mengirim balasan.");return}const d=this.forumApiUrl||this.appsScriptUrl;try{const l=await(await fetch(d,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(i)})).json();l.status==="ok"&&l.data&&(this._comments=this._comments.map(o=>o.id===t?{...o,replies:[...o.replies,{...l.data,replies:[]}]}:o)),this._activeReplyId=null}catch(l){console.error("[assignment-forum] Reply failed:",l)}this._submitting=!1,this._sendActivity("discussion",`Reply: ${a.substring(0,50)}`)}async _deleteComment(t){if(!globalThis.confirm(this.t.confirmDelete))return;const e=this.forumApiUrl||this.appsScriptUrl;if(e)try{await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"deleteForumComment",id:t})});const a=new Set([t]);this._comments.forEach(i=>{i.id===t&&i.replies&&i.replies.forEach(d=>a.add(d.id))}),this._comments=this._comments.filter(i=>!a.has(i.id)).map(i=>({...i,replies:(i.replies||[]).filter(d=>!a.has(d.id))}))}catch(a){console.error("[assignment-forum] Delete failed:",a)}}_findAndUpdateComment(t,e,a){return t.map(i=>i.id===e?a(i):i.replies&&i.replies.length>0?{...i,replies:this._findAndUpdateComment(i.replies,e,a)}:i)}_handleLike(t){this._comments=this._findAndUpdateComment(this._comments,t,e=>{const a=!e.isLiked;return{...e,isLiked:a,likes:a?(e.likes||0)+1:(e.likes||0)-1}}),this._syncLike(t)}_syncLike(t){const e=this.forumApiUrl||this.appsScriptUrl;if(!e)return;const a=this._comments.find(i=>i.id===t);a&&fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"saveForumComment",id:t,actionType:"like",isLiked:a.isLiked})}).catch(()=>{})}_toggleReply(t){this._activeReplyId=this._activeReplyId===t?null:t}_isValidUrl(t){try{const e=new URL(t);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}async _submitAssignment(){if(this._submitting)return;const t=this._assignmentText.trim();if(!t&&!this._assignmentLink){globalThis.alert(this.t.emptyTask);return}if(this._assignmentLink&&!this._isValidUrl(this._assignmentLink)){globalThis.alert(this.t.invalidLink);return}this._submitting=!0;const e={action:"saveAssignment",studentId:this.studentId,name:this.studentName,sheet:this.sheetName,title:this.assignmentTitle,content:t,link:this._assignmentLink,kdMateri:this._kdMateriVal};if(!this.studentId){this._saveDraft(e),localStorage.setItem("hax_assignment_submitted","true"),localStorage.setItem("hax_assignment_text",t),localStorage.setItem("hax_assignment_link",this._assignmentLink),this._assignmentSubmitted=!0,this._submitting=!1,this._showToast("Tersimpan lokal. Login untuk mengirim tugas.");return}const a=this.forumApiUrl||this.appsScriptUrl;if(a)try{await fetch(a,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)})}catch(i){console.error("[assignment-forum] Save assignment failed:",i)}localStorage.setItem("hax_assignment_submitted","true"),localStorage.setItem("hax_assignment_text",t),localStorage.setItem("hax_assignment_link",this._assignmentLink),this._assignmentSubmitted=!0,this._submitting=!1,this._showToast(`\u2713 ${this.t.activityAssignment}`),this._sendActivity("assignment",`Tugas: ${this.assignmentTitle}`)}_resetAssignment(){localStorage.removeItem("hax_assignment_submitted"),localStorage.removeItem("hax_assignment_text"),localStorage.removeItem("hax_assignment_link"),this._assignmentSubmitted=!1,this._assignmentText="",this._assignmentLink=""}_sendActivity(t,e){const a=t==="assignment"?"assignment-saved":"discussion-saved";globalThis.dispatchEvent(new CustomEvent(a,{detail:{title:this.assignmentTitle,thread:this.forumTopic,studentId:this.studentId,kdMateri:this._kdMateriVal},bubbles:!0,composed:!0}));const i=this.appsScriptUrl;if(i&&this.studentId){const d=new URLSearchParams({action:"activity",activityType:t,description:e,name:this.studentName,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",sheet:this.sheetName,kdMateri:this._kdMateriVal,timestamp:new Date().toISOString()});fetch(`${i}?${d.toString()}`,{redirect:"follow"}).catch(()=>{})}}_timeAgo(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),a=Math.floor(e/6e4);if(a<1)return this.t.justNow;if(a<60)return`${a} ${this.t.minutesAgo}`;const i=Math.floor(a/60);return i<24?`${i} ${this.t.hoursAgo}`:`${Math.floor(i/24)} ${this.t.daysAgo}`}_showToast(t){this._toastMsg=t,setTimeout(()=>{this._toastMsg===t&&(this._toastMsg="")},3e3)}static get styles(){return[super.styles,P`
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
      `]}render(){const t=this._getSorted();return r`
      <div class="summary-bar" role="status" aria-live="polite">
        <div>${this._assignmentSubmitted?"\u2705":"\u23F3"} ${this.t.assignmentTitle}: ${this._assignmentSubmitted?this.t.taskDone:this.t.taskPending}</div>
        <div>💬 ${this.t.forumTitle}: ${t.length}</div>
      </div>

      ${this.hideTugas?"":r`
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
          ${this._assignmentSubmitted?r`
              <button class="btn btn-success btn-sm" disabled aria-label="${this.t.submitted}">✅ ${this.t.submitted}</button>
              <button class="btn btn-danger btn-sm" @click="${this._resetAssignment}" aria-label="${this.t.resetBtn}">🔄 ${this.t.resetBtn}</button>
            `:r`
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

        ${this._loadingComments?r`<div class="empty-state">Loading...</div>`:t.length===0?r`<div class="empty-state">${this.t.noComments}</div>`:t.map(e=>this._renderComment(e))}
      </section>

      ${this._toastMsg?r`<div class="toast" role="status" aria-live="polite">${this._toastMsg}</div>`:""}
    `}_renderComment(t){const e=t.user?t.user.charAt(0).toUpperCase():"?",a=this.viewMode==="lecturer"&&!this.hideDelete;return r`
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
            ${a?r`
              <button
                class="action-btn action-btn--danger"
                @click="${()=>this._deleteComment(t.id)}"
                aria-label="${this.t.deleteBtn}"
              >🗑️ ${this.t.deleteBtn}</button>
            `:""}
          </nav>
          ${this._activeReplyId===t.id?r`
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
          ${t.replies&&t.replies.length>0?r`
            <div class="replies-list">
              ${t.replies.map(i=>this._renderReply(i))}
            </div>
          `:""}
        </div>
      </article>
    `}_renderReply(t){const e=t.user?t.user.charAt(0).toUpperCase():"?";return r`
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
    `}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Assignment Forum",description:"Forum diskusi bertingkat + pengumpulan tugas dengan integrasi Google Sheets (2 deployment terpisah untuk quota Apps Script)",icon:"icons:forum",color:"blue",tags:["Education","Communication","Assessment"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL (Main)",description:"URL deployment utama untuk activity logging",inputMethod:"textfield",required:!0},{property:"forumApiUrl",title:"Forum API URL (Terpisah)",description:"URL deployment terpisah untuk forum & tugas (hemat quota)",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet/Pertemuan",description:"Nama sheet di Google Sheets",inputMethod:"textfield",default:"Pertemuan"},{property:"assignmentTitle",title:"Judul Tugas",inputMethod:"textfield",default:"Tugas Mandiri"},{property:"assignmentInstruction",title:"Instruksi Tugas",inputMethod:"textarea"},{property:"forumTopic",title:"Topik Forum",inputMethod:"textfield",default:"Forum Diskusi"},{property:"viewMode",title:"Mode Tampilan",inputMethod:"select",options:{student:"Siswa",lecturer:"Dosen (bisa hapus komentar)"},default:"student"},{property:"hideDelete",title:"Sembunyikan Tombol Hapus",inputMethod:"boolean",default:!1}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_comments","_activeReplyId","_sortMode","_assignmentText","_assignmentLink","_assignmentSubmitted","_submitting","_loadingComments","_toastMsg"]}}}}globalThis.customElements.define(F.tag,F);class K extends N(C(E)){static get tag(){return"assignment-component"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},kdMateri:{type:String,attribute:"kd-materi"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},assignmentTitle:{type:String,attribute:"assignment-title"},assignmentInstruction:{type:String,attribute:"assignment-instruction"},hideDelete:{type:Boolean,attribute:"hide-delete",reflect:!0},_assignmentText:{state:!0},_assignmentLink:{state:!0},_assignmentSubmitted:{state:!0},_submitting:{state:!0},_toastMsg:{state:!0}}}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Assignment Component",description:"Komponen pengumpulan tugas mandiri terpisah",icon:"icons:assignment-turned-in",color:"blue",tags:["Education","Assignment"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL (Activity)",inputMethod:"textfield"},{property:"forumApiUrl",title:"Forum API URL (Tugas)",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet / KD Materi",inputMethod:"textfield",default:"Pertemuan"},{property:"assignmentTitle",title:"Judul Tugas",inputMethod:"textfield",default:"Tugas Mandiri"},{property:"assignmentInstruction",title:"Instruksi Tugas",inputMethod:"textfield",default:"Tuliskan refleksi atau jawaban tugas Anda."},{property:"hideDelete",title:"Sembunyikan Hapus",inputMethod:"boolean"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.kdMateri="",this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.assignmentTitle="Tugas Mandiri",this.assignmentInstruction="Tuliskan refleksi atau jawaban tugas Anda.",this.hideDelete=!1,this._assignmentText="",this._assignmentLink="",this._assignmentSubmitted=!1,this._submitting=!1,this._toastMsg="",this.t={...this.t,assignmentTitle:"Tugas Mandiri",submitBtn:"Kirim & Kunci Tugas",submitting:"Mengirim...",submitted:"Tugas Diserahkan & Tersimpan ke Google Sheets",pending:"Belum Menyerahkan",resetBtn:"Ubah",placeholderTask:"Tulis jawaban tugas Anda di sini...",placeholderLink:"Link Google Drive / Google Doc (opsional)",invalidLink:"Format link tidak valid. Gunakan URL Google Drive/Doc.",emptyTask:"Isi tugas atau link Google Drive terlebih dahulu!",activityAssignment:"Tugas dikumpulkan"}}get _kdMateriVal(){return this.kdMateri||this.sheetName||"Pertemuan"}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[K.tag]&&(t.elementList[K.tag]=K.haxProperties)}this._loadFromStorage(),this._listenSession()}disconnectedCallback(){globalThis.removeEventListener("quiz-user-session-changed",this._handleSessionChanged),super.disconnectedCallback()}_listenSession(){this._handleSessionChanged=this._handleSessionChanged.bind(this),globalThis.addEventListener("quiz-user-session-changed",this._handleSessionChanged),this._handleSessionChanged({detail:this._loadSession()})}_loadSession(){try{const t=JSON.parse(localStorage.getItem("quiz_user_session"));return t?.expiresAt&&Date.now()>t.expiresAt?(localStorage.removeItem("quiz_user_session"),null):t}catch{return null}}_handleSessionChanged(t){const e=t?.detail||this._loadSession();e?.studentId&&(this.studentId=e.studentId,this.studentName=e.nama,this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||"",this._flushPending())}_storageKey(){return`hax_assignment_${this._kdMateriVal}`}_loadFromStorage(){try{const t=JSON.parse(localStorage.getItem(this._storageKey()));t&&(this._assignmentSubmitted=t.submitted===!0,this._assignmentText=t.text||"",this._assignmentLink=t.link||"")}catch{}}_saveToStorage(){try{localStorage.setItem(this._storageKey(),JSON.stringify({submitted:this._assignmentSubmitted,text:this._assignmentText,link:this._assignmentLink}))}catch{}}_isValidUrl(t){try{const e=new URL(t);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}static get PENDING_KEY(){return"assignment_pending_submissions"}static get PENDING_TTL_MS(){return 1440*60*1e3}_getPending(){try{const t=localStorage.getItem(K.PENDING_KEY);return t?JSON.parse(t):[]}catch{return[]}}_savePending(t){try{localStorage.setItem(K.PENDING_KEY,JSON.stringify(t))}catch{}}_saveDraft(t){const e=this._getPending();e.push({id:`draft-${Date.now()}`,timestamp:new Date().toISOString(),synced:!1,data:t}),this._savePending(e)}_flushPending(){if(!this.studentId)return;const t=this.forumApiUrl||this.appsScriptUrl;if(!t)return;const e=this._getPending(),a=Date.now(),i=[];for(const d of e)d.synced||a-new Date(d.timestamp).getTime()>K.PENDING_TTL_MS||fetch(t,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({...d.data,studentId:this.studentId,name:this.studentName,kdMateri:this._kdMateriVal,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||""})}).then(()=>{console.log("[assignment-component] Pending flushed")}).catch(()=>{i.push(d)});this._savePending(i)}async _submitAssignment(){if(this._submitting)return;const t=this._assignmentText.trim();if(!t&&!this._assignmentLink){globalThis.alert(this.t.emptyTask);return}if(this._assignmentLink&&!this._isValidUrl(this._assignmentLink)){globalThis.alert(this.t.invalidLink);return}this._submitting=!0;const e={action:"saveAssignment",studentId:this.studentId,name:this.studentName,sheet:this.sheetName,title:this.assignmentTitle,content:t,link:this._assignmentLink,kdMateri:this._kdMateriVal,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||""};if(!this.studentId){this._saveDraft(e),this._submitting=!1,this._assignmentSubmitted=!0,this._saveToStorage(),this._showToast("Tersimpan lokal. Login untuk mengirim tugas.");return}const a=this.forumApiUrl||this.appsScriptUrl;if(a)try{await fetch(a,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(e)})}catch(i){console.error("[assignment-component] Save assignment failed:",i)}this._assignmentSubmitted=!0,this._submitting=!1,this._saveToStorage(),this._showToast(`\u2713 ${this.t.activityAssignment}`),this._dispatchActivity("assignment",`Tugas: ${this.assignmentTitle}`)}_resetAssignment(){this._assignmentSubmitted=!1,this._assignmentText="",this._assignmentLink="",this._saveToStorage()}_dispatchActivity(t,e){globalThis.dispatchEvent(new CustomEvent(t==="assignment"?"assignment-saved":"discussion-saved",{detail:{title:this.assignmentTitle,studentId:this.studentId,kdMateri:this._kdMateriVal},bubbles:!0,composed:!0}));const a=this.appsScriptUrl;if(a&&this.studentId){const i=new URLSearchParams({action:"activity",activityType:t,description:e,name:this.studentName,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",sheet:this.sheetName,kdMateri:this._kdMateriVal,timestamp:new Date().toISOString()});fetch(`${a}?${i.toString()}`,{redirect:"follow"}).catch(()=>{})}}_showToast(t){this._toastMsg=t,setTimeout(()=>{this._toastMsg===t&&(this._toastMsg="")},3e3)}static get styles(){return[super.styles,P`
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
      `]}render(){return r`
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
          ${this._assignmentSubmitted?r`
              <button class="btn btn-success btn-sm" disabled aria-label="${this.t.submitted}">✅ ${this.t.submitted}</button>
              <button class="btn btn-danger btn-sm" @click="${this._resetAssignment}" aria-label="${this.t.resetBtn}">🔄 ${this.t.resetBtn}</button>
            `:r`
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
      ${this._toastMsg?r`<div class="toast">${this._toastMsg}</div>`:""}
    `}}globalThis.customElements.define(K.tag,K);class Z extends N(C(E)){static get tag(){return"forum-component"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},kdMateri:{type:String,attribute:"kd-materi"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},forumTopic:{type:String,attribute:"forum-topic"},viewMode:{type:String,attribute:"view-mode"},hideDelete:{type:Boolean,attribute:"hide-delete",reflect:!0},_comments:{state:!0},_activeReplyId:{state:!0},_sortMode:{state:!0},_submitting:{state:!0},_loadingComments:{state:!0},_toastMsg:{state:!0}}}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Forum Component",description:"Komponen forum diskusi bertingkat terpisah",icon:"icons:forum",color:"purple",tags:["Education","Forum"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL (Activity)",inputMethod:"textfield"},{property:"forumApiUrl",title:"Forum API URL",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet / KD Materi",inputMethod:"textfield",default:"Pertemuan"},{property:"forumTopic",title:"Topik Forum",inputMethod:"textfield",default:"Forum Diskusi"},{property:"viewMode",title:"Mode Tampilan",inputMethod:"select",options:{student:"Siswa",lecturer:"Dosen"},default:"student"},{property:"hideDelete",title:"Sembunyikan Hapus",inputMethod:"boolean"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.kdMateri="",this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.forumTopic="Forum Diskusi",this.viewMode="student",this.hideDelete=!1,this._comments=[],this._activeReplyId=null,this._sortMode="best",this._submitting=!1,this._loadingComments=!1,this._toastMsg="",this.t={...this.t,forumTitle:"Forum Diskusi",postComment:"Post Comment",posting:"Posting...",reply:"Balas",deleteBtn:"Hapus",noComments:"Belum ada komentar. Mulai diskusi!",sortBest:"Terbaik",sortNewest:"Terbaru",sortOldest:"Terlama",placeholderComment:"Tulis komentar...",placeholderReply:"Tulis balasan...",confirmDelete:"Hapus komentar ini?",activityForum:"Aktivitas forum tercatat",justNow:"Baru saja",minutesAgo:"menit lalu",hoursAgo:"jam lalu",daysAgo:"hari lalu"}}get _kdMateriVal(){return this.kdMateri||this.sheetName||"Pertemuan"}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[Z.tag]&&(t.elementList[Z.tag]=Z.haxProperties)}this._authHandler=this._onUserLogin.bind(this),globalThis.addEventListener("quiz-user-login",this._authHandler),globalThis.addEventListener("quiz-user-session-changed",this._handleSessionChanged),this._loadForumComments()}disconnectedCallback(){this._authHandler&&globalThis.removeEventListener("quiz-user-login",this._authHandler),globalThis.removeEventListener("quiz-user-session-changed",this._handleSessionChanged),super.disconnectedCallback()}_onUserLogin(t){t.detail&&(t.detail.studentId&&(this.studentId=t.detail.studentId),t.detail.nama&&(this.studentName=t.detail.nama),t.detail.nis&&(this.studentNis=t.detail.nis),t.detail.absen&&(this.studentAbsen=t.detail.absen),t.detail.kelas&&(this.studentKelas=t.detail.kelas))}_handleSessionChanged(t){const e=t?.detail;e?.studentId&&(this.studentId=e.studentId,this.studentName=e.nama,this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||"")}async _loadForumComments(){const t=this.forumApiUrl||this.appsScriptUrl;if(t){this._loadingComments=!0;try{const e=new URLSearchParams({action:"getForumComments",kdMateri:this._kdMateriVal}),a=await(await fetch(`${t}?${e.toString()}`,{redirect:"follow"})).json();a.status==="ok"&&a.comments&&(this._comments=this._buildThread(a.comments))}catch(e){console.error("[forum-component] Failed to load forum:",e)}this._loadingComments=!1}}_buildThread(t){const e={},a=[];return t.forEach(i=>{e[i.id]={...i,replies:[]}}),t.forEach(i=>{i.parentId&&e[i.parentId]?e[i.parentId].replies.push(e[i.id]):e[i.id]&&a.push(e[i.id])}),a}_getSorted(){const t=[...this._comments];return this._sortMode==="newest"?t.sort((e,a)=>new Date(a.time)-new Date(e.time)):this._sortMode==="oldest"?t.sort((e,a)=>new Date(e.time)-new Date(a.time)):t.sort((e,a)=>(a.likes||0)-(e.likes||0)),t}_setSort(t){this._sortMode=t,this._comments=[...this._comments]}async _submitMainComment(){if(this._submitting)return;const t=this.shadowRoot.querySelector("#main-input");if(!t)return;const e=t.value.trim();if(!e)return;this._submitting=!0;const a=this.forumApiUrl||this.appsScriptUrl,i={action:"saveForumComment",id:Date.now(),parentId:null,user:this.studentName||"Siswa",studentId:this.studentId||"",text:e,sheet:this.sheetName,kdMateri:this._kdMateriVal,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||""};try{const d=await(await fetch(a,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(i)})).json();d.status==="ok"&&d.data&&(this._comments=[...this._comments,{...d.data,replies:[]}]),t.value=""}catch(d){console.error("[forum-component] Submit failed:",d)}this._submitting=!1,this._sendActivity("discussion",`Forum: ${e.substring(0,50)}`)}async _submitReply(t){if(this._submitting)return;const e=this.shadowRoot.querySelector(`#reply-${t}`);if(!e)return;const a=e.value.trim();if(!a)return;this._submitting=!0;const i=this.forumApiUrl||this.appsScriptUrl,d={action:"saveForumComment",id:Date.now(),parentId:t,user:this.studentName||"Siswa",studentId:this.studentId||"",text:a,sheet:this.sheetName,kdMateri:this._kdMateriVal,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||""};try{const l=await(await fetch(i,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(d)})).json();l.status==="ok"&&l.data&&(this._comments=this._comments.map(o=>o.id===t?{...o,replies:[...o.replies,{...l.data,replies:[]}]}:o)),this._activeReplyId=null}catch(l){console.error("[forum-component] Reply failed:",l)}this._submitting=!1,this._sendActivity("discussion",`Reply: ${a.substring(0,50)}`)}async _deleteComment(t){if(!globalThis.confirm(this.t.confirmDelete))return;const e=this.forumApiUrl||this.appsScriptUrl;if(e)try{await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"deleteForumComment",id:t})});const a=new Set([t]);this._comments.forEach(i=>{i.id===t&&i.replies&&i.replies.forEach(d=>a.add(d.id))}),this._comments=this._comments.filter(i=>!a.has(i.id)).map(i=>({...i,replies:(i.replies||[]).filter(d=>!a.has(d.id))}))}catch(a){console.error("[forum-component] Delete failed:",a)}}_findAndUpdateComment(t,e,a){return t.map(i=>i.id===e?a(i):i.replies&&i.replies.length>0?{...i,replies:this._findAndUpdateComment(i.replies,e,a)}:i)}_handleLike(t){this._comments=this._findAndUpdateComment(this._comments,t,e=>{const a=!e.isLiked;return{...e,isLiked:a,likes:a?(e.likes||0)+1:(e.likes||0)-1}}),this._syncLike(t)}_syncLike(t){const e=this.forumApiUrl||this.appsScriptUrl;if(!e)return;const a=this._comments.find(i=>i.id===t);a&&fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"saveForumComment",id:t,actionType:"like",isLiked:a.isLiked})}).catch(()=>{})}_toggleReply(t){this._activeReplyId=this._activeReplyId===t?null:t}_sendActivity(t,e){globalThis.dispatchEvent(new CustomEvent("discussion-saved",{detail:{title:this.forumTopic,studentId:this.studentId,kdMateri:this._kdMateriVal},bubbles:!0,composed:!0}));const a=this.appsScriptUrl;if(a&&this.studentId){const i=new URLSearchParams({action:"activity",activityType:t,description:e,name:this.studentName,studentId:this.studentId,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",sheet:this.sheetName,kdMateri:this._kdMateriVal,timestamp:new Date().toISOString()});fetch(`${a}?${i.toString()}`,{redirect:"follow"}).catch(()=>{})}}_timeAgo(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),a=Math.floor(e/6e4);if(a<1)return this.t.justNow;if(a<60)return`${a} ${this.t.minutesAgo}`;const i=Math.floor(a/60);return i<24?`${i} ${this.t.hoursAgo}`:`${Math.floor(i/24)} ${this.t.daysAgo}`}_showToast(t){this._toastMsg=t,setTimeout(()=>{this._toastMsg===t&&(this._toastMsg="")},3e3)}static get styles(){return[super.styles,P`
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
      `]}render(){const t=this._getSorted();return r`
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
          ${this._loadingComments?r`<div style="text-align:center;padding:var(--ddd-spacing-6);color:var(--ddd-theme-secondary);">Memuat komentar...</div>`:t.length===0?r`<div style="text-align:center;padding:var(--ddd-spacing-6);color:var(--ddd-theme-secondary);">${this.t.noComments}</div>`:t.map(e=>this._renderComment(e))}
        </div>
      </section>
      ${this._toastMsg?r`<div class="toast">${this._toastMsg}</div>`:""}
    `}_renderComment(t){const e=t.isLiked;return r`
      <div class="comment-card" style="margin-bottom:var(--ddd-spacing-3);">
        <div class="comment-header">
          <div class="comment-avatar">${(t.user||"?")[0].toUpperCase()}</div>
          <div class="comment-meta">
            <span class="comment-user">${t.user}${t.kelas?r` <small>(${t.kelas})</small>`:""}</span>
            <span class="comment-time">${this._timeAgo(t.time)}</span>
          </div>
        </div>
        <div class="comment-text">${t.text}</div>
        <div class="comment-actions">
          <button class="action-btn" @click="${()=>this._handleLike(t.id)}" aria-label="${e?"Unlike":"Like"}">
            ${e?"\u2764\uFE0F":"\u{1F90D}"} ${t.likes||0}
          </button>
          <button class="action-btn" @click="${()=>this._toggleReply(t.id)}">${this.t.reply}</button>
          ${!this.hideDelete&&this.viewMode==="lecturer"?r`<button class="action-btn" @click="${()=>this._deleteComment(t.id)}" style="color:var(--ddd-theme-error);">${this.t.deleteBtn}</button>`:""}
        </div>

        ${this._activeReplyId===t.id?r`
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

        ${t.replies&&t.replies.length>0?r`
            <div class="replies-list">
              ${t.replies.map(a=>this._renderComment(a))}
            </div>
          `:""}
      </div>
    `}}globalThis.customElements.define(Z.tag,Z);class tt extends N(C(E)){static get tag(){return"lecturer-console"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},quizSelector:{type:String,attribute:"quiz-selector"},kategori:{type:String,attribute:"kategori"},roster:{type:Array},loading:{type:Boolean},generating:{type:Boolean},message:{type:String},messageType:{type:String,attribute:"message-type"},weights:{type:Object},manualUts:{type:Object},manualUas:{type:Object}}}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Lecturer Console",description:"Konsol penilaian untuk guru (rapor A3)",icon:"icons:assignment-turned-in",color:"blue",tags:["Education","Assessment"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}constructor(){super(),this.appsScriptUrl="",this.quizSelector="#quiz",this.kategori="campur",this.roster=[],this.loading=!1,this.generating=!1,this.message="",this.messageType="info",this.weights={attendanceWeight:1,ulanganHarianWeight:3,utsWeight:2,uasWeight:2,attitudeWeight:0,skillWeight:0},this.manualUts={},this.manualUas={};try{const t=JSON.parse(localStorage.getItem("a3-report-weights"));t&&typeof t=="object"&&(this.weights={...this.weights,...t})}catch{}}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[tt.tag]&&(t.elementList[tt.tag]=tt.haxProperties)}this.loadRoster()}_setMessage(t,e="info"){this.message=t,this.messageType=e}_weightsUpdated(){try{localStorage.setItem("a3-report-weights",JSON.stringify(this.weights))}catch{}}async _fetch(t,e){if(!this.appsScriptUrl)return this._setMessage("Apps Script URL belum dikonfigurasi di halaman dashboard.","error"),null;try{const a=await(await fetch(this.appsScriptUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:t,...e})})).json();return a&&a.status==="error"?(this._setMessage(a.message||"Terjadi kesalahan di server.","error"),null):a}catch(a){return this._setMessage("Gagal terhubung ke server: "+a.message,"error"),null}}async loadRoster(){this.loading=!0,this._setMessage("");const t=await this._fetch("getStudentRoster");t&&t.roster?(this.roster=t.roster,t.roster.forEach(e=>{e.uts&&(this.manualUts[e.studentId]=e.uts),e.uas&&(this.manualUas[e.studentId]=e.uas)}),this._setMessage("Roster dimuat ("+t.total+" siswa).","ok")):this.message||this._setMessage("Roster kosong atau belum ada siswa terdaftar.","warn"),this.loading=!1,this.requestUpdate()}async generateReport(){this.generating=!0,this._setMessage("Menghitung rapor...");const t=await this._fetch("generateReport",{...this.weights});t&&t.status==="ok"&&(this._setMessage(t.message+" Total "+t.totalSiswa+" siswa.","ok"),await this.loadRoster()),this.generating=!1}_getGenerator(){return this._gen||(this._gen=document.createElement("question-generator"),this.shadowRoot.appendChild(this._gen)),this._gen.appsScriptUrl=this.appsScriptUrl,this._gen.quizSelector=this.quizSelector,this._gen.kategori=this.kategori,this._gen}async generateFromTemplate(){const t=this._getGenerator(),e=await t.generateFromTemplate();return e&&e.length?this._setMessage(`Soal template lokal dimuat: ${e.length} soal (${this.kategori}).`,"ok"):this._setMessage(t.message||"Gagal memuat soal template.","error"),e}async generateFromBankSoal(){const t=this._getGenerator(),e=await t.generateFromBankSoal();return e&&e.length?this._setMessage(`Soal dari Bank Soal dimuat: ${e.length} soal (${this.kategori}).`,"ok"):this._setMessage(t.message||"Gagal memuat soal dari Bank Soal.","error"),e}async saveManualScore(t,e){const a=e==="uts"?this.manualUts[t]:this.manualUas[t],i=parseInt(a);if(isNaN(i)){this._setMessage("Skor "+e.toUpperCase()+" harus berupa angka 0-100.","warn");return}this._setMessage("Menyimpan nilai "+e.toUpperCase()+" "+t+"...");const d=await this._fetch("setManualScore",{studentId:t,kategori:e,skor:i});d&&d.status==="ok"&&(this._setMessage(d.message,"ok"),await this.loadRoster())}_onWeightChange(t){const e=t.target.getAttribute("name"),a=Math.max(0,parseInt(t.target.value)||0);this.weights={...this.weights,[e]:a},this._weightsUpdated()}static get styles(){return P`
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
    `}render(){return r`
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
        ${this.message?r`<div class="message ${this.messageType}">${this.message}</div>`:""}
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
          ${this.roster.length===0?r`<div class="empty">${this.loading?"Memuat roster...":"Belum ada data siswa. Pastikan sheet Users terisi."}</div>`:r`
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
                    ${this.roster.map(t=>r`
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
    `}}globalThis.customElements.define(tt.tag,tt);const kt=[{type:"mc",question:"Teks: 'Hujan asam terjadi ketika gas SO2 dan NOx dari pabrik bereaksi dengan uap air di atmosfer.' Pertanyaan: Dampak utama yang langsung ditimbulkan hujan asam adalah...",choices:["Tanah menjadi lebih subur","Air danau menjadi lebih asam sehingga biota terganggu","Suhu udara meningkat drastis","Angin bertiup lebih kencang"],correctIndex:1,points:1},{type:"mc",question:"Teks: 'Setelah membaca dua paragraf pertama, pembaca mengetahui bahwa tokoh utama merasa cemas sebelum ujian.' Simpulan paling tepat dari teks tersebut adalah...",choices:["Tokoh utama selalu gagal dalam ujian","Tokoh utama mengalami kecemasan menjelang ujian","Ujian membuat tokoh utama bahagia","Tokoh utama tidak pernah belajar"],correctIndex:1,points:1},{type:"mc",question:`Teks: 'Kata "konvensional" dalam kalimat berikut paling dekat maknanya dengan...' Kalimat: "Metode konvensional sudah jarang digunakan di era digital."`,choices:["Modern","Tradisional","Canggih","Otomatis"],correctIndex:1,points:1},{type:"pgk",question:"Tentukan Benar atau Salah untuk setiap pernyataan tentang teks informasi:",statements:[{text:"Ide pokok biasanya terletak di kalimat utama paragraf.",answer:!0},{text:"Kata tanya 'mengapa' digunakan untuk menanyakan tempat.",answer:!1},{text:"Kesimpulan harus didukung oleh fakta dalam teks.",answer:!0}],points:3}],xt=[{type:"mc",question:"Pak Budi membeli 3 lusin pensil. Setengahnya ia bagikan ke siswa. Berapa pensil yang dibagikan?",choices:["12","18","24","36"],correctIndex:1,points:1},{type:"mc",question:"Sebuah kelas memiliki 30 siswa. 40% di antaranya laki-laki. Banyak siswa perempuan adalah...",choices:["12 siswa","15 siswa","18 siswa","20 siswa"],correctIndex:2,points:1},{type:"matching",question:"Jodohkan bangun datar dengan banyak sisinya:",leftItems:["Segitiga","Persegi","Lingkaran"],rightItems:["3 sisi","4 sisi","Tanpa sisi"],correctPairs:{0:0,1:1,2:2},points:3},{type:"shortAnswer",question:"Berapakah 15% dari 200?",acceptedAnswers:["30","tiga puluh"],points:1},{type:"shortAnswer",question:"Tentukan KPK dari 4 dan 6!",acceptedAnswers:["12"],points:1},{type:"pgk",question:"Tentukan Benar atau Salah untuk setiap pernyataan:",statements:[{text:"7 adalah bilangan prima.",answer:!0},{text:"Semua bilangan genap habis dibagi 4.",answer:!1},{text:"Hasil 9 \xD7 8 = 72.",answer:!0}],points:3},{type:"mc",question:"Sebuah bak mandi berisi 240 liter air. Setiap menit air berkurang 8 liter. Berapa menit hingga bak kosong?",choices:["20 menit","25 menit","30 menit","40 menit"],correctIndex:2,points:1}],Zt={type:"mc",question:"Pilih DUA pernyataan yang benar tentang kubus:",choices:["Memiliki 6 sisi berbentuk persegi","Memiliki 8 titik sudut","Memiliki 10 rusuk","Semua sisinya berbentuk segitiga"],correctAnswers:[0,1],points:2};class et extends N(C(E)){static get tag(){return"question-generator"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},kategori:{type:String,attribute:"kategori"},quizSelector:{type:String,attribute:"quiz-selector"},loading:{type:Boolean},message:{type:String},messageType:{type:String,attribute:"message-type"}}}get kdMateri(){const t=this._getQuizElement();return t?.sheetName||t?.kdMateri||"Pertemuan"}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Question Generator",description:"Generator soal AKM campuran (template lokal & bank soal)",icon:"icons:playlist-add",color:"teal",tags:["Education","Assessment","Content"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield"},{property:"kategori",title:"Kategori Soal",inputMethod:"select",options:{campur:"Campuran (Literasi + Numerasi)",literasi:"Literasi",numerasi:"Numerasi"}},{property:"quizSelector",title:"Selektor Target Kuis",description:"CSS selector elemen explode-quiz tempat soal diisi (mis. #quiz)",inputMethod:"textfield"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_screen"]}}}constructor(){super(),this.appsScriptUrl="",this.kategori="campur",this.quizSelector="#quiz",this.loading=!1,this.message="",this.messageType="info",this.t={title:"Generator Soal AKM",templateBtn:"\u2728 Generate Soal Template Lokal",bankBtn:"\u{1F5C2}\uFE0F Generate Soal dari Bank Soal",ok:"ok",noQuiz:"Elemen kuis tidak ditemukan (pastikan selector benar).",noUrl:"Apps Script URL belum diisi.",bankEmpty:"Bank soal kosong untuk kategori tersebut.",bankError:"Gagal mengambil soal dari bank soal."}}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[et.tag]&&(t.elementList[et.tag]=et.haxProperties)}}_setMessage(t,e="info"){this.message=t,this.messageType=e}_getTemplateBank(){return this.kategori==="literasi"?[...kt]:this.kategori==="numerasi"?[...xt]:[...kt,...xt]}_shuffleArray(t){const e=[...t];for(let a=e.length-1;a>0;a--){const i=Math.floor(Math.random()*(a+1));[e[a],e[i]]=[e[i],e[a]]}return e}async _fetch(t,e){if(!this.appsScriptUrl)return this._setMessage(this.t.noUrl,"error"),null;try{return await(await fetch(this.appsScriptUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:t,...e})})).json()}catch{return this._setMessage(this.t.bankError,"error"),null}}_getQuizElement(){let t=this.getRootNode();for(;t;){const i=t.querySelector?t.querySelector(this.quizSelector):null;if(i)return i;t=t.host?t.host.getRootNode():null}const e=document.querySelector(this.quizSelector);if(e)return e;const a=document.querySelectorAll("explode-quiz");return a.length>0?a[0]:null}applyToQuiz(t){const e=this._getQuizElement();return!e||typeof e.loadQuestions!="function"?(this._setMessage(this.t.noQuiz,"error"),!1):(e.loadQuestions(t),this.dispatchEvent(new CustomEvent("questions-generated",{bubbles:!0,composed:!0,detail:{questions:t,source:"template",kategori:this.kategori}})),!0)}async generateFromTemplate(){this.loading=!0,this._setMessage("");let t=this._getTemplateBank();return this.kategori==="campur"?(t=this._shuffleArray(t),t.push(Zt),t=this._shuffleArray(t)):t=this._shuffleArray(t),await new Promise(e=>setTimeout(e,50)),this.loading=!1,this.applyToQuiz(t)&&this._setMessage(`Soal template lokal dimuat: ${t.length} soal (${this.kategori}).`,"ok"),t}async generateFromBankSoal(){this.loading=!0,this._setMessage("");const t=await this._fetch("getBankSoal",{kategori:this.kategori});if(this.loading=!1,!t||t.status!=="ok"||!Array.isArray(t.questions))return this._setMessage(t?.message||this.t.bankEmpty,"error"),[];const e=t.questions.map(a=>this._mapBankRow(a)).filter(Boolean);return e.length===0?(this._setMessage(this.t.bankEmpty,"error"),[]):(this.applyToQuiz(e)&&this._setMessage(`Soal dari Bank Soal dimuat: ${e.length} soal (${this.kategori}).`,"ok"),e)}_mapBankRow(t){if(!t||typeof t!="object")return null;if(t.type&&t.question)return t;if(typeof t.Detail=="string"||typeof t.detail=="string"){const e=typeof t.Detail=="string"?t.Detail:t.detail,a={type:t.Tipe||t.tipe||"mc",question:t.Soal||t.question,points:t.Poin||t.points||1};(t.Gambar||t.image)&&(a.image=t.Gambar||t.image);try{Object.assign(a,JSON.parse(e))}catch{return null}return a}if(t.Soal||t.question){const e={type:(t.Tipe||t.tipe||"mc").toLowerCase(),question:t.Soal||t.question,points:t.Poin||t.points||1};(t.Gambar||t.image)&&(e.image=t.Gambar||t.image);const a=t.Detail||t.detail;return typeof a=="object"&&a&&Object.assign(e,a),e}return null}render(){return r`
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
        ${this.message?r`<div class="gen-message ${this.messageType}">${this.message}</div>`:""}
      </div>
    `}static get styles(){return[super.styles,P`
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
      `]}}customElements.define(et.tag,et);class at extends N(C(E)){static get tag(){return"quiz-dashboard-lite2"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},kdMateri:{type:String,attribute:"kd-materi",reflect:!0},viewMode:{type:String,attribute:"view-mode"},quizTabHidden:{type:Boolean,attribute:"quiz-tab-hidden",reflect:!0},questions:{type:Array},_spreadsheetId:{state:!0},_activeTab:{state:!0},_successMsg:{state:!0},_errorMsg:{state:!0},_user:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.kdMateri="",this.viewMode="student",this.quizTabHidden=!1,this.questions=[],this._user=null,this._spreadsheetId="",this._activeTab=0,this._successMsg="",this._errorMsg="",this.t={...this.t,title:"Kuis Interaktif & Kehadiran",subtitle:"Sistem Belajar dan Latihan Kuis dengan Aktivitas Otomatis",tabQuiz:"\u{1F4DD} Ambil Kuis",tabAttendance:"\u{1F4C5} Kehadiran & Aktivitas",tabGuide:"\u{1F4D6} Panduan",tabNilai:"\u{1F4CA} Daftar Skor",welcome:"Selamat datang",dataRecorded:"Data kuis & aktivitas akan tercatat atas nama Anda"}}connectedCallback(){if(super.connectedCallback(),this._onUserLoginBound=this._onUserLogin.bind(this),this._onUserLogoutBound=this._onUserLogout.bind(this),globalThis.addEventListener("quiz-user-login",this._onUserLoginBound),globalThis.addEventListener("quiz-user-logout",this._onUserLogoutBound),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[at.tag]&&(t.elementList[at.tag]=at.haxProperties)}}disconnectedCallback(){globalThis.removeEventListener("quiz-user-login",this._onUserLoginBound),globalThis.removeEventListener("quiz-user-logout",this._onUserLogoutBound),super.disconnectedCallback()}_onUserLogin(t){this._user=t.detail,this._successMsg=`${this.t.welcome}, ${this._user.nama}! ${this.t.dataRecorded}.`,setTimeout(()=>{this._successMsg=""},4e3)}_onUserLogout(){this._user=null,this._successMsg="Anda telah keluar.",setTimeout(()=>{this._successMsg=""},3e3)}_onQuizSaved(t){globalThis.dispatchEvent(new CustomEvent("quiz-saved",{detail:t.detail,bubbles:!0,composed:!0})),this._successMsg=`Skor ${t.detail.name} sebesar ${t.detail.score}% berhasil disimpan!`,setTimeout(()=>{this._successMsg=""},4e3)}_onQuizQuestionsChanged(t){const e=t&&t.detail&&t.detail.questions;if(Array.isArray(e)){this.questions=e;try{this.setAttribute("questions",JSON.stringify(e))}catch{}}}_onQuestionsGenerated(){this._activeTab=1}_simReading(){globalThis.dispatchEvent(new CustomEvent("reading-saved",{detail:{title:`Materi ${this.sheetName}`},bubbles:!0,composed:!0})),globalThis.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}static get styles(){return[super.styles,P`
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
      `]}render(){return r`
      <div class="header">
        <div class="title-section">
          <h1>${this.t.title}</h1>
          <p>${this.t.subtitle}</p>
        </div>
        <span class="badge">HAXcms Ready</span>
      </div>
      ${this._successMsg?r`<div class="msg msg-success">${this._successMsg}</div>`:""}
      
      <quiz-user-auth .appsScriptUrl="${this.appsScriptUrl}"></quiz-user-auth>
      
      <div class="tab-container">
        <button class="tab-btn ${this._activeTab===0?"active":""}" @click="${()=>this._activeTab=0}">${this.t.tabGuide}</button>
        ${this.quizTabHidden?"":r`<button class="tab-btn ${this._activeTab===1?"active":""}" @click="${()=>this._activeTab=1}">${this.t.tabQuiz}</button>`}
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

      ${this.quizTabHidden?"":r`<explode-quiz
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
        ${this._activeTab===0?r`
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
        `:this._activeTab===2?r`
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
        `:r`
          <div style="margin-top: var(--ddd-spacing-6);">
            ${this.viewMode==="lecturer"?r`
                  <lecturer-console
                    .appsScriptUrl="${this.appsScriptUrl}"
                    .quizSelector="${"#quiz"}"
                    @questions-generated="${this._onQuestionsGenerated}"></lecturer-console>
                `:r`
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
    `}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Quiz Dashboard Lite",description:"Dashboard kuis modular dengan attendance tracking, login siswa, dan integrasi Google Sheets",icon:"icons:quiz",color:"purple",tags:["Education","Assessment","Interactive"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield",description:"URL Google Apps Script Web App"},{property:"forumApiUrl",title:"Forum Apps Script URL (Opsional)",inputMethod:"textfield",description:"URL Web App code-forum-tugas.gs \u2014 untuk kriteria Mengirim Komentar Forum & heatmap"},{property:"sheetName",title:"Nama Pertemuan",inputMethod:"textfield",default:"Pertemuan"},{property:"viewMode",title:"Mode Tampilan",inputMethod:"select",options:{student:"View Mahasiswa",lecturer:"Mode Dosen (Console)"},default:"student"},{property:"quizTabHidden",title:"Sembunyikan Tab Kuis",inputMethod:"boolean",default:!1}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_activeTab","_successMsg","_errorMsg","_user","_spreadsheetId"]}}}}globalThis.customElements.define(at.tag,at),(function(){const x="(prefers-color-scheme: dark)",t="a3-dark-mode";function e(i){document.body.classList.toggle("dark-mode",i)}function a(){const i=localStorage.getItem(t);return i==="light"||i==="dark"?i==="dark":window.matchMedia(x).matches}try{e(a())}catch{const i=window.matchMedia(x);e(i.matches)}try{window.matchMedia(x).addEventListener("change",i=>e(i.matches))}catch{}document.addEventListener("a3-dark-mode-toggle",i=>{const d=!!(i.detail&&i.detail.dark);try{localStorage.setItem(t,d?"dark":"light")}catch{}e(d)})})();class it extends N(C(E)){static get tag(){return"student-dashboard"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},studentName:{type:String,attribute:"student-name",reflect:!0},_activeTab:{state:!0},_loading:{state:!0},_error:{state:!0},_leaderboard:{state:!0},_student:{state:!0},_rawKuis:{state:!0},_rawAktivitas:{state:!0},_pertemuanList:{state:!0},_pertemuanDetail:{state:!0},_loaded:{state:!0}}}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Student Dashboard",description:"Dashboard siswa untuk melihat nilai, leaderboard, dan aktivitas dari Google Sheets",icon:"icons:dashboard",color:"purple",tags:["Education","Dashboard","Gradebook"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",description:"URL Google Apps Script Web App untuk fetch data",inputMethod:"textfield",required:!0},{property:"studentName",title:"Nama Siswa (opsional)",description:"Nama siswa default (bisa diubah di form setup)",inputMethod:"textfield"}],advanced:[]},saveOptions:{unsetAttributes:["_activeTab","_loading","_error","_leaderboard","_student","_rawKuis","_rawAktivitas","_pertemuanList","_pertemuanDetail","_loaded"]}}}constructor(){super(),this.appsScriptUrl="",this.studentName="",this._activeTab="leaderboard",this._loading=!1,this._error="",this._leaderboard=[],this._student=null,this._rawKuis=[],this._rawAktivitas=[],this._pertemuanList=[],this._pertemuanDetail=null,this._loaded=!1,this.t={...this.t,title:"Dashboard Siswa",subtitle:"Lihat nilai & aktivitas dari Google Sheets",setupTitle:"Hubungkan ke Google Sheets",setupDesc:"Masukkan URL Apps Script Web App dan nama Anda untuk melihat data.",urlLabel:"URL Apps Script",nameLabel:"Nama Anda",urlPlaceholder:"https://script.google.com/macros/s/.../exec",namePlaceholder:"Nama siswa...",loadBtn:"Tampilkan Data",loading:"Mengambil data dari Google Sheets...",tabLeaderboard:"Leaderboard",tabKuis:"Kuis Saya",tabAktivitas:"Aktivitas Saya",tabPertemuan:"Pertemuan",noData:"Belum ada data.",noKuis:"Belum ada data kuis. Kerjakan kuis di halaman pertemuan!",noAktivitas:"Belum ada log aktivitas. Aktivitas otomatis tercatat saat kamu scroll atau klik materi!",caraKerja:"Cara Kerja",cara1:"Masukkan URL Apps Script \u2014 sama dengan yang dipakai di dashboard kuis",cara2:"Masukkan nama Anda \u2014 data dicocokkan dengan nama di sheet",cara3:"Klik Tampilkan \u2014 fetch data dari Apps Script API GET endpoint",cara4:"Jelajahi tab: Leaderboard, Kuis Saya, Aktivitas Saya, Pertemuan"}}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[it.tag]&&(t.elementList[it.tag]=it.haxProperties)}}disconnectedCallback(){super.disconnectedCallback()}get _url(){return this.appsScriptUrl||""}get _name(){return this.studentName||""}_getStorage(t,e){try{const a=localStorage.getItem(t);return a?JSON.parse(a):e}catch{return e}}_setStorage(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}_setupUrl(t){t.preventDefault();const e=this.shadowRoot.querySelector("#url-input"),a=this.shadowRoot.querySelector("#name-input"),i=e?e.value.trim():"",d=a?a.value.trim():"";if(!i){this._error="Masukkan URL Apps Script terlebih dahulu.";return}if(!d){this._error="Masukkan nama Anda.";return}this.appsScriptUrl=i,this.studentName=d,this._setStorage("apps_script_url",i),this._setStorage("student_name",d),this._error="",this._loadData()}async _loadData(){const t=this._url,e=this._name;if(!(!t||!e)){this._loading=!0,this._error="";try{const a=t+(t.includes("?")?"&":"?"),[i,d]=await Promise.all([fetch(a+"action=leaderboard"),fetch(a+"action=summary&name="+encodeURIComponent(e))]),l=await i.json(),o=await d.json();let f=null;o.status==="ok"&&o.data?f=o.data:o.status==="not_found"&&o.data&&(f={Nama:e,"Total Kuis":o.data.totalKuis||0,"Rata-rata Skor":o.data.rataSkor||0,"Skor Tertinggi":o.data.skorTertinggi||0,"Skor Terendah":0,"Total Aktivitas":o.data.totalAktivitas||0,Reading:0,"Quiz Activity":0,Discussion:0,Download:0,"Jumlah Pertemuan":0},o.data.kuis&&o.data.kuis.forEach(u=>{u.score>(parseInt(f["Skor Tertinggi"])||0)&&(f["Skor Tertinggi"]=u.score),u.score<(parseInt(f["Skor Terendah"])||100)&&(f["Skor Terendah"]=u.score)}),o.data.aktivitas&&o.data.aktivitas.forEach(u=>{const y=u.type||"";y==="reading"?f.Reading=(parseInt(f.Reading)||0)+1:y==="quiz"?f["Quiz Activity"]=(parseInt(f["Quiz Activity"])||0)+1:y==="discussion"?f.Discussion=(parseInt(f.Discussion)||0)+1:y==="download"&&(f.Download=(parseInt(f.Download)||0)+1)})),this._leaderboard=l.status==="ok"?l.leaderboard:[],this._student=f,this._rawKuis=o.data?o.data.kuis||[]:[],this._rawAktivitas=o.data?o.data.aktivitas||[]:[],this._loaded=!0}catch(a){this._error="Gagal mengambil data. Pastikan URL Apps Script benar dan sudah di-deploy sebagai Web App dengan akses 'Anyone'.",console.error("[student-dashboard]",a)}this._loading=!1}}async _loadPertemuan(t){const e=this._url,a=this._name;if(e){this._pertemuanDetail={loading:!0,pertemuan:t,quiz:[],aktivitas:[]};try{const i=e+(e.includes("?")?"&":"?"),[d,l]=await Promise.all([fetch(i+"action=pertemuan&sheet="+encodeURIComponent(t)),fetch(i+"action=aktivitas&sheet="+encodeURIComponent(t)+"&name="+encodeURIComponent(a))]),o=await d.json(),f=await l.json();this._pertemuanDetail={loading:!1,pertemuan:t,quiz:o.siswa||[],aktivitas:f.aktivitas||[]}}catch(i){this._pertemuanDetail={loading:!1,pertemuan:t,quiz:[],aktivitas:[],error:"Gagal memuat data pertemuan."},console.error("[student-dashboard] pertemuan fetch failed:",i)}}}async _loadPertemuanList(){const t=this._url;if(t)try{const e=t+(t.includes("?")?"&":"?"),a=(await(await fetch(e+"action=list")).json()).pertemuan||[],i={},d=[];a.forEach(l=>{const o=l.replace(" - Kuis","").replace(" - Aktivitas","");i[o]||(i[o]=!0,d.push(o))}),this._pertemuanList=d}catch(e){console.error("[student-dashboard] list fetch failed:",e)}}_setTab(t){this._activeTab=t,t==="pertemuan"&&this._pertemuanList.length===0&&this._loadPertemuanList()}_rankBadge(t){return t===0?r`<span class="rank-badge rank-1">1</span>`:t===1?r`<span class="rank-badge rank-2">2</span>`:t===2?r`<span class="rank-badge rank-3">3</span>`:r`<span class="rank-badge">${t+1}</span>`}_typeEmoji(t){return{reading:"\u{1F4D6}",quiz:"\u{1F4DD}",discussion:"\u{1F4AC}",download:"\u{1F4E5}"}[t]||"\u{1F4CC}"}static get styles(){return[super.styles,P`
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
      `]}render(){return r`
      ${this._loaded?this._renderDashboard():this._renderSetup()}
    `}_renderSetup(){return r`
      <div class="setup-card">
        <h2>${this.t.setupTitle}</h2>
        <p>${this.t.setupDesc}</p>
        <form @submit=${this._setupUrl}>
          <div class="form-row">
            <div class="form-group">
              <label for="url-input">${this.t.urlLabel}</label>
              <input id="url-input" type="text" placeholder="${this.t.urlPlaceholder}" .value=${this._getStorage("apps_script_url","")} />
            </div>
            <div class="form-group" style="min-width:160px;flex:0.5;">
              <label for="name-input">${this.t.nameLabel}</label>
              <input id="name-input" type="text" placeholder="${this.t.namePlaceholder}" .value=${this._getStorage("student_name","")} />
            </div>
            <button class="btn" type="submit">${this.t.loadBtn}</button>
          </div>
        </form>
        ${this._error?r`<div class="error-msg">${this._error}</div>`:""}
      </div>
    `}_renderDashboard(){if(this._loading)return r`<div class="loading"><div class="spinner"></div><p>${this.t.loading}</p></div>`;const t=this._student||{};return r`
      <div class="stats-grid">
        <div class="stat-card"><div class="label">Rata-rata Skor</div><div class="val">${t["Rata-rata Skor"]||0}%</div></div>
        <div class="stat-card"><div class="label">Skor Tertinggi</div><div class="val">${t["Skor Tertinggi"]||0}%</div></div>
        <div class="stat-card"><div class="label">Total Kuis</div><div class="val">${t["Total Kuis"]||0}</div></div>
        <div class="stat-card"><div class="label">Aktivitas</div><div class="val">${t["Total Aktivitas"]||0}x</div></div>
        <div class="stat-card highlight"><div class="label">Pertemuan</div><div class="val">${t["Jumlah Pertemuan"]||0}</div></div>
      </div>
      <div class="tabs">
        <button class="tab-btn ${this._activeTab==="leaderboard"?"active":""}" @click=${()=>this._setTab("leaderboard")}>🏆 ${this.t.tabLeaderboard}</button>
        <button class="tab-btn ${this._activeTab==="kuis"?"active":""}" @click=${()=>this._setTab("kuis")}>📝 ${this.t.tabKuis}</button>
        <button class="tab-btn ${this._activeTab==="aktivitas"?"active":""}" @click=${()=>this._setTab("aktivitas")}>📅 ${this.t.tabAktivitas}</button>
        <button class="tab-btn ${this._activeTab==="pertemuan"?"active":""}" @click=${()=>this._setTab("pertemuan")}>📚 ${this.t.tabPertemuan}</button>
      </div>
      <div class="tab-content">
        ${this._activeTab==="leaderboard"?this._renderLeaderboard():""}
        ${this._activeTab==="kuis"?this._renderKuis():""}
        ${this._activeTab==="aktivitas"?this._renderAktivitas():""}
        ${this._activeTab==="pertemuan"?this._renderPertemuan():""}
      </div>
    `}_renderLeaderboard(){return this._leaderboard.length===0?r`<div class="empty">${this.t.noData}</div>`:r`
      <table class="dtable">
        <thead><tr><th>#</th><th>Nama</th><th>Rata-rata</th><th>Tertinggi</th><th>Kuis</th><th>Aktivitas</th><th>Pertemuan</th></tr></thead>
        <tbody>
          ${this._leaderboard.map((t,e)=>r`
            <tr>
              <td>${this._rankBadge(e)}</td>
              <td style="font-weight:600;">${t.Nama||""}</td>
              <td>${t["Rata-rata Skor"]||0}%</td>
              <td>${t["Skor Tertinggi"]||0}</td>
              <td>${t["Total Kuis"]||0}</td>
              <td>${t["Total Aktivitas"]||0}</td>
              <td>${t["Jumlah Pertemuan"]||0}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}_renderKuis(){return this._rawKuis.length===0?r`<div class="empty">${this.t.noKuis}</div>`:r`
      <table class="dtable">
        <thead><tr><th>Pertemuan</th><th>Skor</th><th>Status</th><th>Waktu</th></tr></thead>
        <tbody>
          ${this._rawKuis.map(t=>r`
            <tr>
              <td style="font-weight:600;">${t.pertemuan||"-"}</td>
              <td style="font-weight:bold;color:var(--ddd-theme-primary);">${t.score}%</td>
              <td>${t.status==="LULUS"?r`<span class="badge-lulus">LULUS</span>`:r`<span class="badge-gagal">TIDAK LULUS</span>`}</td>
              <td style="font-size:var(--ddd-font-size-3xs);color:var(--ddd-theme-secondary);">${t.timestamp||"-"}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}_renderAktivitas(){return this._rawAktivitas.length===0?r`<div class="empty">${this.t.noAktivitas}</div>`:r`
      <table class="dtable">
        <thead><tr><th>Pertemuan</th><th>Tipe</th><th>Deskripsi</th><th>Waktu</th></tr></thead>
        <tbody>
          ${this._rawAktivitas.map(t=>r`
            <tr>
              <td style="font-weight:600;">${t.pertemuan||"-"}</td>
              <td>${this._typeEmoji(t.type)} ${t.type||"activity"}</td>
              <td>${t.desc||"-"}</td>
              <td style="font-size:var(--ddd-font-size-3xs);color:var(--ddd-theme-secondary);">${t.timestamp||"-"}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}_renderPertemuan(){return r`
      <div class="pertemuan-grid">
        ${this._pertemuanList.map(t=>r`
          <button class="pertemuan-btn" @click=${()=>this._loadPertemuan(t)}>📅 ${t}</button>
        `)}
      </div>
      ${this._pertemuanDetail?this._renderPertemuanDetail():""}
    `}_renderPertemuanDetail(){const t=this._pertemuanDetail;if(t.loading)return r`<div class="loading"><div class="spinner"></div><p>Memuat data ${t.pertemuan}...</p></div>`;const e=a=>a&&this._name&&a.trim().toLowerCase()===this._name.trim().toLowerCase();return r`
      <h4 style="color:var(--ddd-theme-primary);margin:var(--ddd-spacing-4) 0 var(--ddd-spacing-3) 0;">📝 Hasil Kuis — ${t.pertemuan}</h4>
      ${t.quiz.length===0?r`<p style="color:var(--ddd-theme-secondary);">Belum ada data kuis di pertemuan ini.</p>`:r`
          <table class="dtable">
            <thead><tr><th>Nama</th><th>Skor</th><th>Status</th></tr></thead>
            <tbody>
              ${t.quiz.map(a=>r`
                <tr ${e(a.nama)?'style="background:var(--ddd-theme-polaris-surface-hover);"':""}>
                  <td style="font-weight:600;">${a.nama}${e(a.nama)?" \u{1F448}":""}</td>
                  <td style="font-weight:bold;color:var(--ddd-theme-primary);">${a.skor}%</td>
                  <td>${a.status==="LULUS"?r`<span class="badge-lulus">LULUS</span>`:r`<span class="badge-gagal">TIDAK LULUS</span>`}</td>
                </tr>
              `)}
            </tbody>
          </table>
        `}
      <h4 style="color:var(--ddd-theme-primary);margin:var(--ddd-spacing-5) 0 var(--ddd-spacing-3) 0;">📅 Aktivitas Saya — ${t.pertemuan}</h4>
      ${t.aktivitas.length===0?r`<p style="color:var(--ddd-theme-secondary);">Belum ada log aktivitas di pertemuan ini.</p>`:r`
          <div style="display:flex;gap:var(--ddd-spacing-3);flex-wrap:wrap;margin-bottom:var(--ddd-spacing-4);">
            ${(()=>{const a={};return t.aktivitas.forEach(i=>{a[i.type]=(a[i.type]||0)+1}),Object.entries(a).map(([i,d])=>r`
                <div style="background:var(--ddd-theme-polaris-surface-hover);border-radius:var(--ddd-radius-md);padding:var(--ddd-spacing-2) var(--ddd-spacing-4);text-align:center;font-size:var(--ddd-font-size-xs);">
                  <div style="font-size:20px;">${this._typeEmoji(i)}</div>
                  <div style="font-weight:bold;">${d}</div>
                  <div style="font-size:var(--ddd-font-size-3xs);color:var(--ddd-theme-secondary);">${i}</div>
                </div>
              `)})()}
          </div>
        `}
      ${t.error?r`<div class="error-msg">${t.error}</div>`:""}
    `}}globalThis.customElements.define(it.tag,it)});export default te();
