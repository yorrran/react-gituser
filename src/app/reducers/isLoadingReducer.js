const isLoadingReducer = (state = false, action) => {
    switch (action.type) {
        case "INVERT":
            return action.payload;
            break;
    default:
        return state;
    }
};

export default isLoadingReducer;