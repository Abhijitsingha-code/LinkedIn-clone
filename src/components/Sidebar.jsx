import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'


const Sidebar = () => {
    const user = useSelector(selectUser);

    const recentItem = (topic) =>{
        return (
            <div className='sidebar_recentItem'>
                <span className='sidebar_hass'>#</span>
                <p>{topic}</p>
            </div>
        )
    }

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.email[0]}</Avatar>
            <h3>{user.displayName}</h3>
            <h5>{user.email}</h5>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who Viewed You</p>
                <p className='sidebar_stat_count'>2,300</p>
            </div>
            <div className="sidebar_stat">
                <p>Views On Post</p>
                <p className='sidebar_stat_count'>2,300</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem("ReactJs")}
            {recentItem("HTML")}
            {recentItem("JavaScript")}
            {recentItem("Bootstrap")}
            {recentItem("TailWind CSS")}
            {recentItem("Python")}
        </div>
    </div>
  )
}

export default Sidebar