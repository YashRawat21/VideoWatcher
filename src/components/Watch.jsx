import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {API_KEY} from '../constants/youtube';
import Avatar from 'react-avatar';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from './LiveChat';
import { useDispatch } from 'react-redux';
import { showInputMessage } from '../utils/chatSlice';


const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [singleVideo, setSingleVideo] = useState(null);
  const [input , setInput] =  useState("")
   const dispatch = useDispatch(showInputMessage())
const sendMessage = () => {
  dispatch(showInputMessage({name:"yash",message:input}))  //we want to show this message or input to ChatMessage Component
}

  const getSingleVideo = async () => {
    try {
      const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
      const data = await res.json();
      setSingleVideo(data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  useEffect(() => {
    getSingleVideo();
  }, [videoId]);

  useEffect(() => {
    if (singleVideo) {
      console.log(singleVideo);
    }
  }, [singleVideo]);

  return (
    <div className='flex w-[100%]'>
        <div className='flex w-[88%]'>
      <div className='flex w-full justify-center'>
        <div className='flex-1 ml-5 mt-5'>    
          <iframe 
            width="700" 
            height="400" 
            src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
          {singleVideo && <h1 className='font-bold text-lg'>{singleVideo.snippet.title}</h1>}
          <div className='flex items-center justify-between'>
                        <div className='flex items-center justify-between w-[45%]'>
                            <div className='flex'>
                                <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} />
                                <h1 className='font-bold ml-2'>{singleVideo?.snippet?.channelTitle}</h1>
                            </div>
                            <button className='px-4 py-1 font-medium bg-black text-white rounded-full'>Subscribe</button>
                        </div>
                        <div className='flex items-center w-[40%] justify-between mt-2 mr-6 gap-3'>
                            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                                <AiOutlineLike size="20px" className='mr-5' />
                                <AiOutlineDislike size="20px" />
                            </div>
                            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                                <PiShareFatLight size="20px" className='mr-2' />
                                <span>Share</span>
                            </div>
                            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                                <GoDownload />
                                <span>Download</span>
                            </div>
                        </div>
                    </div>
                </div>
        <div className=' mt-5 ml-[60px] rounded-lg h-fit px-2 py-2 border border-gray-300' >
            <div className='flex items-center justify-between '>
          <h1>Top Chat</h1>
          <BsThreeDotsVertical />
          </div>
          <div className='overflow-y-auto h-[28rem] p-4 flex flex-col-reverse'>
           <LiveChat />
          </div>
          <div className='flex items-center gap-3 border-t p-2'>
            <div>
          <Avatar githubHandle="sitebase" size={"20px"} round={true} className="cursor-pointer"/>
          </div>
          <div>
          <input value={input} onChange={(e) =>setInput(e.target.value)} type='text' placeholder='Send Message' className='px-2 border-b border-gray-300 outline-none'  />
          </div>
          <div>
          <LuSendHorizonal onClick={sendMessage} size={"20px"} className='bg-gray-200 cursor-pointer rounded-full ml-2' />
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Watch;
