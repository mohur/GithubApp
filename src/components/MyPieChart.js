import React from 'react';
import { Chart } from "react-google-charts";
import '../App.css';

const MyPieChart = ({languages, setUserFullName}) => {

    return(
        <div className="chart">
            <Chart
                width={'600px'}
                height={'400px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={languages}
                options={{
                    backgroundColor: { fill:'transparent' },
                    titleTextStyle: {color: 'white'},
                    fontSize:'15',
                    legend: {
                        textStyle: { color: 'white' },
                        position: 'bottom', 
                    },

                }}
            />

        </div>
    );
}

export default MyPieChart;