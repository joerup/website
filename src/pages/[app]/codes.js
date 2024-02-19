import Layout from '../../components/applayout';
import Link from 'next/link'
import Head from 'next/head';
import { getAllAppIDs, getAppData, getSortedAppsData } from '/lib/apps';
import Date from 'src/components/date';
import styles from '/src/styles/utils.module.css';

export async function getStaticProps({ params }) {
  const apps = await getSortedAppsData();
  const app = await getAppData(params.app);

  return {
    props: {
      apps,
      app
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

export default function Privacy({ apps, app }) {

  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>{`Promo Codes | ${app.name}`}</title>
      </Head>
      <article>

        <h1 className={styles.heading3Xl}>Promo Codes</h1>

        {app.codes ? 
          <div>
            <p className={styles.desc2}>
            Promo Codes expire on {app.codesexpirationdate} and are redeemable only on the App Store for United States. Requires an Apple ID, subject to prior acceptance of license and usage terms. To create an Apple ID, you must be age 13 (or equivalent minimum age in your Home Country, as set forth in the registration process) and in United States. Compatible software and hardware, and internet access (fees may apply) required. Not for resale. Full terms apply; see www.apple.com/legal/itunes/ww/. For more information, see https://support.apple.com/apps.
            This app is provided to you by Apple Inc.
            </p>

            <br/>
            <div className={styles.desc2}>
            Instructions:
            <ul>
                <li>Open the App Store</li>
                <li>Press your profile picture in the upper right corner</li>
                <li>Press “Redeem Gift Card or Code”</li>
                <li>Press “Enter Code Manually”</li>
                <li>Copy and paste the code</li>
                <li>Redeem the code</li>
            </ul>
            </div>
            <br/>
            {app.codes.map((code) => (
              <p className={styles.desc2}>{code}</p>
            ))}

          <br/>
          </div>
        :
          <div>
            <p className={styles.desc}>
              No promo codes are currently available for {app.name}.
            </p>
          </div>
        }

      </article>
    </Layout>
  );
}