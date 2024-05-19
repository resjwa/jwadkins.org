import { AiOutlinePhone, AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <ul className={styles.contactList}>
      <li>
        <AiOutlineMail />
        hello@jwadkins.org
      </li>
      <li>
        <a href='https://www.linkedin.com/in/jwadkins/'>
          <AiOutlineLinkedin />
          /jwadkins
        </a>
      </li>
      <li>
        <a href='https://github.com/resjwa'>
          <AiOutlineGithub />
          /resjwa
        </a>
      </li>
    </ul>
  );
};

export default Contact;
