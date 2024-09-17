import Layout from 'src/components/layout-app';
import Head from 'next/head';
import { getAllAppIDs, getAppData, getSortedAppsData } from '/lib/apps';

import Landing_Planetaria from '/src/pages/landing/planetaria.js';
import Landing_Omega from '/src/pages/landing/omega.js';
import Landing_BitsAndBobs from '/src/pages/landing/bitsandbobs.js';
import Landing_Countdown from '/src/pages/landing/countdown.js';

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

export default function Home({ apps, app }) {

  const component = () => {
    switch (app.string) {
      case 'planetaria':
        return <Landing_Planetaria link={app.link} />;
      case 'omega':
        return <Landing_Omega link={app.link} />;
      case 'bitsandbobs':
        return <Landing_BitsAndBobs link={app.link} />;
      case 'countdown':
        return <Landing_Countdown link={app.link} />;
      default:
        return <div>App not found</div>;
    }
  };

  return (
    <Layout apps={apps} app={app} landing>
      <Head>
        <title>{app.name}</title>
      </Head>
    
      {component()}
      
    </Layout>
  );
}

function strip(html, views)  {
  Object.keys(views).forEach(key => {
    html = html.replace(key, "");
  });
  return html;
}

export function OtherView({ html, views }) {
  let viewComponent = null;

  Object.keys(views).forEach(key => {
    if (html.includes(key)) {
        viewComponent = views[key]; // Set viewComponent to the associated view
    }
  });

  return (
      viewComponent
  );
}
