import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axiosInstance from '../../config/axiosConfig';
import { ARTWORK_URL } from '../../config/config';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ArtPiecesChart = () => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const fetchChartData = () => {
        axiosInstance.get(`${ARTWORK_URL}/artpieces`, {
            params: { from: fromDate, to: toDate }
        }).then(response => {
            const data = response.data;
            setChartData({
                labels: data.map(item => item.date),
                datasets: [
                    {
                        label: 'Art Pieces Created',
                        data: data.map(item => item.count),
                        backgroundColor: 'rgba(75,192,192,0.6)',
                    }
                ]
            });
        }).catch(error => {
            console.error('Error fetching chart data:', error);
        });
    };

    useEffect(() => {
        fetchChartData();
    }, []);

    const handleFilter = () => {
        fetchChartData();
    };

    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="fromDate">
                            <Form.Label>From Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="toDate">
                            <Form.Label>To Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col className='position-relative'>
                        <Button size='sm' className='position-absolute bottom-0 end-25' onClick={handleFilter}>Filter</Button>
                    </Col>
                </Row>
                
            </Form>
            {chartData.datasets.length > 0 && <Bar data={chartData} />}
        </div>
    );
};

export default ArtPiecesChart;
