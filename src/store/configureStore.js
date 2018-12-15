import { createStore, combineReducers } from "redux";
import resultsReducer from "../reducers/results";
import queriesReducer from "../reducers/queries";
import isLoadingReducer from "../reducers/isLoading";
export default () =>
  createStore(
    combineReducers({
      isLoading: isLoadingReducer,
      results: resultsReducer,
      queries: queriesReducer
    })
  );
