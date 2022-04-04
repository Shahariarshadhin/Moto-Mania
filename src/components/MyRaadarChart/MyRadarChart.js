import React from 'react';
import './MyRadarChart.css'
import { useState, useEffect } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';

const MyRadarChart = () => {

    const [radar, setRadar] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRadar(data))


    }, [])
    return (
        <div className='radar'>
            <h3>Investment VS Revenue</h3>
            <RadarChart outerRadius={90} width={730} height={250} data={radar}>
                <PolarGrid />
                <PolarAngleAxis dataKey="month" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="investment" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="revenue" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Tooltip></Tooltip>
                <Legend />
            </RadarChart>
        </div>
    );
};

export default MyRadarChart;