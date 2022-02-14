import Rajyogacourse from './rajyoga.course';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {getRajYogaCouse} from './../../view.updater/actions/raj.yoga.medication.actions';
import {makeSelectRajYogaCourse} from './../../view.updater/selectors/rajyoga.medications.selectors';

const mapDispatchToProps = (dispatch) => ({
  getRajYogaCouse: (data) => dispatch(getRajYogaCouse(data)),
});

const mapStateToProps = createStructuredSelector({
  rajYogaCourses: makeSelectRajYogaCourse(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Rajyogacourse);
