import React from "react";

import styles from "./style.module.scss";

export const ScenarioPreviewPicker = ({ scenarios, setCurrentScenario }) => (
  <section className={styles.extensionBox}>
    <p>Preview</p>
    <div className={styles.dropdown}>
      <span>Pick scenario</span>
      <div className={styles.dropdownContent}>
        {scenarios?.map((scenario) => (
          <p
            key={scenario.id}
            onClick={() => setCurrentScenario(scenario.id)}
            aria-hidden="true"
          >
            {scenario.name}
          </p>
        ))}
      </div>
    </div>
  </section>
);
