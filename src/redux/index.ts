import { combineReducers } from 'redux';
import pokemonList, { StatePokemonList } from './polemonList/reducer';


export interface ReduxState {
  pokemonList: StatePokemonList;
}

export default combineReducers({
  pokemonList,
});
