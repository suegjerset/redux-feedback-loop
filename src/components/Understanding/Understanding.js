import React, { Component } from 'react';

class Understanding extends Component {

    state = {
        understand: ''
    }

    componentDidMount() {
        console.log('in understanding', this.props);
    } 
    
    handleChange = (event) => {
        console.log('in handleChange', event.target.value);
        this.setState({
            understand: event.target.value
        }) // end setState
    } // end handleChange

    handleClick = () => {
        console.log( 'in handleClick' );
        this.props.dispatch({ type: 'understand', payload: this.state.understand })
        this.props.history.push('/support');
    } // end handleClick

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <select id="understand" required onChange={this.handleChange}> 
                    <option value="">--Understanding?--</option>
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

export default Understanding;