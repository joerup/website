import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout-home';
import { getSortedAppsData } from '/lib/apps';
import AppLink from '../components/applink';
import Socials from '../components/socials';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Link from 'next/link';
import VersionList from '../components/versionlist';
import VersionCard from '../components/versioncard';

export async function getStaticProps() {
  const apps = getSortedAppsData();
  return {
    props: {
      apps,
    },
  };
}

export default function Home({ apps }) {
  return (
    <Layout home apps={apps}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#DBFFF7] to-white dark:bg-gray-900 dark:bg-none py-8 lg:py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center space-y-4 lg:space-y-6">
            <img
              src="/images/Profile.png"
              alt="Profile"
              className="w-16 h-16 lg:w-24 lg:h-24 rounded-full shadow-2xl transform transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
              Joe Rupertus
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              I am an undergraduate student at Princeton and an indie iOS & visionOS developer. I like to use tech
              to create engaging, interactive stories and experiences that people enjoy using. I would love to connect with you!
            </p>
            <div className="pt-2">
              <Socials/>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Portfolio Section */}
      <section className="bg-white dark:bg-gray-900" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <div className="max-w-lg xl:max-w-5xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 sm:gap-4 xl:gap-8">
              {apps.map((app) => (
                <AppLink key={app.id} app={app} />
              ))}
            </div>
            
            {/* Version Updates Section */}
            <div className="mt-8 lg:mt-12 px-4 pb-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Recent Updates
              </h3>
              
              <div className="space-y-4 text-left">
                {apps
                  .reduce((versions, app) => {
                    const appVersions = app.versions?.map(version => ({
                      ...version,
                      app: app
                    })) || [];
                    return [...versions, ...appVersions];
                  }, [])
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .slice(0, 4)
                  .map((version, index) => (
                    <VersionCard 
                      key={`${version.app.id}-${index}`}
                      app={version.app}
                      version={version}
                    />
                  ))}
              </div>

              <div className="pt-4 text-center">
                <Link 
                  href="/updates"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  View all updates
                  <svg className="w-4 h-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Other Projects
          </h2>
          <Projects />
        </div>
      </section> */}

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#F7F7F7] to-[#F2F2F2] dark:from-[#1A202C] dark:to-[#1A202C]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-4xl pl-4 font-bold text-left text-gray-900 dark:text-white mb-8">
            Skills
          </h2>
          <div className="space-y-4">
            <Skills />
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#F7F7F7] to-[#F2F2F2] dark:from-[#1A202C] dark:to-[#1A202C]">
        <div className="container mx-auto max-w-4xl flex flex-col items-center">
          <Socials className="mt-8 flex justify-center space-x-4" />
        </div>
      </section>

    </Layout>
  );
}