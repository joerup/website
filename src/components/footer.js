import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Footer ({ apps, app }) {

  return (
    <div>
      <footer className={styles.footer}>

        <div>
          <Link href={'/'}>
          <img className={`${styles.footerImage}`} src="/images/Profile.png"/>
          </Link>
        </div>
        
        <div>
        <p className={utilStyles.footnote}>Copyright © 2024 Joseph Rupertus</p>
        {app ? 
          <p className={utilStyles.footnote}>
            <Link href={`/${app.string}/privacy`}><u>Privacy Policy</u></Link>  
          </p>
        : null}
        </div>

        <div>
          {apps.map((app) => (
            <Link href={`/${app.string}/`}>
              <img className={styles.footerlogo} src={`/images/${app.string}/icon.png`}/>
            </Link>
          ))}
        </div>

      </footer>
    </div>
  )
}
