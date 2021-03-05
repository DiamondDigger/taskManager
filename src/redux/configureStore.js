import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./reducers/rootReducer";

const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("dispatching");
  console.log("state before", storeAPI.getState());
  let result = next(action);
  console.log("store after", storeAPI.getState());
  return result;
};

const composeEnhancers = composeWithDevTools(applyMiddleware(loggerMiddleware));

export const configureStore = () => {
  const store = createStore(rootReducer, composeEnhancers);

  return store;
};
