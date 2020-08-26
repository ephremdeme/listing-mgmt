import React, { Component } from 'react'
import { MDBRow, MDBMedia, MDBIcon,  MDBContainer } from 'mdbreact'

import { getComments, addComment, deleteComment } from "../../action/commentAction";
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
class Comment extends Component {
  constructor(props) {
    super(props)
  }
  
  static propTypes = {

  }

  
  componentDidMount() {
    const {match : {params, url}, history} = this.props;
    this.props.getComments(params.id)
  }

  handleDelete = (id, event)=>{
    event.preventDefault()
    const {match : {params, url}, history} = this.props;
    this.props.deleteComment(params.id, id)
  }
  

  render() {
        const {match : {params, url}} = this.props;

    return (
        <MDBMedia list className="mt-3">
          {this.props.comments.map(comment=>(
              <MDBMedia key ={comment.id} tag="li">
              <MDBMedia left href="#">
                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg" alt="Generic placeholder image" />
              </MDBMedia>
              <MDBMedia body>
                <MDBMedia heading>
                  Anna Smith
                  <a href={url +"/" + comment.id +"/delete"} onClick={(e)=>this.handleDelete(comment.id, e) } style={{float : "right"}}> 
                    <i className="fas fa-trash fa-xs" ><span >Remove</span></i>
                  </a>
                  </MDBMedia>
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="grey-text" />
                <p>{comment.comment } Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              </MDBMedia>
            </MDBMedia>
        
          ))}
           </MDBMedia>
      )
  }
}
const mapStateToProps =(state)=>({
  user : state.auth.user,
  comments : state.comment.comments
})

export default withRouter(connect(mapStateToProps, {getComments, addComment, deleteComment})(Comment))
