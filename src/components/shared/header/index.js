import React from "react";

import Sidebar from "../sidebar";
import styles from "./style.module.scss";

const Header = () => (
  <div>
    <nav className={styles.container}>
      <section className={styles.nav}>
        {/* <div
            className={styles.hamburger}
            onClick={() => setOpen(!open)}
            aria-hidden="true"
          >
            <span className={styles.bar1}></span>
            <span className={styles.bar2}></span>
            <span className={styles.bar3}></span>
          </div> */}

        <h1>Bothive Liquid editor</h1>
      </section>
    </nav>
    <Sidebar />
  </div>
);

export default Header;
