import React from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUserRepos, fetchUserFollowers } from "../actions/fetchRepos";

const onNaviageUser = function (repo) {
  console.log("var", this);
  this.$history.push('/user/')
  this.$props.fetchUserRepos(this.id)
  this.$props.fetchUserFollowers(this.id)
}

const RepoListElement = (props) => {
  console.log("props history:", props);

  if (props.repos.items && props.repos.items.length > 0) {
    // let pageNo = 0;
    // let itemNo = 10;
    // let paginatedList = props.repos.slice(pageNo * itemNo, (pageNo + 1) * itemNo);
    const listItem = props.repos.items.map((repo => {
      repo.$history = props.history;
      repo.$props = props;

      return (<tr
        key={repo.id}
        className='list-group-item'
      //onClick={() => window.open(repo.html_url, '_blank')}
      >
        <td>
          <img src={repo.avatar_url} alt={`${repo.login} avatar`} />
        </td>
        <td>
          <p> User:
        {repo.login ? <span className='greenText' onClick={onNaviageUser.bind(repo)}> {repo.login}</span> : <span className='redText'> Unknown </span>}
          </p>
        </td>
      </tr>
      )
    }))
    return (
      <table>
        <tbody>
          {listItem}
        </tbody>
      </table>
    )
  }
  else {
    return (
      <div>Nothing</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchUserRepos: (id) => {
          if(id) {
              dispatch(fetchUserRepos(id));
          }
      },
      fetchUserFollowers: (id) => {
        if(id) {
            dispatch(fetchUserFollowers(id));
        }
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(RepoListElement))