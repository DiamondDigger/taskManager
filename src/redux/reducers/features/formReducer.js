import { SHOW_FORM } from "../../actionTypes";

const initialState = {
  formVisible: false,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FORM: {
      return { ...state, formVisible: !state.formVisible };
    }
    default:
      return state;
  }
};
