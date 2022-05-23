import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { posts } from "../test-data/posts";

export const Home = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {posts.map((obj) => (
        <Col key={obj.id}>
          <Card>
            <Card.Img variant="top" src={obj.imageUrl} />
            <Card.Body>
              <Card.Title>
                <Link to={`/post/${obj.id}`}>{obj.title}</Link>
              </Card.Title>
              <Card.Text>{obj.text.substr(0, 100)} ...</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
