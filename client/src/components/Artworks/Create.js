import React, { useState } from 'react';
import { Form, Alert, Col, Card } from 'react-bootstrap';
import axiosInstance from '../../config/axiosConfig';
import { ARTWORK_URL } from '../../config/config';
import CustomButton from '../Util/CustomButton';

function Create({ artworks, setArtworks }) {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.trim().length === 0) {
            setError('Name is required');
            return;
        }
        try {
            const response = await axiosInstance.post(`${ARTWORK_URL}/create`, { name, token: localStorage.getItem('token') });
            setName('');
            console.log('Artwork creation resp :>> ', response);
            alert('Artwork created successfully!');
            const newArtwork = response.data.data ?? null;
            setArtworks([...artworks, newArtwork]);
        } catch (error) {
            console.error('Error creating artwork', error);
            alert(`Artwork creation failed ${error?.response?.data?.msg ?? ''}`);
        }
    };

    return (
        <Col className="justify-content-md-right" md={6}>
            <Card>
                <Card.Header>Create Artwork</Card.Header>
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formArtworkName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter Artwork name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <CustomButton text='Create' />
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Create