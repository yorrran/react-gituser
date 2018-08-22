const repoReducer = (state = {}, action) => {
  switch (action.type) {
      case "FETCH_REPOS_FULFILLED":
        return action.payload.data;
      break;
      default:
        return state;
  }
};

export default repoReducer;