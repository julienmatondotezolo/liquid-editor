import React from "react";

import config from "../../../config/config.json";
import ExportButton from "../exportButton";
import ImportButton from "../importButton";
import Tab from "../tab";
import styles from "./style.module.scss";

export default function Tabs({ fileName, scenarioName, scenario, file }) {
  return (
    <section className={styles.tabs}>
      <div>
        <Tab name={fileName} href={config.ROUTE.HOME} active={scenario ? false : true} />
        <Tab name={scenarioName} active={file ? false : true} />
      </div>
      <section className={styles.buttons}>
        <ImportButton type={file ? "file" : "scenario"} />
        <ExportButton data={file ?? scenario} />
      </section>
    </section>
  );
}
