import React, { Component } from 'react';

class Review extends Component {

    handleClick = () => {
        console.log('in handleClick');
        this.props.history.push('/thanks');
    } // end handleClick

    render() {
        let review = this.props.reduxState;
        return (
            <div>
                <h1>Review Your Feedback</h1>
                {/* <p>{JSON.stringify(this.props.reduxState)}</p> */}
                <p>Feelings: {review.feeling}</p>
                <p>Understanding: {review.understand}</p>
                <p>Support: {review.support}</p>
                <p>Comments: {review.comments}</p>
                <button onClick={this.handleClick}>SUBMIT</button>
            </div>
        ); // end return
    } // end render
} // end class

export default Review;