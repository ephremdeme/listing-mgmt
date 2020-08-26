import {
    USER_LOADED,
    USER_LOADING,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    UPDATE_USER_SUCCESS,
    AUTH_ERROR
} from "../action/types";
import { returnErrors } from "./errorAction";
import axios from "axios";

export const loadUser = () => (dispatch, getState)=>{
    dispatch({type : USER_LOADING});
    
    const config = tokenConfig(getState);

    axios.get('/api/users/me', config)
    .then(res => dispatch({
        type : USER_LOADED,
        payload : res.data
    }))
    .catch(err => {
        console.log(err)
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    });
}

export const logout = ()=>(dispatch)=>{
    dispatch({
        type : LOGOUT_SUCCESS
    })
}

export const loginUser = (data) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        accept: 'application/json'
    };
    data = JSON.stringify(data)
    axios.post('/api/users/login', data, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload : res.data
            })
        })
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
            );
            dispatch({
                type: LOGIN_FAIL
            });
        });
}

export const registerUser = (data)=> (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        accept: 'application/json'
    };
    data = JSON.stringify(data)
    axios.post('/api/users/', data, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
            );
            dispatch({
                type: REGISTER_FAIL
            });
        });
}
export const updateUser = (id, data)=> (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        accept: 'application/json'
    };
    data = JSON.stringify(data)
    axios.post('/api/users/' + id +'/', data, config)
        .then(res => {
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
            );
            dispatch({
                type: REGISTER_FAIL
            });
        });
}

export const tokenConfig = (getState)=>{
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