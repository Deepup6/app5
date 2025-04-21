import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[name,setName] = useState("Tiya")
    const changeName = ()=>{
        setName("Deepu")
    }
  return (
    <div>
      <Typography variant='h1'>Welcome {name}</Typography>
      <Button variant='contained'
      onClick={changeName}>nChange</Button>
      &nbsp;
      <Button variant='contained' onClick={()=>{setName("Meera")}}>Change</Button>
    </div>
  )
}

export default StateBasics

