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
      <br/>

      <Socials/>

      <article>

        <p className={styles.desc}>
        Hello! Welcome to my portfolio. I'm a sophomore at Princeton studying Computer Science, and I build apps for Apple platforms using SwiftUI. 
        I'm a creative person and I also really like photography, art, and design. You can see some of my projects below. Thanks for visiting!
        </p>

        <br/>
        <br/>

      </article>

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

        <div className={styles.center}>
          <p className={styles.headingLg}>Let's connect!</p>
        </div>

        <Socials/>

      </article>
    </Layout>
  )
}