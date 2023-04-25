import React from "react";
import "../Styles/user.css";
import {MdPublish} from "react-icons/md"
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div className="user">
      <div className="usertitlecontainer">
        <h1 className="usertitle">Edit user</h1>
       <Link to="/newuser">
       <button className="userAddbutton">create</button>
       </Link>
      </div>
      <div className="usercontainer">
        <div className="usershow">
          <div className="usershowtop">
            <img className="usershow-image" src="/WhatsApp Image 2023-03-24 at 6.25.47 PM.jpeg"></img>
            <div className="usershowtoptitle">
                <span className="usershowusername">Anjali Singh</span>
                <span className="usershowusertitle"></span>
            </div>
          </div>
          <div className="usershowbottom">
            <span className="usershowtitle">Account details</span>
            <div className="usershowinfo">
            <FiUser className="showusericon"/>
            <span className="usershowinfotitle">annnaback99</span> 
            </div>
            <div className="usershowinfo">
            <FiUser className="showusericon"/>
            <span className="usershowinfotitle"></span> 5.06.1999
            </div>
            <span className="usershowtitle">contact details</span>
            <div className="usershowinfo">
            <FiUser className="showusericon"/>
            <span className="usershowinfotitle">+1234 23455 67</span> 
            </div>
            <div className="usershowinfo">
            <FiUser className="showusericon"/>
            <span className="usershowinfotitle">annnaback99@gmail.com</span> 
            </div>
            <div className="usershowinfo">
            <FiUser/>
            <span className="usershowinfotitle">Newyork | USA</span> 
            </div>
          </div>
        </div>
        <div className="userupdate">
            <span className="userupdatetitle">Edit</span>
            <form className="userupdateform">
                <div className="userupdateleft">
                    <div className="userupdateitem">
                        <label>username</label>
                        <input type="text" placeholder="annaback99" className="userupdateinput"></input>
                    </div>
                    <div className="userupdateitem">
                        <label>username</label>
                        <input type="text" placeholder="annaback99" className="userupdateinput"></input>
                    </div>
                    <div className="userupdateitem">
                        <label>Email</label>
                        <input type="text" placeholder="annaback99" className="userupdateinput"></input>
                    </div>
                    <div className="userupdateitem">
                        <label>phone</label>
                        <input type="text" placeholder="annaback99" className="userupdateinput"></input>
                    </div>
                    <div className="userupdateitem">
                        <label>address</label>
                        <input type="text" placeholder="annaback99" className="userupdateinput"></input>
                    </div>
                    <div className="userupdateitem">
                        <label>DOB</label>
                        <input type="text" placeholder="annaback99" className="userupdateinput"></input>
                    </div>
                </div>
                <div className="userupdateright">
                    <div className="userupdateupload">
                    <img className="userupdate-image" src="/WhatsApp Image 2023-03-24 at 6.25.47 PM.jpeg"></img>
                    <label htmlFor="file"><MdPublish/></label>
                    <input type="file" id="file" style={{display:"none"}}></input>
                    </div>
                    <button className="userupdatebutton">update</button>
                </div>

            </form>
        </div>
      </div>
    </div>
  );
};

export default User;
