import React from 'react'
import "./WidgetLg.css"
import { Typography, TableContainer,Table,TableHead,TableCell,TableRow,TableBody, Avatar,Button} from '@mui/material'
import { transaction } from '../../datas'
export default function WidgetLg() {
    return (
        <div className='widgetlg-container'>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Latest Transaction
            </Typography>
            <TableContainer>
      <Table sx={{ minWidth: 650,"& td, & th": { borderBottom: "none" }  }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{fontWeight:'800'}} align='left'>Customer</TableCell>
            <TableCell sx={{fontWeight:'800'}} align="left">Date</TableCell>
            <TableCell sx={{fontWeight:'800'}} align="left">Amout</TableCell>
            <TableCell sx={{fontWeight:'800'}} align="left">Status</TableCell>
   
          </TableRow>
        </TableHead>
        <TableBody>
          {transaction.map((action) => (
            <TableRow
              key={action.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell sx={{display:'flex',gap:'7px',alignItems:'center' }} align="left">
                <Avatar src={action.img}></Avatar>
                {action.customer}</TableCell>
              <TableCell align="left">{action.date}</TableCell>
              <TableCell align="left">{action.amout}</TableCell>
              <TableCell align="left">
              <Button sx={{height:'20px',width:'60px',fontSize:'10px'}}  variant={action.status==='Approved'?'contained':'outlined'} color={action.status==='Declined'?'error':'success'} >{action.status}</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    )
}
