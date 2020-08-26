import { MDBCol, MDBRow } from 'mdbreact';
import logo from '../logo.svg';
import { useParams, useRouteMatch } from 'react-router-dom';


import React, { Component } from 'react'




export const NotFoundPage =  () => {
  let {url} = useRouteMatch();
  console.log(useRouteMatch())
  return (
    <React.Fragment>
      <div className="Container">
      <div className="full">
        <MDBRow className="bad-gateway-row">
          <MDBCol md="8">
                        <img alt="Error 404" className="img-fluid" src="https://mdbootstrap.com/img/Others/grafika404-bf.png"/>

            <h2 className="h2-responsive mt-3 mb-2">404. That's an error.</h2>
                  <h4>The requested URL  : <strong>{url}</strong> was not found on this server.</h4>
          </MDBCol>
        </MDBRow>
      </div>
      </div>
    </React.Fragment>
  )
}



export const PageNotFound1 = ()=>{
    return (
        <section className="view intro-2" >
            <div className="mask rgba-gradient-1">
            <div className="container h-100 d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-md-12 wow fadeIn mb-3">
                  <div className="card card-body rgba-white-slight text-center ">
                    <ul className="list-unstyled py-5 mx-lg-5">
                      <li>
                        <h1 className="display-1 mt-5 mx-5 mt-lg-0 mb-5 font-weight-bold  wow fadeIn"
                          data-wow-delay="0.3s">
                          <strong>Error 404</strong>
                        </h1>
                      </li>
                      <li>
                        <h4 className=" description mb-4 wow fadeIn" data-wow-delay="0.4s">Opps! Page Not Found
                        </h4>
                        <p className=" description pb-5 wow fadeIn" data-wow-delay="0.4s"> The page you're looking
                          for is not found, Please try later or back to
                          <a href="../home/main.html" className="font-weight-bold">Home</a>.
                        </p>

                        
                      </li>
                    </ul>

                  </div>
                </div>
              </div> 
              </div>
          </div>
          </section>
    )
}



