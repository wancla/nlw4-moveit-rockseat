import Link from 'next/link'
import React, { useState } from 'react'

import styles from '../styles/components/Nav.module.css';

interface Props {
    toggleTheme(): void;
}

export default function Navbar() {
    const [menu, setMenu] = useState(false); 

    const showMenu = () => setMenu(!menu);

    return (
        <div>
            <nav className={styles["navbar"]}>
                <div className={styles["navbar__container"]}>
                    <Link href="https://wancla.vercel.app" >
                        <a id={styles["navbar__logo"]}><i className="fab fa-d-and-d"></i> BLOG</a>
                    </Link>                    
                    <div className={styles["navbar__toggle"]} id={styles["mobile-menu"]} onClick={showMenu}>
                        <span className={styles["bar"]}></span> 
                        <span className={styles["bar"]}></span>
                        <span className={styles["bar"]}></span>
                    </div>
                    <ul className={menu ? "navbar__menu active" : "navbar__menu"}>
                        <li className={styles["navbar__item"]}>
                            <Link href="https://wancla.vercel.app">
                                <a className={styles["navbar__links"]}>Home</a>
                            </Link>
                        </li>
                        <li className={styles["navbar__item"]}>
                            <Link href="/">
                                <a className={styles["navbar__links"]}>Conhecimentos</a>
                            </Link>                            
                        </li>
                        <li className={styles["navbar__item"]}>
                            <Link href="https://wancla.vercel.app/#portfolio">
                                <a className={styles["navbar__links"]}>Portfólio</a>
                            </Link>                            
                        </li>
                        {/**
                         * <li className={styles["navbar__btn"]}>
                            <Link href="/" >
                                <a className={styles["button"]}>Sign Up</a>
                            </Link>
                        </li> 
                         * 
                         */}                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}
