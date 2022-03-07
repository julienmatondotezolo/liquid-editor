import React from "react";

export class ShadowView extends React.Component {
  attachShadow = (host) => {
    if (!host) {
      return;
    }

    const shadowRoot = host.attachShadow({ mode: "open" });

    [].slice.call(host.children).forEach((child) => {
      shadowRoot.appendChild(child);
    });
  };

  render() {
    return (
      <div ref={this.attachShadow} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
