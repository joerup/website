import Layout from 'src/components/layout-app';
import Page from 'src/components/page';
import Head from 'next/head';
import { getAllAppIDs, getAppData, getSortedAppsData, getAppRelatedData } from '/lib/apps';

export async function getStaticProps({ params }) {
  const apps = await getSortedAppsData();
  const app = await getAppData(params.app);
  const promoCodesText = await getAppRelatedData(params.app, 'promocodes');

  // Parse the promo codes from the plain text string
  const promoCodes = parsePromoCodes(promoCodesText);

  return {
    props: {
      apps,
      app,
      promoCodes,
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

// Helper function to parse promo codes from a plain text string
function parsePromoCodes(text) {
  const lines = text.trim().split('\n');
  const promoCodes = {};
  let currentDate = null;

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return; // Skip empty lines

    // Match the custom date format directly
    if (/^[A-Za-z]{3} [A-Za-z]{3} \d{2} \d{2}:\d{2}:\d{2} [A-Za-z]{3} \d{4}$/.test(trimmed)) {
      // Use the date string as-is
      currentDate = trimmed;
      promoCodes[currentDate] = [];
    } else if (currentDate) {
      // Treat the line as a promo code and add it to the current date's array
      promoCodes[currentDate].push(trimmed);
    }
  });

  return promoCodes;
}

export default function PromoCodes({ apps, app, promoCodes }) {
  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>Promo Codes | {app.name}</title>
      </Head>

      <Page title="Promo Codes" theme={app.theme}>
        <div className={`${app.theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
          {Object.keys(promoCodes).length > 0 && (
            <p className="text-md mb-6">
              These promo codes can be redeemed on the App Store to download {app.name}.
            </p>
          )}
          {promoCodes && Object.keys(promoCodes).length > 0 ? (
            Object.entries(promoCodes).map(([date, codes]) => (
              <div key={date} className="mb-6">
                <ul className="list-none">
                  {codes.map((code, index) => (
                    <li key={index} className="text-lg font-bold">{code}</li>
                  ))}
                </ul>
                <p className="pt-2 text-xs text-gray-500 italic">
                  Promo Codes expire on {date} and are redeemable only on the App Store in regions where the app is available. 
                  Requires an Apple ID, subject to prior acceptance of license and
                  usage terms. To create an Apple ID, you must be age 13 (or equivalent minimum
                  age in your Home Country, as set forth in the registration process). Compatible software and hardware, and internet access (fees may
                  apply) required. Not for resale. Full terms apply; see{' '}
                  <a
                    href="https://www.apple.com/legal/itunes/ww/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-current"
                  >
                    www.apple.com/legal/itunes/ww/
                  </a>
                  . For more information, see{' '}
                  <a
                    href="https://support.apple.com/apps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-current"
                  >
                    support.apple.com/apps
                  </a>
                  .
                </p>
              </div>
            ))
          ) : (
            <p>No promo codes are available at this time.</p>
          )}
        </div>
      </Page>
    </Layout>
  );
}
