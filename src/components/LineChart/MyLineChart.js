import React, { useEffect, useState } from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const [line, setLine] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLine(data))


    }, [])
    return (


        <LineChart width={300} height={300} data={line}>


            <Line dataKey={'sell'}></Line>
            <YAxis></YAxis>
            <XAxis dataKey={'month'}></XAxis>

        </LineChart>


    );
};

export default MyLineChart;