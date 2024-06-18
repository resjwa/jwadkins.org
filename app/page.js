import Image from 'next/image';
import Card from './Components/Card/Card';
import styles from './page.module.css';
import Contact from './Components/Contact/Contact';
import MaxWidth from './Components/MaxWidth/MaxWidth';
import { headerFont } from './util/fonts';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <>
      <MaxWidth>
        <section className={styles.hero}>
          <Card>
            <div className={styles.imgWCaption}>
              <Image
                src='/img/nasdaq.webp'
                width='1022'
                height='575'
                priority
                blur='/img/nasdaq-blur.jpg'
                alt='Joe on the Nasdaq Tower in Times Sqaure, NYC'
              />
              <p className={styles.caption}>Yes, this happened!</p>
            </div>
            <h2 className={headerFont.className}>Contact</h2>
            <Contact />
          </Card>
          <Card>
            <div className={styles.bio}>
              <div className={styles.bioHeader}>
                <h2 className={headerFont.className}>J.W. (Joe) Adkins</h2>
                <Image
                  src='/img/joe.jpg'
                  width='256'
                  height='275'
                  className={styles.joe}
                  alt='Joe Adkins Headshot'
                />
              </div>

              <div className={styles.copy}>
                <p>
                  Resourceful technology team leader experienced in digital product development, IoT, enterprise development, science organizations,
                  startups, and the Creative Arts. My professional work in software development began right before Y2K, when I had the opportunity to
                  create and maintain the award-winning official website for the Los Angeles Dodgers.
                </p>
                <p>
                  Since then, I have developed projects for organizations including Oxford University Press, The American Medical Association,
                  American Association of Pediatrics, Actress Halle Berry, FKA The STAPLES Center, and the US Government.
                </p>
                <p>
                  I work as a key collaborator with Product Owners and Business Executives to identify and solve user-centric
                  business problems in the Digital Product space.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </MaxWidth>
      <Analytics />
    </>
  );
}
