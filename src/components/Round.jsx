import React, { useState, useContext, useEffect } from 'react'
import Option from './Option'
import { optionsArray } from '../assets/options'
import { PlayerHand } from '../context/PlayerHandContext'

export default function Round() {
  const [playerChoice, setPlayerChoice] = useContext(PlayerHand)
  let handIndex
  function findIndex() {
    optionsArray.forEach((element, index) => {
      if (element.name === playerChoice) {
        handIndex = index
      }
    })
  }

  findIndex()

  return (
    <section className='game'>
      <div>
        <p>you picked</p>
        <Option selected={true} id={optionsArray[handIndex].name} border={optionsArray[handIndex].borderColor} shadow={optionsArray[handIndex].shadowColor}>
          <img src={optionsArray[handIndex].img} alt={optionsArray[handIndex].name} />
        </Option>
      </div>
      <div>
        <p>you picked</p>
        <Option selected={true} id={optionsArray[handIndex].name} border={optionsArray[handIndex].borderColor} shadow={optionsArray[handIndex].shadowColor}>
          <img src={optionsArray[handIndex].img} alt={optionsArray[handIndex].name} />
        </Option>
      </div>
    </section>
  )
}
