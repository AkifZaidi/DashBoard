import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import About from './About'
import { Get } from './basicapimethod'

export default function Contect() {
  let [commentList , setcommentList] = useState({})
  let Navigate = useNavigate()

  let saveValue = (id) => {
    Navigate(`/commentForm${id}`)
    console.log(id)
  }

  let colums = [
    {
      key: "", 
      displayField : (e) => {
       return  <button onClick={() => saveValue(e.id)}> Push </button>
     } ,
      displayName: "Action"
    },
    {
      key: "email",
      displayField : (e) => (<a href={`mailto:${e.email}`}>{e.email}</a>) ,
      searchAble: true,
      displayName: "Email"
    },
    {
      key: "name",
      searchAble: true,
      displayName: "Name"
    },
    {
      key: "body",
      displayName: "Message"
    },
    
  ]

  let getCommentsData = () => {
    Get('comments').then(res => {
      console.log(res)
      setcommentList([...res.data])
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getCommentsData()
  } ,[])

  return (
    <>
    <h1>Comments</h1>
    <About colums = {colums}
      dataSource = {commentList}
      title = 'comments'    
    />
    </>
    
  )
}
