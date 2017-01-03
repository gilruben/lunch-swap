import $ from 'jquery';

export const UPDATE_MAP = 'UPDATE_MAP';
export const GET_NEARBY_USERS = 'GET_NEARBY_USERS';

export const update_map = (data) => ({
  type: UPDATE_MAP,
  data: data
})


export const updateMapAsync = (position) => (dispatch) => {
  let pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }

  $.ajax({
    url: '/auth/updatelocation',
    type: 'POST',
    data: {location: pos}
  }).done(() => {
    dispatch(update_map({pos}));
  })

}

export const get_nearby_users = (nearbyUsers) => ({
  type: GET_NEARBY_USERS,
  data: nearbyUsers
})

export const getNearbyUsersAsync = () => (dispatch) => {
  $.ajax({
    url: '/api/lunches/near',
    type: 'GET'
  }).done((data) => {
    console.log('nearbyUsers:', data);
    dispatch(get_nearby_users(data));
  })
}
