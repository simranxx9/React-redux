import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore' // <- needed if using firestore
import todoReducer from './todoReducer';
import authReducer from './authReducer'



// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,// <- needed if using firestore
    todo:todoReducer ,
    auth:authReducer
  })


export default rootReducer;