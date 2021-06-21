import { combineReducers } from "redux";
import tournamentReducer from "./tournamentReducer";
import turnReducer from "./turnReducer";

const rootReducer = combineReducers({
  tournament: tournamentReducer,
  turn: turnReducer
});

export default rootReducer;
