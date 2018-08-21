import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom"

import App from "./containers/App";
import User from "./components/User";
import store from "./store";

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/user' exact component={User} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    window.document.getElementById('app'));