import React from 'react';
import Link from 'next/link';
import styles from '../styles/utils.module.css'

const AppLink = ({ app }) => {
  return (
    <Link href={`./${app.string}`}>
      <div className={styles.applink} style={{ background: `#${app.backgroundColor}` }}>
        <div className={styles.appcontent}>
          <img className={styles.apppreviewimage} src={`images/${app.string}/preview.png`}/> 
          <div>
            <img className={styles.appicon} src={`/images/${app.string}/icon.png`}/> 
            <h2 className={app.theme == 'dark' ? styles.heading3Xl : styles.heading3Xl_light}>{app.name}</h2>
            <p className={app.theme == 'dark' ? styles.headingMd : styles.headingMd_light}>{app.desc}</p>
            <p className={app.theme == 'dark' ? styles.learnmore : styles.learnmore_light}>Learn more</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppLink;