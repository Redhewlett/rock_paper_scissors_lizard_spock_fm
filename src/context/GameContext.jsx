import React, { useReducer, useContext } from 'react'

export const GameState = React.createContext()

function reducer(previousState, action) {
  switch (action.type) {
    case 'TOGGLE_PLAYING':
      return {
        ...previousState,
        isPlaying: !previousState.isPlaying
      }
    case 'SET_SCORE':
      return {
        ...previousState,
        score: action.score
      }
    default:
      return previousState
  }
}

export function GameProvider({ children }) {
  const [gameState, dispatch] = useReducer(reducer, {
    score: 0,
    playerHand: undefined,
    computerHand: undefined,
    isPlaying: false
  })

  function toggleIsPlaying() {
    dispatch({
      type: 'TOGGLE_PLAYING'
    })
  }

  function setScore(score) {
    dispatch({
      type: 'SET_SCORE',
      score
    })
  }
  return <GameState.Provider value={[gameState, dispatch]}>{children}</GameState.Provider>
}

export function useGameState() {
  return useContext(GameState)
}
