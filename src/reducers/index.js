import {
    SET_MOVIES
  } from "../actions";
  
  const appReducer = (state=[], action) =>{
    switch (action.type){
      case SET_MOVIES:
        return [
          ...state,
          {
            movies: action.movies,
            completed: false
          }
        ]
     
    default:
        return state
    }
  }
  
  export default appReducer;