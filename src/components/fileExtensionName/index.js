import React from "react";
import Image from "next/image";
import expandIcon from "../../assets/images/expand_icon.png";
import collapseIcon from "../../assets/images/collapse_icon.png";
import styles from "./style.module.scss";

export const FileExtensionName = ({ file, extension }) => {
  return (
    <section className={styles.extensionBox}>
      <p>{extension}</p>
      <Image src={expandIcon} alt="Import file" width={20} height={20} />
    </section>
  );
};
