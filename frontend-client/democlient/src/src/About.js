import React from "react"
import {Line} from "react-chartjs-2";

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        }
    }

    plotChart = () => {
        this.setState({chartData: {
            labels: ["mon", "thu", "wed", "thr", "fri", "sat", "sun"],
            datasets: [
                {
                    label: "level",
                    data: [10, 30, 40, 100, 9, 60, 56],
                    backgroundColor: [
                        "rgba(210, 60, 70, 0.85)"
                    ],
                    borderWidth: 4
                }
            ]
        }});
    }

    componentDidMount() {
        this.plotChart();
    }

    render() {
        return(
            <div className="i-wrapper">
                <h1>Data</h1>
                <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="https://github.com/Kyjko">GitHub</a></li>
                </ul>
                </nav>
                <div className="chart-wrapper">
                <Line data={this.state.chartData} options={{
                    responsive: true,
                    title: {test: "DataLabel", display: true},
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: true
                                }
                            }
                        ]
                    }
                }}/>
                </div>
            </div>
        );
    }
}

export default About;