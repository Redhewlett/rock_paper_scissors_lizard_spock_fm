import React, { useState } from 'react'

export const PlayerHand = React.createContext()

export function PlayerHandProvider({ children }) {
  const [playerChoice, setPlayerChoice] = useState('')

  return <PlayerHand.Provider value={[playerChoice, setPlayerChoice]}>{children}</PlayerHand.Provider>
}
