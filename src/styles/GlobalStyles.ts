import { createGlobalStyle} from 'styled-components'
import fireType from '../assets/types/fire.png';
export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:roboto;
    
}
html{
    min-height:100%;
    background: #f1f1f1;
}

*, button, input{
    border:0;
    background:none;
}

#root{
--fireLogo: ${fireType}
}
`