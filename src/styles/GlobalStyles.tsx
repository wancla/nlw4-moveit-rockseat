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
    .toggleButton{
        position: fixed; 
        float: right;
		    margin-right: 1rem;
        margin-top: 0.2rem;
        
    }
`;