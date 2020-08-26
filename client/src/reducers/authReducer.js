import {
    USER_LOADED,
    USER_LOADING,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    UPDATE_USER_SUCCESS
  } from "../action/types";
  
  const initialState = {
      token : localStorage.getItem('token'),
      isAuthenticated : false,
      isLoading : false,
      user : {
          id : null,
          firstName : null,
          lastName : null,
          email : null,
          tokens : null,
          createdAt : null,
          updatedAt : null
          
      }
  };

  export const authReducer = (state = initialState, action) => {
      switch (action.type) {
          case USER_LOADING:
              return {
                  ...state,
                  isLoading : true
              }
          case USER_LOADED:
              return {
                  ...state,
                  isAuthenticated : true,
                  isLoading : false,
                  user : action.payload.user,
              }
          case REGISTER_SUCCESS :
          case UPDATE_USER_SUCCESS:
          case LOGIN_SUCCESS:
              localStorage.setItem('token' , action.payload.token)
              return {
                  ...state,
                  ...action.payload,
                  isAuthenticated : true,
                  isLoading : false
              }
         
          case LOGOUT_SUCCESS:
          case REGISTER_FAIL:
          case LOGIN_FAIL:
              localStorage.removeItem('token')
              return {
                  ...state,
                  token : null,
                  user : null, 
                  isAuthenticated : false,
                  isLoading : false
              }
         
          default:
              return state
      }
  }