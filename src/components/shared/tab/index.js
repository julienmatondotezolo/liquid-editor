import Link from "next/link";
import React from "react";

import config from "../../../config/config.json";
import { FileName } from "../fileName";
import styles from "./style.module.scss";

export default function Tab({ name, active, href }) {
  return (
    <Link href={href ?? config.ROUTE.SCENARIO} passHref>
      <a>
        <div className={`${styles.tab} ${active && styles.active}`}>
          {active ? <FileName name={name} /> : <p>{name}</p>}
        </div>
      </a>
    </Link>
  );
}
