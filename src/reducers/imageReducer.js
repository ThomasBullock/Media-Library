import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles image related actions
export default function(state = initialState.images, action) {
	switch (action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return [...state, action.images];		
		case types.SELECTED_IMAGE:
			return { ...state, selectedImage: action.image };
		default: 
			return state;
  }
}

// create-react-app comes preinstalled with babel-plugin-transform-object-rest-spread that lets you use 
// the spread (…) operator to copy enumerable properties from one object to another in a succinct way.
// For context, { …state, videos: action.videos } evaluates to Object.assign({}, state, action.videos).