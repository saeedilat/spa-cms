import React from 'react'
import "./Chart.css"
import {datas} from '../../datas'
import { ResponsiveContainer, LineChart, Line ,XAxis ,Tooltip ,CartesianGrid} from 'recharts'
export default function Chart() {
    return (
        <div className='chart'>
            <h3 className='chart-title'>User Analytics</h3>
            <ResponsiveContainer width='100%' aspect={4}>
                <LineChart data={datas}>
                    <XAxis dataKey="name" stroke='#5550bd'/>
                    <Line dataKey="sale" stroke='#5550bd' type="monotone"/>
                    <Tooltip />
                    <CartesianGrid stroke='#e0dfdf' strokeDasharray={10}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
