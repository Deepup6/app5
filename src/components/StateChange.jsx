import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateChange = () => {
    var[Val,SetVal] = useState("")
  return (
    <div>
      <Typography variant='h3'>Welcome to {Val}</Typography>
      <Button variant='contained' onClick={()=>{SetVal("Home")}}>Home</Button>&nbsp;&nbsp;
      <Button variant='contained' color='secondary' onClick={()=>{SetVal("Gallery")}}>Gallery</Button>
      &nbsp;&nbsp;
      <Button variant='contained' color='error'>Contact</Button>

    </div>
  )
}

export default StateChange
