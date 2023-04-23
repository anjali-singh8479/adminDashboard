import React from 'react'
import "../Styles/sidebar.css"
import {MdLineStyle,MdTimeline,MdBarChart,MdOutlineFeedback} from "react-icons/md"
import {FiTrendingUp,FiUser} from "react-icons/fi"
import {RiProductHuntLine} from "react-icons/ri"
import{BiDollar} from "react-icons/bi"
import {CiMail} from "react-icons/ci"
import {TbMessage} from "react-icons/tb"
const Sidebar = () => {
  return (
<>
<div className='sidebar'>
    <div className='sidebar-wrapper'>
        <div className='sidebar-menu'>
            <h3 className='sidebar-title'>Dashboard</h3>
            <ul className='sidebar-list className="sidebar-list-item"'>
                <li className="sidebar-list-item active">
                   <MdLineStyle/>
                   Home 
                </li>
                <li className="sidebar-list-item">
                   <MdTimeline/>
                   Analytics
                </li>
                <li className="sidebar-list-item">
                   <FiTrendingUp/>
                   Sales
                </li>
            </ul>
        </div>
        <div className='sidebar-menu'>
            <h3 className='sidebar-title'>Quick Menu</h3>
            <ul className='sidebar-list className="sidebar-list-item"'>
                <li className="sidebar-list-item">
                   <FiUser/>
                   user 
                </li>
                <li className="sidebar-list-item">
                   <RiProductHuntLine/>
                   Products
                </li>
                <li className="sidebar-list-item">
                   <BiDollar/>
                   Transactions
                </li>
                <li className="sidebar-list-item">
                   <MdBarChart/>
                  Reports
                </li>
            </ul>
        </div> 
        <div className='sidebar-menu'>
            <h3 className='sidebar-title'>Notifications</h3>
            <ul className='sidebar-list className="sidebar-list-item"'>
                <li className="sidebar-list-item">
                   <CiMail/>
                  Mail
                </li>
                <li className="sidebar-list-item">
                   <MdOutlineFeedback/>
                   Feedback
                </li>
                <li className="sidebar-list-item">
                   <TbMessage/>
                  Messages
                </li>
            </ul>
        </div> 
        <div className='sidebar-menu'>
            <h3 className='sidebar-title'>Stuffs</h3>
            <ul className='sidebar-list className="sidebar-list-item"'>
                <li className="sidebar-list-item">
                   <MdLineStyle/>
                  Manage
                </li>
                <li className="sidebar-list-item">
                   <MdTimeline/>
                   Analytics
                </li>
                <li className="sidebar-list-item">
                   <FiTrendingUp/>
                   Reports
                </li>
                
              
            </ul>
        </div> 
      
    </div>

</div>

</>
  )
}

export default Sidebar