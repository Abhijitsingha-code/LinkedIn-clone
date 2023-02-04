import React from 'react'
import './HeaderOptions.css'
import {useSelector } from 'react-redux';
import {selectUser } from '../features/userSlice';
import { Avatar } from '@mui/material'

const HeaderOptions = ({avatar,Icon,title, onClick}) => {

  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOptions'>
        {Icon && <Icon className='headerOptions_icon'/>}
        {avatar && <Avatar className='headerOptions_icon' src={user?.photoUrl}>{user?.email[0]}</Avatar>}
        <h4 className='headerOptions_title'>{title}</h4>
    </div>
  )
}

export default HeaderOptions;