import { homepageConstants } from '../_constants';

export function homepage(state = {}, action) {
  switch (action.type) {
    case homepageConstants.SAVEVALUE_SUCCESS:
      return {
        ...state,
        searchValue: action.value
    };
    case homepageConstants.GETPOSTERLIST_SUCCESS:
        return {
            ...state,
            posterList: action.list,
            ts: (new Date()).getTime()
        }
    default:
      return state
  }
}