import Link from "next/link";
import React, { useEffect } from "react";

import config from "../../../config/config.json";
import { useScenario } from "../../../context/ index";
import ListScenario from "../listScenario ";
import styles from "./style.module.scss";

const Sidebar = ({ setOpen }) => {
  const { scenarios, scenario } = useScenario();

  console.log(scenarios);

  useEffect(() => {
    localStorage.setItem(config.STORAGE.SCENARIOS, JSON.stringify(scenarios));
  }, [scenarios]);

  return (
    <nav className={styles.sidebar}>
      <Link href="/" onClick={() => setOpen(false)}>
        <a>Editor</a>
      </Link>

      <div>
        <Link href="/" onClick={() => setOpen(false)}>
          <a>Scenario</a>
        </Link>

        <ul>
          {/* {scenarios.map((scenario) => ({
            <ListScenario />
          }))} */}
        </ul>

        <button className={styles.btn} onClick={() => scenario.add()}>
          Add new scenarioscenario
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
