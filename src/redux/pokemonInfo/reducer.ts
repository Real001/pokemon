import { reduxAction } from '../../types/redux';

export default ( state = {}, action: reduxAction<any>) => {
  if (action.type === 'SET_INFO') {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};