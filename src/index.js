import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { PlayerHandProvider } from './context/PlayerHandContext'
import { GameProvider } from './context/GameContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <PlayerHandProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </PlayerHandProvider>
  </React.StrictMode>
)
