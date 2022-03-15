import { useRouter } from "next/router";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useRecoilState, useSetRecoilState } from "recoil";

import config from "../../../config/config.json";
import { scenariosAtom, selectedScenarioState } from "../../../recoil/atoms";
import styles from "./style.module.scss";

export const AddScenarioButton = () => {
  const [scenarios, setScenarios] = useRecoilState(scenariosAtom);
  const setSelectedScenario = useSetRecoilState(selectedScenarioState);
  const router = useRouter();

  const createNewScenario = () => {
    setScenarios([...scenarios, scenarios.length]);
    setSelectedScenario(scenarios.length);
    router.push(config.ROUTE.SCENARIO);
  };

  return (
    <button className={styles.btn} onClick={createNewScenario}>
      <section>
        <IoMdAddCircleOutline />
        <p>Add new scenario</p>
      </section>
    </button>
  );
};
