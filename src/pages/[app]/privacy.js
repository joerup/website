import Layout from 'src/components/layout-app';
import Page from 'src/components/page';
import Head from 'next/head';
import { getAllAppIDs, getAppData, getSortedAppsData, getAppRelatedData } from '/lib/apps';

export async function getStaticProps({ params }) {
  const apps = await getSortedAppsData();
  const app = await getAppData(params.app);
  const privacy = await getAppRelatedData(params.app, 'privacy');

  return {
    props: {
      apps,
      app,
      privacy,
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

export default function Privacy({ apps, app, privacy }) {
  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>Privacy Policy | {app.name}</title>
      </Head>

      <Page title="Privacy" theme={app.theme}>
        <p className={`${app.theme === 'dark' ? 'text-white' : 'text-gray-700'} mb-6 italic`}>Last Updated: {privacy.date}</p>
        <div className={`markdown-content ${app.theme === 'dark' ? 'text-white' : 'text-gray-700'}`} dangerouslySetInnerHTML={{ __html: privacy.contentHtml }} />
      </Page>
    </Layout>
  );
}

