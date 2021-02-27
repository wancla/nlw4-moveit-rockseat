import Link from 'next/link'
import React, { useState } from 'react'

import styles from '../styles/components/Nav.module.css';

interface Props {
    toggleTheme(): void;
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    /**
   * 
   * Declaração do tema da aplicação
   */

    return (
        <div>
            <div className={styles.navbarContainer}>
                <Link href="/">
                    <a className={styles.logo}>
                        React<span>.js</span>
                    </a>
                </Link>
                <div className={styles.hamburguer}>          
                    <span/>
                    <span/>
                    <span/>
                </div>
                <div className="menu" >
                    <Link  href="/"><a className={styles.menuLink}>Home</a></Link>
                    <Link href="/moveit"><a className={styles.menuLink}>Move it</a></Link> 
                    <Link href="/sobre"><a className={styles.menuLink}>Sobre</a></Link>   
                </div> 
            </div> 
        </div>
    )
}
