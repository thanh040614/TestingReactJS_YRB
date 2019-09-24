import React, { Component } from 'react';

class LiveStream extends Component {
    render() {
        return (
            <div className="stream"><img src={require('../images/stream.jpg')} /></div>
        );
    }
}

export default LiveStream;