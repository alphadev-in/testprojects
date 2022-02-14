import Share from './share';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {getContact} from './../../view.updater/actions/raj.yoga.medication.actions';
import {makeSelectContact} from './../../view.updater/selectors/rajyoga.medications.selectors';

const mapDispatchToProps = (dispatch) => ({
  getContact: () => dispatch(getContact()),
});

const mapStateToProps = createStructuredSelector({
  contact: makeSelectContact(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Share);
