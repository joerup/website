import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import { useState } from "react"
import Link from 'next/link'
import AppLink from '../components/applink';
import Bullet from '../components/bullet';

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

      <h1 className={styles.headingXl}>Hello!</h1>

      <p className={styles.desc}>
      My name is Joe and welcome to my portfolio. I am an undergraduate student at Princeton and a self-taught Apple developer with experience creating iOS apps using SwiftUI. I’m a creative individual with a passion for app development, and I also love photography, art, and design. Thanks for visiting and I look forward to connecting with you!
      </p>

      <article>
        <Bullet icon="📙" title="Student @ Princeton University" subtitle="Electrical and Computer Engineering '26"/>
        <Bullet icon="📱" title="iOS App Developer" subtitle="3 apps available on the App Store"/>
        <Bullet icon="🎖️" title="Swift Student Challenge Winner" subtitle="WWDC21"/>
      </article>

      <br/>
      <br/>

      <h1 className={styles.heading2Xl}>My Apps</h1>

      <div className={styles.appgroup}>
        <AppLink 
          name="Omega Calculator"
          icon="/images/Omega_Classic_Blue.png"
          link="https://www.omegacalculator.com/"
          desc="An intuitive and powerful calculator that can be used for any mathematical computation you need to perform."
        />
        <AppLink 
          name="Planetaria"
          icon="/images/Planetaria.png"
          link="https://planetaria.app/"
          desc="An interactive Solar System simulator that allows you to explore the heavens above right from your fingertips."
        />
        <AppLink 
          name="Bits & Bobs"
          icon="/images/BitsAndBobs.png"
          link="https://github.com/joerup2004/bits-bobs"
          desc="A simple app for keeping track of collections."
        />
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
    </Layout>
  )
}