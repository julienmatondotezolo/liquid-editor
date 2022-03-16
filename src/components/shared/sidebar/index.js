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
      style={open ? { left: "0" } : { left: "-18%" }}
    >
      <div
        className={styles.collapseIcon}
        onClick={() => setOpen(!open)}
        style={open ? { transform: "rotate(0deg)" } : { transform: "rotate(180deg)" }}
        aria-hidden="true"
      >
        <IoIosArrowBack />
      </div>
      <AddScenarioButton />
      <ul style={open ? { display: "block" } : { display: "none" }}>
        {scenarios.map((id) => (
          <ListScenario id={id} key={id} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
