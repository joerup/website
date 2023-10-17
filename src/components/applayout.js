import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import Footer from './footer.js'
// import { getSortedAppsDataHook } from '/lib/apps';

const name = 'Joe Rupertus'
export const siteTitle = 'Joe Rupertus'

export default function Layout({ children, apps, app }) {

  return (
    <div className={styles.container} style={{ background: `#${app.color}` }}>
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
            <img className={styles.logo} src={`/images/${app.string}.png`}/>
            <h1 className={styles.title}>{app.name}</h1>
          </div>
        </Link>

        <div className={styles.navright}>

          <div className={styles.dropdown}>
            <img className={styles.dropbutton} src="https://img.icons8.com/metro/26/ffffff/menu.png"/>
            <div className={styles.dropdowncontent}>
              <Link href={`/${app.string}/`}><p>About</p></Link>
              <Link href={`/${app.string}/updates`}><p>Updates</p></Link>
              <Link href={`/${app.string}/support`}><p>Support</p></Link>
              <Link href={`/${app.string}/privacy`}><p>Privacy</p></Link>
            </div>
          </div>

          <Link href={`/${app.string}/`}><p className={styles.rowitem}>About</p></Link>
          <Link href={`/${app.string}/updates`}><p className={styles.rowitem}>Updates</p></Link>
          <Link href={`/${app.string}/support`}><p className={styles.rowitem}>Support</p></Link>
          <Link href={`/${app.string}/privacy`}><p className={styles.rowitem}>Privacy</p></Link>
          
        </div>
      </div>
      
      <main className={styles.page}>{children}</main>

      <Footer apps={apps}/>

    </div>
  )
}