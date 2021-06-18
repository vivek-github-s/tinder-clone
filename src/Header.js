import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import SmsIcon from '@material-ui/icons/Sms';
import  IconButton  from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from "react-router-dom";


export const Header = ({backButton}) => {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
            <IconButton onClick={()=>history.replace(backButton)}>
                    <ArrowBackIosIcon className="header__icon" fontSize="large"/>
            </IconButton> 
            ):(
                <>
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
                </>
            )}
            
            <Link to="/">
            <img 
            className="header__logo"
            src="https://globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531.png" 
            alt="tinder-logo"/>
            </Link>
           
            <Link to="/chat">
                <IconButton>
                        <SmsIcon  className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
           
            
        </div>
    )
}
