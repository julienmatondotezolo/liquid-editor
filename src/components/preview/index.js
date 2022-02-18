import { Liquid } from "liquidjs";
import React, { useEffect, useState } from "react";

import config from "../../config/config.json";
import styles from "./style.module.scss";

export const Preview = ({ value, scenario }) => {
  const [liquidValue, setLiquidValue] = useState(value);
  const [scenarios, setScenarios] = useState([]);

  console.log("CURRENT SCENARIO:", scenario);

  useEffect(() => {
    const storageScenario = window.localStorage.getItem(
      config.STORAGE.SCENARIOS
    );

    if (storageScenario) {
      setScenarios(JSON.parse(storageScenario));
    }
  }, []);

  const engine = new Liquid();

  engine
    .parseAndRender(
      value ?? "",
      scenarios.length > 0 ? scenarios[scenario].content : ""
    )
    .then((result) => {
      setLiquidValue(result);
    });

  return (
    <article className={styles.preview}>
      <div dangerouslySetInnerHTML={{ __html: liquidValue }} />
    </article>
  );
};
