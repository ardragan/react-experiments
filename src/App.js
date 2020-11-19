import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";

import React from "react";

import Posts from "./components/posts/Posts";
import FilterPosts from "./components/filter/FilterPosts";

function App() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h2>Blog dummy app</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FilterPosts/>
                    <Posts/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
