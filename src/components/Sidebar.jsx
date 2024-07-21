import React from 'react'

import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineSmartDisplay,
    MdOutlineWatchLater,
    MdThumbUpOffAlt,
    MdSettings,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball,
  } from "react-icons/md";
  import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
  import { FaRegCompass } from "react-icons/fa";
  import { GiFilmStrip } from "react-icons/gi";
import { useSelector } from 'react-redux';


const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: "Explore",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: "Your Videos",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: "Liked Videos",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: "Music",
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: "Sport",
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: "Gaming",
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: "Films",
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: "Settings",
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: "Report history",
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: "Help",
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: "Send feedback",
    },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];


const Sidebar = () => {
 const toggleSidebar = useSelector((store) => store.menu.isMenuOpen)
  if(!toggleSidebar) return null;
  return (
    <div className=' w-48  ml-4 mt-6 z-10 hover:overflow-y-scroll  overflow-x-hidden  h-[calc(100vh-4.625rem)] sticky top-0'>
        
       <ul className='ml-3 '>
        {
            mainLinks.map((x) => {
              return (
                <li className='flex gap-5 items-center hover:bg-gray-300  rounded-md'> 
                {x.icon} 
                  {x.name}
                </li>
              )  
            })
        }
       </ul> 

       <ul className='ml-3 mt-6'>
        {
            secondaryLinks.map((x) => {
                return (
                    <li className='flex gap-5 items-center hover:bg-gray-300  rounded-md'>
                        {x.icon}
                        {x.name}
                    </li>
                )
            })
        }
       </ul>
       <ul className='ml-3 mt-6'>
        {
           subscriptionLinks.map((x) => {
                return (
                    <li className='flex gap-5 items-center hover:bg-gray-300  rounded-md'>
                        {x.icon}
                        {x.name}
                    </li>
                )
            })
        }
       </ul>
       <ul className='ml-3 mt-6'>
        {
           helpLinks.map((x) => {
                return (
                    <li className='flex gap-5 items-center hover:bg-gray-300  rounded-md'>
                        {x.icon}
                        {x.name}
                    </li>
                )
            })
        }
       </ul>
      
       <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
        {textLinks[0].map((name) => {
            return <li key={name}>{name}</li>
        })}
       </ul>
       <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
        {textLinks[1].map((name) => {
            return <li key={name}>{name}</li>
        })}
       </ul>
       <span className='px-4 text-sm text-zinc-400'>&copy; 2022 Google</span>
        
       
    </div>
  )
}

export default Sidebar  