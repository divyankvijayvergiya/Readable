import React, { Component } from 'react';
import {fetchCategories, fetchPosts} from '../utils/api';
import Header from '../components/Header';
import ContainerPost from '../containers/ContainerPost';
import { Switch, Route, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className= "container">
          <Switch>
            <Route exact path ='/' component= {ContainerPost}/>
            <Route exact path ='/:category' component= {ContainerPost}/>
          </Switch>
        </div>

      </div>
    );
  }
}

export default withRouter(App);
