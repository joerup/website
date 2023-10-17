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

export default function Privacy({ apps, app }) {

  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>{`Privacy | ${app}`}</title>
      </Head>
      <article>

        <h1 className={styles.heading3Xl}>Privacy</h1>
        <br/>

        <h1 className={styles.headingLg}>Last Updated: Oct 17, 2023</h1>

        <p className={styles.body}>
        This policy describes the data practices of the {app.name} application ("we", "us", "our"). 
        We are committed to protecting your personal information and your right to privacy.
        By using {app.name}, you are consenting to our policies regarding the collection, use and disclosure 
        of personal information set out in this privacy policy. We hope you take some time to read through 
        it carefully, as it is important. If there are any terms in this privacy notice that you do not agree 
        with, please discontinue use of our Services immediately. This privacy notice applies to all information 
        collected through our app, as well as, any related services, sales, marketing or events.
        </p>

        <h1 className={styles.headingXl}>What information do we collect?</h1>
        <p className={styles.body}>
        <b>None. {app.name} does not collect user data.</b> Any data you enter into the application is stored locally 
        on your device. We do not transfer your data to any other location, nor do we include any advertising or 
        analytics software affiliated with third parties.
        </p>

        <h1 className={styles.headingXl}>Do we update this privacy policy?</h1>
        <p className={styles.body}>
        We may update this privacy notice as necessary to stay compliant with relevant laws. The updated version 
        will be indicated by the last updated date at the top of this page, and the updated version will be effective as soon as it is accessible.
        </p>

        <h1 className={styles.headingXl}>How can you contact us about this policy?</h1>
        <p className={styles.body}>
        If you have questions, comments, or concerns about this privacy policy, please do not hesitate to 
        reach out. You can contact us on our <Link href={`/${app.string}/support`}>Support</Link> page.
        </p>

        <br/>

      </article>
    </Layout>
  );
}