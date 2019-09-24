import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchLeagueListAPI from '../fetchApi/fetchLeague';
import { getLeagueList, getLeagueListPending, getLeagueListError } from '../reducer/reducer'
import '../App.css';
import LiveStreamButton from './LiveStreamButton';
import LiveBroadCast from '../components/LiveBroadCast';
import LiveStream from '../components/LiveStream';
import MiniGame from '../components/MiniGame';
import TransformURL from '../router/TransformURL';
import { BrowserRouter as Router , Route , Link } from "react-router-dom";
class App extends Component {
  componentDidMount() {
    this.props.fetchListLeague();
  }

  render() {
    const { leagueList, error, pending } = this.props;
    return (
      <div id="header" className="header">
        <div className="header-content">
          <div className="container text-center">
          <Router>
            <LiveStreamButton></LiveStreamButton>
            <TransformURL></TransformURL>
          </Router>
          </div>
        </div>
      </div>
      )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    error: getLeagueListError(state),
    pending: getLeagueListPending(state),
    leagueList: getLeagueList(state)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchListLeague: () => {
      dispatch(fetchLeagueListAPI())
    }
  }
}
// const mapDispatchToProps = dispatch => bindActionCreators({
//   fetchProducts: fetchLeagueList
// }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
