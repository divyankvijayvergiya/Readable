import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts, fetchPostsByCategory} from '../actions/posts';
import { ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';


const PostItem = post =>{
  return(
    <li
      className = "list-group-item"
      onClick= {()=>{}}
    >
        <Grid>
            <Row className="show-grid">
              <Col xs={4} md={2}></Col>
              <Col xs={8} md={10}>
                <h3>{post.title}</h3>
                <p>Category: {post.category} | Date Posted: {post.timestamp}</p>
                <p>{post.body}</p>
                <p><em>Comments: {post.commentCount}</em></p>
              </Col>
           </Row>
        </Grid>

    </li>
  )
}

class ContainerPost extends Component{
  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    const { posts } = this.props;

    return (
      <ListGroup>
        {posts.length > 0 && posts.map((post) => {
         return (
           <PostItem
             key={post.key}
             post={post}
             />
          )
       })}

     </ListGroup>

    );
  }

}

const mapStateToProps = ({ posts })=> ({
  posts: Object.keys(posts.items).map(k => posts.items[k]),
})
const mapDispatchToProps = dispatch => ({
  fetchPosts:()=> dispatch(fetchPosts()) ,
  fetchPostsByCategory:()=> dispatch(fetchPostsByCategory()) ,

})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerPost);
