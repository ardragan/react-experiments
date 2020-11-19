import React from 'react';
import {Card, Form} from 'react-bootstrap';

function PostCreate() {
    return (
        <Card bg="light">
            <Card.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="John Doe" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="My first new post..." />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Post Content</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default PostCreate;
