import React, { Component } from 'react';
import Review from '../Review/Review';

class Comments extends Component {

    handleClick = () => {
        console.log( 'in handleClick' );
    } // end handleClick

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <p>Comments</p>
                <input type="text" placeholder="Comments"></input>
                <button onClick={this.handleClick}>NEXT</button>
                <Review />
            </div>
        ); // end return
    } // end render
} // end class

export default Comments;