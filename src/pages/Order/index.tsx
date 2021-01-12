import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import { iOrder } from '../../interfaces/Order';
import { ScrollList } from '../Store/styles';

import { Container, OrderHeader, OrderList, OrderItem, PokemonOrderArea, PokemonOrderDetail } from './styles';

const Order: React.FC = () => {
  const [orderItems, setOrderItems] = useState<iOrder[]>(() => {
    const storagedOrders = localStorage.getItem('@pokeStoreB2W:order');

    if (storagedOrders) {
      console.log(JSON.parse(storagedOrders));
      
      return JSON.parse(storagedOrders);
    } else {
      return [];
    }
  });
  let formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return <Container>
      <Header />
      <OrderHeader><h2>Pedidos realizados</h2></OrderHeader>
        {orderItems.length > 0 ? (
      <OrderList>
        <ScrollList>
          {orderItems.map((order, index) => (
          <OrderItem key={index}>
              <h3>Pokémon do pedido:</h3>
            <PokemonOrderArea>
              {order.items.map(item =>(
                <PokemonOrderDetail>
                  <img src={item.pokemon.imgUrl} alt=""/>
                <p>{item.pokemon.name} x {item.quantity}</p>
                </PokemonOrderDetail>
              ))}
            </PokemonOrderArea>
           <p>
          Valor do pedido {formatter.format(order.amount)}
             </p>
          </OrderItem>
        ))}
        </ScrollList>
      </OrderList>
        ) :
        <h2>Você ainda nao fez um pedido</h2>
        }
        
       
  </Container>;
}

export default Order;