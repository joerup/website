import Layout from '../components/layout';
import Link from 'next/link'
import Head from 'next/head';
import { getAllProjectIDs, getProjectData } from '/lib/projects';
import { getSortedUpdatesData } from '/lib/updates';
import AppUpdate from '../components/appupdate'
import Date from '../components/date';
import styles from '/src/styles/utils.module.css';

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.project);
  const allUpdates = getSortedUpdatesData();
  const updates = allUpdates.filter((update) => update.project == params.project)

  return {
    props: {
      projectData,
      updates
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIDs();
  return {
    paths,
    fallback: false,
  };
}

export default function Update({ projectData, updates }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.name}</title>
      </Head>

      <article>
        <div className={styles.pageheader}>
          <img className={styles.appicon} src={`/images/${projectData.project}.png`}/>
          <p className={styles.heading3Xl}>{projectData.name}</p>
        </div>
        <br />

        <Link href={projectData.link}>
            <div className={styles.applink}>
              <p className={styles.button}>Visit Main Site</p>
            </div>
        </Link>
        <br />
        <br />

        <h1 className={styles.headingXl}>Updates</h1>
        <br />

        {updates.map(({ version, date, headline, project }) => (
          <AppUpdate
          project={project}
            version={version}
            date={date}
            headline={headline}
          />
        ))}

        <br />
        <br />
      </article>

      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
    </Layout>
  );
}