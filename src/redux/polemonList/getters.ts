import { ReduxState } from '../index';
import { StatePokemonList } from './reducer';

export const getList = (state: ReduxState): StatePokemonList => state.pokemonList;
