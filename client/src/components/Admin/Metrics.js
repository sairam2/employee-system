import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import ArtPiecesChart from './ArtPiecesChart';
import EmployeeProductionChart from './EmployeeProductionChart';

function Metrics() {
    return (
        <Row className="mt-5">
            <Col md={6}>
                <Card>
                    <Card.Header as="h4">Art Pieces Created</Card.Header>
                    <Card.Body>
                        <ArtPiecesChart />
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card>
                    <Card.Header as="h4">Employee Production</Card.Header>
                    <Card.Body>
                        <EmployeeProductionChart />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Metrics