import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRecoilValue } from "recoil";

import { scenariosAtom } from "../../../recoil/atoms";
import { AddScenarioButton } from "../addScenarioButton";
import { DeleteScenarioButton } from "../deleteScenarioButton";
import ListScenario from "../listScenario";
import styles from "./style.module.scss";

export const Sidebar = () => {
  const scenarios = useRecoilValue(scenariosAtom);
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.sidebar} style={{ width: open ? "20%" : "2%" }}>
      <div
        className={styles.collapseIcon}
        onClick={() => setOpen(!open)}
        style={{ transform: open ? "rotate(0deg)" : "rotate(180deg)" }}
        aria-hidden="true"
      >
        <IoIosArrowBack />
      </div>
      <AddScenarioButton customButtonStyle={{ opacity: open ? "1.0" : "0" }} />
      <ul style={{ width: open ? "100%" : "0", opacity: open ? "1.0" : "0" }}>
        {scenarios.map((id) => (
          <ListScenario id={id} key={id} />
        ))}
      </ul>
      <DeleteScenarioButton customButtonStyle={{ opacity: open ? "1.0" : "0" }} />
    </nav>
  );
};
