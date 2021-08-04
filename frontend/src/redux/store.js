import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// 1-Create an object of the reducers
const reducer = combineReducers({

});

// 2-Create an array od the middlewares
const middleware = [thunk];

// 3-Create store using createStore method from redux
const store = createStore(
    reducer,
    //spread the middleware to allow add more middleware
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store


