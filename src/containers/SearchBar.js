import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchQuery } from "../actions/index";

import "../styles/SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchQuery(this.state.term);
    this.setState({
      term: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Search ingredient"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchQuery }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);