import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ToReview from '../ToReview/ToReview';
import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <HashRouter>
          <Route exact path='/' render={ (props) => <Feeling {...props} dispatch={ this.props.dispatch } /> }/>
          <Route path='/understanding' render={(props) => <Understanding {...props} dispatch={this.props.dispatch} />} />
          <Route path='/support' render={(props) => <Support {...props} dispatch={this.props.dispatch} />} />
          <Route path='/comments' render={(props) => <Comments {...props} dispatch={this.props.dispatch} />} />
          <Route path='/review' render={(props) => <ToReview {...props} dispatch={this.props.dispatch} />} />
        </HashRouter>
      </div>
    ); // end return
  } // end renter
} // end class

const reduxStateToProps = ( reduxState ) => ( { reduxState} );

export default connect( reduxStateToProps ) (App);