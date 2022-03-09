import React from "react";
import { FaExpand } from "react-icons/fa";

import styles from "./style.module.scss";

export const FileExtensionName = ({ extension, url }) => (
  <section className={styles.extensionBox}>
    <p>
      {extension}:{" "}
      {url && (
        <a target="_blank" href={url} rel="noreferrer">
          <strong>Documentation</strong>
        </a>
      )}
    </p>

    <FaExpand />
  </section>
);
