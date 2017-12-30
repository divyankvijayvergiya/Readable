import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts, fetchPostsByCategory} from '../actions/posts';
import { ListGroup, ListGroupItem } from 'react-bootstrap';



class ContainerPost extends Component{
  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    const { posts } = this.props;

    return (

      <ListGroup>
      {posts.length >0 && posts.map(( post, key ) =>{
          <ListGroupItem header={post.title}>{post.body}</ListGroupItem>

        })}

      </ListGroup>

    );
  }

}

const mapStateToProps = ({ posts })=> ({
  posts,
})
const mapDispatchToProps = dispatch => ({
  fetchPosts:()=> dispatch(fetchPosts()) ,
  fetchPostsByCategory:()=> dispatch(fetchPostsByCategory()) ,

})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerPost);
