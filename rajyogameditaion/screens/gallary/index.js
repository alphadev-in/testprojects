import Gallary from './gallary';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {getGallery} from './../../view.updater/actions/raj.yoga.medication.actions';
import {makeSelectGallery} from './../../view.updater/selectors/rajyoga.medications.selectors';
const mapDispatchToProps = (dispatch) => ({
  getGallery: () => dispatch(getGallery()),
});

const mapStateToProps = createStructuredSelector({
  gallary: makeSelectGallery(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Gallary);
