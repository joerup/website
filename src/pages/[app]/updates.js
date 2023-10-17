import Layout from '../../components/applayout';
import Head from 'next/head';
import { getAllAppIDs, getAppData, getSortedAppsData } from '/lib/apps';
import AppUpdate from '../../components/appupdate'
import { getSortedUpdatesData } from '/lib/updates';
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

export default function Updates({ apps, app, updates }) {

  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>{`Updates | ${app.name}`}</title>
      </Head>
      <article>

        <h1 className={styles.heading3Xl}>Updates</h1>

        <br/>

        {updates.map((update) => (
          <AppUpdate app={app} update={update}/>
        ))}

      </article>
    </Layout>
  );
}