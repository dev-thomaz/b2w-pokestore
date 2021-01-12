import React, { useEffect, useState } from 'react';
import api from '../../services/api'

import noimage from '../../assets/noImage.png';
import loadPokemon from '../../assets/loadPokemon.gif'
import { Container, Name, Price } from './styles';
import { iPokemon } from '../../interfaces/Pokemon';

interface PokemonProps {
  pokemon: iPokemon;
}

const Pokemon_Product: React.FC<PokemonProps> = (props) => {
  const [pokemonSprite, setPokemonSprite] = useState(loadPokemon);
  const pokemon = props.pokemon;
  const [pokemonID, setPokemonID] = useState(0);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [pokemonPrice, setPokemonPrice] = useState(0);
  const pokemonUrl = pokemon.url.split('v2/')[1];
  const [pokemonNumber, setPokemonNumber] = useState('');

  useEffect(() => {
    api.get(pokemonUrl).then((response) => {
      let pkmnNumber = '' + response.data.id;
      setPokemonPrice(response.data.stats[1].base_stat);
  
      setPokemonID(response.data.id);
      while (pkmnNumber.length < 3) {
        pkmnNumber = '0' + pkmnNumber;
      }
      setPokemonNumber(pkmnNumber);
      setPokemonSprite(
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pkmnNumber}.png`
      );
    });
   
    
  },[])



  let formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <Container>
      {pokemonID <= 899 ? (
        
        <img src={pokemonSprite} alt={pokemon.name} />
      ) : (
        <img src={noimage} alt='Pokémon sem imagem' />
      )}
      <p>{pokemonNumber}</p>
      <Name>{pokemon.name}</Name>
      <Price>{formatter.format(pokemonPrice)}</Price>
    </Container>
  );
};

export default Pokemon_Product;
