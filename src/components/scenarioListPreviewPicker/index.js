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
    <button
      className={`${styles.scenarioListItems} ${
        selectedScenario === id ? styles.activeList : ""
      }`}
      onClick={() => setSelectedScenario(id)}
    >
      {name}
    </button>
  );
};

export default ScenarioListPreviewPicker;
