import MaxWidth from '../MaxWidth/MaxWidth';
import styles from './header.module.css';
import { headerFont } from '@/app/util/fonts';

const Header = () => {
  return (
    <header className={styles.header}>
      <MaxWidth>
        <h1 className={`${headerFont.className} ${styles.title}`}>J.W. Adkins</h1>
      </MaxWidth>
    </header>
  );
};

export default Header;
