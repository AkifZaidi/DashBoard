import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetById, Post } from './basicapimethod'

export default function CommentForm() {
  let [model , setModel] = useState({})
  let params = useParams()
  let By = () => {
    GetById('comments' , params.id).then(res => {
      console.log(res);
      setModel([...res.data])
    }).catch(err => {
    console.log(err);
    })
  }

  useEffect(() => {
    By()
  } , [])
  
  let good = () => {
    Post('comments' , model).then(res => {
      console.log(res)
    }).catch(erro => {
      console.log(erro)
    })
  }
  useEffect(() => {
  good()
}, [])
return (
  <>
  <h1>Form</h1>
  </>
  )
}
