import React from 'react';
import styles from '../../styles/Loader.module.css'

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <img src='/images/Trianglespx.svg' alt="loading symbol"/>
    </div>
  );
}

export default Loading;
