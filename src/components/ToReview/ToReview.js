import React, { Component } from 'react';

class Review extends Component {

    handleClick = () => {
        console.log('in handleClick');
        this.props.dispatch( {type: 'feedback'} ); 
        this.props.history.push('/thanks');
    } // end handleClick

    render() {
        let review = this.props.reduxState;
        return (
            <div>
                <h1>Review Your Feedback</h1>
                {/* <p>{JSON.stringify(this.props.reduxState)}</p> */}
                <h4>Feeling: {review.feeling}</h4>
                <h4>Understanding: {review.understanding}</h4>
                <h4>Support: {review.support}</h4>
                <h4>Comments: {review.comments}</h4>
                <button onClick={this.handleClick}>SUBMIT</button>
            </div>
        ); // end return
    } // end render
} // end class

export default Review;