import React, { Component } from 'react';

class Thanks extends Component {

    handleClick = () => {
        console.log('in handleClick');
        this.props.history.push('/');
    } // end handleClick

    render() {
        return (
            <div>
                <h1>Thank you for your feedback!</h1>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
        ); // end return
    } // end render
} // end class

export default Thanks;