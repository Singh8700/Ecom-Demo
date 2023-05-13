import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {HashRouter as Router} from 'react-router-dom'
import { ProProvider } from "./components/contextApi/productContext"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
  <ProProvider>
    <App />
  </ProProvider>
  </Router>
  </React.StrictMode>,
)
