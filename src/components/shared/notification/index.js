import React, { useEffect, useState } from "react";

import styles from "./style.module.scss";

export const Notification = ({ message, code, delay }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, delay);
  }, [delay]);

  return visible ? (
    <div
      className={`${styles.notification} ${code != 200 ? styles.bgRed : ""}`}
    >
      <p>{message}</p>
    </div>
  ) : (
    <div />
  );
};
