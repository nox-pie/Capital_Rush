import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function TradingChart() {
  const data = {
    labels: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    datasets: [{
      label: 'Stock Price',
      data: [150, 152, 148, 154, 153, 156, 155],
      borderColor: '#007bff',
      tension: 0.4,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'AAPL Stock Price',
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default TradingChart;