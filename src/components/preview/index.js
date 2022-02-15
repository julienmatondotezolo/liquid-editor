import React, { useState, useEffect } from "react";
import { Liquid } from "liquidjs";
import styles from "./style.module.scss";

export const Preview = ({ value }) => {
  const [liquidValue, setLiquidValue] = useState(value);
  const [scenario, setScenario] = useState(value);

  useEffect(() => {
    setScenario(JSON.parse(window.localStorage.getItem("bothive-liquid-scenario")));
  }, []);

  const engine = new Liquid();
  // engine.parseAndRender(value ? value : "").then((result) => setLiquidValue(result));
  console.log(value);
  engine
    .parseAndRender(value ? value : "", scenario ? JSON.parse(scenario.content) : "")
    .then((result) => console.log(result));

  return (
    <article className={styles.preview}>
      <div dangerouslySetInnerHTML={{ __html: liquidValue }} />
    </article>
  );
};
