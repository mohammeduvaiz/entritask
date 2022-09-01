import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { newsListReducer } from './reducers/newsReducer'


const reducers = combineReducers({
    newsReducer: newsListReducer
});

const middleware = [thunk]


const store = createStore(reducers, applyMiddleware(...middleware));

export default store
