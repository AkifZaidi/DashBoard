import React, { useEffect, useState } from 'react'
import About from './About'
import { Get } from './basicapimethod'

export default function Home() {
  let [ listColums , setlistColums] = useState([])

  let colums = [
    {
      key: "userName",
      displayName: "userName"
    },
    {
      key: "email",
      displayName: "Email"
    },
    {
      key: "phone",
      displayName: "Contact #"
    },
    {
      key: "Webside",
      displayName: "Webside URL"
    },
    {
      key: "name",
      displayName: "fullName"
    }
  ]


  let getData = () => {
    Get('users').then(res => {
      console.log('nhi hai error' , res)
      setlistColums([...res.data])
      console.log([...res.data])
    }).catch(err => {
      console.log('error hai' , err)
    })
  }

  useEffect(() => {
    getData()
  } , [])
  return (
    <>
    <h1>Home</h1>
   <About title = 'shutUp' colums = {colums} dataSource={listColums}/> 
    </>

  )
}
