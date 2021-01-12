import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
    flex-direction: row;
    flex-direction:column;
`;

export const PokemonDetail = styled.div`
    display: flex;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    margin-right: 10px;
    padding: 30px 15px;
    flex: 1;
    justify-content:space-between;
    flex-direction:column;
    img{
        max-width: 40%;
    display: block;
    background-color: transparent;
    transition: opacity 0.2s ease-in-out 0s;
    opacity: 1;
    margin-right:-15%;
    }
`
export const HeaderInfo = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
flex-direction:row;
`;

export const PokemonName = styled.span`
font-size: 20px;
    font-weight: bold;
    text-transform:capitalize;
    color: rgb(102, 102, 102);
    line-height: 1.1;
    margin-bottom: 5px;
`

export const FavoriteArea = styled.div`
display:flex;


    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    flex: 0 0 auto;
    margin-bottom: 2px;
    span{
        color:#666;
        font-size:25px;
    }
`

export const PriceArea = styled.div`
background: rgb(255, 255, 255);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    
    padding: 0px 30px;

`

export const PriceText = styled.div`
    font-size: 30px;
    font-weight: 600;
    text-align: left;
    line-height: normal;
    margin: 0px;
    width: 100%;
    padding: 30px 0px;
    color:#666;
`

export const AddressArea = styled.div`
    padding: 30px 0px;
    font-size: 14px;
    border-top: 1px solid rgba(206, 204, 204, 0.4);
    color:#666;
    p{
        margin-top:15px;
    }
`

export const PaymentArea = styled.div`
margin: 0px; 
    padding: 0px;
    border: 0px;
    font-size: 100%;
    display:flex;
    justify-content:center;
     a{
    color:white;
        text-decoration:none;
        background:blue;
       position:absolute;
    }
`


export const FinishButton = styled.button`
    background: rgb(230, 0, 20);
    text-decoration: none;
    width:100%;
    height:40px;
    display: inline-block;
    border-radius: 3px;
   color:white;
  margin-top:30px;
    font-weight:bold;
    :hover{
        cursor:pointer;
    }
   
`
export const ImageStatusArea = styled.div`
display:flex;

`
export const InfoArea = styled.div`
 display: flex;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    margin-right: 10px;
    padding: 30px 15px;
    flex: 1;
    justify-content:space-between;
    margin-top:15px;
    flex-direction:column;
    text-transform:capitalize;
`

export const MoveList = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content:center;
align-items:center;
flex:1;
margin:0,10px,0,10px;
`

export const Move = styled.span`
margin:5px;
border: 1px solid #dedede;
text-transform:capitalize;
border-radius:5px;
padding:5px;
`

export const Weakness = styled.div`
display:flex;
flex:1;

justify-content:center;
align-items:center;
font-weight:bold;
font-size:18px;
flex-direction:column;
`
export const ProductPriceArea = styled.div`
display:flex;
flex:1;

`

export const PokemonTypeStyle = styled.div`
display:flex;
width:140px;
justify-content:space-around;
`

export const WeaknessAdvantage = styled.div`
display:flex;

`
export const MovesArea = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
margin-top:20px;
`