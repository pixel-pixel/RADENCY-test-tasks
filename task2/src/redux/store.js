import {createStore} from 'redux'
import rootReduser from "./rootReduser.js";
import initialState from "./initialState.js";

const store = createStore(rootReduser, initialState)

export default store