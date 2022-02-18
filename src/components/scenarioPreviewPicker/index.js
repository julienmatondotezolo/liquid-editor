import React from "react";
import { FaExpand } from "react-icons/fa";

import styles from "./style.module.scss";

export const ScenarioPreviewPicker = ({ scenarios, setCurrentScenario }) => (
  <section className={styles.extensionBox}>
    <p>Preview</p>
    <div className="dropdown">
      <span>Mouse over me</span>
      <div className="dropdown-content">
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
