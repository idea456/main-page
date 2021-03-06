import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { levels, levelsAssets } from "../data/SnakeGame/SnakeGame";
import SnakeGame from "../pages/SnakeGame";
import Level from "../components/SnakeGame/Level";
import SubLevel from "../components/SnakeGame/SubLevel";
import App from "../App";

function SnakeLevels() {
  const { path } = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route exact path="/snake-levels">
          <Container>
            <Row>
              <Col>
                {levels.map((level, i) => {
                  return (
                    <Level
                      key={i}
                      index={i}
                      title={levelsAssets[i][0]}
                      backgroundImg={levelsAssets[i][1]}
                    />
                  );
                })}
                <Card
                  style={{
                    border: "none",
                    textAlign: "center"
                  }}
                >
                  <Card.Body>
                    <Button variant="danger">
                      <Link style={{ color: "white" }} to="/">
                        Back
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Route>

        <Route path={`${path}/:levelId`} component={SubLevel} />

        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}

function Hello() {
  const { levelId } = useParams();
  return <h1>Hello {levelId}</h1>;
}

export default SnakeLevels;
