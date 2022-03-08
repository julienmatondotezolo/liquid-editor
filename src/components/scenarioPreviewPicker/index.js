import { useRouter } from "next/router";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { scenariosAtom, selectedScenarioState } from "../../recoil/atoms";
import ScenarioListPreviewPicker from "../scenarioListPreviewPicker";
import styles from "./style.module.scss";

export const ScenarioPreviewPicker = () => {
  const [scenarios, setScenarios] = useRecoilState(scenariosAtom);
  const setSelectedScenario = useSetRecoilState(selectedScenarioState);
  const router = useRouter();
  const createNewScenario = () => {
    setScenarios([...scenarios, scenarios.length]);
    setSelectedScenario(scenarios.length);
    router.push("/scenario");
  };

  return (
    <section className={styles.extensionBox}>
      <p>Preview</p>
      <div className={styles.dropdown}>
        <span>Pick scenario</span>
        <div className={styles.dropdownContent}>
          {scenarios.map((id) => (
            <ScenarioListPreviewPicker id={id} key={id} />
          ))}
          <button className={styles.btn} onClick={() => createNewScenario()}>
            Add new scenario
          </button>
        </div>
      </div>
    </section>
  );
};
