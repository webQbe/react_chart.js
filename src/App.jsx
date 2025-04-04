/* Main App Component */
import { useState } from 'react'
import './App.css'                     // Import CSS styles
import Chart from './components/Chart' // Import Chart component

function App() {
  
  /* Render:
    A heading: "React with Chart.js".
    The Chart component inside a div with class App. */
  return (
      <div className='App'>
        <h1>React with Chart.js</h1>
        <Chart />
      </div>
  )
}

export default App
