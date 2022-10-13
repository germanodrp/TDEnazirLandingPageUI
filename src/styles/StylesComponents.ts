import {createGlobalStyle} from 'styled-components';
import Page from '../components/Page';

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

*input,button{
    font-family:'Roboto',sans-serif
}
`