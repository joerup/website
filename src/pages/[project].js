import Layout from '../components/layout';
import Head from 'next/head';
import { getAllProjectIDs, getProjectData } from '/lib/projects';
import Date from '../components/date';

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.project);

  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIDs();
  return {
    paths,
    fallback: false,
  };
}

export default function Update({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>

      {projectData.title}
      <br />
      {projectData.project}
      <br />
      <Date dateString={projectData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
    </Layout>
  );
}