import { combineReducers } from "redux";
import { filterReducer } from "./features/filterSlice";
import { formReducer } from "./features/formReducer";
import { sortReducer } from "./features/sortSlice";
import { tasksReducer } from "./features/taskSlice";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
  sort: sortReducer,
  formVisible: formReducer,
});
