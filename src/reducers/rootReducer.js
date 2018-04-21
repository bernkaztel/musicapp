import {combineReducers} from 'redux';
import mainReducer from './mainReducer'
import {firebaseStateReducer as firebase} from 'react-redux-firebase'


const rootReducer = combineReducers({
    mainReducer:mainReducer,
    firebase:  firebase

});

export default rootReducer;  