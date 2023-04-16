import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Joe Rupertus'
export const siteTitle = 'Joe Rupertus'

export default function Layout({ children, home, top, bottom, article }) {
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

      <header className={styles.header}>
        <div className={styles.emojihead}>
          <p> 🌎 ⌚️ 🚂 🌴 </p>
          <img
            src="/images/Profile2.jpeg"
            className={`${styles.headerImage} ${styles.borderCircle}`}
            alt={name}
          />
          <p> 🏃‍♂️ 🚀 🪐 🐢 </p>
        </div>
        <h1 className={utilStyles.heading4Xl}>{name}</h1>
        <h1 className={utilStyles.headingLg}>19 • NJ</h1>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <h2 className={utilStyles.headingMd}>The end.</h2>
      </footer>
    </div>
  )
}