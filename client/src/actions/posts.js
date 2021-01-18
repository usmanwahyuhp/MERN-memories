import * as api from '../api';

//Action Creator : is a function that return an action and an action is just an object that has a type and payload, with redux thunk since we'll be dealing  with asynchronous we need to add dispatch function in front of it and then instead returning an action we have to dspatch it
const getPosts = () => {
    const action = { type: 'FETCH_ALL', payload: [] }

    return action;
}