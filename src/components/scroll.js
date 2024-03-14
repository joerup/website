import { useEffect } from 'react';
import styles from '../styles/utils.module.css'

const Scroll = () => {

  /* resize images to 500 x 375 px */
  const count = 26;

  const photos = Array.from({ length: count }, (_, i) => `photo${i + 1}.png`);
  
  const photos1 = photos.slice(0, count/2).concat(photos.slice(0, count/2));
  const photos2 = photos.slice(count/2, count).concat(photos.slice(count/2, count));

  return (
    <div>
      <div className={styles.horizontalScrollingItems1}>
        {photos1.map((photo, index) => (
          <img key={index} className={styles.horizontalScrollingItem} src={`/images/photos/${photo}`} alt={`Photo ${index + 1}`} />
        ))}
      </div>
      <div className={styles.horizontalScrollingItems2}>
        {photos2.map((photo, index) => (
          <img key={index} className={styles.horizontalScrollingItem} src={`/images/photos/${photo}`} alt={`Photo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Scroll;