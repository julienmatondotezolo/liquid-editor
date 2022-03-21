import { Liquid } from "liquidjs";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import { ShadowRoot } from "../../helpers/";
import { fileAtom, scenarioAtomFamily, selectedScenarioState } from "../../recoil/atoms";
import { ScenarioPreviewPicker } from "../scenarioPreviewPicker";
import { FileName } from "../shared";
import styles from "./style.module.scss";

export const Preview = () => {
  const file = useRecoilValue(fileAtom);
  const selectedScenarioID = useRecoilValue(selectedScenarioState);
  const scenario = useRecoilValue(scenarioAtomFamily(selectedScenarioID));
  const { name, content } = scenario;
  const [liquidValue, setLiquidValue] = useState("");

  const engine = new Liquid({
    cache: true,
  });

  engine.parseAndRender(file.content ?? "", content || "").then((result) => {
    setLiquidValue(result);
  });

  return (
    <section className={styles.preview}>
      <div className={styles.previewHeader}>
        <FileName name={name} />
        <ScenarioPreviewPicker />
      </div>
      <article className={styles.previewContent}>
        <ShadowRoot>
          <div dangerouslySetInnerHTML={{ __html: liquidValue }} />
        </ShadowRoot>
      </article>
    </section>
  );
};
