import Layout from '../../components/applayout';
import Link from 'next/link'
import Head from 'next/head';
import { getAllAppIDs, getAppData, getSortedAppsData } from '/lib/apps';
import Date from 'src/components/date';
import styles from '/src/styles/utils.module.css';

export async function getStaticProps({ params }) {
  const apps = await getSortedAppsData();
  const app = await getAppData(params.app);

  return {
    props: {
      apps,
      app
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

export default function Design({ apps, app }) {

  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>{`Design Process | ${app.name}`}</title>
      </Head>
      <article>

        <h1 className={styles.heading3Xl}>Design Process</h1>
        <br/><br/>

        <article className={styles.body} dangerouslySetInnerHTML={{ __html: app.designHtml }} />

      </article>
    </Layout>
  );
}