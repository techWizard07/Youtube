import React from 'react'



function VideoCard({video}) {
    if(!video) return null
    const{snippet,statistics}=video
    const{channelTitle,localized,thumbnails}=snippet
    const{viewCount}=statistics
    
    return (
       
        <div className='p-2 m-2 w-72 shadow-lg rounded-lg'>
        <img src={thumbnails.medium.url} alt="Video Thumbnail" />
        <ul>
            <li className='font-bold'>{localized.title}</li>
            <div className='flex justify-between'>
            <li className='font-semibold'>{channelTitle}</li>
            <li>{Math.floor(viewCount/1000)<1000 ? Math.floor(viewCount/1000)+"k views":Math.floor(viewCount/1000000).toFixed(1)+"M views"}</li>
          
            </div>
        </ul>
        </div>
      
  )
}

export default VideoCard