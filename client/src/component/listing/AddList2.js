import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBInput
} from 'mdbreact';
import { addListing } from '../../action/listingAction';

import { connect } from 'react-redux';
class AddForm extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool
    };

    constructor(props){
        super(props)
        this.state = {
            name : null,
            nrooms : null,
            price : null,
            region : null,
            kebele : null,
            city : null,
            files : []
           
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleFileChange = (event)=>{
      const name = event.target.name;
      this.setState({
        [name]: event.target.files
      })
    }

    handleSubmit= (event) =>{
        const{name, nrooms, price, region, kebele, city, files} = this.state;
        const address = {
             region: region,
             kebele: kebele,
             city: city
         }
        var formData = new FormData();
        formData.append('name', name);
        formData.append('kebele', kebele);
        formData.append('city', region);
        formData.append('region', city);
        formData.append('nrooms', nrooms);
        formData.append('price', price)
        for(const key in Object.keys(files)){
          formData.append('files', files[key])
        }
        this.props.addListing(formData);
        event.preventDefault();
        this.props.history.push('/');
    }
    render() {
      return (
          <React.Fragment>
            <MDBContainer>
              <MDBRow className="justify-content-md-center">
                <MDBCol md="5">
                  <MDBCard>
                    
                    <form onSubmit={this.handleSubmit}>
                      <MDBCardBody className="mx-4">
                        
                        <p className="h4 text-center dark-grey-tex py-4"> Add Listing </p>
                        <MDBInput
                              label = "Name"
                              group
                              type="text"
                              validate
                              error="wrong"
                              name ="name"
                              success="right"
                              onChange={this.handleChange}
                        />
                        <MDBInput
                              label = "Price"
                              group
                              type="number"
                              validate
                              error="wrong"
                              name ="price"
                              success="right"
                              onChange={this.handleChange}
                        />
                        <MDBInput
                              label = "Number of Rooms"
                              group
                              type="number"
                              validate
                              error="wrong"
                              name ="nrooms"
                              success="right"
                              onChange={this.handleChange}
                        />
                        <div className="">
                            <label className="" data-error="wrong" data-success="right" id=""></label>
                            <select onChange={this.handleChange} name="region" className="browser-default custom-select"
                              id="exampleFormControlSelect1">
                              <option>Choose Region</option>
                              <option value="tigray">Tigray</option>
                              <option value="afar">Afar</option>
                              <option value="amara">Amara</option>
                              <option value="oromia">Oromia</option>
                            </select>
                            
                          </div>
                        <div className="form-row">
                          
                          < div className = "col-md-4">
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
                          <div className="col-md-4">
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
                        

                        <div className="form-group">
                          <label htmlFor="exampleFormControlFile1">Select Multiple Pics</label>
                          <input name="files" onChange={this.handleFileChange} type="file" multiple className="form-control-file" id="exampleFormControlFile1"/>
                        </div>
                        <div className="text-center py-4 mt-3">
                          <MDBBtn className="btn btn-outline-primary" type="submit">
                            Submit
                          </MDBBtn>
                        </div>

                      </MDBCardBody>
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
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  addListing
})(AddForm)