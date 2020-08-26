import { MDBInput, MDBBtn } from 'mdbreact';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class ProfilePage extends Component {
    static propTypes = {

    }

    constructor(props) {
        super(props)
        this.state = {
            first_name : null,
            last_name : null,
            email : null,
            countries : []
        }
    }
    
    componentDidMount() {
        axios.get('/api/country')
        .then(data=>{
            this.setState({
                countries : data.data
            })
        })
    }
    
    

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        
    }

    render() {

        

        return (
            <React.Fragment>
                <div className='container'>
                    <div className='section'>
                        <div className='row'>
                            <div className='col-lg-4 mb-4' >
                                <div className="card card-cascade narrower">

                                        <div className="view view-cascade gradient-card-header mdb-color lighten-3">
                                            <h5 className="mb-0 font-weight-bold">Edit Photo</h5>
                                        </div>
                                        <div className="card-body card-body-cascade text-center">
                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="User Photo" className="z-depth-1 mb-3 mx-auto" />

                                            <p className="text-muted"><small>Profile photo will be changed automatically</small></p>
                                            <div className="row flex-center">
                                            <button className="btn btn-info btn-rounded btn-sm">Upload New Photo</button><br/>
                                            <button className="btn btn-danger btn-rounded btn-sm">Delete</button>
                                            </div>
                                        </div>

                                    </div>
                            </div>

                            <div className='col-lg-8 mb-4' >

                                <div className="card card-cascade narrower">

                                    <div className="view view-cascade gradient-card-header mdb-color lighten-3">
                                        <h5 className="mb-0 font-weight-bold">Edit Account</h5>
                                    </div>
                                    <div className="card-body card-body-cascade text-center">
                                    
                                        <form>
                                            <div className='row'>
                                                <div className='col-lg-6'>
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
                                                </div>
                                                <div className='col-lg-6'>
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
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col">
                                                    <label className="" data-error="wrong" data-success="right" id=""></label>
                                                    <select onChange={this.handleChange} name="region" className="browser-default custom-select"
                                                    id="exampleFormControlSelect1">
                                                    <option>Country</option>
                                                    {this.state.countries.map(item=>(
                                                    < option key={item.code} value = {item.code} > {item.name} </option>

                                                    ))}
                                                    </select>
                                                    
                                                </div>
                                                <div className="col">
                                                    <label className="" data-error="wrong" data-success="right" id=""></label>
                                                    <select onChange={this.handleChange} name="region" className="browser-default custom-select"
                                                    id="exampleFormControlSelect1">
                                                    <option>Region</option>
                                                    <option value="tigray">Tigray</option>
                                                    <option value="afar">Afar</option>
                                                    <option value="amara">Amara</option>
                                                    <option value="oromia">Oromia</option>
                                                    </select>
                                                    
                                                </div>
                                            </div>

                                            
                        <div className="form-row">
                          
                          < div className = "col-md-6">
                            <MDBInput
                              label = "City"
                              group
                              type="text"
                              validate
                              error="wrong"
                              name ="city"
                              success="right"
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="col-md-6">
                              <MDBInput
                                label = "Kebele"
                                group
                                type="text"
                                validate
                                error="wrong"
                                name ="kebele"
                                success="right"
                                onChange={this.handleChange}
                          />
                          </div>
                        </div>
                                            <div className="text-center mb-3">
                                                <MDBBtn
                                                    type="submit"
                                                    gradient="blue"
                                                    rounded
                                                    className="colbtn-block z-depth-1a"
                                                >
                                                    Update Account
                                                </MDBBtn>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            );
        }
}