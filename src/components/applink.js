import React from 'react';
import styles from '../styles/utils.module.css'

const AppLink = ({ name, icon, link, desc }) => {
  return (
    <div className={styles.applink}>
      <img className={styles.appicon} src={icon}/>
      <h2 className={styles.heading2Xl}>{name}</h2>
      <p className={styles.desc}>{desc}</p>
      <a href={link}>Visit {name}</a>
    </div>
  );
};

export default AppLink;