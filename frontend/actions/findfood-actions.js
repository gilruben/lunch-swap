import $ from 'jquery';

export const UPDATE_MAP = 'UPDATE_MAP';

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
