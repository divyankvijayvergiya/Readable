import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { capitalize, calculateDate } from '../utils/helper';

class PostDetail extends Component {
  render(){
    const { post } = this.props;
    return (
      <div>
        <div style={styles.postDetailContainer}>
          <Row>
            <col span ={18} style={styles.title}>
              {post.title}
            </col>
            <col span={6} style={styles.votes}>

            </col>
          </Row>
          <div style={styles.meta}>
            {calculateDate(post.timestamp)} &middot;
            Submitted by <Link to ="#">{post.author}</Link> in&nbsp;
            <Link to={`/${post.category}`}>{capitalize(post.category)}</Link>
          </div>
          <hr />
          <div style = {styles.content}>
            <ReactMarkdown source = {post.body} />
          </div>
        </div>
      </div>
    )

  }
}

export default PostDetail;
