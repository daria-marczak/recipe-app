import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Tag } from "antd";
import "../styles/RecipeList.css";


class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: []
    }
  }

  componentDidMount() {

    if (!recipes) return <p>Loading</p>

    const { recipes } = this.props;
    const [currentRecipe] = recipes.filter(recipe => {
      const id = recipe.recipe.totalWeight.toString();
      if (this.props.match.params.id === id) return recipe;
    });

    const recipe = currentRecipe.recipe;

    this.setState({
      recipe: currentRecipe.recipe
    });


  }

  renderIngredients() {
    // console.log(recipes);
  }

  render() {

    console.log(this.state);

    return (
      <Row gutter={8}>
        <Col span={12}>
          {/* <img src={recipe.image}></img> */}
        </Col>
        <Col span={12}>
          {/* <h2>{recipe.label}</h2> */}
          <Tag color="cyan"></Tag>
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