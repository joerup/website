import React from 'react';
import styles from '../styles/utils.module.css'

const AppLink = ({ name, subtitle, icon, link, desc }) => {
  return (
    <div className={styles.applink}>
      <div className={styles.appheader}>
        <img className={styles.appicon} src={icon}/>
        <div>
         <h2 className={styles.headingXl}>{name}</h2>
         <h3 className={styles.appsubtitle}>{subtitle}</h3>
        </div>
      </div>
      <p className={styles.appdesc}>{desc}</p>
      <a className={styles.learnmore} href={link}>Learn More</a>
    </div>
  );
};

export default AppLink;