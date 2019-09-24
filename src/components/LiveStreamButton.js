import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Link , NavLink } from "react-router-dom";

class LiveStreamButton extends Component {
    render() {
        return (
            <div className="livestream-button">
                <NavLink to="/live-broadcast" className="nav-link js-scroll-trigger"><img src={require('../images/livestream_league_03.png')} /></NavLink>
                <NavLink to="/mini-game" className="nav-link js-scroll-trigger"><img src={require('../images/livestream_league_05.jpg')} /></NavLink>
                <NavLink to="/live-stream" className="nav-link js-scroll-trigger"><img src={require('../images/livestream_league_09.jpg')} /></NavLink>
                <NavLink to="/mini-game" className="nav-link js-scroll-trigger"><img src={require('../images/livestream_league_10.jpg')} /></NavLink>
                
          </div>
        );
    }
}

export default LiveStreamButton;