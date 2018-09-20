import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchQuery } from "./actions/index";
import './App.css';
import SearchBar from "./containers/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchQuery }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
