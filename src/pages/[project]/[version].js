import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllUpdateIDs, getUpdateData } from '/lib/updates';
import Date from '../../components/date';
import styles from '/src/styles/utils.module.css';

export async function getStaticProps({ params }) {
  const { project, version } = params;
  const updateData = await getUpdateData(project, version);

  return {
    props: {
      updateData,
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

export default function Update({ updateData }) {

  return (
    <Layout>
      <Head>
        <title>{updateData.version.replace(/-/g, ".")}</title>
      </Head>

      <article>
        <div className={styles.pageheader}>
          <img className={styles.appicon} src={`/images/${updateData.project}.png`}/>
          <div className={styles.heading3Xl}>
            <p> {updateData.version.replace(/-/g, ".")}</p>
          </div>
        </div>
        <div className={styles.headingLg}>
          <Date dateString={updateData.date} />
        </div>

        <p className={styles.headingMd}>{updateData.headline}</p>

        <br />

        <br />
        <br />
        <div dangerouslySetInnerHTML={{ __html: updateData.contentHtml }} />
      </article>
    </Layout>
  );
}