import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LunchListItem from '../components/LunchListItem';
import {getNearbyUsersAsync} from '../actions/findfood-actions';

const LunchListContainer = React.createClass({
  componentDidMount(){
    this.props.getNearbyUsers();
  },
  render(){
    let nearbyUsers = this.props.nearbyUsers;

    return (
      <div id={`${this.props.id}-container`}>
        <ul id={this.props.id}>
          {
            nearbyUsers.map((lunch, indx) => {
              return <li key={indx}><LunchListItem lunch={lunch} /></li>
            })
          }
        </ul>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {nearbyUsers: state.findFood.nearbyUsers}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getNearbyUsers: getNearbyUsersAsync}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LunchListContainer)
