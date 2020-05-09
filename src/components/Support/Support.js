import React, { Component } from 'react';
import Comments from '../Comments/Comments';

class Support extends Component {

    handleClick = () => {
        console.log( 'in handleClick' );
    } // end handleClick
    
    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <select name="support" required>
                    <option value="" disabled selected hidden>Support?</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                    <option value="0">0</option>
                </select>
                <button onClick={this.handleClick}>NEXT</button>
                <Comments />
            </div>
        ); // end return
    } // end render
} // end class

export default Support;