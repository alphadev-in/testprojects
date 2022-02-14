import Feedback from "./feedback";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { postContact } from "./../../view.updater/actions/raj.yoga.medication.actions";
// import {makeSelectAuth,makeSelectAuthLoading,makeSelectAuthError} from './../../view.updater/selectors/auth.selectors';
import { makeSelectPostContact } from "./../../view.updater/selectors/rajyoga.medications.selectors";
const mapDispatchToProps = (dispatch) => ({
  postContact: (data) => dispatch(postContact(data)),
});

const mapStateToProps = createStructuredSelector({
  // auth : makeSelectAuth(),
  // authLoading : makeSelectAuthLoading(),
  // authError : makeSelectAuthError()
  contactResult: makeSelectPostContact(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Feedback);
