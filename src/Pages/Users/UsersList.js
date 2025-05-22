import React, { useState } from 'react'
import './UsersList.css'
import { userRows } from './../../datas'
import { DataGrid } from '@mui/x-data-grid'
import { Link as RouterLink } from 'react-router-dom'
import { Avatar, Button, Link as MuiLink, Typography } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function UsersList() {
function userDelet(id){
  setDatas(datas.filter(data=>{
   return data.id != id
  }))
}


  const [datas, setDatas] = useState(userRows)

  const columns = [
    {
      field: 'id', headerName: 'ID', width: 90
    },
    {
      field: 'user', headerName: 'User', width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <MuiLink component={RouterLink} to='/' underline='none'>
            <div className='username-in-datagrid'>
              <Avatar sizes='small' src={params.row.avatar}></Avatar>
              <Typography sx={{ color: 'black' }}>{params.row.username}</Typography>
            </div>
          </MuiLink>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'transaction', headerName: 'Transaction', width: 160 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className='action-in-datagrid'>
          <MuiLink component={RouterLink} to={`/user/${params.row.id}`}>
            <Button sx={{ backgroundColor: '#3bb077',borderRadius:'10px',height:'25px', color: '#fff', }}>EDIT</Button>
          </MuiLink>
          <DeleteOutlineOutlinedIcon sx={{color:'red',fontSize:'30px',cursor:'pointer'}} 
          onClick={()=>userDelet(params.row.id)}
          />
          </div>
        )
      }
    }

  ]
  const [page, setPage] = useState(0)
  return (
    <div className='datagrid-container'>
      <DataGrid  rows={datas}   columns={columns.map((column) => ({
    ...column,
    align: "center",
    headerAlign: "center",
  }))} disableRowSelectionOnClick
  
  paginationModel={{ pageSize: 3,page }} 
  pagination
  onPaginationModelChange={(newModel) => setPage(newModel.page)}
  
      />


    </div>
  )
}
