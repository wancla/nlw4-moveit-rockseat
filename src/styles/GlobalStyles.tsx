/**
 * 
 * Importação do Styled components.
 */
import {createGlobalStyle} from 'styled-components';

/**
 * 
 * exportação com os parametros do css no formato da biblioteca styled-components
 * 
 */
export default createGlobalStyle `
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    :root {
        --white: #f5f5f5;
        --primary: ${props => props.theme.colors.primary};
        --primary-hover: ${props => props.theme.colors.primaryhover}; 
        --secundary: ${props => props.theme.colors.secundary};
        --background: ${props => props.theme.colors.background};
        --gray-line: ${props => props.theme.colors.line};
        --text: ${props => props.theme.colors.text};
        --text-highlight: ${props => props.theme.colors.highlight};
        --title: ${props => props.theme.colors.title};
        --red: ${props => props.theme.colors.red};
        --green: ${props => props.theme.colors.green};
        --blue: ${props => props.theme.colors.blue};
        --blue-dark: ${props => props.theme.colors.bluedark};
        --blue-twitter: ${props => props.theme.colors.bluetwitter};
    }
    @media(max-width: 1080px){
        html {
            font-size: 93.75%; /* reduz 1 pixel*/
        }
    }
    @media(max-width: 720px){
        html {
            font-size: 87.5%; /* reduz 1 pixel*/
        }
    }

    body {
        height: 1200px;
        background-color: var(--background);
        color: var(--text);
    }
    body, input, textarea, button {
        font: 400 1rem "Inter", sans-serif; /* 1rem = 16px; */
    }
    button {
        cursor: pointer;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    .toggleButton {
        display: flex; 
        float: right;
		margin: 1.5rem;
        
    }
    .navbar__menu {
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
}

.navbar__item {
  height: 80px;
}

.navbar__links {
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
}

.navbar__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px 20px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 4px;
  background: #fcb045;
  color: var(--text);
}

.button:hover {
  background: var(--hover);
  transition: all 0.3s ease;
}

.navbar__links:hover {
  color: #fcb045;
  transition: all 0.3s ease;
}

@media screen and (max-width: 960px) {
  .navbar__container {
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    padding: 0;
  }

  .navbar__menu {
    display: grid;
    grid-template-columns: auto;
    margin: 0;
    width: 100%;
    position: absolute;
    top: -1000px;
    opacity: 1;
    transition: all 0.5s ease;
    height: 50vh;
    z-index: -1;
  }

  .navbar__menu.active {
    background: var(--background);
    top: 100%;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 99;
    height: 50vh;
    font-size: 1.6rem;
  }

  #navbar__logo {
    padding-left: 25px;
  }

  .navbar__toggle .bar {
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background: var(--text);
  }

  .navbar__item {
    width: 100%;
  }

  .navbar__links {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }

  .navbar__btn {
    padding-bottom: 2rem;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80px;
    margin: 0;
  }

  #mobile-menu {
    position: absolute;
    top: 20%;
    right: 5%;
    transform: translate(5%, 20%);
  }

  .navbar__toggle .bar {
    display: block;
    cursor: pointer;
  }

  #mobile-menu.is-active .bar:nth-child(2) {
    opacity: 0;
  }

  #mobile-menu.is-active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  #mobile-menu.is-active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
`;