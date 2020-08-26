import { ADD_LISTING_SUCCESS, tokenConfig, DELETE_LISTING_SUCCESS, AUTH_ERROR,  GET_LISTINGS, UPDATE_LISTING_SUCCESS, GET_LISTING } from "./types";


import { returnErrors } from "./errorAction";
import axios from "axios";

export const getListings = () => (dispatch, getState) => {
    const config = tokenConfig(getState);

    axios.get('/api/listing')
        .then(res => dispatch({
            type: GET_LISTINGS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}

export const getListing=(id)=>(dispatch, getState)=>{
    const config =tokenConfig(getState);
    axios.get('/api/listing/'+id, config)
    .then(res=>{
        dispatch({
        type: GET_LISTING,
        payload : res.data
    })})
    .catch(err=>{
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    })
}

export const addListing = (data)=>(dispatch, getState) =>{
    const config = tokenConfig(getState);
    axios.post('/api/listing',  data, config)
        .then(res => dispatch({
            type: ADD_LISTING_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}



