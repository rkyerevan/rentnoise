import Image from "next/image"

import styles from "./BackgroundImage.module.scss"
import { ReactElement, ReactNode } from "react"

interface Props {
    src: any,
    alt: string,
    children: ReactNode
    
}

export default function BackgroundImage ({src, alt, children}: Props){
    return <div className={styles.container}>
        <Image className={styles.img} src={src} alt="#"/>
        {children}
    </div>
}