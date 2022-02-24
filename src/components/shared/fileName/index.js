import React from "react";
import { useRecoilState } from "recoil";

import { fileAtom } from "../../../recoil/atoms";
import styles from "./style.module.scss";

export const FileName = () => {
  const [file, setFile] = useRecoilState(fileAtom);

  return (
    <article className={styles.documentName}>
      <p>Document name</p>
      <input
        type="text"
        value={file.name}
        onChange={(event) => setFile({ ...file, name: event.target.value })}
      />
    </article>
  );
};
