import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateMapAsync} from '../actions/findfood-actions';
import Map from '../components/Map';
import LunchListContainer from '../containers/LunchListContainer';

const FindFoodContainer = React.createClass({
  componentDidMount(){
    let updateMap = this.props.updateMap

    //gets the users current location and sends it to updateMap
    navigator.geolocation.getCurrentPosition(updateMap);
  },
  render(){
    return (
      <div>
        <div id="map-and-lunchlist">
          <Map map={this.props.findFood.map} />
          <LunchListContainer id="lunch-list"/>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {findFood: state.findFood}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateMap: updateMapAsync}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FindFoodContainer);
