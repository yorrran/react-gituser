import React from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUserRepos, fetchUserFollowers,fetchRepos } from "../actions/fetchRepos";
import { pageRepo} from "../actions/paginatedRepo";

const onNaviageUser = function (repo) {
  this.$history.push('/user/')
  this.$props.fetchUserRepos(this.id)
  this.$props.fetchUserFollowers(this.id)
}
const checkNumber = function () {
  this.$props.pageRepo(this.$number);
  this.$props.fetchRepos(this.$props.user, this.$number);
}

const RepoListElement = (props) => {
  console.log("props history:", props);

  if (props.repos.items && props.repos.items.length > 0) {
    let paginatedlist = [];
    for (var i = 1; i <=Math.ceil(props.repos.total_count / 30); i++) {
      paginatedlist.push(i);
    }
    const renderPageNumbers = paginatedlist.map(number => {
      let pageRepo = {};
      pageRepo.$number = number;
      pageRepo.$props = props;
      return (
        <li key={number} id={number} onClick={checkNumber.bind(pageRepo)}>
          {number}
        </li>
      );
    });

    const listItem = props.repos.items.map((repo,index) => {
      repo.$history = props.history;
      repo.$props = props;
      //console.log("the repo index: ", index);
      //console.log("the state page: ", props.page);
        return (
          <tr
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
    })
    return (
      <table>
        <thead>
          <tr>
            <th>{renderPageNumbers}</th>
          </tr>
        </thead>
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

const mapStateToProps = (state) => {
  return {
      user: state.user,
      page: state.page

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepos: (user,page) => {
      if(user){
          dispatch(fetchRepos(user,page));
      }  
    },
    fetchUserRepos: (id) => {
      if (id) {
        dispatch(fetchUserRepos(id));
      }
    },
    fetchUserFollowers: (id) => {
      if (id) {
        dispatch(fetchUserFollowers(id));
      }
    },
    pageRepo: (number) => {
      if (number) {
        dispatch(pageRepo(number));
      }
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RepoListElement))