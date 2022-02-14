import Medication from './medication';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {getMedication} from './../../view.updater/actions/raj.yoga.medication.actions';
import {makeSelectMedication} from './../../view.updater/selectors/rajyoga.medications.selectors';
const mapDispatchToProps = (dispatch) => ({
  getMedication: () => dispatch(getMedication()),
});

const mapStateToProps = createStructuredSelector({
  medication: makeSelectMedication(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Medication);
