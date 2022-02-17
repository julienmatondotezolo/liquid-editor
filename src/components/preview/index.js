import { Liquid } from "liquidjs";
import React, { useEffect, useState } from "react";

import styles from "./style.module.scss";

export const Preview = ({ value }) => {
  console.log(value);
  const [liquidValue, setLiquidValue] = useState(value);
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    const storageScenario = window.localStorage.getItem(
      "bothive-liquid-scenario"
    );

    if (storageScenario) {
      setScenarios(JSON.parse(storageScenario));
    }
  }, []);

  const engine = new Liquid();

  // console.log(value);
  // scenarios && console.log(scenarios[0].content);

  if (scenarios.length > 0) {
    engine
      .parseAndRender(liquidValue ?? "", scenarios[0].content)
      .then((result) => {
        console.log(result);
        // setLiquidValue(result);
      });
  }

  return (
    <article className={styles.preview}>
      <div dangerouslySetInnerHTML={{ __html: liquidValue }} />
    </article>
  );
};
