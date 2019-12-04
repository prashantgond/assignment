import { createStore, applyMiddleware,combineReducers } from 'redux';
import starWarReducer from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    starWarReducer
});

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;