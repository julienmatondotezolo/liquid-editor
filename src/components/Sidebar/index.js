import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <Link href="/">
        <a>Editor</a>
      </Link>

      <div>
        <p>Scenario</p>
        <ul>
          <li>
            <Link href="/">
              <a>Scenario 1</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Scenario 2</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Add new scenario</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
