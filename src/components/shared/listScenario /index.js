import Link from "next/link";
import React from "react";

import { useScenarioContext } from "../../../context";
import styles from "./style.module.scss";

export const ListScenario = ({ scenario, setOpen }) => {
  const { selectedScenario, setSelectedScenario } = useScenarioContext();
  const handleScenarioClick = () => {
    setSelectedScenario(scenario.id);
    setOpen(false);
  };

  return (
    <Link href={"/scenario"} tabindex={scenario.id} passHref>
      <li
        className={selectedScenario === scenario.id ? styles.active : ""}
        data-id={scenario.id}
        onClick={(event) => handleScenarioClick(event)}
        onKeyDown={() => handleScenarioClick()}
        tabIndex={scenario.id}
        aria-hidden="true"
      >
        <p>{scenario.name}</p>
      </li>
    </Link>
  );
};

export default ListScenario;
