import Layout from 'src/components/applayout';
import Link from 'next/link'
import Head from 'next/head';
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

      <article>

        <h1 className={styles.heading3Xl}>{app.name}</h1>

        <p className={styles.desc}>{app.desc}</p>

        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: app.contentHtml }} />

        <div className={styles.download}>
          <a href={app.link}><img src="download.svg" className={styles.downloadlink}/></a>
        </div>
        
        <h1 className={styles.headingXl}>Recent Updates</h1>
        <br/>

        {updates.slice(0, updates.length === 4 ? 4 : 3).map((update) => (
          <AppUpdate app={app} update={update}/>
        ))}
        {updates.length > 4 ?
          <Link href={`./${app.string}/updates`}>
            <div className={styles.applink}>
              <p className={styles.button}>All Updates</p>
            </div>
          </Link>
        : null}

      </article>
    </Layout>
  );
}