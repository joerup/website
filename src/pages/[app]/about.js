import Layout from 'src/components/layout-app';
import Page from 'src/components/page';
import Head from 'next/head';
import { getAllAppIDs, getAppData, getSortedAppsData, getAppRelatedData } from '/lib/apps';

export async function getStaticProps({ params }) {
  const apps = await getSortedAppsData();
  const app = await getAppData(params.app);
  const text = await getAppRelatedData(params.app, 'about');

  return {
    props: {
      apps,
      app,
      text,
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

export default function About({ apps, app, text }) {
  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>About | {app.name}</title>
      </Head>

      <Page title="About" theme={app.theme}>
        <div className={`markdown-content ${app.theme === 'dark' ? 'text-white' : 'text-gray-700'}`} dangerouslySetInnerHTML={{ __html: text.contentHtml }} />
      </Page>
    </Layout>
  );
}

