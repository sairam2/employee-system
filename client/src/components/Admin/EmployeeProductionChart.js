import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axiosInstance from '../../config/axiosConfig';
import { ARTWORK_URL } from '../../config/config';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EmployeeProductionChart = () => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        axiosInstance.get(`${ARTWORK_URL}/employeeproduction`)
            .then(response => {
                const data = response.data;
                setChartData({
                    labels: data.map(item => item.date),
                    datasets: [
                        {
                            label: 'Employee Production',
                            data: data.map(item => item.count),
                            borderColor: 'rgba(75,192,192,1)',
                            fill: false,
                        }
                    ]
                });
            })
            .catch(error => {
                console.error('Error fetching chart data:', error);
            });
    }, []);

    return (
        <div>
            {chartData.datasets.length > 0 && <Line data={chartData} />}
        </div>
    );
};

export default EmployeeProductionChart;
