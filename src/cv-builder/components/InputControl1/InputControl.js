import React from "react";

import styles from "./InputControl1.module.css";

function InputControl1({ label, ...props }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl1;
