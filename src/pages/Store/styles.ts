import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex:1;
  flex-direction: column;
  
`;
export const SideMenu = styled.div`
display: flex;
flex:10px;
background:white;
`

export const PokemonArea = styled.div`
display:flex;
width:100vw;
flex-wrap:wrap;
padding:20px;
a{
    text-decoration:none;
}
height:100vh;
`

export const ScrollList = styled.div`
overflow:auto
`