import React, { useEffect } from 'react'
import VideocContainer from './VideocContainer'
import Buttonlist from './Buttonlist'
import { useDispatch } from 'react-redux'
import { closeCollapse } from '../utils/hamburgerSlice'

function Maincontainer() {
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(closeCollapse(true))
  },[])
  return (
    <div >
        <Buttonlist/>
        <VideocContainer/>
    </div>
  )
}

export default Maincontainer