import createStore from "./createStore.js";
import rootReduser from "./rootReduser.js";
import initialState from "./initialState.js";

const store = createStore(rootReduser, initialState)

export default store