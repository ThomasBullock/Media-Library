import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas'; // TODO: Next step

//  Returns the store instance
// It can  also take initialState argument when provided
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware(); 
  return {
    ...createStore(rootReducer,
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;

// The Store holds the whole state tree of our application but more importantly, it does nothing to it. 
// When an action is dispatched from a React component, it delegates the reducer but passing the current 
// state tree alongside the action object. 
// It only updates its state after the reducer returns a new state.