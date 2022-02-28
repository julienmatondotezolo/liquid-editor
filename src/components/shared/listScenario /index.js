import Link from "next/link";
import React from "react";

import { useScenarioContext } from "../../../context";
import styles from "./style.module.scss";

export const ListScenario = ({ scenario, setOpen }) => {
  const { selectedScenario, setSelectedScenario } = useScenarioContext();
  const handleScenarioClick = (event) => {
    setSelectedScenario(event.target.dataset.id);
    setOpen(false);
  };

  return (
    <Link href={"/scenario"} passHref>
      <li
        data-id={scenario.id}
        className={selectedScenario === scenario.id ? styles.active : ""}
        onClick={(event) => handleScenarioClick(event)}
        aria-hidden="true"
      >
        <p>{scenario.name}</p>
      </li>
    </Link>
  );
};

export default ListScenario;
