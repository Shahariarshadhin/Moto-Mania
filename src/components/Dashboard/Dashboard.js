import './Dashboard.css'
import MyAreaChart from "../AreaChart/MyAreaChart";
import MyLineChart from "../LineChart/MyLineChart";




const Dashboard = () => {

    return (
        <div>
            <h2>This is dashboard</h2>
            <div className="dashboard">
                <MyLineChart></MyLineChart>
                <MyAreaChart></MyAreaChart>
            </div>

        </div>
    );
};

export default Dashboard;