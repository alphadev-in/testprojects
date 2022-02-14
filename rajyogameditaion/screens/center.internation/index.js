import CenterInternational from './center.internation';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
// import { login } from './../../view.updater/actions/auth.actions';
// import {makeSelectAuth,makeSelectAuthLoading,makeSelectAuthError} from './../../view.updater/selectors/auth.selectors';

const mapDispatchToProps = dispatch => ({
  // login: (data) => dispatch(login(data)),
});

const mapStateToProps = createStructuredSelector({
  // auth : makeSelectAuth(),
  // authLoading : makeSelectAuthLoading(),
  // authError : makeSelectAuthError()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(CenterInternational);
