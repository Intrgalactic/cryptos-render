import accountData from 'utils/account-data.json';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    LineElement,
    PointElement,
    BarElement
} from 'chart.js';
import { defaults } from 'chart.js';

const labels = [accountData.userData.days, accountData.marketData.days];
defaults.font.family = "Exo2-ExtraBold";
defaults.color = "black";
ChartJS.register(
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    BarElement,
    LineElement
)

export const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
    scales: {
        x: {
            grid: {
                display: false,

            },
            border: {
                display: false
            },
            ticks: {
                font: {
                    size: 19,

                },
                maxRotation: 0
            }
        },
        y: {
            display: false,
            grid: {
                display: false
            },

            beginAtZero: true
        }
    },
    plugins: {
        tooltip: {
            yAlign: "top",
            displayColors: false,
            padding: 15,
        }
    }
}

var marketCapDataObj = {
    labels,
    datasets: [
        {
            type: "line",
            label: "cap",
            data: accountData.marketData.marketCap,
            borderColor: '#1CC600',
            backgroundColor: "rba(0,0,0,0.7)",
            pointBackgroundColor: "white",
            pointBorderColor: "#60DA65",
            pointRadius: 5,
            pointBorderWidth: 4,
            borderWidth: 4
        }
    ]
}
marketCapDataObj.labels = labels[1];

export const marketCapData = marketCapDataObj;

var monthPnlDataObj = {
    labels,
    datasets: [
        {
            type: "bar",
            label: 'Profit',
            data: accountData.userData.pnl,
            backgroundColor: [
                '#9309FF',
                '#FF0861',
                '#9309FF',
                '#FF0861',
                '#9309FF',
                '#FF0861',
                '#FF0861',
                '#9309FF',
                '#9309FF',
                '#FF0861',
                '#9309FF',
                '#FF0861',
                '#9309FF',
                '#9309FF',

            ],
            borderRadius: 5,
        }
    ]
}
monthPnlDataObj.labels = labels[0];

export const monthPnlData = monthPnlDataObj;