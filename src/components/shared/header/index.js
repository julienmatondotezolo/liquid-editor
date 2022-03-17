import React from "react";

import styles from "./style.module.scss";

const Header = () => (
  <div>
    <nav className={styles.container}>
      <section className={styles.nav}>
        <h1>Bothive Liquid editor</h1>
      </section>
    </nav>
  </div>
);

export default Header;
