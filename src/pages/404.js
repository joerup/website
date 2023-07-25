import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'

export default function Custom404() {
  return( 
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={styles.largeDisplay}>
        <h1 className={styles.heading3Xl}>Page Not Found</h1>
      </div>
    </Layout>
  )
}