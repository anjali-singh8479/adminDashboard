import React from 'react'
import "../Styles/widgetsLg.css"
const WidgetsLg = () => {
  const Button=({type})=>{
    return <button className={"widgetLg-button " + type}>{type}</button>

  }
  return (
    <div className='widgetLg'>
      <h3 className="widgetLg-title">Latest Transaction</h3>
      <table className='widgetLg-table'>
        <tr className='widgetLg-tr'>
          <th className='widgetLg-th'>Customer</th>
          <th className='widgetLg-th'>date</th>
          <th className='widgetLg-th'>Amount</th>
          <th className='widgetLg-th'>Status</th>
        </tr>
        <tr className='widgetLg-tr'>
          <td className='widgetLg-user'>
          <img classsName="widgetLg-image" src="WhatsApp Image 2023-03-24 at 6.25.47 PM.jpeg"></img>
          <span className='widgetLg-name'>Anjali singh</span>
          </td>
          <td className='widgetLg-date'> 2 june 2022</td>
          <td className="widgetLg-amount">$122</td>
        <td>
          <Button type="pending" />
        </td>

        </tr>
      
        <tr className='widgetLg-tr'>
          <td className='widgetLg-user'>
          <img classsName="widgetLg-image" src="WhatsApp Image 2023-03-24 at 6.25.47 PM.jpeg"></img>
          <span className='widgetLg-name'>Anjali singh</span>
          </td>
          <td className='widgetLg-date'> 2 june 2022</td>
          <td className="widgetLg-amount">$122</td>
        <td>
          <Button type="approved" />
        </td>

        </tr>
        <tr className='widgetLg-tr'>
          <td className='widgetLg-user'>
          <img classsName="widgetLg-image" src="WhatsApp Image 2023-03-24 at 6.25.47 PM.jpeg"></img>
          <span className='widgetLg-name'>Anjali singh</span>
          </td>
          <td className='widgetLg-date'> 2 june 2022</td>
          <td className="widgetLg-amount">$122</td>
        <td>
          <Button type="approved" />
        </td>

        </tr>
        <tr className='widgetLg-tr'>
          <td className='widgetLg-user'>
          <img classsName="widgetLg-image" src="WhatsApp Image 2023-03-24 at 6.25.47 PM.jpeg"></img>
          <span className='widgetLg-name'>Anjali singh</span>
          </td>
          <td className='widgetLg-date'> 2 june 2022</td>
          <td className="widgetLg-amount">$122</td>
        <td>
          <Button type="declined" />
        </td>

        </tr>
      </table>
    </div>
  )
}

export default WidgetsLg