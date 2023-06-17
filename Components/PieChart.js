import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const options = {
    responsive: true,
    tension: 0.3,
    plugins: {
        legend: {
            position: "left",
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 14
                }
            }
        },
        title: {
            display: true,
            text: "Lieux les plus visités",
        },
    },
    backgroundColor: "white",
};

const data = {
  labels: ['Alger', 'Oran', 'Annaba'],
  datasets: [
    {
      label: 'Visiteur',
      data: [120, 119, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 2,
    },
  ],
};

export function PieChart() {
  return <Doughnut options={options} data={data} />;
}