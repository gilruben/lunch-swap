import {UPDATE_LOCATION} from '../actions/location-actions';

const defaultState = {location: null}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case UPDATE_LOCATION:
      return state
    default:
      return state;
  }
}

export default reducer;
