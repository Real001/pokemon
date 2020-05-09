import { reduxAction } from '../../types/redux';
import * as ActionTypes from './constatins';
import { BaseItem } from '../../types/entitiesBase';

type payloadAction = Partial<BaseItem | Error | object>;

export interface StatePokemonList {
  pokemonList: BaseItem[];
  isLoading: boolean;
  error: Error | null;
}

const initialState: StatePokemonList = {
  pokemonList: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action: reduxAction<payloadAction>): StatePokemonList => {
  switch (action.type) {
    case ActionTypes.SET_LIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.SET_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemonList: action.payload as BaseItem[],
      };
    case ActionTypes.SET_LIST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload as Error,
      };
    default:
      return state;
  }
};
