import { UPDATE_COMMENT, AUTH_ERROR, tokenConfig, ADD_COMMENT, DELETE_COMMENT, GET_COMMENTS } from "./types";
import axios from 'axios';
import { returnErrors } from "./errorAction";


export const getComments = (id) => (dispatch, getState) => {
    const config = tokenConfig(getState);
    axios.get('/api/listing/'+id+'/comment', config)
    .then(res=>{
        dispatch({
            type : GET_COMMENTS,
            payload : res.data
        })
    }).catch(err=>{
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    })
}

export const addComment=(id, data)=>(dispatch, getState)=>{
    const config = tokenConfig(getState);
    data = JSON.stringify(data)
    axios.post('/api/listing/'+id+'/comment', data, config)
    .then(res => dispatch({
        type : ADD_COMMENT,
        payload : res.data
    }))
    .catch(err=>{
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    })
}

export const deleteComment = (listingId, commentId) => (dispatch, getState) => {
    const config = tokenConfig(getState);
    axios.delete('/api/listing/'+listingId + '/comment/' + commentId+"/delete", config )
    .then(res=>dispatch({
        type : DELETE_COMMENT,
        payload : commentId
    }))
    .catch(err=>{
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    });
}