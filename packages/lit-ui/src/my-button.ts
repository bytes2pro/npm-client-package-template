import { LitElement, css, html } from 'lit';

export class MyButton extends LitElement {
  static properties = {
    variant: { type: String },
  };

  variant: 'primary' | 'secondary' = 'primary';

  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      border-radius: 6px;
      padding: 8px 12px;
      font-size: 14px;
      cursor: pointer;
      border: 1px solid transparent;
    }
    button.primary {
      background: #111827;
      color: white;
    }
    button.secondary {
      background: #f3f4f6;
      color: #111827;
      border-color: #d1d5db;
    }
  `;

  render() {
    return html`<button class=${this.variant}><slot></slot></button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}

customElements.define('my-button', MyButton);
