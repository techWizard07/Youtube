import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeCollapse} from'../utils/hamburgerSlice'
import {useSearchParams } from 'react-router-dom'
import Comments from './Comments'
import LiveChat from './LiveChat'
function Watchcontainer() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(closeCollapse())
  },[])
  const [searchParams]=useSearchParams()
  const videoId=searchParams.get("v")

  return (
    <div className="flex flex-col w-full pl-28">
        <div className="w-full flex">
          <div className='w-full'>
            <iframe width="900"
               height="450" 
               src={`https://www.youtube.com/embed/${videoId}`} 
               title="YouTube video player" 
               frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
               allowFullScreen>
             </iframe>
          </div>
          <div className="w-full">
          <LiveChat/>
          </div>
        </div>

      <Comments/>
    </div>
  )
}

export default Watchcontainer