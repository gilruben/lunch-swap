import React from 'react';
import Map from './Map.jsx';

const FindFood = React.createClass ({
  getInitialState() {
    return {lat: null, lng: null}
  },
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(this.updatePosition)
  },
  updatePosition(position) {
    console.log('Lat: ' + position.coords.latitude + ' Lon: ' + position.coords.longitude);
    this.setState({lat: position.coords.latitude, lng: position.coords.longitude})
  },
  render() {
    navigator.geolocation.watchPosition(this.updatePosition)
    return (
      <Map lat={this.state.lat} lng={this.state.lng}/>
    )
  }
})

export default FindFood;
