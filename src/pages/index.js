import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedAppsData } from '/lib/apps';
import AppLink from '../components/applink';
import Bullet from '../components/bullet';
import Socials from '../components/socials';
import Scroll from '../components/scroll';

export async function getStaticProps() {
  const apps = getSortedAppsData();
  return {
    props: {
      apps
    },
  };
}

export default function Home ({ apps }) { 
  return (
    <Layout home apps={apps}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={styles.header}>
        <div className={styles.headercontent}>
          <div>
            <h1 className={styles.darktitle}>Joe Rupertus</h1>
            <p className={styles.darkdesc}>
            Hello! Welcome to my portfolio. 
            I'm a sophomore at Princeton, and I'm a developer and designer. 
            I like to create interactive things that people love using.
            I also really like art and photography.
            You can find all of the things I've made below.
            Thanks for visiting!
            </p>
          </div>
        </div>
      </div>

      <Socials/>
      <br/>
      
      <div className={styles.bullets}>
        <Bullet icon="💻" title="Computer Science @ Princeton"/>
        <Bullet icon="🎨" title="Developer & Designer"/>
        <Bullet icon="🎖️" title="Swift Student Challenge Winner 2021"/>
      </div>

      <AppLink app={apps[0]}/>
      {apps.slice(1).map((app) => (
        <AppLink app={app}/>
      ))}

      {/* <br/>
      <br/>
      <br/>
      <br/> */}

      {/* <Scroll/> */}

      {/* <br/>
      <br/> */}
      <br/>
      <br/>
      <div className={styles.center}>
        <h1 className={styles.smalltitledark}>Let's connect!<br/></h1>
      </div>
      <Socials/>
      <br/>

    </Layout>
  )
}