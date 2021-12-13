import { createStore } from 'redux';
import rotateReducer from './Reducers/reducer';

const configStore = (state = {rotating:false, testAction:5})  => {
    return createStore(
        rotateReducer, 
        state, 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        )
} 

export default configStore;