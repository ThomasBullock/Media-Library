// Reducers, for short are pure functions that accept the state tree and an action object from the store and returns a new state. 
// No state mutation. No API calls. No side effects. 
// It simply calculates the new state and returns it to the store.

import { combineReducers } from 'redux';
import images from './imageReducer';
import videos from './videoReducer';

const rootReducer = combineReducers({
	images,
	videos
});

export default rootReducer;

// We import combineReducers from Redux. CombineReducers is a helper function that combines our 
// images and videos reducers into a single reducer function that we can now pass to the creatorStore function.