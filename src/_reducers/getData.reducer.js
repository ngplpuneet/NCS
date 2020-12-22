import { getDataConstants } from '../_constants';

export function getData(state = {}, action) {
  switch (action.type) {
    case getDataConstants.GETDATA_SUCCESS:
      return {
        items: action.data.entries
    };
    default:
      return state
  }
}