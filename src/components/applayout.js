import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import Footer from './footer.js'
// import { getSortedAppsDataHook } from '/lib/apps';

const name = 'Joe Rupertus'
export const siteTitle = 'Joe Rupertus'

export default function Layout({ children, apps, app }) {

  return (
    <main className={styles.container} style={app.background == null ? { background: `#${app.color}` } : { backgroundImage: `url(${app.background})` }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600&display=swap" rel="stylesheet"/>
        <meta
          name="description"
          content="Joe Rupertus"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>

      <div className={styles.navbar}>

        <Link href={`/${app.string}/`}>
          <div className={styles.navleft}>
            <img className={styles.logo} src={`/images/${app.string}/icon.png`}/>
            <h1 className={styles.title}>{app.name}</h1>
          </div>
        </Link>

        <div className={styles.navright}>

          <div className={styles.dropdown}>
            <img className={styles.dropbutton} src="https://img.icons8.com/metro/26/ffffff/menu.png"/>
            <div className={styles.dropdowncontent}>
              <Link href={app.link}><p>Download</p></Link>
              {app.beta ? <Link href={`/${app.string}/beta`}><p>Testing</p></Link> : <></>} 
              {app.string === 'planetaria' ? <Link href={`/${app.string}/design`}><p>Design</p></Link> : <></>}
              <Link href={`/${app.string}/updates`}><p>Updates</p></Link>
              <Link href={`/${app.string}/support`}><p>Support</p></Link>
            </div>
          </div>

          <Link href={app.link}><p className={styles.rowitem}>Download</p></Link>
          {app.beta ? <Link href={`/${app.string}/beta`}><p className={styles.rowitem}>Testing</p></Link> : <></>} 
          {app.string === 'planetaria' ? <Link href={`/${app.string}/design`}><p className={styles.rowitem}>Design</p></Link> : <></>}
          <Link href={`/${app.string}/updates`}><p className={styles.rowitem}>Updates</p></Link>
          <Link href={`/${app.string}/support`}><p className={styles.rowitem}>Support</p></Link>
          
        </div>
      </div>
      
      <div className={styles.page}>{children}</div>

      <Footer apps={apps} app={app}/>

    </main>
  )
}