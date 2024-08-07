import React from 'react';
import { Col, Card, Table } from 'react-bootstrap';

function List({ artworks }) {
    return (
        <Col className="justify-content-md-left" md={6}>
            <Card>
                <Card.Header>Artworks</Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Created By</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {artworks && artworks.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.userId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default List;
