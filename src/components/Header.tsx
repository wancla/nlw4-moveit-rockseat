import React, { useContext } from 'react'
import Navbar from './Navbar'
import Switch from "react-switch";
import {ThemeContext} from 'styled-components'

import styles from '../styles/components/Header.module.css'

interface Props {
    toggleTheme(): void;
}

export default function Header({toggleTheme}) {
    const {title} = useContext(ThemeContext);

    return (
        <div className={styles.headerContainer}>
            <Navbar/>
            <Switch 
                className="toggleButton" 
                onChange={toggleTheme}
                checked={title == 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offHandleColor="#fff"
                onHandleColor="#333"
                onColor="#fff"
                offColor="#333"                            
                        
            /> 
        </div>
    )
}
