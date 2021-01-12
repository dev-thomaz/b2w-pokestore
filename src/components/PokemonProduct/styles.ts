import styled from 'styled-components';



export const Container = styled.div`
      margin-bottom: 10px;
    border-right: 1px solid rgb(229, 229, 229);
    background:white;
    width: 150px;
    display:flex;
    flex: 0 1 calc(25% - 0px);
    justify-content:center;
    align-items:center;
    height:250px;
    flex-direction:column;
  
    img{
        margin-top:25px;
        max-width:150px;
        max-height:100px;
    }
    a{
        text-decoration:none;
    }
`;

export const Price = styled.p`
color: rgb(51, 51, 51);
    font-size: 20px;
    font-weight: bold;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    min-height: 22px;
`;

export const Name = styled.p`
display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    color: rgb(102, 102, 102);
    font-size: 14px;
    text-transform: capitalize;
    line-height: 18px;
    min-height: 36px;
    margin-top:26px
` 
