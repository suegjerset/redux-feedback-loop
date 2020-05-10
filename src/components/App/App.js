import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ToReview from '../ToReview/ToReview';
import Thanks from '../Thanks/Thanks';
import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  } 
  // testing reduxState
  // testRedux = () => {
  //   console.log(this.props.reduxState);
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          {/* testing reduxState
          <button onClick={this.testRedux}>Test Redux</button> */}
        </header>
        {/* // create routers to take user to next step in multi-part form */}
        <HashRouter>
          <Route exact path='/' render={ (props) => 
            <Feeling {...props} dispatch={ this.props.dispatch } /> }/>
          <Route path='/understanding' render={(props) => 
            <Understanding {...props} dispatch={this.props.dispatch} />} />
          <Route path='/support' render={(props) => 
            <Support {...props} dispatch={this.props.dispatch} />} />
          <Route path='/comments' render={(props) => 
            <Comments {...props} dispatch={this.props.dispatch} />} />
          <Route path='/review' render={(props) => 
            <ToReview {...props} dispatch={this.props.dispatch} reduxState={this.props.reduxState}/>} />
          <Route path='/thanks' render={(props) => <Thanks {...props} />} />
        </HashRouter>
      </div>
    ); // end return
  } // end render
} // end class

const reduxStateToProps = ( reduxState ) => ( { reduxState} );

export default connect( reduxStateToProps ) (App);