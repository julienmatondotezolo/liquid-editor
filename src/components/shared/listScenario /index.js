import Link from "next/link";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  scenarioAtomFamily,
  selectedScenarioState,
} from "../../../recoil/atoms";
import styles from "./style.module.scss";

export const ListScenario = ({ id, setOpen }) => {
  const { name } = useRecoilValue(scenarioAtomFamily(id));
  const [selectedScenario, setSelectedScenario] = useRecoilState(
    selectedScenarioState
  );

  const addSelectedScenarioId = () => {
    setSelectedScenario(id);
    setOpen(false);
  };

  return (
    <Link href={"/scenario"} passHref>
      <li
        className={selectedScenario === id ? styles.active : ""}
        onClick={() => addSelectedScenarioId()}
        aria-hidden="true"
      >
        <p>{name}</p>
      </li>
    </Link>
  );
};

export default ListScenario;
