import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPokemonList } from '../redux/polemonList/actions';
import { getList } from '../redux/polemonList/getters';
import { StatePokemonList } from '../redux/polemonList/reducer';

export default (searchValue: string): StatePokemonList => {
  const dispatch = useDispatch();
  const pokemonState = useSelector(getList);
  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);
  return {
    ...pokemonState,
    pokemonList: pokemonState.pokemonList.filter((pokemon) => pokemon.name.match(searchValue)),
  };
};
