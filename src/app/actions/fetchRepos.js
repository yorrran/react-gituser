import axios from 'axios'

const API_URL = 'https://api.github.com/search/users?q='

export function fetchRepos(user,page) {
    const pageQuery = '&page='
    const request = axios.get(`${API_URL}${user}${pageQuery}${page}`)
        .catch(err => { return err.message })
    return {
        type: 'FETCH_REPOS',
        payload: request
    }
}

export function fetchUserFollowers(id) {
    const request = axios.get(`https://api.github.com/user/${id}`).catch(err =>  err.message )
    return {
        type: 'FETCH_FOLLOWERS',
        payload: request
    }
}

export function fetchUserRepos(id) {
    const request = axios.get(`https://api.github.com/user/${id}/repos`).catch(err => err.message )
    //const request = axios.get(`https://api.github.com/search/users?q=yorr`).catch(err => err.message )
    return {
        type: 'FETCH_USERREPOS',
        payload: request
    }
}