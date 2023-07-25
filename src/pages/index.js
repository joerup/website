import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedProjectsData } from '/lib/projects';
import { getSortedUpdatesData } from '/lib/updates';
import AppLink from '../components/applink';
import AppUpdate from '../components/appupdate';
import Bullet from '../components/bullet';
import Socials from '../components/socials';

export async function getStaticProps() {
  const projects = getSortedProjectsData();
  const updates = getSortedUpdatesData();
  return {
    props: {
      projects,
      updates,
    },
  };
}

export default function Home ({ projects, updates }) { 
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Socials/>

      <br/>

      <h1 className={styles.headingXl}>Hello!</h1>

      <p className={styles.desc}>
      My name is Joe and welcome to my portfolio. I am an undergraduate student at Princeton and a self-taught Apple developer with experience creating iOS apps using SwiftUI. I’m a creative individual with a passion for app development, and I also love photography, art, and design. Thanks for visiting and I look forward to connecting with you!
      </p>

      <article>
        <Bullet icon="📙" title="Student @ Princeton University" subtitle="Electrical and Computer Engineering '26"/>
        <Bullet icon="📱" title="Apple Developer" subtitle="3 apps available on the App Store"/>
        <Bullet icon="🎖️" title="Swift Student Challenge Winner" subtitle="WWDC21"/>
      </article>

      <br/>
      <br/>
      <br/>

      <h1 className={styles.headingXl}>My Projects</h1>

      <div className={styles.appgroup}>
        {projects.map(({ project, name, subtitle, link, desc }) => (
          <AppLink 
            name={name}
            subtitle={subtitle}
            icon={`/images/${project}.png`}
            link={link}
            desc={desc}
          />
        ))}
      </div>

      <article>
        <h1 className={styles.headingXl}>Updates</h1>
        <br/>

        {updates.slice(0, 5).map(({ version, date, headline, project }) => (
          <AppUpdate
          project={project}
            version={version}
            date={date}
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