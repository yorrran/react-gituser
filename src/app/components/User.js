import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const User = (props) => {

    let list = [];
    if(props.userrepo && props.userrepo.length > 0) {
        props.userrepo.map((repo)=>{
            list.push(<div key={repo.id}> {repo.name}</div>)
        });
    }

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h1>The User Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <div><strong>Repos:</strong></div>
                    {list}
                </div>
                <div className="col-12 col-sm-6">
                    <div><strong>Followers:</strong> {props.follower.followers}</div>
                    <div><strong>Followings:</strong> {props.follower.following}</div>
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