import React, { Component } from 'react';
import Support from '../Support/Support';

class Understanding extends Component {
    
    handleClick = () => {
        console.log( 'in handleClick' );
    } // end handleClick

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <select name="understanding" required>
                    <option value="" disabled selected hidden>Understanding?</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                    <option value="0">0</option>
                </select>
                <button onClick={this.handleClick}>NEXT</button>
                <Support />
            </div>
        ); // end return
    } // end render
} // end class

export default Understanding;