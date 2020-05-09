import { Dispatch } from 'redux';
import * as ActionTypes from './constatins';
import getPokemons from '../../services/getPokemons';

export const fetchPokemonList = () => async (dispatch: Dispatch) => {
  dispatch({ type: ActionTypes.SET_LIST_START });
  try {
    const { data } = await getPokemons();
    dispatch({
      type: ActionTypes.SET_LIST_SUCCESS,
      payload: data?.results || [],
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.SET_LIST_FAILED,
      payload: error,
    });
  }
};
