import React, { Component } from "react";
import { connect } from "react-redux";

class RecipeList extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  renderRecipes() {
    const { recipes } = this.props;
    console.log(recipes);

  }

  render() {
    return (
      <React.Fragment>
        <h2>I'm a recipe list</h2>
        {this.renderRecipes()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
};

export default connect(mapStateToProps)(RecipeList);