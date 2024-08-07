import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Alert } from 'react-bootstrap';
import axiosInstance from '../../config/axiosConfig';
import { ADMIN_URL } from '../../config/config';
import { FcApproval } from "react-icons/fc";
import Metrics from './Metrics';

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axiosInstance.get(`${ADMIN_URL}/unapproved`)
            .then(response => setUsers(response.data))
            .catch(error => setError('Failed to fetch users'));
    }, []);

    const handleApprove = (userId) => {
        axiosInstance.put(`${ADMIN_URL}/approve/${userId}`)
            .then(response => {
                setUsers(users.map(user =>
                    user.id === userId ? { ...user, approved: true } : user
                ));
            })
            .catch(error => setError('Failed to approve user'));
    };

    return (
        <Container className="table-container">
            <Row className="justify-content-center">
                <Col md={10}>
                    <Card>
                        <Card.Header as="h2">Admin Panel</Card.Header>
                        <Card.Body>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>Approve?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users && users.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.email}</td>
                                            <td>{user.approved ? 'Approved' : 'Pending'}</td>
                                            <td style={{ width: '50px' }} className='text-center'>
                                                {!user.approved && (
                                                    <FcApproval onClick={() => handleApprove(user.id)} />
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Metrics />
        </Container>
    );
};

export default Admin;
