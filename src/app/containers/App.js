import React from "react";
import Header from '../components/Header';
import { Route, Switch } from "react-router-dom"
import Main from "./../components/Main";
import User from "./../components/User";

class App extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <Header />
                    <Route path='/' exact component={Main} />
                    <Route path='/user' exact component={User} />
                </div>
            </div>
        );
    }
}

export default App;
