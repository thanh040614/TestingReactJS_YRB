import reducerListLeague from '../reducer/reducer';
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk";
var redux = require('redux');
var store = redux.createStore(reducerListLeague,applyMiddleware(thunk));
store.subscribe(()=>{
    console.log(JSON.stringify(store.getState()));
    
})
export default store;
