const repoReducer = (state = {}, action) => {
  switch (action.type) {
      case "FETCH_REPOS_FULFILLED":
      console.log("repo data:", action.payload.data);
        return action.payload.data;
      break;
      default:
        return state;
  }
};

export default repoReducer;