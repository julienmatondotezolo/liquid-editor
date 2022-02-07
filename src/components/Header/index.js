import React, { useState } from "react";
import Sidebar from "../Sidebar";
import styles from "./Navbar.module.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.hamburger} onClick={() => handleClick()}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </div>

          <h3>Bothive Liquid editor</h3>
        </div>
      </div>
      {open ? <Sidebar /> : ""}
    </div>
  );
};

export default Header;
