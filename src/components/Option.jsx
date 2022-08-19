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
    0px 5px 10px -1px rgba(0, 0, 0, 0.43);
  position: ${(props) => (props.selected ? 'static' : 'absolute')};

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
    <OptionButton disabled={props.disabled} onClick={handleClick} selected={props.selected} id={props.id} border={props.border} shadow={props.shadow}>
      {props.children}
    </OptionButton>
  )
}
