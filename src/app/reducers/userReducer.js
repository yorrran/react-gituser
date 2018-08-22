const userReducer = (state = "", action) => {
    switch (action.type) {
        case "SET_NAME":
            return action.payload;
            break;
        default:
    return state;
    }
};

export default userReducer;