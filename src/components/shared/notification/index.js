import React from "react";

import styles from "./style.module.scss";

export const Notification = ({ message, error }) => {
  const removeNotification = () => {
    //
  };

  return (
    <div className={`${styles.notification} ${error && styles.bgRed}`}>
      <p>{message}</p>
    </div>
  );
};
