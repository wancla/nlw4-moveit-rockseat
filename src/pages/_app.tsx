/**
 * 
 * Importações do react
 * 
 */
import React, { useEffect, useState } from 'react';
/**
 * 
 * Importações de estilo.
 */
import GlobalStyles from '../styles/GlobalStyles';
import ThemeDark from '../styles/Themes/ThemeDark';
import ThemeLight from '../styles/Themes/ThemeLight';

/**
 * 
 * 
 */
import {ThemeProvider} from 'styled-components';

/**
 * 
 * Importações de componentes
 */
import Header from '../components/Header';
import Switch from "react-switch";
import usePersistedState from '../utils/usePersistedState';


/**
 * 
 * @param param0 
 * 
 */
function MyApp({ Component, pageProps}) {
  const [theme, setTheme] = useState(ThemeLight); 
  /**
   * 
   * 
   */
  const toggleTheme = () => {
    
    setTheme(theme.title == "light" ? ThemeDark : ThemeLight );    
  }  

  return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
          <Header toggleTheme={toggleTheme}/>
          <Component {...pageProps} />   
        </ThemeProvider>          
      </>   
      
       
    )
  }
export default MyApp
