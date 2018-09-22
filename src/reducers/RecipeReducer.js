import { FETCHING_QUERY, SET_QUERY } from "../actions/types";

const initialState = {
  isFetching: false,
  items: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_QUERY:
      return {
        ...state,
        isFetching: true
      }
    case SET_QUERY:
      return {
        ...state,
        isFetching: false,
        items: action.payload.data.hits
      }
    default:
      return state;
  }
}