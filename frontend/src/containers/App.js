import React, { Component } from 'react';
import {fetchCategories, fetchPosts} from '../utils/api';
import Header from '../components/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
