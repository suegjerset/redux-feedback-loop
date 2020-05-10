import React, { Component } from 'react';

class Comments extends Component {

    state = {
        comments: ''
    }

    componentDidMount() {
        console.log( 'in comments', this.props );
    } 

    handleChange = (event) => {
        console.log( 'in handleChange', event.target.value );
        this.setState({
            comments: event.target.value
        }) // end setState
    } // end handleChange

    handleClick = () => {
        console.log( 'in handleClick' );
        this.props.dispatch({ type: 'comments', payload: this.state.comments } )
        this.props.history.push ( '/review' );
    } // end handleClick

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <p>Comments</p>
                <input type="text" placeholder="Comments" onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>NEXT</button>
            </div>
        ); // end return
    } // end render
} // end class

export default Comments;