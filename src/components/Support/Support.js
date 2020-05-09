import React, { Component } from 'react';

class Support extends Component {

    state = {
        support: ''
    }

    componentDidMount() {
        console.log('in support', this.props);
    } 

    handleChange = (event) => {
        console.log('in handleChange', event.target.value);
        this.setState({
            support: event.target.value
        }) // end setState
    } // end handleChange

    handleClick = () => {
        console.log( 'in handleClick' );
        this.props.dispatch({ type: 'support', payload: this.state.support })
        this.props.history.push( '/comments' );
    } // end handleClick
    
    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <select id="support" required onChange={this.handleChange}>
                    <option value="">--Support?--</option>
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

export default Support;