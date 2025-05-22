import React from 'react'
import './Home.css'
import Features from '../../Components/features/Features'
import Chart from '../../Components/chart/Chart'
import WidgetSm from '../../Components/widgetsm/WidgetSm'
import WidgetLg from '../../Components/widgetlg/WidgetLg'
export default function Home() {
  return (
    <div >
      <Features />
      <Chart />
      <div className='widgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
