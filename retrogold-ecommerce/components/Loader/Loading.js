import React from 'react';
import styles from '../../styles/Loader.module.css'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <Image src='/images/Trianglespx.svg' alt="loading symbol" width={200} height={200} unoptimized/>
    </div>
  );
}

export default Loading;
