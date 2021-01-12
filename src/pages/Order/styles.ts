import styled from 'styled-components';
export const Container = styled.div`
  grid-template-columns: minmax(0, 1fr);
display:flex;
flex-direction:column;

`



export const ScrollList = styled.div`
overflow: auto;
`
export const OrderList = styled.ul`
  background: #fff;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction:column;
 
  margin-right:20px;
  margin-left:10px;
  overflow:hidden;
  height:80vh;
`;

export const OrderHeader = styled.div`
  grid-area: title;
  background-color: initial;
  font-size: 24px;
  margin-bottom: 12px;
  padding: 0;
  color: #333;
`; 
export const OrderItem = styled.li`
    padding: 1rem 0;
    margin: 0 1rem;
    border-bottom: 1px solid #e9e9e9;
    flex-wrap: wrap;
    list-style: none;
    display:flex;
    flex-direction:column;
    text-transform:capitalize;
    img{
        grid-area: productThumbnail;
    align-self: flex-start;
    margin: 0;
    max-width: 150px;
    margin-right:20px;
    }
`

export const PokemonOrderArea = styled.div`
display:flex;
flex-wrap:wrap;
margin:10px;
`

export const PokemonOrderDetail = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:flex-start;
color: #666;
text-transform: capitalize;
img{
    max-width:80px;
    
}
`