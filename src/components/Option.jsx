import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { PlayerHand } from '../context/PlayerHandContext'
import { GameState } from '../context/GameContext'

const OptionButton = styled.button`
  width: 7vw;
  display: flex;
  aspect-ratio: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 15px solid ${(props) => (props.border ? props.border : 'black')};
  box-shadow: 0px 4px 0px 1px hsl(217, 16%, 85%) inset, 0px 5px 0px 1px ${(props) => (props.shadow ? props.shadow : 'hsl(217, 16%, 85%)')},
    0px 5px 10px -1px rgba(0, 0, 0, 0.43);
  position: ${(props) => (props.selected ? 'static' : 'absolute')};

  :nth-of-type(1) {
    top: ${(props) => (props.selected ? '0' : '-18%')};
    left: ${(props) => (props.selected ? '0' : '35%')};
  }
  :nth-of-type(2) {
    top: 25%;
    right: -15%;
  }
  :nth-of-type(3) {
    bottom: -15%;
    right: 4%;
  }
  :nth-of-type(4) {
    bottom: -15%;
    left: 4%;
  }
  :nth-of-type(5) {
    top: 25%;
    left: -15%;
  }
`

export default function Option(props) {
  const [playerChoice, setPlayerChoice] = useContext(PlayerHand)
  const [isPlaying, setIsPlaying] = useContext(GameState)

  function handleClick(e) {
    let choice
    if (e.target.id) {
      choice = e.target.id
    } else {
      choice = e.target.alt
    }

    setPlayerChoice(choice)
    setIsPlaying(true)
  }

  return (
    <OptionButton onClick={handleClick} selected={props.selected} id={props.id} border={props.border} shadow={props.shadow}>
      {props.children}
    </OptionButton>
  )
}
