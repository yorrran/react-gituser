import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import user from "./reducers/userReducer";
import repo from "./reducers/user/repoReducer";
import follower from "./reducers/user/followerReducer";
import userrepo from "./reducers/user/userrepoReducer";
import page from "./reducers/pageReducer";
import isLoading from "./reducers/isLoadingReducer";

export default createStore(
    combineReducers({
        user,
        repo,
        follower,
        userrepo,
        page,
        isLoading
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);