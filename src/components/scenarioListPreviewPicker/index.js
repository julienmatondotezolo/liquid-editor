import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { scenarioAtomFamily, selectedScenarioState } from "../../recoil/atoms";
import styles from "./style.module.scss";

export const ScenarioListPreviewPicker = ({ id }) => {
  const { name } = useRecoilValue(scenarioAtomFamily(id));
  const [selectedScenario, setSelectedScenario] = useRecoilState(
    selectedScenarioState
  );

  return (
    <p
      className={selectedScenario === id ? styles.active : ""}
      onClick={() => setSelectedScenario(id)}
      aria-hidden="true"
    >
      {name}
    </p>
  );
};

export default ScenarioListPreviewPicker;