import Link from "next/link";

import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return (
        <nav className={styles.nav_container}>
            <h1><span>Carlos </span>Eduardo</h1>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/Sobre"><a>Sobre</a></Link></li>
                <li><Link href="/"><a>Projetos</a></Link></li>
                <li><Link href="/Contato"><a>Contato</a></Link></li>
                
            </ul>
        </nav>

    )
}