import { UPDATE_TURN } from "../actions/actionTypes";

const tournamentReducer = (state = "player1", action) => {
  switch (action.type) {
    case UPDATE_TURN:
      return action.payload;
    default:
      return state;
  }
};

export default tournamentReducer;
