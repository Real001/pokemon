import agent from '../agent';
import { PokemonInfo } from '../types/pokemon';

const getPokemon = (name: string) => agent.GET<PokemonInfo>(`pokemon/${name}`);

export default getPokemon;
