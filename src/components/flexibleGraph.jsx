import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Container, Card, CardContent, Typography } from '@mui/material';
import { wind_speeds } from '../const';
import { Hr } from './common';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


export const FlexibleGraph = ({title, graphData, unit}) => {

    const labels = [
        '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', 
        '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', 
        '8 PM', '9 PM', '10 PM', '11 PM'
      ];
    
      const data = {
        labels,
        datasets: [
          {
            label: `${title} (${unit})`,
            data: graphData,
            borderColor: '#1976d2',
            backgroundColor: 'rgba(25, 118, 210, 0.2)',
            tension: 0.4, // Smooth line
            pointRadius: 5,
            pointBackgroundColor: '#1976d2',
          }
        ]
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: `${title} on ${(new Date()).toLocaleDateString()}`,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: `${title} (${unit})`,
            },
          },
          x: {
            title: {
              display: true,
              text: 'Time of Day',
            },
          },
        },
      };


    return (
        <>
        <Hr />
        <Typography
            variant='h6'
            sx={{
                my:2,
            }}
        >
            {title} in your area on {(new Date()).toLocaleDateString()}
        </Typography>
            <Card>
                <CardContent>
                    <Line data={data} options={options} />
                </CardContent>
            </Card>
        </>
    )
}