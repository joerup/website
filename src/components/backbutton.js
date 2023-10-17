import React from 'react';
import Link from 'next/link';
import styles from '../styles/utils.module.css'

const BackButton = ({ text, link }) => {
  return (
    <Link href={link}>
      <h1 className={styles.backbutton}>{`⬅ ${text}`}</h1>
    </Link>
  );
};

export default BackButton;

