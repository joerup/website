import Link from 'next/link'

const ICON_CLASSES = 'opacity-90 w-14 h-14 p-2.5 hover:opacity-50 cursor-pointer';

const Socials = () => {
  return (
    <section className="flex justify-center">
      <div className="flex justify-center px-2.5">
        <Link href="mailto:joerup@princeton.edu">
          <img src="icons/email.png" className={ICON_CLASSES} />
        </Link>

        <Link href="https://www.linkedin.com/in/joerup/">
          <img src="icons/linkedin.png" className={ICON_CLASSES} />
        </Link>

        <Link href="https://github.com/joerup">
          <img src="icons/github.png" className={ICON_CLASSES} />
        </Link>

        <Link href="https://www.twitter.com/joerupertus/">
          <img src="icons/x.png" className={ICON_CLASSES} />
        </Link>

        <Link href="https://www.instagram.com/joerupertus/">
          <img src="icons/instagram.png" className={ICON_CLASSES} />
        </Link>
      </div>
    </section>
  );
};


export default Socials;