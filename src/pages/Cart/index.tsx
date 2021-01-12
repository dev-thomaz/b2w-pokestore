import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Types from '../../components/Types';
import { iOrder } from '../../interfaces/Order';
import { iPokemon_Product } from '../../interfaces/Pokemon';
import { PriceText } from '../Pokemon/styles';
import { useNavigate } from 'react-router-dom';
import sadDragonite from '../../assets/sad.gif'
import Modal from 'react-modal';
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
  ModalContainer,
  MessageModal,
  ButtonModal,
  EmptyCart,
  EmptyCartButton,
} from './styles';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '80vh',
      width: '50vw',
      'border-radius': '10px',
    },
  };

  const [amount, setAmount] = useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [cartItems, setCartItems] = useState<iPokemon_Product[]>(() => {
    const storagedCart = localStorage.getItem('@pokeStoreB2W:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    } else {
      return [];
    }
  });

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    localStorage.setItem('@pokeStoreB2W:cart', '');
    navigate('/');
  }

  useEffect(() => {
    let totalAmount = 0;
    cartItems.map((item) => {
      return (totalAmount += item.pokemon.price * item.quantity);
    });
    setAmount(totalAmount);
  }, [cartItems]);

  const handleAddQtd = (item: iPokemon_Product) => {
    let arrayItems: iPokemon_Product[] = [];
    arrayItems = cartItems;
    if (arrayItems.find((obj) => obj.pokemon.id === item.pokemon.id)) {
      item.quantity += 1;
    }

    localStorage.setItem('@pokeStoreB2W:cart', JSON.stringify(arrayItems));
    const fetchStorage = localStorage.getItem('@pokeStoreB2W:cart');
    if (fetchStorage) {
      setCartItems(JSON.parse(fetchStorage));
    }
  };
  const handleMinusQtd = (item: iPokemon_Product) => {
    let arrayItems: iPokemon_Product[] = [];
    arrayItems = cartItems;
    if (arrayItems.find((obj) => obj.pokemon.id === item.pokemon.id)) {
      item.quantity -= 1;
    }

    localStorage.setItem('@pokeStoreB2W:cart', JSON.stringify(arrayItems));
    const fetchStorage = localStorage.getItem('@pokeStoreB2W:cart');
    if (fetchStorage) {
      setCartItems(JSON.parse(fetchStorage));
    }
  };

  const handleFinishOrder = () => {
    let orderData: iOrder = {
      items: cartItems,
      amount: amount,
    };

    localStorage.setItem('@pokeStoreB2W:order', JSON.stringify(orderData));
    openModal();
  };

  let formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <Container>
      <Header />

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <ModalContainer>
          <MessageModal>
            <h2>OBRIGADO!</h2>
            <h2>PEDIDO REALIZADO COM SUCESSO</h2>
            <h3>
              Nossos pokémon operários já estão trabalhando para entregar seu
              pedido o mais rápido possível
            </h3>
          </MessageModal>
          <ButtonModal>Voltar para o início</ButtonModal>
        </ModalContainer>
      </Modal>
      <CartHeader>
        <h2>Carrinho</h2>
      </CartHeader>
      <Body>
        <PokemonList>
        {cartItems.length > 0 ?
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
                    {item.quantity > 1 && (
                      <ButtonQtd
                        operation='minus'
                        type='button'
                        onClick={() => handleMinusQtd(item)}
                      >
                        -
                      </ButtonQtd>
                    )}
                    {item.quantity}
                    <ButtonQtd
                      operation='plus'
                      type='button'
                      onClick={() => handleAddQtd(item)}
                    >
                      +
                    </ButtonQtd>
                  </OperationArea>
                  <PriceText>
                    {formatter.format(item.pokemon.price * item.quantity)}
                  </PriceText>
                </ItemContent>
              </CartItem>
            ))}
          </ScrollList>
      :<EmptyCart>
      <img src={sadDragonite} alt=""/>
      </EmptyCart> 

      }
        </PokemonList>
        <FinishInfo>
          <PriceText>Total: {formatter.format(amount)}</PriceText>
          <h3>{cartItems.length} itens no Carrinho</h3>
        {cartItems. length > 0 ?
          <ButtonFinish type='button' onClick={() => handleFinishOrder()}>
            Finalizar Compra
          </ButtonFinish>
          : <EmptyCartButton>Carrinho Vazio</EmptyCartButton>
        }
        </FinishInfo>
      </Body>
    </Container>
  );
};

export default Cart;
