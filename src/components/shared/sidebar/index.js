import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import config from "../../../config/config.json";
import styles from "./style.module.scss";

const Sidebar = () => {
  const [scenarios, setScenarios] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const storageScenarios = window.localStorage.getItem(
      config.STORAGE.SCENARIOS
    );

    if (storageScenarios) {
      setScenarios(JSON.parse(storageScenarios));
      console.log(JSON.parse(storageScenarios));
    }
  }, []);

  const createScenario = (event) => {
    setScenarios({ ...scenarios, name: "untitled-scenario.json" });
  };

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
            <Link href={`/scenario/${scenario.id}`} key={scenario.id} passHref>
              <li
                className={scenario.id == id && styles.active}
                aria-hidden="true"
              >
                <p>
                  {scenario.id}: {scenario.name}
                </p>
              </li>
            </Link>
          ))}
        </ul>
        <button onClick={(e) => createScenario(e)}>Add new scenario</button>
      </div>
    </nav>
  );
};

export default Sidebar;
