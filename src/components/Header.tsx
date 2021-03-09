import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import Switch from "react-switch";
import {ThemeContext} from 'styled-components'

import styles from '../styles/components/Header.module.css'
import Cookies from 'js-cookie';

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
                width={20}
                handleDiameter={15}
                offHandleColor="#8257e6"
                onHandleColor="#"
                onColor="#fff"
                offColor="#333"                            
                        
            /> 
        </div>
    )
}
