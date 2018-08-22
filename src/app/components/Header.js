import React from "react";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
	}
    render() {
        return (
            <div className="row mt-2">
                <div className="col-6">
                    <div className="btn btn-success" onClick={() => this.props.history.push('/')}>Home</div>
                </div>
                <div className="col-6">
                    <h3 className="text-right">GitHub API</h3>
                </div>
            </div>
        );
    }
}

export default withRouter(Header)