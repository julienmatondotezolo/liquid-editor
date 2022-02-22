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

  useEffect(() => {
    localStorage.setItem(config.STORAGE.SCENARIOS, JSON.stringify(scenarios));
  }, [scenarios]);

  const createScenario = () => {
    let scenariosLength = scenarios.length;
    const newScenarioId = scenariosLength++;
    const newScenario = {
      id: newScenarioId,
      name: `untitled-scenario${newScenarioId}.json`,
      content: { name: "Write JSON here." },
    };

    setScenarios((oldScenarios) => [...oldScenarios, newScenario]);
  };

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
          {scenarios?.map((scenario) => (
            <Link href={`/scenario/${scenario.id}`} key={scenario.id} passHref>
              <li
                className={scenario.id == id ? styles.active : ""}
                onClick={() => setOpen(false)}
                aria-hidden="true"
              >
                <p>{scenario.name}</p>
              </li>
            </Link>
          ))}
        </ul>

        <button className={styles.btn} onClick={() => createScenario()}>
          Add new scenario
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;