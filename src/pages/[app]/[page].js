import Layout from 'src/components/applayout';
import Head from 'next/head';
import { getAppData, getSortedAppsData } from '/lib/apps';
import { getSortedPagesData, getAllPageIDs, getPageData } from '/lib/pages';
import styles from '/src/styles/utils.module.css';

export async function getStaticProps({ params }) {
  const apps = await getSortedAppsData();
  const app = await getAppData(params.app);
  const pages = await getSortedPagesData(params.app);
  const page = await getPageData(params.app, params.page);

  return {
    props: {
      apps,
      pages,
      page,
      app
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPageIDs();
  return {
    paths,
    fallback: false,
  };
}

export default function Page({ apps, pages, page, app }) {

  return (
    <Layout apps={apps} app={app} pages={pages}>
      <Head>
        <title>{`${page.title} | ${app.name}`}</title>
      </Head>
      <article>
        <h1 className={app.theme == 'dark' ? styles.heading3Xl : styles.heading3Xl_light}>{`${page.title}`}</h1>

        <br/>
        <hr/>

        <div className={`${app.theme == 'dark' ? styles.body : styles.body_light} ${page.justify ? styles.justify : null} ${styles.pagebody}`} dangerouslySetInnerHTML={{ __html: page.contentHtml }} />

      </article>
    </Layout>
  );
}