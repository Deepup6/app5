import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setCount] = useState(0)
    const inc = ()=>{
        setCount(++count)
    }
    const dec = ()=>{
        setCount(--count)
    }
  return (
    <div>
      <Typography variant='h2'>{count}</Typography>
      <Button variant='contained' color='success' onClick={inc}>+</Button>
      &nbsp;&nbsp;
      <Button variant='contained' color='error' onClick={dec}>-</Button>

    </div>
  )
}
export default Counter

