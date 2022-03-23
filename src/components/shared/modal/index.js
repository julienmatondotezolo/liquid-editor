import dynamic from "next/dynamic";
import React from "react";
import { BiCollapse } from "react-icons/bi";

import { FileName } from "../fileName";
import styles from "./style.module.scss";

const CodeMirror = dynamic(() => import("../codeMirror"), {
  ssr: false,
});

const Modal = ({ setOpen, name, mode, content, onChange }) => (
  <div className={styles.modal}>
    <div className={styles.modalBackground}></div>
    <FileName name={name} />
    <BiCollapse onClick={() => setOpen(false)} />
    <div className={styles.modalContent}>
      <CodeMirror mode={mode} content={content} onChange={onChange} className={styles.codeMirror} />
    </div>
  </div>
);

export default Modal;
