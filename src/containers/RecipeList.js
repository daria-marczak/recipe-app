import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Spin } from "antd";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import "../styles/RecipeList.css";

import RecipePhoto from "../components/RecipePhoto";

class RecipeList extends Component {

  renderRecipes() {
    const { recipes: { items: recipies } } = this.props;
    return recipies.map(recipe => {
      const data = recipe.recipe;
      const id = data.totalWeight;
      return (
        <Link key={id} to={`/${id}`} >
          <RecipePhoto props={data}/>
        </Link>
      )
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