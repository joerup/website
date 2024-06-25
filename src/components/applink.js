import React from 'react';
import Link from 'next/link';
import styles from '../styles/utils.module.css'

const AppLink = ({ app }) => {
  return (
    <Link href={`./${app.string}`}>
      <div className={styles.applink} style={{ background: `#${app.color}` }}>
        <div className={styles.appcontent}>
          <img className={styles.apppreviewimage} src={`images/${app.string}/preview.png`}/> 
          <div>
            <img className={styles.appicon} src={`/images/${app.string}/icon.png`}/> 
            <h2 className={styles.heading3Xl}>{app.name}</h2>
            <p className={styles.headingMd}>{app.desc}</p>
            <p className={styles.learnmore}>Learn more</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppLink;