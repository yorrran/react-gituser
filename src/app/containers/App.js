import React from "react";
import { connect } from "react-redux";

import User from "../components/User";
import { Main } from "../components/Main";
import { setName } from "../actions/userActions";
import { fetchRepos } from "../actions/fetchRepos";
import RepoListElement from '../components/RepoListElement'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange = () => event => {
       console.log(this.refs.userInput.value);
       this.props.fetchRepos(this.refs.userInput.value)
    }

    render() {
        return (
            <div className="container">
                {/* <User username={this.props.user.name} /> */}
                <div className='search-bar'>
                    <input ref = "userInput"
                        placeholder="Enter a Github User's name"
                        type='text'
                    />
                    <button style={{marginLeft: '10px'}} className = 'btn btn-primary' onClick = {this.onInputChange()}>Search User</button>
                </div>
                <div className='repo-list'>
                    <h4>List of available repositories:</h4>
                    <p>(click on any repo to visit on GitHub)</p>
                        <RepoListElement repos={this.props.repos} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math,
        repos: state.repo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        fetchRepos: (user) => {
            if(user){
                dispatch(fetchRepos(user));
            }  
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
