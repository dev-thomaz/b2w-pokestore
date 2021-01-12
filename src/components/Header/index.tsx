import React, { useEffect, useState } from 'react';
import {HiShoppingCart, HiHome, HiHeart} from 'react-icons/hi'
import {RiFilePaper2Line} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import LogoType from '../LogoType';
import { Container, Logo, Input, LeftSide, NoInput } from './styles';

interface HeaderProps{
  searchPokemon?: any
}

const Header: React.FC<HeaderProps> = (props) => {
  const [location, setLocation] = useState(window.location.pathname)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    window.location.pathname.split('/')[1] === 'cart' || window.location.pathname.split('/')[1] === 'favorites' || window.location.pathname.split('/')[1] === 'orders' || window.location.pathname.split('/')[1].length < 1 || isPokemonPage() ? setShowSearch(false) : setShowSearch(true)
    
    if(location !== window.location.pathname){
      setLocation(window.location.pathname)
    }
  },[location])


  const isPokemonPage = () => {

    switch( window.location.pathname.split('/')[1]){
      case 'normal':
      return true;
      case 'fighting':
        return true;
      case 'flying':
        return true;
      case 'poison':
        return true;
      case 'ground':
        return true;
      case 'rock':
        return true;
      case 'bug':
        return true;
      case 'ghost':
        return true;
      case 'steel':
        return true;
      case 'fire':
        return true;
      case 'water':
        return true;
      case 'grass':
        return true;
      case 'electric':
        return true;
      case 'psychic':
        return true;
      case 'ice':
        return true;
      case 'dragon':
        return true;
      case 'dark':
        return true;
      case 'fairy':
        return true;
      
        default:
          return false
    }

  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.searchPokemon(event.target.value)
  }
  

  return (
    <Container type={location.split('/')[1]}>
      <LeftSide>

      <Link to='/'>
        <Logo type={location.split('/')[1]} />
      </Link>
<LogoType type={location.split('/')[1]} />
      </LeftSide>
      {showSearch  ?
      <Input placeholder="Pesquisar Pokémon" onChange={handleSearch}/>
      :
      <NoInput />
      }
      <div>
        <Link to='/'> <HiHome /></Link>
        <Link to='/cart'><HiShoppingCart /></Link>
        <Link to='/orders'><RiFilePaper2Line /></Link>
      </div>
    </Container>
  );
};

export default Header;
