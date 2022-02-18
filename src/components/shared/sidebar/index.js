import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import config from "../../../config/config.json";
import styles from "./style.module.scss";

const Sidebar = ({ setOpen }) => {
  const [scenarios, setScenarios] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const storageScenarios = window.localStorage.getItem(
      config.STORAGE.SCENARIOS
    );

    if (storageScenarios) {
      setScenarios(JSON.parse(storageScenarios));
    }
  }, []);

  const createScenario = () => {
    const scenariosLength = scenarios.length;
    const newId = scenariosLength + 1;
    const newScenario = { id: newId, name: "untitled-scenario.json" };

    console.log(newScenario);

    setScenarios(...scenarios, newScenario);
  };

  return (
    <nav className={styles.sidebar}>
      <Link href="/" onClick={() => setOpen(false)}>
        <a>Editor</a>
      </Link>

      <div>
        <Link href="/scenario" onClick={() => setOpen(false)}>
          <a>Scenario</a>
        </Link>

        <ul>
          {scenarios?.map((scenario) => (
            <Link href={`/scenario/${scenario.id}`} key={scenario.id} passHref>
              <li
                className={scenario.id == id ? styles.active : ""}
                onClick={() => setOpen(false)}
                aria-hidden="true"
              >
                <p>
                  {scenario.id}: {scenario.name}
                </p>
              </li>
            </Link>
          ))}
        </ul>

        <button onClick={() => createScenario()}>Add new scenario</button>
      </div>
    </nav>
  );
};

export default Sidebar;
