import Image from 'next/image';
import Card from './Components/Card/Card';
import styles from './page.module.css';
import Contact from './Components/Contact/Contact';
import MaxWidth from './Components/MaxWidth/MaxWidth';
import { headerFont } from './util/fonts';

export default function Home() {
  return (
    <MaxWidth>
      <section className={styles.hero}>
        <Card>
          <div className={styles.imgWCaption}>
            <Image
              src='/img/nasdaq.webp'
              width='1022'
              height='575'
              blur='/img/nasdaq-blur.jpg'
              alt='Joe on the Nasdaq Tower in Times Sqaure, NYC'
            />
            <p className={styles.caption}>Yes, this happened!</p>
          </div>
          <h2 className={headerFont.className}>Contact</h2>
          <Contact />
        </Card>
      </section>
    </MaxWidth>
  );
}
