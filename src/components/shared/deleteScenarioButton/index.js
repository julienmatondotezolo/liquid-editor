import { useRouter } from "next/router";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useRecoilState, useResetRecoilState } from "recoil";

import config from "../../../config/config.json";
import { scenarioAtomFamily, scenariosAtom, selectedScenarioState } from "../../../recoil/atoms";
import styles from "./style.module.scss";

export const DeleteScenarioButton = ({ customButtonStyle }) => {
  const [scenarios, setScenarios] = useRecoilState(scenariosAtom);
  const [selectedScenario, setSelectedScenario] = useRecoilState(selectedScenarioState);
  const resetAtom = useResetRecoilState(scenarioAtomFamily(selectedScenario));

  const router = useRouter();

  const deleteScenario = () => {
    const newScenarios = scenarios.filter(function (scenarioId) {
      return scenarioId !== selectedScenario;
    });

    setScenarios(newScenarios);
    resetAtom();
    setSelectedScenario(0);

    router.push(config.ROUTE.HOME);
  };

  return (
    <button style={customButtonStyle} className={styles.button} onClick={deleteScenario}>
      <section>
        <MdDelete />
        <p>Delete scenario</p>
      </section>
    </button>
  );
};
