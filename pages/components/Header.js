import React from 'react';
import styles from '../../styles/Header/Navbar.module.scss'

const Header = () => {
  return <div>
          <nav className={styles.nav}>
            <div className={styles.hamburger}>
              <div className={styles.bar1}></div>
              <div className={styles.bar2}></div>
              <div className={styles.bar3}></div>
            </div>

            <h3>Bothive Liquid editor</h3>
          </nav>
        </div>
};

export default Header;
