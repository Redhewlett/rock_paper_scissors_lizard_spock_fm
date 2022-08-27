import styled from 'styled-components'
// import { useGameState } from '../context/GameContext'
import useGamePlay from '../contexts/GamePlayContext'

const OptionButton = styled.button`
  width: ${(props) => (props.selected ? '13vw' : '7vw')};
  display: flex;
  aspect-ratio: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: ${(props) => (props.selected ? '25px' : '15px')} solid ${(props) => (props.border ? props.border : 'black')};
  box-shadow: 0px 4px 0px 1px hsl(217, 16%, 85%) inset, 0px 5px 0px 1px ${(props) => (props.shadow ? props.shadow : 'hsl(217, 16%, 85%)')},
    0px 5px 10px -1px rgba(0, 0, 0, 0.43) ${(props) => (props.winner ? ',0px 3px 0px 60px rgba(255, 255, 255, 0.062) ,0px 3px 0px 120px rgba(255, 255, 255, 0.034),0px 3px 0px 200px rgba(255, 255, 255, 0.021)' : '')};
  position: ${(props) => (props.selected ? 'static' : 'absolute')};
  animation-name: ${(props) => (props.winner ? 'radiation' : '')};
  animation-duration: ${(props) => (props.winner ? '700ms' : '')};
  animation-timing-function: ${(props) => (props.winner ? 'ease-in-out' : '')};
  animation-iteration-count: ${(props) => (props.winner ? '' : '')};

  :nth-of-type(1) {
    top: -18%;
    left: 35%;
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

  & img {
    width: ${(props) => (props.selected ? '5vw' : '')};
  }

  @keyframes radiation {
    0% {
      box-shadow: 0px 3px 0px 30px rgba(255, 255, 255, 0.062);
    }
    25% {
      box-shadow: 0px 3px 0px 60px rgba(255, 255, 255, 0.062);
    }
    50% {
      box-shadow: 0px 3px 0px 60px rgba(255, 255, 255, 0.062), 0px 3px 0px 60px rgba(255, 255, 255, 0.034);
    }
    75% {
      box-shadow: 0px 3px 0px 60px rgba(255, 255, 255, 0.062), 0px 3px 0px 120px rgba(255, 255, 255, 0.034);
    }
    90% {
      box-shadow: 0px 3px 0px 60px rgba(255, 255, 255, 0.062), 0px 3px 0px 120px rgba(255, 255, 255, 0.034), 0px 3px 0px 120px rgba(255, 255, 255, 0.021);
    }
    100% {
      box-shadow: 0px 3px 0px 60px rgba(255, 255, 255, 0.062), 0px 3px 0px 120px rgba(255, 255, 255, 0.034), 0px 3px 0px 200px rgba(255, 255, 255, 0.021);
    }
  }
  @media screen and (max-width: 375px) {
    width: ${(props) => (props.selected ? '32vw' : '25vw')};
    border: ${(props) => (props.selected ? '15px' : '10px')} solid ${(props) => (props.border ? props.border : 'black')};
    box-shadow: 0px 4px 0px 1px hsl(217, 16%, 85%) inset, 0px 5px 0px 1px ${(props) => (props.shadow ? props.shadow : 'hsl(217, 16%, 85%)')},
      0px 5px 10px -1px rgba(0, 0, 0, 0.43) ${(props) => (props.winner ? ',0px 3px 0px 25px rgba(255, 255, 255, 0.062) ,0px 3px 0px 60px rgba(255, 255, 255, 0.034),0px 3px 0px 100px rgba(255, 255, 255, 0.021)' : '')};
    & img {
      width: ${(props) => (props.selected ? '10vw' : '10vw')};
    }
  }
`

export default function Option(props) {
  const { toggleIsPlaying, setPlayerHand, setComputerHand } = useGamePlay()

  function handleClick(e) {
    if (props.disabled) {
      return
    }

    if (e.target.id) {
      setPlayerHand(e.target.id)
    } else {
      setPlayerHand(e.target.alt)
    }
    setComputerHand()
    toggleIsPlaying()
  }

  return (
    <OptionButton
      disabled={props.disabled}
      winner={props.winner}
      onClick={handleClick}
      selected={props.selected}
      id={props.id}
      border={props.border}
      shadow={props.shadow}
    >
      {props.children}
    </OptionButton>
  )
}
