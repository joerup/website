import styles from '../styles/utils.module.css'
import Link from 'next/link'

const Socials = () => {
  return (
    <section className={styles.socials}>
        <div>
          <Link href="https://www.twitter.com/joerupertus/">
            <img src="https://img.icons8.com/android/60/000000/twitter.png"/>
          </Link>
          <Link href="https://www.instagram.com/joerupertus/">
            <img src="https://img.icons8.com/metro/60/000000/instagram-new.png"/>
          </Link>
          <Link href="mailto:joerup2004@gmail.com">
            <img src="https://img.icons8.com/ios/60/000000/new-post.png"/>
          </Link>
          <Link href="https://www.linkedin.com/in/joerup/">
            <img src="https://img.icons8.com/android/96/000000/linkedin.png"/>
          </Link>
          <Link href="https://github.com/joerup">
            <img src="https://img.icons8.com/ios-glyphs/60/000000/github.png"/>    
          </Link>
        </div>
      </section>
  )
}

export default Socials;