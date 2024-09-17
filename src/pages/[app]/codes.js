import Layout from 'src/components/layout-app';
import Page from 'src/components/page';
import Head from 'next/head';
import { getAllAppIDs, getAppData, getSortedAppsData } from '/lib/apps';

export async function getStaticProps({ params }) {
  const apps = await getSortedAppsData();
  const app = await getAppData(params.app);

  return {
    props: {
      apps,
      app,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllAppIDs();
  return {
    paths,
    fallback: false,
  };
}

export default function Codes({ apps, app }) {
  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>Promo Codes | {app.name}</title>
      </Head>

      <Page title="Promo Codes" theme={app.theme}>
        <div className={`${app.theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
          <p>
            No promo codes available.

            {/* Promo Codes expire on 
            **Sun Mar 17 13:38:18 PDT 2024**
            and are redeemable only on the App Store for United States. Requires an Apple ID, subject to prior acceptance of license and usage terms. To create an Apple ID, you must be age 13 (or equivalent minimum age in your Home Country, as set forth in the registration process) and in United States. Compatible software and hardware, and internet access (fees may apply) required. Not for resale. Full terms apply; see [www.apple.com/legal/itunes/ww/](https://www.apple.com/legal/itunes/ww/). For more information, see [https://support.apple.com/apps](https://support.apple.com/apps). This app is provided to you by Apple Inc. -->

            No codes are available at this time.

            ---

            ### Instructions to Redeem

            - Open the App Store
            - Press your profile picture in the upper right corner
            - Press “Redeem Gift Card or Code”
            - Press “Enter Code Manually”
            - Copy and paste the code
            - Redeem the code */}
          </p>
        </div>
      </Page>
    </Layout>
  );
}