/* Main App Component */
import { useState, useEffect } from 'react'
import './App.css'                     // Import CSS styles
import Chart from './components/Chart' // Import Chart component

function App() {

   // Store chartData state 
   const [chartData, setChartData] = useState({})

  // Fetch data and update chartData state when the component mounts
   useEffect(() => { 
    
    const getChartData = () => {

    // Ajax calls here

    // Update chartData state
    setChartData({
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
    }
    
    getChartData(); 

  }, []);
  
  /* Render:
    A heading: "React with Chart.js".
    The Chart component inside a div with class App. */
  return (
      <div className='App'>
        <h2>React with Chart.js</h2>
        <Chart 
          chartData={chartData} // Pass chartData as a prop to <Chart />
        /> 
      </div>
  )
}

export default App
