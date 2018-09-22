import React from "react";
import { Card, Col } from "antd";

const { Meta } = Card;

const RecipePhoto = (props) => {
  console.log(props);
  const {
    props: { label, image }
  } = props;
  return (
    <Col span={6} sm={8} xs={12} md={6} lg={4}>
      <Card
        hoverable
        style={{ width: 200 }}
        cover={<img alt="example" src={image} />}
      >
        <Meta title={label} />
      </Card>
    </Col>
  );
};

export default RecipePhoto;
