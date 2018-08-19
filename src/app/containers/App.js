import React from "react";
import { connect } from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import { setName } from "../actions/userActions";
import { fetchRepos } from "../actions/fetchRepos";
import RepoListElement from '../components/RepoListElement'

class App extends React.Component {
    onInputChange = () => event => {
        this.props.fetchRepos(event.target.value);
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")} />
                <User username={this.props.user.name} />
                <div className='search-bar'>
                    <input
                        placeholder="Enter a Github User's name"
                        onChange={this.onInputChange()}
                        type='text'
                    />
                </div>
                <div className='repo-list'>
                    <h4>List of available repositories:</h4>
                    <p>(click on any repo to visit on GitHub)</p>
                    <ul>
                        {/* <RepoListElement repos={this.props.repos} /> */}
                        <script>Console.log("this repo");</script>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        fetchRepos: (user) => {
            var repo = dispatch(fetchRepos(user));
            repo;
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
