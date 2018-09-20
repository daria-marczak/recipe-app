import { FETCH_QUERY } from "./types";
import axios from "axios";

export const fetchQuery = query => {
  const APP_ID = "7fbe4389";
  const APP_KEY = "0fed0e83180efe3edf7591786c35b468";

  const response = axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(response => response);

  return {
    type: FETCH_QUERY,
    payload: response
  }
}