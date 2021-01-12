import React, { useEffect, useState } from 'react';

import { Container, SideMenu, PokemonArea, ScrollList } from './styles';
import { useSelector } from 'react-redux';
import {iPokemon} from '../../interfaces/Pokemon'
import Pokemon_Product from '../../components/Pokemon_Product';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Header from '../../components/Header';
const Store: React.FC = () => {
  const [pokemon, setPokemon] = useState<iPokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [searchedPokemon, setSearchedPokemon] = useState<iPokemon[]>([])
  
  useEffect(() => {

    let pokemonList:iPokemon[] = [];
    api.get(`type${window.location.pathname}`).then((response) => {
      const pokemonResponse = response.data.pokemon;
      pokemonResponse.map((pkmn: iPokemon) => {
        pokemonList.push(pkmn.pokemon)
      })
      setPokemon(pokemonList);
      setSearchedPokemon(pokemonList)
    });
  }, []);
const getSearch = async (value: string) => {
  
  setSearchedPokemon([])
  let searchArray: iPokemon[] = []
  if(value.length === 0){
    setSearchedPokemon(pokemon)
  }else if(value.length > 2){
    setSearchedPokemon([])
    setSearchedPokemon(pokemon.filter(val => val.name.match(value) )
     
     
    
    )
   }
  
}
  return (
    <Container>
    <Header searchPokemon={getSearch}/>
       <ScrollList>
      <PokemonArea>

        {searchedPokemon.map((pkmn: iPokemon, index: number) => (
          <Link
          key={pkmn.number}
          to={`${window.location.pathname}/${pkmn.name}`}
          >
            <Pokemon_Product pokemon={pkmn} />
          </Link>
        ))
      }
       
      </PokemonArea>
      </ScrollList>
    
    </Container>
  );
};

export default Store;
