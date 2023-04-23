import React from 'react'
import {BsArrowDown} from "react-icons/bs"
import {HiOutlineArrowLongUp} from "react-icons/hi2"
import "../Styles/featuredinfo.css"
const FeaturedInfo = () => {
  return (
<>
<div className='featuredinfo'>
    <div className='featuredinfo-wrapper'>
        <div className='featured-item'>
            <div className="featured-title">Revenue</div>
            <div className="featured-moneycontainer">
                <span className='featured-money'>$2,415</span>
                <span className='featured-moneyrate'>
                    -11.4 <BsArrowDown className='featured-icon  negative'/>
                </span>
            </div>
            <span className='featuredSub'> compared to Last month</span>
        </div>
    </div>
    <div className='featuredinfo-wrapper'>
        <div className='featured-item'>
            <div className="featured-title">Sales</div>
            <div className="featured-moneycontainer">
                <span className='featured-money'>$2,415</span>
                <span className='featured-moneyrate'>
                    -11.4 <BsArrowDown className="featured-icon negative"/>
                </span>
            </div>
            <span className='featuredSub'> compared to Last month</span>
        </div>
    </div>
    <div className='featuredinfo-wrapper'>
        <div className='featured-item'>
            <div className="featured-title">Cost</div>
            <div className="featured-moneycontainer">
                <span className='featured-money'>$2,415</span>
                <span className='featured-moneyrate'>
                    +2.4 <HiOutlineArrowLongUp className="featured-icon"/>
                </span>
            </div>
            <span className='featuredSub'> compared to Last month</span>
        </div>
    </div>

</div>
</>
  )
}

export default FeaturedInfo