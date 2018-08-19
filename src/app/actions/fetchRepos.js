import axios from 'axios'

const API_URL = 'https://api.github.com/users'

export function fetchRepos(user) {
    const request = axios.get(`${API_URL}/${user}/repos`)
        .catch(err => { return err.message })
    return {
        type: FETCH_REPOS,
        payload: request
    }
}