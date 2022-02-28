import Link from "next/link";
import React from "react";

import styles from "./style.module.scss";

export const ListScenario = ({ id, name, setOpen }) => {
  const handleScenarioClick = () => {
    // setSelectedScenario(id);
    setOpen(false);
  };

  return (
    <Link href={"/scenario"} passHref>
      <li
        // className={selectedScenario === id ? styles.active : ""}
        onClick={() => handleScenarioClick()}
        aria-hidden="true"
      >
        <p>{name}</p>
      </li>
    </Link>
  );
};

export default ListScenario;
