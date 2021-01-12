import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { Radar } from 'react-chartjs-2';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  iPokemon,
  iPokemon_Product,
  iTypes,
  iMoves,
  iType,
  iMove,
  iPokemon_Favorite,
} from '../../interfaces/Pokemon';
import {
  AddressArea,
  Container,
  FavoriteArea,
  InfoArea,
  Move,
  MoveList,
  Weakness,
  FinishButton,
  HeaderInfo,
  ImageStatusArea,
  PaymentArea,
  PokemonDetail,
  PokemonName,
  PriceArea,
  PriceText,
  PokemonTypeStyle,
  ProductPriceArea,
  WeaknessAdvantage,
} from './styles';
import Types from '../../components/Types';
import Header from '../../components/Header';

interface PokemonStatus {
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}
interface PokemonDetail {
  name: string;
  id: number;
  number: string;
  price: number;
  types: PokemonStatus[];
}

const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<iPokemon | null>(null);
  const [pokemonSprite, setPokemonSprite] = useState('');
  const [chartData, setChartData] = useState({});
  const [pokemonMoves, setPokemonMoves] = useState<iMoves[]>([]);
  const [weakness, setWeakness] = useState([]);
  const [advantage, setAdvantage] = useState([]);
  const [pokemonStatus, setPokemonStatus] = useState<PokemonStatus | null>(
    null
  );
  const [pokemonTypes, setPokemonTypes] = useState<iType[]>([]);
  useEffect(() => {
    const pokemonName = window.location.pathname.split('/')[2].split('/')[0];
    api.get(`pokemon/${pokemonName}`).then((response) => {
      let pkmn = response.data;
      if (pkmn) {
        let movesWithType: iMoves[] = [];
        pkmn.moves.map((item: iMoves) => {
          let fetchurl = item.move.url.split('v2')[1];

          api.get(fetchurl).then((pkmnMove) => {
            item.move.type = pkmnMove.data.type.name;

            movesWithType.push(item);
            setPokemonMoves((arr) => [...arr, item]);
          });
        });

        let numberpkmn = '' + pkmn.id;
        let pkmnStatus: PokemonStatus = {
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          special_attack: response.data.stats[3].base_stat,
          special_defense: response.data.stats[4].base_stat,
          speed: response.data.stats[5].base_stat,
        };
        pkmn.price =
          (pkmnStatus.hp +
            pkmnStatus.attack +
            pkmnStatus.defense +
            pkmnStatus.special_attack +
            pkmnStatus.special_defense +
            pkmnStatus.speed) /
          6;
        let pkmnTypes: iType[] = [];
        response.data.types.map((type: any) => {
          pkmnTypes.push(type.type);
        });
        pkmn.types = pkmnTypes;

        setPokemonTypes(pkmnTypes);
        setPokemonStatus(pkmnStatus);
        let weaknessarr: any = [];
        let advantagearr: any = [];
        pokemonTypes.map((type, i) => {
          api.get(`/type/${type.name}`).then((response) => {
          const responseWeakness  = response.data.damage_relations.double_damage_from
          responseWeakness.map(
              (wknss: any) => {
                weaknessarr.push(wknss);
                setWeakness(weaknessarr);
              }
            );
           const responseAdvantage =  response.data.damage_relations.double_damage_to
           responseAdvantage.map(
              (advtg: any) => {
                advantagearr.push(advtg);
                setAdvantage(advantagearr);
              }
            );
          });
        });
        
        

        while (numberpkmn.length < 3) {
          numberpkmn = '0' + numberpkmn;
        }
        pkmn.number = numberpkmn;
        setPokemonSprite(
          `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberpkmn}.png`
        );
        pkmn.imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberpkmn}.png`;
        setPokemon(pkmn);
        setChartData({
          type: 'horizontalBar',
          labels: [
            'HP',
            'Atack',
            'Defense',
            'Special-Atack',
            'Special-defense',
            'Speed',
          ],
          datasets: [
            {
              label: 'status base',
              barPercentage: 0.5,
              data: [
                pkmnStatus.hp,
                pkmnStatus.attack,
                pkmnStatus.defense,
                pkmnStatus.special_attack,
                pkmnStatus.special_defense,
                pkmnStatus.speed,
              ],
              backgroundColor: ['rgb(30,125,270,0.5)'],
            },
          ],
        });
      }
    });
  }, []);

  const handleAddPokemonToCart = useCallback((pokemon: iPokemon) => {
    let arrayPokemonCart: iPokemon_Product[] = [];
    const pokemonInCart = localStorage.getItem('@pokeStoreB2W:cart');
    if (pokemonInCart) {
      arrayPokemonCart = JSON.parse(pokemonInCart);

      if (
        arrayPokemonCart.some(
          (pkmn: iPokemon_Product) => pkmn.pokemon.id === pokemon.id
        )
      ) {
      } else {
        arrayPokemonCart.push({
          pokemon,
          quantity: 1,
        });
        localStorage.setItem(
          '@pokeStoreB2W:cart',
          JSON.stringify(arrayPokemonCart)
        );
      }
    } else {
      arrayPokemonCart.push({
        pokemon,
        quantity: 1,
      });
      localStorage.setItem(
        '@pokeStoreB2W:cart',
        JSON.stringify(arrayPokemonCart)
      );
    }
  }, []);

  const handleAddPokemonToFavs = useCallback((pokemon: iPokemon) => {
    let arrayPokemonFav: iPokemon_Favorite[] = [];
    const pokemonInFavs = localStorage.getItem('@pokeStoreB2W:favorites');
    if (pokemonInFavs) {
      arrayPokemonFav = JSON.parse(pokemonInFavs);

      if (
        arrayPokemonFav.some(
          (pkmn: iPokemon_Favorite) => pkmn.pokemon.id === pokemon.id
        )
      ) {
      } else {
        arrayPokemonFav.push({
          pokemon,
        });
        localStorage.setItem(
          '@pokeStoreB2W:favorites',
          JSON.stringify(arrayPokemonFav)
        );
      }
    } else {
      arrayPokemonFav.push({
        pokemon,
      });
      localStorage.setItem(
        '@pokeStoreB2W:favorites',
        JSON.stringify(arrayPokemonFav)
      );
    }
  }, []);

  let formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div>
      {pokemon && (
        <Container>
          <Header />
          <ProductPriceArea>
            <PokemonDetail>
              <HeaderInfo>
                <FavoriteArea>
                  <span>
                    <AiOutlineHeart
                      onClick={() => handleAddPokemonToFavs(pokemon)}
                    />
                  </span>
                </FavoriteArea>
                <PokemonTypeStyle>
                  {pokemonTypes.map((type: iType) => (
                    <Types attribute='type' name={`${type.name}`} />
                  ))}
                </PokemonTypeStyle>
                <PokemonName>
                  {pokemon.number} - {pokemon.name}
                </PokemonName>
              </HeaderInfo>
              <ImageStatusArea>
                <img src={pokemonSprite} alt='' />
                <Radar
                  data={chartData}
                  options={{
                    scale: {
                      angleLines: {
                        display: true,
                      },
                      ticks: {
                        suggestedMin: 1,
                        suggestedMax: 255,
                      },
                    },
                  }}
                />
              </ImageStatusArea>
            </PokemonDetail>
            <PriceArea>
              <PriceText>{formatter.format(pokemon.price)}</PriceText>
              <AddressArea>
                <p>
                  Entrega na sua casa ou no centro Pokémon mais próximo da sua
                  jornada
                </p>
                <p>
                  Professor Carvalho consegue enviar esse Pokémon em até 15
                  dias.
                </p>
              </AddressArea>
              <PaymentArea>
                <Link to='/cart'>
                  <FinishButton
                    type='button'
                    onClick={() => handleAddPokemonToCart(pokemon)}
                  >
                    Adicionar ao Carrinho
                  </FinishButton>
                </Link>
              </PaymentArea>
            </PriceArea>
          </ProductPriceArea>
          <InfoArea>
            
            <WeaknessAdvantage>
              <Weakness>
                <p>
                  Weakness <FiArrowDownCircle />
                </p>
                {weakness.map((wknss: any, index: number) => (
                  <Types key={index} attribute='type' name={`${wknss.name}`} />
                ))}
              </Weakness>
              <Weakness>
                <p>
                  Advantage <FiArrowUpCircle />
                </p>
                {advantage.map((advtg: any, index: number) => (
                  <Types attribute='type' key={index} name={`${advtg.name}`} />
                ))}
              </Weakness>
            </WeaknessAdvantage>
            <h2>{pokemon.name} Can Learn:</h2>
            <MoveList>
              {pokemonMoves.map((move: iMoves, index: number) => (
                <Types
                  attribute='move'
                  name={move.move.type}
                  move={move.move.name}
                  key={index + 1}
                ></Types>
              ))}
            </MoveList>
          </InfoArea>
        </Container>
      )}
    </div>
  );
};

export default Pokemon;
