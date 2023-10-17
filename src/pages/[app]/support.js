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

        <h1 className={styles.headingLg}>
          You can contact us directly via email at any time for support, feedback, or bug reports. 
          We'll try our best to get back to you within a few hours or so.
        </h1>

        <p className={styles.body}>
        If you are contacting us about an issue in the app, please include the following details in your email:
        </p>

        <div className={styles.bulletpoint}><h1 className={styles.headingLg}>• {app.name} version</h1><p>(e.g. {app.name} 1.0.0)</p></div>
        <div className={styles.bulletpoint}><h1 className={styles.headingLg}>• OS version</h1><p>(e.g. iOS 17.1)</p></div>
        <div className={styles.bulletpoint}><h1 className={styles.headingLg}>• device</h1><p>(e.g. iPhone 15 Pro)</p></div>

        <p className={styles.body}>
        This makes it faster for us to resolve any issues you may be facing.
        </p>

        <h1 className={styles.headingLg}>
          Contact us here: <Link href="mailto: rupertusapps@gmail.com">rupertusapps@gmail.com</Link>
        </h1>

        <br/>

      </article>
    </Layout>
  );
}