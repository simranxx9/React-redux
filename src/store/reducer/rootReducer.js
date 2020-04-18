import authReducer from './authReducer';
import projectReducer from './projectReducer';

import {combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth:authReducer,   // coresponding to auth reducers
    project:projectReducer
});

export default rootReducer;