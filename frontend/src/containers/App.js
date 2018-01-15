import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ContainerPost from '../containers/ContainerPost';
import PostFormContainer from '../containers/PostFormContainer';
import PostDetailContainer from '../containers/PostDetailContainer';
import NotFound from '../components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/oops" component={NotFound} />
          <Route exact path='/' component={ContainerPost} />
          <Route exact path='/new' component={PostFormContainer} />
          <Route exact path='/edit' component={PostFormContainer} />
          <Route exact path='/:category' component={ContainerPost} />
          <Route exact path='/:category/:id' component={PostDetailContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
