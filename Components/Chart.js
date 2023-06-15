import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const Chart = () => {
    const options = {
        responsive: true,
        tension: 0.3,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Total views & comments",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        backgroundColor: "white",
    };

    const labels = [
        "Dim",
        "Lun",
        "Mar",
        "Mer",
        "Jeu",
        "Ven",
        "Sam"
    ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Commentaire",
                data: [
                    6000, 5003, 3291, 5210, 8012, 4212, 6212, 4676, 6565, 4422, 4323,
                    8078,
                ],
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                pointStyle: "circle",
            },
            {
                label: " visite",
                data: [
                    8012, 4212, 6212, 4676, 6565, 4422, 6000, 5003, 3291, 5210, 4323,
                    1078,
                ],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
                pointStyle: "circle",
            },
        ],
    };

    return <Line data={data} options={options} />;
};

export default Chart;