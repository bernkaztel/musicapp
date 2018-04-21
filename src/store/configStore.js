import { createReadStream } from "fs";
import rootReducer from "../reducers/rootReducer";
import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import firebase from 'firebase';

//get config from firebase
const firebaseConfig = {
    apiKey: 'AIzaSyAQXwpsinfFUQCUtSXp9IbWRxgTUH8Q4KQ',
    authDomain: 'fir-try-4857b.firebaseapp.com',
    databaseURL: 'https://fir-try-4857b.firebaseio.com/'
   };


// react-redux-firebase config
const rrfConfig = {
  userProfile: "users"
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  // reduxFirestore(firebase) // <- needed if using firestore
)(createStore)

const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)





export default store;
