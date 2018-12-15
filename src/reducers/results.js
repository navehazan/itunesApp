const resultsReducerDefaultState = [];
export default (state = resultsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_RESULTS":
      return [...action.payload];
    default:
      return state;
  }
};
