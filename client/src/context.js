import React, { Component } from 'react'
import {authReducer} from './reducers/authReducer'
import { loadUser } from "./action/authAction";

const Context = React.createContext();

export class Provider extends Component {
    state = { 
            token: null,
            isAuthenticated: false,
            isLoading: false,
            user: null,
            dispatch : action => this.setState(state => 
                authReducer(state, action)
            )
         }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentDidMount() {
       loadUser(this.state.dispatch, this.state)   
    }
    render() { 
        return ( 
            <Context.Provider  value = {this.state}>
                {this.props.children}
            </Context.Provider>
         );
    }
}

export const Consumer = Context.Consumer