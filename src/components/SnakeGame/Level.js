import React from "react";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Level(props) {
  const { path } = useRouteMatch();

  return (
    <Card
      className="shadow bg-white rounded"
      style={{
        margin: 20,
        textAlign: "center",
        width: 200,
        display: "inline-block"
      }}
    >
      <Card.Img style={{ width: 200 }} src={props.backgroundImg}></Card.Img>
      <Card.Title>{props.title}</Card.Title>
      <Card.Body>
        <Button variant="info">
          <Link style={{ color: "white" }} to={`${path}/${props.index}`}>
            Enter
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Level;
