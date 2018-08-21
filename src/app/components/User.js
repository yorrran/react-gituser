import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const User = (props) => {

    console.log('User Detail Props', props.follower.followers);
    console.log('User Detail Props', props.follower.following);
    console.log('User Detail Props repo', props);
    let list = [];
    if(props.userrepo && props.userrepo.length > 0) {
        console.log('User Detail Props repo map', props.userrepo.map(repo => repo.name));
        props.userrepo.map((repo)=>{
            list.push(<li key={repo.id}> {repo.name}</li>)
        });
    }

    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The User Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>followers: {props.follower.followers}</p>
                    <p>followings: {props.follower.following}</p>
                </div>
                <div>
                    { list }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        follower: state.follower,
        userrepo: state.userrepo,

    };
};

export default withRouter(connect(mapStateToProps)(User));