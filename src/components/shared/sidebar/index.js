import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "./style.module.scss";

const Sidebar = () => {
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    setScenarios(JSON.parse(window.localStorage.getItem("bothive-liquid-scenario")));
  }, []);

  return (
    <nav className={styles.sidebar}>
      <Link href="/">
        <a>Editor</a>
      </Link>

      <div>
        <p>Scenario</p>
        <ul>
          {scenarios?.map((scenario) => {
            <li>
              <Link href={scenario.id}>
                <a>{scenario.name}</a>
              </Link>
            </li>;
          })}

          {/* <li>
            <Link href="scenario">
              <a>Scenario 1</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Scenario 2</a>
            </Link>
          </li> */}
        </ul>
        <button>Add new scenario</button>
      </div>
    </nav>
  );
};

export default Sidebar;
