import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import config from "../../../config/config.json";
import { scenariosAtom, selectedScenarioState } from "../../../recoil/atoms";
import ListScenario from "../listScenario ";
import styles from "./style.module.scss";

const Sidebar = ({ setOpen }) => {
  const [scenarios, setScenarios] = useRecoilState(scenariosAtom);
  const setSelectedScenario = useSetRecoilState(selectedScenarioState);
  const router = useRouter();

  const createNewScenario = () => {
    setScenarios([...scenarios, scenarios.length]);
    setSelectedScenario(scenarios.length);
    router.push(config.ROUTE.SCENARIO);
  };

  return (
    <nav className={styles.sidebar}>
      <Link href="/" onClick={() => setOpen(false)}>
        <a>Editor</a>
      </Link>

      <div>
        <Link href={config.ROUTE.SCENARIO} onClick={() => setOpen(false)}>
          <a>Scenario</a>
        </Link>

        <ul>
          {scenarios.map((id) => (
            <ListScenario id={id} setOpen={setOpen} key={id} />
          ))}
        </ul>

        <button className={styles.btn} onClick={createNewScenario}>
          Add new scenario
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
