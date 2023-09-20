import React from 'react'
import homeImage from '../images/home_img_new.webp'



const Header = () => {

  return (
    <div className='bg-warning py-5 '>
        <div className='d-flex  align-items-start justify-content-around py-1 row ' >
            <div className='text-center py-5  col-12  col-lg-4 px-3 d-flex flex-column justify-content-center align-items-center'>
                <h1>India's Largest Bike Service Taxi</h1> 
                <p style={{fontSize:'15px', color:'lightBlack'}} className='lead' >Rapido is India’s first and fastest-growing Bike taxi app with a whopping 25 Million+ app downloads. We are now running operations in more than 100 cities. </p>
              <div className='d-flex '> 
              <button className='btn mx-1 btn-dark rounded-4 text-light px-3' style={{fontWeight:'bolder'}}>Download Rapido</button>
                <button className='btn mx-1 border-dark btn-outline-warning rounded-4 text-outline-warning px-3 ' style={{fontWeight:'bolder', color:'black'}}>Sign-up</button>
                </div> 
                </div> 
        
            <img src={homeImage} alt="homeImage" className='rounded-1 bg-warning  col-12 col-lg-5 justify-conent-center' 
            style={{width: '600px'}}/>
           
        </div> 
    </div>
  )
}

export default Header