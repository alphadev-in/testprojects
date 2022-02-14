import ContactUs from './contact.us';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {getContact} from './../../view.updater/actions/raj.yoga.medication.actions';
import {makeSelectContact} from './../../view.updater/selectors/rajyoga.medications.selectors';

const mapDispatchToProps = (dispatch) => ({
  // login: (data) => dispatch(login(data)),
  getContact: () => dispatch(getContact()),
});

const mapStateToProps = createStructuredSelector({
  contact: makeSelectContact(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ContactUs);
