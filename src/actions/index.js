import { FETCH_QUERY, FETCHING_QUERY, SET_QUERY } from "./types";
import axios from "axios";

export const fetchingQuery = payload => ({
  type: FETCHING_QUERY,
  payload
});

export const setQuery = payload => ({
  type: SET_QUERY,
  payload
});

export const fetchQuery = query => dispatch => {
  dispatch(fetchingQuery());
  console.log("Dispatching fetch query")
  const APP_ID = "";
  const APP_KEY = "";

  const response = axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(response => dispatch(setQuery(response))).then(dispatch(fetchingQuery(false)));
  return {
    type: FETCH_QUERY,
    payload: response
  }
}