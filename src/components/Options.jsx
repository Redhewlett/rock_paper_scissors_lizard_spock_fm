import React from 'react'
import Option from './Option'
import Scissors from '../assets/images/icon-scissors.svg'
import Paper from '../assets/images/icon-paper.svg'
import Rock from '../assets/images/icon-rock.svg'
import Lizard from '../assets/images/icon-lizard.svg'
import Spock from '../assets/images/icon-spock.svg'
import Pentagon from '../assets/images/bg-pentagon.svg'
export default function Options() {
  const optionsArray = [
    {
      name: 'Scissors',
      img: Scissors,
      borderColor: 'hsl(40, 84%, 53%)',
      shadowColor: 'hsl(39, 89%, 39%)'
    },
    {
      name: 'paper',
      img: Paper,
      borderColor: 'hsl(230, 89%, 65%)',
      shadowColor: 'hsl(230, 89%, 59%)'
    },
    {
      name: 'Rock',
      img: Rock,
      borderColor: 'hsl(349, 70%, 56%)',
      shadowColor: 'hsl(349, 71%, 46%)'
    },
    {
      name: 'Lizard',
      img: Lizard,
      borderColor: 'hsl(261, 72%, 63%)',
      shadowColor: 'hsl(261, 73%, 55%)'
    },
    {
      name: 'Spock',
      img: Spock,
      borderColor: 'hsl(189, 58%, 57%)',
      shadowColor: 'hsl(189, 59%, 41%)'
    }
  ]

  return (
    <section className='options'>
      {optionsArray.map((option, index) => (
        <Option key={index} border={option.borderColor} shadow={option.shadowColor}>
          <img src={option.img} alt={option.name} />
        </Option>
      ))}
      <div className='pentagon-box'>
        <img className='pentagon' src={Pentagon} alt='pentagon shape' />
      </div>
    </section>
  )
}
