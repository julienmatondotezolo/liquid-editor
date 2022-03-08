import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

import { scenariosAtom } from "../../../recoil/atoms";
import ListScenario from "../listScenario ";
import styles from "./style.module.scss";

const Sidebar = ({ setOpen }) => {
  const [scenarios, setScenarios] = useRecoilState(scenariosAtom);

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
