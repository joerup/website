import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import { getSortedPostsData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import styles from '../../styles/utils.module.css'
import Link from 'next/link'

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  const allPostsData = getSortedPostsData()
  return {
    props: {
      project: projectData,
      allPostsData: allPostsData.filter(post => post.subject == projectData.name)
    }
  }
}

export default function Project({ project, allPostsData }) {
  return (
    <Layout bottom>
      <Head>
        <title>{project.name}</title>
      </Head>

      <div className={styles.postHeader}>
        <img src={project.image}/>
        <h1 className={styles.headingLg}>{project.name}</h1>
      </div>

      <article>
        <Link href="/">
          <a>← Back to home</a>
        </Link>

        <h1 className={styles.heading2Xl}>{project.name}</h1>
        <p className={styles.lightText}>{project.desc}</p>

        { project.imgcount >= 10 ? 
          <div>
            <div className={styles.pictures5}>
                <img src={`/images/${project.imglink}/${project.imglink}11.png`}/>
                <img src={`/images/${project.imglink}/${project.imglink}12.png`}/>
                <img src={`/images/${project.imglink}/${project.imglink}13.png`}/>
                <img src={`/images/${project.imglink}/${project.imglink}14.png`}/>
                <img src={`/images/${project.imglink}/${project.imglink}15.png`}/> 
            </div>
            <div className={styles.pictures5}>
              <img src={`/images/${project.imglink}/${project.imglink}16.png`}/>
              <img src={`/images/${project.imglink}/${project.imglink}17.png`}/>
              <img src={`/images/${project.imglink}/${project.imglink}18.png`}/>
              <img src={`/images/${project.imglink}/${project.imglink}19.png`}/>
              { project.imgcount >= 10 ? <img src={`/images/${project.imglink}/${project.imglink}20.png`}/> : <></> }
            </div>
          </div>
        : 
          <div className={project.imgcount >= 7 ? styles.pictures7 : project.imgcount >= 6 ? styles.pictures6 : styles.pictures5}>
              <img src={`/images/${project.imglink}/${project.imglink}11.png`}/>
              <img src={`/images/${project.imglink}/${project.imglink}12.png`}/>
              <img src={`/images/${project.imglink}/${project.imglink}13.png`}/>
              <img src={`/images/${project.imglink}/${project.imglink}14.png`}/>
              { project.imgcount >= 5 ? <img src={`/images/${project.imglink}/${project.imglink}15.png`}/> : <></> }
              { project.imgcount >= 6 ? <img src={`/images/${project.imglink}/${project.imglink}16.png`}/> : <></> }
              { project.imgcount >= 7 ? <img src={`/images/${project.imglink}/${project.imglink}17.png`}/> : <></> }
          </div>
        }

        <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />

        <div className={styles.projectLinks}>
          { project.ios != null ? 
            <Link href={project.ios}>
              <div>
                <img src="https://img.icons8.com/ios-filled/100/000000/mac-os.png"/>
                <p>App Store</p>
              </div>
            </Link> : <></>
          }
          { project.website != null ? 
            <Link href={project.website}>
              <div>
                <img src="https://img.icons8.com/ios/100/000000/internet--v1.png"/>
                <p>Website</p>
              </div>
            </Link> : <></>
          }
          { project.github != null ? 
            <Link href={project.github}>
              <div>
                <img src="https://img.icons8.com/ios/100/000000/github.png"/>
                <p>Github</p>
              </div>
            </Link> : <></>
          }
        </div>
      </article>

      {/* <section className={styles.posts}>
        <div>
          <h2 className={styles.sectionhead}>Posts</h2>
          {allPostsData.map(({ id, category, subject, title, date, image, desc }) => (
            <li className={styles.listItem} key={id} style={{display: "block"}}>
              <Link href="/[category]/[id]" as={`/${category}/${id}`}>
                <div className={styles.horizontal}>
                  <div className={styles.image}>
                    <img src={image}/>
                  </div>
                  <div>
                    <h1>{`${category.toUpperCase()[0] + category.substr(1)} • ${subject}`}</h1>
                    <h2>{title}</h2>
                    <h3>{desc}</h3>
                    <h4><Date dateString={date}/></h4>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </div>
      </section> */}
    </Layout>
  )
}

