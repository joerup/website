import Layout from 'src/components/layout-app';
import Page from 'src/components/page';
import Head from 'next/head';
import { getAllAppIDs, getAppData, getSortedAppsData } from '/lib/apps';

export async function getStaticProps({ params }) {
  const apps = await getSortedAppsData();
  const app = await getAppData(params.app);

  return {
    props: {
      apps,
      app,
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

export default function Support({ apps, app }) {
  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>Support | {app.name}</title>
      </Head>

      <Page title="Support" theme={app.theme}>
        <div className={`${app.theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
          <p className="mb-4">
            You can contact us directly via email at any time for support, feedback, or bug reports. We'll try our best to get back to you within a few hours or so.
          </p>
          <p className="mb-2">
            Note: If you're contacting us about an issue in the app, it may help if you specify the following:
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>App version (e.g. 2.0.0)</li>
            <li>OS version (e.g. iOS 17.1)</li>
            <li>Device (e.g. iPhone 15 Pro)</li>
          </ul>
          <p>
            This will make it faster for us to resolve any issues you may be facing.
          </p>
          <p className="font-bold text-xl mt-4">
            Email:{' '}
            <a href="mailto:rupertusapps@gmail.com" className="text-blue-500 hover:underline">
              rupertusapps@gmail.com
            </a>
          </p>
        </div>
      </Page>
    </Layout>
  );
}