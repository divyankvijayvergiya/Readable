import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts, fetchPostsByCategory} from '../actions/posts';


class ContainerPost extends Component{
  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    console.log(this.props.posts);
    return <h3>Hello World</h3>;
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
