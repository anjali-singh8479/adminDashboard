import React from 'react'
import "../Styles/chart.css"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = ({title,grid,data,datakey}) => {
    

  return (
   <div className="chart">
    <h3 className="chart-title">{title}</h3>
    <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke='blue'></XAxis>
            <Line type="monotone" dataKey={datakey} stroke="blue"></Line>
            <Tooltip/>
         {grid &&   <CartesianGrid stroke="#e0dfdf"/>}
        </LineChart>
    </ResponsiveContainer>
   </div>
  )
}

export default Chart