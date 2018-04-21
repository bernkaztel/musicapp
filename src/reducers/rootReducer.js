import {combineReducers} from 'redux';
import mainReducer from './mainReducer'
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase'


const rootReducer = combineReducers({
    mainReducer:mainReducer,
    firebase:  firebaseReducer

});

export default rootReducer;  