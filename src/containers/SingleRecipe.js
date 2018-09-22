import React, { Component } from "react";
import { connect } from "react-redux";

class SingleRecipe extends Component {
  render() {

    const { recipes } = this.props;

    if (!recipes) return;

    const [currentRecipe] = recipes.filter(recipe => {
      const id = recipe.recipe.totalWeight.toString();
      if (this.props.match.params.id === id) return recipe;
    });
    console.log(currentRecipe);

    return <p>I'm a single recipe</p>
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes.items
  }
}

export default connect(mapStateToProps)(SingleRecipe);