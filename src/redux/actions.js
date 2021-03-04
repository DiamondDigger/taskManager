import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  TOGGLE_DONE_TASK,
} from "./actionTypes";

let generateId = 0;

export const addTask = (username, email, text) => ({
  type: ADD_TASK,
  payload: {
    id: ++generateId,
    username,
    email,
    text,
  },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleDoneTask = (id) => ({
  type: TOGGLE_DONE_TASK,
  payload: id,
});

export const editTask = (id, content) => ({
  type: EDIT_TASK,
  payload: {
    id,
    content,
  },
});
