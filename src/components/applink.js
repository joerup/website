import React from 'react';
import Link from 'next/link';
import styles from '../styles/utils.module.css'

const AppLink = ({ name, subtitle, icon, link, desc }) => {
  return (
    <Link href={link}>
      <div className={styles.applink}>
        <div className={styles.appheader}>
          <img className={styles.appicon} src={icon}/> 
          <div>
            <h2 className={styles.headingXl}>{name}</h2>
            <h3 className={styles.appsubtitle}>{subtitle}</h3>
          </div>
        </div>
        <p className={styles.appdesc}>{desc}</p>
        <p className={styles.learnmore}>Learn More</p> 
      </div>
    </Link>
  );
};

export default AppLink;