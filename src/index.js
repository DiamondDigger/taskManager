import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  ADD_TASK,
  FILTER_BY_STATUS,
  SORT_IN_DESCENDING_DIRECTION,
  TOGGLE_DONE_TASK,
} from "./redux/actionTypes";
import { configureStore } from "./redux/configureStore";

const store = configureStore({});

console.log("Initial state:", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
);

store.dispatch({
  type: ADD_TASK,
  payload: {
    username: "Bill",
    email: "bill@mail.com",
    text: "to repair the bike",
  },
});
store.dispatch({
  type: ADD_TASK,
  payload: { username: "Bob", email: "bob@mail.com", text: "to read a book" },
});
store.dispatch({
  type: ADD_TASK,
  payload: {
    username: "Nick",
    email: "nick@mail.com",
    text: "to draw a picture",
  },
});
store.dispatch({ type: TOGGLE_DONE_TASK, payload: 2 });

store.dispatch({ type: FILTER_BY_STATUS });
store.dispatch({ type: SORT_IN_DESCENDING_DIRECTION });

unsubscribe();

store.dispatch({
  type: ADD_TASK,
  payload: {
    username: "Kelly",
    email: "kelly@mail.com",
    text: "to join national football team at a party",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
