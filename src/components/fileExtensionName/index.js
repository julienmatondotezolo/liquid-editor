import React, { useState } from "react";
import { FaExpand } from "react-icons/fa";

import Modal from "../shared/modal";
import styles from "./style.module.scss";

export const FileExtensionName = ({ extension, url, file, onChange }) => {
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
      {open && <Modal setOpen={setOpen} file={file} onChange={onChange} />}
    </section>
  );
};
