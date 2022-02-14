import AboutUs from './about.us';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {getAboutUs} from './../../view.updater/actions/raj.yoga.medication.actions';
import {makeSelectAboutUs} from './../../view.updater/selectors/rajyoga.medications.selectors';
const mapDispatchToProps = (dispatch) => ({
  getAboutUs: () => dispatch(getAboutUs()),
});

const mapStateToProps = createStructuredSelector({
  aboutUs: makeSelectAboutUs(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(AboutUs);
