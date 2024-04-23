import React from 'react'
import Button from './Button'

function Buttonlist() {
  const buttonNames=["All","Games","Coding","Aritificial Intelligence","Laptop","Home","Bike","Car","India","Electorl Bond","Murungan"]
  return (
    <div className='flex'>
      {buttonNames.map(buttonName=> <Button key={buttonName} name={buttonName}/>)}
      
    </div>
  )
}

export default Buttonlist