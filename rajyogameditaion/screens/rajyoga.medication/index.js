import RajyogaMedication from './rajyoga.medication';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
// import { login } from './../../view.updater/actions/auth.actions';
// import {makeSelectAuth,makeSelectAuthLoading,makeSelectAuthError} from './../../view.updater/selectors/auth.selectors';
import {
  getVideos,
  getHomeImages,
} from './../../view.updater/actions/raj.yoga.medication.actions';
import {
  makeSelectVideos,
  makeSelectGridImages,
} from './../../view.updater/selectors/rajyoga.medications.selectors';

const mapDispatchToProps = dispatch => ({
  // login: (data) => dispatch(login(data)),
  getVideos: () => dispatch(getVideos()),
  getHomeImages: () => dispatch(getHomeImages()),
});

const mapStateToProps = createStructuredSelector({
  // auth : makeSelectAuth(),
  // authLoading : makeSelectAuthLoading(),
  // authError : makeSelectAuthError()

  videos: makeSelectVideos(),
  homeImages: makeSelectGridImages(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(RajyogaMedication);
