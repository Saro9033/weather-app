import React from 'react'
import { Forecast } from './Forecast'
import o1d from '../images/01d.png'

import TodayAt from './TodayAt'

const Content = ({weather, fore, today}) => {


const getDate = function (dt) {
  const date = new Date(dt * 1000); 
  const options = {
    weekday: 'long', 
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate
}

const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;

  return `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};

const getSunrise=(sunrise)=>{
 return formatTime(sunrise)
}

const getSunset=(set)=>{
  return formatTime(set)
}

  return (
    <div>
      <div className='row mx-2 my-3 p-0 justify-content-around'>
        <div className="col-lg-4 m-0 col-sm-12 align-items-center">
          <div className='rounded-4 shadow c1 p-3'>
            <h6>Now</h6>
            <h1 >{weather && Math.floor(weather.main.temp - 273.15 )}°C
             <img src={o1d} alt=""width='54' />
            </h1>
            <p className='border-bottom text-light py-1 m-0 my-1'>{weather && weather.weather[0].description}</p>
            <p className='m-0 py-1'> <i className="fa-regular fa-calendar" style={{fontSize:'small', color:'white', padding:'0 3px'}}></i>{weather && getDate(weather.dt ) }</p>
            <p className='m-0 py-1'> <i className="fa-solid fa-location-dot" style={{fontSize:'small', color:'white', padding:'0 3px'}}></i>{weather && weather.name}</p>
          </div>
          <h6 className='my-3'>5 Days Forecast </h6>
          <div className='rounded-4 shadow my-4 c1 p-3'>
          <ul className='p-0 m-0'>
        {fore.map((dayData, index) => (
          <Forecast
            key={index}
            temp={dayData.forecasts[0].main.temp.toFixed(0)}
            date={new Date(dayData.forecasts[0].dt * 1000).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
            day={new Date(dayData.forecasts[0].dt * 1000).toLocaleDateString('en-US', {
              weekday: 'long',
            })}
          />
        ))}
      </ul>
          </div>
        </div>

        <div className="col-lg-8 p-4 m-0 py-0 col-sm-12 ">
          <h6 style={{ marginBottom: '15px' }}>Today Highlights</h6>
          <div className='rounded-4 shadow c1 p-3'>
            <p style={{fontSize:'small'}}>Sunrise & Sunset </p>
            <div className='d-flex align-items-center justify-content-around'>
              <div className='d-flex align-items-center justify-content-between' >
              <i className="fa-regular fa-sun" style={{fontSize:'xx-large', color:'white', padding:'0 5px'}}></i>
                <div className='mx-1'>
                  <p className='m-0'>Sunrise</p>
                  <h5 className='m-0'>{weather && getSunrise(weather.sys.sunrise )}</h5>
                </div>
              </div>

              <div className='d-flex align-items-center justify-content-between'>
              <i className="fa-regular fa-moon" style={{fontSize:'xx-large', color:'white', padding:'0 5px'}}></i>
                <div className='mx-1'>
                  <p className='m-0'>Sunset</p>
                  <h5 className='m-0'>{weather && getSunset(weather.sys.sunset)}</h5>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-4 shadow c1 my-4 p-3'>
            <div className='d-flex align-items-center justify-content-around'>
              <div className='d-flex flex-column  align-items-start p-2 rounded-2 justify-content-between'style={{background:'hsla(0, 0%, 0%, 0.1)',width:'40%'}} >
              <p style={{fontSize:'small'}}>Humdity </p>

             <div className='d-flex align-items-center justify-content-around '>  
              <i className="fa-brands fa-drupal" style={{fontSize:'xx-large', color:'white', padding:'0 5px'}}></i>
                  <h4 className='m-0 ms-auto' >{weather && weather.main.humidity}%</h4>
                  </div>
              </div>

              <div className='d-flex flex-column  align-items-start p-2 rounded-1 justify-content-between'style={{background:'hsla(0, 0%, 0%, 0.1)',width:'40%'}} >
              <p style={{fontSize:'small'}}>Visibility </p>

             <div className='d-flex align-items-center justify-content-between'>  
             <p className='m-0'>  <i className="fa-regular fa-eye" style={{fontSize:'xx-large', color:'white', padding:'0 5px'}}></i></p>
                  <h4 className='m-0'>{weather && weather.visibility}</h4>
                  </div>
              </div>
            
            </div>
          </div>


          <h6 style={{ marginTop: '25px' }}>Today at</h6>
          <div>
            <ul id='scrollNone' style={{listStyle:'none', overflowX:'auto', scrollbar:'none'}} className='d-flex align-items-center justify-content-between w-100 p-0 m-0'>
            {today.map((data, index) =>(
                      
                      <TodayAt key={index} forecast={data} />
            ))}
            </ul>
          </div>


        </div>

      </div>

    </div>
  )
}

export default Content