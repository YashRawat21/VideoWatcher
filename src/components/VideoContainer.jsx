import React, { useEffect, useState } from 'react'
import  { API_KEY,YOUTUBE_VIDEO_API } from '../constants/youtube'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setIsVideos } from '../utils/videoSlice'

const VideoContainer = () => {
  // const [videos , setVideos] = useState([])
  const dispatch = useDispatch()
  const videos = useSelector((store) => store.video.isVideos)
  const category = useSelector((store) => store.category. category)
  console.log(category)
  const fetchingYoutubeVideo = async () => {
    try {
        const res = await fetch(`${YOUTUBE_VIDEO_API}`);
         const data = await res.json()
        // console.log(data)
        // setVideos(data?.items)
        dispatch(setIsVideos(data?.items))
    
      
    } catch (error) {
        console.log(error);
    }

}
 const fetchVideoByKeyword = async(category) => {
  try{
   const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`)
   const data = await res.json()
    // console.log(data)
    dispatch(setIsVideos(data?.items))
  } catch(error) {
    console.log(error)
  }
 }

  useEffect(() => {
    if(category === "All") {
      fetchingYoutubeVideo()
    }else {
      fetchVideoByKeyword(category)
    }
  },[category])
  return (
    <div className='grid grid-cols-3 gap-3 w-full'>
      { 
      
        videos?.map((item) => {
          return (
            <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id }`} key={typeof item.id === 'object' ? item.id.videoId : videos.id } >
           <VideoCard key={item.id} item={item}/>
          </Link>
          )
        }) 

   
      }
    </div>
  )
}

export default VideoContainer