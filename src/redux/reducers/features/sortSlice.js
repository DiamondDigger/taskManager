import {
  SORT_IN_ASCENDING_DIRECTION,
  SORT_IN_DESCENDING_DIRECTION,
} from "../../actionTypes";

const initialState = {
  direction: "none",
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_IN_ASCENDING_DIRECTION: {
      return {
        ...state,
        direction: "ascending",
      };
    }
    case SORT_IN_DESCENDING_DIRECTION: {
      return {
        ...state,
        direction: "descending",
      };
    }

    default:
      return state;
  }
};
