import {fetchLeagueListsPending,fetchLeagueListsSuccess,fetchLeagueListsError} from '../actions/action';
const fetchLeagueListAPI = () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://www.api-football.com/demo/api/v2/leagues';
    return dispatch => {
        dispatch(fetchLeagueListsPending());
        fetch(proxyUrl+url)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchLeagueListsSuccess(res));
            return res.api.leagues;
        })
        .catch(error => {
            dispatch(fetchLeagueListsError(error));
        })
    }
    
}
export default fetchLeagueListAPI;