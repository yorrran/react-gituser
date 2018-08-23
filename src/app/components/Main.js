import React from "react";
import { connect } from "react-redux";
import { setName } from "../actions/userActions";
import { fetchRepos } from "../actions/fetchRepos";
import { setIsloading } from "../actions/isloadingActions";
import RepoListElement from '../components/RepoListElement'

class Main extends React.Component {
    constructor(props) {
        super(props);
        
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange = () => event => {
        this.props.setIsloading(true);
        this.props.setName(this.refs.userInput.value);
        this.props.fetchRepos(this.refs.userInput.value, this.props.page)
    }

    render() {
        let loadingIcon = (<img src="./../assets/loading.png" className="loading" />);
        return (
            <div className='row mt-4 justify-content-md-center'>
                <div className='col-12 col-sm-6'>
                    <div className="input-group">
                        <input ref="userInput"
                            className="form-control mr-2" 
                            placeholder="Enter a Github User's name"
                            type='text'/>
                        <span className="input-group-btn">
                            <button className='btn btn-primary' onClick={this.onInputChange()}>Search User</button>
                        </span>
                    </div>
                </div>
                <div className='col-12'>
                    <h4>List of available repositories:</h4>
                    <p>(click on any repo to visit on GitHub)</p>
                    {this.props.isLoading ? loadingIcon : null}
                    <RepoListElement repos={this.props.repos} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        repos: state.repo,
        page: state.page,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        fetchRepos: (user,page) => {
            if(user){
                dispatch(fetchRepos(user, page));
            }  
        },
        setIsloading(flag) {
            dispatch(setIsloading(flag));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
