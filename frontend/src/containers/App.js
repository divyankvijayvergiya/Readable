import React, { Component } from 'react';
import {fetchCategories, fetchPosts} from '../utils/api';
import Header from '../components/Header';
import ContainerPost from '../containers/ContainerPost';
import PostDetailContainer from '../containers/PostDetailContainer';
import { Switch, Route, withRouter } from 'react-router-dom';
import PostFormContainer from '../containers/PostFormContainer';
import NotFound from '../components/NotFound';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className= "container">
          <Switch>
            <Route exact path="/oops" component={NotFound} />
            <Route exact path='/new' component={PostFormContainer} />
            <Route exact path ='/' component= {ContainerPost}/>
            <Route exact path='/edit' component={PostFormContainer} />
            <Route exact path ='/:category' component= {ContainerPost}/>
            <Route exact path='/:category/:id' component={PostDetailContainer} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default withRouter(App);
