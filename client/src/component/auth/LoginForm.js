import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBAlert,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBModalFooter
} from "mdbreact";
import { loginUser } from "../../action/authAction";
import { clearErrors } from "../../action/errorAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      msg: null
    };
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // handleFormChange = (event)=>{
  //   event.preventDefault();
  //   this.setState(state =>({
  //     register : !state.register
  //   }));
  // }

  handleSubmit = event => {
    const { email, password } = this.state;
    this.props.loginUser({
      email,
      password
    });
    event.preventDefault();
  };
  render() {
    const { isAuthenticated } = this.props;
    return isAuthenticated ? null : (
      <React.Fragment>
        <MDBContainer>
          <MDBRow className="justify-content-md-center">
            <MDBCol md="5">
              <MDBCard>
                {this.state.msg ? (
                  <MDBAlert color="danger">{this.state.msg}</MDBAlert>
                ) : null}
                <form onSubmit={this.handleSubmit}>
                  <MDBCardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="dark-grey-text mb-5">
                        <strong>Sign in</strong>
                      </h3>
                    </div>

                    <MDBInput
                      label="Your email"
                      group
                      type="email"
                      validate
                      error="wrong"
                      name="email"
                      success="right"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Your password"
                      group
                      type="password"
                      validate
                      name="password"
                      containerClass="mb-0"
                      onChange={this.handleChange}
                    />
                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                      Forgot
                      <a href="#!" className="blue-text ml-1">
                        Password?
                      </a>
                    </p>
                    <div className="text-center mb-3">
                      <MDBBtn
                        type="submit"
                        gradient="blue"
                        rounded
                        className="btn-block z-depth-1a"
                      >
                        Sign in
                      </MDBBtn>
                    </div>
                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                      or Sign in with:
                    </p>
                    <div className="row my-3 d-flex justify-content-center">
                      <MDBBtn
                        type="button"
                        color="white"
                        rounded
                        className="mr-md-3 z-depth-1a"
                      >
                        <MDBIcon
                          fab
                          icon="facebook-f"
                          className="blue-text text-center"
                        />
                      </MDBBtn>
                      <MDBBtn
                        type="button"
                        color="white"
                        rounded
                        className="mr-md-3 z-depth-1a"
                      >
                        <MDBIcon fab icon="twitter" className="blue-text" />
                      </MDBBtn>
                      <MDBBtn
                        type="button"
                        color="white"
                        rounded
                        className="z-depth-1a"
                      >
                        <MDBIcon
                          fab
                          icon="google-plus-g"
                          className="blue-text"
                        />
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                  <MDBModalFooter className="mx-5 pt-3 mb-1">
                    <p className="font-small grey-text d-flex justify-content-end">
                      Not a member?
                      <a href="#!" className="blue-text ml-1">
                        Sign Up
                      </a>
                    </p>
                  </MDBModalFooter>
                </form>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { loginUser, clearErrors })(LoginForm);
