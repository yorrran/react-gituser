import React from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUserRepos, fetchUserFollowers,fetchRepos } from "../actions/fetchRepos";
import { pageRepo} from "../actions/paginatedRepo";
import { setIsloading } from "../actions/isloadingActions";

class RepoListElement extends React.Component { 
    constructor(props) {
        super(props);
        this.onNaviageUser = this.onNaviageUser.bind(this);
		this.checkNumber = this.checkNumber.bind(this);
	}
	onNaviageUser (id) {
		this.props.history.push('/user/')
		this.props.fetchUserRepos(id)
		this.props.fetchUserFollowers(id)
	}
	checkNumber (pageno) {
		// According to github, only the first 1000 search results are available
		// See https://developer.github.com/v3/search/ for details
		if(pageno > 33) {
			pageno = 33;
		}
		this.props.repos.items.length = 0;
		this.props.setIsloading(true);
		this.props.pageRepo(pageno);
		this.props.fetchRepos(this.props.user, pageno);
	}
	componentDidUpdate() {
		if (this.props.repos.items && this.props.repos.items.length > 0) {
			this.props.setIsloading(false);
		}
	}
	render() {
		if (this.props.repos.items && this.props.repos.items.length > 0) {
    
			let paginatedlist = [];
			let tempTotalPage = Math.ceil(this.props.repos.total_count / 30);
			let totalPages = tempTotalPage < 34 ? tempTotalPage : 34;
			for (var i = 1; i <= totalPages; i++) {
				if(i > this.props.page - 5 && i < this.props.page + 5 && i < 34){
					paginatedlist.push(i);
				}
			}
			
			const renderPageNumbers = paginatedlist.map(number => {
				this.number = number;
				return (
					<li className={this.props.page === number ? "active" : ""} key={number} id={number} onClick={() => this.checkNumber(number)}>
						{number}
					</li>
			  	);
			});
		
			const prevOne = (
				<li onClick={() => this.checkNumber(this.props.page - 1)}>&lt;</li>
			);
			const prevEnd = (
				<li onClick={() => this.checkNumber(1)}>|&lt;</li>
			);
			const nextOne = (
				<li onClick={() => this.checkNumber(this.props.page + 1)}>&gt;</li>
			);
			const nextEnd = (
				<li onClick={() => this.checkNumber(totalPages - 1)}>&gt;|</li>
			);

			const listItem = this.props.repos.items.map(repo => {
				return (
					<div key={repo.id} className='col-12 col-sm-6 col-md-4 mt-4'>
						<div className="card" style={{width: '18rem'}}>
							<img className="card-img-top" src={repo.avatar_url} alt={`${repo.login} avatar`} />
							<div className="card-body">
								<h4 className="card-title">
									{repo.login}
									<a className='btn btn-primary btn-sm text-white float-right' onClick={() => this.onNaviageUser(repo.id)}> Detail</a>
								</h4>
							</div>
						</div>
					</div>
				)
			})
			return (
				<div>
					<div>
						<ul className="pagination">
							{this.props.page === 1 ? null : prevEnd}
							{this.props.page === 1 ? null : prevOne}
							{renderPageNumbers}
							{this.props.page === totalPages - 1 ? null : nextOne}
							{this.props.page === totalPages - 1 ? null : nextEnd}
						</ul>
					</div>
					<div className="row">
						{listItem}
					</div>
				</div>
			)
		  }
		  else {
			return (
				<div>Nothing</div>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
		page: state.page,
		isLoading: state.isLoading
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
		},
		setIsloading(flag) {
			dispatch(setIsloading(flag));
		}
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RepoListElement))