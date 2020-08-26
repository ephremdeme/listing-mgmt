import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListingPage from './listing'
import { connect } from 'react-redux';
import { getListings } from './../action/listingAction';
class Home extends Component {
    static propTypes = {
        isAuthenticated : PropTypes.bool,
        getListings : PropTypes.func.isRequired,
        listings  : PropTypes.array.isRequired
    }

    
    componentDidMount() {
        this.props.getListings();
    }
    

    render() {
        return (
            <div className="container">
            <div className="row">
                {this.props.listings.map(listing=>(
                    <div className="col-md-4" key={listing.id} >
                    <ListingPage listing={listing}/>
                    </div>
                ))}  
            </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    listings: state.listing.listings,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {getListings})(Home)

