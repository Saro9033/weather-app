import React from 'react'
import o1n from '../images/01n.png'

export const Forecast = ({temp, date, day}) => {
  return (
    <div>
        <li className='forecaste d-flex align-items-center justify-content-between my-2'>
            <div className='d-flex align-items-center'>
              <img src={o1n} alt="o1n icon" width="30" height='30' />
              <h5 className='m-0 mx-1'>{temp}&deg;</h5> 
              </div>
             <p className='m-0'>{date}</p>
              <p className='m-0'>{day}</p></li>
    </div>
  )
}
