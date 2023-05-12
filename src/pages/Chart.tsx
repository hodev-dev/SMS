import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    animation: {
        duration: 0,
    },
    scales: {
        x: {
            ticks: {
                color: "white",
            },
            border: {
                dash: [8, 4],
            },
            grid: {
                color: '#ffffff',
                borderColor: '#ffffff',
            }
        },
        y: {
            ticks: {
                color: "white",
            },
            border: {
                dash: [2, 4],
            },
            grid: {
                color: '#ffffff',
                borderColor: '#ffffff'
            }
        }
    },
    responsive: true,
    rtl: true,
    plugins: {
        legend: {
            position: 'top' as const,
            textDirection: "rtl",
            labels: {
                color: "#ffffff"
            },
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
            color: "#ffffff",
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [1, 2, 3, 4, 5, 6, 7, 8],
            backgroundColor: 'white',
        },
        {
            label: 'Dataset 2',
            data: [1, 2, 3, 4, 5, 6, 7, 8],
            backgroundColor: 'orange',
        },
    ],
};

function Chart() {
    return <Bar options={ options } data={ data } />;
}
export default Chart;
