import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './index.css'

window.x = 1;
window.y = 1;
window.z = 1;
// main react stuff
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
