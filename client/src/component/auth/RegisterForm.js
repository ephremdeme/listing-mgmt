import React, { Component } from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn, 
    MDBCard,
    MDBCardBody,
    MDBModalFooter
} from 'mdbreact';
import {connect} from'react-redux'
import PropTypes from 'prop-types';
import { registerUser } from "../../action/authAction";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name : null,
            last_name : null,
            email: null,
            password : null
         }
    }

    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
      registerUser: PropTypes.func.isRequired
    };

    handleChange = (event)=>{
            const value = event.target.value;
            const name= event.target.name;
            this.setState({
                [name] : value
            })
    }

    // handleFormChange = (event)=>{
    //   event.preventDefault();
    //   this.setState(state =>({
    //     register : !state.register
    //   }));
    // }

    handleSubmit= (event)=>{
        const {email, password, last_name, first_name} = this.state;
        this.props.registerUser( {
          email,
          password,
          first_name, 
          last_name
        });
        event.preventDefault()
    }

    render() { 
      const {isAuthenticated} = this.props;
        return (
                 isAuthenticated ? null:
                  <React.Fragment>
                      <MDBContainer>
                          <MDBRow className="justify-content-md-center">
              <MDBCol md="5">
                <MDBCard>
                    <form onSubmit={this.handleSubmit}>
                  <MDBCardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="dark-grey-text mb-5">
                        <strong>Sign Up</strong>
                      </h3>
                    </div>
                    <MDBInput
                      label="First Name"
                      group
                      type="text"
                      validate
                      error="wrong"
                      name ="first_name"
                      success="right"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label = "Last Name"
                      group
                      type="text"
                      validate
                      error="wrong"
                      name ="last_name"
                      success="right"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Email"
                      group
                      type="email"
                      validate
                      error="wrong"
                      name ="email"
                      success="right"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Password"
                      group
                      type="password"
                      validate
                      name="password"
                      onChange = {this.handleChange}
                    />
                    <div className="text-center mb-3">
                      <MDBBtn
                        type="submit"
                        gradient="blue"
                        rounded
                        className="btn-block z-depth-1a"
                      >
                        Sign Up
                      </MDBBtn>
                    </div>
                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                      or Sign in with:
                    </p>
                    <div className="row my-3 d-flex justify-content-center">
                      <a className="btn-floating btn-lg btn-fb" href="/#" type="button" role="button"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn-floating btn-lg btn-tw" href="/#" type="button" role="button"><i className="fab fa-twitter"></i></a>
                      <a className="btn-floating btn-lg btn-gplus" href="/#" type="button" role="button"><i className="fab fa-google-plus-g"></i></a>
                    </div>
                  </MDBCardBody>
                  <MDBModalFooter className="mx-5 pt-3 mb-1">
                    <p className="font-small grey-text d-flex justify-content-end">
                      Already  a member?
                      <a href="/login" className="blue-text ml-1" >
                        Sign In
                      </a>
                    </p>
                  </MDBModalFooter>
                  </form>
                </MDBCard>
              </MDBCol>
            </MDBRow>
                      </MDBContainer>
                  </React.Fragment>
             
                )
            }

            
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});
 
export default connect(mapStateToProps, {registerUser})(RegisterForm);