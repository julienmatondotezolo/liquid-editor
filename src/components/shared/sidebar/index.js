import React from "react";
import { useRecoilValue } from "recoil";

import { scenariosAtom } from "../../../recoil/atoms";
import { AddScenarioButton } from "../addScenarioButton";
import ListScenario from "../listScenario ";
import styles from "./style.module.scss";

const Sidebar = () => {
  const scenarios = useRecoilValue(scenariosAtom);

  return (
    <nav className={styles.sidebar}>
      <AddScenarioButton />
      <ul>
        {scenarios.map((id) => (
          <ListScenario id={id} key={id} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
