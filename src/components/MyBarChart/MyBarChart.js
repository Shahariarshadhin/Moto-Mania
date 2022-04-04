import React from 'react';
import './MyBarChart.css'
import { useState, useEffect } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const MyBarChart = () => {

    const [bar, setBar] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBar(data))


    }, [])
    return (
        <div className='bar'>
            <h3>Investment VS Revenue</h3>
            <BarChart width={550} height={300} data={bar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>

        </div>
    );
};

export default MyBarChart;