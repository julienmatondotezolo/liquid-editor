import React from "react";

export class ShadowRoot extends React.Component {
  attachShadow(host) {
    if (host == null) {
      return;
    }
    const shadowRoot = host.attachShadow({ mode: "closed" });

    [].slice.call(host.children).forEach((child) => {
      shadowRoot.appendChild(child);
    });
  }

  render() {
    return <div ref={this.attachShadow}>{this.props.children}</div>;
  }
}
