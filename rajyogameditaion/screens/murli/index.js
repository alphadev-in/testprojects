import Murli from './murli';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {getMurli} from './../../view.updater/actions/raj.yoga.medication.actions';
import {makeSelectMurli} from './../../view.updater/selectors/rajyoga.medications.selectors';

const mapDispatchToProps = (dispatch) => ({
  getMurli: () => dispatch(getMurli()),
});

const mapStateToProps = createStructuredSelector({
  murli: makeSelectMurli(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Murli);
