import { createGlobalStyle} from 'styled-components';
import planet from '../assets/planet.jpg';


export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    background: #132e41 url(${planet}) no-repeat top;
    -webkit-font-smoothing: antialised;
    font-family: 'Fredoka One', cursive;
}

border, input, button {
    font: 16px Roboto, sans-serif;
}

#root {
    margin: 0 auto;
    padding: 40px 20px;
}

button {
    cursor: pointer;
}
`;

