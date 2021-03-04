import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  TOGGLE_DONE_TASK,
} from "../actionTypes.js";

const initialState = {
  tasks: {
    id: 1,
    username: "Alex",
    email: "alex@mail.ru",
    text: "write new book about marketing",
    completed: false,
  },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { id, username, email, text } = action.payload;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id, username, email, text, completed: false },
        ],
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }

    case EDIT_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }

          return {
            ...task,
            text: action.payload.content,
          };
        }),
      };
    }

    case TOGGLE_DONE_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }

          return {
            ...task,
            compleled: !task.completed,
          };
        }),
      };
    }

    default: {
      return state;
    }
  }
};
