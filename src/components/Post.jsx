import { Avatar } from '@mui/material'
import React,{ forwardRef } from 'react'
import './Post.css';
import InputOption from './InputOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';


const Post = forwardRef(({name,desc, message, photoUrl}, ref) => {

    return (
      <div ref={ref} className='post'>
          <div className="post_header">
              <Avatar src={photoUrl} >{name[0]}</Avatar>
              <div className="post_info">
                  <h4>{name}</h4>
                  <p>{desc}</p>
              </div>
          </div>
  
          <div className="post_body">
              <p>{message}</p>    
          </div>   
  
          <div className="post_buttons">
              <InputOption Icon={ThumbUpIcon} text="Like"/>
              <InputOption Icon={CommentIcon} text="Comment"/>
              <InputOption Icon={ShareIcon} text="Share"/>
              <InputOption Icon={SendIcon} text="Send"/>
          </div>     
      </div>
    )
  }
  )
export default Post