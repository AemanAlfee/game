import { createStore } from "redux";
import todoApp from "../reducers/rootReducer";

const store = createStore(todoApp);

export default store;
