import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCollapse } from '../utils/hamburgerSlice'
import {YOUTUBE_SEARCH_API} from '../utils/constants'
import { addSuggesstionResults } from '../utils/searchSLice'


function Head() {
  const dispatch=useDispatch()
  const [searchData,setSearchData]=useState("")
  const [suggestions,setSuggestions]=useState([])
  const [showSuggestions,setShowSuggestions]=useState(false)



  const handleHamburger=()=>{
    dispatch(changeCollapse())
  }

  const searchCache=useSelector(store=>store.search)
  
  useEffect(()=>{
    if(searchCache[searchData]){
      setSuggestions(searchCache[searchData])
    
    }
    else{
      const timer=setTimeout(()=>getSearchSugsestions(),200)
      return ()=>{
        clearTimeout(timer)
      }
    }
  },[searchData])

  const getSearchSugsestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchData);
    const json = await data.json();
   
    setSuggestions(json[1]);
    dispatch(addSuggesstionResults({
      [searchData]: json[1]
    }))
  };
  
 
 
  return (
    <div onScroll={()=>setShowSuggestions(false)} className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className="flex col-span-1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fZpy4cqb8TgfeMbYE5w_LXTaIMVqDLmorIZmHZ4uzA&s" alt="menu" className='h-8 cursor-pointer' onClick={handleHamburger} />
      
       <img  src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg " alt="Youtube-logo" className=' cursor-pointer h-16 -mt-4 px-4' />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {suggestions && showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul onClick={()=>console.log(suggestions)}>
              {suggestions.map((s,index) => (
                <li key={index}  className="cursor-pointer py-2 px-3 shadow-sm hover:bg-gray-100" >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* <div className="col-span-10 text-center ">
        <input type="text"  className='rounded-l-full w-1/2 border border-gray-500 p-2 h-10' value={searchData} onChange={(e)=>setSearchData(e.target.value)} onFocus={()=>setSuggestionsShow(true)} onBlur={()=>setSuggestionsShow(false)}/>
        <button className='bg-gray-500 text-white p-2 rounded-r-full h-10 backdrop:px-4'>Search</button>
      { suggestionsShow&&
        <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
          {suggestions.map(suggestion=><li key={suggestion} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{suggestion}</li>)}
          </ul>
        </div>
      }
      </div> */}
      <div className="col-span-1">
        <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" className='h-12' alt="user-icon" />
      </div>
    </div>
  )
}

export default Head