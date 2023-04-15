import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import styles from '../../styles/utils.module.css'
import Link from 'next/link'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.category, params.id)
  return {
    props: {
      post: postData
    }
  }
}

export default function Post({ post }) {
  return (
    <Layout bottom>
      <Head>
        <title>{post.title}</title>
      </Head>

      {post.project != null ? 
        <Link href={`../projects/${post.project}`}>
          <div className={styles.postHeaderLink}>
            <div className={styles.postHeader}>
              <img src={post.image}/>
              <h1 className={styles.headingLg}>{post.subject}</h1>
            </div>
          </div>
        </Link> : 
        <div className={styles.postHeader}>
          <img src={post.image}/>
          <h1 className={styles.headingLg}>{post.subject}</h1>
        </div>
      }

      <article>
        <Link href="/">
          <a>← Back to home</a>
        </Link>

        <h1 className={styles.headingXl}>{post.title}</h1>
        <div className={styles.lightText}>
          <Date dateString={post.date}/>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  )
}

