import React, { useState } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedProjectsData } from '/lib/projects';
import { getSortedUpdatesData } from '/lib/updates';
import AppUpdate from '../components/appupdate';

export async function getStaticProps() {
  const projects = getSortedProjectsData();
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
        <h1 className={styles.headingXl}>Updates</h1>
        <br/>

        {/* <p>{selectedProject}</p>
        <div className={styles.projectButtonsRow}>
          {projects.map(({ project, name }) => ( 
            <div className={styles.projectButton}>
              <p>{name}</p>
            </div>
          ))}
        </div> */}


        {updates.map(({ version, date, headline, project }) => (
          <AppUpdate
            project={project}
            version={version}
            date={date}
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