import React from 'react';
import './GraphStatus.css';
import { Bar } from 'react-chartjs-2';
import { BsBell } from 'react-icons/bs';
import { FiDatabase } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';

const GraphStatus = () => {

    const feedsContainer = { flexDirection: "row", display: "flex", alignItems: "center" }
    const myRoundedStyle = { backgroundColor: "#0A79DF", height: 35, width: 35, borderRadius: 35 / 2, alignItems: "center", justifyContent: "center", display: "flex" }

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
                    <div className="feeds-container card p-4 justify-content-between">
                        <h4>Feeds</h4>
                        <div className="py-2" style={feedsContainer}>
                            <div style={myRoundedStyle}>
                                <BsBell color={"#FFFFFF"} />
                            </div>
                            <div className="ml-2">You have 4 pending tasks</div>
                        </div>
                        <div className="py-2" style={feedsContainer}>
                            <div style={{ ...myRoundedStyle, backgroundColor: "#25CCF7" }}>
                                <FiDatabase color={"#FFFFFF"} />
                            </div>
                            <div className="ml-2">Server overloaded</div>
                        </div>
                        <div className="py-2" style={feedsContainer}>
                            <div style={{ ...myRoundedStyle, backgroundColor: "#F3B431" }}>
                                <AiOutlineShoppingCart color={"#FFFFFF"} />
                            </div>
                            <div className="ml-2">New order received</div>
                        </div>
                        <div className="py-2" style={feedsContainer}>
                            <div style={{ ...myRoundedStyle, backgroundColor: "#EA425C" }}>
                                <AiOutlineUser color="#FFFFFF" />
                            </div>
                            <div className="ml-2">New user registered</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default GraphStatus;