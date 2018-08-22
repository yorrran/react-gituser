const pageReducer = (state = 1, action) => {
    switch (action.type) {
        case "SELECT":
            return action.payload;
            break;
    default:
    return state;
    }
};

export default pageReducer;