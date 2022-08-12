import React, { useState } from 'react'

export const GameState = React.createContext()

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return <GameState.Provider value={[isPlaying, setIsPlaying]}>{children}</GameState.Provider>
}
