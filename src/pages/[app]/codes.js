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
        <title>{`Promo Codes | ${app.name}`}</title>
      </Head>
      <article>

        <h1 className={styles.heading3Xl}>Promo Codes</h1>

        {app.codes ? 
          <div>
            <p className={styles.desc2}>
            Keep in mind each code is only redeemable one time, so someone else may have used it already.
            </p>
            <br/>
            <h1 className={styles.headingLg}>Last Updated: {app.codeslastupdated}</h1>

            <br/>
            <h1 className={styles.headingLg}>Codes Expire: {app.codesexpirationdate}</h1>

            <br/>
            {app.codes.map((code) => (
              <p className={styles.desc2}>{code}</p>
            ))}

          <br/>
          </div>
        :
          <div>
            <p className={styles.desc}>
              No promo codes are currently available for {app.name}.
            </p>
          </div>
        }

      </article>
    </Layout>
  );
}