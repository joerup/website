import Layout from '../components/layout';
import Link from 'next/link'
import Head from 'next/head';
import { getAllAppIDs, getAppData } from '/lib/apps';
import { getSortedUpdatesData } from '/lib/updates';
import AppUpdate from '../components/appupdate'
import styles from '/src/styles/utils.module.css';

export async function getStaticProps({ params }) {
  const appData = await getAppData(params.app);
  const allUpdates = getSortedUpdatesData();
  const updates = allUpdates.filter((update) => update.app == params.app)

  return {
    props: {
      appData,
      updates
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

export default function Update({ appData, updates }) {
  return (
    <Layout>
      <Head>
        <title>{appData.name}</title>
      </Head>

      <article>
        <div className={styles.pageheader}>
          <img className={styles.appicon} src={`/images/${appData.app}.png`}/>
          <p className={styles.heading3Xl}>{appData.name}</p>
        </div>
        <br />

        <Link href={appData.link}>
            <div className={styles.applink}>
              <p className={styles.button}>Visit Main Site</p>
            </div>
        </Link>
        <br />
        <br />

        <h1 className={styles.headingXl}>Updates</h1>
        <br />

        {updates.map(({ version, dates, headline, app }) => (
          <AppUpdate
          app={app}
            version={version}
            dates={dates}
            headline={headline}
          />
        ))}

        <br />
        <br />
      </article>

      <div dangerouslySetInnerHTML={{ __html: appData.contentHtml }} />
    </Layout>
  );
}