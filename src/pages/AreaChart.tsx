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
    purple: {
        default: "rgba(149, 76, 233, 1)",
        half: "rgba(149, 76, 233, 0.5)",
        quarter: "rgba(149, 76, 233, 0.25)",
        zero: "rgba(149, 76, 233, 0)"
    },
    indigo: {
        default: "rgba(80, 102, 120, 1)",
        quarter: "rgba(80, 102, 120, 0.25)"
    }
};

export const data = {
    labels,
    datasets: [
        {
            fill: "start",
            label: 'Dataset 1',
            data: [300, 700, 2000, 400, 250, 500, 500],
            backgroundColor: (context: ScriptableContext<"line">) => {
                const ctx = context.chart.ctx;
                var gradient = ctx.createLinearGradient(0, 25, 0, 300);
                gradient.addColorStop(0, colors.purple.half);
                gradient.addColorStop(0.8, colors.purple.quarter);
                gradient.addColorStop(1, colors.purple.zero);
                return gradient;
            },
            pointBackgroundColor: colors.purple.default,
            borderColor: colors.purple.default,
            lineTension: 0.2,
            borderWidth: 2,
            pointRadius: 3
        },
        {
            fill: "start",
            label: 'Dataset 2',
            data: [860, 1140, 1060, 1060, 1000, 2000, 4000],
            backgroundColor: (context: ScriptableContext<"line">) => {
                const ctx = context.chart.ctx;
                var gradient = ctx.createLinearGradient(0, 0, 0, 300);
                var gradient = ctx.createLinearGradient(0, 25, 0, 300);
                gradient.addColorStop(0, colors.indigo.default);
                gradient.addColorStop(0.9, colors.indigo.quarter);
                return gradient;
            },
            pointBackgroundColor: colors.indigo.default,
            borderColor: colors.indigo.default,
            lineTension: 0.2,
            borderWidth: 2,
            pointRadius: 3
        },
    ],
};

export function AreaChart() {
    return <Line options={ options } data={ data } />;
}
