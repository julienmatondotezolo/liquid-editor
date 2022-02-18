import React from "react";
import { FaExpand } from "react-icons/fa";

import styles from "./style.module.scss";

export const FileExtensionName = ({ extension }) => (
  <section className={styles.extensionBox}>
    <p>{extension}</p>
    <FaExpand />
  </section>
);
