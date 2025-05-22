import React, { useState } from 'react'
import "./Features.css"
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default function Features() {
    const [feature, setFeature] = useState([
        { title: 'Revanue', amount: '$2,415', result: -11.4, },
        { title: 'Sales', amount: '$4,415', result: -1.4 },
        { title: 'Cost', amount: '$2,225', result: 2.4 },
    ])
    return (
        <div className='features'>
            {feature.map(item => (
                <Card key={item.title} sx={{ cursor: 'pointer', borderRadius: '20px', mt: '20px' }}>
                    <CardActionArea
                        sx={{
                            py:'15px',
                            pl:'25px',
                            width:'300px',
                            height: '100%',
                            '&[data-active]': {
                                backgroundColor: 'action.selected',
                                '&:hover': {
                                    backgroundColor: 'action.selectedHover',
                                },
                            },
                        }}
                    >
                        <CardContent sx={{
                            width:'100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                             gap: '15px',
                             justifyContent:'start'
                        }}>
                            <Typography variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <div className='calculations'>
                                <Typography sx={{fontWeight:'600',fontSize:'30px'}}>{item.amount}</Typography>
                                <Typography sx={{display:'flex',alignItems:'center',gap:'5px',opacity:'0.7'}}>{item.result}  {item.result > 0 ? <ArrowUpwardIcon sx={{color:'green'}}/> : <ArrowDownwardIcon sx={{color:'red'}}/>}</Typography>
                              
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                compared to last month
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}

        </div>
    )
}
