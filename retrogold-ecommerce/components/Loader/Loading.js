import React from 'react';
import styles from '../../styles/Loader.module.css'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className="">
    <div className={styles.loaderContainer}>
      <Image src='/images/loading.svg' alt="Loading..." width={1000} height={1000} unoptimized/>
    </div>
    </div>
  );
}

export default Loading;
