import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import TopBar from './Components/TopBar/TopBar'
import { Grid } from '@mui/material'
import Sidebar from './Components/sidebar/Sidebar'

export default function App() {
  let router = useRoutes(routes)
  return (
    <>
      <TopBar />
      <Grid container>
        <Grid  size={2}  >
          <Sidebar />

        </Grid>
        <Grid  size={10} >
          {router}

        </Grid>
      </Grid>

    </>
  )
}

