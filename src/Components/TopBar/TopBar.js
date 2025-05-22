import React from 'react'
import "./TopBar.css"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { Badge, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TopBar() {
    return (
        <div className='topbar'>
            <div className='topbar-container'>
                <div className='topleft'>
                    <Link to='/'>
                    <img className='logo' src='images/220005482.png' />
                    </Link>
                </div>
                <div className='topright'>
                    <Badge badgeContent={4} color='error'>
                        <NotificationsNoneOutlinedIcon />
                    </Badge>
                    <Badge badgeContent={2} color='error'>
                        <LanguageOutlinedIcon />
                    </Badge>
                    <SettingsIcon />
                    <Avatar alt="Remy Sharp" src="images/2.jpg" />
                </div>
            </div>
        </div>
    )
}
