import React, { Component } from 'react';

class Support extends Component {

    state = {
        value: ''
    }

    componentDidMount() {
        console.log( 'in support', this.props );
    } 

    handleChange = (event) => {
        console.log( 'in handleChange', event.target.value );
        this.setState({
            value: event.target.value
        }) // end setState
    } // end handleChange

    handleClick = () => {
        console.log( 'in handleClick' );
        if (this.state.value === '') {
            alert('a response is required');
        } else if (this.state.value > 0) {
            this.props.dispatch( { type: 'support', payload: this.state.value } )
            this.props.history.push( '/comments' );
        }
    } // end handleClick
    
    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <select id="support" required onChange={this.handleChange}>
                    <option value="">--Support?--</option>
                    <option value="5">5 Extremely supported</option>
                    <option value="4">4 Very supported</option>
                    <option value="3">3 Moderately supported</option>
                    <option value="2">2 Slightly supported</option>
                    <option value="1">1 Not supported</option>
                </select>
                <button onClick={this.handleClick}>NEXT</button>
            </div>
        ); // end return
    } // end render
} // end class

export default Support;