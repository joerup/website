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

export default function Beta({ apps, app }) {

  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>{`Beta Testing | ${app.name}`}</title>
      </Head>
      <article>

        <h1 className={styles.heading3Xl}>Beta Testing</h1>
        {app.beta ? 
          <div>
            <p className={styles.desc}>
              {app.betadesc ? app.betadesc : `Welcome to the ${app.name} public beta!`}
            </p>
            <div className={styles.body}>

              <h1 className={styles.headingLg}>
                <Link href={app.beta}>Go to Testflight</Link>
              </h1>

              <img src={`/images/${app.string}beta.png`}/> 

            </div>
          </div>
        :
          <div>
            <p className={styles.desc}>
              There is no active public beta test for {app.name} right now. Check it out on the App Store instead!
            </p>
            <div className={styles.download}>
              <Link href={app.link}><img src="/download.svg" className={styles.downloadlink}/></Link>
            </div> 
          </div>
        }

        
        <br/>

        <br/>

      </article>
    </Layout>
  );
}