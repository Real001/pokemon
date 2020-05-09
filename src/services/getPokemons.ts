import agent from '../agent';
import { PokemonList } from '../types/pokemon';

const getPokemons = () => agent.GET<PokemonList>('pokemon/?limit=20&offset=0');

export default getPokemons;
