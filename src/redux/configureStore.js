import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./reducers/rootReducer";

export const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState);

  return store;
};
