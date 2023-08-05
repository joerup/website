import React from 'react';
import Link from 'next/link';
import styles from '../styles/utils.module.css'
import Date from './date';

const AppUpdate = ({ project, version, dates, headline }) => {
  return (
    <Link href={`../${project}/${version}`}>
      <div className={styles.appupdate}>
          <div className={styles.updatetitle}>
            <div>
              <img className={styles.updateicon} src={`/images/${project}.png`}/>
              <h2 className={styles.mono1}>{version.replace(/-/g, ".")}</h2>
              <h3 className={styles.updateheadline}>{headline}</h3>
            </div>
            <h3 className={styles.updatedate}><Date dateString={dates[0]}/></h3>
          </div>
      </div>
    </Link>
  );
};

export default AppUpdate;

