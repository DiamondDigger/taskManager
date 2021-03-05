import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  TOGGLE_DONE_TASK,
  SHOW_FORM,
  FILTER_BY_FIELD,
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

export const showForm = () => ({
  type: SHOW_FORM,
});

export const filterByField = (field) => ({
  type: FILTER_BY_FIELD,
  payload: field,
});

export const sortInAscendingDirection = () => ({
  type: SORT_IN_ASCENDING_DIRECTION,
});

export const sortInDescendingDirection = () => ({
  type: SORT_IN_DESCENDING_DIRECTION,
});
