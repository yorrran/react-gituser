const followerReducer = (state = {}, action) => {
  switch (action.type) {
      case "FETCH_FOLLOWERS_FULFILLED":
        return action.payload.data;
      break;
      default:
        return state;
  }
};

export default followerReducer;