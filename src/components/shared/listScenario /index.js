import Link from "next/link";
// import { useRouter } from "next/router";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  scenarioAtomFamily,
  selectedScenarioState,
} from "../../../recoil/atoms";
import styles from "./style.module.scss";

export const ListScenario = ({ id }) => {
  const { name, content } = useRecoilValue(scenarioAtomFamily(id));
  const [selectedScenario, setSelectedScenario] = useRecoilState(
    selectedScenarioState
  );
  // const router = useRouter();
  // const { id } = router.query;

  const handleScenarioClick = () => {
    setSelectedScenario(id);
  };

  console.log("SELECTED SCENARIO:", selectedScenario);
  console.log("CURRENT ID:", id);

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
