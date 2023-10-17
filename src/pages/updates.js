import React, { useState } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedAppsData } from '/lib/apps';
import { getSortedUpdatesData } from '/lib/updates';
import AppUpdate from '../components/appupdate';

export async function getStaticProps() {
  const apps = getSortedAppsData();
  const updates = getSortedUpdatesData();
  return {
    props: {
      apps,
      updates,
    },
  };
}

export default function Updates ({ apps, updates }) { 
  return (
    <Layout apps={apps}>
      <Head>
        <title>Updates | {siteTitle}</title>
      </Head>

      <article>
        <h1 className={styles.headingXl}>All Updates</h1>
        <br/>

        {updates.map((update) => (
          <AppUpdate app={apps.find(app => update.app == app.string)} update={update}/>
        ))}
      </article>
      
    </Layout>
  )
}