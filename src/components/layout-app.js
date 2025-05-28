import Head from 'next/head'
import Header from './header-app.js'
import Footer from './footer.js'

const name = 'Joe Rupertus'
export const siteTitle = 'Joe Rupertus'

export default function Layout({ children, apps, app, landing }) {
  return (
    <main 
      className="min-h-screen min-w-full flex flex-col" 
      style={{ background: !landing ? `#${app.backgroundColor}` : 'none' }}
    >
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

      <Header app={app}/>
      
      <div className="pt-[3.5rem] mx-auto flex-grow">{children}</div>

      <div className="bg-gray-700 bg-opacity-0.5">
        <Footer apps={apps} app={app}/>
      </div>

    </main>
  )
}