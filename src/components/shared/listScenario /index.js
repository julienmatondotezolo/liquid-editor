import Link from "next/link";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  scenarioAtomFamily,
  selectedScenarioState,
} from "../../../recoil/atoms";
import styles from "./style.module.scss";

export const ListScenario = ({ id }) => {
  const { name } = useRecoilValue(scenarioAtomFamily(id));
  const [selectedScenario, setSelectedScenario] = useRecoilState(
    selectedScenarioState
  );

  const handleScenarioClick = () => {
    setSelectedScenario(id);
  };

  return (
    <Link href={`/scenario/${id}`} passHref>
      <li
        className={selectedScenario === id ? styles.active : ""}
        onClick={() => handleScenarioClick()}
        aria-hidden="true"
      >
        <p>{name}</p>
      </li>
    </Link>
  );
};

export default ListScenario;
