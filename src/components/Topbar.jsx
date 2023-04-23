import React from "react";
import "../Styles/topbar.css"
import {IoMdNotificationsOutline,IoMdSettings} from "react-icons/io"
import {MdLanguage} from "react-icons/md"
const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar-wrapper">
          <div className="topbar-left">
            <div className="topbar-logo">
                DASHBOARD
            </div>
          </div>
          <div className="topbar-right">
           <div className="topbar-icons">
           <IoMdNotificationsOutline className="notify-icon"/>
           <span className="notify-badge badge">2</span>
           </div>
           <div className="topbar-icons">
           <MdLanguage className="language-icon"/>
           <span className="language-badge badge">2</span>
           </div>
           <div className="topbar-icons">
           <IoMdSettings className="notify-icon"/>
          
           </div>
           <img src="WhatsApp Image 2023-03-24 at 6.25.47 PM.jpeg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
