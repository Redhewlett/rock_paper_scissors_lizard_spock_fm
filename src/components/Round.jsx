import React, { useState, useEffect } from 'react'
import Option from './Option'
import { optionsArray } from '../assets/options'
import useGamePlay from '../contexts/GamePlayContext'

export default function Round() {
  const { toggleIsPlaying, playerHand, computerHand, compareHands, result, playerWin, computerWin } = useGamePlay()
  const [revealAnnounce, setRevealAnnounce] = useState(false)
  const [revealComputerHand, setRevealComputerHand] = useState(false)
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
    //reveal the computer hand
    setTimeout(() => {
      setRevealComputerHand(true)
    }, 1000)
    //then show the result
    setTimeout(() => {
      setRevealAnnounce(true)
    }, 2000)
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
          winner={playerWin}
        >
          <img src={optionsArray[playerIndex].img} alt={optionsArray[playerIndex].name} />
        </Option>
      </div>
      {revealAnnounce ? (
        <div className='announce'>
          <p>{result}</p>
          <button onClick={playAgain}>play again</button>
        </div>
      ) : (
        ''
      )}
      <div className='picked'>
        <p>the house picked</p>
        {revealComputerHand ? (
          <Option
            selected={true}
            id={optionsArray[computerHand].name}
            border={optionsArray[computerHand].borderColor}
            shadow={optionsArray[computerHand].shadowColor}
            disabled={true}
            winner={computerWin}
          >
            <img src={optionsArray[computerHand].img} alt={optionsArray[computerHand].name} />
          </Option>
        ) : (
          <div className='circle-preview w-24 h-24 lg:w-56 lg:h-56 rounded-full '></div>
        )}
      </div>
    </>
  )
}
