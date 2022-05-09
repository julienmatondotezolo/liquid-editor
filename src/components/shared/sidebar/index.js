import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRecoilValue } from "recoil";

import config from "../../../config/config.json";
import { scenariosAtom } from "../../../recoil/atoms";
import { AddScenarioButton } from "../addScenarioButton";
import ListScenario from "../listScenario";
import styles from "./style.module.scss";

export const Sidebar = () => {
  const scenarios = useRecoilValue(scenariosAtom);
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.sidebar} style={{ width: open ? "20%" : "2%" }}>
      <div
        className={styles.collapseIcon}
        onClick={() => setOpen(!open)}
        style={{ transform: open ? "rotate(0deg)" : "rotate(180deg)" }}
        aria-hidden="true"
      >
        <IoIosArrowBack />
      </div>
      <AddScenarioButton customButtonStyle={{ opacity: open ? "1.0" : "0" }} />
      <ul style={{ width: open ? "100%" : "0", opacity: open ? "1.0" : "0" }}>
        {scenarios.map((id) => (
          <ListScenario id={id} key={id} />
        ))}
      </ul>
      <div className={styles.linkContainer}>
        <div>
          <div className={styles.links}>
            <Link href={config.BOTHIVE.SALES_PAGE}>
              <a className={styles.link}>site</a>
            </Link>
            <Link href={config.BOTHIVE.APP}>
              <a className={styles.link}>app</a>
            </Link>
          </div>

          <Link href={config.BOTHIVE.SALES_PAGE}>
            <a target="_blank">
              <span className={styles.poweredByContent}>
                Powered by Bothive <Image src="/bothive_logo.svg" width={16} height={16}
alt="Bothive logo"></Image>
              </span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
