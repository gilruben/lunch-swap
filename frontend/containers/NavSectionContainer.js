import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavSection from '../components/NavSection';
import {logoutAsync} from '../actions/logout-actions';

//Allows Users to logout by sending the dispacthing of logoutAsync to the props
//of the NavSection component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logout: logoutAsync}, dispatch)
}

export default connect(null, mapDispatchToProps)(NavSection)
