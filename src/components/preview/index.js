import React, { useState } from "react";
import { Liquid } from "liquidjs";
import styles from "./style.module.scss";

export const Preview = ({ value }) => {
  const [liquidValue, setLiquidValue] = useState(value);
  const engine = new Liquid();
  value && engine.parseAndRender(value).then((result) => setLiquidValue(result));
  return (
    <article className={styles.preview}>
      <div dangerouslySetInnerHTML={{ __html: liquidValue }} />
    </article>
  );
};
