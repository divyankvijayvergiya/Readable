import React, { Component } from 'react';
import {fetchCategories, fetchPosts} from '../utils/api';
import Header from '../components/Header';
import ContainerPost from '../containers/ContainerPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContainerPost/>

      </div>
    );
  }
}

export default App;
