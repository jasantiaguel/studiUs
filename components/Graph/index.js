import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from 'react';


ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart({results}) {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            type: 'pie', // Change type to 'pie'
            labels: ["SPQR/PQ4R", "Leitner", "Retrieval", "Feynman"],
            datasets: [
                {
                    data: results,
                    borderColor: [
                        'rgb(53, 162, 235)',
                        'rgb(0, 162, 65)',
                        'rgb(53, 32, 235)',
                        'rgb(53, 162, 5)',
                    ],
                    backgroundColor: [
                        'rgb(53, 162, 235, 0.4)',
                        'rgb(23, 162, 65, 0.4)',
                        'rgb(53, 32, 235, 0.4)',
                        'rgb(53, 262, 5, 0.4)',
                    ],
                    borderWidth: 1,
                }
            ]
        });

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Studius Quiz Results'
                },
                maintainAspectRatio: false,
                responsive: true
            },
            cutout: '60%' // Hole size
        })

    }, [])
    console.log(chartData);
    return (
        <div>
            <Pie data={chartData} options={chartOptions} style={{ width: "250px", height: "250px" }} />
        </div>
    )
}