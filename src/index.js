import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// for redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const firstReducerInitialState = {};

// the reducer for storing TBD
const firstReducer = ( state = firstReducerInitialState, action ) => {
    console.log( 'in firstReducer', state, action.payload );
    if (action.type === "feeling") {
        console.log( 'feeling', action.payload );
        return {...state, feeling: action.payload};
    } else if (action.type === "understand") {
        console.log( 'understand', action.payload );
        return { ...state, understand: action.payload };
    } else if (action.type === "support") {
        console.log( 'support', action.payload );
        return { ...state, support: action.payload };
    } else if (action.type === "comments") {
        console.log( 'comments', action.payload );
        return { ...state, comments: action.payload };
    }
    return state;
} // end firstReducer

// create a storage space for redux data, tell it to use our reducer
const myStore = createStore( firstReducer );

ReactDOM.render(
<Provider store={ myStore }>
    <App />
</Provider>, 
document.getElementById('root')
);

registerServiceWorker();
