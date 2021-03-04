import {
  FILTER_BY_EMAIL,
  FILTER_BY_NAME,
  FILTER_BY_STATUS,
} from "../../actionTypes";

const initialState = {
  field: "none",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_NAME: {
      return {
        ...state,
        field: "email",
      };
    }
    case FILTER_BY_EMAIL: {
      return {
        ...state,
        field: "username",
      };
    }
    case FILTER_BY_STATUS: {
      return {
        ...state,
        field: "status",
      };
    }
    default:
      return state;
  }
};
