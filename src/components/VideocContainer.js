import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

function VideocContainer() {
  
  const[videos,setVideos]=useState([])
  useEffect(()=>{
    getVideo()
  },[])
  const getVideo=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API)
    const json=await data.json()
    setVideos(json.items)
  }
  
  return (
    <>
    {videos &&<div className='flex flex-wrap'>
       {videos.map(video=><Link key={video.id} to={`/watch?v=${video.id}`}><VideoCard  video={video}/></Link>)} 
       </div>
      }
      </>
  )
}

export default VideocContainer