import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedAppsData } from '/lib/apps';
import { getSortedUpdatesData } from '/lib/updates';
import { getSortedCurrentsData } from '/lib/currents';
import AppLink from '../components/applink';
import AppUpdate from '../components/appupdate';
import CurrentProjectInfo from '../components/currentproject';
import Bullet from '../components/bullet';
import Socials from '../components/socials';

export async function getStaticProps() {
  const apps = getSortedAppsData();
  const updates = getSortedUpdatesData();
  const currents = getSortedCurrentsData();
  return {
    props: {
      apps,
      updates,
      currents,
    },
  };
}

export default function Home ({ apps, updates, currents }) { 
  return (
    <Layout home apps={apps}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={styles.header}>
        <div className={styles.headercontent}>
          <img
            src="/images/appleparkprofile.png"
            className={`${styles.headerImage} ${styles.borderCircle}`}
            alt={""}
          />
          <div>
            <h1 className={styles.titledark}>Joe Rupertus</h1>
            <p className={styles.descdark}>
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

      {apps.map((app) => (
        <AppLink app={app}/>
      ))}

      <article>

        {/* <h1 className={styles.headingXl}>Current Projects</h1>
        <br/>

        {currents.map(({ name, date, tech, desc }) => (
          <CurrentProjectInfo
            name={name}
            date={date}
            tech={tech}
            desc={desc}
          />
        ))} */}

        <br/>
        
        {/* <h1 className={styles.headingXl}>Recent Updates</h1>
        <br/> 

        {updates.slice(0, 5).map((update) => (
          <AppUpdate app={apps.find(app => update.app == app.string)} update={update}/>
        ))} 
        
        <Link href="./updates">
          <p className={styles.button}>All Updates</p>
        </Link> */}

        {/* <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> */}

        <div className={styles.center}>
          <h1 className={styles.smalltitledark}>Let's connect!<br/></h1>
        </div>

        <Socials/>

      </article>
    </Layout>
  )
}