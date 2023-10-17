import Layout from 'src/components/applayout';
import Head from 'next/head';
import Link from 'next/link';
import { getAppData, getSortedAppsData } from '/lib/apps';
import { getAllUpdateIDs, getUpdateData } from '/lib/updates';
import Date from 'src/components/date';
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
        <title>{update.version.replace(/-/g, ".")}</title>
      </Head>
      <article>
        <Link href={`/${app.string}`}>
          <div className={styles.pageheader}>
            <img className={styles.appicon} src={`/images/${app.string}.png`}/>
            <div className={styles.heading3Xl}>
              <p>{`${app.name} ${update.version.replace(/-/g, ".")}`}</p>
            </div>
          </div>
        </Link>

        <h2 className={styles.headingMd}>{update.headline}</h2>
        <br/>

        {update.dates.slice(0,1).map((date, index) => (
          <div>
            <p className={styles.mono1}>{`Version ${update.version.replace(/-/g, ".")}.0`}</p>
            <div className={styles.headingMd}>
              <Date dateString={date} />
            </div>
          </div>
        ))}

        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: update.contentHtml }} />

        {update.dates.slice(1).map((date, index) => (
          <div>
              <p className={styles.mono1}>{`Version ${update.version.replace(/-/g, ".")}.${index+1}`}</p>
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