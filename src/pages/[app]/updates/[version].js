import Layout from 'src/components/applayout';
import Head from 'next/head';
import { getAppData, getSortedAppsData } from '/lib/apps';
import { getAllUpdateIDs, getUpdateData } from '/lib/updates';
import Date from 'src/components/date';
import BackButton from 'src/components/backbutton';
import styles from '/src/styles/utils.module.css';

export async function getStaticProps({ params }) {
  const apps = await getSortedAppsData();
  const app = await getAppData(params.app);
  const update = await getUpdateData(params.app, params.version);

  return {
    props: {
      apps,
      update,
      app
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllUpdateIDs();
  return {
    paths,
    fallback: false,
  };
}

export default function Update({ apps, update, app }) {

  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>{`Version ${update.version.replace(/-/g, ".")} | ${app.name}`}</title>
      </Head>
      <article>
        <BackButton text="Updates" link={`/${app.string}/updates`}/>
        
        <h1 className={styles.heading3Xl}>{`Version ${update.version.replace(/-/g, ".")}`}</h1>

        <h2 className={styles.desc}>{update.headline}</h2>

        {update.dates.slice(0,1).map((date, index) => (
          <div>
            <p className={styles.headingXl}>{`${update.version.replace(/-/g, ".")}.0`}</p>
            <div className={styles.headingMd}>
              <Date dateString={date} />
            </div>
          </div>
        ))}

        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: update.contentHtml }} />

        {update.dates.slice(1).map((date, index) => (
          <div>
              <p className={styles.headingXl}>{`${update.version.replace(/-/g, ".")}.${index+1}`}</p>
              <div className={styles.headingMd}>
                <Date dateString={date} />
              </div>
            <br/>
          </div>
        ))}

      </article>
    </Layout>
  );
}