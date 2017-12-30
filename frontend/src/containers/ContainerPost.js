import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts, fetchPostsByCategory} from '../actions/posts';
import { ListGroup, ListGroupItem } from 'react-bootstrap';



class ContainerPost extends Component{
  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    return (
      
      <ListGroup>
        <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
        <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
        <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem>
      </ListGroup>

    );
  }

}

const mapStateToProps = ({ posts })=> ({
  posts: Object.keys(posts).map(k => posts[k]),
})
const mapDispatchToProps = dispatch => ({
  fetchPosts:()=> dispatch(fetchPosts()) ,
  fetchPostsByCategory:()=> dispatch(fetchPostsByCategory()) ,

})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerPost);
