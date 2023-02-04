import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Widgets.css'

const Widgets = () => {

    const widgetNews = (heading, subtittle)=>(
        <div className='widgets_news'>
            <div className="widgets_news_left">
                <FiberManualRecordIcon className='icon'/>
            </div>
            <div className="widgets_news_right">
                <h4>{heading}</h4>
                <p>{subtittle}</p>
            </div>
        </div>
    )


  return (
    <div className='widgets'>
        <div className="widgets_headers">
            <h3>LinkedIn News</h3>
            <InfoIcon/>
        </div>
        {widgetNews('Making Students future ready','Top News . 3,736 readers')}
        {widgetNews('Budget 2023: Tech and Startups','2d ago . 1,736 readers')}
        {widgetNews('Physics Wallah to hire 2,500','3d ago . 19,936 readers')}
        {widgetNews('How India Inc is using chatGPT','1d ago . 2,126 readers')}
        {widgetNews('The path ahead for green financing','1d ago')}
    </div>
  )
}

export default Widgets