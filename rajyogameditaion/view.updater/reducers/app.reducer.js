import Immutable from 'immutable';
import { APP_TEST_ACTION } from './../actions/app.actions';
import { GET_ALL_USERS, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR } from './../actions/app.actions'

const initialState = Immutable.fromJS({
    appTestReducer: false,
    users: Immutable.List([]),
    usersIsLoading: false,
    usersError: false
});

function appReducer(state = initialState, action) {
    switch (action.type) {
        case APP_TEST_ACTION:
            return state.set("appTestReducer", !state.get("appTestReducer"))
        case GET_ALL_USERS:
            return state
                .set('usersIsLoading', true)
                .set('usersError', false)
                .set("usersIsLoading", true)
        case GET_ALL_USERS_SUCCESS:
            return state
                .set('usersIsLoading', false)
                .set('usersError', false)
                .set("users", action.response)
        case GET_ALL_USERS_ERROR:
            return state
                .set('usersIsLoading', false)
                .set('usersError', true)
        default:
            return state;
    }
}

export default appReducer