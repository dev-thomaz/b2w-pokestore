import styled, { css } from 'styled-components';
import { shade } from 'polished'
import logo from '../../assets/logo.png';
interface ContainerProps {
    type: string;
}

interface LogoProps {
    type: string;
}

export const Container = styled.div<ContainerProps>`
${(props) => props.type === '' && css`
background:#666;
`}
${(props) => props.type === 'cart' && css`
background:#666;
`}
${(props) => props.type === 'poison' && css`
background:#B87EC8;
`}
${(props) => props.type === 'flying' && css`
background:#3DC7EF;
`}
${(props) => props.type === 'normal' && css`
background:#A3ACAE;
`}
${(props) => props.type === 'ghost' && css`
background:#7B61A3;
`}
${(props) => props.type === 'dark' && css`
background:#717171;
`}
${(props) => props.type === 'fairy' && css`
background:#FBB9E9;
`}
${(props) => props.type === 'fire' && css`
background:#FA7D24;
`}
${(props) => props.type === 'fighting' && css`
background:#D56723;
`}
${(props) => props.type === 'psychic' && css`
background:#F366B9;
`}
${(props) => props.type === 'ice' && css`
background:#51C4E7;
`}
${(props) => props.type === 'rock' && css`
background:#A38C21;
`}
${(props) => props.type === 'electric' && css`
background:#EED635;
`}
${(props) => props.type === 'steel' && css`
background:#9EB7B8;
`}
${(props) => props.type === 'water' && css`
background:#4692C5;
`}
${(props) => props.type === 'bug' && css`
background:#729F3F;
`}
${(props) => props.type === 'grass' && css`
background:#9CCC50;
`}
${(props) => props.type === 'dragon' && css`
background:#53A4CF;
`}
${(props) => props.type === 'ground' && css`
background:#AA9742;
`}
  height:80px;
  display: flex;
  flex-direction:row;
  align-items:center;
  width:100%;
  justify-content:space-around; 
  a{
    color: white;
    font-size:30px;
    margin-right:10px;
  }
`;

export const Logo = styled.div<LogoProps>`
background-image:  url(${logo});;
background-repeat: no-repeat;
  background-size: 140px 60px;
  height:60px;
  width:140px;
`


export const Input = styled.input`
background: white;
height:35px;
width:50%;
margin-left:10px;
border-radius:5px;
padding:10px;
`

export const NoInput = styled.div`
height:35px;
width:50%;
margin-left:10px;
border-radius:5px;
padding:10px;
`

export const LeftSide = styled.div`
display: flex;
`