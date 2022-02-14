export const APP_TEST_ACTION = "APP_TEST_ACTION";
export const ADD_UPDATE_APP_LOADERS_STATUS = "ADD_UPDATE_APP_LOADERS_STATUS";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_ERROR = "GET_ALL_USERS_ERROR";

export function addUpdateAppLoadersStatus(name, status, errorId) {
    return {
        type: ADD_UPDATE_APP_LOADERS_STATUS,
        name,
        status,
        errorId
    };
}

export function testAction() {
    return {
        type: APP_TEST_ACTION
    }
}

export function getUsers() {
    return {
        type : GET_ALL_USERS,
        url : "api/users"
    }
}