import { createSelector } from 'reselect';

const selectTest = (state) => state.get('appReducer');

const makeSelectTest = () => createSelector(
    selectTest,
    (selectTest) => selectTest.get('appTestReducer')
);
const makeSelectUsers = () => createSelector(
    selectTest,
    (selectTest) => selectTest.get("users")
)
const makeSelectUsersLoading = () => createSelector(
    selectTest,
    (selectTest) => selectTest.get("usersIsLoading")
)
const makeSelectUsersError = () => createSelector(
    selectTest,
    (selectTest) => selectTest.get("usersError")
)

export {
    makeSelectUsers,
    makeSelectUsersLoading,
    makeSelectUsersError,
    makeSelectTest
}

