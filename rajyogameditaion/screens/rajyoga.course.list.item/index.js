import RajyogaCouseListItem from './rajyoga.course.list.item';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {getRajYogaCourseList} from './../../view.updater/actions/raj.yoga.medication.actions';
import {makeSelectRajyogaCouseList} from './../../view.updater/selectors/rajyoga.medications.selectors';

const mapDispatchToProps = (dispatch) => ({
  getRajYogaCourseList: (data) => dispatch(getRajYogaCourseList(data)),
});

const mapStateToProps = createStructuredSelector({
  rajYogaCourseList: makeSelectRajyogaCouseList(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(RajyogaCouseListItem);
