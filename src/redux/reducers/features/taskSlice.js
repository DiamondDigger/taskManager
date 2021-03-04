import { TableSortLabel } from "@material-ui/core";
import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  TOGGLE_DONE_TASK,
} from "../../actionTypes";

function nextTaskId(tasks) {
  const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1);
  return maxId + 1;
}

const initialState = [
  {
    id: 1,
    username: "Alex",
    email: "alex@mail.ru",
    text: "write new book about marketing",
    completed: false,
  },
];

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { username, email, text } = action.payload;
      return [
        ...state,
        { id: nextTaskId(state), username, email, text, completed: false },
      ];
    }
    case DELETE_TASK: {
      return [...state, state.filter((task) => task.id !== action.payload)];
    }

    case EDIT_TASK: {
      return [
        ...state,
        state.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }

          return {
            ...task,
            text: action.payload.content,
          };
        }),
      ];
    }

    case TOGGLE_DONE_TASK: {
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }

        return {
          ...task,
          completed: !task.completed,
        };
      });
    }

    default: {
      return state;
    }
  }
};
