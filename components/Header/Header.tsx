import Image from "next/image"
import LogoWhite from "public/logo-white.svg";

import styles from "./Header.module.scss"

const Header  = (src:any) => {
    return <header className={styles.header}>
        <Image src={LogoWhite} width={236} alt="#"/>
    </header>
}


export default Header