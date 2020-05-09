import React, { Component } from 'react';
import Understanding from '../Understanding/Understanding';

class Feeling extends Component {
  
    handleClick = () =>{
    console.log( 'in handleClick' );
  } // end handleClick
    
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <select name="feeling" required>
                    <option value="" disabled selected hidden>Feeling?</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                    <option value="0">0</option>
                </select>
                <button onClick={this.handleClick}>NEXT</button>
                <Understanding />
            </div>
        ); // end return
    } // end render
} // end class

export default Feeling;