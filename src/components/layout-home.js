import Head from 'next/head'
import Footer from './footer.js'
import HeaderHome from './header-home'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActiveSectionProvider } from '../context/ActiveSectionContext'

const name = 'Joe Rupertus'
export const siteTitle = 'Joe Rupertus'

export default function Layout({ children, apps }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
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
      
      <HeaderHome />
      
      <main className="flex-grow">{children}</main>

      <Footer apps={apps}/>

    </div>
  )
}