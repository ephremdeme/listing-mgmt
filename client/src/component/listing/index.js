import React from "react";
import { MDBRow, MDBIcon, MDBContainer, MDBCol } from "mdbreact";
import CarouselPage from "./CarouselPage";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
const ListingPage = (props) => {
  return (
    <React.Fragment>
      <MDBContainer>
        <MDBRow className="justify-content-md-center">
          <div className="card booking-card">
            <div className="view overlay rounded  z-depth-1">
              <CarouselPage full={false} images={props.listing.images} />
            </div>
            <div className="card-body">
              <h4 className="card-title font-weight-bold">
                <a>La Sirena restaurant</a>
              </h4>

              <ul className="list-unstyled list-inline rating mb-0">
                <li className="list-inline-item mr-0">
                  <i className="fas fa-star amber-text"> </i>
                </li>
                <li className="list-inline-item mr-0">
                  <i className="fas fa-star amber-text"></i>
                </li>
                <li className="list-inline-item mr-0">
                  <i className="fas fa-star amber-text"></i>
                </li>
                <li className="list-inline-item mr-0">
                  <i className="fas fa-star amber-text"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-star-half-alt amber-text"></i>
                </li>
                <li className="list-inline-item">
                  <p className="text-muted">4.5 (413)</p>
                </li>
              </ul>
              <p className="mb-2">
                {props.listing.name + ", " + props.listing.price}
              </p>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <hr className="my-4" />
              <p className="lead">
                <strong>Tonight's availability</strong>
              </p>
              <ul className="list-unstyled list-inline d-flex justify-content-between mb-0">
                <li className="list-inline-item mr-0">
                  <div className="chip mr-0">5:30PM</div>
                </li>
                <li className="list-inline-item mr-0">
                  <div className="chip deep-purple white-text mr-0">7:30PM</div>
                </li>
                <li className="list-inline-item mr-0">
                  <div className="chip mr-0">8:00PM</div>
                </li>
                <li className="list-inline-item mr-0">
                  <div className="chip mr-0">9:00PM</div>
                </li>
              </ul>
              <Link
                to={"/" + props.listing.address.city + "/" + props.listing.id}
                className="black-text d-flex justify-content-end"
              >
                <h5>
                  Read more
                  <MDBIcon icon="angle-double-right" className="ml-2" />
                </h5>
              </Link>
            </div>
          </div>
        </MDBRow>
      </MDBContainer>
      <hr />
    </React.Fragment>
  );
};
export default ListingPage;
