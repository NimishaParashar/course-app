import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import coursesReducer from "../reducers/coursesReducer";
import exprertsReducer from "../reducers/exprertsReducer";
import chaptersReducer from "../reducers/chaptersReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      courses: coursesReducer,
      experts: exprertsReducer,
      chapters: chaptersReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
