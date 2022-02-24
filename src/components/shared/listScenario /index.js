import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { scenarioAtom } from "../../../recoil/atoms";
import styles from "./style.module.scss";

export const ListScenario = ({ id, setOpen }) => {
  const scenario = useRecoilValue(scenarioAtom(id));

  return (
    <li
      className={scenario.id == id ? styles.active : ""}
      onClick={() => setOpen(false)}
      aria-hidden="true"
    >
      <p>{scenario.name}</p>
    </li>
  );
};

export default ListScenario;
