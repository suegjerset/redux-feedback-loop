import React, { Component } from 'react';

class Comments extends Component {

    componentDidMount() {
        console.log('in comments', this.props);
    } 

    handleClick = () => {
        console.log( 'in handleClick' );
        this.props.history.push ('/review' );
    } // end handleClick

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <p>Comments</p>
                <input type="text" placeholder="Comments"></input>
                <button onClick={this.handleClick}>NEXT</button>
            </div>
        ); // end return
    } // end render
} // end class

export default Comments;