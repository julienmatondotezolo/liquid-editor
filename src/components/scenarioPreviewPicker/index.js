import React from "react";

import { useScenarioContext } from "../../context";
import ScenarioListPreviewPicker from "../scenarioListPreviewPicker";
import styles from "./style.module.scss";

export const ScenarioPreviewPicker = () => {
  const { scenarios } = useScenarioContext();

  return (
    <section className={styles.extensionBox}>
      <p>Preview</p>
      <div className={styles.dropdown}>
        <span>Pick scenario</span>
        <div className={styles.dropdownContent}>
          {scenarios.map((scenario) => (
            <ScenarioListPreviewPicker scenario={scenario} key={scenario.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
