import CouseSolution from './course.solution';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {getCourseSolution} from './../../view.updater/actions/raj.yoga.medication.actions';
import {
  makeSelectCouseSolution,
  makeSelectCouseSolutionLoading,
} from './../../view.updater/selectors/rajyoga.medications.selectors';
const mapDispatchToProps = (dispatch) => ({
  getCourseSolution: () => dispatch(getCourseSolution()),
});

const mapStateToProps = createStructuredSelector({
  courseSolution: makeSelectCouseSolution(),
  courseSolutionLoading: makeSelectCouseSolutionLoading(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(CouseSolution);
