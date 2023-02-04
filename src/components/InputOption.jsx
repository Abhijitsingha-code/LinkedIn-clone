import React from 'react'
import './InputOption.css'

const InputOption = ({Icon,text, color}) => {
  return (
    <div className='inputOption'>
        <Icon style={{color:color}}/>
        <p>{text}</p>
    </div>
  )
}

export default InputOption