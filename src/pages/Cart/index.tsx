import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Types from '../../components/Types';
import { iOrder } from '../../interfaces/Order';
import { iPokemon_Product, iType, iTypes, iPokemon } from '../../interfaces/Pokemon';
import { PriceText } from '../Pokemon/styles';

import {
  Container,
  PokemonList,
  CartHeader,
  CartItem,
  ItemInfo,
  ItemContent,
  PokemonTypeStyle,
  ButtonQtd,
  OperationArea,
  FinishInfo,
  Body,
  ScrollList,
  ButtonFinish,
} from './styles';

const Cart: React.FC = () => {

  const [amount, setAmount] = useState(0)
  const [cartItems, setCartItems] = useState<iPokemon_Product[]>(() => {
    const storagedCart = localStorage.getItem('@pokeStoreB2W:cart');

 

    if (storagedCart) {

      return JSON.parse(storagedCart);
    } else {
      return [];
    }
  });
 
  useEffect(() => {
    let totalAmount = 0
    cartItems.map(item => {
      totalAmount += item.pokemon.price * item.quantity
      
    })
    setAmount(totalAmount)

  }, [cartItems])

  const handleAddQtd = (item: iPokemon_Product) => {
    let arrayItems: iPokemon_Product[] = []
    arrayItems = cartItems
    if(arrayItems.find(obj => obj.pokemon.id === item.pokemon.id)){
      item.quantity +=1
     
    }
   
    const newValue = localStorage.setItem('@pokeStoreB2W:cart', JSON.stringify(arrayItems))
    const fetchStorage = localStorage.getItem('@pokeStoreB2W:cart')
    if(fetchStorage){
      setCartItems(JSON.parse(fetchStorage))
    }
  }
  const handleMinusQtd = (item: iPokemon_Product) => {
    let arrayItems: iPokemon_Product[] = []
    arrayItems = cartItems
    if(arrayItems.find(obj => obj.pokemon.id === item.pokemon.id)){
      item.quantity -=1
     
    }
   
    const newValue = localStorage.setItem('@pokeStoreB2W:cart', JSON.stringify(arrayItems))
    const fetchStorage = localStorage.getItem('@pokeStoreB2W:cart')
    if(fetchStorage){
      setCartItems(JSON.parse(fetchStorage))
    }
  }

  const handleFinishOrder = () => {
    let orderData:iOrder ={
      items: cartItems,
      amount: amount
    }
   
    const setOrderStorage = localStorage.setItem('@pokeStoreB2W:order', JSON.stringify(orderData))
    
  }

  let formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <Container>
      <Header />
      <CartHeader>
        <h2>Carrinho</h2>
      </CartHeader>
      <Body>
      <PokemonList>
        <ScrollList>
        {cartItems.map((item) => (
          <CartItem key={item.pokemon.id}>
            <img src={item.pokemon.imgUrl} alt='' />
            <ItemContent>
              <ItemInfo>
                <h2>
                  {item.pokemon.number} - {item.pokemon.name}
                </h2>
                <PokemonTypeStyle>
                  {item.pokemon.types.map((type: any) => (
                    <Types attribute='type' name={`${type.name}`} />
                  ))}
                </PokemonTypeStyle>
              </ItemInfo>
              <OperationArea>
               {item.quantity > 1 &&
              <ButtonQtd operation="minus" type="button"  onClick={() => handleMinusQtd(item)}>-</ButtonQtd>
               }     
              {item.quantity}
              <ButtonQtd operation="plus" type="button" onClick={() => handleAddQtd(item)}>+</ButtonQtd>
              </OperationArea>
              <PriceText>{formatter.format(item.pokemon.price * item.quantity)}</PriceText>
             
            </ItemContent>
          </CartItem>
        ))}
        </ScrollList>
      </PokemonList>
      <FinishInfo>
      
      <PriceText>Total: {formatter.format(amount)}</PriceText>
      <h3>{cartItems.length} itens no Carrinho</h3>

      <ButtonFinish type="button" onClick={() => handleFinishOrder()}>Finalizar Compra</ButtonFinish>
      </FinishInfo>
      </Body>
    </Container>
  );
};

export default Cart;
