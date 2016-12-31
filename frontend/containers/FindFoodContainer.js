import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateMapAsync} from '../actions/findfood-actions';
import Map from '../components/Map';

const FindFoodContainer = React.createClass({
  componentDidMount(){
    let updateMap = this.props.updateMap

    //gets the users current location and sends it to updateMap
    navigator.geolocation.getCurrentPosition(updateMap);
  },
  render(){
    return <Map map={this.props.findFood.map} />
  }
})

const mapStateToProps = (state) => {
  return {findFood: state.findFood}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateMap: updateMapAsync}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FindFoodContainer);
