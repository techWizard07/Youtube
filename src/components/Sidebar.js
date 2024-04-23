import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Sidebar() {

  const isMenuOpen=useSelector(store=>store.hamburger.isMenuOpen)
  return (
    <>
   {isMenuOpen && <div className='p-5 shadow-lg w-48'>
    <ul>
     <Link to="/"><li>Home</li></Link>
      <li>Shorts</li>
      <li>Video</li>
      <li>Live</li>
    </ul>
        <h1 className="font-bold">Subscription</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    
        <h1 className="font-bold">Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        
    </div>}
    </>
  )
}

export default Sidebar