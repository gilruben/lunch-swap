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

  dispatch(update_map({pos}));
}
