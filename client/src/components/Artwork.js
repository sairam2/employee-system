import React, { useState, useEffect } from 'react';
import { Container, Row, Alert } from 'react-bootstrap';
import '../style.css';
import List from './Artworks/List';
import Create from './Artworks/Create';
import axiosInstance from '../config/axiosConfig';
import { ARTWORK_URL } from '../config/config';

function Artwork() {
    const [artworks, setArtworks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axiosInstance.get(`${ARTWORK_URL}/all`)
            .then(response => setArtworks(response.data))
            .catch(error => setError('Failed to fetch users'));
    }, []);

    return (
        <Container className="container" fluid>
            {error && <Alert variant="danger">{error}</Alert>}
            <Row >
                <List artworks={artworks} />
                <Create artworks={artworks} setArtworks={setArtworks}/>
            </Row>
        </Container>
    );
}

export default Artwork;
