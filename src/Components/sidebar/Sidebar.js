import React, { useState } from 'react'
import "./Sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link as MuiLink, List,ListItem,ListItemButton,ListItemIcon,ListItemText,ListSubheader } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
export default function Sidebar() {
    const [dashboard,SetDashboard]=useState([
        {title:'Home',icon:<HomeIcon />,route:'/'},
        {title:'Analytics',icon:<AutoGraphIcon />},
        {title:'Sales',icon:<TrendingDownIcon />},
     
    ])
    const [quickMenu,SetQuickMenu]=useState([
        {title:'Users',icon:<PersonIcon />,route:'/users'},
        {title:'New Users',icon:<PersonIcon />,route:'/newUser'},
        {title:'Products',icon:<StorefrontIcon />,route:'/products'},
        {title:'Transactions',icon:<AttachMoneyIcon />},
        {title:'Reports',icon:<BarChartOutlinedIcon />},
     
    ])
    const [notifcations,SetNotifactions]=useState([
        {title:'Mail',icon:<MailOutlineIcon />},
        {title:'Feedback',icon:<DynamicFeedIcon />},
        {title:'Messages',icon:<ChatBubbleOutlineIcon />},
     
    ])
    const [staff,SetStaff]=useState([
        {title:'Manage',icon:<WorkOutlineIcon />},
        {title:'Analitics',icon:<AutoGraphIcon />},
        {title:'Reports',icon:<ReportIcon/>},
     
    ])
  return (
    <div className='sidebar' >
      
     <List   subheader={
        <ListSubheader sx={{backgroundColor:'#e2e2e2'}} component="div" id="nested-list-subheader">
          Dashboard
        </ListSubheader>
      }>
        {dashboard.map(item=>(
            <MuiLink key={item.title} component={RouterLink} to={item.route?item.route:null} sx={{textDecoration:'none',color:'black'}}>
              <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
            </MuiLink>
        ))}
     </List>
     <List   subheader={
        <ListSubheader sx={{backgroundColor:'#e2e2e2'}} component="div" id="nested-list-subheader">
          Quick Menu
        </ListSubheader>
      }>
        {quickMenu.map(item=>(
            <MuiLink key={item.title} component={RouterLink} sx={{textDecoration:'none',color:'black'}} to={item.route?item.route:null}>
              <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
            </MuiLink>
        ))}
     </List>
     <List   subheader={
        <ListSubheader sx={{backgroundColor:'#e2e2e2'}} component="div" id="nested-list-subheader">
          Notifcations
        </ListSubheader>
      }>
        {notifcations.map(item=>(
              <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
        ))}
     </List>
     <List   subheader={
        <ListSubheader sx={{backgroundColor:'#e2e2e2'}} component="div" id="nested-list-subheader">
          Staff
        </ListSubheader>
      }>
        {staff.map(item=>(
              <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
        ))}
     </List>

    </div>
  )
}
