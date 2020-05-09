import React, { Component } from 'react';

class Feeling extends Component {

    state = {
        feeling: ''
    }

    componentDidMount() {
        console.log('in feeling', this.props);
    } 
  
    handleChange = (event) => {
        console.log( 'in handleChange', event.target.value );
        this.setState({
            feeling: event.target.value
        }) // end setState
    } // end handleChange

    handleClick = () =>{
        console.log( 'in handleClick' );
        this.props.dispatch( { type: 'feeling', payload: this.state.feeling } )
        this.props.history.push( '/understanding' );
  } // end handleClick

    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <select id="feeling" required onChange={this.handleChange}>
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