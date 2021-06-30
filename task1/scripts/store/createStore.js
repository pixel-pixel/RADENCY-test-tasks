import {INIT, UPDATE} from "./actionTypes.js";

function createStore(rootReduser, initialState) {
  let state = rootReduser(initialState, {type: INIT})
  const subscribers = []

  return {
    dispatch(action){
      state = rootReduser(state, action)
      subscribers.forEach(el => el())
    },
    subscribe(callback){
      subscribers.push(callback)
      this.dispatch({type: UPDATE})
    },
    getState() {
      return state
    }
  }
}

export default createStore