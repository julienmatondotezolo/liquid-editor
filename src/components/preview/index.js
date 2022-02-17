import { Liquid } from "liquidjs";
import React, { useEffect, useState } from "react";

import styles from "./style.module.scss";

export const Preview = ({ value }) => {
  const [liquidValue, setLiquidValue] = useState(value);
  const [scenarios, setScenarios] = useState(value);

  useEffect(() => {
    setScenarios(
      JSON.parse(window.localStorage.getItem("bothive-liquid-scenario"))
    );
    console.log(
      JSON.parse(window.localStorage.getItem("bothive-liquid-scenario"))[0]
        .content
    );
  }, []);

  const engine = new Liquid();

  // console.log(value);
  // scenarios && console.log(scenarios[0].content);

  engine
    .parseAndRender(value ?? "", scenarios && scenarios[0].parsedContent)
    .then((result) => setLiquidValue(result));

  return (
    <article className={styles.preview}>
      <div dangerouslySetInnerHTML={{ __html: liquidValue }} />
    </article>
  );
};
