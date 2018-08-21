const repoReducer = (state = {}, action) => {
  switch (action.type) {
      case "FETCH_REPOS_FULFILLED":
      case "FETCH_FOLLOWERS_FULFILLED":
      case "FETCH_USERREPOS_FULFILLED":
        return action.payload.data;
      break;
      default:
        return state;
  }
};

export default repoReducer;