import { Liquid } from "liquidjs";
import React, { useState } from "react";

import { useFileContext, useScenarioContext } from "../../context/index";
import styles from "./style.module.scss";

export const Preview = () => {
  const { file } = useFileContext();
  const { scenarios, selectedScenario } = useScenarioContext();
  const [liquidValue, setLiquidValue] = useState("");
  const engine = new Liquid();

  engine
    .parseAndRender(
      file.content ?? "",
      scenarios.length > 0 ? scenarios[selectedScenario].content : ""
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
