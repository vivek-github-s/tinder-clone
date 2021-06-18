import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarRateIcon from '@material-ui/icons/StarRate';
import  IconButton  from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className="swipeButton__repeat">
            <ReplayIcon  fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButton__left" >
            <CloseIcon  fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButton__star">
            <StarRateIcon  fontSize="large"/> 
            </IconButton>
            <IconButton className="swipeButton__right">
            <FavoriteIcon  fontSize="large"/>  
            </IconButton>
            <IconButton className="swipeButton__flash">
            <FlashOnIcon  fontSize="large"/> 
            </IconButton>
        </div>
    )
}

export default SwipeButtons
