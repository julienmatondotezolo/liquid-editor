import Link from "next/link";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import config from "../../../config/config.json";
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

  const addSelectedScenarioId = () => {
    setSelectedScenario(id);
  };

  return (
    <Link href={config.ROUTE.SCENARIO} passHref>
      <li
        className={`${styles.listItem} ${
          selectedScenario === id ? styles.active : ""
        }`}
      >
        <div
          data-id={id}
          onClick={() => addSelectedScenarioId()}
          onKeyDown={() => addSelectedScenarioId()}
          aria-hidden="true"
          role="button"
          tabIndex="0"
        >
          <p>{name}</p>
        </div>
      </li>
    </Link>
  );
};

export default ListScenario;
