import React, { Component } from 'react';

class Understanding extends Component {

    state = {
        value: ''
    }

    componentDidMount() {
        console.log( 'in understanding', this.props );
    } 
    
    handleChange = (event) => {
        console.log( 'in handleChange', event.target.value );
        this.setState({
            value: event.target.value
        }) // end setState
    } // end handleChange

    handleClick = () => {
        console.log( 'in handleClick' );
        this.props.dispatch( { type: 'understanding', payload: this.state.value } )
        this.props.history.push( '/support' );
    } // end handleClick

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <select id="understanding" required onChange={this.handleChange}> 
                    <option value="">--Understanding?--</option>
                    <option value="5">5 Extremely well</option>
                    <option value="4">4 Very well</option>
                    <option value="3">3 Moderately well</option>
                    <option value="2">2 Slightly well</option>
                    <option value="1">1 Not well at all</option>
                </select>
                <button onClick={this.handleClick}>NEXT</button>
            </div>
        ); // end return
    } // end render
} // end class

export default Understanding;