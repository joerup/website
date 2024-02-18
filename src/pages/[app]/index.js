import Layout from 'src/components/applayout';
import Link from 'next/link'
import Head from 'next/head';
import marked from 'marked';
import { getAllAppIDs, getAppData, getSortedAppsData } from '/lib/apps';
import { getSortedUpdatesData } from '/lib/updates';
import AppUpdate from 'src/components/appupdate'
import styles from '/src/styles/utils.module.css';

export async function getStaticProps({ params }) {
  const apps = await getSortedAppsData();
  const app = await getAppData(params.app);
  const updates = getSortedUpdatesData().filter((update) => update.app == params.app);

  return {
    props: {
      apps,
      app,
      updates,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllAppIDs();
  return {
    paths,
    fallback: false,
  };
}

export default function Home({ apps, app, updates }) {
  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>{app.name}</title>
      </Head>
      <div>
        <article className={styles.body}>
          <div dangerouslySetInnerHTML={{ __html: app.contentHtml[0] }} />
          <a href={app.link} className={styles.downloadlink}><img src="download.svg" alt="Download" /></a>
        </article> 
        { app.id == 1 ?
        <img className={styles.headerimage} src={`/images/${app.string}/header.png`} /> : <></>
        }

        {app.contentHtml.slice(1).map((html, index) => {
          if (index % 2 === 0 && app.contentHtml.length > 1) {
            return <div key={index} className={styles.body} dangerouslySetInnerHTML={{ __html: html }} />;
          } else {
            return <article key={index} className={styles.body} dangerouslySetInnerHTML={{ __html: html }} />;
          }
        })}
      </div>
    </Layout>
  );
}