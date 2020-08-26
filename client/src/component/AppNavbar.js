import React, {
    Component
} from 'react'
import {
    Nav,
    Navbar,
    Collapse,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    Container
} from 'reactstrap'
import {connect  } from 'react-redux';
import { logout } from "../action/authAction";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";

class AppNavbar extends Component {

    constructor(props){
        super(props)
        this.state = {
            isToggleOn : false,
            firstName : null
        }
    }

    
    componentDidMount() {
        this.setState( (state)=>({
            firstName : this.props.user.firstName
        }))
    }
    

    toggle = ()=>{
        this.setState(state=>({
            isToggleOn : !this.state.isToggleOn
        }))
    }
    
    mtoggle = ()=>{
        if(this.state.isToggleOn){
            this.toggle()
        }
    }

    logout = (event)=>{
        event.preventDefault()
        this.props.logout();
        this.toggle()
    }

    AuthLink = (props)=>{
       return props.isAuthenticated ?
         <React.Fragment>
                         <NavItem>
                            <NavLink className="nav-link" to="/">
                                {this.props.user.firstName}
                            </NavLink>
                         </NavItem>
                         <NavItem>
                            <NavLink className="nav-link" to="/" onClick = {this.logout}>
                                Log Out
                                < i className = "fas fa-sign-out-alt" />
                            </NavLink>
                         </NavItem>
            </React.Fragment>
            : <React.Fragment>
                <NavItem>
                    <NavLink className="nav-link" onClick={this.mtoggle} to="/login">
                        Sign In
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" onClick={this.mtoggle} to="/signup">
                        Sign Up
                    </NavLink>
                </NavItem> 
            </React.Fragment>
    }

    render() {
        const {isAuthenticated} = this.props
        
        return ( 
            <React.Fragment>
                <Navbar color= "dark" dark expand="sm" className= "mb-5 morpheus-den-gradient">
                    <Container>
                        <NavbarBrand to="/">
                            GC Project
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isToggleOn} navbar>
                            <Nav className="ml-auto" navbar> 
                                <NavItem>
                                    <NavLink className="nav-link" onClick={this.mtoggle} to="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" onClick={this.mtoggle} to="/addListing">
                                        Add Listing
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" onClick={this.mtoggle} to="/">
                                        About
                                    </NavLink>
                                </NavItem>
                               <this.AuthLink isAuthenticated = {isAuthenticated} /> 
                                
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>

            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>({
      isAuthenticated: state.auth.isAuthenticated,
      user: state.auth.user
})

export default connect(mapStateToProps, {logout})(AppNavbar)
