import styled, { css } from 'styled-components';
import {shade} from 'polished'

interface typeProps{
  type:string;
}
export const Container = styled.div`

display:flex;
justify-content:center;
align-items:center;
flex:1;
flex-direction:column;
 
`;

export const Main = styled.div`

display:flex;
justify-content:space-around;
align-items:center;
  flex-wrap:wrap;
  margin-top:40px;
  a{
   text-decoration:none;
   color:white;
  }
`;

export const Type = styled.div<typeProps>`
${(props) => props.type === 'poison' && css`
background:#B87EC8;
:hover{
  background:${shade(0.2,'#B87EC8')}
}
`}
${(props) => props.type === 'flying' && css`
background:#3DC7EF;
:hover{
  background:${shade(0.2,'#3DC7EF')}
}
`}
${(props) => props.type === 'normal' && css`
background:#A3ACAE;
:hover{
  background:${shade(0.2,'#A3ACAE')}
}
`}
${(props) => props.type === 'ghost' && css`
background:#7B61A3;
:hover{
  background:${shade(0.2,'#7B61A3')}
}
`}
${(props) => props.type === 'dark' && css`
background:#717171;
:hover{
  background:${shade(0.2,'#717171')}
}
`}
${(props) => props.type === 'fairy' && css`
background:#FBB9E9;
:hover{
  background:${shade(0.2,'#FBB9E9')}
}
`}
${(props) => props.type === 'fire' && css`
background:#FA7D24;
:hover{
  background:${shade(0.2,'#FA7D24')}
}
`}
${(props) => props.type === 'fighting' && css`
background:#D56723;
:hover{
  background:${shade(0.2,'#D56723')}
}
`}
${(props) => props.type === 'psychic' && css`
background:#F366B9;
:hover{
  background:${shade(0.2,'#F366B9')}
}
`}
${(props) => props.type === 'ice' && css`
background:#51C4E7;
:hover{
  background:${shade(0.2,'#51C4E7')}
}
`}
${(props) => props.type === 'rock' && css`
background:#A38C21;
:hover{
  background:${shade(0.2,'#A38C21')}
}
`}
${(props) => props.type === 'electric' && css`
background:#EED635;
:hover{
  background:${shade(0.2,'#EED635')}
}
`}
${(props) => props.type === 'steel' && css`
background:#9EB7B8;
:hover{
  background:${shade(0.2,'#9EB7B8')}
}
`}
${(props) => props.type === 'water' && css`
background:#4692C5;
:hover{
  background:${shade(0.2,'#4692C5')}
}
`}
${(props) => props.type === 'bug' && css`
background:#729F3F;
:hover{
  background:${shade(0.2,'#729F3F')}
}
`}
${(props) => props.type === 'grass' && css`
background:#9CCC50;
:hover{
  background:${shade(0.2,'#9CCC50')}
}
`}
${(props) => props.type === 'dragon' && css`
background:#53A4CF;
:hover{
  background:${shade(0.2,'#53A4CF')}
}
`}
${(props) => props.type === 'ground' && css`
background:#AA9742;
:hover{
  background:${shade(0.2,'#AA9742')}
}
`}
transition: background-color 0.5s;
margin:10px;
width:120px;
border-radius:10px;
height:120px;
display:flex;
justify-content:center;
align-items:center;
text-transform: capitalize;
flex-direction:column;
text-align:center;
`

export const Pokemon = styled.div`
background: red;
 width:100%;
 height:100%;
`

export const Cart = styled.div`
background:blue;
 
`