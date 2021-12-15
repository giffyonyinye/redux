import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rotateReducer from "./Reducers/reducer";
import {rootSaga} from './rootSaga';

const configStore = (state = {rotating:false, testAction:5})  => {
    const sagaMiddleware = createSagaMiddleware();
    const allMiddlewares = applyMiddleware(sagaMiddleware);
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store =  createStore(
        rotateReducer, 
        state, 
        composeEnhancer(allMiddlewares)
        )
        sagaMiddleware.run(rootSaga);
        return store
} 

export default configStore;