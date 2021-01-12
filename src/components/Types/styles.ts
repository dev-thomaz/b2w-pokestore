import styled,  { css }  from 'styled-components';

interface backgroundProps{
    type:string;
    attribute:string;
}
export const Container = styled.div`

`;

export const Background = styled.div<backgroundProps>`
${(props) => props.attribute === 'move' && css`
 width:150px;
`}
${(props) => props.attribute === 'type' && css`
 width:80px;
`}
 margin:5px;
 text-transform:capitalize;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
  border-radius:5px;
color:white;
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

`