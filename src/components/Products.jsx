import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
    var[data,setData] = useState([])
    //useEffect-to show the data when page is loaded for the first time
    //useEffect(()=>{},[])
    useEffect(()=>{
    //    axios.get("url").then((res)=>{}).catch((err)=>{})
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
    })
        .catch((err)=>{console.log(err)})
    },[])
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((val,i)=>{
                    return(
                        <TableRow key={i}>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.username}</TableCell>
                            <TableCell>{val.email}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Products
