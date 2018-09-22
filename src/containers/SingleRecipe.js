import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Tag } from "antd";
import "../styles/RecipeList.css";


class SingleRecipe extends Component {
  componentDidMount() {
    const { recipes } = this.props;

    if (!recipes) return <p>Loading</p>
  }

  render() {
    const { recipes } = this.props;

    const [currentRecipe] = recipes.filter(recipe => {
      const id = recipe.recipe.totalWeight.toString();
      if (this.props.match.params.id === id) return recipe;
    });

    const recipe = currentRecipe.recipe;

    return (
      <Row gutter={8}>
        <Col span={12}>
          <img src={recipe.image}></img>
        </Col>
        <Col span={12}>
          <h2>{recipe.label}</h2>
          {recipe.healthLabels.map(label => {
            return (<Tag color="cyan">{label}</Tag>)
          })}
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes.items
  }
}

export default connect(mapStateToProps)(SingleRecipe);