const userrepoReducer = (state = {}, action) => {
  switch (action.type) {
      case "FETCH_USERREPOS_FULFILLED":
        return action.payload.data;
      break;
      default:
        return state;
  }
};

export default userrepoReducer;