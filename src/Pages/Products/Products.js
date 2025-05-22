import React, { useState } from 'react'
import "./Products.css"
import { products } from '../../datas'
import { DataGrid } from '@mui/x-data-grid'
import { Avatar, Typography,Button } from '@mui/material'
import {Link as MuiLink} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
export default function Products() {
  const [productsData,setProductsData]=useState(products)
  let productDelete = (id)=>{
    setProductsData(productsData.filter(product=>id!=product.id))
  }
const columns =[
  {field:'id',headerName:'ID',width:90},
  {
    field:'title',
    headerName:'Name',
    width:250,
    renderCell:(params)=>{
      return(
        <MuiLink component={RouterLink} to={`/product/${params.row.id}`} sx={{display:'flex', alignItems:'center',gap:'10px'}} underline='none'>
        <Avatar src={params.row.avatar}></Avatar>
        <Typography sx={{color:'black'}}>{params.row.title}</Typography>
        </MuiLink>
      )
    }
  },
  {field:'price',headerName:'Price',width:150},
  {
        field: 'action',
        headerName: 'Action',
        width: 250,
        renderCell: (params) => {
          return (
            <div className='action-in-datagrid'>
            <MuiLink component={RouterLink} to={`/product/${params.row.id}`}>
              <Button sx={{ backgroundColor: '#3bb077',borderRadius:'10px',height:'25px', color: '#fff', }}>EDIT</Button>
            </MuiLink>
            <DeleteOutlineOutlinedIcon sx={{color:'red',fontSize:'30px',cursor:'pointer'}} 
            onClick={()=>productDelete(params.row.id)}
            />
            </div>
          )
        }
      }

]
  const [page, setPage] = useState(0)
  return (
    <div  className='datagrid-container'>
    <DataGrid  rows={productsData} columns={columns} disableRowSelectionOnClick
  paginationModel={{ pageSize: 2,page }} 
  pagination
  onPaginationModelChange={(newModel) => setPage(newModel.page)}
  checkboxSelection
/>
    </div>
  )
}
