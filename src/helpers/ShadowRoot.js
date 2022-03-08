import React from "react";

export class ShadowRoot extends React.Component {
  attachShadow(host) {
    if (host == null) {
      return;
    }
    const shadowRoot = host.attachShadow({ mode: "open" });

    shadowRoot.innerHTML = `
        <style>
           @import url(https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.24.2/codemirror.min.css)
        </style>`;

    [].slice.call(host.children).forEach((child) => {
      shadowRoot.appendChild(child);
    });
  }

  render() {
    return <div ref={this.attachShadow}>{this.props.children}</div>;
  }
}
