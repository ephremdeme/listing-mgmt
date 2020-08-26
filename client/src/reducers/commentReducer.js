import { ADD_COMMENT, DELETE_COMMENT, GET_COMMENTS, UPDATE_COMMENT } from "../action/types";

const initialState = {
    comments: [],
    comment : {}
}

export const commentReducer =(state=initialState, action)=>{
    switch (action.type) {
        case GET_COMMENTS:
            return{
                ...state,
                comments : action.payload
            }
        case ADD_COMMENT:
            return{
                ...state,
                comments : [action.payload, ...state.comments]
            }
        case DELETE_COMMENT:
            return{
                ...state,
                comments : state.comments.filter(comment=>comment.id!==action.payload)
            }

        default:
            return{
                ...state
            }
    }
}


