import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Tag, List } from "antd";
import "../styles/RecipeList.css";

class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    const { recipes } = this.props;

    if (!recipes) return <p>Loading</p>;

    this.setState({
      recipes
    })
  }

  render() {
    const { recipes } = this.props;

    const [currentRecipe] = recipes.filter(recipe => {
      const id = recipe.recipe.totalWeight.toString();
      if (this.props.match.params.id === id) return recipe;
    });

    const recipe = currentRecipe.recipe;

    const ingredients = recipe.ingredientLines;

    return (
      <Row gutter={8}>
        <Col span={12}>
          <img src={recipe.image} />
        </Col>
        <Col span={12}>
          <h2>{recipe.label}</h2>
          {recipe.healthLabels.map((label, index) => {
            return <Tag color="cyan" key={index}>{label}</Tag>;
          })}
          <List 
            header={<h3>Ingredients</h3>}
            bordered
            size="small"
            dataSource={ingredients}
            renderItem={(item, index) => (<List.Item>{item}</List.Item>)}
          />
          <p>For full recipe go to <a href={recipe.url}>{recipe.source}</a></p>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes.items
  };
};

export default connect(mapStateToProps)(SingleRecipe);
