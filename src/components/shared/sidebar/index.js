import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";

import config from "../../../config/config.json";
import { scenariosAtom } from "../../../recoil/atoms";
import { AddScenarioButton } from "../addScenarioButton";
import ListScenario from "../listScenario ";
import styles from "./style.module.scss";

const Sidebar = ({ setOpen }) => {
  const scenarios = useRecoilValue(scenariosAtom);

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

        <AddScenarioButton />
      </div>
    </nav>
  );
};

export default Sidebar;
