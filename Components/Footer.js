import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return (
        <footer className={styles.footer_style}>
            <p>Portifolio &copy; 2022 </p>
            <Link href="/"><a></a></Link>
        </footer>
    )
}