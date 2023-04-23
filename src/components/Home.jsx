import React from 'react'
import "../Styles/home.css"
import FeaturedInfo from './FeaturedInfo'
import Chart from "./Chart"
import {userdata} from "../dummydata"
import WidgetsLg from './WidgetsLg'
import WidgetsSm from './WidgetsSm'
const Home = () => {
  return (
    <div className='home'>
       <FeaturedInfo/>
       <Chart grid title="User Analytics" datakey="ActiveUser" data={userdata}/>
       <div className="homewidgets">
        <WidgetsLg/>
        <WidgetsSm/>
       </div>
    </div>
  )
}

export default Home