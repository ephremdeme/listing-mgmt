import logo from './logo.svg';
import { Provider } from 'react-redux'
import './App.css';
import './component/custom.module.css'
import AppNavbar from './component/AppNavbar';
import LoginForm from './component/auth/LoginForm';
import store from "./store";
import React, {
  Component
} from 'react'
import { loadUser } from './action/authAction';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegisterForm from './component/auth/RegisterForm';

import Home from './component/Home';
import AddList2 from './component/listing/AddList2';
import { NotFoundPage } from './component/NotFoundPage';
import listing from './component/listing/listing';
import ProfilePage from './component/auth/profile';

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  
  componentDidMount() {
    store.dispatch(loadUser())
  }
  



  render() {
    return ( 
    <div>
      <Provider store= {store}>
        < Router >
          <AppNavbar />
            <Switch>
              <Route path ="/login" component={LoginForm} />
              <Route path="/signup">
                <RegisterForm/>
              </Route>
              <Route path="/addListing" component={AddList2} />
              <Route path='/profile' component={ProfilePage} />
              <Route path="/:city/:id" component={listing} />
              <Route exact path="/" component={Home} />
              <Route path='*' children={<NotFoundPage/>}/>
              
            </Switch>
        </Router>
        
      </Provider>
      </div>
    )
  }
}


