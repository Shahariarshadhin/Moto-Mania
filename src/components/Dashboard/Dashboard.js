import './Dashboard.css'
import MyAreaChart from "../AreaChart/MyAreaChart";
import MyLineChart from "../LineChart/MyLineChart";
import MyBarChart from '../MyBarChart/MyBarChart';

import MyRadarChart from '../MyRaadarChart/MyRadarChart';




const Dashboard = () => {

    return (
        <div>
            <h2>This is dashboard</h2>
            <div className="dashboard">
                <MyLineChart></MyLineChart>
                <MyAreaChart></MyAreaChart>
                <MyBarChart></MyBarChart>
                <MyRadarChart></MyRadarChart>
            </div>

        </div>
    );
};

export default Dashboard;