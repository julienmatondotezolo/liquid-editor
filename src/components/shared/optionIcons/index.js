/* eslint-disable react/jsx-max-props-per-line */
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaExpand } from "react-icons/fa";

import config from "../../../config/config.json";
import Modal from "../modal";
import styles from "./style.module.scss";

export const OptionIcons = ({ name, content, onChange, mode }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.iconBox}>
      <button onClick={() => setOpen(!open)} className={styles.iconBox__icon}>
        <FaExpand />
      </button>
      <Link href={config.EXTERNAL.DOC.LIQUID}>
        <a target="_blank" rel="noreferrer" className={styles.iconBox__icon}>
          <AiOutlineInfoCircle />
        </a>
      </Link>
      {open && <Modal setOpen={setOpen} name={name} mode={mode} content={content} onChange={onChange} />}
    </section>
  );
};
