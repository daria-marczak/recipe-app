import { FETCH_DATA } from "./types";
import axios from "axios";

export function fetchData() {
  const APP_ID = "";
  const APP_KEY = "";
  const response = axios.get(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
  return {
    type: FETCH_DATA,
    payload: response
  }
}