import Layout from '../../components/applayout';
import Link from 'next/link'
import Head from 'next/head';
import { getAllAppIDs, getAppData, getSortedAppsData } from '/lib/apps';
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

export default function Support({ apps, app }) {

  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>{`Support | ${app}`}</title>
      </Head>
      <article>

        <h1 className={styles.heading3Xl}>Support</h1>
        <br/>

        <h1 className={styles.headingXl}>
          You can contact us directly via email at any time for support, feedback, or bug reports. 
          We'll try our best to get back to you within a few hours or so.
        </h1>
        <br/>

        <p className={styles.headingLg}>
        If you are contacting us about an issue in the app, please include the following details in your email:
        </p>
        <br/>

        <div className={styles.bullet}><h1 className={styles.headingXl}>• {app.name} version</h1><p>(e.g. {app.name} 1.0.0)</p></div>
        <div className={styles.bullet}><h1 className={styles.headingXl}>• OS version</h1><p>(e.g. iOS 17.1)</p></div>
        <div className={styles.bullet}><h1 className={styles.headingXl}>• device</h1><p>(e.g. iPhone 15 Pro)</p></div>
        <br/>

        <p className={styles.headingLg}>
        This makes it faster for us to resolve any issues you may be facing.
        </p>

        <br/>
        <h1 className={styles.headingXl}>
          Contact us here: <Link href="mailto: rupertusapps@gmail.com">rupertusapps@gmail.com</Link>
        </h1>

        <br/>

      </article>
    </Layout>
  );
}