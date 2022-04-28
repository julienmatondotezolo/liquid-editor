import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRecoilValue } from "recoil";

import { scenariosAtom } from "../../recoil/atoms";
import ScenarioListPreviewPicker from "../scenarioListPreviewPicker";
import { AddScenarioButton } from "../shared/addScenarioButton";
import styles from "./style.module.scss";

export const ScenarioPreviewPicker = () => {
  const scenarios = useRecoilValue(scenariosAtom);

  return (
    <div className={styles.scenarioDropdown}>
      <article className={styles.scenarioPicker}>
        <p>Pick scenario</p>
        <IoMdArrowDropdown />
      </article>
      <div className={styles.scenarioDropdownContent}>
        {scenarios.map((id) => (
          <ScenarioListPreviewPicker id={id} key={id} />
        ))}
        <AddScenarioButton />
      </div>
    </div>
  );
};
