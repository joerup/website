import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Socials from './socials.js'

export default function Footer ({ apps }) {

  return (
    <div>
      <footer className={styles.footer}>

        <div>
          <Link href={'/'}>
          <img className={`${styles.footerImage}`} src="/images/Profile.png"/>
          </Link>
          {/* <Socials/> */}
        </div>
        
        <div>
          <p className={utilStyles.footnote}>Copyright © 2023 Joseph Rupertus</p>
        </div>
        
        <div>
          {apps.map((app) => (
            <Link href={`/${app.string}/`}>
              <img className={styles.logo} src={`/images/${app.string}.png`}/>
            </Link>
          ))}
        </div>

      </footer>

      <footer className={styles.footer2}>
        <p className={utilStyles.footnote}>Copyright © 2023 Joseph Rupertus</p>
      </footer>
    </div>
  )
}