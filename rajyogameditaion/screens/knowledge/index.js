import Knowledge from './knowledge';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {getKnowLedge} from './../../view.updater/actions/raj.yoga.medication.actions';
import {makeSelectKnowledge} from './../../view.updater/selectors/rajyoga.medications.selectors';
const mapDispatchToProps = (dispatch) => ({
  getKnowLedge: () => dispatch(getKnowLedge()),
});

const mapStateToProps = createStructuredSelector({
  Knowledge: makeSelectKnowledge(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Knowledge);
