import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Link } from "react-router-dom";
import LiveBroadCast from '../components/LiveBroadCast';
import LiveStream from '../components/LiveStream';
import MiniGame from '../components/MiniGame';
class TransformURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/live-broadcast/" component={LiveBroadCast} />
                <Route path="/live-stream/" component={LiveStream} />
                <Route path="/mini-game/" component={MiniGame} />
            </div>
        );
    }
}

export default TransformURL;