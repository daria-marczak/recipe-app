import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const RecipePhoto = props => {
  const { props: { label, image } } = props;
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={image} />}
  >
      <Meta title={label}/>
    </Card>
  );
};

export default RecipePhoto;
