import React, { useEffect, useState } from 'react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import './MyLineChart.css'

const MyLineChart = () => {
    const [line, setLine] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLine(data))


    }, [])
    return (


        <div className='lineChart'>
            <h3>Month Wise Sell</h3>
            <LineChart width={500} height={300} data={line}>

                <Line dataKey={'sell'}></Line>
                <YAxis></YAxis>
                <XAxis dataKey={'month'}></XAxis>
                <Legend></Legend>
                <CartesianGrid stroke="#ccc" />

            </LineChart>
        </div>


    );
};

export default MyLineChart;