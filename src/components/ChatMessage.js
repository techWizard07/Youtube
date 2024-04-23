import React from 'react'

function ChatMessage({name,message}) {
  return (
    <div className='flex items-center gap-2 my-1 '>
        

          <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" className='h-8' alt="user-icon" />
      <span className='font-semibold text-lg'>{name}</span>
     
      <span className='pl-2 overflow-y-hidden break-all '>{message}</span>
    </div>
  )
}

export default ChatMessage