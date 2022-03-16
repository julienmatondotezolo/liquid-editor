import { useRouter } from "next/router";
import React from "react";
import { IoMdAddCircleOutline, IoMdArrowDropdown } from "react-icons/io";
import { useRecoilState, useSetRecoilState } from "recoil";

import config from "../../../config/config.json";
import { scenariosAtom, selectedScenarioState } from "../../../recoil/atoms";
import ScenarioListPreviewPicker from "../../scenarioListPreviewPicker";
import styles from "./style.module.scss";

export const ScenarioPreviewPicker = () => {
  const [scenarios, setScenarios] = useRecoilState(scenariosAtom);
  const setSelectedScenario = useSetRecoilState(selectedScenarioState);
  const router = useRouter();

  const createNewScenario = () => {
    setScenarios([...scenarios, scenarios.length]);
    setSelectedScenario(scenarios.length);
    router.push(config.ROUTE.SCENARIO);
  };

  return (
    <div className={styles.dropdown}>
      <article className={styles.picker}>
        <p>Pick scenario</p> <IoMdArrowDropdown />
      </article>
      <div className={styles.dropdownContent}>
        {scenarios.map((id) => (
          <ScenarioListPreviewPicker id={id} key={id} />
        ))}
        <button className={styles.btn} onClick={createNewScenario}>
          <IoMdAddCircleOutline />
          <p>Add new scenario</p>
        </button>
      </div>
    </div>
  );
};
