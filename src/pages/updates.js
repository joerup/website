import React, { useState } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedAppsData } from '/lib/apps';
import { getSortedUpdatesData } from '/lib/updates';
import AppUpdate from '../components/appupdate';

export async function getStaticProps() {
  const projects = getSortedAppsData();
  const updates = getSortedUpdatesData();
  return {
    props: {
      projects,
      updates,
    },
  };
}

export default function Updates ({ projects, updates }) { 
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Updates</title>
      </Head>

      <article>
        <h1 className={styles.headingXl}>All Updates</h1>
        <br/>

        {updates.map(({ project, version, dates, headline }) => (
          <AppUpdate
            project={project}
            version={version}
            dates={dates}
            headline={headline}
          />
        ))}
      </article>

      <br/>
      <br/>
      <br/>
      <br/>
    </Layout>
  )
}