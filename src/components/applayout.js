import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import Footer from './footer.js'

const name = 'Joe Rupertus'
export const siteTitle = 'Joe Rupertus'

export default function Layout({ children, apps, app, pages }) {
  return (
    <main className={styles.container} style={{ background: `#${app.color}` }}>
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

      <div className={styles.navbar} style={{ backgroundColor: `rgba(${parseInt(app.color.slice(0,2), 16)}, ${parseInt(app.color.slice(2,4), 16)}, ${parseInt(app.color.slice(4,6), 16)}, 0.75)` }}>

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
              {pages.filter(page => page.linked).map((page) => (
                <Link href={`/${app.string}/${page.string}`}><p>{page.shorttitle ?? page.title}</p></Link>
              ))}
            </div>
          </div>

          <Link href={app.link}><p className={styles.rowitem}>Download</p></Link>
          {pages.filter(page => page.linked).map((page) => (
            <Link href={`/${app.string}/${page.string}`}><p className={styles.rowitem}>{page.shorttitle ?? page.title}</p></Link>
          ))}
          
        </div>
      </div>
      
      <div className={styles.page}>{children}</div>

      <Footer apps={apps} app={app}/>

    </main>
  )
}