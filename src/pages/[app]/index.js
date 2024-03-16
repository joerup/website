import Layout from 'src/components/applayout';
import Link from 'next/link'
import Head from 'next/head';
import marked from 'marked';
import { getAllAppIDs, getAppData, getSortedAppsData } from '/lib/apps';
import { getSortedPagesData, getPageData } from '/lib/pages';
import styles from '/src/styles/utils.module.css';
import OmegaScroll from '/src/components/app-components/omegascroll.js';

export async function getStaticProps({ params }) {
  const apps = await getSortedAppsData();
  const app = await getAppData(params.app);
  const pages = await getSortedPagesData(params.app);
  const page = await getPageData(params.app, "index");

  return {
    props: {
      apps,
      app,
      pages,
      page,
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

export default function Home({ apps, app, pages, page }) {
  const views = { "omega_scroll" : <OmegaScroll/> }
  return (
    <Layout apps={apps} app={app} pages={pages}>
      <Head>
        <title>{app.name}</title>
      </Head>
      <div>
        <article className={styles.body}>
          <div dangerouslySetInnerHTML={{ __html: page.contentHtml[0] }} />
          <br/>
          <a href={app.link} className={styles.downloadlink}><img src="download.svg" alt="Download" /></a>
          <br/>
          <br/>
        </article> 

        { app.id == 1 ?
        <div className={styles.headerimage}>
          <img className={styles.insertLg} src={`/images/${app.string}/header.png`}/>
          <img className={styles.insertSm} src={`/images/${app.string}/headercompact.jpeg`}/>
        </div> : <> </>
        }

        {page.contentHtml.slice(1).map((html, index) => {
          if (index % 2 === 0 && page.contentHtml.length > 1) {
            return <div key={index} className={styles.body}>
                {html.includes("&#x26;&#x26;&#x26;") ?
                  <div>
                    <div className={styles.insertLg} dangerouslySetInnerHTML={{ __html: strip(html.split("&#x26;&#x26;&#x26;")[0], views) }}/>
                    <div className={styles.insertSm} dangerouslySetInnerHTML={{ __html: strip(html.split("&#x26;&#x26;&#x26;")[1], views) }}/>
                  </div>
                : <div dangerouslySetInnerHTML={{ __html: strip(html, views) }}/>
                }
                <OtherView html={html} views={views}/>
              </div>;
          } else {
            return <article key={index} className={`${styles.body} ${styles.embeddedImage}`} dangerouslySetInnerHTML={{ __html: html }} />;
          }
        })}

      </div>
    </Layout>
  );
}

function strip(html, views)  {
  Object.keys(views).forEach(key => {
    html = html.replace(key, "");
  });
  return html;
}

export function OtherView({ html, views }) {
  let viewComponent = null;

  Object.keys(views).forEach(key => {
    if (html.includes(key)) {
        viewComponent = views[key]; // Set viewComponent to the associated view
    }
  });

  return (
      viewComponent
  );
}