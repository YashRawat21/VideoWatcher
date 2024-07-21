import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import {API_KEY} from '../constants/youtube';
const VideoCard = ({item}) => {
     const [icon,setIcon] = useState('')
    // const fetchChannelAvatar = async() => {
    //     const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
    //      const channelAvatar = await data.json()
    //      console.log(channelAvatar)
    //      setIcon(channelAvatar?.items[0]?.snippet?.thumbnails?.medium)   
    // }

  const fetchChannelAvatar = async () => {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`
      );
      const channelAvatar = await res.json();

      if (channelAvatar.items && channelAvatar.items.length > 0) {
        setIcon(channelAvatar.items[0].snippet.thumbnails.medium.url);
      } else {
        console.warn('No channel avatar found for channel ID:', item.snippet.channelId);
      }
    } catch (error) {
      console.error('Error fetching channel avatar:', error);
    }
  };

  useEffect(() => {
    fetchChannelAvatar();
  });
  
  return (
         
    <div className='mt-4 w-72 mx-9 cursor-pointer'>
        <img src={item.snippet.thumbnails.medium.url} alt='video thumbnail'/>
        <div className='flex mt-3'>
        <Avatar src={icon} size={"40px"} round={true} className="cursor-pointer object-cover mr-2"/>  
     <div className='ml-2 '>
    <h1 className='font-bold'>{item.snippet.title}</h1>
    <p className='text-gray-500'>{item.snippet.channelTitle}</p>
     </div>
    </div>
    </div>
  )
}

export default VideoCard