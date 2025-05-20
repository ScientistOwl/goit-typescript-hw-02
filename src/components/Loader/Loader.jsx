import React from "react";
import styles from "./Loader.module.css";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader color="#4a90e2" size={50} />
    </div>
  );
};

export default Loader;
