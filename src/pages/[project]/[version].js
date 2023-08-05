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
      project
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

export default function Update({ updateData, project }) {

  return (
    <Layout>
      <Head>
        <title>{updateData.version.replace(/-/g, ".")}</title>
      </Head>
      <article>
        <div className={styles.pageheader}>
          <img className={styles.appicon} src={`/images/${updateData.project}.png`}/>
          <div className={styles.heading3Xl}>
            <p>{`${updateData.project} ${updateData.version.replace(/-/g, ".")}`}</p>
          </div>
        </div>

        <h2 className={styles.headingMd}>{updateData.headline}</h2>
        <br/>

        {updateData.dates.slice(0,1).map((date, index) => (
          <div>
            <p className={styles.mono1}>{`Version ${updateData.version.replace(/-/g, ".")}.0`}</p>
            <div className={styles.headingMd}>
              <Date dateString={date} />
            </div>
          </div>
        ))}

        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: updateData.contentHtml }} />

        {updateData.dates.slice(1).map((date, index) => (
          <div>
              <p className={styles.mono1}>{`Version ${updateData.version.replace(/-/g, ".")}.${index+1}`}</p>
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