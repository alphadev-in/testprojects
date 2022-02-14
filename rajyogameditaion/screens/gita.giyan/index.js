import GitaGayan from "./gita.gaya";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { getGitaGyan } from "./../../view.updater/actions/raj.yoga.medication.actions";
import { makeSelectGitaGayan } from "./../../view.updater/selectors/rajyoga.medications.selectors";
const mapDispatchToProps = (dispatch) => ({
  getGitaGyan: () => dispatch(getGitaGyan()),
});

const mapStateToProps = createStructuredSelector({
  gitaGayan: makeSelectGitaGayan(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(GitaGayan);
