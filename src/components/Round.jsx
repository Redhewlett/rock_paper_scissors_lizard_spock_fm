import React, { useEffect } from 'react'
import Option from './Option'
import { optionsArray } from '../assets/options'
import useGamePlay from '../contexts/GamePlayContext'

export default function Round() {
  const { toggleIsPlaying, playerHand, computerHand, compareHands, result } = useGamePlay()
  //play again
  function playAgain() {
    toggleIsPlaying()
  }

  let playerIndex
  function findIndex() {
    optionsArray.forEach((element) => {
      if (element.name === playerHand) {
        const index = optionsArray.indexOf(element)
        playerIndex = index
      }
    })
  }
  findIndex()

  //compare hands and decide winner
  useEffect(() => {
    const computer = optionsArray[computerHand].name
    const player = optionsArray[playerIndex].name
    compareHands(computer, player)
  }, [])

  return (
    <>
      <div className='picked'>
        <p>you picked</p>
        <Option
          selected={true}
          id={optionsArray[playerIndex].name}
          border={optionsArray[playerIndex].borderColor}
          shadow={optionsArray[playerIndex].shadowColor}
          disabled={true}
        >
          <img src={optionsArray[playerIndex].img} alt={optionsArray[playerIndex].name} />
        </Option>
      </div>
      <div className='announce'>
        <p>{result}</p>
        <button onClick={playAgain}>play again</button>
      </div>
      <div className='picked'>
        <p>the house picked</p>
        <Option
          selected={true}
          id={optionsArray[computerHand].name}
          border={optionsArray[computerHand].borderColor}
          shadow={optionsArray[computerHand].shadowColor}
          disabled={true}
        >
          <img src={optionsArray[computerHand].img} alt={optionsArray[computerHand].name} />
        </Option>
      </div>
    </>
  )
}
