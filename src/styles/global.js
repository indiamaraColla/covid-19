import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
       padding: 0;
       margin: 0; 
       outline: 0;
       box-sizing: border-box;
    }
    body{
        background-color: #363636;
        color: #D3D3D3;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }
    input, button {
        font-family: 'Source Sans Pro', sans-serif;
    }
    
    button {
        cursor: pointer;
    }
`;
