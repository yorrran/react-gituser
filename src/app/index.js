import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom"

import App from "./containers/App";
import store from "./store";

import './../assets/style.scss';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={App} />
        </BrowserRouter>
    </Provider>,
    window.document.getElementById('app'));