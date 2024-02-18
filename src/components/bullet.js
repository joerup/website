import React from 'react';
import styles from '../styles/utils.module.css'

const Bullet = ({ icon, title }) => {
  return (
    <div className={styles.bullet}>
      <h4 className={styles.icon}>{icon}</h4>
      <div>
        <h1 className={styles.darkheadline}>{title}</h1>
      </div>
    </div>
  );
};

export default Bullet;

