import React from 'react';
import Link from 'next/link';
import styles from '../styles/utils.module.css'

const CurrentProjectInfo = ({ name, date, tech, desc }) => {
  return (
    <Link href={"/"}>
      <div className={styles.appupdate}>
        <div className={styles.updatetitle}>
          <div>
            <h2 className={styles.headingXl}>{name}</h2>
          </div>
          <h3 className={styles.updatedate}>{`${date}`}</h3>
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

export default CurrentProjectInfo;