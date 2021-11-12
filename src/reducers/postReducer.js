// Step 3: Setup Reducer for the store

import { ADD_POST, GET_POSTS } from "../actions/types";

/*
  What's a Reducer?
    It is a function that takes the current state and 
    an action that was dispatched as it’s parameters and returns the new state.

*/

const postReducer = (state = [], action) => { // action can have type and payload 
  // Step 8: to have better switch case statement with much more scalable code by using the action types 
  switch (action.type) {
    case ADD_POST:
      // updating state immutably
      let newState = [
        ...state,
        action.payload
      ];
      return newState;

    case GET_POSTS:
      return [];

    default:
      return state;
  }
}

export default postReducer;