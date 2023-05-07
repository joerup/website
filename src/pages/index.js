import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import { useState } from "react"
import AppLink from '../components/applink';
import Bullet from '../components/bullet';
import Socials from '../components/socials';

export async function getStaticProps() {
  return {
    props: {
      
    }
  }
}

export default function Home ({  }) { 
  // Delcare what category should be shown
  const [viewCategory, setCategory] = useState('all');

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
        <Bullet icon="📱" title="iOS App Developer" subtitle="3 apps available on the App Store"/>
        <Bullet icon="🎖️" title="Swift Student Challenge Winner" subtitle="WWDC21"/>
      </article>

      <br/>
      <br/>
      <br/>

      <h1 className={styles.headingXl}>Personal Projects</h1>

      <div className={styles.appgroup}>
        <AppLink 
          name="Omega Calculator"
          subtitle="iOS App"
          icon="/images/Omega_Classic_Blue.png"
          link="https://www.omegacalculator.com/"
          desc="Developed an intuitive scientific calculator app with advanced computing capabilities."
        />
        <AppLink 
          name="Planetaria"
          subtitle="iOS App"
          icon="/images/Planetaria.png"
          link="https://planetaria.app/"
          desc="Created a solar system simulator app using real-time NASA positioning data and augmented reality."
        />
        <AppLink 
          name="Bits & Bobs"
          subtitle="iOS App"
          icon="/images/BitsAndBobs.png"
          link="https://github.com/joerup2004/bits-bobs"
          desc="Developed a comprehensive collection tracker app using Core Data persistence framework."
        />
      </div>

      <br/>
      <br/>
      <br/>

      <h1 className={styles.headingXl}>Other Projects</h1>

      <div className={styles.appgroup}>
        <AppLink 
          name="Asculta Technologies"
          subtitle="Deep Tech Startup"
          icon="/images/AscultaIcon.png"
          link="https://www.ascultatech.com/"
          desc="I am a member of the software team of Asculta Technologies, a startup founded by fellow Princeton students that produces ultrasonic plasma acoustic emissions sensors. I created a website for the company and designed the logo, other branding, and merchandise."
        />
      </div>

      <br/>
      <br/>
      <br/>

      {/* <h1 className={styles.headingXl}>Updates</h1> */}

      {/* <div>
        {allUpdatesData.map(({ id, category, subject, title, date, image, desc }) => (
          <li className={styles.listItem} key={id} style={{display: "block"}}>
            <a href={`/updates/${id}`}>
              <div className={styles.horizontal}>
                <div className={styles.image}>
                  <img src={image}/>
                </div>
                <div>
                  <h2>{title}</h2>
                  <h3>{desc}</h3>
                  <h4><Date dateString={date}/></h4>
                </div>
              </div>
            </a>
          </li>
        ))}
      </div> */}

      <br/>
      <br/>
      <br/>
      <br/>
    </Layout>
  )
}