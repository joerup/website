import React from 'react';
import Link from 'next/link';
import styles from '../styles/utils.module.css'

const AppLink = ({ app }) => {
  return (
    <Link href={`./${app.string}`}>
      <div className={styles.applink}>

        <div className={styles.appheader}>
          <img className={styles.appicon} src={`/images/${app.string}.png`}/> 
          <div>
            <h2 className={styles.headingXl}>{app.name}</h2>
            <p className={styles.platform}>{app.platforms.join(" • ")}</p> 
          </div>
        </div>

        <p className={styles.appdesc}>{app.desc}</p>

        <div className={styles.appdetailrow}>
          {app.tech.map((technology) => (
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