import React from 'react'
import o1n from '../images/01d.png'

const TodayAt = ({forecast }) => {

  const temperature = forecast.main.temp.toFixed(0);
  const date = new Date(forecast.dt * 1000);

  const hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedTime = `${formattedHours} ${ampm}`;
  
  return (
    <div className='mx-2'>
        
        <li>
            <div className='c1 rounded-3 d-flex flex-column align-items-center p-2 mx-2 justify-content-between' style={{width:'100%', height:'100px'}}>
                <p className='m-0'>{formattedTime}</p>
                <img src={o1n} alt="" width='30px' height='30px'/>
                <p className='m-0'>{temperature}&deg;</p>
            </div>
        </li>
    </div>
  )
}

export default TodayAt