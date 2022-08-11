import React from 'react'
import styled from 'styled-components'

const OptionButton = styled.div`
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
  position: absolute;

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
`

export default function Option(props) {
  return (
    <OptionButton border={props.border} shadow={props.shadow}>
      {props.children}
    </OptionButton>
  )
}
