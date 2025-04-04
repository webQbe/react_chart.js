/* Chart Component */
import React, {useState} from 'react'            // Imports React and the useState hook
import { Bar, Line, Pie } from 'react-chartjs-2' // Imports chart components from React wrapper for Chart.js

/* Import and register required parts of Chart.js */
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);


const Chart = () => {

  /* Chart State */
  const [data, setData] = useState({
      // x-axis labels (e.g. city names)
      labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
      // Chart data group
      datasets:[ 
        { 
          // Legend label ("Population")
          label: 'Population',
          // Y-values (population numbers)
          data: [617594, 181045, 153060, 106519, 105162, 95072],
          // Bar fill colors
          backgroundColor: [
                      'rgba(255, 99, 132, 0.6)', 
                      'rgba(54, 162, 235, 0.6)', 
                      'rgba(255, 206, 86, 0.6)', 
                      'rgba(75, 192, 192, 0.6)', 
                      'rgba(153, 102, 255, 0.6)', 
                      'rgba(255, 159, 64, 0.6)', 
                      'rgba(255, 99, 132, 0.6)', 
                      ]
        }
      ]
    })

  /* Rendering the Chart */
  return (
    /* Use <Bar /> component to render a bar chart. */
    <div className='chart'>
        <Bar
          data={data} 
          options={{
            plugins: {
              // Add chart title
              title: { 
                display: true,
                text: 'Largest Cities in MA',
                font: {
                  size: 25
                }
              },
              // Move chart legend to right
              legend: {
                display: true,
                position: 'right'
              }
            },
         }}
      />

    </div>
  )
}

export default Chart