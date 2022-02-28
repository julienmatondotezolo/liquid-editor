import { Liquid } from "liquidjs";
import React, { useState } from "react";

import { useFile, useScenario } from "../../context/index";
import styles from "./style.module.scss";

export const Preview = () => {
  const { file } = useFile();
  const { scenarios } = useScenario();
  const [liquidValue, setLiquidValue] = useState("");

  const engine = new Liquid();

  engine
    .parseAndRender(file.content ?? "", scenarios ? scenarios[0].content : "")
    .then((result) => {
      setLiquidValue(result);
    });

  return (
    <article className={styles.preview}>
      <div dangerouslySetInnerHTML={{ __html: liquidValue }} />
    </article>
  );
};
