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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Socials/>

      <br/>

      <h1 className={styles.headingXl}>Hello!</h1>

      <p className={styles.desc}>
      I'm an undergraduate student at Princeton and an Apple developer creating 
      apps with SwiftUI. 
      I’m a creative person with a passion for designing innovative things 
      with purpose and care. 
      Thanks for visiting and I look forward to connecting with you!
      </p>

      <article>
        <Bullet icon="📱" title="Apple Developer" subtitle="3 apps available on the App Store"/>
        <Bullet icon="🎖️" title="Swift Student Challenge Winner" subtitle="Apple WWDC21"/>
        <Bullet icon="📙" title="Student at Princeton University" subtitle="Electrical and Computer Engineering '26"/>

      </article>

      <br/>
      <br/>
      <br/>

      <h1 className={styles.headingXl}>Apps</h1>

      <div className={styles.appgroup}>
        {apps.map(({ app, name, platforms, tech, link, desc }) => (
          <AppLink 
            name={name}
            icon={`/images/${app}.png`}
            platforms={platforms}
            tech={tech}
            link={link}
            desc={desc}
          />
        ))}
      </div>

      <article>

        <h1 className={styles.headingXl}>Current Projects</h1>
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
        <br/>

        <h1 className={styles.headingXl}>Recent Updates</h1>
        <br/>

        {updates.slice(0, 5).map(({ version, dates, headline, app }) => (
          <AppUpdate
            app={app}
            version={version}
            dates={dates}
            headline={headline}
          />
        ))}
        
        <Link href="./updates">
          <div className={styles.applink}>
            <p className={styles.button}>All Updates</p>
          </div>
        </Link>
      </article>

      <br/>
      <br/>
      <br/>
      <br/>
    </Layout>
  )
}