import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchQuery } from "../actions/index";

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
    console.log(event)
    this.props.fetchQuery(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Search for a food ingredient"
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