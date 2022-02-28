import React from "react";

import { useScenarioContext } from "../../context";
import styles from "./style.module.scss";

export const ScenarioListPreviewPicker = ({ scenario }) => {
  const { name } = scenario;
  const { selectedScenario, setSelectedScenario } = useScenarioContext();

  return (
    <p
      className={selectedScenario === scenario.id ? styles.active : ""}
      onClick={() => setSelectedScenario(scenario.id)}
      aria-hidden="true"
    >
      {name}
    </p>
  );
};

export default ScenarioListPreviewPicker;
