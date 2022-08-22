import { createContext, useContext, useReducer } from 'react'
import gamePlayReducer, { initialState } from './gamePlayReducer'

const GamePlayContext = createContext(initialState)

export const GamePlayProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gamePlayReducer, initialState)

  function toggleIsPlaying() {
    dispatch({
      type: 'TOGGLE_PLAYING'
    })
  }

  function setScore(score) {
    dispatch({
      type: 'SET_SCORE',
      payload: score + 1
    })
  }

  function setPlayerHand(hand) {
    dispatch({
      type: 'SET_PLAYER_HAND',
      payload: hand
    })
  }

  function setComputerHand() {
    dispatch({
      type: 'SET_COMPUTER_HAND'
    })
  }

  function compareHands(computer, player) {
    let result
    // scissors case
    if (computer === 'Scissors') {
      if (player === 'Paper') {
        result = 'you lose'
        setPlayerWin(result)
        setComputerWin(result)
      } else if (player === 'Lizard') {
        result = 'you lose'
        setPlayerWin(result)
        setComputerWin(result)
      } else if (computer === player) {
        result = `it's a tie`
        setPlayerWin(result)
        setComputerWin(result)
      } else {
        result = 'you win'
        setTimeout(() => {
          setPlayerWin(result)
          setComputerWin(result)
          setScore(state.score)
        }, 3000)
      }
    }
    //paper case
    if (computer === 'Paper') {
      if (player === 'Rock') {
        result = 'you lose'
        setPlayerWin(result)
        setComputerWin(result)
      } else if (player === 'Spock') {
        result = 'you lose'
        setPlayerWin(result)
        setComputerWin(result)
      } else if (computer === player) {
        result = `it's a tie`
        setPlayerWin(result)
        setComputerWin(result)
      } else {
        result = 'you win'
        setTimeout(() => {
          setPlayerWin(result)
          setComputerWin(result)
          setScore(state.score)
        }, 3000)
      }
    }
    //rock case
    if (computer === 'Rock') {
      if (player === 'Lizard') {
        result = 'you lose'
        setPlayerWin(result)
        setComputerWin(result)
      } else if (player === 'Scissors') {
        result = 'you lose'
        setPlayerWin(result)
        setComputerWin(result)
      } else if (computer === player) {
        result = `it's a tie`
        setPlayerWin(result)
        setComputerWin(result)
      } else {
        result = 'you win'
        setTimeout(() => {
          setPlayerWin(result)
          setComputerWin(result)
          setScore(state.score)
        }, 3000)
      }
    }
    // lizzard case
    if (computer === 'Lizard') {
      if (player === 'Spock') {
        result = 'you lose'
        setPlayerWin(result)
        setComputerWin(result)
      } else if (player === 'Paper') {
        result = 'you lose'
        setPlayerWin(result)
        setComputerWin(result)
      } else if (computer === player) {
        result = `it's a tie`
        setPlayerWin(result)
        setComputerWin(result)
      } else {
        result = 'you win'
        setTimeout(() => {
          setPlayerWin(result)
          setComputerWin(result)
          setScore(state.score)
        }, 3000)
      }
    }
    //spock case
    if (computer === 'Spock') {
      if (player === 'Scissors') {
        result = 'you lose'
        setPlayerWin(result)
        setComputerWin(result)
      } else if (player === 'Rock') {
        result = 'you lose'
        setPlayerWin(result)
        setComputerWin(result)
      } else if (computer === player) {
        result = `it's a tie`
        setPlayerWin(result)
        setComputerWin(result)
      } else {
        result = 'you win'
        setTimeout(() => {
          setPlayerWin(result)
          setComputerWin(result)
          setScore(state.score)
        }, 3000)
      }
    }
    //================
    dispatch({
      type: 'COMPARE_HANDS',
      payload: result
    })
  }

  function setPlayerWin(result) {
    let boolean
    if (result === 'you win') {
      boolean = true
    } else {
      boolean = false
    }
    dispatch({
      type: 'SET_PLAYER_WIN',
      payload: boolean
    })
  }

  function setComputerWin(result) {
    let boolean
    if (result === 'you lose') {
      boolean = true
    } else {
      boolean = false
    }
    dispatch({
      type: 'SET_COMPUTER_WIN',
      payload: boolean
    })
  }

  const value = {
    score: state.score,
    playerHand: state.playerHand,
    computerHand: state.computerHand,
    isPlaying: state.isPlaying,
    result: state.result,
    playerWin: state.playerWin,
    computerWin: state.computerWin,
    toggleIsPlaying,
    setScore,
    setPlayerHand,
    setComputerHand,
    compareHands
  }

  return <GamePlayContext.Provider value={value}>{children}</GamePlayContext.Provider>
}

const useGamePlay = () => {
  const context = useContext(GamePlayContext)
  return context
}
export default useGamePlay
