import { Liquid } from "liquidjs";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import config from "../../config/config.json";
import {
  fileAtom,
  scenarioAtomFamily,
  selectedScenarioState,
} from "../../recoil/atoms";
import styles from "./style.module.scss";

export const Preview = () => {
  const file = useRecoilValue(fileAtom);
  const selectedScenarioID = useRecoilValue(selectedScenarioState);
  const [scenario, setScenario] = useRecoilState(
    scenarioAtomFamily(selectedScenarioID)
  );
  const { content } = scenario;
  const [liquidValue, setLiquidValue] = useState("");

  // useEffect(() => {
  //   const storageScenario = window.localStorage.getItem(
  //     config.STORAGE.SCENARIOS
  //   );

  //   if (storageScenario) {
  //     setScenarios(JSON.parse(storageScenario));
  //   }
  // }, []);

  const engine = new Liquid();

  engine
    .parseAndRender(file.content ?? "", content ? content : "")
    .then((result) => {
      setLiquidValue(result);
    });

  return (
    <article className={styles.preview}>
      <div dangerouslySetInnerHTML={{ __html: liquidValue }} />
    </article>
  );
};
