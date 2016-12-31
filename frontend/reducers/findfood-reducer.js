import {UPDATE_MAP} from '../actions/findfood-actions';

const defaultState = {map: null, userMarker: null, nearbyUsers: []};

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case UPDATE_MAP:

      let pos = action.data.pos;

      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: pos,
        mapTypeId: 'terrain',
        noClear: true
      });

      let userMarker = new google.maps.Marker({
        position: pos,
        map: map
      });


      //for updating position when user is moving
      // map.setCenter(pos);
      // userMarker.setPosition(pos);
      // console.log(pos);

      return Object.assign({}, state, {map, userMarker});
    default:
      return state;
  }
}

export default reducer
