import { UPDATE_TOURNAMENT } from "../actions/actionTypes";

const tournamentReducer = (state = 5, action) => {
  console.log("--------------------------->", action);
  switch (action.type) {
    case UPDATE_TOURNAMENT:
      return action.payload;
    default:
      return state;
  }
};

export default tournamentReducer;
