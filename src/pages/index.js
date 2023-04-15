import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import { useState } from "react"
import Link from 'next/link'
import Date from '../components/date'

export default function Home ({ allPostsData }) { 
  // Delcare what category should be shown
  const [viewCategory, setCategory] = useState('all');

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={styles.socials}>
        <div>
          <Link href="https://www.twitter.com/joerup2004/">
            <img src="https://img.icons8.com/android/60/000000/twitter.png"/>
          </Link>
          <Link href="https://www.instagram.com/joerup2004/">
            <img src="https://img.icons8.com/metro/60/000000/instagram-new.png"/>
          </Link>
          <Link href="mailto:joerup2004@gmail.com">
            <img src="https://img.icons8.com/ios/60/000000/new-post.png"/>
          </Link>
          <Link href="https://www.linkedin.com/in/joseph-rupertus-359b5a20a/">
            <img src="https://img.icons8.com/android/96/000000/linkedin.png"/>
          </Link>
          <Link href="https://github.com/joerup2004">
            <img src="https://img.icons8.com/ios-glyphs/60/000000/github.png"/>    
          </Link>
        </div>
      </section>

      <br/>
      <br/>
      <br/>

      <article>

        <div className={styles.claim}>
          <h4 className={styles.claimIcon}>📙</h4>
          <div>
            <h1 className={styles.headingXl}>Princeton University</h1>
            <h1 className={styles.headingLg}>Electrical and Computer Engineering '26</h1>
          </div>
        </div>

        <div className={styles.claim}>
          <h4 className={styles.claimIcon}>📱</h4>
          <div>
            <h1 className={styles.headingXl}>iOS App Developer</h1>
            <h1 className={styles.headingLg}>3 Apps Available on App Store</h1>
          </div>
        </div>

        <div className={styles.claim}>
          <h4 className={styles.claimIcon}>🎖️</h4>
          <div>
            <h1 className={styles.headingXl}>Swift Student Challenge Winner</h1>
            <h1 className={styles.headingLg}>WWDC21</h1>
          </div>
        </div>

      </article>

      <br/>
      <br/>
      <br/>
      <br/>
    </Layout>
  )
}