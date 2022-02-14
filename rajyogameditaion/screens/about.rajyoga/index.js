import AboutRajYoga from './about.rajyoga';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {aboutRajyoga} from './../../view.updater/actions/raj.yoga.medication.actions';
import {
  makeSelectAboutRajYoga,
  makeSelectAboutRajYogaError,
  makeSelectAboutRajYogaLoading,
} from './../../view.updater/selectors/rajyoga.medications.selectors';
const mapDispatchToProps = (dispatch) => ({
  aboutRajyoga: () => dispatch(aboutRajyoga()),
});

const mapStateToProps = createStructuredSelector({
  aboutRajYogaList: makeSelectAboutRajYoga(),
  aboutRajYogaIsLoading: makeSelectAboutRajYogaLoading(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(AboutRajYoga);
