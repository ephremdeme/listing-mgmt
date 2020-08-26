export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const GET_ERRORS = 'GET_ERRORS';

export const ADD_LISTING_SUCCESS = 'ADD_LISTING_SUCCESS';
export const DELETE_LISTING_SUCCESS = 'DELETE_lISTING_SUCCESS';
export const UPDATE_LISTING_SUCCESS = 'UPDATE_LISTING_SUCCESS';
export const GET_LISTINGS = 'GET_LISTINGS';
export const GET_LISTING = 'GET_LISTING';
export const GET_COMMENT = 'GET_COMMENT';
export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';



export const tokenConfigListing = (getState) => {
    const token = getState().auth.token
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        accept: 'application/json'
    };
    if (token) config.headers['x-auth-token'] = token;
    return config;
}
export const tokenConfig = (getState) => {
    const token = getState().auth.token
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        accept: 'application/json'
    };
    if (token) config.headers['x-auth-token'] = token;
    return config;
}