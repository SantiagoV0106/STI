import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PlayersContextProvider } from './context/PlayersContext/PlayersContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlayersContextProvider>
      <App />
    </PlayersContextProvider>
  </React.StrictMode>,
)
