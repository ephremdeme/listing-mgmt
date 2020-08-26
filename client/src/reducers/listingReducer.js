import { ADD_LISTING_SUCCESS, DELETE_LISTING_SUCCESS, AUTH_ERROR,  GET_LISTINGS, GET_LISTING, UPDATE_LISTING_SUCCESS } from "../action//types";

const initialState = {
    listings : [],
    listing : {
        images : []
    }
}

export const  listingReducer= function(state=initialState, action){
    switch (action.type) {
        case GET_LISTING:
            return{
                ...state,
                listing : action.payload    
            }
        case GET_LISTINGS:
            return{
                ...state,
                listings : action.payload
            }
        case ADD_LISTING_SUCCESS:
            return{
                ...state,
                listings : [action.payload, ...state.listings]
            }
        case DELETE_LISTING_SUCCESS:
            return{
                ...state,
                listings : state.listings.filter((listing=>listing.id!==action.payload))
            }
        default:
            return state;
    }
}