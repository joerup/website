import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedAppsData } from '/lib/apps';
import styles from '../styles/utils.module.css'

export async function getStaticProps() {
  const apps = getSortedAppsData();
  return {
    props: {
      apps
    },
  };
}

export default function Custom404({ apps }) {
  return( 
    <Layout apps={apps}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={styles.largeDisplay}>
        <h1 className={styles.titledark}>Page Not Found</h1>
      </div>
    </Layout>
  )
}