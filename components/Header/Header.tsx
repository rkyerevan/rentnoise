import Image from "next/image";
import LogoWhite from "public/logo-white.svg";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image className={styles.logo} src={LogoWhite}  alt="Logo" />
      {/*<div>*/}
      {/*  <nav className={styles.link}>*/}
      {/*    <a className={styles.link} href="">*/}
      {/*      Pricing*/}
      {/*    </a>*/}
      {/*    <a className={styles.link} href="">Get in touch</a>*/}
      {/*  </nav>*/}
      {/*</div>*/}
    </header>
  );
};

export default Header;
