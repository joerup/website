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

export default function Privacy({ apps, app }) {

  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>{`Privacy Policy | ${app.name}`}</title>
      </Head>
      <article>

        <h1 className={styles.heading3Xl}>Privacy Policy</h1>
        <br/>

        <h1 className={styles.headingLg}>Last Updated: {app.privacydate}</h1>

        <p className={styles.desc2}>
        This policy describes the data practices of the {app.name} application ("we", "us", "our"). 
        We are committed to protecting your personal information and your right to privacy.
        By using {app.name}, you are consenting to our policies regarding the collection, use and disclosure 
        of personal information set out in this privacy policy. If there are any terms in this privacy notice 
        that you do not agree with, please discontinue use of our Services immediately. 
        This privacy notice applies to all information collected through our app, as well as, 
        any related services, sales, marketing or events.
        </p>

        <h1 className={styles.headingLg}>What information do we collect?</h1>
        {app.privacy.map((paragraph) => (
          <p className={styles.desc2}>
            {paragraph.split('. ').map((sentence, index) => (
              <span key={index}>
                {index === 0 ? <strong>{sentence}</strong> : sentence}
                {index < paragraph.split('. ').length - 1 ? '. ' : ''}
              </span>
            ))}
          </p>
        ))}

        <h1 className={styles.headingLg}>Do we update this privacy policy?</h1>
        <p className={styles.desc2}>
        We may update this privacy notice as necessary to stay compliant with relevant laws and requirements. The updated version 
        will be indicated by the last updated date at the top of this page, and the updated version will be effective as soon as it is accessible.
        </p>

        <h1 className={styles.headingLg}>How can you contact us about this policy?</h1>
        <p className={styles.desc2}>
        If you have questions, comments, or concerns about this privacy policy, please do not hesitate to 
        reach out. You can contact us on our <Link href={`/${app.string}/support`}>Support</Link> page.
        </p>

        <br/>

      </article>
    </Layout>
  );
}