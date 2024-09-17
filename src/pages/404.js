import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout-home'
import { getSortedAppsData } from '/lib/apps'

export async function getStaticProps() {
  const apps = getSortedAppsData();
  return {
    props: {
      apps
    },
  };
}

export default function Custom404({ apps }) {
  return (
    <Layout apps={apps}>
      <Head>
        <title>Error 404</title>
      </Head>

      <div className="flex flex-col items-center justify-center py-40">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-lg mb-8">Oops! The page you are looking for doesn't exist.</p>
          <a href="/" className="px-6 py-3 bg-white text-red-500 rounded-lg text-lg font-medium shadow-lg hover:bg-gray-100 transition-all duration-300">
            Go Back Home
          </a>
        </div>
      </div>
    </Layout>
  )
}
