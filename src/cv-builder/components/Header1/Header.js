import React from "react";

import cvSvg from "../../assets/cv.svg";

import styles from "./Header1.module.css";

function Header1() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>CV</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own CV. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={cvSvg} alt="CV" />
      </div>
    </div>
  );
}

export default Header1;