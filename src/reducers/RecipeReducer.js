import { FETCH_QUERY } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_QUERY:
      console.log("reducer", action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
}