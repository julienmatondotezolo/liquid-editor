import { Liquid } from "liquidjs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import config from "../../config/config.json";
import styles from "./style.module.scss";

export const Preview = ({ value }) => {
  const [liquidValue, setLiquidValue] = useState(value);
  const [scenarios, setScenarios] = useState([]);
  const router = useRouter();
  const pageId = router.query.id ?? 0;

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
      scenarios.length > 0 ? scenarios[pageId].content : ""
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
