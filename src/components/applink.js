import React from 'react';
import Link from 'next/link';
import styles from '../styles/utils.module.css'

const AppLink = ({ name, icon, platforms, tech, link, desc }) => {
  return (
    <Link href={link}>
      <div className={styles.applink}>
        <div className={styles.appheader}>
          <img className={styles.appicon} src={icon}/> 
          <div>
            <h2 className={styles.headingXl}>{name}</h2>
            <p className={styles.platform}>{platforms.join(" • ")}</p> 
          </div>
        </div>
        <p className={styles.appdesc}>{desc}</p>
        <div className={styles.appdetailrow}>
          {tech.map((technology) => (
             <div className={styles.appdetail}>
               <p className={styles.appdetailtext}>{technology}</p>
             </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default AppLink;