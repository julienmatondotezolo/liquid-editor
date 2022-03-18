import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRecoilValue } from "recoil";

import { scenariosAtom } from "../../../recoil/atoms";
import { AddScenarioButton } from "../addScenarioButton";
import ListScenario from "../listScenario ";
import styles from "./style.module.scss";

const Sidebar = () => {
  const scenarios = useRecoilValue(scenariosAtom);
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={styles.sidebar}
      onMouseEnter={() => setOpen(!open)}
      onMouseLeave={() => setOpen(!open)}
      style={{ width: open ? "20%" : "2%" }}
    >
      <div
        className={styles.collapseIcon}
        onClick={() => setOpen(!open)}
        style={{ transform: open ? "rotate(0deg)" : "rotate(180deg)" }}
        aria-hidden="true"
      >
        <IoIosArrowBack />
      </div>
      <AddScenarioButton />
      <ul style={{ display: open ? "block" : "none" }}>
        {scenarios.map((id) => (
          <ListScenario id={id} key={id} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
