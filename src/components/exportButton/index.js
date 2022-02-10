import React, { useState } from "react";
import Image from "next/image";
import exportIcon from "../../assets/images/export_icon.svg";
import styles from "./style.module.scss";

const ExportButton = ({ getFileData }) => {
  return (
    <div className={styles.button}>
      <Image src={exportIcon} alt="Import file" width={20} height={20} />
      <p>Export file</p>
    </div>
  );
};

export default ExportButton;
