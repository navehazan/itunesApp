const isLoadingReducerDefaultState = false;
export default (state = isLoadingReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_IS_LOADING":
      return action.payload;
    default:
      return state;
  }
};
