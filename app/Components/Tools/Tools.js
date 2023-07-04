import styles from './tools.module.css';
import { SiAdobe, SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiSvelte, SiVuedotjs, SiVercel } from 'react-icons/si';
import { RxAccessibility } from 'react-icons/rx';

const Tools = () => {
  return (
    <ul className={styles.tools}>
      <li>
        <SiNextdotjs />
      </li>
      <li>
        <SiReact />
      </li>
      <li>
        <SiSvelte />
      </li>
      <li>
        <SiVuedotjs />
      </li>
      <li>
        <SiVercel />
      </li>
      <li>
        <SiJavascript />
      </li>
      <li>
        <SiHtml5 />
      </li>
      <li>
        <SiCss3 />
      </li>
      <li>
        <SiAdobe />
      </li>
      <li>
        <RxAccessibility />
      </li>
    </ul>
  );
};

export default Tools;
