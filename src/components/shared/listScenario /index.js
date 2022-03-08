import Link from "next/link";
import { useRouter } from "next/router";
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
      <li>
        <div
          className={selectedScenario === id ? styles.active : ""}
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
