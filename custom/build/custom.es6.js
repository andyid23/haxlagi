var Bt=(k,t)=>()=>{try{return t||k((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};import{css as Wt,html as R}from"@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";import{PolarisFlexTheme as jt}from"@haxtheweb/polaris-theme/lib/polaris-flex-theme.js";import"@haxtheweb/haxcms-elements/lib/ui-components/blocks/site-children-block.js";import{DDDSuper as B}from"@haxtheweb/d-d-d/d-d-d.js";import{LitElement as q,css as N,html as o}from"lit";import{I18NMixin as W}from"@haxtheweb/i18n-manager/lib/I18NMixin.js";var Ft=Bt((ee,O)=>{class at extends jt{static get styles(){return[super.styles,Wt`
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
      `]}renderHeaderSlot(){return R``}renderSideBar(){return R`
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
    `}renderFooterContactInformation(){return R``}renderFooterSecondarySlot(){return R``}renderFooterPrimarySlot(){return R``}static get tag(){return"custom-haxquiz-theme"}constructor(){super()}}if(customElements.define(at.tag,at),typeof customElements<"u"){class k extends HTMLElement{static get observedAttributes(){return["message","type","duration","visible"]}constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._message="",this._type="info",this._duration=5e3,this._visible=!1,this._timeoutId=null,this.render(),this._setupEventListeners()}get message(){return this._message}set message(e){this._message=e||"",this._renderContent(),this.setAttribute("message",this._message)}get type(){return this._type}set type(e){this._type=e||"info",this._renderContent(),this.setAttribute("type",this._type)}get duration(){return this._duration}set duration(e){this._duration=parseInt(e)||5e3,this.setAttribute("duration",this._duration.toString())}get visible(){return this._visible}set visible(e){this._visible=e===!0||e==="true"||e==="",this._updateVisibility(),this.setAttribute("visible",this._visible?"":"false")}connectedCallback(){this._updateVisibility()}disconnectedCallback(){this._clearTimeout()}attributeChangedCallback(e,i,s){if(i!==s)switch(e){case"message":this.message=s;break;case"type":this.type=s;break;case"duration":this.duration=s;break;case"visible":this.visible=s;break}}_setupEventListeners(){this._shadow.addEventListener("click",e=>{e.target.classList.contains("close-btn")&&this.hide()})}_renderContent(){const e={info:"notif-info",success:"notif-success",warning:"notif-warning",error:"notif-error"}[this._type]||"notif-info";this._shadow.innerHTML=`
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
      `}_updateVisibility(){const e=this._shadow.querySelector(".notification");e&&e.classList.toggle("show",this._visible),this._visible&&this._timeoutId===null&&this._duration>0&&(this._timeoutId=setTimeout(()=>{this.hide()},this._duration))}_clearTimeout(){this._timeoutId&&(clearTimeout(this._timeoutId),this._timeoutId=null)}show(){this._clearTimeout(),this._visible=!0,this._updateVisibility(),this._duration>0&&(this._timeoutId=setTimeout(()=>{this.hide()},this._duration)),this.dispatchEvent(new CustomEvent("notif-show",{bubbles:!0,composed:!0,detail:{message:this._message,type:this._type}}))}hide(){this._clearTimeout(),this._visible=!1,this._updateVisibility(),this.dispatchEvent(new CustomEvent("notif-hide",{bubbles:!0,composed:!0,detail:{message:this._message,type:this._type}}))}render(){this._renderContent()}}customElements.define("notif-element",k)}let rt=class extends W(B(q)){static get tag(){return"todo-list"}static get properties(){return{...super.properties,tasks:{type:Array,attribute:"tasks",reflect:!0,converter:{fromAttribute(t){if(t==null||t==="")return;if(Array.isArray(t)||typeof t=="object")return t;const e=String(t).trim();if(!(!e||e==="[object Object]"||e==="undefined"||e==="null")&&(e.startsWith("[")||e.startsWith("{")))try{const i=JSON.parse(e);return Array.isArray(i)?i:i&&typeof i=="object"&&Array.isArray(i.tasks)?i.tasks:void 0}catch{return}},toAttribute(t){if(!Array.isArray(t))return null;try{return JSON.stringify(t)}catch{return null}}}},editable:{type:Boolean,attribute:!0,reflect:!0},editing:{type:Boolean,attribute:!0,reflect:!0},_validationError:{type:String},_screen:{state:!0},_tempTasks:{state:!0},_editingIndex:{state:!0},_tempTaskText:{state:!0},_editorOrigin:{state:!0}}}constructor(){super(),this.tasks=[],this.editable=!1,this.editing=!1,this._validationError="",this._screen="list",this._tempTasks=[],this._editingIndex=-1,this._tempTaskText="",this._editorOrigin="list",this.t={addTask:"Add Task",inputPlaceholder:"Enter a new task...",deleteTask:"Delete task",emptyMessage:"No tasks yet. Add one above!",taskCompleted:"Mark as incomplete",taskIncomplete:"Mark as complete",validationErrorMinLength:"Task must be at least 3 characters",validationErrorMaxLength:"Task must be no more than 50 characters",editTitle:"Edit Task List",closeEditor:"Close Editor",addTaskBtnEditor:"Add Task",editTaskBtn:"Edit",saveEditBtn:"Save",cancelEditBtn:"Cancel",saveAllBtn:"Save & Exit",cancelAllBtn:"Cancel",emptyTaskError:"Task cannot be empty",ariaEditTitle:"Task list editor panel",ariaOpenEditor:"Open task list editor",ariaCloseEditor:"Close task list editor",ariaTaskInputEditor:"Editor task input",ariaTasksListEditor:"Editable task list",ariaEditTask:"Edit this task",ariaDeleteTask:"Delete this task",ariaSaveAll:"Save all task changes",ariaCancelAll:"Cancel all task changes"}}updated(t){super.updated&&super.updated(t),Array.isArray(this.tasks)||(this.tasks=[])}get _inHaxEditor(){return!!(globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"&&globalThis.HaxStore.requestAvailability().editMode)}static get styles(){return[super.styles,N`
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
      `]}render(){return this._screen==="editor"?this._renderEditorScreen():o`
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

      ${this._validationError?o`<p id="task-input-error" role="alert" class="validation-error">
            ${this._validationError}
          </p>`:""}
      ${this.tasks.length===0?o`<p class="empty-message">${this.t.emptyMessage}</p>`:o`
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
    `}_renderEditorScreen(){return o`
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
          ${this._tempTasks.map((t,e)=>o`
              <div class="question-card">
                ${this._editingIndex===e?o`
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
                    `:o`
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
    `}_renderTask(t){return o`
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
    `}_handleInputKeydown(t){t.key==="Enter"&&this._addTask()}_handleAddClick(){this._addTask()}_handleInputChange(t){t.target.value.trim().length===0&&(this._validationError="")}_handleDelete(t){this.tasks=this.tasks.filter(e=>e.id!==t)}_handleToggleComplete(t,e){this.tasks=this.tasks.map(i=>i.id===t?{...i,completed:e}:i)}_addTask(){const t=this.shadowRoot.querySelector("#task-input"),e=t.value.trim();if(!e){this._validationError="";return}if(e.length<3){this._validationError=this.t.validationErrorMinLength;return}if(e.length>50){this._validationError=this.t.validationErrorMaxLength;return}this._validationError="";const i={id:typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now(),text:e,completed:!1};this.tasks=[...this.tasks,i],t.value="",t.focus()}_openEditor(){this._screen==="list"&&(this.editing||(this.editing=!0,this._editingIndex=-1,this._tempTaskText="",this._tempTasks=JSON.parse(JSON.stringify(this.tasks||[])),this._editorOrigin="list",this._screen="editor"))}_addTaskEditor(){const t=(this._tempTaskText||"").trim();if(t){if(t.length<3){this._validationError=this.t.validationErrorMinLength;return}if(t.length>50){this._validationError=this.t.validationErrorMaxLength;return}this._validationError="",this._tempTasks=[...this._tempTasks,{id:typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now(),text:t,completed:!1}],this._tempTaskText=""}}_deleteTaskEditor(t){this._tempTasks=this._tempTasks.filter((e,i)=>i!==t),this._editingIndex===t?(this._editingIndex=-1,this._tempTaskText=""):this._editingIndex>t&&(this._editingIndex=this._editingIndex-1)}_toggleCompleteEditor(t,e){this._tempTasks=this._tempTasks.map((i,s)=>s===t?{...i,completed:e}:i)}_startEditTask(t){this._editingIndex=t,this._tempTaskText=this._tempTasks[t]?.text||""}_saveEditTask(){const t=(this._tempTaskText||"").trim();if(!t){this._validationError=this.t.emptyTaskError;return}if(t.length<3){this._validationError=this.t.validationErrorMinLength;return}if(t.length>50){this._validationError=this.t.validationErrorMaxLength;return}this._editingIndex<0||this._editingIndex>=this._tempTasks.length||(this._validationError="",this._tempTasks=this._tempTasks.map((e,i)=>i===this._editingIndex?{...e,text:t}:e),this._editingIndex=-1,this._tempTaskText="")}_cancelEditTask(){this._editingIndex=-1,this._tempTaskText=""}_saveAll(){this._screen==="editor"&&(this.tasks=JSON.parse(JSON.stringify(this._tempTasks||[])),this.editing=!1,this._editingIndex=-1,this._tempTaskText="",this._screen=this._editorOrigin||"list",this._editorOrigin="list")}_cancelAll(){this._screen==="editor"&&(this.editing=!1,this._editingIndex=-1,this._tempTaskText="",this._screen=this._editorOrigin||"list",this._editorOrigin="list")}static get haxProperties(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Todo List",description:"A simple task management web component",icon:"icons:assignment",color:"blue",tags:["Productivity","Content"]},settings:{configure:[],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_validationError","_screen","_tempTasks","_editingIndex","_tempTaskText","_editorOrigin","editing","editable"]}}}};globalThis.customElements.define(rt.tag,rt);const U="a3_attendance_activity_logs",nt="a3_attendance_threshold_config",Y="a3_attendance_grades_config";function j(){const k=localStorage.getItem(U);if(k)try{return JSON.parse(k)}catch{return[]}return[]}const ot={minWeeklyActivities:10,minReading:5,minQuiz:1,minAssignment:1,minDiscussion:1};function H(){const k=localStorage.getItem(nt),t=k?JSON.parse(k):{};return{...ot,...t,minReading:Math.max(t.minReading||0,ot.minReading)}}const dt={attendanceWeight:1,ulanganHarianWeight:3,utsWeight:2,uasWeight:2,attitudeWeight:0,skillWeight:0,totalWeight:8,uts:0,uas:0,sikap:0,keterampilan:0};function lt(){const k=localStorage.getItem(Y);return k?JSON.parse(k):dt}class ct extends q{static get tag(){return"activity-logger"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},sheetName:{type:String,attribute:"sheet-name"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},_logs:{type:Array},_expanded:{type:Boolean},_toastMsg:{type:String}}}constructor(){super(),this.appsScriptUrl="",this.sheetName="Pertemuan",this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this._logs=j(),this._expanded=!1,this._toastMsg="",this._handleScroll=this._handleScroll.bind(this),this._handleClick=this._handleClick.bind(this),this._handleQuizSaved=this._handleQuizSaved.bind(this),this._handleDiscussionSaved=this._handleDiscussionSaved.bind(this),this._handleAssignmentSaved=this._handleAssignmentSaved.bind(this),this._lastScrollTime=0}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this._handleScroll,{passive:!0}),window.addEventListener("click",this._handleClick),window.addEventListener("quiz-saved",this._handleQuizSaved),window.addEventListener("discussion-saved",this._handleDiscussionSaved),window.addEventListener("assignment-saved",this._handleAssignmentSaved),window.addEventListener("reading-saved",this._handleReadingSaved),window.addEventListener("quiz-saved",()=>{this._quizCompleted=!0}),window.addEventListener("a3-force-reload",()=>{this._logs=JSON.parse(localStorage.getItem(U)||"[]")})}disconnectedCallback(){window.removeEventListener("scroll",this._handleScroll),window.removeEventListener("click",this._handleClick),window.removeEventListener("quiz-saved",this._handleQuizSaved),window.removeEventListener("discussion-saved",this._handleDiscussionSaved),window.removeEventListener("assignment-saved",this._handleAssignmentSaved),window.removeEventListener("reading-saved",this._handleReadingSaved),super.disconnectedCallback()}_handleScroll(){const t=Date.now();t-this._lastScrollTime<6e4||window.scrollY>300&&(this._lastScrollTime=t,this.logActivity("reading",`Membaca materi pelajaran (Scroll ke baris ${Math.round(window.scrollY)}px)`))}_handleClick(t){const e=t.composedPath()[0];if(e){if(e.tagName==="A"&&e.href)if(e.href.match(/\.(pdf|docx|zip|xlsx|pptx|mp4|png|jpg)$/i)||e.hasAttribute("download")){const i=e.href.substring(e.href.lastIndexOf("/")+1)||"materi";this.logActivity("download",`Mengunduh file materi: ${decodeURIComponent(i)}`)}else!e.href.includes("javascript:")&&!e.href.startsWith("#")&&this.logActivity("reading",`Membuka tautan eksternal/internal: ${e.innerText.trim()||e.href}`);else if(e.tagName==="MD-OUTLINED-BUTTON"||e.tagName==="MD-FILLED-BUTTON"||e.classList?.contains("card")){const i=e.innerText||e.textContent||"";i.trim()&&i.length<50&&this.logActivity("reading",`Mengklik tombol menu: "${i.trim()}"`)}}}_handleQuizSaved(t){const e=t.detail?.score||0;this.logActivity("quiz",`Menyelesaikan Kuis Interaktif (Skor diperoleh: ${e}%)`)}_handleDiscussionSaved(t){const e=t.detail?.thread||t.detail?.title||"Umum";this.logActivity("discussion",`Aktif berdiskusi pada forum/chat: ${e}`)}_handleAssignmentSaved(t){const e=t.detail?.title||t.detail?.assignment||"Tugas",i=t.detail?.category||"mandiri/terstruktur";this.logActivity("assignment",`Mengumpulkan tugas ${i}: ${e}`)}_handleReadingSaved(t){const e=t.detail?.title||t.detail?.module||"Materi";this.logActivity("reading",`Membaca materi: ${e}`)}logActivity(t,e){const i={id:"log-"+Date.now()+"-"+Math.random(),timestamp:new Date().toISOString(),type:t,description:e},s=JSON.parse(localStorage.getItem(U)||"[]");if(s.unshift(i),localStorage.setItem(U,JSON.stringify(s)),this._logs=s,this.appsScriptUrl){const n=new URLSearchParams({action:"activity",type:"attendance",timestamp:i.timestamp,name:this.studentName||"Student",studentId:this.studentId||"",nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",activityType:t,description:e,sheet:this.sheetName||"Pertemuan"}),d=`${this.appsScriptUrl}?${n.toString()}`;fetch(d,{redirect:"follow"}).then(c=>c.json()).then(c=>console.log("[activity-logger] Tersimpan:",c)).catch(c=>console.warn("[activity-logger] Gagal kirim ke Sheets:",c))}window.dispatchEvent(new CustomEvent("a3-activity-logged",{detail:i,bubbles:!0,composed:!0})),this._showToast(`Aktivitas tercatat: ${e.length>35?e.substring(0,35)+"...":e}`)}_showToast(t){this._toastMsg=t,setTimeout(()=>{this._toastMsg===t&&(this._toastMsg="")},4e3)}_clearLogs(){confirm("Apakah Anda yakin ingin menghapus semua log aktivitas lokal?")&&(localStorage.removeItem(U),this._logs=[],window.dispatchEvent(new CustomEvent("a3-activity-logged",{bubbles:!0,composed:!0})),this._showToast("Log aktivitas lokal telah dikosongkan."))}_simulateActivity(t){const e={reading:["Membaca modul pembelajaran: Integrasi Google Sheets","Membuka topik diskusi: Kolaborasi Pembelajaran","Membaca materi penunjang pekan ini"],download:["Mengunduh file: Rencana_Pembelajaran_Semester.pdf","Mengunduh file: Latihan_Kuis_LitElement.zip","Mengunduh file: Panduan_Penilaian.docx"],discussion:["Memberikan komentar di forum kelas","Membuat thread diskusi baru mengenai Lit Element","Menjawab pertanyaan teman di chat pembelajaran"],assignment:["Mengumpulkan tugas mandiri: Ringkasan materi","Mengumpulkan tugas terstruktur: Latihan integrasi data","Menyelesaikan lembar kerja peserta didik"]}[t],i=e[Math.floor(Math.random()*e.length)];this.logActivity(t,i)}static get styles(){return N`
      :host {
        display: block;
        font-family: 'Roboto', 'Segoe UI', system-ui, sans-serif;
      }

      .floating-logger-pill {
        position: fixed;
        bottom: 24px;
        right: 24px;
        background-color: #1c1b1f;
        color: #fff;
        padding: 12px 18px;
        border-radius: 50px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-size: 13px;
        font-weight: 500;
        user-select: none;
        border: 1px solid rgba(255,255,255,0.1);
      }

      .floating-logger-pill:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        background-color: #2b2a30;
      }

      .pulse-dot {
        width: 8px;
        height: 8px;
        background-color: #22c55e;
        border-radius: 50%;
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
        animation: pulse 1.6s infinite;
      }

      @keyframes pulse {
        0% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
        }
        70% {
          transform: scale(1);
          box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
        }
        100% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
        }
      }

      .drawer {
        position: fixed;
        bottom: 84px;
        right: 24px;
        width: 380px;
        max-height: 500px;
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        border: 1px solid #e0e0e0;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .drawer-header {
        background-color: #6750a4;
        color: white;
        padding: 16px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .drawer-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 15px;
      }

      .close-btn {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 4px;
      }

      .drawer-content {
        padding: 16px;
        overflow-y: auto;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .simulator-bar {
        background-color: #f3f0fa;
        padding: 12px;
        border-radius: 10px;
        border: 1px solid #e8e3f5;
      }

      .sim-title {
        font-size: 12px;
        font-weight: bold;
        color: #6750a4;
        margin-bottom: 8px;
      }

      .sim-buttons {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .sim-btn {
        background: white;
        border: 1px solid #6750a4;
        color: #6750a4;
        padding: 6px 10px;
        font-size: 11px;
        font-weight: 500;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
      }

      .sim-btn:hover {
        background-color: #6750a4;
        color: white;
      }

      .logs-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 4px;
        max-height: 220px;
        overflow-y: auto;
      }

      .log-item {
        padding: 8px 10px;
        border-radius: 6px;
        background-color: #f8f9fa;
        font-size: 12px;
        border-left: 3px solid #6c757d;
        line-height: 1.4;
      }

      .log-item.reading { border-left-color: #4f46e5; }
      .log-item.download { border-left-color: #10b981; }
      .log-item.discussion { border-left-color: #f59e0b; }
      .log-item.quiz { border-left-color: #ec4899; }
      .log-item.assignment { border-left-color: #8b5cf6; }

      .log-time {
        font-size: 10px;
        color: #888;
        margin-bottom: 2px;
      }

      .drawer-footer {
        padding: 12px 16px;
        background-color: #f8f9fa;
        border-top: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .reset-btn {
        background: none;
        border: none;
        color: #dc3545;
        font-size: 11px;
        font-weight: 500;
        cursor: pointer;
        text-decoration: underline;
      }

      .toast {
        position: fixed;
        bottom: 90px;
        right: 24px;
        background-color: #323232;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-size: 13px;
        z-index: 1001;
        animation: fadeInOut 4s forwards;
        max-width: 320px;
        pointer-events: none;
      }

      @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(10px); }
        10% { opacity: 1; transform: translateY(0); }
        90% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(10px); }
      }

      .no-logs {
        color: #888;
        font-size: 12px;
        text-align: center;
        padding: 20px 0;
      }
    `}render(){return o`
      <!-- Floating Pill -->
      <div class="floating-logger-pill" @click="${()=>this._expanded=!this._expanded}">
        <span class="pulse-dot"></span>
        <span>Aktivitas Terrekam (${this._logs.length})</span>
      </div>

      <!-- Drawer Panel -->
      ${this._expanded?o`
        <div class="drawer">
          <div class="drawer-header">
            <div class="drawer-title">
              📊 <span>Rekam Aktivitas Pembelajaran</span>
            </div>
            <button class="close-btn" @click="${()=>this._expanded=!1}">×</button>
          </div>
          <div class="drawer-content">
            <div class="simulator-bar">
              <div class="sim-title">Uji Coba Simulator (Sinyal Aktivitas)</div>
              <div class="sim-buttons">
                <button class="sim-btn" @click="${()=>this._simulateActivity("reading")}">📖 Baca Modul</button>
                <button class="sim-btn" @click="${()=>this._simulateActivity("assignment")}">📌 Tugas</button>
                <button class="sim-btn" @click="${()=>this._simulateActivity("discussion")}">💬 Forum/Chat</button>
                <button class="sim-btn" @click="${()=>this._simulateActivity("download")}">📥 Unduh PDF</button>
              </div>
            </div>

            <div class="sim-title" style="margin-top: 8px;">Log Real-Time Terbaru:</div>
            <div class="logs-list">
              ${this._logs.length===0?o`
                <div class="no-logs">Belum ada aktivitas tercatat. Mulailah mengklik materi atau gunakan simulator di atas.</div>
              `:this._logs.slice(0,15).map(t=>o`
                <div class="log-item ${t.type}">
                  <div class="log-time">${new Date(t.timestamp).toLocaleTimeString("id-ID")}</div>
                  <div>${t.description}</div>
                </div>
              `)}
            </div>
          </div>
          <div class="drawer-footer">
            <span style="font-size: 10px; color: #666;">Logging otomatis latar belakang aktif</span>
            <button class="reset-btn" @click="${this._clearLogs}">Set Ulang</button>
          </div>
        </div>
      `:""}

      <!-- Toast Popup -->
      ${this._toastMsg?o`
        <div class="toast">
          ${this._toastMsg}
        </div>
      `:""}
    `}}customElements.define(ct.tag,ct);class ht extends q{static get tag(){return"attendance-tracker"}static get properties(){return{_logs:{type:Array},_thresholds:{type:Object}}}constructor(){super(),this._logs=j(),this._thresholds=H()}connectedCallback(){super.connectedCallback(),this._reloadHandler=()=>{this._logs=JSON.parse(localStorage.getItem(U)||"[]"),this._thresholds=H()},window.addEventListener("a3-activity-logged",this._reloadHandler),window.addEventListener("a3-force-reload",this._reloadHandler)}disconnectedCallback(){window.removeEventListener("a3-activity-logged",this._reloadHandler),window.removeEventListener("a3-force-reload",this._reloadHandler),super.disconnectedCallback()}_getWeeklyStats(){const t=new Date,e=new Date(t.getTime()-10080*60*1e3),i=this._logs.filter(v=>new Date(v.timestamp)>=e),s={reading:i.filter(v=>v.type==="reading").length,discussion:i.filter(v=>v.type==="discussion").length,quiz:i.filter(v=>v.type==="quiz").length,assignment:i.filter(v=>v.type==="assignment").length,total:i.length},n=s.reading>=this._thresholds.minReading,d=s.quiz>=this._thresholds.minQuiz,c=s.assignment>=this._thresholds.minAssignment,C=s.discussion>=this._thresholds.minDiscussion,u=s.total>=this._thresholds.minWeeklyActivities,z=(d?1:0)+(c?1:0)+(n?1:0)+(C?1:0)+(u?1:0),A=Math.round(z/5*100);return{counts:s,goals:{reading:n,quiz:d,assignment:c,discussion:C,total:u},attendancePercentage:A,status:A>=75?"HADIR":"BELUM LENGKAP"}}static get styles(){return N`
      :host {
        display: block;
        font-family: 'Roboto', 'Segoe UI', system-ui, sans-serif;
        color: #1c1b1f;
      }

      .tracker-card {
        background: white;
        border-radius: 16px;
        padding: 24px;
        border: 1px solid #e0e0e0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
      }

      .flex-container {
        display: flex;
        gap: 32px;
        align-items: center;
        flex-wrap: wrap;
      }

      .gauge-section {
        flex: 1;
        min-width: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .status-section {
        flex: 2;
        min-width: 280px;
      }

      /* Gauge layout */
      .gauge-wrapper {
        position: relative;
        width: 160px;
        height: 160px;
        margin-bottom: 12px;
      }

      svg {
        transform: rotate(-90deg);
        width: 160px;
        height: 160px;
      }

      circle {
        fill: none;
        stroke-width: 12;
      }

      .bg-circle {
        stroke: #f3f0fa;
      }

      .fg-circle {
        stroke: #6750a4;
        stroke-linecap: round;
        transition: stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .fg-circle.warning {
        stroke: #f59e0b;
      }

      .gauge-value {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 26px;
        font-weight: bold;
        color: #1c1b1f;
      }

      .badge {
        padding: 6px 14px;
        border-radius: 50px;
        font-size: 13px;
        font-weight: bold;
        display: inline-block;
        margin-top: 8px;
      }

      .badge.success {
        background-color: #d1fae5;
        color: #065f46;
      }

      .badge.warning {
        background-color: #fef3c7;
        color: #92400e;
      }

      h3 {
        margin: 0 0 16px 0;
        font-size: 18px;
        color: #6750a4;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .criteria-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .criteria-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        border-radius: 10px;
        background-color: #fcfbfe;
        border: 1px solid #f1f0f4;
        transition: all 0.2s;
      }

      .criteria-item:hover {
        background-color: #f6f5f9;
        transform: translateX(4px);
      }

      .crit-info {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .icon {
        font-size: 18px;
        width: 32px;
        height: 32px;
        background-color: #f3f0fa;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .crit-name {
        font-weight: 500;
        font-size: 14px;
      }

      .crit-progress {
        font-size: 12px;
        color: #666;
        margin-top: 2px;
      }

      .status-indicator {
        font-size: 20px;
      }

      .status-indicator.check {
        color: #10b981;
      }

      .status-indicator.cross {
        color: #d1d5db;
      }

      .desc-text {
        font-size: 13px;
        color: #555;
        line-height: 1.5;
        margin-bottom: 16px;
      }
    `}render(){const t=this._getWeeklyStats(),e=65,i=2*Math.PI*e,s=i-t.attendancePercentage/100*i;return o`
      <div class="tracker-card">
        <h3>📊 Kehadiran Pekan Ini (Mata Kuliah Aktif)</h3>
        <p class="desc-text">
          Sistem kehadiran dihitung secara otomatis berdasarkan <strong>Aktivitas Proses Belajar Anda</strong> dalam 7 hari terakhir. Tidak diperlukan tanda tangan manual.
        </p>

        <div class="flex-container">
          <!-- Gauge Display -->
          <div class="gauge-section">
            <div class="gauge-wrapper">
              <svg>
                <circle class="bg-circle" cx="80" cy="80" r="${e}"></circle>
                <circle class="fg-circle ${t.attendancePercentage<75?"warning":""}" 
                        cx="80" cy="80" r="${e}" 
                        stroke-dasharray="${i}" 
                        stroke-dashoffset="${s}"></circle>
              </svg>
              <div class="gauge-value">${t.attendancePercentage}%</div>
            </div>
            <div style="font-size: 12px; color: #666; font-weight: 500;">Stabilitas Parameter Kehadiran</div>
            <span class="badge ${t.attendancePercentage>=75?"success":"warning"}">
              Status: ${t.status}
            </span>
          </div>

          <!-- Requirements Checklist -->
          <div class="status-section">
            <div class="criteria-list">
              <!-- Reading Modules -->
              <div class="criteria-item">
                <div class="crit-info">
                  <div class="icon">📖</div>
                  <div>
                    <div class="crit-name">Membaca Modul Pembelajaran</div>
                    <div class="crit-progress">Tercapai: ${t.counts.reading} dari min. ${this._thresholds.minReading} kali</div>
                  </div>
                </div>
                <div class="status-indicator ${t.goals.reading?"check":"cross"}">
                  ${t.goals.reading?"\u2705":"\u23F3"}
                </div>
              </div>

              <!-- Quiz completed -->
              <div class="criteria-item">
                <div class="crit-info">
                  <div class="icon">📝</div>
                  <div>
                    <div class="crit-name">Kuis Eksplorasi / Formatif</div>
                    <div class="crit-progress">Tercapai: ${t.counts.quiz} dari min. ${this._thresholds.minQuiz} kuis</div>
                  </div>
                </div>
                <div class="status-indicator ${t.goals.quiz?"check":"cross"}">
                  ${t.goals.quiz?"\u2705":"\u23F3"}
                </div>
              </div>

              <!-- Assignment activity -->
              <div class="criteria-item">
                <div class="crit-info">
                  <div class="icon">📌</div>
                  <div>
                    <div class="crit-name">Tugas Mandiri / Terstruktur</div>
                    <div class="crit-progress">Tercapai: ${t.counts.assignment} dari min. ${this._thresholds.minAssignment} tugas</div>
                  </div>
                </div>
                <div class="status-indicator ${t.goals.assignment?"check":"cross"}">
                  ${t.goals.assignment?"\u2705":"\u23F3"}
                </div>
              </div>

              <!-- Discussion forum activity -->
              <div class="criteria-item">
                <div class="crit-info">
                  <div class="icon">💬</div>
                  <div>
                    <div class="crit-name">Partisipasi Forum & Diskusi</div>
                    <div class="crit-progress">Tercapai: ${t.counts.discussion} dari min. ${this._thresholds.minDiscussion} kali</div>
                  </div>
                </div>
                <div class="status-indicator ${t.goals.discussion?"check":"cross"}">
                  ${t.goals.discussion?"\u2705":"\u23F3"}
                </div>
              </div>

              <!-- Cumulative activities -->
              <div class="criteria-item">
                <div class="crit-info">
                  <div class="icon">📈</div>
                  <div>
                    <div class="crit-name">Akumulasi Sinyal Aktivitas</div>
                    <div class="crit-progress">Tercapai: ${t.counts.total} dari min. ${this._thresholds.minWeeklyActivities} interaksi</div>
                  </div>
                </div>
                <div class="status-indicator ${t.goals.total?"check":"cross"}">
                  ${t.goals.total?"\u2705":"\u23F3"}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    `}}customElements.define(ht.tag,ht);class pt extends q{static get tag(){return"engagement-score"}static get properties(){return{_logs:{type:Array},_selectedCell:{type:Object}}}constructor(){super(),this._logs=j(),this._selectedCell=null}connectedCallback(){super.connectedCallback(),this._reloadHandler=()=>{this._logs=JSON.parse(localStorage.getItem(U)||"[]")},window.addEventListener("a3-activity-logged",this._reloadHandler),window.addEventListener("a3-force-reload",this._reloadHandler)}disconnectedCallback(){window.removeEventListener("a3-activity-logged",this._reloadHandler),window.removeEventListener("a3-force-reload",this._reloadHandler),super.disconnectedCallback()}_getActivityMap(){const t=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],e=new Date,i=[];for(let s=27;s>=0;s--){const n=new Date;n.setDate(e.getDate()-s),n.setHours(0,0,0,0);const d=this._logs.filter(c=>{const C=new Date(c.timestamp);return C.setHours(0,0,0,0),C.getTime()===n.getTime()});i.push({date:n,dayName:t[n.getDay()],count:d.length,logs:d})}return i}_getStreak(){const t=new Date;t.setHours(0,0,0,0);let e=0,i=0,s=new Date(t);for(;i<30;){if(this._logs.filter(n=>{const d=new Date(n.timestamp);return d.setHours(0,0,0,0),d.getTime()===s.getTime()}).length>0)e++;else if(i!==0)break;s.setDate(s.getDate()-1),i++}return e}_selectCell(t){this._selectedCell=t}static get styles(){return N`
      :host {
        display: block;
        font-family: 'Roboto', 'Segoe UI', system-ui, sans-serif;
        color: #1c1b1f;
      }

      .engagement-card {
        background: white;
        border-radius: 16px;
        padding: 24px;
        border: 1px solid #e0e0e0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
      }

      h3 {
        margin: 0 0 12px 0;
        font-size: 18px;
        color: #6750a4;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .consistency-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 16px;
        margin-bottom: 24px;
      }

      .stat-mini-card {
        background-color: #fbf9ff;
        border: 1px solid #ece8f5;
        border-radius: 12px;
        padding: 14px 16px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .mini-label {
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }

      .mini-val {
        font-size: 20px;
        font-weight: bold;
        color: #6750a4;
      }

      /* Grid Heatmap styling */
      .heatmap-wrapper {
        margin: 20px 0;
        overflow-x: auto;
        padding-bottom: 8px;
      }

      .heatmap-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 8px;
        max-width: 500px;
        margin: 0 auto;
      }

      .heatmap-header-days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 8px;
        max-width: 500px;
        margin: 0 auto 6px auto;
        font-size: 10px;
        color: #666;
        text-align: center;
        font-weight: bold;
      }

      .cell {
        aspect-ratio: 1;
        background-color: #ebedf0;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: bold;
        color: rgba(255,255,255,0.8);
      }

      .cell:hover {
        transform: scale(1.15);
        z-index: 10;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }

      .cell.lvl-0 { background-color: #f3f0fa; color: #9c99a6; }
      .cell.lvl-1 { background-color: #e3d9fc; color: #6750a4; }
      .cell.lvl-2 { background-color: #c7b3fc; color: #ffffff; }
      .cell.lvl-3 { background-color: #9d7bfc; color: #ffffff; }
      .cell.lvl-4 { background-color: #6750a4; color: #ffffff; }

      .cell.selected {
        border: 2px solid #1c1b1f;
        transform: scale(1.1);
      }

      .legend {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        color: #666;
        margin-top: 14px;
      }

      .legend-box {
        width: 12px;
        height: 12px;
        border-radius: 2px;
      }

      /* Selected detail card */
      .detail-card {
        margin-top: 20px;
        background-color: #fcfbfe;
        border: 1px dashed #c7b3fc;
        border-radius: 12px;
        padding: 16px;
        animation: fadeIn 0.3s;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(5px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .detail-header {
        font-weight: bold;
        color: #6750a4;
        font-size: 13px;
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
      }

      .detail-logs {
        font-size: 12px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        max-height: 120px;
        overflow-y: auto;
      }

      .detail-item {
        padding: 6px 8px;
        background: white;
        border-radius: 6px;
        border-left: 3px solid #6750a4;
      }
    `}render(){const t=this._getActivityMap(),e=this._getStreak(),i=this._logs.length,s=t.filter(d=>d.count>0).length,n=Math.round(s/28*100);return o`
      <div class="engagement-card">
        <h3>🔥 Tracker Konsistensi Pembelajaran</h3>
        <p style="font-size: 13px; color: #555; line-height: 1.5; margin-bottom: 18px;">
          Pertahankan rekam aktivitas reguler Anda untuk melatih pemahaman dan memastikan validasi data kehadiran sistem.
        </p>

        <!-- Stats row -->
        <div class="consistency-stats">
          <div class="stat-mini-card">
            <span class="mini-label">Total Sinyal Aktivitas</span>
            <span class="mini-val">${i} kali</span>
          </div>
          <div class="stat-mini-card">
            <span class="mini-label">Indeks Konsistensi (4 Pekan)</span>
            <span class="mini-val">${n}%</span>
          </div>
          <div class="stat-mini-card">
            <span class="mini-label">Streak Belajar Aktif</span>
            <span class="mini-val">🔥 ${e} Hari</span>
          </div>
        </div>

        <div style="font-size: 13px; font-weight: bold; color: #1c1b1f; margin-bottom: 10px; text-align: center;">
          Peta Pergerakan Aktivitas Harian (28 Hari Terakhir)
        </div>

        <!-- Heatmap Grid -->
        <div class="heatmap-wrapper">
          <div class="heatmap-header-days">
            <span>Sen</span>
            <span>Sel</span>
            <span>Rab</span>
            <span>Kam</span>
            <span>Jum</span>
            <span>Sab</span>
            <span>Min</span>
          </div>
          <div class="heatmap-grid">
            ${t.map(d=>{let c="lvl-0";d.count>0&&d.count<=2?c="lvl-1":d.count>2&&d.count<=4?c="lvl-2":d.count>4&&d.count<=7?c="lvl-3":d.count>7&&(c="lvl-4");const C=this._selectedCell&&this._selectedCell.date.getTime()===d.date.getTime();return o`
                <div class="cell ${c} ${C?"selected":""}" 
                     @click="${()=>this._selectCell(d)}">
                  ${d.count>0?d.count:""}
                </div>
              `})}
          </div>

          <div class="legend">
            <span>Sedikit</span>
            <div class="legend-box lvl-0"></div>
            <div class="legend-box lvl-1"></div>
            <div class="legend-box lvl-2"></div>
            <div class="legend-box lvl-3"></div>
            <div class="legend-box lvl-4"></div>
            <span>Banyak</span>
          </div>
        </div>

        <!-- Detail on select -->
        ${this._selectedCell?o`
          <div class="detail-card">
            <div class="detail-header">
              <span>📅 Detail Aktivitas: ${this._selectedCell.dayName}, ${this._selectedCell.date.toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}</span>
              <span style="color: #666;">${this._selectedCell.count} Aktivitas</span>
            </div>
            <div class="detail-logs">
              ${this._selectedCell.count===0?o`
                <div style="color: #888; text-align: center; padding: 10px;">Tidak ada rekam aktivitas tercatat pada hari ini.</div>
              `:this._selectedCell.logs.map(d=>o`
                <div class="detail-item">
                  <span style="color: #888; font-size: 10px; font-weight: bold; margin-right: 6px;">[${new Date(d.timestamp).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})}]</span>
                  <span>${d.description}</span>
                </div>
              `)}
            </div>
          </div>
        `:o`
          <div style="text-align: center; font-size: 11px; color: #888; margin-top: 10px;">
            💡 Klik salah satu kotak grid harian di atas untuk melihat rincian aktivitas hari tersebut!
          </div>
        `}
      </div>
    `}}customElements.define(pt.tag,pt);class ut extends q{static get tag(){return"transparent-gradebook"}static get properties(){return{appsScriptUrl:{type:String,attribute:"apps-script-url"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},viewMode:{type:String,attribute:"view-mode"},showAfterQuiz:{type:Boolean,attribute:"show-after-quiz",reflect:!0},showAfterDate:{type:String,attribute:"show-after-date"},_logs:{type:Array},_thresholds:{type:Object},_gradesConfig:{type:Object},_isLecturerMode:{type:Boolean},_scores:{type:Object},_reportStatus:{type:String},_roster:{type:Array}}}constructor(){super(),this.appsScriptUrl="",this.studentId="",this.studentName="",this.viewMode="student",this.showAfterQuiz=!0,this.showAfterDate="",this._quizCompleted=!1,this._logs=j(),this._thresholds=H(),this._gradesConfig=lt(),this._isLecturerMode=!1,this._scores={ulanganHarian:{highest:0},uts:{highest:0},uas:{highest:0},formatif:{count:0}},this._reportStatus="",this._roster=[]}connectedCallback(){super.connectedCallback(),this._reloadHandler=()=>{this._logs=JSON.parse(localStorage.getItem(U)||"[]"),this._thresholds=H(),this._gradesConfig=lt(),this._fetchScores()},this._quizCompleteHandler=()=>{this._quizCompleted=!0},window.addEventListener("a3-activity-logged",this._reloadHandler),window.addEventListener("a3-force-reload",this._reloadHandler),window.addEventListener("quiz-saved",this._quizCompleteHandler),this._fetchScores(),this._fetchRoster()}disconnectedCallback(){window.removeEventListener("a3-activity-logged",this._reloadHandler),window.removeEventListener("a3-force-reload",this._reloadHandler),window.removeEventListener("quiz-saved",this._quizCompleteHandler),super.disconnectedCallback()}_fetchScores(){if(!this.appsScriptUrl||!this.studentId){this._scores={ulanganHarian:{highest:0},uts:{highest:0},uas:{highest:0},formatif:{count:0}};return}const t=`${this.appsScriptUrl}?action=getScores&studentId=${encodeURIComponent(this.studentId)}`;fetch(t,{redirect:"follow"}).then(e=>e.json()).then(e=>{e.status==="ok"&&e.data&&(this._scores=e.data)}).catch(()=>{this._scores={ulanganHarian:{highest:0},uts:{highest:0},uas:{highest:0},formatif:{count:0}}})}_generateReport(){if(!this.appsScriptUrl)return;this._reportStatus="Generating...";const t=new URLSearchParams({action:"generateReport",attendanceWeight:this._gradesConfig.attendanceWeight||1,ulanganHarianWeight:this._gradesConfig.ulanganHarianWeight||3,utsWeight:this._gradesConfig.utsWeight||2,uasWeight:this._gradesConfig.uasWeight||2,attitudeWeight:this._gradesConfig.attitudeWeight||0,skillWeight:this._gradesConfig.skillWeight||0}),e=`${this.appsScriptUrl}?${t.toString()}`;fetch(e,{redirect:"follow"}).then(i=>i.json()).then(i=>{this._reportStatus=i.status==="ok"?`${i.message} (${i.totalSiswa} siswa)`:"Gagal generate",this._fetchRoster(),setTimeout(()=>{this._reportStatus=""},6e3)}).catch(()=>{this._reportStatus="Gagal menghubungi server",setTimeout(()=>{this._reportStatus=""},6e3)})}_fetchRoster(){if(!this.appsScriptUrl)return;const t=`${this.appsScriptUrl}?action=getStudentRoster`;fetch(t,{redirect:"follow"}).then(e=>e.json()).then(e=>{e.status==="ok"&&e.roster&&(this._roster=e.roster)}).catch(()=>{this._roster=[]})}_getAttendanceScore(){const t=new Date,e=new Date(t.getTime()-10080*60*1e3),i=this._logs.filter(v=>new Date(v.timestamp)>=e),s={reading:Math.min(i.filter(v=>v.type==="reading").length,this._thresholds.minReading),discussion:i.filter(v=>v.type==="discussion").length,quiz:i.filter(v=>v.type==="quiz").length,assignment:i.filter(v=>v.type==="assignment").length,total:i.length},n=s.reading>=this._thresholds.minReading,d=s.quiz>=this._thresholds.minQuiz,c=s.assignment>=this._thresholds.minAssignment,C=s.discussion>=this._thresholds.minDiscussion,u=s.total>=this._thresholds.minWeeklyActivities,z=(d?1:0)+(c?1:0)+(n?1:0)+(C?1:0)+(u?1:0),A=Math.round(z/5*100);return{currentWeek:A,overall:A}}_shouldShowGradebook(){return!this.showAfterQuiz&&!this.showAfterDate?!0:!(this.showAfterQuiz&&!this._quizCompleted||this.showAfterDate&&new Date<new Date(this.showAfterDate))}_getFinalScore(){const t=this._gradesConfig.attendanceWeight||1,e=this._gradesConfig.ulanganHarianWeight||3,i=this._gradesConfig.utsWeight||2,s=this._gradesConfig.uasWeight||2,n=this._gradesConfig.attitudeWeight||0,d=this._gradesConfig.skillWeight||0,c=t+e+i+s+n+d,C=this._scores.kehadiran||this._getAttendanceScore().overall,u=this._scores.ulanganHarian?.average||this._scores.ulanganHarian?.highest||0,z=this._scores.uts?.highest||this._gradesConfig.uts||0,A=this._scores.uas?.highest||this._gradesConfig.uas||0,v=this._scores.sikap||this._calcSikap(),F=this._scores.keterampilan||this._calcSkill(),K=C*t/c+u*e/c+z*i/c+A*s/c+v*n/c+F*d/c;return Math.round(K*10)/10}_calcSikap(){if(this._gradesConfig.sikap)return this._gradesConfig.sikap;const t=new Date,e=new Date(t.getTime()-10080*60*1e3),i=this._logs.filter(d=>new Date(d.timestamp)>=e),s=i.filter(d=>d.type==="assignment").length,n=i.filter(d=>d.type==="discussion").length;return Math.min(s*25+n*20,100)}_calcSkill(){if(this._gradesConfig.keterampilan)return this._gradesConfig.keterampilan;const t=new Date,e=new Date(t.getTime()-10080*60*1e3),i=this._logs.filter(d=>new Date(d.timestamp)>=e),s=i.filter(d=>d.type==="quiz").length,n=i.filter(d=>d.type==="reading").length;return Math.min(s*30+n*10,100)}_getGradeLetter(t){return t>=85?"A":t>=80?"A-":t>=75?"B+":t>=70?"B":t>=65?"B-":t>=60?"C+":t>=55?"C":t>=40?"D":"E"}_updateGradesConfig(t){const e=t.target.id,i=parseInt(t.target.value);if(!isNaN(i)){const s={...this._gradesConfig,[e]:i};s.totalWeight=(s.attendanceWeight||0)+(s.ulanganHarianWeight||0)+(s.utsWeight||0)+(s.uasWeight||0),localStorage.setItem(Y,JSON.stringify(s)),this._gradesConfig=s,window.dispatchEvent(new CustomEvent("a3-force-reload"))}}_updateThresholdConfig(t){const e=t.target.id,i=parseInt(t.target.value);if(!isNaN(i)){const s={...this._thresholds,[e]:i};localStorage.setItem(nt,JSON.stringify(s)),this._thresholds=s,window.dispatchEvent(new CustomEvent("a3-force-reload"))}}_resetWeights(){const t={...dt};localStorage.setItem(Y,JSON.stringify(t)),this._gradesConfig=t,window.dispatchEvent(new CustomEvent("a3-force-reload"))}static get styles(){return N`
      :host {
        display: block;
        font-family: 'Roboto', 'Segoe UI', system-ui, sans-serif;
        color: #1c1b1f;
      }

      .grade-card {
        background: white;
        border-radius: 16px;
        padding: 24px;
        border: 1px solid #e0e0e0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 18px;
        flex-wrap: wrap;
        gap: 12px;
      }

      h3 {
        margin: 0;
        font-size: 18px;
        color: #6750a4;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .toggle-btn {
        background-color: #f3f0fa;
        color: #6750a4;
        border: 1px solid #ece8f5;
        padding: 8px 14px;
        font-size: 12px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .toggle-btn:hover {
        background-color: #6750a4;
        color: white;
      }

      /* Grade summary bento */
      .summary-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 14px;
        margin-bottom: 24px;
      }

      .summary-item {
        background: #fcfbfe;
        border: 1px solid #f1eef8;
        border-radius: 12px;
        padding: 14px;
        text-align: center;
      }

      .summary-item.highlight {
        background-color: #f3f0fa;
        border-color: #c7b3fc;
      }

      .summary-label {
        font-size: 11px;
        color: #666;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-weight: 500;
      }

      .summary-val {
        font-size: 24px;
        font-weight: bold;
        color: #1c1b1f;
        margin-top: 4px;
      }

      .summary-val.brand {
        color: #6750a4;
      }

      /* Responsive Tables */
      .table-wrapper {
        width: 100%;
        overflow-x: auto;
        border-radius: 12px;
        border: 1px solid #eee;
        margin-bottom: 20px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
        font-size: 13px;
      }

      th {
        background-color: #f8f9fa;
        color: #49454f;
        font-weight: bold;
        padding: 12px 16px;
        border-bottom: 2px solid #eee;
      }

      td {
        padding: 12px 16px;
        border-bottom: 1px solid #f5f5f5;
        color: #1c1b1f;
      }

      tr:last-child td {
        border-bottom: none;
      }

      .row-category {
        font-weight: bold;
        color: #6750a4;
      }

      /* Lecturer Configuration Console */
      .lecturer-panel {
        background-color: #fcfbfe;
        border: 1px solid #6750a4;
        border-radius: 12px;
        padding: 20px;
        margin-top: 24px;
        animation: fadeIn 0.3s;
      }

      .lecturer-panel-title {
        color: #6750a4;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 14px;
        display: flex;
        align-items: center;
        gap: 6px;
        border-bottom: 1px solid #ece8f5;
        padding-bottom: 8px;
      }

      .config-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        margin-bottom: 20px;
      }

      .config-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .config-label {
        font-size: 12px;
        font-weight: 500;
        color: #444;
      }

      .config-input {
        padding: 8px 12px;
        border-radius: 8px;
        border: 1px solid #ccc;
        font-size: 13px;
        background: white;
      }

      .config-input:focus {
        border-color: #6750a4;
        outline: none;
        box-shadow: 0 0 0 2px rgba(103, 80, 164, 0.2);
      }

      .weight-badge {
        font-size: 10px;
        background-color: #e3d9fc;
        color: #6750a4;
        padding: 2px 6px;
        border-radius: 4px;
        font-weight: bold;
      }

      .simulated-roster-section {
        margin-top: 16px;
      }

      .progress-bar-container {
        width: 100px;
        height: 6px;
        background-color: #e5e7eb;
        border-radius: 3px;
        overflow: hidden;
      }

      .progress-bar {
        height: 100%;
        background-color: #6750a4;
        border-radius: 3px;
      }
    `}render(){const t=this._getAttendanceScore(),e=this._scores.ulanganHarian?.highest||0,i=this._scores.uts?.highest||this._gradesConfig.uts||0,s=this._scores.uas?.highest||this._gradesConfig.uas||0,n=this._scores.sikap||this._calcSikap(),d=this._scores.keterampilan||this._calcSkill(),c=this._getFinalScore(),C=this._getGradeLetter(c),u=(this._gradesConfig.attendanceWeight||1)+(this._gradesConfig.ulanganHarianWeight||3)+(this._gradesConfig.utsWeight||2)+(this._gradesConfig.uasWeight||2)+(this._gradesConfig.attitudeWeight||0)+(this._gradesConfig.skillWeight||0),z=this._scores.ulanganHarian?.count||0,A=this._roster.length>0?this._roster:[{nama:"Belum ada data",emoji:"\u{1F4ED}",statusAktivitas:"Menunggu",logAktivitas:"0 aktivitas",nilaiAkhir:0}];return o`
      ${this._shouldShowGradebook()?o`
      <div class="grade-card">
        <div class="card-header">
          <h3>📖 Transparansi Nilai & Hasil Belajar</h3>
          <div style="display: flex; gap: 8px; align-items: center;">
            <span style="font-size: 11px; color: #888;">Bobot: Kehadiran(${this._gradesConfig.attendanceWeight}) : UH(${this._gradesConfig.ulanganHarianWeight}) : UTS(${this._gradesConfig.utsWeight}) : UAS(${this._gradesConfig.uasWeight}) : Sikap(${this._gradesConfig.attitudeWeight}) : Skill(${this._gradesConfig.skillWeight}) = ${u}</span>
            ${this.viewMode==="lecturer"?o`
              <button class="toggle-btn" @click="${()=>this._isLecturerMode=!this._isLecturerMode}">
                ⚙️ ${this._isLecturerMode?"Kembali ke View Mahasiswa":"Masuk Mode Dosen (Console)"}
              </button>
            `:""}
          </div>
        </div>

        <p style="font-size: 13px; color: #555; line-height: 1.5; margin-bottom: 20px;">
          Bobot penilaian: <strong>Kehadiran(${this._gradesConfig.attendanceWeight}/${u})</strong> + <strong>Ulangan Harian(${this._gradesConfig.ulanganHarianWeight}/${u})</strong> + <strong>UTS(${this._gradesConfig.utsWeight}/${u})</strong> + <strong>UAS(${this._gradesConfig.uasWeight}/${u})</strong> + <strong>Sikap(${this._gradesConfig.attitudeWeight}/${u})</strong> + <strong>Keterampilan(${this._gradesConfig.skillWeight}/${u})</strong>. Kuis formatif hanya syarat hadir, tidak masuk akumulasi.
        </p>

        ${this._reportStatus?o`<div class="msg msg-success">${this._reportStatus}</div>`:""}

        <!-- Bento summary blocks -->
        <div class="summary-grid">
          <div class="summary-item">
            <span class="summary-label">Rata Kehadiran (${this._gradesConfig.attendanceWeight}/${u})</span>
            <span class="summary-val">${t.overall}%</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Skor Ulangan Harian (${this._gradesConfig.ulanganHarianWeight}/${u})</span>
            <span class="summary-val">${e}%</span>
            <span style="font-size: 11px; color: #888;">Rata-rata ${z} kuis</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Skor UTS (${this._gradesConfig.utsWeight}/${u})</span>
            <span class="summary-val">${i>0?i+"%":"\u2014"}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Skor UAS (${this._gradesConfig.uasWeight}/${u})</span>
            <span class="summary-val">${s>0?s+"%":"\u2014"}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Sikap (${this._gradesConfig.attitudeWeight}/${u})</span>
            <span class="summary-val">${this._gradesConfig.attitudeWeight>0?n+"%":"\u2014"}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">Keterampilan (${this._gradesConfig.skillWeight}/${u})</span>
            <span class="summary-val">${this._gradesConfig.skillWeight>0?d+"%":"\u2014"}</span>
          </div>
          <div class="summary-item highlight">
            <span class="summary-label">Nilai Akhir</span>
            <span class="summary-val brand">${c}</span>
          </div>
          <div class="summary-item highlight" style="background-color: #f3f0fa;">
            <span class="summary-label">Grade Huruf</span>
            <span class="summary-val brand" style="color: #6750a4; font-size: 28px;">${C}</span>
          </div>
        </div>

        <!-- Gradebook Table -->
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Komponen Nilai</th>
                <th>Sumber</th>
                <th>Bobot</th>
                <th>Nilai Maks</th>
                <th>Nilai Diperoleh</th>
              </tr>
            </thead>
            <tbody>
              <!-- Kehadiran -->
              <tr>
                <td class="row-category">Kehadiran (${this._gradesConfig.attendanceWeight}/${u})</td>
                <td>Rata-rata kehadiran mingguan dari aktivitas (min 5 baca, 1 kuis, 1 tugas, 1 diskusi, 10 total)</td>
                <td style="text-align: center; font-weight: bold;">${Math.round(this._gradesConfig.attendanceWeight/u*100)}%</td>
                <td>100</td>
                <td style="font-weight: bold; color: ${t.currentWeek>=75?"#059669":"#d97706"}">
                  ${t.overall}
                </td>
              </tr>

              <!-- Ulangan Harian -->
              <tr>
                <td class="row-category">Ulangan Harian (${this._gradesConfig.ulanganHarianWeight}/${u})</td>
                <td>Skor tertinggi quiz kategori <code>ulangan_harian</code> (${z} kuis dikerjakan)</td>
                <td style="text-align: center; font-weight: bold;">${Math.round(this._gradesConfig.ulanganHarianWeight/u*100)}%</td>
                <td>100</td>
                <td style="font-weight: bold; color: #6750a4;">${e}</td>
              </tr>

              <!-- UTS -->
              <tr>
                <td class="row-category">UTS (${this._gradesConfig.utsWeight}/${u})</td>
                <td>Ujian Tengah Semester — dari quiz <code>category="uts"</code> atau input manual dosen</td>
                <td style="text-align: center; font-weight: bold;">${Math.round(this._gradesConfig.utsWeight/u*100)}%</td>
                <td>100</td>
                <td>
                  ${this._isLecturerMode?o`
                    <input type="number" id="uts" class="config-input" style="width: 70px; padding: 4px;"
                           .value="${this._gradesConfig.uts}" @change="${this._updateGradesConfig}">
                  `:o`
                    <span style="font-weight: bold; color: ${i>0?"#059669":"#999"};">${i>0?i:"\u2014"}</span>
                  `}
                </td>
              </tr>

              <!-- UAS -->
              <tr>
                <td class="row-category">UAS (${this._gradesConfig.uasWeight}/${u})</td>
                <td>Ujian Akhir Semester — dari quiz <code>category="uas"</code> atau input manual dosen</td>
                <td style="text-align: center; font-weight: bold;">${Math.round(this._gradesConfig.uasWeight/u*100)}%</td>
                <td>100</td>
                <td>
                  ${this._isLecturerMode?o`
                    <input type="number" id="uas" class="config-input" style="width: 70px; padding: 4px;"
                           .value="${this._gradesConfig.uas}" @change="${this._updateGradesConfig}">
                  `:o`
                    <span style="font-weight: bold; color: ${s>0?"#059669":"#999"};">${s>0?s:"\u2014"}</span>
                  `}
                </td>
              </tr>

              <!-- Sikap -->
              <tr>
                <td class="row-category">Sikap (${this._gradesConfig.attitudeWeight}/${u})</td>
                <td>Auto dari tugas + forum, atau input manual dosen</td>
                <td style="text-align: center; font-weight: bold;">${Math.round(this._gradesConfig.attitudeWeight/u*100)}%</td>
                <td>100</td>
                <td>
                  ${this._isLecturerMode?o`
                    <input type="number" id="sikap" class="config-input" style="width: 70px; padding: 4px;"
                           .value="${this._gradesConfig.sikap}" @change="${this._updateGradesConfig}">
                  `:o`
                    <span style="font-weight: bold; color: ${n>0?"#059669":"#999"};">${this._gradesConfig.attitudeWeight>0?n:"\u2014"}</span>
                  `}
                </td>
              </tr>

              <!-- Keterampilan -->
              <tr>
                <td class="row-category">Keterampilan (${this._gradesConfig.skillWeight}/${u})</td>
                <td>Auto dari quiz + baca, atau input manual dosen</td>
                <td style="text-align: center; font-weight: bold;">${Math.round(this._gradesConfig.skillWeight/u*100)}%</td>
                <td>100</td>
                <td>
                  ${this._isLecturerMode?o`
                    <input type="number" id="keterampilan" class="config-input" style="width: 70px; padding: 4px;"
                           .value="${this._gradesConfig.keterampilan}" @change="${this._updateGradesConfig}">
                  `:o`
                    <span style="font-weight: bold; color: ${d>0?"#059669":"#999"};">${this._gradesConfig.skillWeight>0?d:"\u2014"}</span>
                  `}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Lecturer Mode Options panel -->
        ${this._isLecturerMode?o`
          <div class="lecturer-panel">
            <div class="lecturer-panel-title">
              ⚙️ Konfigurasi Dosen & Generate Laporan
            </div>

            <div class="config-grid">
              <div class="config-group">
                <span class="config-label">Bobot Kehadiran (${this._gradesConfig.attendanceWeight}/${u})</span>
                <input type="number" id="attendanceWeight" class="config-input"
                       .value="${this._gradesConfig.attendanceWeight}" @change="${this._updateGradesConfig}">
              </div>
              <div class="config-group">
                <span class="config-label">Bobot Ulangan Harian (${this._gradesConfig.ulanganHarianWeight}/${u})</span>
                <input type="number" id="ulanganHarianWeight" class="config-input"
                       .value="${this._gradesConfig.ulanganHarianWeight}" @change="${this._updateGradesConfig}">
              </div>
              <div class="config-group">
                <span class="config-label">Bobot UTS (${this._gradesConfig.utsWeight}/${u})</span>
                <input type="number" id="utsWeight" class="config-input"
                       .value="${this._gradesConfig.utsWeight}" @change="${this._updateGradesConfig}">
              </div>
              <div class="config-group">
                <span class="config-label">Bobot UAS (${this._gradesConfig.uasWeight}/${u})</span>
                <input type="number" id="uasWeight" class="config-input"
                       .value="${this._gradesConfig.uasWeight}" @change="${this._updateGradesConfig}">
              </div>
              <div class="config-group">
                <span class="config-label">Bobot Sikap (${this._gradesConfig.attitudeWeight}/${u})</span>
                <input type="number" id="attitudeWeight" class="config-input"
                       .value="${this._gradesConfig.attitudeWeight}" @change="${this._updateGradesConfig}">
              </div>
              <div class="config-group">
                <span class="config-label">Bobot Keterampilan (${this._gradesConfig.skillWeight}/${u})</span>
                <input type="number" id="skillWeight" class="config-input"
                       .value="${this._gradesConfig.skillWeight}" @change="${this._updateGradesConfig}">
              </div>
            </div>

            <div style="margin-top: 12px; display: flex; gap: 8px; align-items: center;">
              <button class="toggle-btn" style="font-size:11px;padding:6px 10px;background:#f3f0fa;" @click="${()=>this._resetWeights()}">
                🔄 Reset ke Default (1:3:2:2:0:0 = 8)
              </button>
            </div>

            <div style="margin-top: 16px; display: flex; gap: 12px; align-items: center;">
              <button class="toggle-btn" @click="${this._generateReport}">
                📥 Generate Laporan Rapor
              </button>
              <span style="font-size: 11px; color: #888;">Membuat sheet "Akumulasi Nilai Rapor" di Google Sheets</span>
            </div>

            <div class="simulated-roster-section">
              <div style="font-size: 12px; font-weight: bold; color: #6750a4; margin: 16px 0 8px;">
                📋 Daftar Mahasiswa & Status Aktivitas (${this._roster.length} terdaftar)
              </div>
              <div class="table-wrapper">
                <table style="font-size: 12px;">
                  <thead>
                    <tr>
                      <th>Nama Mahasiswa</th>
                      <th>Status Aktivitas</th>
                      <th>Log Aktivitas</th>
                      <th>Nilai Akhir Estimasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${A.map(v=>o`
                      <tr>
                        <td style="font-weight: 500;">${v.nama}</td>
                        <td>
                          <span style="font-size: 11px; padding: 2px 6px; border-radius: 4px; font-weight: bold;
                                       background-color: ${v.nilaiAkhir>=75?"#d1fae5":v.nilaiAkhir>=55?"#fef3c7":"#fee2e2"};
                                       color: ${v.nilaiAkhir>=75?"#065f46":v.nilaiAkhir>=55?"#92400e":"#991b1b"};">
                            ${v.emoji||"\u{1F4ED}"} ${v.statusAktivitas}
                          </span>
                        </td>
                        <td>${v.logAktivitas}</td>
                        <td style="font-weight: bold; color: #6750a4;">${v.nilaiAkhir}</td>
                      </tr>
                    `)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `:""}
      </div>
      `:o`<div class="grade-card"><p style="text-align:center;color:#888;padding:20px;">Transparansi nilai akan muncul setelah kuis diselesaikan atau pada waktu yang ditentukan.</p></div>`}
    `}}customElements.define(ut.tag,ut);var O={};(function k(t,e,i,s){var n=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",c=(function(){if(!t.OffscreenCanvas)return!1;try{var r=new OffscreenCanvas(1,1),a=r.getContext("2d");a.fillRect(0,0,1,1);var l=r.transferToImageBitmap();a.createPattern(l,"no-repeat")}catch{return!1}return!0})();function C(){}function u(r){var a=e.exports.Promise,l=a!==void 0?a:t.Promise;return typeof l=="function"?new l(r):(r(C,C),null)}var z=(function(r,a){return{transform:function(l){if(r)return l;if(a.has(l))return a.get(l);var p=new OffscreenCanvas(l.width,l.height),g=p.getContext("2d");return g.drawImage(l,0,0),a.set(l,p),p},clear:function(){a.clear()}}})(c,new Map),A=(function(){var r=Math.floor(16.666666666666668),a,l,p={},g=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(a=function(m){var f=Math.random();return p[f]=requestAnimationFrame(function h(b){g===b||g+r-1<b?(g=b,delete p[f],m()):p[f]=requestAnimationFrame(h)}),f},l=function(m){p[m]&&cancelAnimationFrame(p[m])}):(a=function(m){return setTimeout(m,r)},l=function(m){return clearTimeout(m)}),{frame:a,cancel:l}})(),v=(function(){var r,a,l={};function p(g){function m(f,h){g.postMessage({options:f||{},callback:h})}g.init=function(h){var b=h.transferControlToOffscreen();g.postMessage({canvas:b},[b])},g.fire=function(h,b,x){if(a)return m(h,null),a;var w=Math.random().toString(36).slice(2);return a=u(function(y){function $(T){T.data.callback===w&&(delete l[w],g.removeEventListener("message",$),a=null,z.clear(),x(),y())}g.addEventListener("message",$),m(h,w),l[w]=$.bind(null,{data:{callback:w}})}),a},g.reset=function(){g.postMessage({reset:!0});for(var h in l)l[h](),delete l[h]}}return function(){if(r)return r;if(!i&&n){var g=["var CONFETTI, SIZE = {}, module = {};","("+k.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([g])))}catch(m){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",m),null}p(r)}return r}})(),F={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function K(r,a){return a?a(r):r}function vt(r){return r!=null}function S(r,a,l){return K(r&&vt(r[a])?r[a]:F[a],l)}function _t(r){return r<0?0:Math.floor(r)}function xt(r,a){return Math.floor(Math.random()*(a-r))+r}function G(r){return parseInt(r,16)}function yt(r){return r.map(kt)}function kt(r){var a=String(r).replace(/[^0-9a-f]/gi,"");return a.length<6&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),{r:G(a.substring(0,2)),g:G(a.substring(2,4)),b:G(a.substring(4,6))}}function wt(r){var a=S(r,"origin",Object);return a.x=S(a,"x",Number),a.y=S(a,"y",Number),a}function $t(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function St(r){var a=r.getBoundingClientRect();r.width=a.width,r.height=a.height}function Ct(r){var a=document.createElement("canvas");return a.style.position="fixed",a.style.top="0px",a.style.left="0px",a.style.pointerEvents="none",a.style.zIndex=r,a}function Tt(r,a,l,p,g,m,f,h,b){r.save(),r.translate(a,l),r.rotate(m),r.scale(p,g),r.arc(0,0,1,f,h,b),r.restore()}function It(r){var a=r.angle*(Math.PI/180),l=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-a+(.5*l-Math.random()*l),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function At(r,a){a.x+=Math.cos(a.angle2D)*a.velocity+a.drift,a.y+=Math.sin(a.angle2D)*a.velocity+a.gravity,a.velocity*=a.decay,a.flat?(a.wobble=0,a.wobbleX=a.x+10*a.scalar,a.wobbleY=a.y+10*a.scalar,a.tiltSin=0,a.tiltCos=0,a.random=1):(a.wobble+=a.wobbleSpeed,a.wobbleX=a.x+10*a.scalar*Math.cos(a.wobble),a.wobbleY=a.y+10*a.scalar*Math.sin(a.wobble),a.tiltAngle+=.1,a.tiltSin=Math.sin(a.tiltAngle),a.tiltCos=Math.cos(a.tiltAngle),a.random=Math.random()+2);var l=a.tick++/a.totalTicks,p=a.x+a.random*a.tiltCos,g=a.y+a.random*a.tiltSin,m=a.wobbleX+a.random*a.tiltCos,f=a.wobbleY+a.random*a.tiltSin;if(r.fillStyle="rgba("+a.color.r+", "+a.color.g+", "+a.color.b+", "+(1-l)+")",r.beginPath(),d&&a.shape.type==="path"&&typeof a.shape.path=="string"&&Array.isArray(a.shape.matrix))r.fill(Mt(a.shape.path,a.shape.matrix,a.x,a.y,Math.abs(m-p)*.1,Math.abs(f-g)*.1,Math.PI/10*a.wobble));else if(a.shape.type==="bitmap"){var h=Math.PI/10*a.wobble,b=Math.abs(m-p)*.1,x=Math.abs(f-g)*.1,w=a.shape.bitmap.width*a.scalar,y=a.shape.bitmap.height*a.scalar,$=new DOMMatrix([Math.cos(h)*b,Math.sin(h)*b,-Math.sin(h)*x,Math.cos(h)*x,a.x,a.y]);$.multiplySelf(new DOMMatrix(a.shape.matrix));var T=r.createPattern(z.transform(a.shape.bitmap),"no-repeat");T.setTransform($),r.globalAlpha=1-l,r.fillStyle=T,r.fillRect(a.x-w/2,a.y-y/2,w,y),r.globalAlpha=1}else if(a.shape==="circle")r.ellipse?r.ellipse(a.x,a.y,Math.abs(m-p)*a.ovalScalar,Math.abs(f-g)*a.ovalScalar,Math.PI/10*a.wobble,0,2*Math.PI):Tt(r,a.x,a.y,Math.abs(m-p)*a.ovalScalar,Math.abs(f-g)*a.ovalScalar,Math.PI/10*a.wobble,0,2*Math.PI);else if(a.shape==="star")for(var _=Math.PI/2*3,I=4*a.scalar,M=8*a.scalar,E=a.x,L=a.y,D=5,P=Math.PI/D;D--;)E=a.x+Math.cos(_)*M,L=a.y+Math.sin(_)*M,r.lineTo(E,L),_+=P,E=a.x+Math.cos(_)*I,L=a.y+Math.sin(_)*I,r.lineTo(E,L),_+=P;else r.moveTo(Math.floor(a.x),Math.floor(a.y)),r.lineTo(Math.floor(a.wobbleX),Math.floor(g)),r.lineTo(Math.floor(m),Math.floor(f)),r.lineTo(Math.floor(p),Math.floor(a.wobbleY));return r.closePath(),r.fill(),a.tick<a.totalTicks}function zt(r,a,l,p,g){var m=a.slice(),f=r.getContext("2d"),h,b,x=u(function(w){function y(){h=b=null,f.clearRect(0,0,p.width,p.height),z.clear(),g(),w()}function $(){i&&!(p.width===s.width&&p.height===s.height)&&(p.width=r.width=s.width,p.height=r.height=s.height),!p.width&&!p.height&&(l(r),p.width=r.width,p.height=r.height),f.clearRect(0,0,p.width,p.height),m=m.filter(function(T){return At(f,T)}),m.length?h=A.frame($):y()}h=A.frame($),b=y});return{addFettis:function(w){return m=m.concat(w),x},canvas:r,promise:x,reset:function(){h&&A.cancel(h),b&&b()}}}function Z(r,a){var l=!r,p=!!S(a||{},"resize"),g=!1,m=S(a,"disableForReducedMotion",Boolean),f=n&&!!S(a||{},"useWorker"),h=f?v():null,b=l?$t:St,x=r&&h?!!r.__confetti_initialized:!1,w=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,y;function $(_,I,M){for(var E=S(_,"particleCount",_t),L=S(_,"angle",Number),D=S(_,"spread",Number),P=S(_,"startVelocity",Number),Lt=S(_,"decay",Number),qt=S(_,"gravity",Number),Nt=S(_,"drift",Number),tt=S(_,"colors",yt),Ut=S(_,"ticks",Number),et=S(_,"shapes"),Dt=S(_,"scalar"),Qt=!!S(_,"flat"),it=wt(_),st=E,V=[],Rt=r.width*it.x,Ot=r.height*it.y;st--;)V.push(It({x:Rt,y:Ot,angle:L,spread:D,startVelocity:P,color:tt[st%tt.length],shape:et[xt(0,et.length)],ticks:Ut,decay:Lt,gravity:qt,drift:Nt,scalar:Dt,flat:Qt}));return y?y.addFettis(V):(y=zt(r,V,b,I,M),y.promise)}function T(_){var I=m||S(_,"disableForReducedMotion",Boolean),M=S(_,"zIndex",Number);if(I&&w)return u(function(P){P()});l&&y?r=y.canvas:l&&!r&&(r=Ct(M),document.body.appendChild(r)),p&&!x&&b(r);var E={width:r.width,height:r.height};h&&!x&&h.init(r),x=!0,h&&(r.__confetti_initialized=!0);function L(){if(h){var P={getBoundingClientRect:function(){if(!l)return r.getBoundingClientRect()}};b(P),h.postMessage({resize:{width:P.width,height:P.height}});return}E.width=E.height=null}function D(){y=null,p&&(g=!1,t.removeEventListener("resize",L)),l&&r&&(document.body.contains(r)&&document.body.removeChild(r),r=null,x=!1)}return p&&!g&&(g=!0,t.addEventListener("resize",L,!1)),h?h.fire(_,E,D):$(_,E,D)}return T.reset=function(){h&&h.reset(),y&&y.reset()},T}var J;function X(){return J||(J=Z(null,{useWorker:!0,resize:!0})),J}function Mt(r,a,l,p,g,m,f){var h=new Path2D(r),b=new Path2D;b.addPath(h,new DOMMatrix(a));var x=new Path2D;return x.addPath(b,new DOMMatrix([Math.cos(f)*g,Math.sin(f)*g,-Math.sin(f)*m,Math.cos(f)*m,l,p])),x}function Et(r){if(!d)throw new Error("path confetti are not supported in this browser");var a,l;typeof r=="string"?a=r:(a=r.path,l=r.matrix);var p=new Path2D(a),g=document.createElement("canvas"),m=g.getContext("2d");if(!l){for(var f=1e3,h=f,b=f,x=0,w=0,y,$,T=0;T<f;T+=2)for(var _=0;_<f;_+=2)m.isPointInPath(p,T,_,"nonzero")&&(h=Math.min(h,T),b=Math.min(b,_),x=Math.max(x,T),w=Math.max(w,_));y=x-h,$=w-b;var I=10,M=Math.min(I/y,I/$);l=[M,0,0,M,-Math.round(y/2+h)*M,-Math.round($/2+b)*M]}return{type:"path",path:a,matrix:l}}function Pt(r){var a,l=1,p="#000000",g='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?a=r:(a=r.text,l="scalar"in r?r.scalar:l,g="fontFamily"in r?r.fontFamily:g,p="color"in r?r.color:p);var m=10*l,f=""+m+"px "+g,h=new OffscreenCanvas(m,m),b=h.getContext("2d");b.font=f;var x=b.measureText(a),w=Math.ceil(x.actualBoundingBoxRight+x.actualBoundingBoxLeft),y=Math.ceil(x.actualBoundingBoxAscent+x.actualBoundingBoxDescent),$=2,T=x.actualBoundingBoxLeft+$,_=x.actualBoundingBoxAscent+$;w+=$+$,y+=$+$,h=new OffscreenCanvas(w,y),b=h.getContext("2d"),b.font=f,b.fillStyle=p,b.fillText(a,T,_);var I=1/l;return{type:"bitmap",bitmap:h.transferToImageBitmap(),matrix:[I,0,0,I,-w*I/2,-y*I/2]}}e.exports=function(){return X().apply(this,arguments)},e.exports.reset=function(){X().reset()},e.exports.create=Z,e.exports.shapeFromPath=Et,e.exports.shapeFromText=Pt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),O,!1);var Ht=O.exports;O.exports.create;const gt=[{question:"Apa ibu kota Indonesia?",choices:["Bandung","Surabaya","Jakarta","Medan"],correctIndex:2},{question:"Berapa hasil dari 7 \xD7 8?",choices:["54","56","58","60"],correctIndex:1},{question:"Planet terdekat dengan Matahari adalah?",choices:["Venus","Bumi","Mars","Merkurius"],correctIndex:3}];class Q extends W(B(q)){static get tag(){return"explode-quiz"}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Explode Quiz",description:"Interactive multiple-choice quiz with confetti and Google Sheets integration",icon:"icons:question-answer",color:"purple",tags:["Education","Interactive","Content"]},settings:{configure:[{property:"scriptFunctionName",title:"Nama Fungsi Apps Script",description:"Nama fungsi Google Apps Script untuk menerima hasil kuis",inputMethod:"textfield"},{property:"quizCategory",title:"Kategori Kuis",description:"Kategori kuis: formatif, ulangan_harian, uts, atau uas",inputMethod:"select",options:{formatif:"Formatif (Absensi)",ulangan_harian:"Ulangan Harian",uts:"UTS",uas:"UAS"}},{property:"shuffleChoices",title:"Acak Pilihan Jawaban",description:"Mengacak urutan pilihan jawaban setiap kali kuis dimulai",inputMethod:"boolean"},{property:"hideAnswers",title:"Sembunyikan Jawaban",description:"Tidak menampilkan jawaban benar/salah setelah menjawab",inputMethod:"boolean"},{property:"hideConfetti",title:"Nonaktifkan Confetti",description:"Tidak menampilkan efek confetti saat jawaban benar",inputMethod:"boolean"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_screen","_studentName","_currentIndex","_score","_answered","_selectedIndex","_feedbackText","_feedbackPositive","_validationError","_nameInputValue","_editing","_tempQuestions","_editingIndex","_tempQuestionText","_tempChoice0","_tempChoice1","_tempChoice2","_tempChoice3","_tempCorrectIndex","_editorOrigin","editing","editable"]}}}static get properties(){return{...super.properties,questions:{type:Array,attribute:"questions",reflect:!0,converter:{fromAttribute(t){if(t==null||t==="")return;if(Array.isArray(t)||typeof t=="object")return t;const e=String(t).trim();if(!(!e||e==="[object Object]"||e==="undefined"||e==="null")&&(e.startsWith("[")||e.startsWith("{")))try{const i=JSON.parse(e);return Array.isArray(i)?i:i&&typeof i=="object"&&Array.isArray(i.questions)?i.questions:void 0}catch{return}},toAttribute(t){if(!Array.isArray(t))return null;try{return JSON.stringify(t)}catch{return null}}}},scriptFunctionName:{type:String,attribute:!0},spreadsheetId:{type:String,attribute:"spreadsheet-id",reflect:!0},accessToken:{type:String,attribute:"access-token"},appsScriptUrl:{type:String,attribute:"apps-script-url"},sheetName:{type:String,attribute:"sheet-name"},quizCategory:{type:String,attribute:"quiz-category"},shuffleChoices:{type:Boolean,attribute:"shuffle-choices",reflect:!0},hideAnswers:{type:Boolean,attribute:"hide-answers",reflect:!0},hideConfetti:{type:Boolean,attribute:"hide-confetti",reflect:!0},studentName:{type:String,attribute:"student-name"},studentId:{type:String,attribute:"student-id"},studentNis:{type:String,attribute:"student-nis"},studentAbsen:{type:String,attribute:"student-absen"},studentKelas:{type:String,attribute:"student-kelas"},editable:{type:Boolean,attribute:!0,reflect:!0},editing:{type:Boolean,attribute:!0,reflect:!0},_screen:{state:!0},_studentName:{state:!0},_currentIndex:{state:!0},_score:{state:!0},_answered:{state:!0},_selectedIndex:{state:!0},_feedbackText:{state:!0},_feedbackPositive:{state:!0},_validationError:{state:!0},_nameInputValue:{state:!0},_editing:{state:!0},_tempQuestions:{state:!0},_editingIndex:{state:!0},_tempQuestionText:{state:!0},_tempChoice0:{state:!0},_tempChoice1:{state:!0},_tempChoice2:{state:!0},_tempChoice3:{state:!0},_tempCorrectIndex:{state:!0},_editorOrigin:{state:!0},_tempQuestionImage:{state:!0},_tempQuestionType:{state:!0},_tempCorrectAnswers:{state:!0},_tempLeftItems:{state:!0},_tempRightItems:{state:!0},_tempCorrectPairs:{state:!0},_tempAcceptedAnswers:{state:!0},_tempAcceptedStatements:{state:!0},_shuffledQuestions:{state:!0},_selectedAnswers:{state:!0},_matchAnswers:{state:!0},_shortAnswerText:{state:!0},_tempQuestionPoints:{state:!0},_tempChoiceImage0:{state:!0},_tempChoiceImage1:{state:!0},_tempChoiceImage2:{state:!0},_tempChoiceImage3:{state:!0},_maxPoints:{state:!0}}}constructor(){super();let t=Ht;t&&typeof t!="function"&&typeof t.default=="function"&&(t=t.default),this._confettiFn=t,this.questions=gt,this.scriptFunctionName="submitQuizResult",this.spreadsheetId="",this.accessToken="",this.appsScriptUrl="",this.sheetName="Pertemuan",this.quizCategory="formatif",this.shuffleChoices=!1,this.hideAnswers=!1,this.hideConfetti=!1,this.studentName="",this.studentId="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.editable=!1,this._screen="name",this._studentName="",this._currentIndex=0,this._score=0,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._validationError="",this._nameInputValue="",this._editing=!1,this._tempQuestions=[],this._editingIndex=-1,this._tempQuestionText="",this._tempChoice0="",this._tempChoice1="",this._tempChoice2="",this._tempChoice3="",this._tempCorrectIndex="0",this._editorOrigin="result",this._shuffledQuestions=[],this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._tempQuestionImage="",this._tempQuestionType="mc",this._tempCorrectAnswers=[],this._tempLeftItems=["",""],this._tempRightItems=["",""],this._tempCorrectPairs={},this._tempAcceptedAnswers="",this._tempAcceptedStatements="[]",this._maxPoints=0,this._tempQuestionPoints=1,this._tempChoiceImage0="",this._tempChoiceImage1="",this._tempChoiceImage2="",this._tempChoiceImage3="",this.t={quizTitle:"Kuis Interaktif",quizInstruction:"Masukkan nama Anda untuk memulai kuis.",namePlaceholder:"Nama Anda...",startButton:"Mulai Kuis",validationNameEmpty:"Nama tidak boleh kosong.",validationNameShort:"Nama harus lebih dari 2 karakter.",questionOf:"Soal",of:"dari",scoreLabel:"Skor",feedbackCorrect:"Mantap, Benar!",feedbackWrongPrefix:"Yah, Salah. Jawaban benar: ",resultHeading:"Hasil Kuis",resultName:"Nama",resultScore:"Skor",resultTotal:"Total Soal",resultPercentage:"Persentase",messageHigh:"Luar Biasa! Kamu Hebat!",messageMedium:"Bagus! Terus Berlatih!",messageLow:"Jangan Menyerah! Coba Lagi!",restartButton:"Mulai Ulang",editTitle:"Edit Soal Kuis",closeEditor:"Tutup Editor",questionPlaceholder:"Tulis pertanyaan...",choicePlaceholder:"Pilihan {N}",choiceCorrectLabel:"Benar",addQuestionBtn:"Tambah Soal",editQuestionBtn:"Edit",deleteQuestionBtn:"Hapus",saveEditBtn:"Simpan Perubahan",cancelEditBtn:"Batal",saveAllBtn:"Simpan & Keluar",cancelAllBtn:"Batal",minQuestionsError:"Minimal 3 soal harus tersedia",emptyQuestionError:"Pertanyaan tidak boleh kosong",emptyChoiceError:"Semua pilihan jawaban harus diisi",ariaNameInput:"Kolom nama siswa",ariaStartButton:"Tombol mulai kuis",ariaAnswerButton:"Pilihan jawaban",ariaRestartButton:"Mulai ulang kuis",ariaScoreDisplay:"Skor saat ini",ariaProgressLabel:"Kemajuan kuis",ariaFeedback:"Umpan balik jawaban",ariaEditTitle:"Panel editor soal kuis",ariaCloseEditor:"Tutup panel editor",ariaAddForm:"Formulir tambah soal baru",ariaQuestionInput:"Teks pertanyaan",ariaChoiceInput:"Pilihan jawaban {N}",ariaCorrectChoice:"Pilihan jawaban benar",ariaQuestionsList:"Daftar soal yang tersedia",ariaQuestionCard:"Kartu soal",ariaEditQuestion:"Edit soal ini",ariaDeleteQuestion:"Hapus soal ini",ariaSaveEdit:"Simpan perubahan soal",ariaCancelEdit:"Batal mengedit soal",ariaSaveAll:"Simpan semua perubahan dan keluar",ariaCancelAll:"Batal semua perubahan dan keluar"}}updated(t){super.updated(t),this.questions&&this.questions.length===0&&(this.questions=gt),t.has("studentName")&&this.studentName&&(this._studentName=this.studentName,this._screen==="name"&&(this._screen="quiz"))}connectedCallback(){if(super.connectedCallback(),this._authHandler=t=>{t.detail.studentId&&(this.studentId=t.detail.studentId),t.detail.nama&&(this.studentName=t.detail.nama),t.detail.nis&&(this.studentNis=t.detail.nis),t.detail.absen&&(this.studentAbsen=t.detail.absen),t.detail.kelas&&(this.studentKelas=t.detail.kelas)},window.addEventListener("quiz-user-login",this._authHandler),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[Q.tag]&&(t.elementList[Q.tag]=Q.haxProperties)}}get _inHaxEditor(){return!!(globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"&&globalThis.HaxStore.requestAvailability().editMode)}_fireConfetti(){if(typeof this._confettiFn=="function")try{const t={ticks:220,gravity:.85,decay:.92,startVelocity:42,zIndex:9999};this._confettiFn({...t,particleCount:70,spread:85,scalar:1.05,origin:{x:.5,y:.62}}),this._confettiFn({...t,particleCount:45,angle:58,spread:65,scalar:1.1,origin:{x:.1,y:.7}}),this._confettiFn({...t,particleCount:45,angle:122,spread:65,scalar:1.1,origin:{x:.9,y:.7}})}catch(t){console.error("[explode-quiz] Konfeti gagal dieksekusi:",t)}}_fireMegaConfetti(){if(typeof this._confettiFn=="function")try{const t=Date.now()+900,e=()=>{this._confettiFn({particleCount:3,angle:60,spread:55,origin:{x:0,y:.7},colors:["#ff0000","#00ff00","#0000ff","#ffff00"]}),this._confettiFn({particleCount:3,angle:120,spread:55,origin:{x:1,y:.7},colors:["#ff0000","#00ff00","#0000ff","#ffff00"]}),Date.now()<t&&requestAnimationFrame(e)};e()}catch(t){console.error("[explode-quiz] Mega konfeti gagal dieksekusi:",t)}}_getMaxPoints(){return(this.questions||[]).reduce((t,e)=>t+(e.points||1),0)}_shuffleArray(t){const e=[...t];for(let i=e.length-1;i>0;i--){const s=Math.floor(Math.random()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e}_startQuiz(){const t=this._nameInputValue.trim();if(t.length<=2){this._validationError=t.length===0?this.t.validationNameEmpty:this.t.validationNameShort;return}this._studentName=t,this._validationError="",this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this.shuffleChoices?this._shuffledQuestions=this.questions.map(e=>{if(!e.choices)return{...e};const i=e.choices.map((n,d)=>({text:n,origIndex:d})),s=this._shuffleArray(i);return{...e,choices:s.map(n=>n.text),_correctMap:s.map(n=>n.origIndex)}}):this._shuffledQuestions=[],this._screen="question"}_renderNameScreen(){return o`
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
      ${this._validationError?o`<p class="validation-error">${this._validationError}</p>`:""}
      <button
        class="edit-questions-btn"
        @click="${this._openEditorFromName}"
        aria-label="${this.t.ariaCloseEditor}"
        ?hidden="${!this._inHaxEditor&&!this.editable}"
      >
        ${this.t.editTitle}
      </button>
    `}_renderQuestionScreen(){const t=this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions,e=t[this._currentIndex],i=`${this.t.questionOf} ${this._currentIndex+1} ${this.t.of} ${t.length}`,s=e.type||"mc",n=Array.isArray(e.correctAnswers);return o`
      <header class="quiz-header">
        <span class="progress-label">${i}</span>
        <span class="score-display">${this.t.scoreLabel}: ${this._score}</span>
      </header>

      <div class="question-text">${e.question}</div>
      ${e.image?o`<div style="text-align:center;margin:12px 0;"><img src="${e.image}" alt="Gambar soal" style="max-width:100%;border-radius:8px;border:1px solid #e0e0e0;"></div>`:""}

      ${s==="matching"?this._renderMatching(e):""}
      ${s==="shortAnswer"?this._renderShortAnswer(e):""}
      ${s==="pgk"?this._renderPGK(e):""}
      ${s==="mc"?this._renderMC(e,n):""}

      ${this._feedbackText?o`<div class="feedback-area ${this._feedbackPositive?"positive":"negative"}" aria-live="polite">${this._feedbackText}</div>`:""}

      ${this.editable?o`<button class="edit-questions-btn" style="margin-top:12px;font-size:12px;padding:6px 12px;" @click="${this._openEditor}">✏️ Edit Soal</button>`:""}
    `}_getChoiceText(t){return typeof t=="string"?t:t?.text||""}_getChoiceImage(t){return typeof t=="string"?null:t?.image||null}_renderMC(t,e){return o`<div class="answer-grid">
      ${t.choices.map((i,s)=>{let n="answer-btn";const d=e?this._selectedAnswers.has(s):s===this._selectedIndex;if(this._answered&&!this.hideAnswers){const c=t.correctAnswers||(t.correctIndex!=null?[t.correctIndex]:[]);(t._correctMap||c).includes(s)?n+=" answer-btn--correct":d&&(n+=" answer-btn--wrong")}else(e&&d||!e&&d)&&(n+=" answer-btn--selected");return o`<button class="${n}" ?disabled="${this._answered}"
          @click="${()=>e?this._toggleMultiAnswer(s):this._selectAnswer(s)}"
          aria-label="${this.t.ariaAnswerButton}: ${this._getChoiceText(i)}">
          ${this._getChoiceImage(i)?o`<img src="${this._getChoiceImage(i)}" alt="" style="max-height:60px;border-radius:6px;object-fit:contain;display:block;margin:0 auto 4px;">`:""}
          ${e&&d?"\u2713 ":""}${this._getChoiceText(i)}</button>`})}
      ${e&&!this._answered?o`<button class="start-btn" style="margin-top:12px;font-size:13px;" @click="${()=>this._submitMultiAnswers()}">Kirim Jawaban (${this._selectedAnswers.size} dipilih)</button>`:""}
    </div>`}_renderPGK(t){const e=t.statements||[];return o`<table style="width:100%;border-collapse:collapse;font-size:13px;margin:12px 0;">
      <thead><tr style="background:#f3f0fa;">
        <th style="text-align:left;padding:8px;">Pernyataan</th>
        <th style="text-align:center;width:80px;">Benar</th>
        <th style="text-align:center;width:80px;">Salah</th>
      </tr></thead>
      <tbody>
        ${e.map((i,s)=>o`<tr style="border-bottom:1px solid #eee;">
          <td style="padding:8px;">${i.text}</td>
          <td style="text-align:center;"><input type="radio" name="pgk_${this._currentIndex}_${s}" value="true"
            ?disabled="${this._answered}" @change="${()=>this._setPGK(s,!0)}"
            ${this._matchAnswers[s]===!0?"checked":""}></td>
          <td style="text-align:center;"><input type="radio" name="pgk_${this._currentIndex}_${s}" value="false"
            ?disabled="${this._answered}" @change="${()=>this._setPGK(s,!1)}"
            ${this._matchAnswers[s]===!1?"checked":""}></td>
        </tr>`)}
      </tbody>
    </table>
    ${this._answered?"":o`<button class="start-btn" style="margin-top:12px;font-size:13px;" @click="${()=>this._submitPGK()}">Kirim Jawaban</button>`}`}_renderMatching(t){const e=t.leftItems||[],i=t.rightItems||[];return o`<div style="margin:12px 0;">
      ${e.map((s,n)=>o`<div style="display:flex;align-items:center;gap:12px;margin:8px 0;font-size:13px;">
        <span style="min-width:200px;font-weight:500;">${n+1}. ${s}</span>
        <span style="font-size:18px;">→</span>
        <select ?disabled="${this._answered}" style="padding:6px 10px;border-radius:6px;border:1px solid #ccc;font-size:13px;"
          @change="${d=>{this._matchAnswers={...this._matchAnswers,[n]:parseInt(d.target.value)},this.requestUpdate()}}">
          <option value="-1">-- Pilih --</option>
          ${i.map((d,c)=>o`<option value="${c}" ?selected="${this._matchAnswers[n]===c}">${String.fromCharCode(65+c)}. ${d}</option>`)}
        </select>
      </div>`)}
      ${this._answered?"":o`<button class="start-btn" style="margin-top:12px;font-size:13px;" @click="${()=>this._submitMatching()}">Kirim Jawaban</button>`}
    </div>`}_renderShortAnswer(t){return o`<div style="margin:12px 0;">
      <input type="text" ?disabled="${this._answered}" placeholder="Ketik jawaban..."
        style="width:100%;padding:10px 14px;border-radius:8px;border:1px solid #ccc;font-size:14px;box-sizing:border-box;"
        .value="${this._shortAnswerText}" @input="${e=>{this._shortAnswerText=e.target.value}}">
      ${this._answered?"":o`<button class="start-btn" style="margin-top:12px;font-size:13px;" @click="${()=>this._submitShortAnswer()}">Kirim Jawaban</button>`}
    </div>`}_selectAnswer(t){if(this._answered)return;this._answered=!0,this._selectedIndex=t;const e=(this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions)[this._currentIndex],i=e.correctAnswers||(e.correctIndex!=null?[e.correctIndex]:[]);if(i.includes(t))this._score+=e.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti();else if(!this.hideAnswers){const s=i.map(n=>e.choices[n]).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${s}`,this._feedbackPositive=!1}setTimeout(()=>{this._advanceQuiz()},1200)}_toggleMultiAnswer(t){if(this._answered)return;const e=new Set(this._selectedAnswers);e.has(t)?e.delete(t):e.add(t),this._selectedAnswers=e}_submitMultiAnswers(){if(this._answered||this._selectedAnswers.size===0)return;this._answered=!0;const t=(this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions)[this._currentIndex],e=new Set(t.correctAnswers||[]),i=this._selectedAnswers;if(e.size===i.size&&[...e].every(s=>i.has(s)))this._score+=t.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti();else if(!this.hideAnswers){const s=[...e].map(n=>t.choices[n]).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${s}`,this._feedbackPositive=!1}setTimeout(()=>this._advanceQuiz(),1200)}_setPGK(t,e){this._answered||(this._matchAnswers={...this._matchAnswers,[t]:e})}_submitPGK(){if(this._answered)return;const t=(this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions)[this._currentIndex],e=t.statements||[];if(Object.keys(this._matchAnswers).length<e.length)return;this._answered=!0;const i=e.map(n=>n.answer);let s=!0;for(let n=0;n<e.length;n++)if(this._matchAnswers[n]!==i[n]){s=!1;break}if(s)this._score+=t.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti();else if(!this.hideAnswers){const n=e.map((d,c)=>`${c+1}: ${d.answer?"Benar":"Salah"}`).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${n}`,this._feedbackPositive=!1}setTimeout(()=>this._advanceQuiz(),1200)}_submitMatching(){if(this._answered)return;const t=(this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions)[this._currentIndex],e=t.leftItems||[],i=t.correctPairs||{};if(Object.keys(this._matchAnswers).length<e.length)return;this._answered=!0;let s=0;for(let c=0;c<e.length;c++)this._matchAnswers[c]===i[c]&&s++;const n=t.points||1,d=Math.round(s/e.length*n);if(this._score+=d,!this.hideAnswers)if(s===e.length)this._feedbackText=`${this.t.feedbackCorrect} (${s}/${e.length} pasangan benar, +${d} poin)`,this._feedbackPositive=!0;else if(s>0)this._feedbackText=`${s}/${e.length} pasangan benar (+${d} poin). Lanjutkan!`,this._feedbackPositive=!0;else{const c=Object.entries(i).map(([C,u])=>`${parseInt(C)+1}\u2192${String.fromCharCode(65+u)}`).join(", ");this._feedbackText=`${this.t.feedbackWrongPrefix}${c}`,this._feedbackPositive=!1}!this.hideConfetti&&s===e.length&&this._fireConfetti(),setTimeout(()=>this._advanceQuiz(),1200)}_submitShortAnswer(){if(this._answered)return;const t=this._shortAnswerText.trim().toLowerCase();if(!t)return;this._answered=!0;const e=(this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions)[this._currentIndex];(e.acceptedAnswers||[]).map(i=>i.toLowerCase()).some(i=>t.includes(i))?(this._score+=e.points||1,this.hideAnswers||(this._feedbackText=this.t.feedbackCorrect,this._feedbackPositive=!0),this.hideConfetti||this._fireConfetti()):this.hideAnswers||(this._feedbackText=`${this.t.feedbackWrongPrefix}${(e.acceptedAnswers||[]).join(" / ")}`,this._feedbackPositive=!1),setTimeout(()=>this._advanceQuiz(),1200)}_advanceQuiz(){const t=this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions;if(this._currentIndex<t.length-1)this._currentIndex+=1,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._maxPoints=this._getMaxPoints();else{this._submitToSheets(this._studentName,this._score);const e=Math.round(this._score/this._maxPoints*100);this.dispatchEvent(new CustomEvent("quiz-saved",{detail:{name:this._studentName,score:e},bubbles:!0,composed:!0})),this._screen="result",this._score/this._maxPoints>=.8&&this._fireConfetti()}}_renderResultScreen(){const t=Math.round(this._score/this._maxPoints*100);let e=this.t.messageLow;return t>=80?e=this.t.messageHigh:t>=50&&(e=this.t.messageMedium),o`
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
    `}_restartQuiz(){this._screen=this.studentName?"quiz":"name",this._studentName=this.studentName||"",this._currentIndex=0,this._score=0,this._answered=!1,this._selectedIndex=-1,this._feedbackText="",this._feedbackPositive=!1,this._validationError="",this._nameInputValue="",this._editing=!1,this._tempQuestions=[],this._editingIndex=-1,this._tempQuestionText="",this._tempChoice0="",this._tempChoice1="",this._tempChoice2="",this._tempChoice3="",this._tempCorrectIndex="0",this._editorOrigin="result"}_submitToSheets(t,e){const i=Math.round(e/this._maxPoints*100);if(this.appsScriptUrl){console.log("[explode-quiz] Mengirim ke Apps Script URL...",t,i);const s=new URLSearchParams({action:"submit",name:t,score:i,totalQuestions:this.questions.length,totalPoints:this._maxPoints,timestamp:new Date().toISOString(),sheet:this.sheetName||"Pertemuan",studentId:this.studentId||"",nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",quizCategory:this.quizCategory||"formatif",type:"quiz"}),n=`${this.appsScriptUrl}?${s.toString()}`;fetch(n,{redirect:"follow"}).then(d=>d.json()).then(d=>{console.log("[explode-quiz] Tersimpan:",d),this.dispatchEvent(new CustomEvent("quiz-saved",{detail:{name:t,score:i,data:d},bubbles:!0,composed:!0}))}).catch(d=>{console.error("[explode-quiz] Error menyimpan ke Google Sheets:",d)});return}if(this.spreadsheetId){console.log("[explode-quiz] Mengirim ke Sheets API via backend...",t,e),fetch("/api/save-quiz-result",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({spreadsheetId:this.spreadsheetId,name:t,score:e,accessToken:this.accessToken||""})}).then(s=>{if(!s.ok)throw new Error("Gagal menyimpan hasil kuis");return s.json()}).then(s=>{console.log("[explode-quiz] Data berhasil disimpan ke Google Sheets:",s),this.dispatchEvent(new CustomEvent("quiz-saved",{detail:{name:t,score:i,data:s},bubbles:!0,composed:!0}))}).catch(s=>{console.error("[explode-quiz] Error menyimpan ke Google Sheets:",s)});return}if(typeof globalThis.google<"u"&&globalThis.google?.script?.run){const s={timestamp:new Date().toISOString(),name:t,score:e};globalThis.google.script.run.withSuccessHandler(()=>console.log("[explode-quiz] Data berhasil dikirim ke Sheets")).withFailureHandler(n=>console.error("[explode-quiz] Gagal mengirim ke Sheets:",n))[this.scriptFunctionName](s);return}console.warn("[explode-quiz] Google Sheets belum dikonfigurasi (spreadsheet-id / access-token kosong)")}_openEditor(){this._editing||this._screen!=="result"&&this._screen!=="question"||(this._editing=!0,this._editingIndex=-1,this._tempQuestions=JSON.parse(JSON.stringify(this.questions)),this._screen="editor")}_openEditorFromName(){this._screen==="name"&&(this._editing||(this._editing=!0,this._editingIndex=-1,this._tempQuestions=JSON.parse(JSON.stringify(this.questions)),this._editorOrigin="name",this._screen="editor"))}_renderEditorScreen(){const t=this._tempQuestionType||"mc";return o`
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
          ${this._tempQuestionImage?o`<div style="text-align:center;margin:8px 0;"><img src="${this._tempQuestionImage}" style="max-width:200px;border-radius:6px;border:1px solid #ddd;"></div>`:""}

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
          ${this._tempQuestions.map((e,i)=>o`
            <div class="question-card">
              ${this._editingIndex===i?o`
                <div class="edit-form">
                  <div style="display:flex;gap:8px;margin-bottom:8px;">
                    <select style="padding:6px 10px;border-radius:6px;border:1px solid #ccc;font-size:13px;"
                      .value="${this._tempQuestionType}" @change="${s=>{this._tempQuestionType=s.target.value}}">
                      <option value="mc">Pilihan Ganda</option>
                      <option value="pgk">PG Kompleks</option>
                      <option value="matching">Menjodohkan</option>
                      <option value="shortAnswer">Isian Singkat</option>
                    </select>
                    <input type="text" style="flex:1;padding:6px 10px;border-radius:6px;border:1px solid #ccc;font-size:13px;"
                      placeholder="URL gambar" .value="${this._tempQuestionImage}"
                      @input="${s=>{this._tempQuestionImage=s.target.value}}">
                    <label style="font-size:12px;color:#555;white-space:nowrap;">Poin:</label>
                    <input type="number" min="1" style="width:50px;padding:6px;border-radius:6px;border:1px solid #ccc;font-size:13px;text-align:center;"
                      .value="${this._tempQuestionPoints}" @input="${s=>{this._tempQuestionPoints=parseInt(s.target.value)||1}}">
                  </div>
                  <textarea class="edit-question-text-input" .value="${this._tempQuestionText}"
                    @input="${s=>this._tempQuestionText=s.target.value}"
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
              `:o`
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <div>
                    <strong style="color:#6750a4;">[${(e.type||"mc").toUpperCase()}]</strong> ${e.question}
                    ${e.image?o`<span style="font-size:11px;color:#888;">[gambar]</span>`:""}
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
    `}_renderEditorMC(){return this._tempCorrectAnswers.length>1,o`
      <div class="choices-container">
        ${[0,1,2,3].map(t=>o`
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
            ${this[`_tempChoiceImage${t}`]?o`<img src="${this[`_tempChoiceImage${t}`]}" style="max-height:32px;border-radius:3px;margin-left:auto;">`:""}
          </div>
        `)}
      </div>
      ${this._tempCorrectAnswers.length<=1?o`
        <div style="font-size:11px;color:#888;margin-top:4px;">Pilih 1 jawaban benar. Centang lebih dari 1 untuk mode PG Kompleks.</div>
      `:o`
        <div style="font-size:11px;color:#6750a4;margin-top:4px;font-weight:bold;">Mode PG Kompleks: ${this._tempCorrectAnswers.length} jawaban benar dipilih</div>
      `}
    `}_renderEditorPGK(){let t=[];try{t=JSON.parse(this._tempAcceptedStatements||"[]")}catch{}return o`<div style="margin:8px 0;font-size:13px;">
      <div style="font-weight:500;margin-bottom:4px;">Pernyataan (JSON array, format: [{"text":"...","answer":true}]):</div>
      <textarea style="width:100%;min-height:80px;padding:8px;border-radius:6px;border:1px solid #ccc;font-size:12px;font-family:monospace;"
        .value="${this._tempAcceptedStatements}" @input="${e=>{this._tempAcceptedStatements=e.target.value}}"></textarea>
    </div>`}_renderEditorMatching(){return o`<div style="margin:8px 0;font-size:13px;">
      <div style="display:flex;gap:16px;">
        <div style="flex:1;">
          <div style="font-weight:500;margin-bottom:4px;">Item Kiri:</div>
          ${this._tempLeftItems.map((t,e)=>o`
            <input style="width:100%;padding:4px 8px;margin:4px 0;border-radius:4px;border:1px solid #ccc;font-size:12px;"
              .value="${t}" @input="${i=>{const s=[...this._tempLeftItems];s[e]=i.target.value,this._tempLeftItems=s}}"
              placeholder="Item ${e+1}">
          `)}
          <button type="button" style="font-size:11px;margin-top:4px;padding:2px 8px;border-radius:4px;border:1px solid #ccc;"
            @click="${()=>{this._tempLeftItems=[...this._tempLeftItems,""]}}">+ Tambah</button>
        </div>
        <div style="flex:1;">
          <div style="font-weight:500;margin-bottom:4px;">Item Kanan:</div>
          ${this._tempRightItems.map((t,e)=>o`
            <input style="width:100%;padding:4px 8px;margin:4px 0;border-radius:4px;border:1px solid #ccc;font-size:12px;"
              .value="${t}" @input="${i=>{const s=[...this._tempRightItems];s[e]=i.target.value,this._tempRightItems=s}}"
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
    </div>`}_renderEditorShortAnswer(){return o`<div style="margin:8px 0;font-size:13px;">
      <div style="font-weight:500;margin-bottom:4px;">Jawaban yang diterima (pisahkan koma):</div>
      <input style="width:100%;padding:6px 10px;border-radius:6px;border:1px solid #ccc;font-size:13px;"
        placeholder="contoh: biomassa, sekam padi, limbah pertanian"
        .value="${this._tempAcceptedAnswers}" @input="${t=>{this._tempAcceptedAnswers=t.target.value}}">
    </div>`}_addQuestion(){if(!this._tempQuestionText.trim()){console.warn(this.t.emptyQuestionError);return}const t=this._tempQuestionType||"mc",e={type:t,question:this._tempQuestionText.trim()};if(this._tempQuestionImage.trim()&&(e.image=this._tempQuestionImage.trim()),this._tempQuestionPoints>1&&(e.points=this._tempQuestionPoints),t==="mc"){if(!this._tempChoice0.trim()||!this._tempChoice1.trim()){console.warn(this.t.emptyChoiceError);return}e.choices=[0,1,2,3].map(i=>{const s=this[`_tempChoice${i}`]?.trim();if(!s)return null;const n=this[`_tempChoiceImage${i}`]?.trim();return n?{text:s,image:n}:s}).filter(Boolean),this._tempCorrectAnswers.length>1?e.correctAnswers=[...this._tempCorrectAnswers]:e.correctIndex=parseInt(this._tempCorrectIndex,10)}else t==="pgk"?e.statements=JSON.parse(this._tempAcceptedStatements||"[]"):t==="matching"?(e.leftItems=[...this._tempLeftItems],e.rightItems=[...this._tempRightItems],e.correctPairs={...this._tempCorrectPairs}):t==="shortAnswer"&&(e.acceptedAnswers=this._tempAcceptedAnswers.split(",").map(i=>i.trim()).filter(Boolean));this._tempQuestions=[...this._tempQuestions,e],this._resetEditorForm()}_deleteQuestion(t){if(this._tempQuestions.length<=3){console.warn(this.t.minQuestionsError);return}this._tempQuestions=this._tempQuestions.filter((e,i)=>i!==t),this._editingIndex===t?(this._editingIndex=-1,this._resetEditorForm()):this._editingIndex>t&&this._editingIndex--}_resetEditorForm(){this._tempQuestionText="",this._tempChoice0="",this._tempChoice1="",this._tempChoice2="",this._tempChoice3="",this._tempChoiceImage0="",this._tempChoiceImage1="",this._tempChoiceImage2="",this._tempChoiceImage3="",this._tempCorrectIndex="0",this._tempCorrectAnswers=[],this._tempQuestionImage="",this._tempQuestionType="mc",this._tempQuestionPoints=1,this._tempLeftItems=["",""],this._tempRightItems=["",""],this._tempCorrectPairs={},this._tempAcceptedAnswers="",this._tempAcceptedStatements="[]"}_startEditQuestion(t){if(t<0||t>=this._tempQuestions.length)return;this._editingIndex=t;const e=this._tempQuestions[t];this._tempQuestionText=e.question,this._tempQuestionImage=e.image||"",this._tempQuestionType=e.type||"mc",this._tempQuestionPoints=e.points||1;const i=e.choices||[];this._tempChoice0=this._getChoiceText(i[0])||"",this._tempChoice1=this._getChoiceText(i[1])||"",this._tempChoice2=this._getChoiceText(i[2])||"",this._tempChoice3=this._getChoiceText(i[3])||"",this._tempChoiceImage0=this._getChoiceImage(i[0])||"",this._tempChoiceImage1=this._getChoiceImage(i[1])||"",this._tempChoiceImage2=this._getChoiceImage(i[2])||"",this._tempChoiceImage3=this._getChoiceImage(i[3])||"",this._tempCorrectIndex=e.correctIndex!=null?e.correctIndex.toString():"0",this._tempCorrectAnswers=e.correctAnswers||[],this._tempLeftItems=e.leftItems||["",""],this._tempRightItems=e.rightItems||["",""],this._tempCorrectPairs=e.correctPairs||{},this._tempAcceptedAnswers=(e.acceptedAnswers||[]).join(", "),this._tempAcceptedStatements=JSON.stringify(e.statements||[])}_saveEditQuestion(){if(!this._tempQuestionText.trim()){console.warn(this.t.emptyQuestionError);return}if(this._editingIndex<0||this._editingIndex>=this._tempQuestions.length)return;const t=this._tempQuestionType||"mc",e={type:t,question:this._tempQuestionText.trim()};this._tempQuestionImage.trim()&&(e.image=this._tempQuestionImage.trim()),this._tempQuestionPoints>1&&(e.points=this._tempQuestionPoints),t==="mc"?(e.choices=[0,1,2,3].map(i=>{const s=this[`_tempChoice${i}`]?.trim();if(!s)return null;const n=this[`_tempChoiceImage${i}`]?.trim();return n?{text:s,image:n}:s}).filter(Boolean),this._tempCorrectAnswers.length>1?e.correctAnswers=[...this._tempCorrectAnswers]:e.correctIndex=parseInt(this._tempCorrectIndex,10)):t==="pgk"?e.statements=JSON.parse(this._tempAcceptedStatements||"[]"):t==="matching"?(e.leftItems=[...this._tempLeftItems],e.rightItems=[...this._tempRightItems],e.correctPairs={...this._tempCorrectPairs}):t==="shortAnswer"&&(e.acceptedAnswers=this._tempAcceptedAnswers.split(",").map(i=>i.trim()).filter(Boolean)),this._tempQuestions=this._tempQuestions.map((i,s)=>s===this._editingIndex?e:i),this._editingIndex=-1,this._resetEditorForm()}_cancelEditQuestion(){this._editingIndex<0||(this._editingIndex=-1,this._resetEditorForm())}_saveAll(){this._screen==="editor"&&(this.questions=JSON.parse(JSON.stringify(this._tempQuestions)),this._editing=!1,this._editingIndex=-1,this._screen=this._editorOrigin||"result",this._editorOrigin="result",this.dispatchEvent(new CustomEvent("questions-changed",{bubbles:!0,composed:!0,detail:{questions:this.questions}})))}_cancelAll(){this._screen==="editor"&&(this._editing=!1,this._editingIndex=-1,this._screen=this._editorOrigin||"result",this._editorOrigin="result")}render(){switch(this._screen){case"name":return this._renderNameScreen();case"question":return this._renderQuestionScreen();case"result":return this._renderResultScreen();case"editor":return this._renderEditorScreen();default:return this._renderNameScreen()}}static get styles(){return[super.styles,N`
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
      `]}disconnectedCallback(){super.disconnectedCallback(),this._authHandler&&window.removeEventListener("quiz-user-login",this._authHandler)}}globalThis.customElements.define(Q.tag,Q);class mt extends W(B(q)){static get tag(){return"quiz-user-auth"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},_screen:{state:!0},_nama:{state:!0},_email:{state:!0},_nis:{state:!0},_absen:{state:!0},_kelas:{state:!0},_studentId:{state:!0},_errorMsg:{state:!0},_successMsg:{state:!0},_loading:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this._screen="check",this._nama="",this._email="",this._nis="",this._absen="",this._kelas="",this._studentId="",this._errorMsg="",this._successMsg="",this._loading=!1,this.t={...this.t,login:"Masuk",register:"Daftar",nama:"Nama Lengkap",email:"Email",nis:"NIS",absen:"Nomor Absen",kelas:"Kelas",namaPlaceholder:"Contoh: Ahmad Dahlan",emailPlaceholder:"contoh@email.com",nisPlaceholder:"Contoh: 1234567",absenPlaceholder:"Contoh: 01",kelasPlaceholder:"Contoh: XII-IPA-1",welcome:"Selamat datang",logout:"Keluar",id:"ID"}}connectedCallback(){super.connectedCallback();const t=this._load("quiz_user_session");t?.studentId?(this._studentId=t.studentId,this._nama=t.nama,this._email=t.email,this._nis=t.nis||"",this._absen=t.absen||"",this._kelas=t.kelas||"",queueMicrotask(()=>this._verifySession())):this._screen="login"}_load(t){try{return JSON.parse(localStorage.getItem(t))}catch{return null}}_save(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}_clear(t){try{localStorage.removeItem(t)}catch{}}async _verifySession(){if(!this.appsScriptUrl||this.appsScriptUrl.trim()===""){this._screen="login";return}this._loading=!0;try{const t=`${this.appsScriptUrl}?action=verify&studentId=${encodeURIComponent(this._studentId)}`,e=await fetch(t),i=e.headers.get("content-type");if(!i||!i.includes("application/json"))throw new Error("Respon bukan JSON");const s=await e.json();s.status==="success"?(this._nama=s.nama,this._nis=s.nis||"",this._absen=s.absen||"",this._kelas=s.kelas||"",this._screen="logged-in",this._dispatchLogin()):(this._clear("quiz_user_session"),this._screen="login")}catch{this._screen="login"}this._loading=!1}async _handleLogin(t){if(t.preventDefault(),this._errorMsg="",!this.appsScriptUrl||this.appsScriptUrl.trim()===""){this._errorMsg="URL Apps Script belum dikonfigurasi. Harap hubungi administrator.";return}this._loading=!0;try{const e=`${this.appsScriptUrl}?action=login&nis=${encodeURIComponent(this._nis.trim())}&email=${encodeURIComponent(this._email.trim())}`,i=await fetch(e),s=i.headers.get("content-type");if(!s||!s.includes("application/json"))throw new Error("Respon dari server bukan format JSON. Periksa URL Apps Script.");const n=await i.json();n.status==="success"?(this._studentId=n.studentId,this._nama=n.nama,this._nis=n.nis||this._nis,this._absen=n.absen||"",this._kelas=n.kelas||"",this._save("quiz_user_session",{studentId:n.studentId,nama:n.nama,email:this._email.trim(),nis:this._nis,absen:this._absen,kelas:this._kelas}),this._screen="logged-in",this._dispatchLogin()):this._errorMsg=n.message||"Login gagal"}catch{this._errorMsg="Gagal menghubungi server"}this._loading=!1}async _handleRegister(t){if(t.preventDefault(),this._errorMsg="",!this.appsScriptUrl||this.appsScriptUrl.trim()===""){this._errorMsg="URL Apps Script belum dikonfigurasi. Harap hubungi administrator.",this._loading=!1;return}this._loading=!0;try{const e=new URLSearchParams({action:"register",nama:this._nama.trim(),email:this._email.trim(),nis:this._nis.trim(),absen:this._absen.trim(),kelas:this._kelas.trim()}),i=`${this.appsScriptUrl}?${e.toString()}`,s=await fetch(i,{redirect:"follow"}),n=s.headers.get("content-type");if(!n||!n.includes("application/json"))throw new Error("Respon dari server bukan format JSON. Periksa URL Apps Script.");const d=await s.json();d.status==="success"?(this._successMsg="Pendaftaran berhasil!",this._screen="login"):this._errorMsg=d.message||"Gagal mendaftar"}catch(e){console.error(e),this._errorMsg="Gagal menghubungi server."}finally{this._loading=!1}}_handleLogout(){this._clear("quiz_user_session"),this._studentId="",this._nama="",this._email="",this._nis="",this._absen="",this._kelas="",this._screen="login",window.dispatchEvent(new CustomEvent("quiz-user-logout",{bubbles:!0,composed:!0}))}_dispatchLogin(){window.dispatchEvent(new CustomEvent("quiz-user-login",{detail:{studentId:this._studentId,nama:this._nama,email:this._email,nis:this._nis,absen:this._absen,kelas:this._kelas},bubbles:!0,composed:!0}))}static get styles(){return[super.styles,N`
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
      `]}render(){if(this._loading&&this._screen==="check")return o`<div class="loading">⏳ Memverifikasi sesi...</div>`;if(this._screen==="logged-in"){const t=this._nama?this._nama.charAt(0).toUpperCase():"?";return o`
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
      `}return o`
      <div class="auth-card">
        <h2>🔐 ${this._screen==="register"?this.t.register:this.t.login}</h2>
        <p class="subtitle">
          ${this._screen==="register"?"Buat akun untuk menyimpan hasil kuis & aktivitas":"Masuk dengan email yang sudah terdaftar"}
        </p>

        ${this._errorMsg?o`<div class="msg msg-error">${this._errorMsg}</div>`:""}

        ${this._screen==="register"?o`
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
        `:o`
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
    `}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Quiz User Auth",description:"Sistem login/registrasi siswa untuk dashboard kuis",icon:"icons:account-circle",color:"purple",tags:["Education","Auth"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield",required:!0}]}}}}globalThis.customElements.define(mt.tag,mt);class ft extends W(B(q)){static get tag(){return"quiz-dashboard-lite2"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url"},sheetName:{type:String,attribute:"sheet-name"},viewMode:{type:String,attribute:"view-mode"},quizTabHidden:{type:Boolean,attribute:"quiz-tab-hidden",reflect:!0},_spreadsheetId:{state:!0},_activeTab:{state:!0},_successMsg:{state:!0},_errorMsg:{state:!0},_user:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.sheetName="Pertemuan",this.viewMode="student",this.quizTabHidden=!0,this._user=null,this._spreadsheetId="",this._activeTab=0,this._successMsg="",this._errorMsg="",this.t={...this.t,title:"Kuis Interaktif & Kehadiran",subtitle:"Sistem Kuis dengan Pelacakan Aktivitas Otomatis",tabQuiz:"\u{1F4DD} Ambil Kuis",tabAttendance:"\u{1F4C5} Kehadiran & Aktivitas",tabGuide:"\u{1F4D6} Panduan",tabNilai:"\u{1F4CA} Daftar Nilai",welcome:"Selamat datang",dataRecorded:"Data kuis & aktivitas akan tercatat atas nama Anda"}}connectedCallback(){super.connectedCallback(),window.addEventListener("quiz-user-login",this._onUserLogin.bind(this)),window.addEventListener("quiz-user-logout",this._onUserLogout.bind(this))}disconnectedCallback(){window.removeEventListener("quiz-user-login",this._onUserLogin.bind(this)),window.removeEventListener("quiz-user-logout",this._onUserLogout.bind(this)),super.disconnectedCallback()}_onUserLogin(t){this._user=t.detail,this._successMsg=`${this.t.welcome}, ${this._user.nama}! ${this.t.dataRecorded}.`,setTimeout(()=>{this._successMsg=""},4e3)}_onUserLogout(){this._user=null,this._successMsg="Anda telah keluar.",setTimeout(()=>{this._successMsg=""},3e3)}_onQuizSaved(t){window.dispatchEvent(new CustomEvent("quiz-saved",{detail:t.detail,bubbles:!0,composed:!0})),this._successMsg=`Skor ${t.detail.name} sebesar ${t.detail.score}% berhasil disimpan!`,setTimeout(()=>{this._successMsg=""},4e3)}static get styles(){return[super.styles,N`
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
          display: flex; justify-content: space-between; align-items: center;
          border-bottom: 1px solid var(--ddd-theme-polaris-border);
          padding-bottom: var(--ddd-spacing-4); margin-bottom: var(--ddd-spacing-6);
          flex-wrap: wrap; gap: var(--ddd-spacing-4);
        }
        .title-section h1 {
          font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold);
          margin: 0 0 var(--ddd-spacing-1) 0; color: var(--ddd-theme-primary);
        }
        .title-section p {
          font-size: var(--ddd-font-size-m); margin: 0; color: var(--ddd-theme-secondary);
        }
        .badge {
          font-size: var(--ddd-font-size-xs);
          background-color: var(--ddd-theme-success-light);
          color: var(--ddd-theme-success-text);
          padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
          border-radius: 99px; font-weight: var(--ddd-font-weight-bold);
        }
        .tab-container {
          display: flex; gap: var(--ddd-spacing-1); margin-bottom: var(--ddd-spacing-6);
          border-bottom: 2px solid var(--ddd-theme-polaris-border); overflow-x: auto;
        }
        .tab-btn {
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-medium);
          font-family: var(--ddd-font-primary); background: transparent;
          color: var(--ddd-theme-secondary); border: none;
          border-bottom: 2px solid transparent; margin-bottom: -2px;
          cursor: pointer; transition: all 0.2s; white-space: nowrap;
        }
        .tab-btn:hover { color: var(--ddd-theme-primary); background: rgba(103,80,164,0.05); }
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
          gap: var(--ddd-spacing-5); margin-top: var(--ddd-spacing-5);
        }
        .guide-card {
          background: var(--ddd-theme-polaris-surface-hover);
          padding: var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-lg);
          border: 1px solid var(--ddd-theme-polaris-border);
        }
        .guide-card h3 {
          color: var(--ddd-theme-primary); margin: 0 0 var(--ddd-spacing-3) 0;
          font-size: var(--ddd-font-size-l); display: flex; align-items: center; gap: var(--ddd-spacing-2);
        }
        .guide-card p {
          font-size: var(--ddd-font-size-m); line-height: 1.6;
          color: var(--ddd-theme-secondary); margin: 0;
        }
      `]}render(){return o`
      <div class="header">
        <div class="title-section">
          <h1>${this.t.title}</h1>
          <p>${this.t.subtitle}</p>
        </div>
        <span class="badge">HAXcms Ready</span>
      </div>

      ${this._successMsg?o`<div class="msg msg-success">${this._successMsg}</div>`:""}

      <!-- Auth Component -->
      <quiz-user-auth .appsScriptUrl="${this.appsScriptUrl}"></quiz-user-auth>

      <!-- Tabs: Panduan → Ambil Kuis → Aktivitas → Daftar Nilai -->
      <div class="tab-container">
        <button class="tab-btn ${this._activeTab===0?"active":""}" @click="${()=>this._activeTab=0}">${this.t.tabGuide}</button>
        ${this.quizTabHidden?"":o`<button class="tab-btn ${this._activeTab===1?"active":""}" @click="${()=>this._activeTab=1}">${this.t.tabQuiz}</button>`}
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
        ${this._activeTab===0?o`
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
        `:this._activeTab===1&&!this.quizTabHidden?o`
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
        `:this._activeTab===2?o`
          <div class="tracker-grid" style="margin-top: var(--ddd-spacing-6);">
            <attendance-tracker></attendance-tracker>
            <engagement-score></engagement-score>
          </div>
        `:o`
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
    `}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Quiz Dashboard Lite",description:"Dashboard kuis modular dengan attendance tracking, login siswa, dan integrasi Google Sheets",icon:"icons:quiz",color:"purple",tags:["Education","Assessment","Interactive"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield",description:"URL Google Apps Script Web App"},{property:"sheetName",title:"Nama Pertemuan",inputMethod:"textfield",default:"Pertemuan"},{property:"viewMode",title:"Mode Tampilan",inputMethod:"select",options:{student:"View Mahasiswa",lecturer:"Mode Dosen (Console)"},default:"student",description:"Disable mode tertentu: 'student' = mahasiswa hanya lihat, 'lecturer' = dosen bisa input nilai"}]}}}}globalThis.customElements.define(ft.tag,ft);class bt extends q{static get tag(){return"assignment-forum"}static get properties(){return{appsScriptUrl:{type:String,attribute:"apps-script-url"},forumApiUrl:{type:String,attribute:"forum-api-url"},sheetName:{type:String,attribute:"sheet-name"},studentId:{type:String,attribute:"student-id"},studentName:{type:String,attribute:"student-name"},assignmentTitle:{type:String,attribute:"assignment-title"},assignmentInstruction:{type:String,attribute:"assignment-instruction"},forumTopic:{type:String,attribute:"forum-topic"},_comments:{state:!0},_activeReplyId:{state:!0},_sortMode:{state:!0},_assignmentText:{state:!0},_assignmentLink:{state:!0},_assignmentSubmitted:{state:!0},_submitting:{state:!0},viewMode:{type:String,attribute:"view-mode"},hideDelete:{type:Boolean,attribute:"hide-delete",reflect:!0}}}constructor(){super(),this.appsScriptUrl="",this.sheetName="Pertemuan",this.studentId="",this.studentName="",this.assignmentTitle="Tugas Mandiri",this.assignmentInstruction="Tuliskan refleksi atau jawaban tugas Anda.",this.forumTopic="Forum Diskusi",this._comments=[],this._activeReplyId=null,this._sortMode="best",this._assignmentText=localStorage.getItem("hax_assignment_text")||"",this._assignmentSubmitted=localStorage.getItem("hax_assignment_submitted")==="true",this._assignmentLink=localStorage.getItem("hax_assignment_link")||"",this._submitting=!1,this.hideDelete=!1}connectedCallback(){super.connectedCallback(),this._authHandler=t=>{t.detail.studentId&&(this.studentId=t.detail.studentId),t.detail.nama&&(this.studentName=t.detail.nama)},window.addEventListener("quiz-user-login",this._authHandler),this._loadForumComments()}disconnectedCallback(){super.disconnectedCallback(),this._authHandler&&window.removeEventListener("quiz-user-login",this._authHandler)}static get styles(){return N`
      :host { display: block; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; color: #1c1e21; }
      .card { background: white; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); padding: 20px; margin-bottom: 20px; border: 1px solid #e2e8f0; }
      h3 { margin: 0 0 8px; font-size: 16px; color: #1a202c; display: flex; align-items: center; gap: 8px; }
      .meta { font-size: 12px; color: #718096; background: #edf2f7; padding: 4px 10px; border-radius: 12px; display: inline-block; margin-bottom: 12px; }

      /* Assignment */
      textarea { width: 100%; min-height: 90px; padding: 10px; border: 1px solid #dbdbdb; border-radius: 8px; font-size: 14px; box-sizing: border-box; resize: vertical; font-family: inherit; }
      textarea:focus { outline: none; border-color: #002f6c; }
      textarea:disabled { background: #f7fafc; cursor: not-allowed; }
      .btn-group { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
      .btn { border: none; padding: 8px 16px; font-size: 13px; font-weight: 600; border-radius: 6px; cursor: pointer; transition: background 0.2s; color: white; }
      .btn-primary { background: #002f6c; }
      .btn-primary:hover { background: #001f4c; }
      .btn-success { background: #38a169; }
      .btn-success:hover { background: #2f855a; }
      .btn-danger { background: #e53e3e; }
      .btn-danger:hover { background: #9b2c2c; }
      .btn-sm { padding: 5px 10px; font-size: 11px; }
      .badge-done { background: #c6f6d5; color: #22543d; padding: 6px 12px; border-radius: 6px; font-weight: 600; font-size: 12px; display: inline-flex; align-items: center; gap: 4px; margin-top: 10px; }
      .badge-pending { background: #feebc8; color: #c05621; padding: 6px 12px; border-radius: 6px; font-weight: 600; font-size: 12px; display: inline-flex; align-items: center; gap: 4px; margin-top: 10px; }
      .summary-bar { display: flex; gap: 12px; margin-bottom: 16px; padding: 10px; background: #f7fafc; border-radius: 8px; font-size: 12px; }
      .summary-item { display: flex; align-items: center; gap: 4px; }

      /* Disqus-style Forum */
      .input-container { display: flex; gap: 12px; margin-bottom: 24px; align-items: flex-start; }
      .avatar { width: 40px; height: 40px; border-radius: 50%; background: #e4e6eb; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
      .input-wrapper { flex: 1; display: flex; flex-direction: column; gap: 8px; }
      .input-box { width: 100%; padding: 10px 12px; border: 1px solid #dbdbdb; border-radius: 8px; font-size: 14px; box-sizing: border-box; font-family: inherit; resize: none; }
      .input-box:focus { outline: none; border-color: #002f6c; }
      .btn-submit { align-self: flex-end; background: #002f6c; color: white; border: none; padding: 7px 14px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 13px; }

      .nav-sort { display: flex; justify-content: flex-end; gap: 14px; font-size: 13px; font-weight: bold; color: #65676b; border-bottom: 2px solid #f0f2f5; padding-bottom: 8px; margin-bottom: 16px; }
      .sort-btn { cursor: pointer; padding: 2px 0; }
      .sort-btn.active { color: #002f6c; border-bottom: 2px solid #002f6c; padding-bottom: 6px; margin-bottom: -8px; }

      .comment-card { display: flex; gap: 12px; padding: 14px; border-radius: 8px; margin-bottom: 10px; position: relative; background: #ffffff; border: 1px solid #f0f2f5; }
      .comment-card.pinned { background: #f5f7f9; border-left: 3px solid #002f6c; }
      .pin-icon { position: absolute; top: 10px; right: 14px; font-size: 13px; color: #65676b; }
      .comment-content { flex: 1; min-width: 0; }
      .comment-header { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; flex-wrap: wrap; }
      .user-name { font-weight: bold; color: #1c1e21; font-size: 14px; }
      .badge-staff { background: #002f6c; color: white; font-size: 10px; padding: 2px 6px; border-radius: 4px; font-weight: bold; }
      .time-stamp { color: #8a8d91; font-size: 12px; }
      .text-comment { font-size: 14px; color: #1c1e21; line-height: 1.5; word-break: break-word; }

      .action-bar { display: flex; gap: 14px; margin-top: 8px; font-size: 12px; color: #65676b; font-weight: bold; align-items: center; }
      .action-btn { cursor: pointer; display: flex; align-items: center; gap: 3px; user-select: none; padding: 3px 5px; border-radius: 4px; }
      .action-btn:hover { background: #f2f3f5; color: #1c1e21; }
      .action-btn.liked { color: #007bff; }

      .reply-form-box { display: flex; gap: 8px; margin-top: 10px; padding-left: 10px; border-left: 2px solid #e4e6eb; }
      .reply-input { flex: 1; padding: 8px 10px; border: 1px solid #dbdbdb; border-radius: 6px; font-size: 13px; font-family: inherit; }
      .reply-input:focus { outline: none; border-color: #002f6c; }

      .replies-wrapper { margin-top: 10px; padding-left: 18px; border-left: 2px solid #edf2f7; display: flex; flex-direction: column; gap: 8px; }
      .reply-card { display: flex; gap: 8px; background: #fafafa; padding: 8px 10px; border-radius: 6px; }
      .reply-card .avatar { width: 30px; height: 30px; font-size: 14px; }
      .reply-card .user-name { font-size: 13px; }
      .reply-card .text-comment { font-size: 13px; }
    `}async _loadForumComments(){const t=this.forumApiUrl||this.appsScriptUrl;if(t)try{const e=await(await fetch(`${t}?action=getForumComments`,{redirect:"follow"})).json();e.status==="ok"&&e.comments&&(this._comments=this._buildThread(e.comments))}catch(e){console.error("[assignment-forum] Failed to load forum:",e)}}_buildThread(t){const e={},i=[];return t.forEach(s=>{e[s.id]={...s,replies:[]}}),t.forEach(s=>{s.parentId&&e[s.parentId]?e[s.parentId].replies.push(e[s.id]):e[s.id]&&i.push(e[s.id])}),i}_getSorted(){const t=[...this._comments];return this._sortMode==="newest"?t.sort((e,i)=>new Date(i.time)-new Date(e.time)):this._sortMode==="oldest"?t.sort((e,i)=>new Date(e.time)-new Date(i.time)):t.sort((e,i)=>(i.likes||0)-(e.likes||0)),t}_setSort(t){this._sortMode=t,this._comments=[...this._comments]}async _submitMainComment(){if(this._submitting)return;const t=this.shadowRoot.querySelector("#main-input"),e=t.value.trim();if(!e)return;this._submitting=!0;const i=this.forumApiUrl||this.appsScriptUrl,s={action:"saveForumComment",id:Date.now(),parentId:null,user:this.studentName||"Siswa",studentId:this.studentId||"",text:e,sheet:this.sheetName};try{const n=await(await fetch(i,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(s)})).json();n.status==="ok"&&n.data&&(this._comments=[...this._comments,{...n.data,replies:[]}]),t.value=""}catch(n){console.error("[assignment-forum] Submit failed:",n)}this._submitting=!1,this._sendActivity("discussion",`Forum: ${e.substring(0,50)}`)}async _submitReply(t){if(this._submitting)return;const e=this.shadowRoot.querySelector(`#reply-${t}`);if(!e)return;const i=e.value.trim();if(!i)return;this._submitting=!0;const s=this.forumApiUrl||this.appsScriptUrl,n={action:"saveForumComment",id:Date.now(),parentId:t,user:this.studentName||"Siswa",studentId:this.studentId||"",text:i,sheet:this.sheetName};try{const d=await(await fetch(s,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(n)})).json();d.status==="ok"&&d.data&&(this._comments=this._comments.map(c=>c.id===t?{...c,replies:[...c.replies,{...d.data,replies:[]}]}:c)),this._activeReplyId=null}catch(d){console.error("[assignment-forum] Reply failed:",d)}this._submitting=!1,this._sendActivity("discussion",`Reply: ${i.substring(0,50)}`)}async _deleteComment(t){if(!confirm("Hapus komentar ini?"))return;const e=this.forumApiUrl||this.appsScriptUrl;if(e)try{await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"deleteForumComment",id:t})});const i=new Set([t]);this._comments.forEach(s=>{s.id===t&&s.replies&&s.replies.forEach(n=>i.add(n.id))}),this._comments=this._comments.filter(s=>!i.has(s.id)).map(s=>({...s,replies:(s.replies||[]).filter(n=>!i.has(n.id))}))}catch(i){console.error("[assignment-forum] Delete failed:",i)}}_findAndUpdateComment(t,e,i){return t.map(s=>s.id===e?i(s):s.replies&&s.replies.length>0?{...s,replies:this._findAndUpdateComment(s.replies,e,i)}:s)}_handleLike(t){this._comments=this._findAndUpdateComment(this._comments,t,e=>{const i=!e.isLiked;return{...e,isLiked:i,likes:i?(e.likes||0)+1:(e.likes||0)-1}}),this._syncLike(t)}_handleDislike(t){this._comments=this._findAndUpdateComment(this._comments,t,e=>{const i=!e.isDisliked;return{...e,isDisliked:i,likes:(e.likes||0)+(i?-1:1)}}),this._syncLike(t)}_syncLike(t){const e=this.forumApiUrl||this.appsScriptUrl;if(!e)return;const i=this._comments.find(s=>s.id===t);i&&fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"saveForumComment",id:t,actionType:"like",isLiked:i.isLiked})}).catch(()=>{})}_toggleReply(t){this._activeReplyId=this._activeReplyId===t?null:t}_isValidUrl(t){try{const e=new URL(t);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}async _submitAssignment(){if(this._submitting)return;const t=this._assignmentText.trim();if(!t&&!this._assignmentLink){alert("Isi tugas atau link Google Drive terlebih dahulu!");return}if(this._assignmentLink&&!this._isValidUrl(this._assignmentLink)){alert("Format link tidak valid. Gunakan URL Google Drive/Doc.");return}this._submitting=!0;const e=this.forumApiUrl||this.appsScriptUrl;if(e)try{await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"saveAssignment",studentId:this.studentId,name:this.studentName,sheet:this.sheetName,title:this.assignmentTitle,content:t,link:this._assignmentLink})})}catch(i){console.error("[assignment-forum] Save assignment failed:",i)}localStorage.setItem("hax_assignment_submitted","true"),localStorage.setItem("hax_assignment_text",t),localStorage.setItem("hax_assignment_link",this._assignmentLink),this._assignmentSubmitted=!0,this._submitting=!1,this._sendActivity("assignment",`Tugas: ${this.assignmentTitle}`)}_resetAssignment(){localStorage.removeItem("hax_assignment_submitted"),localStorage.removeItem("hax_assignment_text"),localStorage.removeItem("hax_assignment_link"),this._assignmentSubmitted=!1,this._assignmentText="",this._assignmentLink=""}_exportAssignment(){const t=this._assignmentText||localStorage.getItem("hax_assignment_text")||"",e=`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${this.assignmentTitle}</title>
<style>body{font-family:system-ui;max-width:700px;margin:40px auto;padding:20px;color:#333;}
h1{color:#002f6c;} .meta{color:#888;font-size:13px;} .content{line-height:1.8;margin-top:20px;white-space:pre-wrap;}</style></head>
<body><h1>${this.assignmentTitle}</h1><div class="meta">${this.studentName} | ${new Date().toLocaleDateString("id-ID")}</div>
<div class="content">${t}</div></body></html>`,i=new Blob([e],{type:"text/html;charset=utf-8"}),s=document.createElement("a");s.href=URL.createObjectURL(i),s.download=`Tugas_${this.assignmentTitle.replace(/\s+/g,"_")}.html`,document.body.appendChild(s),s.click(),document.body.removeChild(s)}_sendActivity(t,e){const i=t==="assignment"?"assignment-saved":"discussion-saved";window.dispatchEvent(new CustomEvent(i,{detail:{title:this.assignmentTitle,thread:this.forumTopic,studentId:this.studentId},bubbles:!0,composed:!0}));const s=this.appsScriptUrl;if(s&&this.studentId){const n=new URLSearchParams({action:"activity",activityType:t,description:e,name:this.studentName,studentId:this.studentId,sheet:this.sheetName,timestamp:new Date().toISOString()});fetch(`${s}?${n.toString()}`,{redirect:"follow"}).catch(()=>{})}}_timeAgo(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"Baru saja";if(i<60)return`${i} menit lalu`;const s=Math.floor(i/60);return s<24?`${s} jam lalu`:`${Math.floor(s/24)} hari lalu`}render(){const t=this._getSorted();return o`
      <!-- SUMMARY -->
      <div class="summary-bar">
        <div class="summary-item">${this._assignmentSubmitted?"\u2705":"\u23F3"} Tugas: ${this._assignmentSubmitted?"Selesai":"Belum"}</div>
        <div class="summary-item">💬 Forum: ${t.length} komentar</div>
      </div>

      <!-- ASSIGNMENT -->
      <div class="card">
        <h3>📝 ${this.assignmentTitle}</h3>
        <div class="meta">Formatif | Tugas Mandiri</div>
        <p style="margin:0 0 10px;font-size:13px;color:#4a5568;line-height:1.5;">${this.assignmentInstruction}</p>
        <input type="url" placeholder="🔗 Link Google Drive / Google Doc (opsional)"
          .value="${this._assignmentLink}"
          @input="${e=>{this._assignmentLink=e.target.value}}"
          ?disabled="${this._assignmentSubmitted}"
          style="width:100%;padding:8px 12px;border:1px solid #dbdbdb;border-radius:8px;font-size:13px;margin-bottom:8px;box-sizing:border-box;">
        <textarea .value="${this._assignmentText}" @input="${e=>{this._assignmentText=e.target.value}}"
          ?disabled="${this._assignmentSubmitted}" placeholder="Tulis jawaban tugas Anda di sini..."></textarea>
        <div class="btn-group">
          ${this._assignmentSubmitted?o`
              <button class="btn btn-success btn-sm" disabled>✅ Terkirim</button>
              <button class="btn btn-primary btn-sm" @click="${this._exportAssignment}">📥 Ekspor HTML</button>
              <button class="btn btn-danger btn-sm" @click="${this._resetAssignment}">🔄 Ubah</button>
            `:o`<button class="btn btn-success" ?disabled="${this._submitting}" @click="${this._submitAssignment}">${this._submitting?"\u23F3 Mengirim...":"Kirim & Kunci Tugas"}</button>`}
        </div>
        <div class="${this._assignmentSubmitted?"badge-done":"badge-pending"}">
          ${this._assignmentSubmitted?"\u2705 Tugas Diserahkan & Tersimpan ke Google Sheets":"\u26A0\uFE0F Belum Menyerahkan"}
        </div>
        ${this._assignmentSubmitted&&this._assignmentLink?o`<div style="margin-top:8px;"><a href="${this._assignmentLink}" target="_blank" style="color:#002f6c;font-size:13px;text-decoration:underline;">🔗 Lihat File Tugas</a></div>`:""}
      </div>

      <!-- FORUM (Disqus-style) -->
      <div class="card">
        <h3>💬 ${this.forumTopic}</h3>

        <!-- Input -->
        <div class="input-container">
          <div class="avatar">👤</div>
          <div class="input-wrapper">
            <textarea id="main-input" class="input-box" rows="2" placeholder="Tulis komentar..."></textarea>
            <button class="btn-submit" ?disabled="${this._submitting}" @click="${this._submitMainComment}">${this._submitting?"Posting...":"Post Comment"}</button>
          </div>
        </div>

        <!-- Sort tabs -->
        <div class="nav-sort">
          <span class="sort-btn ${this._sortMode==="best"?"active":""}" @click="${()=>this._setSort("best")}">Best</span>
          <span class="sort-btn ${this._sortMode==="newest"?"active":""}" @click="${()=>this._setSort("newest")}">Newest</span>
          <span class="sort-btn ${this._sortMode==="oldest"?"active":""}" @click="${()=>this._setSort("oldest")}">Oldest</span>
        </div>

        <!-- Comments -->
        ${t.map(e=>o`
          <div class="comment-card ${e.pinned?"pinned":""}">
            ${e.pinned?o`<span class="pin-icon">📌 Pinned</span>`:""}
            <div class="avatar">${e.user?e.user.charAt(0).toUpperCase():"?"}</div>
            <div class="comment-content">
              <div class="comment-header">
                <span class="user-name">${e.user}</span>
                ${e.user==="Guru"||e.user==="Dosen"?o`<span class="badge-staff">Guru</span>`:""}
                <span class="time-stamp">${this._timeAgo(e.time)}</span>
              </div>
              <div class="text-comment">${e.text}</div>
              <div class="action-bar">
                <span class="action-btn ${e.isLiked?"liked":""}" @click="${()=>this._handleLike(e.id)}">
                  🔺 ${e.likes||0}
                </span>
                <span class="action-btn" @click="${()=>this._handleDislike(e.id)}">🔻</span>
                <span class="action-btn" @click="${()=>this._toggleReply(e.id)}">Reply</span>
                ${this.viewMode==="lecturer"&&!this.hideDelete?o`<span class="action-btn" style="color:#e53e3e;" @click="${()=>this._deleteComment(e.id)}">🗑️ Hapus</span>`:""}
              </div>

              ${this._activeReplyId===e.id?o`
                <div class="reply-form-box">
                  <input id="reply-${e.id}" class="reply-input" type="text" placeholder="Tulis balasan...">
                  <button class="btn-submit" style="font-size:12px;padding:6px 12px;" ?disabled="${this._submitting}" @click="${()=>this._submitReply(e.id)}">${this._submitting?"...":"Reply"}</button>
                </div>
              `:""}

              ${e.replies&&e.replies.length>0?o`
                <div class="replies-wrapper">
                  ${e.replies.map(i=>o`
                    <div class="reply-card">
                      <div class="avatar" style="width:30px;height:30px;font-size:14px;">${i.user?i.user.charAt(0).toUpperCase():"?"}</div>
                      <div class="comment-content">
                        <div class="comment-header">
                          <span class="user-name" style="font-size:13px;">${i.user}</span>
                          <span class="time-stamp">${this._timeAgo(i.time)}</span>
                        </div>
                        <div class="text-comment" style="font-size:13px;">${i.text}</div>
                        <div class="action-bar" style="margin-top:4px;">
                          <span class="action-btn" @click="${()=>this._handleLike(i.id)}">🔺 ${i.likes||0}</span>
                          <span class="action-btn" @click="${()=>this._handleDislike(i.id)}">🔻</span>
                          ${this.viewMode==="lecturer"&&!this.hideDelete?o`<span class="action-btn" style="color:#e53e3e;" @click="${()=>this._deleteComment(i.id)}">🗑️ Hapus</span>`:""}
                        </div>
                      </div>
                    </div>
                  `)}
                </div>
              `:""}
            </div>
          </div>
        `)}

        ${t.length===0?o`<p style="font-size:13px;color:#a0aec0;text-align:center;padding:20px;">Belum ada komentar. Mulai diskusi!</p>`:""}
      </div>
    `}}customElements.define(bt.tag,bt)});export default Ft();
