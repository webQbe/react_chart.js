/* Chart Component */
import React, {useState} from 'react'            // Imports React and the useState hook
import { Bar, Line, Pie } from 'react-chartjs-2' // Imports chart components from React wrapper for Chart.js

/* Import and register required parts of Chart.js */
import {
  Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, 
  Tooltip, Legend, PointElement, ArcElement, LineElement
} from 'chart.js';

ChartJS.register(
  BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, 
  PointElement, ArcElement, LineElement
);


const Chart = ({ chartData, legendPosition, location }) => { // Receive props from App.jsx

  // Guard clause to prevent rendering if data is missing
  if (!chartData || !chartData.labels || !chartData.datasets) {
    return <p>Loading chart data...</p>;
  }

  /* Create options state variable  */
  const [options] = useState({
    displayTitle: true,     // whether to show the chart title
    displayLegend: true,    // whether to show the legend
    legendPosition: 'right', //  the position of the legend (e.g. 'top', 'right', 'bottom', 'left')
    location: 'MA' // Use as default if not passed as a prop
  })

  /* Rendering the Chart */
  return (
    /* Use <Bar /> component to render a bar chart. */
    <div className='chart'>
      {/* Bar Chart Component */}
      <Bar
          data={chartData} // ← using the prop passed from App.jsx} 
          options={{
            plugins: {
              // Add chart title
              title: { 
                display: options.displayTitle, // Controls if the title is shown
                text: `Largest Cities in ${ location || options.location }`, // prop's location is prioritized
                font: {
                  size: 25
                }
              },
              legend: {
                display: options.displayLegend,  // Controls if the legend is shown
                position: legendPosition // Sets the position
              }
            },
         }}
       />

      {/* Line Chart Component */}
      <Line
          data={chartData}
          options={{
            plugins: {
              title: { 
                display: options.displayTitle, 
                text: `Largest Cities in ${ location || options.location }`,
                font: {
                  size: 25
                }
              },
              legend: {
                display: options.displayLegend,  
                position: legendPosition
              }
            },
         }}
       />
       
      {/* Pie Chart Component */}
      <Pie
          data={chartData}
          options={{
            plugins: {
              title: { 
                display: options.displayTitle, 
                text: `Largest Cities in ${ location || options.location }`,
                font: {
                  size: 25
                }
              },
              legend: {
                display: options.displayLegend,  
                position: legendPosition
              }
            },
         }}
       />

    </div>
  )
}

export default Chart