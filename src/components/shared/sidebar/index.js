import Link from "next/link";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import config from "../../../config/config.json";
import { scenariosAtom } from "../../../recoil/atoms";
import { scenariosSelector } from "../../../recoil/selectors";
import ListScenario from "../listScenario ";
import styles from "./style.module.scss";

const Sidebar = ({ setOpen }) => {
  const [scenarios, setScenarios] = useRecoilState(scenariosAtom);
  const allScenarios = useRecoilValue(scenariosSelector);

  useEffect(() => {
    localStorage.setItem(
      config.STORAGE.SCENARIOS,
      JSON.stringify(allScenarios)
    );
  }, [allScenarios]);

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
            <ListScenario id={id} setOpen={setOpen} key={id} />
          ))}
        </ul>

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
