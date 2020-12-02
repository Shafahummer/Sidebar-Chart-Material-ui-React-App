import React from 'react';
import './GraphStatus.css';
import { Bar } from 'react-chartjs-2';
import { TiMessages } from 'react-icons/ti';

const GraphStatus = () => {

    return (
        <div>
            <div className="row justify-content-between">

                <div className="graph-container col-md-8 mb-4">
                    <div className="card p-4">
                        <div>Sales Summary</div>
                        <div>Summary of the month</div>
                        <Bar
                            data={{
                                labels: ['january', 'february', 'march', 'april', 'may', 'june', 'july'],
                                datasets: [
                                    {
                                        label: 'Iphone',
                                        data: [50, 45, 53, 98, 84, 67, 91],
                                        backgroundColor: [
                                            '#0A79DF',
                                            '#0A79DF',
                                            '#0A79DF',
                                            '#0A79DF',
                                            '#0A79DF',
                                            '#0A79DF',
                                            '#0A79DF',
                                        ]
                                    },
                                    {
                                        label: 'Ipad',
                                        data: [85, 3, 60, 24, 40, 36, 88],
                                        backgroundColor: [
                                            '#8B78E6',
                                            '#8B78E6',
                                            '#8B78E6',
                                            '#8B78E6',
                                            '#8B78E6',
                                            '#8B78E6',
                                            '#8B78E6',
                                        ],
                                    }

                                ]
                            }}

                            options={{
                                maintainAspectRatio: true,
                                responsive: true,
                                scales: {
                                    xAxes: [{
                                        ticks: {
                                            maxRotation: 0,
                                            minRotation: 0
                                        },
                                        barPercentage: 1.0,
                                        categoryPercentage: 0.35,
                                        gridLines: {
                                            drawBorder: true, lineWidth: 0,

                                        },
                                    }],
                                    yAxes: [{
                                        gridLines: {
                                            // display: false,
                                        }
                                    }]
                                }
                            }}
                        />

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="feeds-container card p-4">
                        <div>Feeds</div>
                        <div>
                            <TiMessages />You have 4 pending tasks
                    </div>
                        <div>
                            <TiMessages />You have 4 pending tasks
                </div>
                        <div>
                            <TiMessages />You have 4 pending tasks
                </div>
                        <div>
                            <TiMessages />You have 4 pending tasks
                </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default GraphStatus;