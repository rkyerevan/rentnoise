import Image from "next/image"

import styles from "./BackgroundImage.module.scss"

interface Props {
    src: any,
    alt: string
}

export default function BackgroundImage ({src, alt}: Props){
    return <div className={styles.container}>
        <Image className={styles.img} src={src} alt="#"/>
    </div>
}