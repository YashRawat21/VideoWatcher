import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { showInputMessage } from '../utils/chatSlice'
import { generateRandomMessage, generateRandomName } from '../utils/helper'

const LiveChat = () => {
  const message = useSelector((store) => store.message.isMessage)
  const dispatch = useDispatch()
  useEffect(() => {
   const timer =  setInterval(() => {
      dispatch(showInputMessage({name:generateRandomName(),message:generateRandomMessage(12)}))
    },1000)
     return (() => {
      clearInterval(timer)
     })
  },[])
  return (
    <div>
        <div className='px-4'>
          {
            message.map((item , index) => {
              return (
                <ChatMessage key={index} item={item} />
              )
            })
          }
          
        </div>
    </div>
  )
}

export default LiveChat