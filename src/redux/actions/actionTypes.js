export const UPDATE_TOURNAMENT = "UPDATE_TOURNAMENT";
export const UPDATE_TURN = "UPDATE_TURN";

export function actionData(action) {
  return { type: action.type, payload: action.payload };
}

export function updateTournamnet(value) {
  return { type: UPDATE_TOURNAMENT, payload: value };
}

export function updateTurn(value) {
  return { type: UPDATE_TURN, payload: value };
}
