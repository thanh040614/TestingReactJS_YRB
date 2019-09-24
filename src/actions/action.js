export const FETCH_LEAGUE_LIST_PENDING = 'FETCH_LEAGUE_LIST_PENDING';
export const FETCH_LEAGUE_LIST_SUCCESS = 'FETCH_LEAGUE_LIST_SUCCESS';
export const FETCH_LEAGUE_LIST_ERROR = 'FETCH_LEAGUE_LIST_ERROR';

export const fetchLeagueListsPending = () => {
    return {
        type: FETCH_LEAGUE_LIST_PENDING
    }
}

export const fetchLeagueListsSuccess = (listLeague) => {
    return {
        type: FETCH_LEAGUE_LIST_SUCCESS,
        listLeague: listLeague
    }
}

export const fetchLeagueListsError = (error) =>  {
    return {
        type: FETCH_LEAGUE_LIST_ERROR,
        error: error
    }
}
