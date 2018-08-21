import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const User = (props) => {

    console.log('User Detail Props', props.repos.items);

    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The User Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>User Name: {props.username}</p>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        repos: state.repo
    };
};

export default withRouter(connect(mapStateToProps)(User));