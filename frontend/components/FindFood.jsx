import React from 'react';
import Map from './Map.jsx';

const FindFood = React.createClass ({
  getInitialState() {
    return {lat: null, lng: null}
  },
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.updatePosition)
  },
  updatePosition(position) {
    console.log('Lat: ' + position.coords.latitude + ' Lon: ' + position.coords.longitude);
    this.setState({lat: position.coords.latitude, lng: position.coords.longitude})
  },
  render() {
    let lat = this.state.lat;
    let lng = this.state.lng;

    navigator.geolocation.watchPosition(this.updatePosition)
    return (
      (lat && lng) ? <Map lat={this.state.lat} lng={this.state.lng}/> : null
    )
  }
})

export default FindFood;
