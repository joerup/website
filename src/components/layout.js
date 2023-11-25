import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Footer from './footer.js'

const name = 'Joe Rupertus'
export const siteTitle = 'Joe Rupertus'

export default function Layout({ children, home, apps }) {

  return (
    <div className={styles.container}>
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

      { home ?
        <header className={styles.header}>
          <div className={styles.emojihead}>
            <img
              src="/images/appleparkprofile.png"
              className={`${styles.headerImage} ${styles.borderCircle}`}
              alt={name}
            />
          </div>
          <h1 className={utilStyles.heading4Xl}>{name}</h1>
        </header>
        : 
        <Link href="/">
          <header className={styles.subheader}>
            <img
              src="/images/appleparkprofile.png"
              className={`${styles.footerImage} ${styles.borderCircle}`}
              alt={name}
            />
          </header>
        </Link>
      }
      
      <main className={styles.pagecontainer}>
        <div className={styles.page}>{children}</div>
      </main>

      <Footer apps={apps}/>

    </div>
  )
}