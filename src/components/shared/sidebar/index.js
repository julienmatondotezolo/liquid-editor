import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "./style.module.scss";

const Sidebar = () => {
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    setScenarios(
      JSON.parse(window.localStorage.getItem("bothive-liquid-scenario"))
    );
  }, []);

  return (
    <nav className={styles.sidebar}>
      <Link href="/">
        <a>Editor</a>
      </Link>

      <div>
        <Link href="/scenario">
          <a>Scenario</a>
        </Link>

        <ul>
          {scenarios?.map((scenario) => (
            <li key={scenario.id}>
              <a>{scenario.name}</a>
            </li>
          ))}
        </ul>
        <button>Add new scenario</button>
      </div>
    </nav>
  );
};

export default Sidebar;
