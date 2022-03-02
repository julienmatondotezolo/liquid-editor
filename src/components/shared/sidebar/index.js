import Link from "next/link";
import React from "react";

import { useScenarioContext } from "../../../context/index";
import ListScenario from "../listScenario ";
import styles from "./style.module.scss";

const Sidebar = ({ setOpen }) => {
  const { scenarios, scenario } = useScenarioContext();

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
          {scenarios.map((scenario) => (
            <ListScenario
              scenario={scenario}
              setOpen={setOpen}
              key={scenario.id}
            />
          ))}
        </ul>

        <button className={styles.btn} onClick={() => scenario.add()}>
          Add new scenarios
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
