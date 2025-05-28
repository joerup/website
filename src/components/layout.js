import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const siteTitle = 'Joe Rupertus';

export default function Layout({ children, home }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Joe Rupertus - iOS & visionOS Developer"
        />
        <meta name="og:title" content={siteTitle} />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap" rel="stylesheet"/>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap" rel="stylesheet"/>
      </Head>
      <main>{children}</main>
    </div>
  );
} 