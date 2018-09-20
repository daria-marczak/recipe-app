import { combineReducers } from "redux";
import RecipeReducer from "./RecipeReducer";

const rootReducer = combineReducers({
  recipes: RecipeReducer
});

export default rootReducer;