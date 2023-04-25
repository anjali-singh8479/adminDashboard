 import React from "react";
import "../Styles/widgetsSm.css";
import {MdVisibility} from "react-icons/md"

const WidgetsSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSm-title">New Join Members</span>
      <ul className="widgetSm-list">
        <li className="widgetSm-item">
          <img
            className="widgetSm-image"
            src="WhatsApp Image 2023-03-24 at 6.25.47 PM.jpeg"
            alt="NA"
          ></img>
          <div className="widgetSm-user">
            <span className="widgetSm-username">Anjali Singh</span>
            <span className="widgetSm-usertitle">Software Engineer</span>
          </div>
          <button className="widgetSm-button"><MdVisibility/> Dispaly</button>
        </li>
        <li className="widgetSm-item">
          <img
            className="widgetSm-image"
            src="WhatsApp Image 2023-03-24 at 6.25.47 PM.jpeg"
            alt="NA"
          ></img>
          <div className="widgetSm-user">
            <span className="widgetSm-username">Anjali Singh</span>
            <span className="widgetSm-usertitle">Software Engineer</span>
          </div>
          <button className="widgetSm-button"><MdVisibility/> Dispaly</button>
        </li>
        <li className="widgetSm-item">
          <img
            className="widgetSm-image"
            src="WhatsApp Image 2023-03-24 at 6.25.47 PM.jpeg"
            alt="NA"
          ></img>
          <div className="widgetSm-user">
            <span className="widgetSm-username">Anjali Singh</span>
            <span className="widgetSm-usertitle">Software Engineer</span>
          </div>
          <button className="widgetSm-button"><MdVisibility/> Dispaly</button>
        </li>
        <li className="widgetSm-item">
          <img
            className="widgetSm-image"
            src="WhatsApp Image 2023-03-24 at 6.25.47 PM.jpeg"
            alt="NA"
          ></img>
          <div className="widgetSm-user">
            <span className="widgetSm-username">Anjali Singh</span>
            <span className="widgetSm-usertitle">Software Engineer</span>
          </div>
          <button className="widgetSm-button"><MdVisibility/> Dispaly</button>
        </li>
        <li className="widgetSm-item">
          <img
            className="widgetSm-image"
            src="WhatsApp Image 2023-03-24 at 6.25.47 PM.jpeg"
            alt="NA"
          ></img>
          <div className="widgetSm-user">
            <span className="widgetSm-username">Anjali Singh</span>
            <span className="widgetSm-usertitle">Software Engineer</span>
          </div>
          <button className="widgetSm-button"><MdVisibility/> Dispaly</button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetsSm;
