import React from 'react'
import './Header.css'
import { Search } from '@mui/icons-material'
import HeaderOptions from './HeaderOptions'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from '../Firebase';
import { logout } from '../features/userSlice';
import { signOut } from 'firebase/auth';

const Header = () => {

  const dispatch = useDispatch();  

  const logoutOfApp=()=>{
    dispatch(logout());
    signOut(auth);
  }

  return (
    <div className='header'>
        <div className="header__left">
            <img src='https://cdn-icons-png.flaticon.com/512/408/408703.png' alt='LinkedIn'/>
            <div className="header_search">
                <Search/>
                <input placeholder='Search' type='text'/>
            </div>
        </div>

        <div className="header__right">
            <HeaderOptions Icon={HomeIcon} title='Home' />
            <HeaderOptions Icon={GroupIcon} title='My Network' />
            <HeaderOptions Icon={WorkIcon} title='Jobs' />
            <HeaderOptions Icon={MessageIcon} title='Messages' />
            <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
            <HeaderOptions avatar={true} title='me' onClick={logoutOfApp}/>
        </div>
    </div>
  )
}

export default Header