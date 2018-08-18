import { ACTION } from '..//actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case ACTION:
    return {
      ...state,
      first: action.payload
    }
    default: return state;
  }
}