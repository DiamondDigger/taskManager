import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  TOGGLE_DONE_TASK,
  FILTER_BY_EMAIL,
  FILTER_BY_NAME,
  FILTER_BY_STATUS,
  SORT_IN_ASCENDING_DIRECTION,
  SORT_IN_DESCENDING_DIRECTION,
} from "./actionTypes";

export const addTask = (username, email, text) => ({
  type: ADD_TASK,
  payload: {
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

export const filterByName = () => ({
  type: FILTER_BY_NAME,
});

export const filterByEmail = () => ({
  type: FILTER_BY_EMAIL,
});

export const filterByStatus = () => ({
  type: FILTER_BY_STATUS,
});

export const sortInAscendingDirection = () => ({
  type: SORT_IN_ASCENDING_DIRECTION,
});

export const sortInDescendingDirection = () => ({
  type: SORT_IN_DESCENDING_DIRECTION,
});
