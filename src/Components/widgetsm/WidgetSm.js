import React from 'react'
import { members } from '../../datas'
import { Typography, ListItem, IconButton, ListItemAvatar, ListItemText, List, Avatar } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./WidgetSm.css"

export default function WidgetSm() {
    return (

        <div className='widgetsm-container'>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                New Join Members
            </Typography>
            <List sx={{ width: '100%' }}>
                {members.map(member => (


                    <ListItem
                    key={member.id}
                        sx={{ display: 'flex', justifyContent: 'space-between' ,alignItems:'center'}}
                    >
                        <ListItemAvatar>
                            <Avatar src={member.img}>

                            </Avatar>
                        </ListItemAvatar>
                        <div className='widget-description'>
                            <ListItemText primary={member.username} sx={{}}/>
                            <ListItemText
                                primary={member.title}
                                sx={{ opacity: '0.5' }}
                            />
                        </div>
                        <IconButton edge="end" >
                            <VisibilityIcon />
                        </IconButton>
                    </ListItem>


                ))}
            </List>


        </div>
    )
}
