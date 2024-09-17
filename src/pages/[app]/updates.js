import Layout from 'src/components/layout-app';
import Page from 'src/components/page';
import Head from 'next/head';
import VersionList from 'src/components/versionlist';
import path from 'path';
import fs from 'fs';
import { getAllAppIDs, getAppData, getSortedAppsData } from '/lib/apps';

export async function getStaticProps({ params }) {
  const apps = await getSortedAppsData();
  const app = await getAppData(params.app);

  const updatesPath = path.join(process.cwd(), 'data', 'versions.json');
  const updatesData = JSON.parse(fs.readFileSync(updatesPath, 'utf-8'));
  const updates = updatesData[app.string] || [];

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
        <title>Updates | {app.name}</title>
      </Head>

      <Page title="Updates" theme={app.theme}>
        <VersionList app={app} versions={updates}/>
      </Page>
    </Layout>
  );
}
