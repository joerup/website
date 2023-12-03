import styles from '../styles/utils.module.css'
import Link from 'next/link'

const Socials = () => {
  return (
    <section className={styles.socials}>
        <div>

          <Link href="mailto:joerup@princeton.edu">
          <img src="icons/email.png"/>
          </Link>

          <Link href="https://www.linkedin.com/in/joerup/">
          <img src="icons/linkedin.png"/>
          </Link>

          <Link href="https://github.com/joerup">
          <img src="icons/github.png"/>
          </Link>

          <Link href="https://www.twitter.com/joerupertus/">
          <img src="icons/x.png"/>
          </Link>

          <Link href="https://www.instagram.com/joerupertus/">
          <img src="icons/instagram.png"/>
          </Link>
        </div>
      </section>
  )
}

export default Socials;