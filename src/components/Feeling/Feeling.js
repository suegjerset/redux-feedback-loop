import React, { Component } from 'react';
import Understanding from '../Understanding/Understanding';

class Feeling extends Component {

    componentDidMount() {
        console.log('in feeling', this.props);
    } 
  
    handleClick = () =>{
        console.log( 'in handleClick' );
        this.props.history.push( '/understanding' );
  } // end handleClick
    
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <select name="feeling" required>
                    <option value="">--Feeling?--</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                    <option value="0">0</option>
                </select>
                <button onClick={this.handleClick}>NEXT</button>
            </div>
        ); // end return
    } // end render
} // end class

export default Feeling;