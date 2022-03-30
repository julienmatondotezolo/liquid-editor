import { useRouter } from "next/router";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";

import config from "../../../config/config.json";
import { scenarioAtomFamily, scenariosAtom, selectedScenarioState } from "../../../recoil/atoms";
import styles from "./style.module.scss";

export const DeleteScenarioButton = ({ customButtonStyle, scenarioId }) => {
  const [scenarios, setScenarios] = useRecoilState(scenariosAtom);
  const setSelectedScenario = useSetRecoilState(selectedScenarioState);
  const resetAtom = useResetRecoilState(scenarioAtomFamily(scenarioId));

  const router = useRouter();

  const deleteScenario = async () => {
    const newScenarios = scenarios.filter(function (newScenarioId) {
      return newScenarioId !== scenarioId;
    });

    setScenarios(newScenarios);
    resetAtom();
    setSelectedScenario(scenarios[1]);

    router.push(config.ROUTE.HOME);
  };

  return (
    <button style={customButtonStyle} className={styles.button} onClick={deleteScenario}>
      <MdDelete />
    </button>
  );
};
