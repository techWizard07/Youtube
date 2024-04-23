import React from 'react'

function Button({name}) {
  return (
    <div>
        <button className="px-5 p-y-2 m-2 bg-gray-200 rounded-lg text-lg">{name}</button>
    </div>
  )
}

export default Button