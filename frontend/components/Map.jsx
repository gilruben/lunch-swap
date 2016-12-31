import React from 'react';

const Map = React.createClass({
  // getInitialState(){
  //   return {map: null}
  // },
  componentDidMount() {

    // var map = new google.maps.Map(document.getElementById('map'), {
    //   zoom: 15,
    //   center: new google.maps.LatLng(this.props.lat, this.props.lng),
    //   mapTypeId: 'terrain'
    // });
    //
    //
    // var latLng = new google.maps.LatLng(this.props.lat, this.props.lng);
    // var marker = new google.maps.Marker({
    //   position: latLng,
    //   map: map
    // });
    //
    // this.setState({map: map});
  },
  // componentWillReceiveProps(props) {
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 15,
  //     center: new google.maps.LatLng(props.lat, props.lng),
  //     mapTypeId: 'terrain'
  //   });
  //
  //   var latLng = new google.maps.LatLng(this.props.lat, this.props.lng);
  //   var marker = new google.maps.Marker({
  //     position: latLng,
  //     map: map
  //   });
  // },
  render() {
    return (
      <div>
        <div id="map"></div>
      </div>
    )
  }
})

export default Map;
