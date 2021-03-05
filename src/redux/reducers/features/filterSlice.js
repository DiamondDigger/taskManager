import { FILTER_BY_FIELD } from "../../actionTypes";

const initialState = {
  field: "none",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_FIELD: {
      return {
        ...state,
        field: action.payload,
      };
    }
    default:
      return state;
  }
};
