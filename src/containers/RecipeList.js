import React, { Component } from "react";
import { connect } from "react-redux";
// import { Spin } from "antd";

import RecipePhoto from "../components/RecipePhoto";

class RecipeList extends Component {

  renderRecipes() {
    const { recipes: { items: recipies } } = this.props;
    console.log(recipies);

    return recipies.map(recipe => {
      const data = recipe.recipe;
      console.log(data);

      return <RecipePhoto props={data}/>
    })
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