import {FETCH_LEAGUE_LIST_PENDING, FETCH_LEAGUE_LIST_SUCCESS, FETCH_LEAGUE_LIST_ERROR} from '../actions/action';
const initialState = {
    pending: false,
    leagueList: [],
    error: null
}

const leagueListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LEAGUE_LIST_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_LEAGUE_LIST_SUCCESS:
            return {
                ...state,
                pending: false,
                leagueList: action.payload
            }
        case FETCH_LEAGUE_LIST_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getLeagueList = state => state.leagueList;
export const getLeagueListPending = state => state.pending;
export const getLeagueListError = state => state.error;
export default leagueListReducer;