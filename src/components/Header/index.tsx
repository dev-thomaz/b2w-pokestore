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
    window.location.pathname.split('/')[1] === 'cart' || window.location.pathname.split('/')[1].length < 1 ? setShowSearch(false) : setShowSearch(true)
    
    if(location !== window.location.pathname){
      setLocation(window.location.pathname)
    }
  },[location])

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
        <Link to='/favorites'><HiHeart /></Link>
        <Link to='/orders'><RiFilePaper2Line /></Link>
      </div>
    </Container>
  );
};

export default Header;
