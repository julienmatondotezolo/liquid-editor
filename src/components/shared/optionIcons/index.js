/* eslint-disable react/jsx-max-props-per-line */
import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaExpand } from "react-icons/fa";

import Modal from "../modal";
import styles from "./style.module.scss";

export const OptionIcons = ({ name, content, onChange, mode }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.iconBox}>
      <FaExpand onClick={() => setOpen(!open)} />
      <AiOutlineInfoCircle />
      {open && <Modal setOpen={setOpen} name={name} mode={mode} content={content} onChange={onChange} />}
    </section>
  );
};
