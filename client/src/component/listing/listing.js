import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { MDBRow, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody,  MDBContainer, MDBCol } from
"mdbreact";
import CarouselPage from "./CarouselPage";
import { connect } from 'react-redux';
import { getListing } from "../../action/listingAction";
import { addComment } from '../../action/commentAction';
import Comment from './comment';


class Listing extends Component {
    constructor(props) {
        super(props)
        this.state ={
            comment : ""
        }

    }
    
    static propTypes = {
        getListing : PropTypes.func.isRequired,
        listing    : PropTypes.object.isRequired
    }
    handleChange = (event)=>{
        const name= event.target.name;
        this.setState({
            [name] : event.target.value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        const {match : {params}, history} = this.props;
        const {comment} = this.state
        this.props.addComment(params.id, {comment})
        this.setState({
            comment :""
        })
    }
    TextareaPage = () => {
        return (
            <MDBCard>
                <MDBCardBody className="col-md-12 mx-4">
                    <form onSubmit={this.handleSubmit}>
                        <MDBInput type = "textarea"
                        label = "Write Comment"
                        rows = "4"
                        name = 'comment'
                        value = {this.state.comment}
                        onChange = {this.handleChange}
                        icon = "pencil-alt" />
                        <div className="text-center mt-4">
                            <MDBBtn color="primary" outline type="submit">
                                Submit
                                <MDBIcon far icon="paper-plane" className="ml-2" />
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCardBody>
            </MDBCard>     
            
        )
    }

    componentDidMount() {
        const {match : {params}, history} = this.props;
        this.props.getListing(params.id);
    }

    render() {
        return (
            <React.Fragment>
                <MDBContainer >
                    <CarouselPage full ={true} images = {this.props.listing.images}/>
                    <br/>
                    <br/>
                    
                    <MDBRow className="justify-content-md-center">
                        <MDBCol>
                            <Comment/>
                        </MDBCol>
                        <div className="col-md-5 mb-8">
                            <this.TextareaPage/>
                        </div>
                    </MDBRow>
                    
                </MDBContainer>
            </React.Fragment>
        )
    }
}



const mapStateToProps = state => ({
    listing: state.listing.listing,
    isAuthenticated: state.auth.isAuthenticated
});



export default withRouter(connect(mapStateToProps, {getListing, addComment})(Listing))