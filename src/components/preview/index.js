import React from "react";
import { Liquid } from "liquidjs";
import styles from "./style.module.scss";

export const Preview = ({ value }) => {
  const engine = new Liquid();
  engine.parseAndRender("{{name | capitalize}}", { name: "alice" }).then(console.log);
  return (
    <div className={styles.preview}>
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
};
