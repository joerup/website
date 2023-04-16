import React from 'react';
import styles from '../styles/utils.module.css'

const Bullet = ({ icon, title, subtitle }) => {
  return (
    <div className={styles.bullet}>
      <h4 className={styles.icon}>{icon}</h4>
      <div>
        <h1 className={styles.headingXl}>{title}</h1>
        <h1 className={styles.headingLg}>{subtitle}</h1>
      </div>
    </div>
  );
};

export default Bullet;

