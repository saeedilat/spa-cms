import { Avatar, Button, Typography, TextField, Select, MenuItem, FormControl, InputLabel,Card,CardActionArea,CardContent,CardMedia } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Product.css'
import { productsData } from '../../datas'
import { LineChart, ResponsiveContainer, Tooltip, XAxis, Line } from 'recharts'
import { products } from '../../datas'
import UploadIcon from '@mui/icons-material/Upload';
export default function Product() {
    let param = useParams()
    const chosenproduct = products.filter(product => (product.id == param.productID))
    console.log(chosenproduct);


    return (

        <div className='product'>
            <div className='productheadercountainer'>
                <Typography variant='h3'>Product</Typography>
                <Link to='/newproduct'>
                    <Button sx={{ backgroundColor: 'teal', color: '#fff' }}>Create</Button>
                </Link>
            </div>

            <div className='producttop'>
                <div className='producttopleft'>
                    <ResponsiveContainer width='100%' aspect={3}>
                        <LineChart data={productsData}>
                            <XAxis dataKey="name" />
                            <Line dataKey="sale" stroke='#5550bd' type="monotone" />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>


                <div className='producttopright'>
                    <div className='producttoprightheader'>
                        <Avatar alt="Remy Sharp" src={`/${chosenproduct[0].avatar}`} />
                        <Typography variant='h6'>{chosenproduct[0].title} LapTop</Typography>
                    </div>


                    <div className='producttoprightdata'>
                        <span className='producttitledata'>ID:</span>
                        <span className='productdiscription'>132</span>
                    </div>
                    <div className='producttoprightdata'>
                        <span className='producttitledata'>Name:</span>
                        <span className='productdiscription'>{chosenproduct[0].title} LapTop</span>
                    </div> <div className='producttoprightdata'>
                        <span className='producttitledata'>Sales:</span>
                        <span className='productdiscription'>${chosenproduct[0].price}000</span>
                    </div> <div className='producttoprightdata'>
                        <span className='producttitledata'>Active:</span>
                        <span className='productdiscription'>Yes</span>
                    </div>
                    <div className='producttoprightdata'>
                        <span className='producttitledata'>In Stock:</span>
                        <span className='productdiscription'>No</span>
                    </div>
                </div>

            </div>

            <div className='productbottum'>
                <div className='productbottumleft'>
                    <TextField

                        label="Product Name"

                        variant="standard"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />

                    <FormControl >
                        <InputLabel id="demo-simple-select-helper-label">In Stock</InputLabel>

                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            // value={age}
                            label="In Stock"
                            // onChange={handleChange}
                            sx={{ width: '130px', height: '50px' }}
                        >

                            <MenuItem value={10}>Yes</MenuItem>
                            <MenuItem value={20}>No</MenuItem>

                        </Select>



                    </FormControl>



                    <FormControl >
                        <InputLabel id="demo-simple-select-helper-label">Active</InputLabel>

                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            // value={age}
                            label="Active"
                            // onChange={handleChange}
                            sx={{ width: '130px', height: '50px' }}
                        >

                            <MenuItem value={10}>Yes</MenuItem>
                            <MenuItem value={20}>No</MenuItem>

                        </Select>



                    </FormControl>


                </div>
                <div className='productbottumright'>
                    <Card sx={{ maxWidth: 345 ,boxShadow:'none',}}>
                        <CardActionArea sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'10px'}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`/${chosenproduct[0].avatar}`}
                                alt="green iguana"
                            />
                            <CardContent>
                              <UploadIcon />
                              
                            </CardContent>
                            <Button sx={{width:'100%',textAlign:'center',backgroundColor:'powderblue'}}>Update(Edit)</Button>
                        </CardActionArea>
                    </Card>

                </div>

            </div>
        </div>
    )
}
