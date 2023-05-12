import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    ScriptableContext,
    Title,
    Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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


export const options = {
    elements: {
        line: {
            tension: 0.25
        }
    },
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
                display: false,
                color: '#ffffff',
                borderColor: '#ffffff'
            }
        }
    },
    responsive: true,
    rtl: true,
    plugins: {
        filler: {
            propagate: false
        },
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
const colors = {
    orange: {
        default: "rgba(253,231,55,1)",
        half: "rgba(253,231,55,0.5)",
        quarter: "rgba(253,231,55,0.1)",
        zero: "rgba(253,231,55,0)"
    },
};

export const data = {
    labels,
    datasets: [
        {
            fill: "start",
            label: 'Dataset 1',
            data: [700, 200, 400, 200, 700, 280, 0],
            backgroundColor: (context: ScriptableContext<"line">) => {
                const ctx = context.chart.ctx;
                var gradient = ctx.createLinearGradient(0, 25, 0, 300);
                gradient.addColorStop(0, colors.orange.half);
                gradient.addColorStop(0.8, colors.orange.quarter);
                gradient.addColorStop(1, colors.orange.zero);
                return gradient;
            },
            pointBackgroundColor: colors.orange.default,
            borderColor: colors.orange.default,
            lineTension: 0.2,
            borderWidth: 2,
            pointRadius: 3
        },
    ],
};

export function AreaChart2() {
    return <Line options={ options } data={ data } />;
}
