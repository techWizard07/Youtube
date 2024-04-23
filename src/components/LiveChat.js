import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { randomMessageGenerator, randomNameGenerator } from '../utils/helper'

const LiveChat = () => {
    const dispatch=useDispatch()
    const[liveMessage,setLiveMessage]=useState("")
    const liveChatMessage=useSelector(store=>store.chat.messages)

    useEffect(()=>{
        const apipool=setInterval(()=>{
            console.log("API POOLING!!!")

            dispatch(addMessage({
                name:randomNameGenerator(),
                message:randomMessageGenerator(20)
            }))
            
        },1500)
        return ()=>{
            clearInterval(apipool)
        }

    },[])

  


  return (
    <>
    <div className='w-450 h-[400px] text-bold mx-2 p-2 border border-black rounded-lg bg-slate-200 overflow-y-scroll flex flex-col-reverse'>
        {liveChatMessage && liveChatMessage.map((msg,index)=><ChatMessage key={index} name={msg.name} message={msg.message}/>)}
        </div>
        <form classname="h-[50px] w-full p-2 m-2 " onSubmit={(e)=>{
            e.preventDefault()
            dispatch(addMessage({
                name:"Akash",
                message:liveMessage
            }))
            setLiveMessage("")
            }}>
            <input type="text" className=' w-9/12 p-2 m-2 border border-b-black outline-none' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} />
            <button className="p-2 w-2/12 m-2 rounded-lg bg-green-200">send</button>
        </form>
    </>
  )
}

export default LiveChat