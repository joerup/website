import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout-home';
import { getSortedAppsData } from '/lib/apps';
import AppLink from '../components/applink';
import Socials from '../components/socials';

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
      <section className="bg-gradient-to-b from-[#DBFFF7] to-white py-8 lg:py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center space-y-6">
            <img
              src="/images/Profile.png"
              alt="Profile"
              className="w-16 h-16 lg:w-24 lg:h-24 rounded-full shadow-2xl transform transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-3xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Joe Rupertus
            </h1>
            <p className="text-sm lg:text-lg text-gray-600 max-w-2xl">
              I am an undergraduate student at Princeton and an indie iOS & visionOS developer. I like to use tech
              to create engaging, interactive stories and experiences that people enjoy using. I would love to connect with you!
            </p>
            <Socials/>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section data-aos="fade-up">
        <div className="container mx-auto text-center max-w-lg xl:max-w-5xl sm:pb-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 sm:gap-4 xl:gap-8">
            {apps.map((app) => (
              <AppLink key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}

// Data for Testimonials (Example)
const testimonials = [
  {
    id: 1,
    quote: "Joe's apps are incredibly intuitive and well-designed. A pleasure to use!",
    name: 'John Doe',
    position: 'Senior Developer',
  },
  {
    id: 2,
    quote: "Working with Joe has been a fantastic experience. His attention to detail is second to none.",
    name: 'Jane Smith',
    position: 'Product Manager',
  },
  {
    id: 3,
    quote: "Joe's passion for creating engaging user experiences shines through in every project.",
    name: 'Alice Johnson',
    position: 'UX Designer',
  },
];
