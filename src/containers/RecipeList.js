import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Spin } from "antd";

import "antd/dist/antd.css";
import "../styles/RecipeList.css";

import RecipePhoto from "../components/RecipePhoto";

class RecipeList extends Component {

  renderRecipes() {
    const { recipes: { items: recipies } } = this.props;
    return recipies.map(recipe => {
      const data = recipe.recipe;
      return <RecipePhoto props={data} key={data.calories}/>
    })
  }

  render() {
    const { recipes: { isFetching } } = this.props;
    return (
      <Row gutter={8} >
        {isFetching === true ? <Spin /> : this.renderRecipes()}
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
};

export default connect(mapStateToProps)(RecipeList);