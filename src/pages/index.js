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

      <Socials/>

      <br/>

      <article>

        <h1 className={styles.headingXl}>Hello!</h1>

        <p className={styles.desc}>
        I'm an undergraduate student at Princeton and an Apple developer 
        creating apps with SwiftUI. 
        I’m a creative person who loves designing interactive experiences.
        Thanks for visiting and I look forward to connecting with you!
        </p>

        <br/>
        <br/>
        <Bullet icon="📱" title="Apple Developer" subtitle="3 apps available on the App Store"/>
        <Bullet icon="🎖️" title="Swift Student Challenge Winner" subtitle="WWDC21"/>
        <Bullet icon="📙" title="Student at Princeton University" subtitle="Electrical and Computer Engineering '26"/>
      </article>

      <br/>
      <br/>
      <br/>

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
        ))} 

        <br/>
        <br/>
        <br/> */}

        {/* <h1 className={styles.headingXl}>Recent Updates</h1>
        <br/> */}

        {/* {updates.slice(0, 5).map((update) => (
          <AppUpdate app={apps.find(app => update.app == app.string)} update={update}/>
        ))} */}
        
        {/* <Link href="./updates">
          <div className={styles.applink}>
            <p className={styles.button}>All Updates</p>
          </div>
        </Link> */}

        <br/>
        <br/>
        <br/>
        <br/>

        <div className={styles.center}>
          <p className={styles.headingXl}>Let's connect!</p>
        </div>

        <Socials/>


      </article>
    </Layout>
  )
}