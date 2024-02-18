import React from 'react';
import Link from 'next/link';
import styles from '../styles/utils.module.css'
import Date from './date';

const AppUpdate = ({ app, update }) => {
  return (
    <Link href={`../${app.string}/updates/${update.version}`}>
      <div className={styles.appupdate}>
          <div className={styles.updatetitle}>
            <div>
              <img className={styles.updateicon} src={`/images/${app.string}/icon.png`}/>
              <h2 className={styles.headingLg}>{`${app.name} ${update.version.replace(/-/g, ".")}`}</h2>
            </div>
            <h3 className={styles.updatedate}><Date dateString={update.dates[0]}/></h3>
          </div>
          <h3 className={styles.updateheadline}>{update.headline}</h3>
      </div>
    </Link>
  );
};

export default AppUpdate;

