import React, { useState, useContext } from 'react'
import Option from './Option'
import { optionsArray } from '../assets/options'
import { PlayerHand } from '../context/PlayerHandContext'

export default function Round() {
  const [playerChoice] = useContext(PlayerHand)
  let playerIndex
  function findIndex() {
    optionsArray.forEach((element, index) => {
      if (element.name === playerChoice) {
        playerIndex = index
      }
    })
  }

  findIndex()

  return (
    <>
      <div>
        <p>you picked</p>
        <Option
          selected={true}
          id={optionsArray[playerIndex].name}
          border={optionsArray[playerIndex].borderColor}
          shadow={optionsArray[playerIndex].shadowColor}
        >
          <img src={optionsArray[playerIndex].img} alt={optionsArray[playerIndex].name} />
        </Option>
      </div>
      <div>
        <p>you picked</p>
        <Option
          selected={true}
          id={optionsArray[playerIndex].name}
          border={optionsArray[playerIndex].borderColor}
          shadow={optionsArray[playerIndex].shadowColor}
        >
          <img src={optionsArray[playerIndex].img} alt={optionsArray[playerIndex].name} />
        </Option>
      </div>
    </>
  )
}
