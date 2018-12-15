const queriesReducerDefaultState = [];
export default (state = queriesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_QUERY":
      return [...state, action.payload].slice(0, 9);
    default:
      return state;
  }
};
