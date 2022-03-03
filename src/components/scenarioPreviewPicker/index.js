import React from "react";
import { useRecoilValue } from "recoil";

import { scenariosAtom } from "../../recoil/atoms";
import ScenarioListPreviewPicker from "../scenarioListPreviewPicker";
import styles from "./style.module.scss";

export const ScenarioPreviewPicker = () => {
  const scenarios = useRecoilValue(scenariosAtom);

  return (
    <section className={styles.extensionBox}>
      <p>Preview</p>
      <div className={styles.dropdown}>
        <span>Pick scenario</span>
        <div className={styles.dropdownContent}>
          {scenarios.map((id) => (
            <ScenarioListPreviewPicker id={id} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
};
