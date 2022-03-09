import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import config from "../../config/config.json";
import {
  scenarioAtomFamily,
  scenariosAtom,
  selectedScenarioState,
} from "../../recoil/atoms";
import ScenarioListPreviewPicker from "../scenarioListPreviewPicker";
import styles from "./style.module.scss";

export const ScenarioPreviewPicker = () => {
  const [scenarios, setScenarios] = useRecoilState(scenariosAtom);
  const [selectedScenario, setSelectedScenario] = useRecoilState(
    selectedScenarioState
  );
  const { name } = useRecoilValue(scenarioAtomFamily(selectedScenario));
  const router = useRouter();

  const createNewScenario = () => {
    setScenarios([...scenarios, scenarios.length]);
    setSelectedScenario(scenarios.length);
    router.push(config.ROUTE.SCENARIO);
  };

  return (
    <section className={styles.extensionBox}>
      <p>
        Preview:{" "}
        <Link href={config.ROUTE.SCENARIO} passHref>
          <a>
            <strong>{name}</strong>
          </a>
        </Link>
      </p>
      <div className={styles.dropdown}>
        <span>Pick scenario</span>
        <div className={styles.dropdownContent}>
          {scenarios.map((id) => (
            <ScenarioListPreviewPicker id={id} key={id} />
          ))}
          <button className={styles.btn} onClick={createNewScenario}>
            Add new scenario
          </button>
        </div>
      </div>
    </section>
  );
};
