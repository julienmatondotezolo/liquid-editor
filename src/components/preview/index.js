import { Liquid } from "liquidjs";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import config from "../../config/config.json";
import { fileAtom } from "../../recoil/atoms";
import styles from "./style.module.scss";

export const Preview = ({ scenario }) => {
  const file = useRecoilValue(fileAtom);
  const [scenarios, setScenarios] = useState([]);
  const [liquidValue, setLiquidValue] = useState("");

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
      file.content ?? "",
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
