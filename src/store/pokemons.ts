import {Dispatch} from 'react';
import req from '../utils/request';
import {IStateRequest, ITypesRequest} from '../interfface';
import {IInitialState} from './index';
import {log} from 'handlebars';

export enum PokemonsActionType {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}

interface TypesAction {
  type: PokemonsActionType,
  payload?: string[]
}

type ActionType = TypesAction;

export interface IPokemonsInitialState {
  types: IStateRequest<string>
}

const initalState: IPokemonsInitialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  }
}

const pokemons = (state = initalState, action: ActionType) => {
  switch (action.type) {
    case PokemonsActionType.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        }
      };
    case PokemonsActionType.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        }
      };
      case PokemonsActionType.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        }
      };
    default:
      return state;
  }
}

export const getPokemonsTypes = (state: IInitialState) => state.pokemons.types.data;
export const getPokemonsTypesLoading = ( state: IInitialState) => state.pokemons.types.isLoading;


export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch({type: PokemonsActionType.FETCH_TYPES});
    try {
      const response = await req<ITypesRequest>('getPokemonTypes', {});
      console.log('!!! responce:', response);
      dispatch({ type: PokemonsActionType.FETCH_TYPES, payload: response })
    } catch (error) {
      dispatch({type: PokemonsActionType.FETCH_TYPES_REJECT, payload: error});
    }
  }
}

export default pokemons;
