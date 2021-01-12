import styled, { css } from 'styled-components';

import dragonite from '../../assets/delivery.png'
interface ButtonQtdProps{
operation:string;
}
export const Container = styled.div`
  grid-template-columns: minmax(0, 1fr);
display:flex;
flex-direction:column;

`

export const Body = styled.div`
display: flex;

`

export const FinishInfo = styled.div`
 background: #fff;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction:column;
  flex:1;
  margin-right:10px;
  height:80vh;
  padding:10px;
`
export const ScrollList = styled.div`
overflow: auto;
`
export const PokemonList = styled.ul`
  background: #fff;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction:column;
  flex:3;
  margin-right:20px;
  margin-left:10px;
  overflow:hidden;
  height:80vh;
`;

export const PriceText = styled.div`
    font-size: 20px;
    text-align: left;
    margin: 0px;
    width: 100%;
    color:#666;
`

export const CartHeader = styled.div`
  grid-area: title;
  background-color: initial;
  font-size: 24px;
  margin-bottom: 12px;
  padding: 0;
  color: #333;
`; 

export const CartItem = styled.li`
    padding: 1rem 0;
    margin: 0 1rem;
    border-bottom: 1px solid #e9e9e9;
    flex-wrap: wrap;
    list-style: none;
    display:flex;
    text-transform:capitalize;
    img{
        grid-area: productThumbnail;
    align-self: flex-start;
    margin: 0;
    max-width: 150px;
    margin-right:20px;
    }
`

export const ItemInfo = styled.div`
text-align: left;
    line-height: 1.8;
    margin:0;
    border-bottom: 1px solid #efefef;
    margin-bottom: 1.8rem;

    h2{
      font-size: 14px;
    line-height: 16px;
    color: #333;
    margin-bottom: .5rem;
    }
`

export const ItemContent = styled.div`
display:flex;
flex-direction:column;
flex:1;
`
export const PokemonTypeStyle = styled.div`
display:flex;
width:140px;
justify-content:space-around;
`

export const OperationArea = styled.div`
display:flex;
align-items:center;
`

export const ButtonQtd = styled.button<ButtonQtdProps>`
${(props) => props.operation === 'plus' && css`
background:#729F3F;
`}
${(props) => props.operation === 'minus' && css`
background:#D70B00;
`}
width:30px;
height:30px;
border: 1px solid white;
border-radius: 50%;
display:flex;
align-items:center;
justify-content:center;
color:white;
font-size:18px;
font-weight:bold;
margin:5px;

`

export const ButtonFinish = styled.button`
width:100%;
height:40px;
background:red;
color:white;
display:flex;
justify-content:center;
align-items:center;
margin-top:20px;
`

export const ModalContainer = styled.div`
background: #dedede url(${dragonite});
background-position:center;
background-size:cover;
background-repeat:no-repeat;
display:flex;
justify-content:center;
flex:1 1;
flex-direction:column;
height:100%;
padding:10px;
align-items:center;
H2{
  opacity:1;
}
`

export const MessageModal = styled.div`
text-align:center;
background: rgb(255, 255, 255, 0.4);
border-radius:5px;

h2{
  margin-top:15px;
}

`
export const ButtonModal = styled.button`

width:80%;
height:40px;
background:red;
color:white;
display:flex;
justify-content:center;
align-items:center;
margin-top:20px;
`
export const EmptyCart = styled.div`
display: flex;
align-items: center;
justify-content: center;
height:100%;
flex-direction:column;


`

export const EmptyCartButton = styled.button`
background: #dedede;
width:100%;
height:40px;
color:black;
display:flex;
justify-content:center;
align-items:center;
margin-top:20px;
`