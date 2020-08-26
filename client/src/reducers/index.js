import {authReducer} from './authReducer'
import {combineReducers} from 'redux'
import {errorReducer} from './errorReducer'
import {listingReducer} from './listingReducer'
import {commentReducer} from './commentReducer'

export default combineReducers({
    auth : authReducer,
    error : errorReducer,
    listing : listingReducer,
    comment : commentReducer
}); 