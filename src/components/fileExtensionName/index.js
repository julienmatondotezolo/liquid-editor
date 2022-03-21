import React, { useState } from "react";
import { FaExpand } from "react-icons/fa";

import Modal from "../shared/modal";
import styles from "./style.module.scss";

export const FileExtensionName = ({ extension, url, name, content, onChange, mode }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.extensionBox}>
      <p>
        {extension}:{" "}
        {url && (
          <a target="_blank" href={url} rel="noreferrer">
            <strong>Documentation</strong>
          </a>
        )}
      </p>

      <FaExpand onClick={() => setOpen(!open)} />
      {open && <Modal setOpen={setOpen} name={name} mode={mode} content={content} onChange={onChange} />}
    </section>
  );
};
