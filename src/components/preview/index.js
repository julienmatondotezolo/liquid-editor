import { Liquid } from "liquidjs";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import { ShadowRoot } from "../../helpers/";
import { fileAtom, scenarioAtomFamily, selectedScenarioState } from "../../recoil/atoms";
import { ScenarioPreviewPicker } from "../scenarioPreviewPicker";
import styles from "./style.module.scss";

export const Preview = () => {
  const file = useRecoilValue(fileAtom);
  const selectedScenarioID = useRecoilValue(selectedScenarioState);
  const scenario = useRecoilValue(scenarioAtomFamily(selectedScenarioID));
  const { content } = scenario;
  const [liquidValue, setLiquidValue] = useState("");

  const engine = new Liquid({
    cache: true,
  });

  engine.parseAndRender(file.content ?? "", content || "").then((result) => {
    setLiquidValue(result);
  });

  return (
    <section className={styles.preview}>
      <article className={styles.previewContent}>
        <ShadowRoot>
          <div dangerouslySetInnerHTML={{ __html: liquidValue }} />
        </ShadowRoot>
      </article>
      <div className={styles.previewHeader}>
        <ScenarioPreviewPicker />
      </div>
    </section>
  );
};
