import Link from "next/link";
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import config from "../../../config/config.json";
import { scenariosAtom } from "../../../recoil/atoms";
import ListScenario from "../listScenario ";
import styles from "./style.module.scss";

const Sidebar = ({ setOpen }) => {
  const [scenarios, setScenarios] = useRecoilState(scenariosAtom);

  // const [scenarios, setScenarios] = useState([]);

  // useEffect(() => {
  //   const storageScenarios = window.localStorage.getItem(
  //     config.STORAGE.SCENARIOS
  //   );

  //   if (storageScenarios) {
  //     setScenarios(JSON.parse(storageScenarios));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(config.STORAGE.SCENARIOS, JSON.stringify(scenarios));
  // }, [scenarios]);

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
          {scenarios.map((id) => (
            <ListScenario id={id} key={id} />
          ))}
        </ul>

        {/* <button className={styles.btn} onClick={() => createScenario()}>
          Add new scenario
        </button> */}
        <button
          className={styles.btn}
          onClick={() => setScenarios([...scenarios, scenarios.length])}
        >
          Add new scenario
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
