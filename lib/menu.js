const { LitElement, html, css } = require('lit-element')
require('./github_link')
require('./components/button')
require('./components/buttonlink')
require('./components/textfield')

/* global fetch */
class PrismarineMenu extends LitElement {
  constructor () {
    super()

    this.server = ''
    this.serverport = 25565
    this.proxy = ''
    this.proxyport = ''
    this.username = window.localStorage.getItem('username') ?? 'pviewer' + (Math.floor(Math.random() * 1000))
    this.password = ''
    fetch('config.json').then(res => res.json()).then(config => {
      this.server = config.defaultHost
      this.serverport = config.defaultHostPort ?? 25565
      this.proxy = config.defaultProxy
      this.proxyport = !config.defaultProxy && !config.defaultProxyPort ? '' : config.defaultProxyPort ?? 443
    })
  }

  static get properties () {
    return {
      server: { type: String },
      serverport: { type: Number },
      proxy: { type: String },
      proxyport: { type: Number },
      username: { type: String },
      password: { type: String }
    }
  }

  static get styles () {
    return css`
    :host {
      --guiScale: var(--guiScaleFactor, 3);
    }

    html {
      height: 100%;
    }
    
    body {
      margin:0;
      padding:0;
      font-family: sans-serif;
      background: #000;
    }
    
    .login-box {
      --guiScale: 3;
      position: absolute;
      top: 50%;
      left: 50%;
<<<<<<< HEAD
      width: calc(200px * var(--guiScale));
      padding: 0;
=======
      width: calc(180px * var(--guiScale));
      padding: calc(10px * var(--guiScale));
>>>>>>> c54909390cb27086b1d91fa60f1107a65eb43f1b
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.5)
    }
    
    form {
      display: flex;
<<<<<<< HEAD
      flex-direction: column
    }

    /* Button */
    .legacy-btn {
      --guiScale: 3;
      --textColor: white;
      image-rendering: crisp-edges;
      image-rendering: pixelated;
      text-decoration: none;
    
      cursor: default;
      border: none;
      background: none;
      outline: none;

      position: relative;
      z-index: 1;

      display: flex;
      width: 100%;
      height: calc(20px * var(--guiScale));

      font-family: mojangles, minecraft, monospace;
      font-size: calc(10px * var(--guiScale));

      align-items: center;
      justify-content: center;

      color: var(--textColor);
      text-shadow: calc(1px * var(--guiScale)) calc(1px * var(--guiScale)) black;
    }

    .legacy-btn:disabled {
      --textColor: rgb(160, 160, 160);
    }

    .legacy-btn::after,
    .legacy-btn::before {
      --yPos: -66px;
      content: '';
      display: block;

      position: absolute;
      top: 0;

      width: 50%;
      height: 100%;
      z-index: -1;

      background-image: url('../extra-textures/widgets.png');
      background-size: calc(256px * var(--guiScale));
      background-position-y: calc(var(--yPos) * var(--guiScale));
    }

    .legacy-btn::after {
      left: 0;
    }

    .legacy-btn::before {
      left: 50%;
      background-position-x: calc(-200px * var(--guiScale) + 100%);
    }

    .legacy-btn:hover::after,
    .legacy-btn:hover::before,
    .legacy-btn:focus::after,
    .legacy-btn:focus::before {
      --yPos: -86px;
    }

    .legacy-btn:disabled::after,
    .legacy-btn:disabled::before {
      --yPos: -46px;
      --textColor: rgb(160, 160, 160);
    }

    /* Text Field */
    .text-field-div {
      --guiScale: 3;
      --borderColor: grey;
      position: relative;

      width: calc(200px * var(--guiScale));
      height: calc(20px * var(--guiScale));

      background: black;
      border: calc(1px * var(--guiScale)) solid var(--borderColor);
    }

    .text-field-div:focus-within {
      --borderColor: white;
    }

    .text-field-div label {
      position: absolute;
      z-index: 2;
      pointer-events: none;
    
      bottom: calc(22px * var(--guiScale));
      left: 0;

      font-family: mojangles, minecraft, monospace;
      font-size: calc(10px * var(--guiScale));
    
      color: rgb(226, 226, 226);
      text-shadow: calc(1px * var(--guiScale)) calc(1px * var(--guiScale)) black;
    }

    .legacy-text-field {
      outline: none;
      border: none;
      background: none;

      position: relative;

      left: calc(2px * var(--guiScale));

      width: calc(100% - 4px * var(--guiScale));
      height: 100%;

      font-family: mojangles, minecraft, monospace;
      font-size: calc(10px * var(--guiScale));

      color: white;
      text-shadow: calc(1px * var(--guiScale)) calc(1px * var(--guiScale)) black;
    }

    .link-buttons {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .link-buttons .legacy-btn {
      width: calc(72px * var(--guiScale));
    }

    .title {
      text-align: center;

      font-family: mojangles, minecraft, monospace;
      font-size: calc(10px * var(--guiScale));
      font-weight: normal;

      color: white;
      text-shadow: calc(1px * var(--guiScale)) calc(1px * var(--guiScale)) black;
=======
      margin-left: 0;
      margin-right: 0;
      padding-left: 0;
      padding-right: 0;
      flex-direction: column
    }

    .bottom-links {
      margin-top: calc(6px * var(--guiScale));
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .bottom-links span {
      text-align: center;
      color: rgb(175, 175, 175);
      padding: calc(1px * var(--guiScale));
      font-family: mojangles, minecraft, monospace;
      font-size: calc(10px * var(--guiScale));
      text-shadow: calc(1px * var(--guiScale)) calc(1px * var(--guiScale)) black;
    }

    .link-buttons {
      display: flex;
      justify-content: space-between; 
      gap: calc(4px * var(--guiScale));
    }

    .title, .subtitle {
      text-align: center;

      font-family: mojangles, minecraft, monospace;
      font-size: calc(10px * var(--guiScale));
      font-weight: normal;

      color: white;
      margin-top: 0;
      text-shadow: calc(1px * var(--guiScale)) calc(1px * var(--guiScale)) black;
    }

    .subtitle {
      font-size: calc(7.5px * var(--guiScale));
>>>>>>> c54909390cb27086b1d91fa60f1107a65eb43f1b
    }

    .wrapper {
      display: flex;
<<<<<<< HEAD
      justify-content: space-between;
       
      gap: 10px;
    }
=======
      justify-content: space-between;   
      gap: calc(6px * var(--guiScale));
    }

    .spacev {
      height: calc(6px * var(--guiScale));
    }

    .field-spacev {
      height: calc(14px * var(--guiScale));
    }
>>>>>>> c54909390cb27086b1d91fa60f1107a65eb43f1b
    `
  }

  dispatchConnect () {
    window.localStorage.setItem('username', this.username)
    this.dispatchEvent(new window.CustomEvent('connect', {
      detail: {
        server: `${this.server}:${this.serverport}`,
        proxy: `${this.proxy}${this.proxy !== '' ? `:${this.proxyport}` : ''}`,
        username: this.username,
        password: this.password
      }
    }))
  }

  render () {
    return html`
    <github-link></github-link>

    <div class="login-box">
      <h2 class="title">Prismarine Web Client</h2>
<<<<<<< HEAD
      <br><br>
      <form>
        <div class="wrapper">
          <div class="text-field-div" style="width: 49%;">
            <label for="serverip">Server IP</label>
            <input id="serverip" type="text" name="" spellcheck="false" required="" value="${this.server}" @input=${e => { this.server = e.target.value }} class="legacy-text-field">
          </div>
          <div class="text-field-div" style="width: 49%;">
            <label for="port">Server Port</label>
            <input id="port" type="text" name="" spellcheck="false" required="" value="${this.serverport}" @input=${e => { this.serverport = e.target.value }} class="legacy-text-field">
          </div>
        </div>
        <br><br>
        <div class="wrapper">
          <div class="text-field-div">
            <label for="proxy">Proxy</label>
            <input id="proxy" type="text" name="" spellcheck="false" required="" value="${this.proxy}" @input=${e => { this.proxy = e.target.value }} class="legacy-text-field">
          </div>
          <div class="text-field-div">
            <label for="port">Port</label>
            <input id="port" type="text" name="" spellcheck="false" required="" value="${this.proxyport}" @input=${e => { this.proxyport = e.target.value }} class="legacy-text-field">
          </div>
        </div>
        <br><br>
        <div class="text-field-div">
          <label for="username">Username</label>
          <input id="username" type="text" name="" spellcheck="false" required="" value="${this.username}" @input=${e => { this.username = e.target.value }} class="legacy-text-field">
        </div>
        <br>
        <button class="legacy-btn" @click=${() => this.dispatchConnect()}>Play</button>
     </form>
=======
      <h3 class="subtitle" style="color: rgb(175, 175, 175)">A minecraft client in the browser!</h3>
      <form>
        <div class="field-spacev"></div>
        <div class="wrapper">
          <legacy-text-field field-width="100%" field-label="Server IP" field-id="serverip" field-value="${this.server}" @input=${e => { this.server = e.target.value }}></legacy-text-field>
          <legacy-text-field field-width="100%" field-label="Server Port" field-id="port" field-value="${this.serverport}" @input=${e => { this.serverport = e.target.value }}></legacy-text-field>
        </div>
        <div class="field-spacev"></div>
        <div class="wrapper">
          <legacy-text-field field-width="100%" field-label="Proxy" field-id="proxy" field-value="${this.proxy}" @input=${e => { this.proxy = e.target.value }}></legacy-text-field>
          <legacy-text-field field-width="100%" field-label="Port" field-id="port" field-value="${this.proxyport}" @input=${e => { this.proxyport = e.target.value }}></legacy-text-field>
        </div>
        <div class="field-spacev"></div>
        <legacy-text-field field-width="100%" field-label="Username" field-id="username" field-value="${this.username}" @input=${e => { this.username = e.target.value }}></legacy-text-field>
        <div class="spacev"></div>
        <legacy-button btn-width="100%" @click=${() => { this.dispatchConnect() }}>Play</legacy-button>
        <div class="bottom-links">
          <span> Want to contribute?</span>
          <div class="link-buttons"> 
            <legacy-button-link btn-width="78px" go-to="https://github.com/PrismarineJS/prismarine-web-client">Github</legacy-button-link>
            <legacy-button-link btn-width="78px" go-to="https://discord.gg/4Ucm684Fq3">Discord</legacy-button-link>
          </div>
        </div>
      </form>
>>>>>>> c54909390cb27086b1d91fa60f1107a65eb43f1b
    </div>

    <div class="link-buttons">
      <a class="legacy-btn" target=”_blank” href="https://github.com/PrismarineJS/prismarine-web-client">Github</a>
      <a class="legacy-btn" target=”_blank” href="https://discord.gg/4Ucm684Fq3">Discord</a>
    </div>
    `
  }
}

window.customElements.define('prismarine-menu', PrismarineMenu)
