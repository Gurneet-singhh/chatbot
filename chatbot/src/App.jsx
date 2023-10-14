import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Chatbot.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Wlecome to Gurneet singh chat service</h1>
      <div className="card">
        <p className="read-the-docs">
          To add this service to your website you just have to add below tag at
          the bottom of the body element
        </p>
      </div>
      <h3>
        {

          `<script src="myScript.js" />`
        }
      </h3>
    </>
  );
}

export default App
